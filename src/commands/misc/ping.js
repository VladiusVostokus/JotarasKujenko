'use strict';

module.exports = {
    name: 'ping',
    description: 'Pong!', 
    //devOnly: bool,
    //testOnly: bool,
    //options:[{array: of, all: aptions}, {some: other_options}],
    //deleted: bool
    callback: (client, interaction) => {
        interaction.reply(`Pong! ${client.ws.ping} ms`);
    },
};