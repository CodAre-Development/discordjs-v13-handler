const GuildCreate = (bot, guild) => {
    bot.commandHandler.registerCommands(guild.id);
};

module.exports = GuildCreate;
