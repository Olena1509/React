import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1 className="logo">MyApp</h1>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/users">Users</Link></li>
        <li><Link to="/posts">Posts</Link></li>
        <li><Link to="/comments">Comments</Link></li>
        <li><Link to="/forms">Forms</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
