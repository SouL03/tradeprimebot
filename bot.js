const Discord = require('discord.js');
const client = new Discord.Client();
const cfg = require("./config.json");

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setPresence({ game: { name: 'https://discord.gg/M53KjuE', type: 0 } });
});

const events = {
    MESSAGE_REACTION_ADD: 'messageReactionAdd',
    MESSAGE_REACTION_REMOVE: 'messageReactionRemove',
};

client.on('raw', async event => {
    if (!events.hasOwnProperty(event.t)) return;
	const { d: data } = event;
	const user = client.users.get(data.user_id);
	const channel = client.channels.get(data.channel_id) || await user.createDM();

	if (channel.messages.has(data.message_id)) return;

	const message = await channel.fetchMessage(data.message_id);
});

client.on("message", async message => {
    const args = message.content.slice(cfg.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    const newName = args.join(" ");
        
    let Founder = message.guild.roles.find("name","Founder");
    let Moderator = message.guild.roles.find("name","Moderator");
    
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
    
    if(command === 'tpmessage'){
         if(message.member.roles.has(Founder.id) || message.member.roles.has(Moderator.id)) {
           const tpmsg = args.join(" ");
           message.delete();
           message.channel.send(`${tpmsg}`);
         } else {
           message.delete()
           message.author.send('Non hai il permesso di utilizzare questo comando.');   
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

client.on('messageReactionAdd', (reaction, user) => {
    	
   const msg = reaction.message

   msg.channel.fetchMessage('445406407857274883').then(r => {	
	if(msg.channel.id === '431147353232244746'){
		if(reaction.emoji.id === reaction.message.guild.emojis.find("name", "steam").id) {
		  const PC = msg.guild.roles.find('name','PC')
		  var realuser = reaction.message.guild.member(user)
		  realuser.addRole(PC);    
		}
		if(reaction.emoji.id === reaction.message.guild.emojis.find("name", "ps4").id) {
		    const PS4 = msg.guild.roles.find('name','PS4')
		    var realuser = reaction.message.guild.member(user)
		    realuser.addRole(PS4);    
		}
		if(reaction.emoji.id === reaction.message.guild.emojis.find("name", "xbox").id) {
		    const XBOX = msg.guild.roles.find('name','XBOX')
		    var realuser = reaction.message.guild.member(user)
		    realuser.addRole(XBOX);    
		}
		if(reaction.emoji.id === reaction.message.guild.emojis.find("name", "switch").id) {
		    const Switch = msg.guild.roles.find('name','Switch')
		    var realuser = reaction.message.guild.member(user)
		    realuser.addRole(Switch);    
		}
	}
   })
	
});
    
client.on('messageReactionRemove', (reaction, user) => {
    
   const msg = reaction.message

    if(msg.channel.id === "431147353232244746") {

        if(reaction.emoji.id === reaction.message.guild.emojis.find("name", "steam").id) {
            const PC = msg.guild.roles.find('name','PC')
            var realuser = reaction.message.guild.member(user)
            realuser.removeRole(PC);    
        }
        if(reaction.emoji.id === reaction.message.guild.emojis.find("name", "ps4").id) {
            const PS4 = msg.guild.roles.find('name','PS4')
            var realuser = reaction.message.guild.member(user)
            realuser.removeRole(PS4);    
        }
        if(reaction.emoji.id === reaction.message.guild.emojis.find("name", "xbox").id) {
            const XBOX = msg.guild.roles.find('name','XBOX')
            var realuser = reaction.message.guild.member(user)
            realuser.removeRole(XBOX);    
        }
        if(reaction.emoji.id === reaction.message.guild.emojis.find("name", "switch").id) {
            const Switch = msg.guild.roles.find('name','Switch')
            var realuser = reaction.message.guild.member(user)
            realuser.removeRole(Switch);    
        }
    }
	
});

 
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
