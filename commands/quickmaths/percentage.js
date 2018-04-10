const commando = require('discord.js-commando');

class PercentageCommand extends commando.Command {
  constructor(client){
    super(client, {
      name: 'percentage',
      group: 'quickmaths',
      memberName: 'percentage',
      description: 'Calculates the percentages of the input',
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
      var values = value.split(",");
      var intValues =[];
      for(var i = 0; i < values.length; i++){
          intValues.push(parseInt(values[i]));
      }
      var sum = 0;
      var results = [];
      for(var i = 0; i < intValues.length; i++){
        sum+=intValues[i];
      }
      //console.log(sum);
      var percent = sum/100;
      //console.log(percent);
      for(var i = 0; i < intValues.length; i++){

        results.push(intValues[i] + ": " + ((sum*intValues[i])/100)*intValues.length + "%");
      }
      //console.log(results.length);
      var msg = "The percentage of the numbers " + value + " in the number " + sum + " are: ";
      for(var i = 0; i < results.length; i++){
        msg += results[i] + ", ";
      }
      message.reply(msg);// + " , test @<"+message.author.username+">");
  }

}

module.exports = PercentageCommand;
