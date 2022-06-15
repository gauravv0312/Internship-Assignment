const app = require('./app');
const connectWithDb = require("./config/database");
require("dotenv").config();

const PORT =4000 || process.env.PORT;

connectWithDb();



app.listen(process.env.PORT || 4000,()=>{
    console.log(`Sever is running on ${PORT}`);
});