// src/main.tsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider } from '@chakra-ui/react'
import App from './App'
import './index.css'

// Tell TS the element is definitely there
const rootEl = document.getElementById('root') as HTMLElement; // or: document.getElementById('root')!

ReactDOM.createRoot(rootEl).render(
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
);

