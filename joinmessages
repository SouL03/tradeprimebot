const Discord = require('discord.js');
const client = new Discord.Client ();

client.on('guildMemberAdd', member => {
       member.guild.defaultChannel.send(`Benvenuto nel server, ${member}!`);
       console.log(`${member.user.username} è entrato`);
});
