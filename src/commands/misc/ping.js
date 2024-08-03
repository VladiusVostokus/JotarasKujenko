'use strict';

module.exports = {
    data: {
        name: 'ping',
        description: 'Pong', 
    },
    //devOnly: bool,
    //testOnly: bool,
    //options:[{array: of, all: aptions}, {some: other_options}],
    //deleted: true,
    run: async ({ client, interaction, handler }) => {
        await interaction.reply(`Pong! ${client.ws.ping} ms`);
    },
};