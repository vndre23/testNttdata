import React from 'react';

import 'primeicons/primeicons.css';
export const Sidebar = (props) => {
  return (
    <>
        <div style={{height: '100vh', overflow:'hidden'}}>
            <div className='min-h-screen flex relative lg:static surface-ground' >
                <div className='h-screen hidden lg:block flex-shrink-0 absolute lg:static left-0 top-0 z-1 select-none' style={{width:'280px',backgroundColor:"#2E4990"}}>
                    <div className='flex flex-column h-full'>
                        <div className='flex align-items-center px-5 flex-shrink-0 border-bottom-1' style={{height: "60px",backgroundColor:"#805AD5"}}>
                            <span className='text-white font-bold'>TEST NTTDATA</span>
                        </div>
                        <div className='overflow-y-auto mt-3'>
                            <ul className='list-none p-3 m-0'>
                                <a className='p-ripple flex align-items-center cursor-pointer p-3 hover:bg-blue-900 border-round text-bluegray-100 hover:text-bluegray-50 transition-duration-150 transition-colors w-full'>
                                    <i className='pi pi-users'/>
                                    <span className='font-medium ml-2'>Empleados</span>
                                </a>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className='min-h-screen flex flex-column relative flex-auto'>
                    <div className='flex justify-content-between align-items-center px-5 surface-section shadow-2 relative lg:static border-bottom-1 surface-border' style={{height: "60px"}}>
                        <div className='flex'>

                        </div>
                       

                    </div>
                    <div className='p-5 flex flex-column flex-auto'>
                            <div className='border-2 surface-border border-round surface-section flex-auto p-4'>
                                {props.children}
                            </div>

                        </div>

                </div>
            </div>
        </div>
    
    </>
  )
}
