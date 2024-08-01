'use strict';

const { testServer } = require('../../../config.json');
const areCommandsDifferent = require('../../utils/areCommandsDifferent');
const getApplicationCommands = require('../../utils/getApplicationCommands');
const getFileObjects = require('../../utils/getFileObjects');

module.exports = async(client) => {
    try{
        const localCommands = getFileObjects('commands');
        const applicationCommands = await getApplicationCommands(client, testServer);

        for (const localCommand of localCommands) {
            const { name, description, options } = localCommand;
            const existingCommand = await applicationCommands.cache.find((cmd) => 
                cmd.name === name
            );

            if (existingCommand) {
                if(localCommand.deleted) {
                    await applicationCommands.delete(existingCommand.id);
                    console.log(`Delete command '${name}'`);
                    continue; 
                }
                if (areCommandsDifferent(existingCommand, localCommand)) {
                    await applicationCommands.edit(existingCommand.id, {
                        description,
                        options,
                    });
                    console.log(`Edit command '${name}'`);
                };

            }
            else {
                if (localCommand.deleted) {
                    console.log(`Skip registering command '${name}', it's deleted`);
                    continue;
                }

                await applicationCommands.create({
                    name,
                    description,
                    options,
                });

                console.log(`Command '${name}' was registered`);
            }  
        }
    } catch(err) {
        console.error('Registration commands error:', err);
    }
};