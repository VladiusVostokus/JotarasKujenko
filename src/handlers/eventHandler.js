'use strict';

const path = require('path');
const getAllFiles = require("../utils/getAllFiles");

module.exports = (client) => {
    const eventFolders = getAllFiles(path.join(__dirname, '..', 'events'), true);
    //console.log(eventFolders);

    for (const eventFolder of eventFolders) {
        const eventFiles = getAllFiles(eventFolder);
        //console.log(eventFiles);
        const eventName = eventFolder.split('\\').pop();
        //console.log(eventName);

        client.on(eventName, async(arg) => {
            for (const eventFile of eventFiles) {
                const eventFunction = require(eventFile);
                await eventFunction(client, arg);
            }
        });
    }
};
