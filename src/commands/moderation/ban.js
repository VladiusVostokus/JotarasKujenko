'use strict';

const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
    name: 'ban',
    description: 'ban aaaaaaaaaaa user', 
    //devOnly: bool,
    //testOnly: bool,
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

    //deleted: bool,

    permissionsRequired: [PermissionFlagsBits.Administrator],
    botPermissions: [PermissionFlagsBits.Administrator],
    
    callback: (client, interaction) => {
        interaction.reply(`YOU ARE BANNED`);
    },
    
};