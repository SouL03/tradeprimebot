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
    
  let deleteStuff = () => {
    let count = 0;
    message.channel.fetchMessages({limit: 100})
     .then(messages => {
       let messagesArr = messages.array();
       let messageCount = messagesArr.length;

       for(let i = 0; i < messageCount; i++) {
         messagesArr[i].delete()
          .then(function() {
            count = count + 1;
            if(count >= 100) {
              deleteStuff();
            }
          })
          .catch(function() {
            count = count + 1;
            if(count >= 100) {
              deleteStuff();
            }
          })
       }
     })
     .catch(function(err) {
       console.log('error thrown');
       console.log(err);
     });
  };
  
  if(message.content === '!:cleanse') {
    deleteStuff();
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
