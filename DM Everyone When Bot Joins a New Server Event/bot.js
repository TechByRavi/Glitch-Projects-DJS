const Discord = require('discord.js');
const bot = new Discord.Client ();
bot.on('ready', () => {
  console.log(`Logged in as ${bot.user.tag}!`);
});
  
bot.on("guildCreate", guild => {
guild.members.forEach(x => {
x.send('Hello Friends');
});
});
bot.login('');