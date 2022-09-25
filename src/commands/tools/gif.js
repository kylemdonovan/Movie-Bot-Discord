const { SlashCommandBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
	    .setName('gif')
	    .setDescription('Sends a random gif!')
	    .addStringOption(option =>
		    option.setName('category')
			    .setDescription('The gif category')
			    .setRequired(true)
			    .addChoices(
				    { name: 'Yes', value: 'gif_yes' },
				    { name: 'No', value: 'gif_no' },
				    { name: 'Maybe', value: 'gif_maybe' },
			    ))
};