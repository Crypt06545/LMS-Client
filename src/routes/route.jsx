import { createBrowserRouter, Route } from "react-router-dom";
import Home from "@/pages/Home";
import MainLayout from "@/layouts/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>This is Error</h1>,
    children: [
      {path: "/",element: <Home />},
    ],
  },
]);

export default router;
