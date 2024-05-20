

import React, { useState } from 'react'
import NavBar from './components/NavBar/NavBar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import Payment from'./pages/Payment/Payment'
import MyOrders from './pages/MyOrders/MyOrders'





function App() {

  const [showLogin,setShowLogin] = useState(false)


  return (
   <> 
   {showLogin?<Login setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <NavBar setShowLogin={setShowLogin} />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/order' element={<PlaceOrder/>} />
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/myorders' element={<MyOrders/>}/>
      </Routes>
    </div>
    <Footer/>
  </>
  )
}

export default App