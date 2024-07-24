'use strict';


const { Schema, model } = require('mongoose');

const balanceSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    guildId: {
        type: String,
        required: true,
    },
    balance: {
        type: Number,
        default: 0,
    },
    lastDaily: {
        type: Date,
        required: true,
    },
});

module.exports = model('balance', balanceSchema);
