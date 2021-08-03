require("dotenv").config();
const express = require('express');

const cors = require('cors');
const app = express();
const PORT = process.env.PORT;


//Connection MongoDB
const mongo = require('./config/mongoDB.config');
mongo();

//pusher connection
require('./config/pusher.config');

app.use(cors({credentials: true, origin:"http://localhost:3000"}));

app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(`/api`, require('./routes/whatsApp.routes'))

app.listen(PORT, ()=>{
    console.log(` 1 : Server lock and loading on PORT: ${PORT}`)
})

