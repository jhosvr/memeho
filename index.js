const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.DBOT_TOKEN

bot.on('message', function(message){
    if(message.content == 'Hello') {
        message.reply('Hello, how are you?');
    };
});

bot.on('ready', function(){
    console.log('Bot has been initiated');
})

bot.login(token);


