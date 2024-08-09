import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import DashBoard, { loader as dashBoardLoader } from "./Pages/Dashboard";
import Error from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DashBoard />,
    loader: dashBoardLoader,
    errorElement: <Error />,
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
