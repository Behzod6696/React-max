import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { MoveProvaider } from "./MovieContex";

function MainLayout() {
  return (
    <MoveProvaider>
      <Header />
      <main>
        <Outlet />
      </main>
    </MoveProvaider>
  );
}

export default MainLayout;