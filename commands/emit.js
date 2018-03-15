module.exports.run = (client, message, args) => {
  console.log(`Emit command ran!`);
  if (message.author.id !== `107599228900999168`) return;
  else {client.emit(args[0], args[1]);}
};