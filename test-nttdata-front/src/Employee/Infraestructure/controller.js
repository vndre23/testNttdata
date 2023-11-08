import { useDisclosure } from "@chakra-ui/react";
import { useFormik } from "formik";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import * as Yup from 'yup';
import { useEmployeeStore } from "../../hooks/useEmployeeStore";
import { useOfficeStore } from "../../hooks/useOfficeStore";
import { onSetActiveEmployee } from "../../store/employee/employeeSlice";
export const controller = () => {

    // ================ table employee =====================
    const [globalFilter, setGlobalFilter] = useState('');
    //=============== modals views =======================
    const [visible, setVisible] = useState(false);
    const { isOpen, onOpen, onClose } = useDisclosure();
    const cancelRef = useRef();
    // ============= hook crud employe ==========================
    const {employees,startSavingEmployee,loadData,startDeletingEmployee,isLoadingEmployee} = useEmployeeStore();
    const dispatch = useDispatch();
    //============= table office =======================

    //=============modals office ======================
    const [visibleAddOffice, setVisibleAddOffice] = useState(false);
    const [visibleAsigmentOffice, setVisibleAsigmentOffice] = useState(false);
    const [visibleViewOffice,setVisibleViewOffice] = useState(false);
    const [visibleDetailOffice,setVisibleDetailOffice] = useState(false);
    //===============hook crud office =====================
    const {loadDataOffice, offices, startDeletingOffice, startSavingOffice,isLoadingOffice} = useOfficeStore();
    const [selectedOffices,setSelectedOffices] = useState(null);

    //================== handle click table Action =================
    const handleClickUpdate = (data) => {
        
        dispatch(onSetActiveEmployee(data));
        formik.setValues(data);

        console.log(data);
        setVisible(true);
    }
    const handleClickDelete = (data) => {
        console.log(data)
        dispatch(onSetActiveEmployee(data));
        formik.setValues(data);
        onOpen();
    }
    const handleClickClose= (data) => {
        setVisible(false);
        formik.resetForm();
    }
    
    const handleClickAdd = () => {
        setVisible(true);
    }
    const onHideConfirm = () => {
        setVisible(false);
        formik.resetForm();
        
    }

    // ======================= formik initial employee ===================
    const formik = useFormik({
        initialValues: {
            id:null,
            dni: '',
            name: '',
            numberPhone:'',
            address:'',
            birthDate: '',
            offices:[],
        },
        onSubmit: values => {
            console.log(values);
            createEmployee(values);
            
            
        },
        validationSchema:Yup.object({
            dni: Yup.string().min(8,'debes ingresar 8 digitos').max(8,'debes ingresar 8 digitos').required('Dato Requerido'),
            name: Yup.string().required('Dato Requerido'),
            birthDate: Yup.date().required('Dato Requerido')
            
        })
    });
    //=========================== actions CRUD Employee==========================
    const createEmployee = async (values) => {
        console.log('create',values);
        startSavingEmployee(values)
        setVisible(false);
        formik.resetForm();
    }
    const deleteEmployee = () => {
        console.log('delete', formik.values);
        startDeletingEmployee(formik.values.id);
        onClose();
        formik.resetForm();
    }

    // ================= handle click actions office ========================
    const handleClickOffice= (data)=>{
        console.log("office",data);
        
        setVisibleAddOffice(true);
        
    }
    const handleClickOfficeUpdate= (data)=>{
        console.log("office",data);
        formikOffice.setValues(data);
        setVisibleAddOffice(true);
        
    }
    const handleClickCloseOffice = () => {
        setVisibleAddOffice(false);
        formikOffice.resetForm();
    }
    const handleClickAsigmentOffice = (data)=> {
        formik.setValues(data);
        console.log(data);
        setSelectedOffices(data?.offices);
        setVisibleAsigmentOffice(true);
    }
    const handleSelectionOffices = (e) => {
        formik.setFieldValue("offices",e.value);
        console.log(e.value);
        setSelectedOffices(e.value);
    }
    const onHideAsigmentOffice = (e) => {
       setVisibleAsigmentOffice(false);
       formikOffice.resetForm();
    }
    const onHideViewOffice=()=> {
        setVisibleViewOffice(false);
    }
    const handleClickViewOffice = ()=>{
        setVisibleViewOffice(true);
    }
    const handleClickDetailOffice = (data)=>{
        console.log(data);
        formik.setValues(data);
        setVisibleDetailOffice(true);
    }
    const onHideDetailOffice = ()=>{
        formik.resetForm();
        setVisibleDetailOffice(false);
    }
    // ======================= formik initial office ===================
    const formikOffice = useFormik({
        initialValues: {
            id:null,
            name: '',
        },
        onSubmit: values => {
            console.log(values);
            createOffice(values);
        }
    });

    //====================== actions CRUD office =============================
    const createOffice = async (values) => {
        console.log('create',values);
        startSavingOffice(values)
        setVisibleAddOffice(false);
        formik.resetForm();
    }
    const deleteOffice = () => {
        
        startDeletingOffice(formikOffice.values.id);
        onClose();
        formik.resetForm();
    }
    const handleAssigmentOffice = () => {
        console.log(formik.values);
        
        startSavingEmployee(formik.values);
        setVisibleAsigmentOffice(false);
    }
    
    
    return {
        
        
        handleClickUpdate,
        handleClickDelete,
        handleClickClose,
        visible,
        setGlobalFilter,
        handleClickAdd,
        globalFilter,
        formik,
        onHideConfirm,

        //confimr dialog
        cancelRef,
        isOpen,
        onClose,
        deleteEmployee,
        employees,
        loadData,
        formikOffice,
        handleClickOffice,
        visibleAddOffice,
        handleClickCloseOffice,
        visibleAsigmentOffice,
        handleClickAsigmentOffice,
        offices,
        selectedOffices,
        handleSelectionOffices,
        loadDataOffice,
        onHideAsigmentOffice,
        handleAssigmentOffice,
        visibleViewOffice,
        onHideViewOffice,
        handleClickViewOffice,
        visibleDetailOffice,
        handleClickDetailOffice,
        onHideDetailOffice,
        handleClickOfficeUpdate,
        isLoadingEmployee,
        isLoadingOffice,
    }
}
