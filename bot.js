const Discord = require('discord.js');
const client = new Discord.Client();
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
       //member.guild.defaultChannel.send(`Benvenuto nel server, ${member}!`);
       //member.send(`Testing message.`, {
            //files: [
                //"./Welcome Message.png"
            //]
       //}, 'LOL5x')
       //member.send({embed: {
        //color: 3447003,
        //title: "Comandi Supportati",
        //footer: {
          //icon_url: client.user.avatarURL,
          //text: "Sponsorizzato da Trade Prime"
        //}
    //});
   const embed = new Discord.RichEmbed()
    .setTitle("Clicca per ingrandire")
  /*
   * Alternatively, use "#00AE86", [0, 174, 134] or an integer number.
   */
    .setColor(0x00AE86)
    .setFooter("Sponsorizzato da Trade Prime")
    .setImage("./Welcome Message.png")

  message.channel.send({embed});
});

//Bot Custom Commands
client.on("message", (message) => {
    
    const args = message.content.slice(cfg.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
});
 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
