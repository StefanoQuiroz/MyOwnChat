require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT;

const mongo = require('./config/mongoDB.config');
mongo();

const Pusher = require('pusher');

const pusher = new Pusher({
    appId: "1243776",
    key: "dad86e5da3fa7bc1b1d8",
    secret: "5236edbc7a2276fa474a",
    cluster: "eu",
    useTLS: true
});

const db = mongoose.connection;
db.once('open', ()=>{
    console.log("DB connected");
    const msgCollection = db.collection('messages');
    const changeStream = msgCollection.watch();
    changeStream.on('change', (change) => {
        console.log(change);
    })
})

app.use(cors({credentials: true, origin:"http://localhost:3000"}));
app.use(express.json());
app.use(express.urlencoded({ extended: true}))
app.use(`/api`, require('./routes/whatsApp.routes'))

app.listen(PORT, ()=>{
    console.log(` 1 : Server lock and loading on PORT: ${PORT}`)
})

