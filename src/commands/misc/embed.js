'use strict';

const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: 'embed',
    description: 'Send an embed',
    //devOnly: bool,
    //testOnly: bool,
    //options:[{array: of, all: aptions}, {some: other_options}],
    //deleted: true,
    callback: (client, interaction) => {
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

      interaction.reply({ embeds: [embed] });
    },
};