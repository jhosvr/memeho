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
    var words = message.content.toLowerCase().split(' ');
    if(words.includes('hello')){
        message.reply('howdy');
    }

    if(words.includes('widowmaker')){
      // tag Jason
      message.channel.send('<@219523329483210752> oh, is this your last game?');
    }

    if(words.includes('tom')){
        // tag tom
        message.channel.send('<@127856466571821056>, mei takes no skill. ');
    }

});

bot.on('ready', function(){
    console.log('Bot has been initiated');
    message.send('532749700122542081','beep boop.. memeho has been updated!')
});
