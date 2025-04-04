const API_URL = "https://jsonplaceholder.typicode.com";

export const getUsers = async () => {
  const res = await fetch(`${API_URL}/users`);
  return res.json();
};

export const getPosts = async () => {
  const res = await fetch(`${API_URL}/posts`);
  return res.json();
};

export const getComments = async () => {
  const res = await fetch(`${API_URL}/comments`);
  return res.json();
};

export const getPostById = async (id) => {
  const res = await fetch(`${API_URL}/posts/${id}`);
  return res.json();
};

export const getCommentById = async (id) => {
  const res = await fetch(`${API_URL}/comments/${id}`);
  return res.json();
};
