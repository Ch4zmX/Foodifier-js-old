const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
const { WAITZ_URL, BASE_URL, LOCATIONS, MEAL_URL, MEALS, DIVIDERS, EMOJIS } = require('../../urls.js');
const { fetchMenu, getColor } = require('../../fetch-menu.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('busy')
        .setDescription('Get the busyness of a specified dining hall, sourced from the waitz.io UCSC API')
        .addStringOption(option =>
            option.setName('location')
            .setDescription('The dining hall or cafe location to get the busyness of')
            .setRequired(true)),
    
    async execute(interaction) {
        await interaction.reply('hi');
        console.log(`User ${interaction.user.tag} used command ${interaction}`);
    }
};