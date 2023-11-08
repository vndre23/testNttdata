import { createSlice } from "@reduxjs/toolkit";

export const employeeSlice = createSlice({
    name: 'employee',
    initialState: {
        isLoadingEmployee:true,
        activeEmployee:null,
        employees: [],
    },
    reducers: {
        onLoadingEmployee:(state,{payload}) => {
            state.isLoadingEmployee=payload;
        },
        onSetActiveEmployee: ( state, { payload }) => {
            
            state.activeEmployee = payload;
            console.log(payload);
        },
        onAddNewEmployee: (state, {payload})=> {
            state.employees.push(payload);
        },
        onUpdateEmployee: ( state, { payload } ) => {
            state.employees = state.employees.map( employee => {
                if ( employee.id === payload.id ) {
                    return payload;
                }

                return employee;
            });
        },
        onLoadEmployee: (state, { payload = [] }) => {
            // payload.forEach( event => {
            //     const exists = state.events.some( dbEvent => dbEvent.id === event.id );
            //     if ( !exists ) {
            //         state.events.push( event )
            //     }
            // })
            state.employees=payload;
            console.log("payloads",payload);
        },
        onDeleteEvent: ( state ) => {
            
                state.employees = state.employees.filter( employee => employee.id !== state.activeEmployee.id );
                state.activeEmployee = null;
            
        },
    }
});

export const {
    onAddNewEmployee,
    onUpdateEmployee,
    onLoadEmployee,
    onSetActiveEmployee,
    onDeleteEvent,
    onLoadingEmployee

} = employeeSlice.actions;
