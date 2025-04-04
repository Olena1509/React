import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getCommentById } from "../service/api";

const CommentDetail = () => {
  const { id } = useParams();
  const [comment, setComment] = useState(null);

  useEffect(() => {
    getCommentById(id).then(setComment);
  }, [id]);

  if (!comment) return <p>Loading...</p>;

  return (
    <div>
      <h2>{comment.name}</h2>
      <p>{comment.body}</p>
      <p><strong>Email:</strong> {comment.email}</p>
    </div>
  );
};

export default CommentDetail;
