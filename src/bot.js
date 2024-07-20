'use strict';

require('dotenv').config();
const { Client, 
  IntentsBitField, 
  EmbedBuilder, 
  ActionRow, 
  ActionRowBuilder, 
  ButtonBuilder, 
  ButtonStyle, 
  ActivityType } = require('discord.js');

const eventHandler = require('./handlers/eventHandler');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

const roles = [
  {
    id: '1199359947356508160',
    label: 'Тарас',
  },
  {
    id: '1199359989899341965',
    label: 'Григорович',
  },
  {
    id: '1199360055624073357',
    label: 'Шевченко',
  },
];
  

/*
client.on('ready', async (c) => {
  try {
    const channel = await client.channels.cache.get('870227821614755893');
    if(!channel) return;

    const row = new ActionRowBuilder();

    for(const role of roles) {
      row.components.push(
        new ButtonBuilder()
          .setCustomId(role.id)
          .setLabel(role.label)
          .setStyle(ButtonStyle.Primary)
      )
    }

    await channel.send({
      content: 'Додайте чи видаліть роль',
      components: [row]
    });

    //process.exit();

  } catch (error) {
    console.log(err);
  }
});
*/

eventHandler(client);

client.login(process.env.TOKEN);

/*
  if(!interaction.isChatInputCommand()) return;

  if(interaction.commandName === 'hello') interaction.reply('hello!');

  if(interaction.commandName === 'add') {
    const num1 = interaction.options.get('first').value;

    const num2 = interaction.options.get('second').value;

    interaction.reply(`Сума = ${num1 + num2}`);
  }

  if(interaction.commandName === 'embed')
  {
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
  }
  */