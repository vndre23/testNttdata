import React from 'react'
import { AlertDeleteEmployee } from './AlertDeleteEmployee'
import { ModalAddOffice } from './ModalAddOffice'
import { ModalAsigmentOffice } from './ModalAsigmentOffice'
import { ModalEmployee } from './ModalEmployee'
import { ModalViewOffice } from './ModalViewOffice'
import TableEmployee from './TableEmployee'

export const PageEmployee = ({
    
    handleClickUpdate,
    handleClickDelete,
    employees,
    //modal
    visible,
    handleClickClose,
    formik,

    //header
    setGlobalFilter,
    globalFilter,
    handleClickAdd,


    //confirm
    cancelRef,
    isOpen,
    deleteEmployee,
    onClose,

    //
    formikOffice,
    handleClickOffice,
    visibleAddOffice,
    handleClickCloseOffice,
    handleClickAsigmentOffice,
    visibleAsigmentOffice,
    offices,
    selectedOffices,
    handleSelectionOffices,
    onHideAsigmentOffice,
    handleAssigmentOffice,
    visibleViewOffice,
    handleClickViewOffice,
    onHideViewOffice,
    visibleDetailOffice,
    handleClickDetailOffice,
    onHideDetailOffice,
    handleClickOfficeUpdate,
}) => {
    
    return (
        <>


            <TableEmployee
                handleClickUpdate={handleClickUpdate}
                handleClickDelete={handleClickDelete}
                globalFilter={globalFilter}
                setGlobalFilter={setGlobalFilter}
                handleClickAdd={handleClickAdd}
                employees={employees}
                handleClickOffice={handleClickOffice}
                handleClickAsigmentOffice={handleClickAsigmentOffice}
                handleClickViewOffice={handleClickViewOffice}
                handleClickDetailOffice={handleClickDetailOffice}

            />

            <ModalEmployee
                formik={formik}
                visible={visible}
                handleClickClose={handleClickClose}
            />

            <AlertDeleteEmployee
                cancelRef={cancelRef}
                isOpen={isOpen}
                deleteEmployee={deleteEmployee}
                onClose={onClose}
            />

            <ModalViewOffice
                visibleViewOffice={visibleViewOffice}
                offices={offices}
                handleClickOffice={handleClickOffice}
                onHideViewOffice={onHideViewOffice}
                title="Mis Oficinas"
                viewAddButton={true}
                handleClickUpdate={handleClickOfficeUpdate} 
                
            />

            <ModalViewOffice
                visibleViewOffice={visibleDetailOffice}
                offices={formik.values.offices}
                handleClickOffice={handleClickOffice}
                viewAddButton={false}
                onHideViewOffice={onHideDetailOffice}
                title={`${formik.values.name} se asigno las oficinas`}
                
            />

            <ModalAddOffice
                formik={formikOffice}
                visibleAddOffice={visibleAddOffice}
                handleClickCloseOffice={handleClickCloseOffice}
                
                
            />

            <ModalAsigmentOffice
                visible={visibleAsigmentOffice}
                offices={offices}
                selectedOffices={selectedOffices}
                handleSelectionOffices={handleSelectionOffices}
                onHideAsigmentOffice={onHideAsigmentOffice}
                handleAssigmentOffice={handleAssigmentOffice}
                handleClickOffice={handleClickOffice}
            />
        </>
    )
}
