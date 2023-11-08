import { useDispatch, useSelector } from "react-redux";
import testNttDataApi from "../api/testNttDataApi";
import { convertBirthDate } from "../helpers/convertBirthDate";
import { onAddNewEmployee, onDeleteEvent, onLoadEmployee, onLoadingEmployee, onUpdateEmployee } from "../store/employee/employeeSlice";

export const useEmployeeStore = () => {
    const dispatch = useDispatch();
    const { employees, isLoadingEmployee } = useSelector(state => state.employee);

    const startSavingEmployee = async (newEmployee) => {
        try {
            dispatch(onLoadingEmployee(true));
            if (newEmployee.id) {

                const { data } = await testNttDataApi.put(`/employee/${newEmployee.id}`, newEmployee);
                dispatch(onUpdateEmployee({ ...newEmployee }));

            } else {
                const { data } = await testNttDataApi.post('/employee', newEmployee);
                console.log(data);
                dispatch(onAddNewEmployee({ ...newEmployee, id: data.id }));
            }
            dispatch(onLoadingEmployee(false));
        } catch (error) {
            console.log(`${error}`);
            dispatch(onLoadingEmployee(false));
        }


    }

    const loadData = async () => {
        try {
            dispatch(onLoadingEmployee(true));
            const { data } = await testNttDataApi.get('/employee');
            const empleados = convertBirthDate(data);
            console.log("=============", empleados);
            dispatch(onLoadEmployee(empleados));
            dispatch(onLoadingEmployee(false));
            console.log(data)
        } catch (error) {
            console.log(`${error}`)
        }
    }

    const startDeletingEmployee = async (id) => {
        try {
            dispatch(onLoadingEmployee(true));
            const { data } = await testNttDataApi.delete(`/employee/${id}`);
            dispatch(onDeleteEvent());
            dispatch(onLoadingEmployee(false));
        } catch (error) {
            dispatch(onLoadingEmployee(false));
        }
        
    }

    return {
        startSavingEmployee,
        loadData,
        employees,
        startDeletingEmployee,
        isLoadingEmployee,
    }
}