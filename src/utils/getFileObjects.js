'use strict';

const path = require('path');
const getAllFiles = require("./getAllFiles");

module.exports = (dir, exceptions = []) => {
    let localObjects = [];
    const objectsCategories = getAllFiles(path.join(__dirname, '..', dir), true);
    //console.log(commandCategories);

    for (const objectCategory of objectsCategories) {
        const objectFiles = getAllFiles(objectCategory);
        //console.log(commandFiles);
        for (const objectFile of objectFiles) {
            const localObject = require(objectFile);
            if (exceptions.includes(localObject.name)) continue;
            localObjects.push(localObject);
        }
    }

    return localObjects;
};