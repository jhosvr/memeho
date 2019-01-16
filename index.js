const Discord = require('discord.js');
const bot = new Discord.Client();

const branch = process.env.BRANCH_NAME
const token = process.env.DBOT_TOKEN

process_name = 'dbot-' + branch
process.title = process_name

var prefix = ':'

bot.on('message', function(message){
    var words = message.content.toUpperCase().split(' ');

    if(words == 'HELLO')
	  {
        message.reply('howdy');
    };

    if(words.includes('PRINT')
    {
      message.channel.send(words);
    }

    if(message.content == 'TOM')
    {
        // tag tom
        message.channel.send('<@127856466571821056>, mei takes no skill. ');
    }

    /*
    COMMANDS THAT START WITH PREFIX ':'
    todo:
        convert to case/switch statements
        probably use ':' commands in a seperate file and source them
    */

	  if (message.content.startsWith(prefix + "STATUS"))
	  {
		    // always true
		    message.channel.send('Memeho is currently active!');
	  };

});

bot.on('ready', function(){
    console.log('Bot has been initiated');
})

bot.on('error', console.error);
bot.login(token);
