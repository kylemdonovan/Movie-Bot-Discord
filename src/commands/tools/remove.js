const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
        .setName('remove')
        .setDescription('Add a movie to the list!'),
    async execute(interaction, client){
        const message = await interaction.deferReply({
            fetchReply: true
    });

        const newMessage = `Not yet implemented but coming soon!`
        await interaction.editReply({
            content: newMessage
        });
    }
}