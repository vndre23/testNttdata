import { CheckCircleIcon, NotAllowedIcon } from '@chakra-ui/icons';
import { Button, FormControl, FormErrorMessage, FormLabel, Input, Stack, Textarea } from '@chakra-ui/react';
import { Dialog } from 'primereact/dialog';
import React from 'react';

export const ModalEmployee = ({ visible, handleClickClose,formik }) => {
    const footerContent = (
        <div>
            <Stack spacing={2} direction={'row'}>
                <Button rightIcon={<CheckCircleIcon />} colorScheme='green' >
                    Guardar
                </Button>
                <Button rightIcon={<NotAllowedIcon />} colorScheme='red' >
                    Cancelar
                </Button>
            </Stack>
        </div>
    );
    return (
        <Dialog
            header="Registro de Empleado"
            visible={visible}
            onHide={() => handleClickClose()}
            style={{ width: '50vw' }}
            breakpoints={{ '960px': '75vw', '641px': '100vw' }}
            modal={false}
            // footer={footerContent}
        >
            <form onSubmit={formik.handleSubmit}>
                <div className='formgrid grid'>
                    <div className='field col-12 md:col-6 lg:col-6'>
                        <FormControl isInvalid={formik.errors.dni} isRequired>
                            <FormLabel>DNI</FormLabel>
                            <Input
                                type='number'
                                placeholder='ingresa tu DNI'
                                id="dni"
                                name='dni'
                                onChange={formik.handleChange}
                                value={formik.values.dni}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.dni && formik.errors.dni && <FormErrorMessage>{formik.errors.dni}</FormErrorMessage>}
                            
                            
                        </FormControl>
                        
                    </div>
                    <div className='col-12 md:col-6 lg:col-6'>
                        <FormControl isInvalid={formik.errors.name} isRequired>
                            <FormLabel>Nombre</FormLabel>
                            <Input
                                type='text'
                                placeholder='ingresa tu nombre'
                                id='name'
                                name='name'
                                onChange={formik.handleChange}
                                value={formik.values.name}
                                onBlur={formik.handleBlur}
                            />
                        </FormControl>
                        {formik.touched.name && formik.errors.name && <FormErrorMessage>{formik.errors.name}</FormErrorMessage>}
                    </div>
                </div>
                <div className='formgrid grid'>
                    <div className='field col-12 md:col-6 lg:col-6'>
                        <FormControl isInvalid={formik.errors.numberPhone}>
                            <FormLabel>Número de telefono</FormLabel>
                            <Input
                                type='number'
                                placeholder='ingresa tu número de telefono'
                                id='numberPhone'
                                name='numberPhone'
                                onChange={formik.handleChange}
                                value={formik.values.numberPhone}
                                onBlur={formik.handleBlur}
                            />
                        </FormControl>
                        {formik.touched.numberPhone && formik.errors.numberPhone && <FormErrorMessage>{formik.errors.numberPhone}</FormErrorMessage>}
                    </div>
                    <div className='col-12 md:col-6 lg:col-6'>
                        <FormControl isInvalid={formik.errors.birthDate} isRequired>
                            <FormLabel>Fecha de nacimiento</FormLabel>
                            <Input
                                type='date'
                                placeholder='ingresa tu Fecha Nacimiento'
                                id='birthDate'
                                name='birthDate'
                                onChange={formik.handleChange}
                                value={formik.values.birthDate}
                                onBlur={formik.handleBlur}
                            />
                        </FormControl>
                        {formik.touched.birthDate && formik.errors.birthDate && <FormErrorMessage>{formik.errors.birthDate}</FormErrorMessage>}
                    </div>
                    <div className='col-12'>
                    <FormControl isInvalid={formik.errors.address}>
                            <FormLabel>Dirección</FormLabel>
                            <Textarea
                                placeholder='Ingresa tu dirección'
                                id='address'
                                name='address'
                                onChange={formik.handleChange}
                                value={formik.values.address}
                                onBlur={formik.handleBlur}
                                
                            />
                        </FormControl>
                        {formik.touched.address && formik.errors.address && <FormErrorMessage>{formik.errors.address}</FormErrorMessage>}
                    </div>
                </div>
                <div className='mt-4'>
            <Stack spacing={2} direction={'row'}>
                <Button rightIcon={<CheckCircleIcon />} colorScheme='green' type="submit">
                    Guardar
                </Button>
                <Button rightIcon={<NotAllowedIcon />} colorScheme='red' type="button" onClick={()=>handleClickClose()}>
                    Cancelar
                </Button>
            </Stack>
        </div>
            </form>
        </Dialog>
    )
}
