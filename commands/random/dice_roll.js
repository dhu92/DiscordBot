const commando = require('discord.js-commando');

class DiceRollCommand extends commando.Command {
  constructor(client){
    super(client, {
      name: 'roll',
      group: 'random',
      memberName: 'roll',
      description: 'Rolls a dice',
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
      var roll = Math.floor(Math.random() * value) + 1;
      message.reply("You rolled a: " + roll);// + " , test @<"+message.author.username+">");
  }
}

module.exports = DiceRollCommand;
