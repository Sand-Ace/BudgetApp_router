import {
  calculateSpentByBugdet,
  formatCurr,
  formatPercentage,
} from "../helper";

export default function BudgetItem({ budget }) {
  const { id, name, amount, color } = budget;
  const spent = calculateSpentByBugdet(id);

  console.log(spent);
  return (
    <div className="budget" style={{ "--accent": color }}>
      <div className="progress-text">
        <h3>{name}</h3>
        <p>{formatCurr(amount)} Budget</p>
      </div>
      <progress max={amount} value={spent}>
        {formatPercentage(spent / amount)}
      </progress>
      <div className="progress-text">
        <small>{formatCurr(spent)}</small>
        <small>{formatCurr(amount - spent)}</small>
      </div>
    </div>
  );
}
