


import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
import './NavBar.css'

function NavBar({setShowLogin}) {
 
  const {getTotalCartAmount,token,setToken} = useContext(StoreContext)
  
  const navigate = useNavigate();
  
  const logout = () => {
   localStorage.removeItem("token");
   setToken("");
   navigate("/")

  }

  return (


    <>
     <div className='flex justify-between items-center p-5'>
        <Link to={'/'}><h2 className='text-3xl font-bold text-yellow-400'>DELIVERY</h2></Link> 

         <ul className='text-lg space-x-4 text-gray-500  px-20 cursor-pointer '>
           <Link to='/' className='hover:underline hover:text-yellow-400'>Home</Link> 
           <a href='#explore-menu' className='hover:underline hover:text-yellow-400'>Menu</a>
           <a href='#footer' className='hover:underline hover:text-yellow-400'>Contact US</a>
         </ul> 
      
      <div className='flex items-center gap-[40px]'>
        <img src={assets.search_icon}/>
        <div className='relative'>
          <Link to='/cart'><i className="fa-solid fa-basket-shopping"></i></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
      
       {!token?<button onClick={()=>setShowLogin(true)} className='px-8 py-2 border-yellow-400 border-2 hover:bg-yellow-400 text-black rounded-3xl text-lg'>Sign in</button>
       :<div className='navbar-profile'>
         <img src={assets.profile_icon}/>
         <ul className='nav-profile-dropdown'>
          <li><img src={assets.bag_icon}/><p>Orders</p></li>
          <hr></hr>
          <li onClick={logout}><img src={assets.logout_icon}/><p>Logout</p></li>
         </ul>
       </div>
       }
       
        
    </div>
    </div>
     
    
    
    
    </>
  )
}

export default NavBar