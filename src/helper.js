//wait helper
export const wait = () =>
  new Promise((res) => setTimeout(res, Math.random() * 2000));

// colors
const generateRandomColor = () => {
  const existingBudgetLength = fetchData("budgets")
    ? fetchData("budgets").length
    : 0;

  return `${existingBudgetLength * 34} 65% 50%`;
};

// Local storage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// delete item
export const deleteData = ({ key }) => {
  return localStorage.removeItem(key);
};

// create Budget
export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    createdAt: Date.now(),
    color: generateRandomColor(),
  };
  const storedBudgets = fetchData("budgets") || [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...storedBudgets, newItem])
  );
};

// create Expense
export const createExpense = ({ name, amount, budgetId }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    createdAt: Date.now(),
    budgetId: budgetId,
  };
  const storedExpenses = fetchData("expenses") || [];
  return localStorage.setItem(
    "expenses",
    JSON.stringify([...storedExpenses, newItem])
  );
};

// Formatting

//Format Currency
export const formatCurr = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "currency",
    currency: "USD",
  });
};

// format percentage
export const formatPercentage = (amount) => {
  return amount.toLocaleString(undefined, {
    style: "percent",
    minimumFractionDigits: 0,
  });
};

// total spent
export const calculateSpentByBugdet = (budId) => {
  const expenses = fetchData("expenses") || [];
  console.log(expenses);
  const budgetSpent = expenses.reduce((acc, expense) => {
    if (expense.budgetId !== budId) {
      return acc;
    } else {
      return (acc = acc + expense.amount);
    }
  }, 0);
  return budgetSpent;
};
