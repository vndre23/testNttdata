import { useDispatch, useSelector } from "react-redux";
import testNttDataApi from "../api/testNttDataApi";
import { onAddNewOffice, onDeleteOffice, onLoadOffice, onUpdateOffice } from "../store/office/officeSlice";


export const useOfficeStore = () => {
    const dispatch = useDispatch();
    const {offices} = useSelector(state=> state.office);
    
    const startSavingOffice =  async(newOffice) => {
        if(newOffice.id){
            const {data} = await testNttDataApi.put(`/office/${newOffice.id}`,newOffice);
            dispatch(onUpdateOffice({...newOffice}));
        }else{
            const{data} = await testNttDataApi.post('/office',newOffice);
            console.log(data);
            dispatch(onAddNewOffice({...newOffice,id:data.id}));
        }
        
    }

    const loadDataOffice = async() => {
        try {
            const {data} = await testNttDataApi.get('/office');
            dispatch(onLoadOffice(data));
            
            console.log("oficeeeeeeeeeeeeeeee",data)
        } catch (error) {
            console.log(`${error}`)
        }
    }

    const startDeletingOffice = async(id) => {
        const {data} = await testNttDataApi.delete(`/office/${id}`);
        dispatch(onDeleteOffice());
    }

    return {
        startSavingOffice,
        loadDataOffice,
        offices,
        startDeletingOffice,
    }
}