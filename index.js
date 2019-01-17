const Discord = require('discord.js')
const bot = new Discord.Client();

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
    /* Command responses */
    if (message.content.startsWith(prefix)){

      if (message.content.toLowerCase() == prefix + "status"){
        // always true
        message.channel.send('Memeho is currently active!');
      }

      if(message.content.toLowerCase() == prefix + "pika"){
        message.channel.send('',{files: ["https://i.imgur.com/sohWhy9.jpg"]});
      }

    } else {
      /* Eavesdrop responses: reading users messages */
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

    }
  });
