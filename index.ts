import DiscordJS, { Intents } from 'discord.js'
import WOKCommands from 'wokcommands'
import path from 'path'
// import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const client = new DiscordJS.Client({
    intents: [
        Intents.FLAGS.GUILDS,
        Intents.FLAGS.GUILD_MESSAGES,
        Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
        // Intents.FLAGS.GUILD_PRESENCES
    ],
})


client.on('ready', async () => {
    // Alternative Mongo db connection 
    // await mongoose.connect(process.env.MONGO_URI || '', {
    //     keepAlive: true
    // })

    new WOKCommands(client, {
        // mongoUri: process.env.MONGO_URI,
        commandsDir: path.join(__dirname, 'commands'),
        testServers: ['955569135893508207'],
        botOwners:[
            '551642556027371523',
            '765712592165404702',
            '616549620138377218'
        ],

        // IN DEV Allow importing of .ts files if you are using ts-node
        // typeScript: true,
    })
})


client.login(process.env.TOKEN)
