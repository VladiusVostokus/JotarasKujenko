'use strict';

const Balance = require('../../models/Balance');
const dailyReward = 1000;

module.exports = {
    name: 'daily',
    description: 'Gain daily reward', 
    //devOnly: bool,
    //testOnly: bool,
    //options:[{array: of, all: aptions}, {some: other_options}],
    //deleted: true,
    callback: async (client, interaction) => {
        if (!interaction.inGuild()) {
            await interaction.reply({
                content: 'You can run this command on this server only',
                ephemeral: true
            });
            return;
        }

        try {
            await interaction.deferReply();
            const query = {
                userId: interaction.member.id,
                guildId: interaction.guild.id,
            }

            let userBalance = await Balance.findOne(query);
            if (userBalance) {
                const lastDailyDate = userBalance.lastDaily.toDateString();
                const currentDate = new Date().toDateString();
                if (lastDailyDate === currentDate) {
                    interaction.editReply('You have already gain your daily reward, come back tomorrow');
                    return;
                }
                userBalance.lastDaily = new Date();
            }
            else {
                userBalance = new Balance({
                    ...query,
                    lastDaily: new Date(),
                })
            }

            userBalance.balance += dailyReward;
            await userBalance.save();
            
            interaction.editReply(`**${dailyReward}** was added to your balance, your balance = **${userBalance.balance}**`);
        } catch (err) {
            console.error('Error with /daily:', err);
        }
    },
};