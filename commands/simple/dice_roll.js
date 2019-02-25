const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
  constructor(client){
    super(client,{
      name: 'roll',
      group: 'simple',
      memberName: 'roll',
      description: 'rolls a six sided dice'
    });
  }
  async run(message, args){
    let diceroll;
    if(args == ""){
      diceroll = Math.floor(Math.random() * 6) +1;
      message.reply("You rolled a " + diceroll);
    }
    else{
      diceroll = Math.floor(Math.random() * args) +1;
      if(isNaN(diceroll)){
        message.reply(args + " is not a number! rolling with a 6 sided die");
        diceroll = Math.floor(Math.random() * 6) +1;
        message.reply("You rolled a " + diceroll);
      }
      else{
        message.reply("You rolled a " + diceroll);
      }
    }
  }
}

module.exports = DiceRollCommand;