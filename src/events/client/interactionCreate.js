module.exports = {
    name: "interactionCreate",
    async execute(interaction, client){
        if (interaction.isChatInputCommand()){
            const { commands } = client;
            const { commandName } = interaction;
            const command = commands.get(commandName);
            if (!command) return;

            try {
                await command.execute(interaction, client);
            } catch (error){
                console.error(error);
                await interaction.reply({
                    content: `Something went wrong with this command`,
                    ephemeral: true
                });
            }
        } else if (interaction.isButton()){
            //if its not a command we can check if it is a button!
            const {buttons} = client;
            const { customId } = interaction;
            const button = buttons.get(customId)

            if (!button) return new Error('There is no code for this button.');
            //dead button case

            try{
                await button.execute(interaction, client);
                
            } catch (err) {
                console.error(err)
            }
        } else if (interaction.isSelectMenu()){
            const { selectMenus } = client;
            const { customId } = interaction;
            const menu = selectMenus.get(customId);
            if (!menu) return new Error("There is no code for this select menu.");

            try{
                await menu.execute(interaction, client);
            } catch (error){
                console.error(error);
            }
        }
    },
};