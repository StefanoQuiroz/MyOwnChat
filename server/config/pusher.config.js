const Pusher = require('pusher');
const pusher = new Pusher({
    appId: "1243776",
    key: "dad86e5da3fa7bc1b1d8",
    secret: "5236edbc7a2276fa474a",
    cluster: "eu",
    useTLS: true
});

module.exports = pusher;
