import {
  createBrowserRouter
} from "react-router-dom";
import MainLayout from "./MainLyaut";
import Home from "./Home/Home";
import Catalog from "./Catolg/Catalog";
import Hero from "./Hero";
import AddMovie from "../AddMovie";
import EditMovie from "../EditMovie";



const Router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        index: true,
        element: <Home />
      },

      {
        path: "catalog",
        element: <Catalog />
      },

      {
        path: "movie/:id",
        element: <Hero />
      },

      {
        path: "add",
        element: <AddMovie />
      },

      {
        path: "edit/:id",
        element: <EditMovie />
      },


    ]
  }
]);

export default Router;