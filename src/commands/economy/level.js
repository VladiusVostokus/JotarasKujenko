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
      
          let currentLevel = fetchedLevel.level;
          let currentXP = calculateLevelXp(currentLevel) + fetchedLevel.xp;
          interaction.editReply(`**Level: ${currentLevel}, XP: ${currentXP}**`);
    },

    name: 'level',
    description: 'Show level', 
    //devOnly: bool,
    //testOnly: bool,
    options:[
        { 
            name: 'target-user',
            description: 'Whose level to see',
            type: ApplicationCommandOptionType.Mentionable,
        }, 
    ],
    //deleted: true,
};