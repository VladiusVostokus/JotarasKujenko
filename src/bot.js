'use strict';

require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on('ready', (bot) => {
  console.log(`${bot.user.tag} is launched`);
});

client.on('messageCreate', (msg) =>{
  console.log(msg.author.globalName, msg.channel.name, msg.content);
});

client.login(process.env.TOKEN,);