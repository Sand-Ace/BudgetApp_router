import { formatCurr, formatDate } from "../helper";

const ExpenseItem = ({ expense }) => {
  const { name, amount, createdAt } = expense;
  return (
    <>
      <td>{name}</td>
      <td>{formatCurr(amount)}</td>
      <td>{formatDate(createdAt)}</td>
    </>
  );
};

export default ExpenseItem;
