import React from 'react';

// import { MdBuild } from '@chakra-ui/icons';
import { Column } from 'primereact/column';
import { DataTable } from 'primereact/datatable';
// import "primeicons/primeicons.css"; //icons
// import "primereact/resources/primereact.min.css"; //core css
import { DeleteIcon, EditIcon, RepeatClockIcon, Search2Icon, SmallAddIcon, ViewIcon } from '@chakra-ui/icons';
import { Button, IconButton, Input, InputGroup, InputLeftElement, Stack, Tooltip } from '@chakra-ui/react';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "./tableEmployee.css";
import "/node_modules/primeflex/primeflex.css";
const TableEmployee = ({
  handleClickUpdate,
  handleClickDelete,
  handleClickAdd,
  employees,
  handleClickViewOffice,
  handleClickAsigmentOffice,
  handleClickDetailOffice,
  globalFilter,
  setGlobalFilter,
}) => {




  const actionBodyTemplate = (rowData) => {
    return (<>
      <Stack direction='row' spacing={4}>
        <Tooltip label="Ver oficina(s)" aria-label='A tooltip'>
          <IconButton
            colorScheme='orange'
            aria-label='Call Segun'
            size='lg'
            icon={<ViewIcon />}
            onClick={() => handleClickDetailOffice(rowData)}
          />
        </Tooltip>
        <Tooltip label="Asignar oficina(s)" aria-label='A tooltip'>
          <IconButton
            colorScheme='teal'
            aria-label='Call Segun'
            size='lg'
            icon={<RepeatClockIcon />}
            onClick={() => handleClickAsigmentOffice(rowData)}
          />
        </Tooltip>
        <Tooltip label="Editar empleado" aria-label='A tooltip'>
          <IconButton
            colorScheme='yellow'
            aria-label='Call Segun'
            size='lg'
            icon={<EditIcon />}
            onClick={() => handleClickUpdate(rowData)}

          />
        </Tooltip>
        <Tooltip label="Borrar empleado" aria-label='A tooltip'>
          <IconButton
            colorScheme='red'
            aria-label='Call Segun'
            size='lg'
            icon={<DeleteIcon />}
            onClick={() => handleClickDelete(rowData)}

          />
        </Tooltip>
      </Stack>

    </>)
  };

  const HeaderTemplate = (
    <>
      <div className="flex justify-content-end row">
        <div className='col-6 pr-8'>

          <InputGroup>
            <InputLeftElement pointerEvents='none'>
              <Search2Icon color='gray.300' />
            </InputLeftElement>
            <Input type='text' placeholder='Buscar empleado' onChange={(e) => setGlobalFilter(e.target.value)} />
          </InputGroup>
        </div>
        <div className='col-6 flex justify-content-end'>
          <Stack spacing={3} direction={'row'}>
            <Button leftIcon={<SmallAddIcon />} colorScheme='green' variant='solid' onClick={() => handleClickAdd()}>
              Agregar empleado
            </Button>
            <Button leftIcon={<ViewIcon />} colorScheme='teal' variant='solid' onClick={() => handleClickViewOffice()}>
              Ver Oficinas
            </Button>
          </Stack>
        </div>


      </div>

    </>
  )

  return (
    <>
      {HeaderTemplate}
      <DataTable
        value={employees}
        className='table-principal'
        paginator
        rows={10}
        rowsPerPageOptions={[5, 10, 25]}
        globalFilter={globalFilter}
        dataKey="id"
        tableStyle={{ minWidth: '10rem', }}
        scrollable scrollHeight="400px"



      >
        <Column field="dni" header="DNI" headerClassName='header-table-principal border-round-left'></Column>
        <Column field="name" header="Nombre" headerClassName='header-table-principal'></Column>
        <Column field="numberPhone" header="Telefono" headerClassName='header-table-principal'></Column>
        <Column field="address" header="Dirección" headerClassName='header-table-principal'></Column>
        <Column field="birthDate" header="Fecha Nacimiento" headerClassName='header-table-principal'></Column>
        <Column header="" headerClassName='header-table-principal border-round-right' body={actionBodyTemplate} exportable={false}></Column>
      </DataTable>
    </>
  )
}

export default TableEmployee