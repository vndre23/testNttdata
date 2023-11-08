import { useDispatch, useSelector } from "react-redux";
import testNttDataApi from "../api/testNttDataApi";
import { convertBirthDate } from "../helpers/convertBirthDate";
import { onAddNewEmployee, onDeleteEvent, onLoadEmployee, onUpdateEmployee } from "../store/employee/employeeSlice";

export const useEmployeeStore = () => {
    const dispatch = useDispatch();
    const {employees} = useSelector(state=> state.employee);
    
    const startSavingEmployee =  async(newEmployee) => {
        if(newEmployee.id){
            const {data} = await testNttDataApi.put(`/employee/${newEmployee.id}`,newEmployee);
            dispatch(onUpdateEmployee({...newEmployee}));
        }else{
            const{data} = await testNttDataApi.post('/employee',newEmployee);
            console.log(data);
            dispatch(onAddNewEmployee({...newEmployee,id:data.id}));
        }
        
    }

    const loadData = async() => {
        try {
            const {data} = await testNttDataApi.get('/employee');
            const  empleados = convertBirthDate(data);
            console.log("=============",empleados);
            dispatch(onLoadEmployee(empleados));
            
            console.log(data)
        } catch (error) {
            console.log(`${error}`)
        }
    }

    const startDeletingEmployee = async(id) => {
        const {data} = await testNttDataApi.delete(`/employee/${id}`);
        dispatch(onDeleteEvent());
    }

    return {
        startSavingEmployee,
        loadData,
        employees,
        startDeletingEmployee,
    }
}