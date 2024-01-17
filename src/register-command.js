'use strict';

require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'hello',
        description: 'Replies with hello',
    },
    {
        name: 'add',
        description: 'Replies with hello',
        options: [
            {
                name: 'first',
                description: 'The first num',
                type: ApplicationCommandOptionType.Number,
                required: true,
            },
            {
                name: 'second',
                description: 'The second num',
                type: ApplicationCommandOptionType.Number,
                required: true,
            }
        ],
    },
];

const rest = new REST({ version: '10' })
    .setToken(process.env.TOKEN);

(async () => {
    try {
    console.log('Registering / commands...');
      
        await rest.put(
        Routes.applicationGuildCommands(
            process.env.CLIENT_ID,
            process.env.GUILD_ID
            ),
            { body: commands }
        );
        console.log('/ commands were registered successfully!');
    } catch (error) {
        console.log(`There was an error: ${error}`);
    }
})();
