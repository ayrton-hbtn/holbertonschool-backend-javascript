export default function createReportObject(employeesList) {
  const report = {
    allEmployees: employeesList,
    getNumberOfDepartments(departments) {
      return Object.keys(departments).length;
    },
  };
  return report;
}
