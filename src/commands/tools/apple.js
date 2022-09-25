const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('apple')
        .setDescription("Returns perfectly valid apple opinions!"),
    async execute(interaction, client){
        const menu = new SelectMenuBuilder()
            .setCustomId(`sub-menu`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                new SelectMenuOptionBuilder({
                    label: `Apple maps stink!`,
                    value: `https://tenor.com/view/spongebob-squarepants-toons-cartoons-animation-nicktoons-gif-14827472`
                }),
                new SelectMenuOptionBuilder({
                    label: `Apple maps rock!`,
                    value: `https://tenor.com/view/patrick-star-gif-22136979`,
                    //this can later be amended to a custom website if that still interests me
                    //but for now it is basically just a placeholder
                })
            );
        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        });
    },
};