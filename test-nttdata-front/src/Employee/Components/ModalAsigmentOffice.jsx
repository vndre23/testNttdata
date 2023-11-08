import { CheckCircleIcon, NotAllowedIcon, SmallAddIcon } from '@chakra-ui/icons'
import { Button, Stack } from '@chakra-ui/react'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dialog } from 'primereact/dialog'
import React from 'react'

export const ModalAsigmentOffice = ({ visible,offices,selectedOffices,handleSelectionOffices,onHideAsigmentOffice,handleAssigmentOffice,handleClickOffice }) => {
    const footerContent = (
        <div>
            <Stack spacing={2} direction={'row'}>
                <Button rightIcon={<CheckCircleIcon />} colorScheme='green' onClick={()=>handleAssigmentOffice()}>
                    Guardar
                </Button>
                <Button rightIcon={<NotAllowedIcon />} colorScheme='red' onClick={()=>onHideAsigmentOffice()}>
                    Cancelar
                </Button>
            </Stack>
        </div>
    );
    return (
        <>
            <Dialog
                header="Asignar Oficina"
                visible={visible}
                onHide={() => onHideAsigmentOffice()}
                style={{ width: '40vw' }}
                breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                modal={false}
                footer={footerContent}
            >
                <div className='mb-3 flex justify-content-end'>
                <Button leftIcon={<SmallAddIcon />} colorScheme='teal' variant='solid' onClick={() => handleClickOffice()}>
              Agregar Oficina
            </Button>
                </div>
                <DataTable value={offices}
                    selectionMode={'checkbox'}
                    selection={selectedOffices}
                    onSelectionChange={(e) => handleSelectionOffices(e)}
                    dataKey="id"
                    tableStyle={{ minWidth: '10rem' }}
                >
                    <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}  headerClassName='table-office border-round-left'></Column>
                    {/* <Column field="id" header="ID" headerClassName='table-office'></Column> */}
                    <Column field="name" header="Oficina" headerClassName='table-office border-round-right'></Column>
                </DataTable>
            </Dialog>
        </>
    )
}
