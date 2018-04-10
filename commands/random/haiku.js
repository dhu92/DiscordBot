const commando = require('discord.js-commando');

class HaikuCommand extends commando.Command {
  constructor(client){
    super(client, {
      name: 'haiku',
      group: 'random',
      memberName: 'haiku',
      description: 'Sends a random haiku',
    });
  }

  async run(message){
    var haikus = [
        '\nI am first with five \n Then seven in the middle -- \n Five again to end.',
        '\nGreen and speckled legs,\nHop on logs and lily pads\nSplash in cool water.',
        '\nIn a pouch I grow,\nOn a southern continent --\nStrange creatures I know.',
        '\nEaster bunny hides\nEaster eggs are out of sight\nKids look everywhere',
        '\nSpring is in the air \nFlowers are blooming sky high\nChildren are laughing',
        '\nSand scatters the beach\nWaves crash on the sandy shore\nBlue water shimmers',
        '\nSnowflakes are our friends\nThey descend when winter comes\nMaking white blankets',
        '\nHearts represent love\nLove is a beautiful thing\nValentines Day love'
    ];
      var roll = Math.floor(Math.random() * haikus.length);
      message.reply(haikus[roll]);// + " , test @<"+message.author.username+">");
  }
}

module.exports = HaikuCommand;
