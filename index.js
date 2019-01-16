const Discord = require('discord.js')
const bot = new Discord.Client();

const branch = process.env.BRANCH_NAME;
const token = process.env.DBOT_TOKEN;

process_name = 'dbot-' + branch;
process.title = process_name;

const prefix = ':';

bot.on('error', console.error);
bot.login(token);

bot.on('message', function(message){
    /* Command responses */
    if (message.content.toUpperCase().startsWith(prefix + "STATUS")){
      // always true
      message.channel.send('Memeho is currently active!');
    }

    /* Eavesdrop responses: reading users messages */
    var words = message.content.toUpperCase().split(' ');
    if(words == 'HELLO'){
        message.reply('howdy');
    }

    if(words.includes('PRINT')){
      message.channel.send(words);
    }

    if(message.content == 'TOM'){
        // tag tom
        message.channel.send('<@127856466571821056>, mei takes no skill. ');
    }

});

bot.on('ready', function(){
    console.log('Bot has been initiated');
});
