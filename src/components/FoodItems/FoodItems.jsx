

import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';


function FoodItems({id,name,price,description,image}) {

  
  const {cartItems,addToCart,removeFromCart,url} = useContext(StoreContext); 

  return (
    <div className='w-[100%] m-auto rounded-[15px] shadow-2xl '>
     <div className='relative'>
       <img className='w-[100%] rounded-t-[15px] rounded-b-[15px]' src={url+"/images/"+image}></img>
       
       {!cartItems[id]
         ?<img className='w-[35px] absolute bottom-[15px] right-[15px] cursor-pointer rounded-[50%]' onClick={()=>addToCart(id)} src={assets.add_icon_white}></img>
         
         :<div className='absolute bottom-[15px] right-[15px] flex items-center gap-[10px] p-[6px] rounded-[50px] bg-white'>
           <img onClick={()=>removeFromCart(id)} src={assets.remove_icon_red}></img>
           <p>{cartItems[id]}</p>
           <img onClick={()=>addToCart(id)} src={assets.add_icon_green}></img>
         </div>


         
        }
        
        </div>


     
     
     <div className='p-[20px]'>
      
      <div className='flex justify-between items-center mb-[]10px'>
        <p className='text-xl font-medium text-yellow-400'>{name}</p>
        <img className='w-[70px]' src={assets.rating_starts}></img>
      </div>


  
      <p className='text-[15px] text-gray-500'>{description}</p>
      <p className='text-yellow-400 text-lg font-medium mt-2'>${price}</p>

    
     </div>


    </div>
  )
}

export default FoodItems