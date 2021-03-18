const Discord = require('discord.js');
module.exports = {
    name: 'help',
    description: "helpembed",
    execute (message , args) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor ('#de5050')
        .setTitle ('Help')
        .addFields (
            {name: '**~help**', value:'Open the helper embed.'},
            {name: '**~ban** ``Mod Permissions Needed`` ', value:'This command is used to ban someone.'},
            {name: '**~kick** ``Mod Permissions Needed``', value:'This command is used to kick someone.'},
            {name: '**~purge** ``Mod Permissions Needed`` ', value: 'This command is used to clear messages.'},
            {name: '**~userinfo**', value:'Find info about yourself.'},
            {name: '**~ping**', value:'pong.'}
        )
            
        message.channel.send(newEmbed)

    }


}