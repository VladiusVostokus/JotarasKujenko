'use strict';

const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require('discord.js');

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
    
      } catch (err) {
        console.error('Sending role error:', err);
      }
}