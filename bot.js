const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on("message", (message) => {

  const prefix = "!";

  if (message.content === prefix + 'silver') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ho visto che vorresti la foto profilo della Silver Accademy. Ti arriverà fra qualche secondo! ;)');
    message.author.sendFile("https://imgur.com/BIZfrfR");
  }

  if (message.content === prefix + 'gold') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ho visto che vorresti la foto profilo della Gold Accademy. Ti arriverà fra qualche secondo! ;)');
    message.author.sendFile("https://imgur.com/Na9fD8g");
  }

  if (message.content === prefix + 'platino') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ho visto che vorresti la foto profilo della Platinum Accademy. Ti arriverà fra qualche secondo! ;)');
    message.author.sendFile("https://imgur.com/vMDx2ok");
  }

  if (message.content === prefix + 'diamond') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ho visto che vorresti la foto profilo della Diamond Accademy. Ti arriverà fra qualche secondo! ;)');
    message.author.sendFile("https://imgur.com/bCiLkXv");
  }

  if (message.content === prefix + 'champion') {
    message.delete();
    message.author.sendMessage('Ciao ' + message.author + '. Ho visto che vorresti la foto profilo della Champion Accademy. Ti arriverà fra qualche secondo! ;)');
    message.author.sendFile("https://imgur.com/ZtZ58ko");
  }

client.user.setGame("Animus eSports");
client.user.setStatus("Online");
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
