const API_URL = "https://jsonplaceholder.typicode.com";

// Отримати список користувачів
export const getUsers = async () => {
  const response = await fetch(`${API_URL}/users`);
  const data = await response.json();
  console.log("Users API response:", data);
  return data;
};

// Отримати список постів
export const getPosts = async () => {
    const response = await fetch(`${API_URL}/posts`);
    const data = await response.json();
    return data;  // Повертаємо всі пости
  };

// Отримати список коментарів
export const getComments = async () => {
  const response = await fetch(`${API_URL}/comments`);
  const data = await response.json();
  console.log("Comments API response:", data);
  return data;
};

