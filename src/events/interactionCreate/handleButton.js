'use strict';

const getFileObjects = require("../../utils/getFileObjects");

module.exports = async(interaction, client) => {
  if(!interaction.isButton()) return;

  const buttons = getFileObjects('buttons');
  try {
    const button = buttons.find((btn) => btn.customId === interaction.customId);

  if(interaction.isButton()) {
    await button.callback(client,interaction);
  }
  } catch (err) {
    console.error('Handling button error:', err)
  }
};