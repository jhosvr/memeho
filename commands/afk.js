module.exports = {
	name: 'afk',
  aliases: ['',''],
	description: 'kicks an adk user out of voice chat',
  args: true, // true: args are needed
  usage: '<user>',
  guildOnly: true, // false: bot can accept commands via DM
  cooldown: 3, // sec to wait until user can use again

	execute(message, args) {
    let currentusers = guild.members.filter(member => member.presence.status === "online");
    let afkuser = args[0];

		message.reply(currentusers);
	}
};
