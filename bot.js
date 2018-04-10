const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require("./config.json")

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setGame("");
    client.user.setPresence({ game: { name: '', type: 0 } });
});

client.on("message", async message => {
        const args = message.content.slice(cfg.prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
    
});

client.on('guildMemberAdd', member => {
       //member.guild.defaultChannel.send(`Benvenuto nel server, ${member}!`);
       //member.send(`Testing message.`, {
            //files: [
                //"./Welcome Message.png"
            //]
       //}, 'LOL5x')
       member.sendMessage({embed: {
         color: 3447003,
         title: "**Clicca per ingrandire l'immagine**",
         "image":{
           "url":"https://imgur.com/PMTOzjd.png",
         },
         footer: {
           text: "Sponsorizzato da Trade Prime",
           icon_url: client.user.avatarURL
         }
       }
    })
});

//Bot Custom Commands
client.on("message", (message) => {
    
    const args = message.content.slice(cfg.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
});
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
