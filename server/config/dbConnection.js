// mongoose is used to connect databse with server
const mongoose = require("mongoose");

// we use asynchronous when we want any two processes to work parellel 
const connectDb = async () => {
    try {
        // await ->
        const connect = await mongoose.connect(process.env.CONNECTION_STRING);
        console.log("Database Connected: ",connect.connection.host, connect.connection.name);
        }

    catch(err){
        console.log(err);
        // 1 --> fail, 0 --> pass
        process.exit(1);
    }    
 };
4
