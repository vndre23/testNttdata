import { useDispatch, useSelector } from "react-redux";
import testNttDataApi from "../api/testNttDataApi";
import { onAddNewOffice, onDeleteOffice, onLoadOffice, onLoadingOffice, onUpdateOffice } from "../store/office/officeSlice";


export const useOfficeStore = () => {
    const dispatch = useDispatch();
    const {offices,isLoadingOffice} = useSelector(state=> state.office);
    
    const startSavingOffice =  async(newOffice) => {
        try {
            dispatch(onLoadingOffice(true));
            if(newOffice.id){
                const {data} = await testNttDataApi.put(`/office/${newOffice.id}`,newOffice);
                dispatch(onUpdateOffice({...newOffice}));
            }else{
                const{data} = await testNttDataApi.post('/office',newOffice);
                console.log(data);
                dispatch(onAddNewOffice({...newOffice,id:data.id}));
            }
            dispatch(onLoadingOffice(false));
        } catch (error) {
            console.log(`${error}`);
            dispatch(onLoadingOffice(false));
        }
        
        
    }

    const loadDataOffice = async() => {
        try {
            dispatch(onLoadingOffice(true));
            const {data} = await testNttDataApi.get('/office');
            dispatch(onLoadOffice(data));
            dispatch(onLoadingOffice(false));
        } catch (error) {
            console.log(`${error}`);
            dispatch(onLoadingOffice(false));
        }
    }

    const startDeletingOffice = async(id) => {
        try {
            dispatch(onLoadingOffice(true));
            const {data} = await testNttDataApi.delete(`/office/${id}`);
            dispatch(onDeleteOffice());
            dispatch(onLoadingOffice(false));
        } catch (error) {
            dispatch(onLoadingOffice(false));
        }
        
    }

    return {
        startSavingOffice,
        loadDataOffice,
        offices,
        startDeletingOffice,
        isLoadingOffice
    }
}