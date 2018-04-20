const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require("./config.json")

client.on("ready", () => {
    console.log("I am ready!");
});

client.on('messageReactionAdd', (reaction, user) => {
    const msg = reaction.message;
    if(msg.channel.id === "431147353232244746") {
        //if(reaction.emoji.name === client.emojis.get("431581850457079819")) {
        //client.emojis.get("436916081957797889")
        if (reaction.emoji.id === reaction.message.guild.emojis.find("name", "steam").id) {
            const PC = msg.guild.roles.find("name","PC")
            if (!PC) return reaction.message.channel.send("Non è stato possibile trovare il ruolo PC");
            reaction.message.member.addRole(PC);
            //var realuser = reaction.message.guild.member(user)
            //user.addRole(user.guild.roles.add("name", "Steam"));
            //realuser.addRole(PC);
        }
    
        if (reaction.emoji.id === reaction.message.guild.emojis.find("name", "xbox").id) {
            const XBOX = msg.guild.roles.find("name","XBOX")
            var realuser = reaction.message.guild.member(user)
            //user.addRole(user.guild.roles.add("name", "Steam"));
            realuser.addRole(XBOX);
        }
        
        if (reaction.emoji.id === reaction.message.guild.emojis.find("name", "ps4").id) {
            const PS4 = msg.guild.roles.find("name","PS4")
            var realuser = reaction.message.guild.member(user)
            //user.addRole(user.guild.roles.add("name", "Steam"));
            realuser.addRole(PS4);
        }
        
    }
});

client.on("message", async message => {
    const args = message.content.slice(cfg.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const newName = args.join(" ");
        
    let Founder = message.guild.roles.find("name","Founder");
    
    if(command === 'nick') {
          if(message.member.roles.has(Founder.id)) {
              if(newName) {
                client.user.setUsername(newName);
                message.channel.send('UserName del bot cambiato in ' + newName)
              } else {
                message.channel.send('Errore durante l\'esecuzione di tale comando. Controlla la console....');
              }
          } else {
              message.author.sendMessage("Non hai il permesso di utilizzare questo comando");
              message.delete();
          }
    }
    
});

client.on('guildMemberAdd', member => {
       //member.guild.defaultChannel.send(`Benvenuto nel server, ${member}!`);
       //member.send(`Testing message.`, {
            //files: [
                //"./Welcome Message.png"
            //]
       //}, 'LOL5x')
       member.sendMessage({embed: {
         color: 10038562,
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
