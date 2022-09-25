const { SlashCommandBuilder, SelectMenuBuilder, ActionRowBuilder, SelectMenuOptionBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName("menu")
        .setDescription("Returns a select menu!"),
    async execute(interaction, client){
        const menu = new SelectMenuBuilder()
            .setCustomId(`sub-menu`)
            .setMinValues(1)
            .setMaxValues(1)
            .setOptions(
                new SelectMenuOptionBuilder({
                    label: `Option #1`,
                    value: `https://github.com/kylemdonovan`
                }),
                new SelectMenuOptionBuilder({
                    label: `Option #2`,
                    value: `https://github.com/kylemdonovan1`,
                    //this can later be amended to a custom website if that still interests me
                    //but for now it is basically just a placeholder
                })
            );
        await interaction.reply({
            components: [new ActionRowBuilder().addComponents(menu)]
        });
    },
};