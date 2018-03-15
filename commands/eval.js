const Discord = require(`discord.js`);
const config = require(`../config.json`);
const snekfetch = require(`snekfetch`);
const hastebin = require(`hastebin-gen`);

module.exports.run = (client, message, args) => {
  function clean(text) {
    if (typeof(text) === `string`)
      return text.replace(/`/g, `\`` + String.fromCharCode(8203)).replace(/@/g, `@` + String.fromCharCode(8203));
    else
      return text;
  }
  if (message.author.id !== `107599228900999168`) {return;}
  try {
    const code = args.join(` `);
    let evaled = eval(code);
    if (typeof evaled !== `string`)
      evaled = require(`util`).inspect(evaled);
    var evalOut = (clean(evaled));
    if (evalOut.length >= 1990) {
      hastebin(evalOut, `js`).then(link => {
        message.channel.send(`Output larger than 2000 characters, it has been posted to ` + link); 
      }).catch(console.error);
    }
    else {
      message.channel.send(`\`\`\`js\n${evalOut}\n\`\`\``);
    }
  } catch (err) {
    try {
      message.channel.send(`\`ERROR\` \`\`\`xl\n${clean(err)}\n\`\`\``);
      console.error(err);
    } catch (e) {
      message.channel.send(`:x: Some error occured when trying to send the error (go fucking figure), check the console.`);
      console.error(e);
    }
  }
};