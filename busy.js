const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
const { WAITZ_URL, BASE_URL, LOCATIONS, MEAL_URL, MEALS, DIVIDERS, EMOJIS } = require('./urls.js');
const { fetchMenu, getColor } = require('./fetch-menu.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('busy')
        .setDescription('Gets the current business of the specified dining hall, sourced from the waitz.io UCSC API')
        .addStringOption(option => 
            option.setName('location')
            .setDescription('The location to check the busyness of')
            .setChoices(...LOCATIONS)
            .setRequired(true)),
        async execute(interaction) {

            const embed = new EmbedBuilder()
                .setColor(getColor(12))
                .setTitle(`Current Waitz Busyness at ${interaction.options.getString('location')}`)
                .setDescription('Not Busy (38%)'); // Example format for a response, will change later 
        
            await interaction.reply();
            console.log(`User ${interaction.user.tag} used command ${interaction}`);
        },
};