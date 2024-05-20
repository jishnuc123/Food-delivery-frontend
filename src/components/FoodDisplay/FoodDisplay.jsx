

import React, { useContext } from 'react'
import { StoreContext } from '../../Context/StoreContext'
import FoodItems from '../FoodItems/FoodItems'

function FoodDisplay({category}) {

   const {food_list} = useContext(StoreContext)

  return (
    <div className='' id='food-display'>
    <h2 className='p-10 text-3xl font-bold text-yellow-400'>Top dishes</h2>
    
    
    <div className='grid grid-cols-4 p-10  gap-[30px] gap-y-[30px]'>
     {food_list.map((item,index) => {
        
        if (category==="All" || category===item.category) {

          return <FoodItems key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}/>
        }




     })}

    </div>

    </div>
  )
}

export default FoodDisplay