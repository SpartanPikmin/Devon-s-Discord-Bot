const commando = require('discord.js-commando');

class LeaveChannelCommand extends commando.Command {
  constructor(client){
    super(client,{
      name: 'leave',
      group: 'simple',
      memberName: 'leave',
      description: 'leaves the channel for music'
    });
  }
  async run(message, args){
    if(message.guild.voiceConnection){
      message.guild.voiceConnection.disconnect();
    }
    else{
      message.reply("I must be in a voice channel inorder to leave one")
    }
    
  }
}

module.exports = LeaveChannelCommand;