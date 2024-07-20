'use strict';

module.exports = async(client, interaction) => {
  if(!interaction.isButton() &&
     !interaction.isChatInputCommand()) return;

  if(interaction.isButton()) {

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
  }
};