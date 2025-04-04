import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import Layout from "./pages/Layout"; 
import Home from "./pages/Home"; 
import Users from "./pages/Users"; 
import Posts from "./pages/Posts"; 
import Comments from "./pages/Comments";

const UserDetail = lazy(() => import("./pages/UserDetail"));
const PostDetail = lazy(() => import("./pages/PostDetail"));
const CommentDetail = lazy(() => import("./pages/CommentDetail"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/Home",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/posts",
        element: <Posts />,
      },
      {
        path: "/comments",
        element: <Comments />,
      },
      {
        path: "/user/:id",
        element: <UserDetail />,
      },
      {
        path: "/post/:id",
        element: <PostDetail />,
      },
      {
        path: "/comment/:id",
        element: <CommentDetail />,
      },
    ],
  },
]);

export default router;
