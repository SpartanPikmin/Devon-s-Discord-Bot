const commando = require('discord.js-commando');
const YTDL = require('ytdl-core');
const fs = require('fs');

function Play(connection, message){
  var server = servers[message.guild.id];
  console.log("1");
  server.dipatcher = connection.playStream(YTDL(server.queue[0], {filter: "audioonly"}));
  console.log("2");
  server.queue.shift();
  server.dipathcer.on("end", function(){
    if(server.queue[0]){
      Play(connection, message);
    }
    else{
      connection.disconnect();
    }
  }); 
}


class PlayCommand extends commando.Command {
  constructor(client){
    super(client,{
      name: 'play',
      group: 'simple',
      memberName: 'play',
      description: 'adds song to queue'
    });
  }
  async run(message, args){
    if(message.guild.voiceConnection){
      if(!servers[message.guild.id]){
        servers[message.guild.id] = {queue: []}
      }
      console.log(args);
      var server = servers[message.guild.id];
      message.reply("playing " + args);
      server.queue.push(args);
      console.log("before play");
      message.member.voiceChannel.join()
        .then(connection => {
          Play(connection, message);
        })
      
    }
    else{
      message.reply("need to be in a voice chat");
    }
    
  }
}

module.exports = PlayCommand;