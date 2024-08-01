'use strict';

const getButtons = require("../../utils/getButtons");

module.exports = async(client, interaction) => {
  if(!interaction.isButton()) return;

  const buttons = getButtons();
  try {
    const button = buttons.find((btn) => btn.customId === interaction.customId);

  if(interaction.isButton()) {
    await button.callback(client,interaction);
  }
  } catch (err) {
    console.error('Handling button error:', err)
  }
};