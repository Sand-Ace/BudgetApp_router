// rrd imports
import { useLoaderData } from "react-router-dom";

// helper function
import { createBudget, fetchData, wait } from "../helper";
import Intro from "../Components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../Components/AddBudgetForm";

export default function DashBoard() {
  const { userName } = useLoaderData();

  return (
    <div>
      {userName ? (
        <div className="dashboard">
          <h2>
            Welcome back, <span className="accent">{userName}</span>
          </h2>
          <div className="grid-sm">
            {/* {budgets ? ():()} */}
            <div className="grid-lg">
              <div className="flex-lg">
                <AddBudgetForm />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <Intro />
      )}
    </div>
  );
}

// loader
export const loader = () => {
  const userName = fetchData("userName");
  const budgets = fetchData("budgets");
  console.log(userName, budgets);
  return { userName, budgets };
};

//action
export async function action({ request }) {
  await wait();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome ${values.userName}`);
    } catch {
      throw new Error("There is problem while loggin in");
    }
  }
  if (_action === "newBudget") {
    console.log(values);
    try {
      createBudget({ name: values.newBudget, amount: values.newBudgetAmount });
      return toast.success("Budget created");
    } catch {
      throw new Error("Problem occured while creating budget");
    }
  }
}
