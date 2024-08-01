'use strict';

const { testServer, devs } = require('../../../config.json');
const getFileObjects = require('../../utils/getFileObjects');

module.exports = async(client, interaction) => {
    if(!interaction.isChatInputCommand()) return;

    const localCommands = getFileObjects('commands');

    try {
        const commandObject = localCommands.find((cmd) => cmd.name === interaction.commandName);
        if (!commandObject) return;

        if (commandObject.devOnly) {
            if(!devs.includes(interaction.member.id)) {
                interaction.reply({
                    content: 'Only developers can run this command',
                    ephemeral: true,
                });
                return;
            }
        }
        if (commandObject.testOnly) {
            if(!(interaction.guild.id !== testServer)) {
                interaction.reply({
                    content: 'This command can not be run here',
                    ephemeral: true,
                });
                return;
            }
        }
        if (commandObject.permissionsRequired?.length) {
            for (const permission of commandObject.permissionsRequired) {
                if(!interaction.member.permissions.has(permission)) {
                    interaction.reply({
                        content: 'Not enought permossins',
                        ephemeral: true,
                    });
                    return;
                }
            }
        }

        if (commandObject.botPermissions?.length) {
            for (const permission of commandObject.botPermissions) {
                const bot = interaction.guild.members.me;
                if (!bot.permissions.has(permission)) {
                    interaction.reply({
                        content: 'I do not have enought permissions',
                        ephemeral: true,
                    });
                    return;
                }
            }
        }
        await commandObject.callback(client, interaction);
    } catch(err) {
        console.error(`Running command error:`, err);
    }
};