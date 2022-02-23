const Command = require('../../Base/Command');

module.exports = class extends Command {
    constructor() {
        super({
            name: 'ping'
        });
    }

    run(message) {
        message.reply('Pong');
    }
}