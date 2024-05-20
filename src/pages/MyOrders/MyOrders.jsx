
import React, { useContext, useEffect, useState } from 'react'
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';



function MyOrders() {
  const {url,token} = useContext(StoreContext);
  const [data,setData] = useState([]); 
  
  const fetchOrders = async () => {
    const response = await axios.post(url+"/api/order/useorders",{},{headers:{token}})
    setData(response.data.data);
    console.log(response.data.data)
  }
  
  useEffect(()=>{
   if (token) {
    fetchOrders();
   }
  },[token])

  return (
    <>
    <div>hi</div>
    </>
  )
}

export default MyOrders