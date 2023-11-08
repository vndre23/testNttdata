import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons'
import { Button, FormControl, FormLabel, Input, Stack } from '@chakra-ui/react'
import { Dialog } from 'primereact/dialog'
import React from 'react'

export const ModalAddOffice = ({ formik, handleClickCloseOffice,visibleAddOffice}) => {
    
    return (
        <>
            <Dialog
                header="Registro de Oficina"
                visible={visibleAddOffice}
                onHide={() => handleClickCloseOffice()}
                style={{ width: '30vw' }}
                breakpoints={{ '960px': '75vw', '641px': '100vw' }}
                modal={false}
            // footer={footerContent}
            >
                <form onSubmit={formik.handleSubmit}>
                    <div className='formgrid grid'>
                        <div className='field col-12'>
                            <FormControl>
                                <FormLabel>Oficina</FormLabel>
                                <Input
                                    type='text'
                                    placeholder='ingresa el nombre de una oficina'
                                    id="name"
                                    name='name'
                                    onChange={formik.handleChange}
                                    value={formik.values.name}
                                />
                            </FormControl>
                        </div>

                    </div>

                    <div className='mt-4'>
                        <Stack spacing={2} direction={'row'}>
                            <Button rightIcon={<CheckCircleIcon />} colorScheme='green' type="submit">
                                Guardar
                            </Button>
                            <Button rightIcon={<NotAllowedIcon />} colorScheme='red' type="button" onClick={() => handleClickCloseOffice()}>
                                Cancelar
                            </Button>
                        </Stack>
                    </div>
                </form>

                
            </Dialog>
        </>
    )
}
