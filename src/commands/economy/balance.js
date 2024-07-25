'use strict';

const { ApplicationCommandOptionType } = require('discord.js');
const Balance = require('../../models/Balance');

module.exports = {
    
    callback: async (client, interaction) => {
        if (!interaction.inGuild()) {
            await interaction.reply({
                content: 'You can run this command on this server only',
                ephemeral: true
            });
            return;
        }

        await interaction.deferReply();

        const mentionedUserId = interaction.options.get('target-user')?.value;
        const targetUserId = mentionedUserId || interaction.member.id;

        const balance = await Balance.findOne({
            userId: targetUserId,
            guildId: interaction.guild.id,
        });

        if (!balance) {
            interaction.editReply(`<@${targetUserId}> have no balance yet`);
            return
        }
        
        interaction.editReply(
            targetUserId === interaction.member.id
              ? `Your balance is **${balance.balance}**`
              : `<@${targetUserId}> balance is **${balance.balance}**` 
          );
    },

    name: 'balance',
    description: 'Show balance', 
    //devOnly: bool,
    //testOnly: bool,
    options:[
        { 
            name: 'target-user',
            description: 'Whose balance to see',
            type: ApplicationCommandOptionType.Mentionable,
        }, 
    ],
    //deleted: true,
};