

import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import { useNavigate } from 'react-router-dom'

function Cart() {
 
  const {cartItems,food_list,removeFromCart,getTotalCartAmount,url} = useContext(StoreContext)

  const navigate = useNavigate();


  return (
    <>
    <div className='mt-[100px]'>
      <div>
        <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center text-gray-600 text-[max(1vw,12px)]'>
          <p>Items</p> 
          <p>Title</p> 
          <p>Price</p> 
          <p>Quantity</p> 
          <p>Total</p> 
          <p>Remove</p> 
        </div>
        <hr />
        <br />
          {food_list.map((items,index)=>{
            if(cartItems[items._id]>0){
              return(
               <div>
                
                <div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center  text-[max(1vw,12px)] m-[10px_0px] text-black'>
                  <img className='w-[50px]' src={url+"/images/"+items.image}/>
                  <p>{items.name}</p>
                  <p>${items.price}</p>
                  <p>{cartItems[items._id]}</p>
                  <p>${items.price*cartItems[items._id]}</p>
                  <p onClick={()=>removeFromCart(items._id)} className='cursor-pointer'>x</p>
                </div>
                <hr className='h-1'></hr>
               </div>
               
              )
            } 
          })}
        
           
             
        
       
      </div>
      
      <div className='mt-[80px] flex justify-between gap-[max(12vw,20px)]'>
        <div className='flex-1 flex flex-col gap-[20px]'>
          <h2>Cart Total</h2>
          <div>
            
          <div className='flex justify-between text-gray-500'>
              <p>Subtotal</p> 
              <p>${getTotalCartAmount()}</p>
          </div>
          
          <hr className='m-[10px]'></hr>
          
          <div  className='flex justify-between text-gray-500'>
            <p>Delivery Fee</p>
            <p>${getTotalCartAmount()===0?0:2}</p>
          </div>
          
          <hr className='m-[10px]'></hr>
          
          <div  className='flex justify-between text-gray-500'>
            <b>Total</b>
            <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>  
          </div>


          </div>
         
           <button onClick={()=>navigate('/order')} className='border-none text-white bg-yellow-400 w-[max(15vw,200px)] p-[4px] cursor-pointer mb-5'>PROCEED TO CHECKOUT</button>
       
        </div>
        
      </div>
    </div>
    </>
  )
}

export default Cart