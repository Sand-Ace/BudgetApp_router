import { Outlet, useLoaderData } from "react-router-dom";
import NavBar from "../Components/Nav";
import layoutLogo from "../assets/wave.svg";
import { fetchData } from "../helper";

export default function MainLayout() {
  const { userName } = useLoaderData();
  return (
    <div className="layout">
      <NavBar userName={userName} />
      <main>
        <Outlet />
      </main>
      <img src={layoutLogo} alt="" />
    </div>
  );
}

export const loader = () => {
  const userName = fetchData("userName");
  return { userName };
};
