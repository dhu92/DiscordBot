const commando = require('discord.js-commando');

class BrokenBuildCommand extends commando.Command {
  constructor(client){
    super(client, {
      name: 'brokenbuild',
      group: 'summonerswar',
      memberName: 'brokenbuild',
      description: 'Are broken builds worth it?',
    });
  }

  async run(message){
    message.reply("You are a bad person and you will burn in hell because you are too lazy to farm good runes!");
}
 
}
module.exports = BrokenBuildCommand;
