import React, { useContext, useState } from 'react';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

function PlaceOrder() {
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setData(prevData => ({ ...prevData, [name]: value }));
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    let orderItems = food_list.reduce((acc, item) => {
      if (cartItems[item._id] > 0) {
        acc.push({ ...item, quantity: cartItems[item._id] });
      }
      return acc;
    }, []);

    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + (getTotalCartAmount() === 0 ? 0 : 2),
    };

    try {
      let response = await axios.post(`${url}/api/order/place`, orderData, {
        headers: { token }
      });
      if (response.data.success) {
        const { session_url } = response.data;
        window.location.replace(session_url);
      } else {
        alert("Order placement failed. Please try again.");
      }
    } catch (error) {
      console.error("Error placing order:", error);
      alert("An error occurred while placing the order. Please try again later.");
    }
  };

  return (
    <form onSubmit={placeOrder} className='flex items-start justify-between gap-[50px] mt-[100px] p-5'>
      <div className='w-[100%] max-w-[max(30%,500px)]'>
        <p className='text-[30px] font-semibold mb-[50px]'>Delivery Information</p>
        <div className='flex gap-[10px]'>
          <input
            required
            name='firstName'
            onChange={onChangeHandler}
            value={data.firstName}
            className='mb-[15px] outline-yellow-400 w-[100%] p-[10px] border border-gray-300'
            type='text'
            placeholder='First name'
          />
          <input
            required
            name='lastName'
            onChange={onChangeHandler}
            value={data.lastName}
            className='mb-[15px] outline-yellow-400 w-[100%] p-[10px] border border-gray-300'
            type='text'
            placeholder='Last name'
          />
        </div>
        <input
          required
          name='email'
          onChange={onChangeHandler}
          value={data.email}
          className='mb-[15px] w-[100%] p-[10px] border border-gray-300 outline-yellow-400'
          type='email'
          placeholder='Enter your email'
        />
        <input
          required
          name='street'
          onChange={onChangeHandler}
          value={data.street}
          className='mb-[15px] outline-yellow-400 w-[100%] p-[10px] border border-gray-300'
          type='text'
          placeholder='Street'
        />
        <div className='flex gap-[10px]'>
          <input
            required
            name='city'
            onChange={onChangeHandler}
            value={data.city}
            className='mb-[15px] outline-yellow-400 w-[100%] p-[10px] border border-gray-300'
            type='text'
            placeholder='City'
          />
          <input
            required
            name='state'
            onChange={onChangeHandler}
            value={data.state}
            className='mb-[15px] outline-yellow-400 w-[100%] p-[10px] border border-gray-300'
            type='text'
            placeholder='State'
          />
        </div>
        <div className='flex gap-[10px]'>
          <input
            required
            name='zipcode'
            onChange={onChangeHandler}
            value={data.zipcode}
            className='mb-[15px] outline-yellow-400 w-[100%] p-[10px] border border-gray-300'
            type='text'
            placeholder='Zip code'
          />
          <input
            required
            name='country'
            onChange={onChangeHandler}
            value={data.country}
            className='mb-[15px] outline-yellow-400 w-[100%] p-[10px] border border-gray-300'
            type='text'
            placeholder='Country'
          />
        </div>
        <input
          required
          name='phone'
          onChange={onChangeHandler}
          value={data.phone}
          className='mb-[15px] outline-yellow-400 w-[100%] p-[10px] border border-gray-300'
          type='text'
          placeholder='Phone'
        />
      </div>

      <div className='w-[100%] max-w-[max(40%,500px)]'>
        <div className='flex-1 flex flex-col gap-[20px]'>
          <h2>Cart Total</h2>
          <div>
            <div className='flex justify-between text-gray-500'>
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr className='m-[10px]' />
            <div className='flex justify-between text-gray-500'>
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr className='m-[10px]' />
            <div className='flex justify-between text-gray-500'>
              <b>Total</b>
              <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
            </div>
          </div>
          <Link to="/payment"><button
            type='submit'
            className='border-none text-white bg-yellow-400 w-[max(15vw,200px)] p-[4px] cursor-pointer mt-[30px] mb-5'
          >
            PROCEED TO PAYMENT
          </button> </Link>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
