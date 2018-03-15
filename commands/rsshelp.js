module.exports.run = async (client, message) => {
  await message.channel.send(`:white_check_mark: DM'ing you the information now!`);
  await message.author.send(`**Hi there!** You've summoned me because you want to figure out how to grab the RSS link, right? I'll take you through the steps. Here we go!`);
  await message.author.send(`** **`);
  await message.author.send(`**Step 1:** Go to the Webtoon website (not the app), and pick the Webtoon you want the rss link of.`, {files: [`./data/rsshelp-media/step1.gif`]});
  await message.author.send(`** **`);
  await message.author.send(`**Step 2:** Click on the button next to the subscribe button (it's two curved lines and a dot). Copy the URL you see at the top. This is your RSS link to paste into lw-wa.`, {files: [`./data/rsshelp-media/step2.gif`]});
};