'use strict';

const { EmbedBuilder } = require('discord.js');

module.exports = {
    data: {
        name: 'embed',
        description: 'Send an embed',
    },

    options: {
      devOnly: true
    },

    run: async ({ interaction }) => {
        const embed = new EmbedBuilder()
      .setTitle('Назва вставки')
      .setDescription('Опис')
      .setColor('Green')
      .addFields({ 
        name: 'Назва', 
        value: 'Значення', 
        inline: true ,
      },
      { 
        name: 'Назва2', 
        value: 'Значення2', 
        inline: true ,
      })
      .setImage('https://i.imgur.com/AfFp7pu.png');

      await interaction.reply({ embeds: [embed] });
    },
};