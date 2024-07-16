'use strict';

module.exports = {
    name: 'hello',
    description: 'Replies with hello', 
    //devOnly: bool,
    //testOnly: bool,
    //options:[{array: of, all: aptions}, {some: other_options}],
    //deleted: true,
    callback: (client, interaction) => {
        interaction.reply('hello!');
    },
};