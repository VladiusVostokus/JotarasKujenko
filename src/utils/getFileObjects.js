'use strict';

const path = require('path');
const getAllFiles = require("./getAllFiles");

module.exports = (dir, exceptions = []) => {
    let localCommands = [];
    const commandCategories = getAllFiles(path.join(__dirname, '..', dir), true);
    //console.log(commandCategories);

    for (const commandCategory of commandCategories) {
        const commandFiles = getAllFiles(commandCategory);
        //console.log(commandFiles);
        for (const commandFile of commandFiles) {
            const commandObject = require(commandFile);
            if (exceptions.includes(commandObject.name)) continue;
            localCommands.push(commandObject);
        }
    }

    return localCommands;
};