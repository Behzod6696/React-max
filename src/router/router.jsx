import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/MainLyaut";
import Home from "../components/Home/Home";
import Catalog from "../components/Catolg/Catalog";
import Hero from "../components/Hero";
import AddMovie from "../AddMovie";
import EditMovie from "../EditMovie";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "catalog", element: <Catalog /> },
      { path: "movie/:id", element: <Hero /> },
      { path: "add", element: <AddMovie /> },
      { path: "edit/:id", element: <EditMovie /> },
    ]
  }
]);

export default router;