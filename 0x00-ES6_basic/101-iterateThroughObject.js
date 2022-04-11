export default function iterateThroughObject(reportWithIterator) {
  let employeeString = '';
  for (const employee of reportWithIterator) {
    if (reportWithIterator.indexOf(employee) === reportWithIterator.length - 1) {
      employeeString += employee;
    } else {
      employeeString += `${employee} | `;
    }
  }

  return employeeString;
}
