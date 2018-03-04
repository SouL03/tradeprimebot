const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setGame("Animus eSports");
});

exports.run = (client, message, args, tools) => {
    if (isNaN(args[0])) return message.channel.send('**Indica un numero valido di messaggi da cancellare');
    if (isNaN(args[0] > 100)) return message.channel.send('**Indica un numero inferiore a 100 per cancellare dei messaggi');
    
    message.channel.bulkDelete(args[0])
      .then( message => message.channel.send('**Hai eliminato \'${messages.size}/${args[0]}\' messaggi**').then( msg => msg.delete({ timeout: 10000 })))
      .catch( error => message.channel.send('**ERRORE: ${error.message}'));
                                                                                        
}

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
        title: "Comandi Supportati",
        description: "La lista dei comandi supportati del bot Animus eSports",
        fields: [{
            name: "Comandi Accademie",
            value: "__!silver__ = Immagine della **Silver Accademy**\n__!gold__ = Immagine della **Gold Accademy**"
          },
        ],
      }
});
  }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
