const { SlashCommandBuilder, EmbedBuilder, Embed } = require('discord.js');
const { WAITZ_URL, BASE_URL, LOCATIONS, MEAL_URL, MEALS, DIVIDERS, EMOJIS } = require('../../urls.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('busy')
        .setDescription('Gets the current business of the specified dining hall, sourced from the waitz.io UCSC API')
        .addStringOption(option => 
            option.setName('location')
            .setDescription('The location to check the busyness of')
            .setChoices(LOCATIONS)
            .setRequired(true)),

        async getColor(percent) {
            hue = (100 - percent);
            saturation = 100;
            lightness = 50;
            return hslToHex(h, s, l);
        },

        async hslToHex(h, s, l) {
            l /= 100;
            const a = s * Math.min(l, 1 - l) / 100;
            const f = n => {
              const k = (n + h / 30) % 12;
              const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
              return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
            };
            return `${f(0)}${f(8)}${f(4)}`;
          },

        async execute(interaction) {

            const embed = new EmbedBuilder()
                .setColor(0x50C878)
                .setTitle(`Current Waitz Busyness at ${interaction.options.getString('location')}`)
                .setDescription('Not Busy (38%)'); // Example format for a response, will change later 

            await interaction.reply();
            console.log(`User ${interaction.user.tag} used command ${interaction}`);
        }
};