

import React, { useContext, useState } from 'react';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../Context/StoreContext';
import axios from 'axios';

function Login({ setShowLogin }) {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    let newUrl = url;
    if (currState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    try {
      const response = await axios.post(newUrl, data);
      if (response.data.success) {
        setToken(response.data.token);
        localStorage.setItem("token", response.data.token);
        setShowLogin(false);
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error('There was an error!', error);
      alert('Failed to connect to the server. Please try again later.');
    }
  };

  return (
    <>
      <div className='absolute z-[1] w-[100%] h-[100%] bg-[#00000090] grid'>
        <form onSubmit={onLogin} className='place-self-center w-[max(23vw,330px)] text-[#808080] bg-white flex flex-col gap-[25px] px-[25px] py-[30px] rounded-lg text-sm'>
          <div className='flex justify-between items-center text-black font-bold text-2xl'>
            <h2>{currState}</h2>
            <img className='w-4 cursor-pointer' onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="Close"></img>
          </div>
          <div className='flex flex-col gap-5'>
            {currState === "Login" ? null :
              <input name='name' onChange={onChangeHandler} value={data.name} className='outline-none border-solid border-[1px] p-[10px] rounded-[4px]' type="text" placeholder='Your name' required />}
            <input name='email' onChange={onChangeHandler} value={data.email} className='outline-none border-solid border-[1px] p-[10px] rounded-[4px]' type="email" placeholder='Enter your email' required />
            <input name='password' onChange={onChangeHandler} value={data.password} className='outline-none border-solid border-[1px] p-[10px] rounded-[4px]' type="password" placeholder='Password' required />
          </div>
          <button type='submit' className='border-none p-[10px] rounded-[4px] text-white bg-yellow-400 text-[15px] cursor-pointer'>{currState === "Login" ? "Login" : "Create account"}</button>
          <div className='flex items-start gap-2'>
            <input className='mt-[5px]' type='checkbox' required></input>
            <p>By continuing I agree to the terms of use & privacy policy</p>
          </div>
          {currState === "Login"
            ? <p>Create a new account? <span className='text-yellow-400 font-medium cursor-pointer' onClick={() => setCurrState("Sign Up")}>Click here</span></p>
            : <p>Already have an account? <span className='text-yellow-400 font-medium cursor-pointer' onClick={() => setCurrState("Login")}>Login here</span></p>
          }
        </form>
      </div>
    </>
  );
}

export default Login;
