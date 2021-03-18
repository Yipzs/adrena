const Discord = require('discord.js');
module.exports = {
    name: 'rules',
    description: "Making an embed" ,
    execute (message , args) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor ('#de5050')
        .setTitle ('Rules')
        .setDescription ('These are the rules for the server! Not all rules are established within this emebed. Please use common sense while in the server!')
        .addFields (
            {name: 'Rule 1', value:'Follow Discord TOS at all times.'},
            {name: 'Rule 2', value:'Respect all staffs decisions.'},
            {name: 'Rule 3', value:'NSFW is prohibited.'},
            {name: 'Rule 4', value:'Racism and racist slurs are not allowed.'},
            {name: 'Rule 5', value:'Harassment towards others is not tolerated.'},
            {name: 'Rule 6', value:'Begging for roles is not allowed.'},
            {name: 'Rule 7', value:'Leaking others private information.'},
            {name: 'Rule 8', value:'Mis-using spoilers for prohibited words.'},
            {name: 'Rule 9', value:'DM Advertisement is not allowed and against TOS.'}
        )
         
        .setFooter('Please abide by the rules to prevent yourself from either getting kicked or banned!');
            
        message.channel.send(newEmbed)

    }


}