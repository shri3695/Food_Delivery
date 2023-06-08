import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from '../components/Header';
import Cart from '../pages/Cart/Cart';
import Payment from '../pages/Payment/Payment';
import Register from '../pages/Register/Register';
import Home from '../pages/Home/Home';
import Login from '../pages/Login/Login';
import Menu from '../pages/Menu/Menu';

const Navigation=()=>{
    return(
        <BrowserRouter>
           <Header/>
           <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/login' element={<Login />} />
               <Route path='/register' element={<Register />} />
               <Route path='/menu' element={<Menu />} />
               <Route path='/cart' element={<Cart />} />
               <Route path='/payment' element={<Payment />} />
           </Routes>
        </BrowserRouter>
    )
}

export default Navigation;