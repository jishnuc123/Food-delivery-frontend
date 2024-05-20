

import React from 'react'
import { menu_list } from '../../assets/assets'


function Explore({category,setCategory}) {
 
   return (
    <>
    <div className='flex flex-col gap-[20px] p-10' id='explore-menu'>
       <h1 className='text-yellow-400 font-bold text-4xl'>Explore our Menu</h1>
       <p className='max-w-[50%] text-gray-500'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit quia voluptates asperiores nulla veniam laudantium nostrum laborum alias temporibus facere ipsa</p>  

    <div className='flex justify-between items-center gap-[30px] text-center mx-[20px] my-[0px] overflow-scroll no-scrollbar '>

      {menu_list.map((item,index)=>{
        
        
        return (
         
         <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} className='w-[10.5vw] min-w-[80px] cursor-pointer  transition-[0.2s]' key={index}>
         
         
         
          <img className='active:border-yellow-400 border-4 border-solid p- rounded-[100%]' src={item.menu_image}></img>
          
          <p className='mt-[10px] text-gray-500 text-xl cursor-pointer'>{item.menu_name}</p>
        
         </div>
        )

      })}   
       
      
    </div>  
      <hr className='mx-[10px] my-[0px] h-[2px] bg-yellow-400 border-none'></hr>
    </div>
    
    
    </>
   
  )
}

export default Explore