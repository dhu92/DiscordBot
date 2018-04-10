const commando = require('discord.js-commando');

class SummoningStonesCommand extends commando.Command {
  constructor(client){
    super(client, {
      name: 'stones',
      group: 'summonerswar',
      memberName: 'stones',
      description: 'Calculate how many summons you can make',
      args: [
            {
                key: 'value',
                prompt: 'What is the maximum number you wish to appear?',
                type: 'integer',
                default: 6
            }
        ]
    });
  }

  async run(message, {value}){
      message.reply("You can summon " + Math.floor(value/50) + " times with " + value + " stones. You need " + (50 - Math.floor(value%50)) + " more stones for another one.");
}

}
module.exports = SummoningStonesCommand;
