const commando = require('discord.js-commando');

class CoinFlipCommand extends commando.Command {
  constructor(client){
    super(client,{
      name: 'flip',
      group: 'simple',
      memberName: 'flip',
      description: 'flips a coin to get either heads or tails'
    });
  }
  async run(message, args){
    var chance = Math.floor(Math.random() *2);
    if(chance == 0){
      message.reply("your coin landed on heads!", {files: [__dirname + "/coinpics/coinheads.jpeg"]});
    }
    else{
      message.reply("your message landed on tails", {files: [__dirname + "/coinpics/cointails.jpeg"]});
    }
  }
}

module.exports = CoinFlipCommand;