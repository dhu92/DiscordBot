const FormulaParser = require('hot-formula-parser').Parser;
const commando = require('discord.js-commando');

class QuickmathsCommand extends commando.Command {
  constructor(client){
    super(client, {
      name: 'quickmaths',
      group: 'quickmaths',
      memberName: 'quickmaths',
      description: 'Quickmaths',
      args: [
    {
        key: 'value',
        prompt: 'Give me your numbers seperated by a ,',
        type: 'string',
        default: 6
    }
]
    });
  }

  async run(message, {value}){
      var parser = new FormulaParser();
      var msg = "";
      msg += (parser.parse(value).result);
      message.reply(value + " equals " + msg + ", quickmaths");// + " , test @<"+message.author.username+">");
  }

}

module.exports = QuickmathsCommand;
