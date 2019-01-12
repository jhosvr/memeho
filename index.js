process.title = "memeho-bot";
const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.DBOT_TOKEN_TEST
var prefix = ':'

bot.on('message', function(message){
    if(message.content == 'hello') 
	  {
        message.reply('howdy');
    };
	
    if(message.content == 'tom')
    {
        // @toml88#1653 
        message.channel.send('@eatfoozles#0842 user tag test'); 
    }

    /*
    COMMANDS THAT START WITH PREFIX ':'
    todo:
        convert to case/switch statements
        probably use ':' commands in a seperate file and source them
    */

	  if (message.content.startsWith(prefix + "status"))
	  {
		    // always true
		    message.channel.send('Memeho is currently active!');
	  };

});

bot.on('ready', function(){
    console.log('Bot has been initiated');
})

bot.login(token);
