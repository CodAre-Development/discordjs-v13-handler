const { MessageCommandExecute, SlashCommandExecute } = require('./Callbacks');

module.exports = class {
    constructor(bot) {
        this.bot = bot;
    }

    async init() {
        this.bot.on('ready', () => console.log('A'));

        this.bot.on('messageCreate', MessageCommandExecute);
        this.bot.on('interactionCreate', SlashCommandExecute);
    }
};
