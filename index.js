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
    var channel = bot.channels.get('533355330642378762');
    channel.sendMessage('beep boop: memeho has been updated!');
    console.log(process.title + ' has been started');
});

const prefix = ':';

bot.on('message', function(message){
    // Prevent bot read loops
    if(message.author.bot) return;

    /* Command responses */
    if (message.content.startsWith(prefix)){

      if (messsage.content[message.content.length -1] == ':'){
        message.channel.send('emote detected');
        return;
      }

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
        case "superhot":
          message.channel.send('',{files: ["https://thumbs.gfycat.com/FrailTanAmericanlobster-small.gif"]});
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
      }
    }
/*      *****DISABLE MESSAGE PARSING*****
    else {
      // Eavesdrop responses: reading users messages
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
  );
