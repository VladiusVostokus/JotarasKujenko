'use strict';

const { ApplicationCommandOptionType } = require('discord.js');
const Level = require('../../models/Level');
const calculateLevelXp = require('../../utils/calculateLevelXP');

module.exports = {
    
    callback: async (client, interaction) => {
        if (!interaction.inGuild()) {
            await interaction.reply('You can only run this command inside a server.');
            return;
          }
      
          await interaction.deferReply();
      
          const mentionedUserId = interaction.options.get('target-user')?.value;
          const targetUserId = mentionedUserId || interaction.member.id;
          const targetUserObj = await interaction.guild.members.fetch(targetUserId);
      
          const fetchedLevel = await Level.findOne({
            userId: targetUserId,
            guildId: interaction.guild.id,
          });
      
          if (!fetchedLevel) {
            interaction.editReply(
              mentionedUserId
                ? `${targetUserObj.user.tag} doesn't have any levels yet. Try again when they chat a little more.`
                : "You don't have any levels yet. Chat a little more and try again."
            );
            return;
          }
      
          let currentRank = fetchedLevel.level;
          let currentXP = calculateLevelXp(currentRank) + fetchedLevel.xp;
          interaction.editReply(`**Level: ${currentRank}, XP: ${currentXP}**`);
    },

    name: 'level',
    description: 'Show level', 
    //devOnly: bool,
    //testOnly: bool,
    options:[
        { 
            name: 'target-user',
            description: 'Whose user see the level',
            type: ApplicationCommandOptionType.Mentionable,
        }, 
    ],
    //deleted: true,
};