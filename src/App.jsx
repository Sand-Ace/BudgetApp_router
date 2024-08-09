import { createBrowserRouter, RouterProvider } from "react-router-dom";

// Pages
import MainLayout, { loader as MainLoader } from "./Layouts/main";
import DashBoard, { loader as dashBoardLoader } from "./Pages/Dashboard";
import LogoutAction from "./actions/Logout";
import Error from "./Pages/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: MainLoader,
    children: [
      {
        index: true,
        element: <DashBoard />,
        loader: dashBoardLoader,
        errorElement: <Error />,
      },
      { path: "logout", action: LogoutAction },
    ],
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
