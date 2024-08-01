'use strict';

module.exports = {
    customId: '1199359947356508160',
    callback: async(client, interaction) => {
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