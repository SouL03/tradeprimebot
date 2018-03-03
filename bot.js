const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setGame("Animus eSports");
});


//Bot Custom Commands
client.on("message", (message) => {
    
  //Accademy Commands

  if (message.content === prefix + 'silver') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della Silver Accademy');
    message.author.sendFile("./Silver-Accademy.png");
  }

  if (message.content === prefix + 'gold') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della Gold Accademy');
    message.author.sendFile("./Gold-Accademy.png");
  }

  if (message.content === prefix + 'platinum') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della Platinum Accademy');
    message.author.sendFile("./Platinum-Accademy.png");
  }

  if (message.content === prefix + 'diamond') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della Diamond Accademy');
    message.author.sendFile("./Diamond-Accademy.png");
  }

  if (message.content === prefix + 'champion') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della Champion Accademy');
    message.author.sendFile("./Champion-Accademy.png");
  }
    
  if (message.content === prefix + 'gc') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ecco il logo della GrandChampion Accademy');
    message.author.sendFile("./GrandChampion-Accademy.png");
  }
    
  //Help Command
    
  if (message.content === prefix + 'help') {
    message.delete(30000);
    message.channel.send({embed: {
        color: 3447003,
        author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
        },
        title: "**Comandi Supportati**",
        description: "La lista dei comandi supportati del bot Animus eSports",
        fields: [{
            name: "Comandi Accademie",
            value: "Io/Posso"
          },
        ],
      }
});
  }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
