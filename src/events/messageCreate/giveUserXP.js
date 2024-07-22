'use strict';

const Level = require('../../models/Level');
const calculateLevel = require('../../utils/calculateLevelXP');

module.exports = async(client, msg) => {
    if(!msg.inGuild() || msg.author.bot) return;

    const query = {
        userId: msg.author.id,
        guildId: msg.guild.id,
    };

    const xp = 10;

    try {
        const level = await Level.findOne(query);
        if (level) {
            level.xp += xp;
            if (level.xp > calculateLevel(level.level)) {
                level.xp = 10;
                level.level++;
                msg.channel.send(`${msg.member} have leveled up to ${level.level}`);
            }
            await level.save()
                       .catch((err) => {
                            console.error('Saving updated level error', err);
                            return;
                       });
        }
        else {
            const newLevel = new Level({
                userId: msg.author.id,
                guildId: msg.guild.id,
                xp: xp,
            });
            await newLevel.save();
        }
    } catch (err) {
        console.error('Giving XP error', err);
    }

};