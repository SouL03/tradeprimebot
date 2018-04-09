const Discord = require('discord.js');
const client = new Discord.Client();
const CLEAR_MESSAGES = '!clearMessages';
const cfg = require("./config.json")

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setGame("AmazingPlays");
    client.user.setPresence({ game: { name: 'AmazingPlays Gaming 📘', type: 0 } });
});

client.on("message", async message => {
       const args = message.content.slice(cfg.prefix.length).trim().split(/ +/g);
       const command = args.shift().toLowerCase();
    
       if(message.content === cfg.prefix + 'cancella' ) {
         if(!message.member.hasPermission("MANAGE_PERMISSIONS")) return message.reply("oof.");
         if(!args[0]) return message.channel.send("oof.");
         message.channel.bulkDelete(args[0]).then(() => {
             message.channel.send('Cancellati ${args[0]} messaggi.').then(msg => msg.delete(5000));
         });
       }
    
    
       if(command === "purge") {
            // This command removes all messages from all users in the channel, up to 100.
    
            // get the delete count, as an actual number.
            const deleteCount = parseInt(args[0], 10);
    
            // Ooooh nice, combined conditions. <3
            if(!deleteCount || deleteCount < 2 || deleteCount > 100)
                return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
            // So we get our messages, and delete them. Simple enough, right?
            const fetched = await message.channel.fetchMessages({count: deleteCount});
            message.channel.bulkDelete(fetched)
                .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
       }
});

//Bot Custom Commands
client.on("message", (message) => {
    
    const args = message.content.slice(cfg.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();
    
   
    //if(message.content === '!silver') {
       //message.delete();
       //let Silver = message.guild.roles.find("name","Silver");
       //if(message.member.roles.has(Silver.id) || message.member.hasPermission('MANAGE_ROLES')) {
         
       //} else {
          //message.author.sendMessage("Non hai il permesso");                          
       //}
    //}
    if (message.channel.id === '432590203090239488') {
       if(message.content.indexOf(cfg.prefix) !== 0) {
           message.delete();
       //if (message.content.startsWith(cfg.prefix)
       }
    }
    
    if (message.channel.id === '432288714090348544') {
       message.delete()
       message.author.send('Ok ma non credo proprio')
    }
    
    if (message.channel.id === '432288714090348544') {
         message.delete()
         message.author.send('Ok ma non credo proprio')
    }
        
      if (message.channel.id === '432288714090348544') {
        if (isNaN(message.content)) {
            message.delete()
            message.author.send('Ok ma non credo proprio')
        }
      }
    
      if (message.channel.id == '432297512318009364' && message.content === cfg.prefix + 'lol') {
         message.channel.sendMessage('Io no');   
      }
    
      //if (message.author.bot || !message.content.startsWith(cfg.prefix)) {
          //message.channel.sendMessage('OK');
      //}
      //if (message.author.client || !message.content.startsWith(cfg.prefix)) return;
        //message.channel.send('OK');
    if (message.content === cfg.prefix + 'silver') {
       message.delete();
       let Silver = message.guild.roles.find("name","Silver");
       if(message.member.roles.has(Silver.id) || message.member.hasPermission('MANAGE_ROLES')) {
          message.delete();
          message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della Silver Accademy');
          message.author.sendFile("./Silver-Accademy.png");
       } else {
          message.author.sendMessage("Non hai il permesso cojoneeeee");
          message.delete();
       }
    }

  if (message.content === cfg.prefix + 'gold') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della Gold Accademy');
    message.author.sendFile("./Gold-Accademy.png");
  }

  if (message.content === cfg.prefix + 'platinum') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della Platinum Accademy');
    message.author.sendFile("./Platinum-Accademy.png");
  }

  if (message.content === cfg.prefix + 'diamond') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della Diamond Accademy');
    message.author.sendFile("./Diamond-Accademy.png");
  }

  if (message.content === cfg.prefix + 'champion') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della Champion Accademy');
    message.author.sendFile("./Champion-Accademy.png");
  }
    
  if (message.content === cfg.prefix + 'gc') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della GrandChampion Accademy');
    message.author.sendFile("./GrandChampion-Accademy.png");
  }
  
  //Montage Command
  if (message.content === cfg.prefix + 'giochi') {
    message.delete(10000);
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "AmazingPlays Gaming - Giochi",
        description: "La lista dei giochi disponibili sul nostro server discord",
        fields: [{
            name: "Giochi",
            value: "- **Dead by Daylight**\n- **Rocket League**\n- **Fornite**"
          }
        ],
      }
    }).then(msg => msg.delete(60000));
  
  }
    
    
    
  //Help Command
    
  if (message.content === cfg.prefix + 'aiuto') {
    message.delete(30000);
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "Comandi Supportati",
        description: "La lista dei comandi supportati del bot Animus eSports",
        fields: [{
            name: "Comando Giochi",
            value: "__*!giochi*__ = Lista dei **giochi supportati**"
          }
        ],
      }
    }).then(msg => msg.delete(120000));
  
  }
  
 });



// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
