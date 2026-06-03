const express = require('express');
const app = express();

app.use(express.json());
//old value
let products = [
    {id:1,name:"laptop",price:67000},
    {id:2,name:"mouse",price:670},

];

app.get('/',(req,res)=>{
    res.send("this is home page");
});
app.get('/products',(req,res)=>{
    res.send(products);
});
app.post('/products',(req,res)=>{
    const {name,price} = req.body;

    //new value
    const newproduct = {
        id:Date.now(),
        name,
        price
    };

    //old+new value = updated

    products = [...products,newproduct]
    res.json(newproduct);
});


app.get('/product',(req,res)=>{
    res.send("this is product page");
});

const port = 5500;
app.listen(port,()=>{
    console.log("server is running port 5500");
});
