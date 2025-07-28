# backend setup =>npm init -y 

# npm install express mongoose dotenv cors
# Templete Basics Server
# [const express=require('express')
const cors=require('cors')
const app=express()
const port=4000
app.use(cors())
app.use(express.json())

app.get("/",(req,res)=>{
res.json({name:"sheshnath",password:"12345"})
})

app.post("/",(req,res)=>{
    console.log(req.body)
})
app.listen(port,()=>{
    console.log(`App is runniung:${port}`)
})]

# How to connect backend to frontend
# import React, { useState } from "react";
# import axios from "axios"
# [const [data,setData]=useState({})
  const fetchData=async()=>{
    const res=await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(res.data)
  }
  fetchData()]


  """
  const postData = async()=>{
    const res = await axios.post('url', {name:"", password:""})
    console.log(res.data)
  }

  """

  <pre>
 <code>
const postData = async()=>{
    const res = await axios.post('url', {name:"", password:""})
    console.log(res.data)
  }
 </code>
  </pre>