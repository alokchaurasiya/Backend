const express = require('express');
const userRouter = require('./routers/userRouter');
const cors = require("cors");


const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}));

app.use('/user' , userRouter);

app.get('/',(req , res)=>{
    res.send('Response from express'); 
 
 })


app.get('/home',(req , res)=>{
    res.send('Response from home'); 
 
 })


app.listen(port,()=>{
    console.log     (' express server started..'); 
 
 })

 