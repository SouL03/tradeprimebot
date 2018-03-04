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

    if (message.content === prefix + "clearall") {

      // Check the following permissions before deleting messages:
      //    1. Check if the user has enough permissions
      //    2. Check if I have the permission to execute the command

      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(bot.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        console.log("Sorry, I don't have the permission to execute the command \""+message.content+"\"");
        return;
      }

    }
    
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
    
  //Who command
  
  if (message.content === prefix + 'am') {
   message.delete(7000);
   message.channel.send('L\'Animus eSports è un clan di Rocket League, questo è il server discord. Qui si puo\' diventare mebri di questo gruppo, conoscere nuovi giocatori, creare squadre etc... il nostro clan organizza tornei, sempre di Rocket League, dove si consolideranno i rapporti tra i vari team, e tra noi membri del clan. Animus eSports ha anche un canale youtube dove caricheremo soprattutto montaggi, con i migliori goal dei membri di questo gruppo:  https://www.youtube.com/channel/UCzj_OqA5BIlXeX1thOtQmGA?view_as=subscriber').then(msg => msg.delete(120000));   
  }
    
  if (message.content === prefix + 'sc')
   message.delete(5000);
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
            value: "__!silver__ = Immagine della **Silver Accademy**\n__!gold__ = Immagine della **Gold Accademy**\n__!platinum__ = Immagine della **Platinum Accademy**\n__!diamond__ = Immagine della **Diamond Accademy**\n__!champion__ = Immagine della **Champion Accademy**\n__!gc__ = Immagine della **GrandChampion Accademy**"
          },
        ],
    }
});
  }

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
