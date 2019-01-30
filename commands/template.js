module.exports = {
	name: 'template', //determines command call
  aliases: ['default','guide'], //allows for alternate command call
	description: 'template file for new commands',
  args: false, // true: args are needed
  usage: '<arg1> <arg2>',
  guildOnly: true, // false: bot can accept commands via DM
  cooldown: 3, // sec to wait until user can use again

	execute(message, args) {
    /*
      if (args[0] === 'foo') {
			return message.channel.send('bar');
		}
    */
		message.channel.send('', {
      files: ['https://i.kym-cdn.com/photos/images/original/001/166/089/485.jpg']
    });
	},
};
