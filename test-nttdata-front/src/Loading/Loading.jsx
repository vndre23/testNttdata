import { ProgressSpinner } from 'primereact/progressspinner';
import React from 'react';
export const Loading = () => {
  return (
    <>
        <ProgressSpinner style={{width: '50px', height: '50px'}} strokeWidth="8" fill="var(--surface-ground)" animationDuration=".5s" />
    </>
  )
}
