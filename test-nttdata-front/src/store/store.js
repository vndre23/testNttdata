import { configureStore } from "@reduxjs/toolkit";
import { employeeSlice } from "./employee/employeeSlice";
import { officeSlice } from "./office/officeSlice";

export const store =  configureStore({
    reducer: {
        employee: employeeSlice.reducer,
        office: officeSlice.reducer,
    }
})