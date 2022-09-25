const { SlashCommandBuilder } = require('discord.js');


module.exports = {
    data: new SlashCommandBuilder()
	    .setName('add')
	    .setDescription('Add a movie!')
	    .addStringOption(option =>
		    option.setName('name')
			    .setDescription('name of movie')
			    .setRequired(true)
			    .addChoices(
				    { name: 'Funny', value: 'gif_funny' },
				    { name: 'Meme', value: 'gif_meme' },
				    { name: 'Movie', value: 'gif_movie' },
			    ))
};





// const { SlashCommandBuilder } = require('discord.js');
// //movieList = []
// //movie = //whatever is after add
// //movieList is probably going to need to relocate
// module.exports = {
//     data: new SlashCommandBuilder()
//         .setName('add')
//         .setDescription('Add a movie to the list!'),
//     async execute(interaction, client){
//         const message = await interaction.deferReply({
//             fetchReply: true,

//     });
//         //movieList = movieList.append(movie)
//         const newMessage = `Movie "Added"!`
//         await interaction.editReply({
//             content: newMessage
//         });
//     } 
// }