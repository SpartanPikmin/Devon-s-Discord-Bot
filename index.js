const Commando = require('discord.js-commando');
const bot = new Commando.Client();
const TOKEN = 'NTQ5MzMyOTI1NzkxODYyOTY5.D1SWhw.oynfFlvAHllbGOa735WYdGWpImY'
console.log("Testing");

global.currentTeamMembers = [];
global.servers = {};

//enter server when run
bot.registry.registerGroup('simple', 'Simple');
bot.registry.registerGroup('music', 'Music')
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');


bot.on('message', function(message){
  if(message.channel.name != 'devonplayground'){
    return;
  }
    if(message.content == 'Hello'){
      message.channel.sendMessage('Hello, how are you?');
    }
})

bot.login(TOKEN);

