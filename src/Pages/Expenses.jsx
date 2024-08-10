import { useLoaderData } from "react-router-dom";
import { fetchData } from "../helper";
import Table from "../Components/Table";

const Expenses = () => {
  const { expenses } = useLoaderData();

  return (
    <div className="grid-lg">
      <h1>All Expenses</h1>

      {expenses && expenses.length > 0 ? (
        <div className="grid-md">
          <h2>
            Recent Expenses <small>{expenses.length} total</small>
          </h2>
          <Table
            expenses={expenses.sort((a, b) => b.createdAt - a.createdAt)}
          />
        </div>
      ) : (
        <p>No Expenses to show.</p>
      )}
    </div>
  );
};

export default Expenses;

export const expensesLoader = () => {
  const expenses = fetchData("expenses");
  return { expenses };
};
