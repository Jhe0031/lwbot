module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    try {
        var sleeps = ['./data/nosleeps/go-to-sleep-already.png', './data/nosleeps/nosleep.jpg', './data/nosleeps/its-time-to-sleep.png', './data/nosleeps/cya.png', './data/nosleeps/sleep-early.png', './data/nosleeps/less-bait.png', './data/nosleeps/lets-sleep.png', './data/nosleeps/kotatsu.png', './data/nosleeps/stay-up.png', './data/nosleeps/friend.png', './data/nosleeps/bed.png', './data/nosleeps/alright.jpg', './data/nosleeps/megaphone.png', './data/nosleeps/ok.jpg', './data/nosleeps/sheep.jpg', './data/nosleeps/drill.png', './data/nosleeps/fish.png', './data/nosleeps/sleepsheep.jpg', './data/nosleeps/gotobed.jpg'];
    
        Array.prototype.randomElement = function (array) {
            return array[Math.floor(Math.random() * array.length)]
        }
    
        var randomSleep = sleeps.randomElement(sleeps)

        message.channel.send("", {files: [randomSleep]});
    } catch (err) {
        message.channel.send(`Whoops! Something went wrong! ${err}`);
    }
};