'use strict';

const { ActivityType } = require('discord.js');
  
module.exports = (client) => {
    client.user.setActivity({
        name: "Вірші Тараса Шевченка",
        type: ActivityType.Listening,
    });
}