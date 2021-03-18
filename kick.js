const Discord = require('discord.js');
module.exports = {

    name: 'kick',
    cooldown: 5,
    aliases: [],
    description: 'Kick a member (Mods Only; Role needs "Kick Members" permission)',
    guildOnly: true,
    usage: '<user>',
    args: false,
    execute(message, args) {
        if (message.member.hasPermission('KICK_MEMBERS')) {

            const user = message.mentions.users.first();

            if (user) {

                const member = message.guild.member(user);

                if (member) {

                    member
                        .kick('Optional reason that will display in the audit logs')
                        .then(() => {

                            message.reply(`Successfully kicked ${user.tag}`);
                        })
                        .catch(err => {

                            message.reply('I was unable to kick the member');

                            console.error(err);
                        });
                } else {

                    message.reply("That user isn't in this guild!");
                }
            } else {
                message.reply("You didn't mention the user to kick!");
            }
        } else {
            message.reply("You cannot kick members.")
        }
    },
};