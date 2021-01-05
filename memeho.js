const { Client } = require('discord.js');
const bot = new Client();

// BOT CONFIG
let branch = process.env.BRANCH_NAME;
const PREFIX = '';
process.title = 'memeho-' + branch;

// BOT EVENTS
bot.on('error', console.error);
bot.on('ready', () => {
  console.log(`${bot.user.tag} has logged in`);
});

bot.on('message', (message) => {
  if (message.author.bot || !message.content.startsWith(PREFIX)) return;
  console.log(`[${message.author.tag}]:(#${message.channel.name}): \"${message.content}\"`);

  const [CMD_NAME, ...args] = message.content
    .trim()
    .substring(PREFIX.length)
    .split(/\s+/);

})

bot.login(process.env.DBOT_TOKEN);
