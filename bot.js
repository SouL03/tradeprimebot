const Discord = require('discord.js');
const client = new Discord.Client();
const CLEAR_MESSAGES = '!clearMessages';
const cfg = require("./config.json")

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setGame("AmazingPlays");
    client.user.setPresence({ game: { name: 'AmazingPlays Gaming 📘', type: 0 } });
});


//Bot Custom Commands
client.on("message", (message) => {
                                
    if (message.channel.id === '432506666718593024') {
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
  if(message.member.roles.find("name", "Silver")) {
    if (message.content === cfg.prefix + 'silver') {
      message.delete()
      message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della Silver Accademy');
      message.author.sendFile("./Silver-Accademy.png");
    }
  } else if(!message.content === cfg.prefix + 'silver') {
    message.author.sendMessage('Cosa stai cercando di fare? Non fai parte di questa __*accademia*__');
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
