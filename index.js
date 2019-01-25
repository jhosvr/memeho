const Discord = require('discord.js');
const bot = new Discord.Client();
const ow = require('./overwatch.js');
const users = require('./users.json');
const names = Object.keys(require('./users.json'));

const branch = process.env.BRANCH_NAME;
const token = process.env.DBOT_TOKEN;

process_name = 'dbot-' + branch;
process.title = process_name;

bot.login(token);
bot.on('error', console.error);
bot.on('ready', function(){
    var channel = bot.channels.get('533355330642378762');
    channel.sendMessage('beep boop: memeho has been updated!');
    console.log(process.title + ' has been started');
    bot.user.setActivity("DO THE NEEDFUL", { type: "PLAYING"});
});

const prefix = ':';
bot.on('message', function(message){
    // Prevent bot read loops
    if(message.author.bot) return;

    if (message.content.startsWith(prefix)){
      // Precent additional parsing/resource usage if just an emoji was sent
      if (message.content.endsWith(':')){
        return;
      }

      // BOT COMMANDS
      var command = message.content.substr(1,message.content.length).toLowerCase().split(' ');

      switch(command[0]) {
        case "debug":
          switch(command[1]){
            case "message":
              message.reply('Message content requested, please see below:');
              message.reply(message.content);
              break;
          }
          break;
        case "status":
          // always true
          message.channel.send('Memeho is currently active!');
          break;
        case "pika":
          message.channel.send('',{files: ["https://i.imgur.com/sohWhy9.jpg"]});
          break;
        case "superhot":
          message.channel.send('',{files: ["https://thumbs.gfycat.com/FrailTanAmericanlobster-small.gif"]});
          break;
        /* case "ow":
          if (message.content.indexOf('#') > -1) {
            // User sends their BattleTag, send them back some stats
            ow(message.content, (err, data) => {
              if (err) {
                message.reply("An error occured :(");
                return console.error(err + ': ' + data);
              }
              message.reply(data);
            });
          }
          break;
          */
        }
      } else {

        var words = message.content.toLowerCase().split(' ');

        // Auto tag users
        for (var each in names) {
          if (words.includes(names[each])) {
            message.channel.send('<@' + users[names[each]] + '>');
          }
        }
      }
  });
