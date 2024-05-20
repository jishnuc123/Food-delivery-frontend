

import React from 'react'
import { assets } from '../../assets/assets'

function Footer() {
  return (
   <> 
<div id='footer' className='text-black bg-yellow-400 flex flex-col gap-[20px] px-24 py-[3vw] pt-[80px]'>
  
  <div className='w-[100%] grid grid-cols-3 gap-2'>
    
    <div className='flex flex-col items-start gap-5'>
      <h2 className='text-xl font-bold'>DELIVERY</h2>
      <p className='text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid consectetur voluptate porro rerum qui</p>   
    <div className='flex gap-2'>
        <img src={assets.facebook_icon}></img>
        <img src={assets.linkedin_icon}></img>
        <img src={assets.twitter_icon}></img>
    </div>
    </div>
    
    
    <div className='flex flex-col items-center gap-5'>
      <h2 className='font-bold'>COMPANY</h2>   
      <ul className='ps-5 text-white'>
        <li>Home</li>
        <li>About us</li>
        <li>Delivery</li>
        <li>Privacy policy</li>
      </ul>
      
    </div>   
    
    <div className='flex flex-col items-center gap-5'>
      <h2 className='font-bold'>GET IN TOUCH</h2>
          <ul className='ps-12 text-white'>
            <li>1234567890</li>
            <li>contact@delivery.com</li>
          </ul>

    </div>
   </div>
   <hr className='mx-[10px] my-[0px] h-[2px] bg-black border-none'></hr>
   <p className='text-center'>Copyright 2024 © delivery.com - All Right Reserved.</p>
   </div> 
     

 
    </>
  )
}

export default Footer