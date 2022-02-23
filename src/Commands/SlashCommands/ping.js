const Command = require('../../Base/Command');

module.exports = class extends Command {
    constructor() {
        super({
            name: 'ping',
            isSlash: true,
        });
    }

    run(i) {
        i.editReply('Pong!');
    }
};
