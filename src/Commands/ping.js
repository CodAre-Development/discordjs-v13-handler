const Command = require('../Base/Command');

module.exports = class extends Command {
    constructor() {
        super({
            name: 'ping',
            isSlash: true,
            isMessage: true,
            isContext: true,
        });
    }

    messageRun(message) {
        message.reply('Pong');
    }

    slashRun(i) {
        i.editReply('Pong');
    }
};
