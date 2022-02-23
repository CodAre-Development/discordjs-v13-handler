
class HandlerManager {
    constructor(client) {
        client.on("messageCreate", (message) => {
            const prefix = client.prefix
            if (message.author.bot) return;
            if (message.content.startsWith(prefix)) {
                const args = message.content.slice(prefix.length).trim().split(/ +/)
                const command = args.shift().toLowerCase();
                if (!client.commands.has(command)) {
                  return;
                }
                try {
                    const get = client.commands.get(command).cmd
                    const newget = new get
                    newget.eval(client, message, args)
                } catch (err) {
                    console.log(err)
                }
            }
           })
    }
}
exports.start = HandlerManager