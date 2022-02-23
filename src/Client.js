const discord = require("discord.js")
const commandHandler = require("./CommandHandler")
const handlerManager = require("./HandlerManager")
const PREFIX = "!"
const client = new discord.Client({
    intents: [discord.Intents.FLAGS.GUILDS, discord.Intents.FLAGS.GUILD_MESSAGES, discord.Intents.FLAGS.GUILD_PRESENCES]
  });
  client.commands = new discord.Collection()
  client.prefix = PREFIX
  exports.clientCommands = client.commands

  client.on("ready", () => {
      console.log("açıldı")
  })

 new commandHandler.initialize("Commands")
 new handlerManager.start(client)
  client.login("TOKEN")
