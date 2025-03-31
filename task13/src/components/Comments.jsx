import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Comments = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setComments(data));
  }, []);

  return (
    <div>
      <h1>Comments Page</h1>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <Link to={`/comment/${comment.id}`}>{comment.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Comments;
