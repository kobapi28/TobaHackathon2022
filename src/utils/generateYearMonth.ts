export const generateYearMonth = (date: Date) => {
  return `${date.getFullYear()}.${('0' + (date.getMonth() + 1)).slice(-2)}`;
};
