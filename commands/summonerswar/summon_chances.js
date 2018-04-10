const commando = require('discord.js-commando');

class SummoningChancesCommand extends commando.Command {

  constructor(client){
    super(client, {
      name: 'summonchance',
      group: 'summonerswar',
      memberName: 'summonchance',
      description: 'Find out what you should get for your summons!',
      args: [
          {
              key: 'value',
              prompt: 'What is the number of scrolls you have?',
              type: 'integer',
              default: 6
          },
          {
              key: 'type',
              prompt: 'What type of scrolls do you have?',
              type: 'string',
              default: 'mystical'
          }
      ]
    });
  }

  async run(message, {value, type}){
      var rates = [
        [0.915, 0.08, 0.005],
        [0.915, 0.08, 0.005],
        [0.9365, 0.06, 0.0035],
        [0, 0.0935, 0.065]
      ];
      var i = 0;
      var nat3Chance ;
      var nat4Chance;
      var nat5Chance;
      var name = 'Mystical Scroll';
      switch(type.toLowerCase()){
        case 'mystical':
          i = 0;
          nat3Chance = 0.915;
          nat4Chance = 0.08;
          nat5Chance = 0.005;
          name = 'Mystical Scroll';
        break;
        case 'stones':
          i = 1;
          nat3Chance = 0.915;
          nat4Chance = 0.08;
          nat5Chance = 0.005;
          value /= 50;
          name = 'Summoning Stone';
        break;
        case 'ld':
          i = 2;
          nat3Chance = 0.9365;
          nat4Chance = 0.06;
          nat5Chance = 0.0035;
          name = 'Light & Dark Scroll';
        break;
        case 'legendary':
          i = 3;
          nat3Chance = 0.0;
          nat4Chance = 0.0935;
          nat5Chance = 0.065;
          name = 'Legendary Scroll'
        break;
        default:
          i = 0;
          nat3Chance = 0.915;
          nat4Chance = 0.08;
          nat5Chance = 0.005;
          type = 'Mystical';
          name = 'Mystical Scroll';
        break;
      }
      var nat5 = Math.floor(value * nat5Chance);

      var nat4 = Math.floor(value * nat4Chance);

  	  var nat3 = Math.floor(value * nat3Chance);

      switch(type.toLowerCase()){
        case 'mystical':
        case 'stones':
        case 'ld':
        if(nat3+nat4+nat5 != value){
          nat3 = value - nat4 - nat5;
        }
        break;
        case 'legendary':
        if(nat4+nat5 != value){
          nat4 = value - nat5;
        }
        break;
        default:
        if(nat3+nat4+nat5 != value){
          nat3 = value - nat4 - nat5;
        }
        break;
      }

      message.reply("You should get " + nat3 + " 3* Monsters, " + nat4 + " 4* Monsters and " + nat5 + " 5* Monsters for " + value + " " + name + " summons!");
    }

}
module.exports = SummoningChancesCommand;
