// library
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Pages
import MainLayout, { loader as MainLoader } from "./Layouts/main";
import DashBoard, {
  loader as dashBoardLoader,
  action as dashboardAction,
} from "./Pages/Dashboard";
import LogoutAction from "./actions/Logout";
import Error from "./Pages/Error";
import Expenses, { expensesLoader } from "./Pages/Expenses";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: MainLoader,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <DashBoard />,
        loader: dashBoardLoader,
        action: dashboardAction,
        errorElement: <Error />,
      },
      {
        path: "expenses",
        element: <Expenses />,
        loader: expensesLoader,
      },
      { path: "logout", action: LogoutAction },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      <ToastContainer />
    </div>
  );
}

export default App;
