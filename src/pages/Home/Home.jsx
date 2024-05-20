

import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Explore from '../../components/Explore/Explore'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'

function Home() {
  
  const [category,setCategory] = useState("All")


  return (
    <div>
    <Header/>
    <Explore category={category} setCategory={setCategory}/>
    <FoodDisplay category={category} />
    </div>
  )
}

export default Home