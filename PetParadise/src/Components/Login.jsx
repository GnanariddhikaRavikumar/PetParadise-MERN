import React from 'react';
import './Login.css';
import { FaUser, FaLock } from 'react-icons/fa';
import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [username, setUsername] = useState();
  const [password, setPass] = useState();
  const navigate = useNavigate();
  const handleEmailChange = (e) => {
    setUsername(e.target.value);
  };
  const handlepassChange = (e) => {
    setPass(e.target.value);
  };
    const handlesubmit = async (e) => {
        e.preventDefault();
        const Obj = {
          username: username,
          password: password,
        };
        try {
          const response = await axios.post("http://localhost:3002/petparadise/login", Obj);
    
          console.log(response);
          if (response.status === 200) {
            alert("Login Successfully");
            navigate("/")
          }
        } catch (error) {
          alert("Invalid Login");
          console.error("Error");
        }
      };

    return (
        <div className='login-h1'>
        <h1>Welcome to Pet Paradise</h1>
        <div className='container1'>
            <div className='wrapper'>
                <div className='title'><span>LOGIN</span></div>
                <form onSubmit={handlesubmit}>
                    <div className='row'>
                        <i className='icon'><FaUser /></i>
                        <input type='text' placeholder='Email or Phone' id='username' onChange={handleEmailChange} required />
                    </div>
                    <div className='row'>
                        <i className='icon'><FaLock /></i>
                        <input type='password' placeholder='Password' id='password' onChange={handlepassChange} required />
                    </div>
                    <div className='row button'>
                        <input type='submit' value='Login' />
                    </div>
                    <div className='signup-link'>Not a member? <a href='#'>Signup now</a></div>
                </form>
            </div>
        </div></div>
    );
}

export default Login;
