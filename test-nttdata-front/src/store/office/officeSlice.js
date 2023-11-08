import { createSlice } from "@reduxjs/toolkit";

export const officeSlice = createSlice({
    name: 'office',
    initialState: {
        isLoadingOffice:false,
        activeOffice:null,
        offices: [],
    },
    reducers: {
        onLoadingOffice:(state,{payload}) => {
            state.isLoadingOffice=payload;
        },
        onSetActiveOffice: ( state, { payload }) => {
            
            state.activeOffice = payload;
            
        },
        onAddNewOffice: (state, {payload})=> {
            state.offices.push(payload);
        },
        onUpdateOffice: ( state, { payload } ) => {
            state.offices = state.offices.map( office => {
                if ( office.id === payload.id ) {
                    return payload;
                }

                return office;
            });
        },
        onLoadOffice: (state, { payload = [] }) => {
            // payload.forEach( event => {
            //     const exists = state.events.some( dbEvent => dbEvent.id === event.id );
            //     if ( !exists ) {
            //         state.events.push( event )
            //     }
            // })
            state.offices=payload;
        },
        onDeleteOffice: ( state ) => {
            
                state.offices = state.offices.filter( office => office.id !== state.activeOffice.id );
                state.activeOffice = null;
            
        },
    }
});

export const {
    onSetActiveOffice,
    onAddNewOffice,
    onUpdateOffice,
    onLoadOffice,
    onDeleteOffice,
    onLoadingOffice

} = officeSlice.actions;
