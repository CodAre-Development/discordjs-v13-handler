module.exports = async (interaction) => {
    if (!interaction.isCommand()) return;
    const { client: bot } = interaction;

    await interaction.deferReply();

    const { commandName } = interaction;

    const command = bot.commandHandler.slashCommands.get(commandName);

    if (!command) return;

    try {
        command.run(interaction);
    } catch (e) {
        console.error(e);
    }
};
