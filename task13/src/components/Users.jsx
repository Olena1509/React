import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Імпортуємо Link для створення посилань
import { getUsers } from "../service/api"; // Імпортуємо getUsers
import './Users.css';

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching users:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="users-container">
      <h1>Users Page</h1>
      <ul className="user-list">
        {users.map((user) => (
          <li className="user-item" key={user.id}>
            <Link to={`/user/${user.id}`}>{user.name} ({user.email})</Link> {/* Створюємо посилання на деталі користувача */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
