// MyRef.jsx
import React, { useState, useRef } from "react";

const MyRef = () => {
  const [user, setUser] = useState(null);
  const userIdRef = useRef();

  const handleFetchUser = () => {
    const userId = userIdRef.current.value;
    if (userId) {
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => response.json())
        .then((data) => setUser(data))
        .catch((error) => console.error("Error fetching user:", error));
    }
  };

  return (
    <>
      <div>
        <input ref={userIdRef} type="number" placeholder="Enter user ID" />
        <button onClick={handleFetchUser}>Fetch User</button>
      </div>
      {user && (
        <div>
          <h2>User Details</h2>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
        </div>
      )}
    </>
  );
};

export default MyRef;
