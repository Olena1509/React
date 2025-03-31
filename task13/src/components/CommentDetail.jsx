import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; // Для отримання параметра з URL
import { getComments } from "../service/api"; // Імпортуємо getComments

const CommentDetail = () => {
  const { id } = useParams(); // Отримуємо параметр id з URL
  const [comment, setComment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getComments()
      .then((data) => {
        const commentDetail = data.find((comment) => comment.id === parseInt(id)); // Знаходимо коментар по id
        setComment(commentDetail); // Встановлюємо коментар в стан
        setLoading(false); // Завантаження завершено
      })
      .catch((error) => {
        console.error("Error fetching comment details:", error);
        setLoading(false); // Завершуємо завантаження в разі помилки
      });
  }, [id]);

  if (loading) {
    return <h2>Loading comment details...</h2>;
  }

  if (!comment) {
    return <h2>Comment not found</h2>;
  }

  return (
    <div>
      <h1>Comment Detail</h1>
      <p>{comment.body}</p>
    </div>
  );
};

export default CommentDetail;
