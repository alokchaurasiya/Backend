const express = require('express');
const userRouter = require('./routers/userRouter');
const utilRouter = require('./routers/util');
const dataRouter=require('./routers/dataSetRouter');
const cors = require("cors");


const app = express();
const port = 5000;

app.use(express.json());
app.use(cors({
    origin : ['http://localhost:3000']
}));

app.use('/user' , userRouter);
app.use('/data',dataRouter);
app.use('/util',utilRouter);


app.use(express.static('./static/uploads'));

app.listen(port,()=>{
    console.log     (' express server started..'); 
 
 })

 