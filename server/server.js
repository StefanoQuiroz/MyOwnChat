require("dotenv").config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;

const mongo = require('./config/mongoDB.config');
mongo();


app.use(cors({credentials: true, origin:"http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.listen(PORT, ()=>{
    console.log(` 1 : Server lock and loading on PORT: ${PORT}`)
})

