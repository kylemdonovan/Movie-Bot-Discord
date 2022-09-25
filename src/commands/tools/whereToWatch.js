const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('whereToWatch')
        .setDescription('Displays where to watch a movie!'),
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

//this is goig to let a user search for a movie and it will google 
// search for the movie and display alist of sites on where you can watch
// and it should have a free section and a paid section eventually
