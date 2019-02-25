const commando = require('discord.js-commando');

class FunMirrorCommand extends commando.Command {
  constructor(client){
    super(client,{
      name: 'funmirror',
      group: 'simple',
      memberName: 'funmirror',
      description: 'Looks at your reflection in a mirror'
    });
  }
  async run(message, args){
    message.reply(message.author.avatarURL);
  }
}

module.exports = FunMirrorCommand;