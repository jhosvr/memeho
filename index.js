/*
  name: index.js
  description: main file for memeho discord bot
*/

// Discord variables
const Discord = require('discord.js');
const bot = new Discord.Client();

// environment variables
let branch = process.env.BRANCH_NAME;
let token = process.env.DBOT_TOKEN;

process.title = 'dbot-' + branch;
bot.login(token);
bot.on('error', console.error);

bot.on('ready', () => {
  let channel = bot.channels.find(channel => channel.name === "smd");
  channel.send('beep boop: memeho has been updated!');
  console.log(process.title + ' has been started');

  bot.user.setPresence({
    game: {
      name: 'everyone',
      type: 2,
      url: "https://www.twitch.tv/asir_khan"
    }
  });
});

bot.on('message', (message) => {
    // Prevent bot read loops
    if (message.author.bot) return;

    if (message.content.startsWith(':')) {

    }
});
