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

export const createBudget = ({ name, amount }) => {
  const newItem = {
    id: crypto.randomUUID(),
    name: name,
    amount: +amount,
    createdAt: Date.now(),
    color: generateRandomColor(),
  };
  const storedBudget = JSON.parse(localStorage.getItem("budgets")) || [];
  return localStorage.setItem(
    "budgets",
    JSON.stringify([...storedBudget, newItem])
  );
};

// delete item
export const deleteData = ({ key }) => {
  return localStorage.removeItem(key);
};
