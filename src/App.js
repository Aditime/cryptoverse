import React from 'react';
import { Routes , Route, Link } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import {  Navbar, CryptoAnalysis, Homepage, Cryptocurrencies,CryptoDetails, News } from './components';

import './App.css';
import { Flex, Box, Text } from '@chakra-ui/react';

const App = () => {
  return (
    <div className='app'>
        <div className = "navbar">   
        <Navbar />
        </div>
        <div className = "main">  
        <Box>
          <div className='routes'>
          <Routes >
            <Route exact path="/" element={<Homepage/>}/>    
            <Route exact path="/CryptoAnalysis" element={<CryptoAnalysis/>}/>     
            <Route exact path="/cryptocurrencies"element={<Cryptocurrencies/>}/> 
            <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/> 
            <Route exact path="/news" element={<News/>}/> 
          </Routes >
          </div>
          </Box> 

       
        <div className="footer" padding={10}>
        <Text level={5} style={{ color: 'white', textAlign: 'center' }}>Copyright © 2022
          <Link to="/">
            RealCrypto Inc.
          </Link> <br />
          All Rights Reserved.
        </Text>
        <Flex   justifyContent='space-between' cursor='pointer' >

          <Link  style={{ color: 'white', textAlign: 'center',marginLeft: 20  }}  to="/">Home</Link>
          <Link style={{ color: 'white', textAlign: 'center', marginLeft: 20}}  to="/exchanges">CryptoAnalysis</Link>
          <Link style={{ color: 'white', textAlign: 'center', marginLeft: 20}}  to="/news">News</Link>
          </Flex>
      </div>
      
      </div>
    </div>
  );
}

export default App