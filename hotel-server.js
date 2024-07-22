import express from 'express';
import { rooms }  from './local/localvariable.js';
import { customers } from './local/localvariable.js';
const server=express()
server.use(express.json());

//get the records
server.get("/get",(req,res)=>{
    res.send(rooms)
})
//get customers  records
server.get("/cus",(req,res)=>{
    res.send(customers)
})

//List all customers with booked data
server.get("/",(req,res)=>{
    const booked=customers.filter((id)=> id.bookingId!=null )
    res.send(booked)
})

//List all rooms with booked data
server.get("/bookedrooms",(req,res)=>{
    const booked=customers.filter((id)=> id.bookingDate!=null )
    res.send(booked)
})

//create room 
server.post("/",(req,res)=>{
    const{body}=req
    rooms.push({...body})
    res.send({msg:'Room created successfully'})
})

//Booking a room
server.post("/bookroom",(req,res)=>{
    const{body}=req
    customers.push({...body,rooms})
    res.send({msg:"Room booked successfully"})
})
const port=6000;
server.listen(port,()=>{
    console.log(Date().toString(),"server working port"+port)
})