// pages/Users.jsx
import { useEffect, useState } from "react";
import { getUsers } from "../service/api"; // Перевір правильність імпорту

import { useNavigate } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const handleUserClick = (id) => {
    navigate(`/user/${id}`);  // Перехід до сторінки деталей користувача
  };

  return (
    <div>
      <h1>Users Page</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => handleUserClick(user.id)}>
            {user.name} ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
