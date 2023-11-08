import { ChakraProvider } from '@chakra-ui/react';
import { PrimeReactProvider } from 'primereact/api';
import { Provider } from 'react-redux';
import './App.css';
import Employee from './Employee';
import { Sidebar } from './Sidebar/Components/Sidebar';
import { store } from './store';
function App() {

  return (
    <>
      <Provider store={store}>
        <ChakraProvider>
          <PrimeReactProvider>
            <Sidebar>
              
                <Employee />
              
              
            </Sidebar>

          </PrimeReactProvider>
        </ChakraProvider>
      </Provider>
    </>
  )
}

export default App
