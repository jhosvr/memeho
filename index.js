// process.title = "memeho-bot";
const config = require('./config.json');
const Discord = require('discord.js');
const bot = new Discord.Client();
// const token = process.env.DBOT_TOKEN_TEST
const branch = process.env.BRANCH_NAME
const process_name= config[branch]
process.title = process_name

const token = process.env.DBOT_TOKEN

var prefix = ':'

bot.on('message', function(message){
    if(message.content == 'hello') 
	  {
        message.reply('howdy');
    };
	
    if(message.content == 'tom')
    {
        // tag tom
        message.channel.send('mei takes no skill. <@127856466571821056>'); 
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
