const { SlashCommandBuilder } = require('discord.js');
const URLS = require('../urls.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('busy')
        .setDescription('Gets the current business of the specified dining hall, sourced from the waitz.io UCSC API')
        .addStringOption(option => 
            option.setName('location')
            .setDescription('The location to check the busyness of')
            .setChoices()
            .setRequired(true))

};