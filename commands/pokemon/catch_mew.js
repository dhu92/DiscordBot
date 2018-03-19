
const commando = require('discord.js-commando');

class CatchMewCommand extends commando.Command {
  constructor(client){
    super(client, {
      name: 'catch_mew',
      group: 'pokemon',
      memberName: 'catch_ew',
      description: 'Catches a mew.'
    });
  }

  async run(message, args){
      message.reply("You catched a mew https://img.pokemondb.net/artwork/mew.jpg");
}
}

module.exports = CatchMewCommand;
