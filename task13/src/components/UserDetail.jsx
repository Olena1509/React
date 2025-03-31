import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getUsers } from "../service/api";

const UserDetail = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers().then((users) => {
      const selectedUser = users.find((user) => user.id === parseInt(id));
      setUser(selectedUser);
      setLoading(false);
    });
  }, [id]);

  if (loading) return <h2>Loading...</h2>;

  return user ? (
    <div>
      <h1>{user.name}</h1>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      <p>Website: {user.website}</p>
    </div>
  ) : (
    <h2>User not found</h2>
  );
};

export default UserDetail;
