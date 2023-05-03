import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import Blog from "./components/Blog/Blog";
import ChefRecipes from "./components/ChefRecipes/ChefRecipes";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import "./index.css";
import Main from "./layouts/Main";
import AuthProvider from "./Provider/AuthProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("http://localhost:5000/chefs"),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/chef/:id",
        element: <ChefRecipes></ChefRecipes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/chef/${params.id}`),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
