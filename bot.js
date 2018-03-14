const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
const CLEAR_MESSAGES = '!clearMessages';

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setGame("AmazingPlays");
    client.user.setPresence({ game: { name: 'AmazingPlays Gaming 📘', type: 0 } });
});



//Bot Custom Commands
client.on("message", (message) => {
    
      if (message.content == CLEAR_MESSAGES) {

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

      // Only delete messages if the channel type is TextChannel
      // DO NOT delete messages in DM Channel or Group DM Channel
      if (message.channel.type == 'text') {
        message.channel.fetchMessages()
          .then(messages => {
            message.channel.bulkDelete(messages);
            messagesDeleted = messages.array().length; // number of messages deleted

            // Logging the number of messages deleted on both the channel and console.
            message.channel.sendMessage("Deletion of messages successful. Total messages deleted: "+messagesDeleted);
            console.log('Deletion of messages successful. Total messages deleted: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Error while doing Bulk Delete');
            console.log(err);
          });
      }
  
  //Montage Command
  if (message.content === prefix + 'giochi') {
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
            value: "- **Dead by Daylight**\n- **Rocket League**\n- **Deceit**\n- **PUBG**\n- **Fornite**"
          }
        ],
      }
    }).then(msg => msg.delete(60000));
  
  }
    
    
    
  //Help Command
    
  if (message.content === prefix + 'aiuto') {
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
