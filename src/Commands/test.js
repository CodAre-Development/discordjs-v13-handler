exports.cmd = void 0;
class Command {
    constructor() {
        this.name = "merhaba"
        this.description = "selam"
    }
    eval(client,message,args) {
        message.reply("selam")
    }

}
exports.cmd = Command;
