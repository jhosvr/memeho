/*
  name: index.js
  description: main file for memeho discord bot
*/

const fs = require('fs');
const Discord = require('discord.js');
const bot = new Discord.Client();

// BOT CONFIG
let branch = process.env.BRANCH_NAME;
let token = process.env.DBOT_TOKEN;
const prefix = '>';
process.title = 'dbot-' + branch;
const cooldowns = new Discord.Collection();

// LOAD COMMAND FILES
bot.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

// BOT EVENTS
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
    // prevent bot read loop or excess message parsing
    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const commandName = args.shift().toLowerCase();

    const command = bot.commands.get(commandName)
      || bot.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

    // DM attempts
    if (command.guildOnly && message.channel.type !== 'text') {
	     return message.reply('that doesn\'t work inside a DM');
    }

    // Argument handling
    if (command.args && !args.length) {
        let reply = `wtb: arguments, ${message.author}`;
        if (command.usage) {
          reply += `Usage: \`${prefix}${command.name} ${command.usage}\``;
        }
        return message.channel.send(reply);
    }

    // Rate Limiting
    if (!cooldowns.has(command.name)) {
      cooldowns.set(command.name, new Discord.Collection());
    }
    const now = Date.now();
    const timestamps = cooldowns.get(command.name);
    const cooldownAmount = (command.cooldown || 3) * 1000;

    if (timestamps.has(message.author.id)) {
      const expirationTime = timestamps.get(message.author.id) + cooldownAmount;
      if (now < expirationTime) {
        const timeLeft = (expirationTime - now) / 1000;
        return message.reply(`stop nagging: ${timeLeft.toFixed(1)}s left before reusing \`${command.name}\``);
      }
      timestamps.set(message.author.id, now);
      setTimeout(() => timestamps.delete(message.author.id), cooldownAmount);
    }

    // Command handler
    if (!command) return;
    try {
	      command.execute(message, args);
    } catch (error) {
	      console.error(error);
	      message.reply('wah! something went wrong.');
    }
});
