const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.send("api is working");
});
app.get('/home',(req,res)=>{
    res.send("this is home page");
});
app.get('/about',(req,res)=>{
    res.send("this is about page");
});
const port = 5600;
app.listen(port,()=>{
    console.log("server is running port 5600");
});
