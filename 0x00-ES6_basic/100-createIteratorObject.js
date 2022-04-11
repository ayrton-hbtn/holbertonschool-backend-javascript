export default function createIteratorObject(report) {
  const employeeIterator = [];
  for (const key in report.allEmployees) {
    if ({}.hasOwnProperty.call(report.allEmployees, key)) {
      for (const employee of report.allEmployees[key]) {
        employeeIterator.push(employee);
      }
    }
  }
  return employeeIterator;
}
