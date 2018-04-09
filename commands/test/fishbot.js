const commando = require('discord.js-commando');

class FishBotCommand extends commando.Command {
  constructor(client){
    super(client, {
      name: 'fishbot',
      group: 'test',
      memberName: 'fishbot',
      description: 'I am a fisherman',
    });
  }

  async run(message){
    message.author = "Tatsumaki";
    message.reply("t!fish");
}

}
module.exports = FishBotCommand;
