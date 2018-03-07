module.exports.run = async (client, message, args) => { // eslint-disable-line no-unused-vars
    var slot = [`:monkey:`, `:frog:`, `:elephant:`, `:snail:`, `:bee:`,`:star:`, `:fox:`, `:crown:`, `:four_leaf_clover:`, `:lemon:`, `:cherries:`, `:melon:`, `:grapes:`, `:bomb:`, `:unicorn:`, `:zap:`, `<a:parrotHD:397047432640331777>`, `:pear:`, `:banana:`, `:tangerine:`, `:watermelon:`, `:gem:`];

    //var specialGood = [`:four_leaf_clover:`, `:star:`, `<a:parrotHD:397047432640331777>`, `:gem:`];
    //var specialBad = [`:bomb:`];

    Array.prototype.randomElement = function(array) {
        return array[Math.floor(Math.random() * array.length)];
    };

    try {
        if (!args[0]) {
        
            var fslot1 = slot.randomElement(slot);
            var fslot2 = slot.randomElement(slot);
            var fslot3 = slot.randomElement(slot);
            var fslot4 = slot.randomElement(slot);
            var fslot5 = slot.randomElement(slot);
            var fslot6 = slot.randomElement(slot);
            var fslot7 = slot.randomElement(slot);
            var fslot8 = slot.randomElement(slot);
            var fslot9 = slot.randomElement(slot);

            if (fslot4 === fslot5 && fslot5 === fslot6 && fslot6 === fslot4) {
                message.channel.send(`${fslot1}  **|**  ${fslot2} **|**  ${fslot3}\n\n${fslot4}  **|**  ${fslot5}  **|**  ${fslot6}   **<**\n\n${fslot7}  **|**  ${fslot8}  **|**  ${fslot9}\n\n         **[ Yup ]**`);
            } else {
                message.channel.send(`${fslot1}  **|**  ${fslot2} **|**  ${fslot3}\n\n${fslot4}  **|**  ${fslot5}  **|**  ${fslot6}   **<**\n\n${fslot7}  **|**  ${fslot8}  **|**  ${fslot9}\n\n         **[ Nope ]**`);
            }
        } else if (args[0] === `%`) {
            message.channel.send(`:slot_machine: The current win percentage is **${Math.round(((1/slot.length)*3)*100)}%**`);
        } else if (args[0] === `list`) {
            message.channel.send(`Current emotes: ${slot}`);
        }
    } catch (err) {
        message.channel.send(`:x: ${err}`);
    }
};