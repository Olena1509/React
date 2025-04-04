import { useEffect, useState } from "react";
import { getComments } from "../service/api";
import { useNavigate } from "react-router-dom";


const Comments = () => {
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getComments().then(setComments);
  }, []);

  return (
    <div>
      <h2>Comments</h2>
      {comments.slice(0, 10).map((c) => (
        <div
          key={c.id}
          onClick={() => navigate(`/comment/${c.id}`)}
          style={{ cursor: "pointer", margin: "10px 0" }}
        >
          {c.name}
        </div>
      ))}
    </div>
  );
};

export default Comments;
