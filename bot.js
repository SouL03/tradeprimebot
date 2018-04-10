const Discord = require('discord.js');
const client = new Discord.Client();
const CLEAR_MESSAGES = '!clearMessages';
const cfg = require("./config.json")

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setGame("TradePrime");
    client.user.setPresence({ game: { name: 'TradePrime', type: 0 } });
});

client.on("message", async message => {
        const args = message.content.slice(cfg.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
});

client.on('guildMemberAdd', member => {
       member.guild.defaultChannel.send(`Benvenuto nel server, ${member}!`);
       member.guild.author.sendMessage('We strunz')
       console.log(`${member.user.username} has joined`);
});

//Bot Custom Commands
client.on("message", (message) => {
    
    const args = message.content.slice(cfg.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
});
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
