const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectdb = require("./config/db");
const courseroutes = require("./routes/courseroutes");

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectdb();
//crud
app.use('/api/courses', courseroutes);

app.get("/", (req,res)=>{
    res.send("api is working");
});

const port = process.env.PORT;
app.listen(port,()=>{
    console.log("server is running port 5600");
});