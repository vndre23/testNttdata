import { EditIcon, SmallAddIcon } from '@chakra-ui/icons'
import { Button, IconButton, Stack, Tooltip } from '@chakra-ui/react'
import { Column } from 'primereact/column'
import { DataTable } from 'primereact/datatable'
import { Dialog } from 'primereact/dialog'
import React from 'react'

export const ModalViewOffice = ({ visibleViewOffice, offices, handleClickOffice, onHideViewOffice, title, viewAddButton,handleClickUpdate,handleClickDelete,isLoadingOffice }) => {

    const actionBodyTemplate = (rowData) => {
        return (<>
            <Stack direction='row' spacing={4}>

                <Tooltip label="Editar oficina" aria-label='A tooltip'>
                    <IconButton
                        colorScheme='yellow'
                        aria-label='Call Segun'
                        size='lg'
                        icon={<EditIcon />}
                        onClick={() => handleClickUpdate(rowData)}
                        isLoading={isLoadingOffice}

                    />
                </Tooltip>
                {/* <Tooltip label="Borrar oficina" aria-label='A tooltip'>
                    <IconButton
                        colorScheme='red'
                        aria-label='Call Segun'
                        size='lg'
                        icon={<DeleteIcon />}
                        onClick={() => handleClickDelete(rowData)}

                    />
                </Tooltip> */}
            </Stack>

        </>)
    };
    return (
        <>
            <Dialog
                header={title}
                visible={visibleViewOffice}
                onHide={() => onHideViewOffice()}
                style={{ width: '30vw' }}
                breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                modal={false}
            // footer={footerContent}
            >
                {viewAddButton && <div className='mb-3 flex justify-content-end'>
                    <Button leftIcon={<SmallAddIcon />} colorScheme='messenger' variant='solid' onClick={() => handleClickOffice()}>
                        Agregar Oficina
                    </Button>
                </div>}
                <DataTable
                    value={(offices.length===0) ? [{ "name": "trabajo remoto"}] : offices}
                    tableStyle={{ minWidth: '10rem' }}
                >
                    {/* <Column field="id" header="ID" headerClassName='table-office border-round-left'></Column> */}
                    <Column field="name" header="Oficina" headerClassName='table-office'></Column>
                    {
                        viewAddButton && <Column header="" headerClassName='table-office border-round-right' body={actionBodyTemplate} exportable={false}></Column>
                    }
                    
                </DataTable>

            </Dialog>
        </>
    )
}
