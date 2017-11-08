module.exports.run = (client, msg) => {
    const embed = {
        "title": "Green",
        "description": "54371",
        "color": 54371
    };
    msg.channel.send({ embed });
};

module.exports.conf = {
    "name": "green"
};