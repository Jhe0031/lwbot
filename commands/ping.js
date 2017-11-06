module.exports.run = (client, msg) => {
    msg.channel.send("Ping pong!");
};

module.exports.conf = {
    name: "ping"
}