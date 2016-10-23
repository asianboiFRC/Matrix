const fse = require('fs-extra');

module.exports = {
	main: function(bot, message) {
		const rb = "```";
		message.author.sendMessage(`${rb}xl
Matrix (IN DEVELOPMENT)

**General Commands:**
git: Returns my GitHub repo.
ping: Pings the bot.
invite: Returns bot invite link.
help: DMs you with this message.
stats: Shows bot stats
say <content>: Replies with the message!
8ball <content>: Predicts something for you.
server: Returns server info
user <optional-mention>: Returns user info
talk <content>: Talk with Cleverbot!
support <msg>: Sends ASIANBOI a message!
xkcd: Returns a XKCD comic.
google <search>: Googles the inputted info.
emoji: Returns a random emoji.
leet <text>: transforms text into leetspeak.
remindme <number> <timeunit> - <remindertext>: pms you a reminder to do something after the amount of time specified.
uptime: Shows bot uptime.
timeuntil <date>: Shows the time until that date.
timesince <date>: Shows the time since that date.

**Adminstrative Commands (Requires the command user to have 'Bot Commander' Role):**
createchan <name>: Creates a channel with the name specified.
ban <user> <reason>: Bans a user and outputs a mod-log message.
verify: Prove to others who you are.
mute <user> <reason>: Mutes the mentioned user (Server must have role 'muted' that cannot talk).
unmute <user>: Unmutes the mentioned user.
prune <number>: Deletes messages.
kick <user> <reason>: Kicks the mentioned user.
give <user> <role-name>: Gives the user the role (Bot must have higher role).
take <user> <role-name>: Takes the role from the user (Bot must have higher role).

**For ban, mute, and kick, you can choose to make a channel named #mod-log to output into.**

Type ~license for the software license.
Check out my server at https://discord.gg/scfs8Bx

${rb}`);
	}
};