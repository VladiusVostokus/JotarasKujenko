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

client.on('interactionCreate', (interaction) => {
  if(!interaction.isChatInputCommand()) return;

  if(interaction.commandName === 'hello') interaction.reply('hello!');

  if(interaction.commandName === 'add') {
    const num1 = interaction.options.get('first').value;

    const num2 = interaction.options.get('second').value;

    interaction.reply(`Сума = ${num1 + num2}`);
  }
});

const REPLY = 'Губка Боб Квадратні штани!';

client.on('messageCreate', (msg) => {
  if(msg.author.bot) return;

  console.log(msg.author.globalName,
    msg.channel.name,
    msg.content); 

  if(msg.content === 'Хто проживає на дні океану?') 
    msg.reply(REPLY);

  if(msg.content === 'Шпаристий, жовтий, куди не зирни') 
    msg.reply(REPLY);
});

client.login(process.env.TOKEN,);