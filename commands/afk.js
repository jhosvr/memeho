module.exports = {
	name: 'afk',
  aliases: ['',''],
	description: 'kicks an adk user out of voice chat',
  args: true, // true: args are needed
  usage: '<user>',
  guildOnly: true, // false: bot can accept commands via DM
  cooldown: 3, // sec to wait until user can use again

	execute(message, args) {
    let server = bot.channels[channelID].guild_id;;
    let alluser = server.members;
    let afkuser = args[0];

		message.channel.send(allusers);
    message.channel.reply(afkuser);
	},
};
