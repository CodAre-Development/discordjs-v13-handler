const Command = require('../../Base/Command');

module.exports = class extends Command {
    constructor() {
        super({
            name: 'ping',
            aliases: ['p'],
        });
    }

    run(message) {
        message.reply('Pong');
    }
};
