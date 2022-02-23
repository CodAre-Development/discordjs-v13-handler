

const { readdirSync } = require("node:fs")
const { join } = require("node:path")


class Handler {
    constructor(path) {
        if(!path) return
        this.currentFolderPath = path
        let { clientCommands } = require("./Client")
        const read = readdirSync(join(__dirname, path)).filter(file => file.endsWith(".js"))
        for (const file of read) {
            const command = require(join(__dirname, path, file))
            const cmdnew = new command.cmd()
            clientCommands.set(cmdnew.name, command)
          }
    }
}
exports.initialize = Handler