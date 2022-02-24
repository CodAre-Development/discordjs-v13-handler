const Command = require('../../Base/Command');

module.exports = class extends Command {
    constructor() {
        super({
            name: 'ping',
            description: 'Ping command',
            isSlash: true,
        });
    }

    run(i) {
        i.editReply('Pong!');
    }
};
