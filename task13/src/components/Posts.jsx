import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { getPosts } from "../service/api"; // Імпортуємо функцію getPosts

const Posts = () => {
  // Стан для збереження постів та завантаження
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Викликаємо getPosts при завантаженні компонента
  useEffect(() => {
    // Отримуємо пости
    getPosts()
      .then((data) => {
        setPosts(data); // Зберігаємо отримані пости в стан
        setLoading(false); // Завантаження завершено
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
        setLoading(false); // Встановлюємо статус завантаження в false навіть при помилці
      });
  }, []); // Пустий масив означає, що ефект спрацює тільки один раз при завантаженні компонента

  // Якщо дані ще завантажуються, показуємо індикатор
  if (loading) {
    return <h2>Loading...</h2>;
  }

  // Виводимо пости
  return (
    <div>
      <h1>Posts Page</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/post/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
