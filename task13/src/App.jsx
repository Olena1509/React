import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Users from './components/Users';
import UserDetail from './components/UserDetail';
import Posts from './components/Posts';
import PostDetail from './components/PostDetail';
import Comments from './components/Comments';
import CommentDetail from './components/CommentDetail';
import Forms from './components/Forms';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/users" element={<Users />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/post/:postId" element={<PostDetail />} /> 
        <Route path="/comments" element={<Comments />} />
        <Route path="/comment/:id" element={<CommentDetail />} />
        <Route path="/forms" element={<Forms />} />
      </Routes>
    </Router>
  );
}

export default App;
