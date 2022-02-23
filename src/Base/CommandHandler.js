const { Collection } = require('discord.js');
const { readdirSync } = require('node:fs');
const { resolve } = require('node:path');

module.exports = class {
    constructor(bot) {
        this.bot = bot;
        this._commands = [];
        this.slashCommands = new Collection();
        this.commands = new Collection();
        this.aliases = new Collection();
        this.prefix = '!';
    }

    async init() {
        const basePath = './src/Commands';
        const dirs = readdirSync(basePath);
        dirs.forEach(async (dir) => {
            const commandNames = readdirSync(`${basePath}/${dir}`);
            for (const commandName of commandNames) {
                const command = this.importCommand(
                    `${basePath}/${dir}/${commandName}`,
                );
                this.registerCommand(command);
            }
        });
        await this.registerSlashCommands();
    }

    importCommand(path) {
        return new (require(resolve(path)))();
    }

    async registerCommand(command) {
        if (!command.isSlash) {
            this.commands.set(command.name, command);
            return;
        }
        delete command['aliases'];
        delete command['isSlash'];
        this._commands.push(command);
        this.slashCommands.set(command.name, command);
    }

    async registerSlashCommands() {
        if (this._commands.length < 1) return;
        this.bot.guilds.cache.forEach(async (guild) => {
            await guild.commands.set(this._commands);
        });
    }
};
