const commando = require('discord.js-commando');

class SummoningChancesCommand extends commando.Command {
  constructor(client){
    super(client, {
      name: 'summonchance',
      group: 'summonerswar',
      memberName: 'summonchance',
      description: 'Find out what you should get for your Mystical Scrolls!',
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
    var nat3 = Math.floor(value * 0.915);
    var nat4 = Math.floor(value * 0.08);
    var nat5 = Math.floor(value * 0.005);
      message.reply("You should get " + nat3 + " 3* Monsters, " + nat4 + " 4* Monsters and " + nat5 + " 5* Monsters for " + value + " Mystical Scrolls!");
}

}
module.exports = SummoningChancesCommand;
