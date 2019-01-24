const Discord = require('discord.js');
const bot = new Discord.Client();
const ow = require('./overwatch.js');

const branch = process.env.BRANCH_NAME;
const token = process.env.DBOT_TOKEN;

process_name = 'dbot-' + branch;
process.title = process_name;

bot.login(token);
bot.on('error', console.error);
bot.on('ready', function(){
    console.log('Bot has been initiated');
});

const prefix = ':';

bot.on('message', function(message){
    // Prevent bot read loops
    if(message.author.bot) return;

    /* Command responses */
    if (message.content.startsWith(prefix)){
      var command = message.content.substr(1,message.content.length).toLowerCase().split(' ');

      switch(command[0]) {
        case "what":
          message.reply(command);
          break;
        case "status":
          // always true
          message.channel.send('Memeho is currently active!');
          break;
        case "pika":
          message.channel.send('',{files: ["https://i.imgur.com/sohWhy9.jpg"]});
          break;
        case "ow":
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
        }
<<<<<<< HEAD
      }
    }
/*
      *****DISABLE MESSAGE PARSING*****
    else {
      // Eavesdrop responses: reading users messages
=======

    } else {
      /* Eavesdrop responses: reading users messages */
>>>>>>> 8c09508e76a4fb5efffd42a40fabe02d8fb5331d
      var words = message.content.toLowerCase().split(' ');
      if(words.includes('hello')){
        message.reply('howdy');
      }

      if(words.includes('widowmaker') || words.includes('widow')){
        // tag Jason
        message.channel.send('<@219523329483210752> oh, is this your last game?');
      }

      if(words.includes('tom')){
        // tag tom
        message.channel.send('<@127856466571821056>, mei takes no skill. ');
      }

      if(words.includes('justin')){
        // shut up
        message.channel.send('<@280411897730301952>, SHUT UP CHRIS! ');
      }

    }
    */
  });
