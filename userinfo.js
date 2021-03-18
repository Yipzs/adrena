const Discord = require('discord.js');
module.exports = {
    name: 'userinfo',
    description: "Your user info!",
    execute(message, args) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor ('#FFFFFF')
        .setTitle ('Userinfo')
        .setImage ('message.author.avatarURL')
        .addFields (
            {name: `Username`, value: `${message.author.username}` },
            {name: `User ID`, value: `${message.author.id}` },
            )

        message.reply(newEmbed);

    }    
}