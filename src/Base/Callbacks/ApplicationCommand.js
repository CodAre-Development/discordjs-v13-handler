module.exports = async (interaction) => {
    if (!interaction.isCommand()) return;
    const { client: bot } = interaction;

    await interaction.deferReply();

    const { commandName } = interaction;

    const command = bot.commandHandler.applicationCommands.get(commandName);

    if (!command) return;

    try {
        if (interaction.isCommand()) {
            command.slashRun(interaction);
        }
    } catch (e) {
        console.error(e);
    }
};
