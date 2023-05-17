import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
import Profile from './Profile'

const Myprofile = () => {
  const[user,setUser]=useState()
  const sendRequest=async()=>{
    const res=await axios.get(`http://localhost:5000/myprofile`,{
        headers:{
            'x-token': localStorage.getItem("usertoken")
        }
    }).catch((err)=>console.log(err))
    const data= await res.data;
    console.log(data)
    return data
  }
  useEffect(()=>{ 
    sendRequest().then((data)=>setUser(data))
  },[]);
  return (
    <div>
    {" "}
    {user && <Profile user={user}/> }
    </div>
    
  )
}

export default Myprofile