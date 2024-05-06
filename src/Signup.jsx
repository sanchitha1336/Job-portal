import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Signup() {
    const [name,setName]=useState('');
    const [password,setPassword]=useState('');
    const navigate= useNavigate();
    async function handleSubmit(e){
        e.preventDefault();
        if(name !=="" && password !==""){
             navigate('/home',{state:{name,password}})
        }
    }
  return (
    <div>
        Signup
        <form onSubmit={(e)=>handleSubmit(e)}>
            <input type="text" onChange={(e)=>setName(e.target.value)}></input>
            <input type="password" onChange={(e)=>setPassword(e.target.value)}></input>
            <button type='submit'>submit</button>
        </form>
        </div>
  )
}

export default Signup