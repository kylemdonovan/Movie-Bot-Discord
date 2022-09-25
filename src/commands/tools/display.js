const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('display')
        .setDescription('Displays the list of movies!'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
    });

        //const newMessage = movieList
        await interaction.editReply({
            content: newMessage
        });
    }
}