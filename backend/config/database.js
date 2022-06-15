const mongoose = require('mongoose');

const connectWithDb = () =>{
    mongoose.connect(process.env.MONGO_URI,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    }).then(console.log(`Db Connected Successfully`)).catch((error) =>{
        console.log(`Db Connection Issue`);
        console.log(error);
        process.exit(1);
    })
};

module.exports = connectWithDb;