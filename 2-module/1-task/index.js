/**
 * Складываем зарплаты
 * @param {Object} salaries - объект зарплат
 * @returns {Number}
 */
function sumSalary(salaries) {
  let x = 0;
  for (let key in salaries) {
    if (typeof salaries[key] === 'number') {
     x = x + salaries[key];
    }
  }
  return x;
};