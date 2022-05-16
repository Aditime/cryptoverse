import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { createRoot } from 'react-dom/client';

import App from './App';
import store from './app/store';
import 'antd/dist/antd.min.css';

import { ChakraProvider } from '@chakra-ui/react';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
  <Router>
    <Provider store={ store} >
    <ChakraProvider>
        <App />
        </ChakraProvider>
    </Provider>
</Router>);