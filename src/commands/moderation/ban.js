'use strict';

const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    data: {
        name: 'ban',
        description: 'ban user',
        options:[
            {
                name: 'target-user', 
                description: 'user to ban',
                required: true,
                type: ApplicationCommandOptionType.Mentionable
            }, 
            {
                name: 'reason', 
                description: 'why this user is banned',
                required: false,
                type: ApplicationCommandOptionType.String
            }, 
        ],
    }, 
    //devOnly: bool,
    //testOnly: bool,

    //deleted: bool,
    options: {
        permissionsRequired: [PermissionFlagsBits.Administrator],
        botPermissions: [PermissionFlagsBits.Administrator],
        devOnly: true,
    },
    run: ({ interaction }) => {
        interaction.reply(`YOU ARE BANNED`);
    },
};