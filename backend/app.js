const express = require("express");
const cors = require('cors');
const app =express();
app.use(cors({
    origin: '*'
}));

app.use(express.json());



const user = require('./router/user');


app.get("/",(req,res) =>{
    res.send("<h1>Hello Gaaurav</h1>");
});

app.use("/api/v1/",user);

module.exports = app;