import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPosts } from '../service/api';  // Переконайтесь, що api.js правильно експортує getPosts()

const PostDetail = () => {
  const { postId } = useParams();  // Отримуємо ID з URL
  const [post, setPost] = useState(null);  // Для зберігання даних поста
  const [loading, setLoading] = useState(true);  // Стан для завантаження

  // Функція для завантаження даних
  useEffect(() => {
    const fetchPostDetails = async () => {
      setLoading(true);  // Показуємо "Loading..." перед отриманням даних
      try {
        const posts = await getPosts();  // Отримуємо всі пости
        const postData = posts.find((post) => post.id === parseInt(postId));  // Шукаємо конкретний пост за ID
        setPost(postData);  // Оновлюємо стан з даними поста
      } catch (error) {
        console.error('Error fetching post details:', error);
      } finally {
        setLoading(false);  // Прикінцево приховуємо "Loading..."
      }
    };

    fetchPostDetails();  // Викликаємо функцію для завантаження даних
  }, [postId]);  // Залежність від postId, оновлюється, коли змінюється ID

  if (loading) {
    return <h2>Loading...</h2>;  // Показуємо "Loading..." під час завантаження
  }

  if (!post) {
    return <h2>Post not found</h2>;  // Якщо пост не знайдений, виводимо повідомлення
  }

  // Повертаємо відображення деталей поста
  return (
    <div>
      <h1>Post Detail</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
};

export default PostDetail;
