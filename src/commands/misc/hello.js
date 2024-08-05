'use strict';

module.exports = {
    data: {
        name: 'hello',
        description: 'Replies with hello', 
    },
    //devOnly: bool,
    //testOnly: bool,
    //options:[{array: of, all: aptions}, {some: other_options}],
    //deleted: true,
    run: async ({ interaction }) => {
        await interaction.reply('hello!');
    },
};