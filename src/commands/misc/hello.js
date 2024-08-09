'use strict';

module.exports = {
    data: {
        name: 'hello',
        description: 'Replies with hello', 
    },
    options: {
        devOnly: true
    },
    run: async ({ interaction }) => {
        await interaction.reply('hello!');
    },
};