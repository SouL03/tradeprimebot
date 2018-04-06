const Discord = require('discord.js');
const client = new Discord.Client();
const prefix = "!";
const CLEAR_MESSAGES = '!clearMessages';

client.on("ready", () => {
    console.log("I am ready!");
    client.user.setGame("AmazingPlays");
    client.user.setPresence({ game: { name: 'AmazingPlays Gaming 📘', type: 0 } });
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
  const command = args.shift().toLowerCase();
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
    
      if (message.content == CLEAR_MESSAGES) {

      // Check the following permissions before deleting messages:
      //    1. Check if the user has enough permissions
      //    2. Check if I have the permission to execute the command

      if (!message.channel.permissionsFor(message.author).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Non hai il permesso per eseguire questo comando \""+message.content+"\"");
        console.log("Sorry, you don't have the permission to execute the command \""+message.content+"\"");
        return;
      } else if (!message.channel.permissionsFor(client.user).hasPermission("MANAGE_MESSAGES")) {
        message.channel.sendMessage("Non ho il permesso di eseguire questo comando \""+message.content+"\"");
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
            message.channel.sendMessage("Messaggi cancellati con successo. Messaggi cancellati: "+messagesDeleted).then(msg => msg.delete(3000));
            console.log('Messaggi cancellati con successo. Messaggi cancellati: '+messagesDeleted)
          })
          .catch(err => {
            console.log('Errore nel facendo Bulk Delete');
            console.log(err);
          });
      }
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
            value: "- **Dead by Daylight**\n- **Rocket League**\n- **PUBG**\n- **Fornite**"
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
