const express = require("express");
const cors = require('cors');
const app =express();
app.use(cors({
    origin: '*'
}));

const PORT =4000 || process.env.PORT;

app.get("/",(req,res) =>{
    res.send("<h1>Hello Gaaurav</h1>");
});

app.get("/user",(req,res) =>{
    const user =[{
        name: "Gaurav",
        email:"Gaurav@gmail.com",
        phone: "9999999999",
    },
    {
        name: "Gautam",
        email:"Gautam@gmail.com",
        phone: "8888888888",
    },
    {
        name: "Anamika",
        email:"Anamika@gmail.com",
        phone: "55555555555",
    },

    {
        name: "Kriti",
        email:"Kriti@gmail.com",
        phone: "7777777777",
    },

    {
        name: "Namita",
        email:"Namita@gmail.com",
        phone: "66666666666",
    },
   
   
]
    // res.send("<h1>Hello Gaaurav</h1>")
    res.status(200).json(user);
});

app.listen(PORT,()=>{
    console.log(`Sever is running on ${PORT}`);
});