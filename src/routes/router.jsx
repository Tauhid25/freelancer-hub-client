import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AddTask from "../pages/AddTask";
import BrowseTasks from "../pages/BrowseTasks";
import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ErrorPage from "../pages/ErrorPage";
import PrivateRoute from "./PrivateRoute";
import TaskDetails from "../pages/TaskDetails";
import MyPostedTasks from "../pages/MyPostedTasks";
import UpdateTask from "../pages/UpdateTask";
import Loading from "../pages/Loading";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        path: "/",
        hydrateFallbackElement:<Loading></Loading>,
        loader: () => fetch("https://freelancer-hub-server.vercel.app/featuredTasks"),
        Component: Home,
      },
      {
        path: "/addTask",
        element: (
          <PrivateRoute>
            <AddTask></AddTask>
          </PrivateRoute>
        ),
      },
      {
        path: "/browseTasks",
        hydrateFallbackElement:<Loading></Loading>,
        loader: () => fetch("https://freelancer-hub-server.vercel.app/tasks"),
        Component: BrowseTasks,
      },
      {
        path: "/taskDetails/:id",
        hydrateFallbackElement:<Loading></Loading>,
        loader: ({ params }) =>
          fetch(`https://freelancer-hub-server.vercel.app/tasks/${params.id}`),
        element: (
          <PrivateRoute>
            <TaskDetails></TaskDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedTasks",
        hydrateFallbackElement:<Loading></Loading>,
        loader: () => fetch("https://freelancer-hub-server.vercel.app/tasks"),
        element: (
          <PrivateRoute>
            <MyPostedTasks></MyPostedTasks>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateTask/:id",
        hydrateFallbackElement:<Loading></Loading>,
        loader: ({ params }) =>
          fetch(`https://freelancer-hub-server.vercel.app/tasks/${params.id}`),
        element: (
          <PrivateRoute>
            <UpdateTask></UpdateTask>
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/auth",
    Component: AuthLayout,
    children: [
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/register",
        Component: Register,
      },
    ],
  },
  {
    path: "/*",
    Component: ErrorPage,
  },
]);
