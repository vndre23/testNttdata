import { format } from "date-fns";

export const convertBirthDate = (employees = []) => {
    return employees.map(employee=> {
        employee.birthDate = format(new Date(employee.birthDate), 'yyyy-MM-dd')
        return employee;
    });
}
