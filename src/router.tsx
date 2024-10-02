import Home from "./pages/home/Home";
import { createHashRouter } from "react-router-dom";
import Users from "./pages/users/Users";
import Products from "./pages/products/Products";
import Login from "./pages/login/Login";
import User from "./pages/user/User";
import Product from "./pages/product/Product";
import Layout from "./components/layout/Layout";

export const router = createHashRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/users/:id",
        element: <User />,
      },
      {
        path: "/products/:id",
        element: <Product />,
      },
      {
        path: "*",
        element: <h3>404</h3>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
]);
