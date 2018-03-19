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
      message.reply("You can summon " + value/50 + " times with " + value + " stones");
}

}
module.exports = SummoningStonesCommand;
