'use strict';

const { ButtonKit } = require('commandkit');
const { ButtonStyle, ActionRowBuilder } = require('discord.js');

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
    
module.exports = async(client) => {
    try {
        const channel = await client.channels.cache.get('870227821614755893');
        if(!channel) return;
    
        const row = new ActionRowBuilder();
        const buttons = [];
    
        for(const role of roles) {
          const button = new ButtonKit()
            .setCustomId(role.id)
            .setLabel(role.label)
            .setStyle(ButtonStyle.Primary);
          row.components.push(button);
          buttons.push(button);
        }
    
        const message = await channel.send({
          content: 'Додайте чи видаліть роль',
          components: [row]
        });

        const b1 = buttons[0];
        const b2 = buttons[1];
        const b3 = buttons[2];

        b1.onClick(async(interaction) => {
          await changeRole(interaction)
        },{ message });

        b2.onClick(async(interaction) => {
          await changeRole(interaction)
        },{ message });

        b3.onClick(async(interaction) => {
          await changeRole(interaction)
        },{ message });
    
    } catch (err) {
      console.error('Sending role error:', err);
  }
};

const changeRole = async(interaction) => {
  await interaction.deferReply({ ephemeral: true});
  
  const role = interaction.guild.roles.cache.get(
      interaction.customId
  );

  if(!role) {
      interaction.editReply({
          content: 'Ролі не існує',
      });
      return;
  }

  const hasRole = interaction.member.roles.cache.has(role.id);

  if (hasRole) {
      await interaction.member.roles.remove(role);
      await interaction.editReply(`Роль ${role} була взнята`);
      return;
  }
  await interaction.member.roles.add(role);
  await interaction.editReply(`Роль ${role} була назначена`);
};