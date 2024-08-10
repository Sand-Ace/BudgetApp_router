// rrd imports
import { useLoaderData } from "react-router-dom";

// helper function
import { createBudget, createExpense, fetchData, wait } from "../helper";
import Intro from "../Components/Intro";
import { toast } from "react-toastify";
import AddBudgetForm from "../Components/AddBudgetForm";
import AddExpenseForm from "../Components/AddExpenseForm";
import BudgetItem from "../Components/BudgetItem";

export default function DashBoard() {
  const { userName, budgets } = useLoaderData();
  console.log(userName);

  return (
    <div>
      {userName ? (
        <div className="dashboard">
          <h2>
            Welcome back, <span className="accent">{userName}</span>
          </h2>
          <div className="grid-sm">
            {budgets && budgets.length > 0 ? (
              <div className="grid-lg">
                <div className="flex-lg">
                  <AddBudgetForm />
                  <AddExpenseForm budgets={budgets} />
                </div>
                <h2>Existing Budgets</h2>
                <div className="budgets">
                  {budgets.map((budget) => (
                    <BudgetItem key={budget.id} budget={budget} />
                  ))}
                </div>
              </div>
            ) : (
              <div className="grid-sm">
                <p>Personal budgetting is the secret to financial freedom.</p>
                <p>create a budget to get started</p>
                <AddBudgetForm />
              </div>
            )}
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
  return { userName, budgets };
};

//action
export async function action({ request }) {
  await wait();
  const data = await request.formData();
  const { _action, ...values } = Object.fromEntries(data);

  // creating new user
  if (_action === "newUser") {
    try {
      localStorage.setItem("userName", JSON.stringify(values.userName));
      return toast.success(`Welcome ${values.userName}`);
    } catch {
      throw new Error("There is problem while loggin in");
    }
  }

  // creating new budget
  if (_action === "newBudget") {
    console.log(values);
    try {
      createBudget({ name: values.newBudget, amount: values.newBudgetAmount });
      return toast.success("Budget created");
    } catch {
      throw new Error("Problem occured while creating budget");
    }
  }

  //creating new expenses
  if (_action === "createExpense") {
    try {
      // create expense
      createExpense({
        name: values.newExpense,
        amount: values.newExpenseAmount,
        budgetId: values.newExpenseBudget,
      });
      return toast.success(`Expense ${values.newExpense} created`);
    } catch {
      throw new Error("Problem occured while creating Expense");
    }
  }
}
