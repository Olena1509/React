import { Outlet, NavLink } from "react-router-dom";
import Home from './Home';
import Users from './Users';
import Posts from './Posts';


const Layout = () => {
  return (
    <>
      <nav style={{ padding: "10px", background: "#f0f0f0" }}>
        <NavLink to="./Home">Home</NavLink> |{" "}
        <NavLink to="./users">Users</NavLink> |{" "}
        <NavLink to="./posts">Posts</NavLink> |{" "}
        <NavLink to="./comments">Comments</NavLink>
      </nav>
      <hr />
      <Outlet />
    </>
  );
};

export default Layout;