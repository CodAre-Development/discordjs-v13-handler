const { Collection } = require('discord.js');
const { readdirSync } = require('node:fs');
const { resolve } = require('node:path');

module.exports = class {
    constructor(bot) {
        this.bot = bot;
        this._commands = [];
        this.applicationCommands = new Collection();
        this.commands = new Collection();
        this.prefix = '!';
    }

    async init() {
        const basePath = './src/Commands/';
        const commandNames = readdirSync(basePath).filter((i) =>
            i.endsWith('.js'),
        );
        for (const commandName of commandNames) {
            const command = this.importCommand(basePath + commandName);
            this.registerCommand(command);
        }
        await this.registerCommands();
    }

    importCommand(path) {
        return new (require(resolve(path)))();
    }

    async registerCommand(command) {
        if (command.isMessage) {
            this.commands.set(command.name, command);
        }
        delete command['aliases'];

        if (command.isSlash) {
            this._commands.push(command);
            this.applicationCommands.set(command.name, command);
        }
    }

    async registerCommands(guildId) {
        if (guildId) {
            const guild = this.bot.guilds.cache.get(guildId);
            if (!guild) return;
            await guild.commands.set(this._commands);
        }
        if (this._commands.length < 1) return;
        this.bot.guilds.cache.forEach(async (guild) => {
            await guild.commands.set(this._commands);
        });
    }

    async removeCommands(guildId) {
        if (guildId) {
            const guild = this.bot.guilds.cache.get(guildId);
            if (!guild) return;
            await guild.commands.set([]);
        }
        if (this._commands.length < 1) return;
        this.bot.guilds.cache.forEach(async (guild) => {
            await guild.commands.set([]);
        });
    }
};
