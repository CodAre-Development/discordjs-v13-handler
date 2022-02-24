const Command = require('../Base/Command');

module.exports = class extends Command {
    constructor() {
        super({
            name: 'ping',
            isSlash: true,
            isMessage: true,
        });
    }

    messageRun({ message }) {
        message.reply('Pong');
    }

    slashRun({ interaction }) {
        interaction.editReply('Pong');
    }
};
