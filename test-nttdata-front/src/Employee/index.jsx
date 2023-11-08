import React, { useEffect } from 'react';
import { PageEmployee } from './Components/PageEmployee';
import { controller } from './Infraestructure/controller';

const index = () => {
  
  
  const {
    formik,
    
    handleClickUpdate,
    handleClickDelete,
    visible,
    handleClickClose,
    setGlobalFilter,
    handleClickAdd,
    globalFilter,
    visibleConfirm,
    onHideConfirm,
    cancelRef,
    isOpen,
    deleteEmployee,
    onClose,
    employees,
    loadData,
    formikOffice,
    handleClickOffice,
    visibleAddOffice,
    handleClickCloseOffice,
    handleClickAsigmentOffice,
    visibleAsigmentOffice,
    offices,
    selectedOffices,
    handleSelectionOffices,
    loadDataOffice,
    onHideAsigmentOffice,
    handleAssigmentOffice,
    visibleViewOffice,
    handleClickViewOffice,
    onHideViewOffice,
    visibleDetailOffice,
    handleClickDetailOffice,
    onHideDetailOffice,
    handleClickOfficeUpdate,
  } = controller();


  useEffect(() => {
    loadData()
    loadDataOffice();
  }, []);
  
  return (
    <>
      <PageEmployee
        handleClickUpdate={handleClickUpdate}
        handleClickDelete={handleClickDelete}
        visible={visible}
        handleClickClose={handleClickClose}
        setGlobalFilter={setGlobalFilter}
        handleClickAdd={handleClickAdd}
        globalFilter={globalFilter}
        formik={formik}
        visibleConfirm={visibleConfirm}
        onHideConfirm={onHideConfirm}
        cancelRef={cancelRef}
        isOpen={isOpen}
        onClose={onClose}
        deleteEmployee={deleteEmployee}
        employees={employees}
        formikOffice={formikOffice}
        handleClickOffice={handleClickOffice}
        visibleAddOffice={visibleAddOffice}
        handleClickCloseOffice={handleClickCloseOffice}
        handleClickAsigmentOffice={handleClickAsigmentOffice}
        visibleAsigmentOffice={visibleAsigmentOffice}
        offices={offices}
        selectedOffices={selectedOffices}
        handleSelectionOffices={handleSelectionOffices}
        onHideAsigmentOffice={onHideAsigmentOffice}
        handleAssigmentOffice={handleAssigmentOffice}
        visibleViewOffice={visibleViewOffice}
        handleClickViewOffice={handleClickViewOffice}
        onHideViewOffice={onHideViewOffice}
        visibleDetailOffice={visibleDetailOffice}
        handleClickDetailOffice={handleClickDetailOffice}
        onHideDetailOffice={onHideDetailOffice}
        handleClickOfficeUpdate={handleClickOfficeUpdate}
      />
    </>
  )
}

export default index