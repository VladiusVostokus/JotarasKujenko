'use strict';

const Level = require('../../models/Level');
const calculateLevel = require('../../utils/calculateLevelXP');
const cooldowns = new Set();

module.exports = async(client, msg) => {

    const authorId = msg.author.id;
    if(!msg.inGuild() || msg.author.bot ||
       cooldowns.has(authorId)) return;

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
            cooldowns.add(authorId);
            setTimeout(() => {
                cooldowns.delete(authorId);
            }, 30000);
        }
        else {
            const newLevel = new Level({
                userId: msg.author.id,
                guildId: msg.guild.id,
                xp: xp,
            });
            await newLevel.save();
            setTimeout(() => {
                cooldowns.delete(authorId);
            }, 30000);
        }
    } catch (err) {
        console.error('Giving XP error', err);
    }

};