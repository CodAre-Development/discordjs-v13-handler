module.exports = async (interaction) => {
    if (!interaction.isCommand()) return;
    const { client: bot } = interaction;

    await interaction.deferReply();

    const { commandName } = interaction;

    const command = bot.commandHandler.applicationCommands.get(commandName);

    if (!command) return;

    try {
        command.slashRun({
            bot: interaction.client,
            interaction,
            options: interaction.options,
        });
    } catch (e) {
        console.error(e);
    }
};
