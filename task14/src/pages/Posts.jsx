import { useEffect, useState } from "react";
import { getPosts } from "../service/api";
import { useNavigate } from "react-router-dom";

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getPosts().then(setPosts);
  }, []);

  return (
    <div>
      <h2>Posts</h2>
      {posts.slice(0, 10).map((p) => (
        <div
          key={p.id}
          onClick={() => navigate(`/post/${p.id}`)}
          style={{ cursor: "pointer", margin: "10px 0" }}
        >
          {p.title}
        </div>
      ))}
    </div>
  );
};

export default Posts;
