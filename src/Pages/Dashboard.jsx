// rrd imports
import { useLoaderData } from "react-router-dom";

// helper function
import { fetchData } from "../helper";

export default function DashBoard() {
  const { userName } = useLoaderData();

  return (
    <div>
      <h1>{userName}</h1>
      DashBoard
    </div>
  );
}

export const loader = () => {
  const userName = fetchData("userName");
  return { userName };
};
