'use strict';

const {ApplicationCommandOptionType } = require('discord.js');

module.exports = {
    data: {
        name: 'add',
        description: 'Replies sum of 2 numbers',
        options: [
            {
                name: 'first',
                description: 'The first num',
                type: ApplicationCommandOptionType.Number,
                required: true,
                choices: [
                    {
                        name: 'one',
                        value: 1,
                    },
                    {
                        name: 'two',
                        value: 2,
                    },
                ],
            },
            {
                name: 'second',
                description: 'The second num',
                type: ApplicationCommandOptionType.Number,
                required: true,
            }
        ],
    },
    run: async ({ interaction }) => {
        const num1 = interaction.options.get('first').value;
        const num2 = interaction.options.get('second').value;
        await interaction.reply(`Сума = ${num1 + num2}`);
    },
};