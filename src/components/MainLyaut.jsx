import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import { MoveProvaider } from "./MovieContex";


function MainLayout() {
  return (
    <MovieProvider>
      <Header />

      <main>
        <Outlet />
      </main>
    </MovieProvider>
  );
}

export default MainLayout;