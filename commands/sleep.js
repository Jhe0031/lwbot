module.exports.run = (client, message, args) => {
    const Discord = require('discord.js');
    try {
        var sleeps = ['./nosleeps/go-to-sleep-already.png', './nosleeps/nosleep.jpg', './nosleeps/its-time-to-sleep.png', './nosleeps/cya.png', './nosleeps/sleep-early.png', './nosleeps/less-bait.png', './nosleeps/lets-sleep.png', './nosleeps/kotatsu.png', './nosleeps/stay-up.png', './nosleeps/friend.png', './nosleeps/bed.png', './nosleeps/alright.jpg', './nosleeps/megaphone.png', './nosleeps/ok.jpg', './nosleeps/sheep.jpg', './nosleeps/drill.png', './nosleeps/fish.png', './nosleeps/sleepsheep.jpg', './nosleeps/gotobed.jpg'];
    
        Array.prototype.randomElement = function (array) {
            return array[Math.floor(Math.random() * array.length)]
        }
    
        var randomSleep = sleeps.randomElement(sleeps)

        message.channel.send("", {files: [randomSleep]});
    } catch (err) {
        message.channel.send(`Whoops! Something went wrong! ${err}`);
    }
};