const Command = require('../../Base/Command');

module.exports = class extends Command {
    constructor() {
        super({
            name: 'avatar',
            isContext: true,
            type: 2,
        });
    }

    async run(i) {
        const user = await i.client.users.fetch(i.targetId);
        i.editReply(user.displayAvatarURL({ dyanmic: true }));
    }
};
