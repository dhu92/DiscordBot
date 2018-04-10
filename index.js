const Discord = require('discord.js');
const commando = require('discord.js-commando');
const config = require("./config.json");
//const bot = new Discord.Client();
const bot = new commando.Client({
    commandPrefix: config.prefix
    });

bot.on('ready', function() {
    bot.user.setUsername("SudoBot");
});

bot.on("guildMemberAdd", (member) => {
    //console.log(`New User ${member.user.username} has joined ${member.guild.name}` );
    member.guild.defaultChannel.send(`${member.user} has joined this server`);
});

bot.registry.registerGroup('random', 'Random');
bot.registry.registerGroup('fishing', 'Fishing');
bot.registry.registerGroup('pokemon', 'Pokemon');
bot.registry.registerGroup('summonerswar', 'SummonersWar');
bot.registry.registerGroup('test', 'Test');
bot.registry.registerGroup('quickmaths', 'Quickmaths');
bot.registry.registerGroup('fhv', 'FHV');
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + '/commands');

bot.login(config.token);
