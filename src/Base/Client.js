const { Client, Intents } = require('discord.js');
const CommandHandler = require('./CommandHandler');
const EventManager = require('./Events');

module.exports = class extends Client {
    constructor() {
        super({
            intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
        });
        this.commandHandler = new CommandHandler(this);
        this.eventManager = new EventManager(this);
    }

    async start() {
        await this.eventManager.init();
        await this.login(process.env.TOKEN);
        await this.commandHandler.init();
    }
};
