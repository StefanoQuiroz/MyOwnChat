const Pusher = require('pusher');
const mongoose = require('mongoose');
const pusher = new Pusher({
    appId: "1243776",
    key: "dad86e5da3fa7bc1b1d8",
    secret: "5236edbc7a2276fa474a",
    cluster: "eu",
    useTLS: true
});

const bd = mongoose.connection;
bd.once('open', ()=>{
    console.log("DB connected");
    const msgCollection = bd.collection('messages');
    const changeStream = msgCollection.watch();

    changeStream.on("change", (change) => {
        console.log("A change occured",change);
        if(change.operationType === "insert"){
            const messageDetails = change.fullDocument;
            pusher.trigger("messages", "inserted", {
                name: messageDetails.name,
                message: messageDetails.message,
                timestamp: messageDetails.timestamp,
                received: messageDetails.received
            });
        } else {
            console.log("Error triggering Pusher");
        }
    })
})

module.exports = bd;
