const commando = require('discord.js-commando');

class FishCommand extends commando.Command {

  constructor(client){
    super(client, {
      name: 'fish',
      group: 'fishing',
      memberName: 'fish',
      description: 'Try to fish'
    });
  }

  async run(message, args){
    var fishies = [
      ' a common fish! :fish:',
      ' a rare fish! :tropical_fish:',
      ' an ugly fish! :blowfish:'
    ];
      var roll = Math.floor(Math.random() * 3);
    //  message.reply("You rolled a: " + roll;// + " , test @<"+message.author.username+">");
      message.reply("You catched " + fishies[roll]);
  }
}

module.exports = FishCommand;
