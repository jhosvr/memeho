module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	aliases: ['commands'],
	usage: '[command name]',
	cooldown: 3,

	execute(message, args) {
		message.channel.send("hahah " + message.author + ", no.");
	},
};
