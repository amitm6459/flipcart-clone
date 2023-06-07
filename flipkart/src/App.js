import React from 'react';
import Header from './component/header/Header';
import Home from './component/home/Home';
import { Box } from '@mui/material';
import DataProvider from './context/DataProvider';
import DetailView from './component/details/DetailView';
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Cart from './component/cart/Cart';

function App(props) {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 54 }}>
          <Routes>
            <Route path='/' element={<Home/> }/>
            <Route path='/product/:id' element={<DetailView/>}/>
            <Route path='/Cart' element={<Cart/>}/>
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;