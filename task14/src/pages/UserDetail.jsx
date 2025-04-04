import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const UserDetail = () => {
  const { id } = useParams();  // Отримуємо ID з URL
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [id]);

  if (!user) return <div>Loading...</div>;

  return (
    <div>
      <h1>User Details</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Phone: {user.phone}</p>
      {/* Додайте інші деталі */}
    </div>
  );
};

export default UserDetail;

