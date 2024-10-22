// FRAMEWORK CONFIGURATION
const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middleware/errorHandler");
const cors = require("cors");

// env file config
const dotenv = require("dotenv");
dotenv.config();

//
connectDb();
const app = express();
const port = process.env.PORT || 5000;

//
app.use(express.json());

//
app.use(cors());

//
app.use(errorHandler);

//
app.get('/',(req,res)=>{
    res.send("error is still waiting");
});

// APP CONFIG START
app.listen(port, () => {
    console.log('Server running on port https://localhost:${port}');
});

// we use this to export a module
module.exports = connectDb