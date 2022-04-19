import { ICommand } from "wokcommands";

export default {
    category: 'Configuration',
    description: 'Sets the bot status',

    minArgs: 1,
    expectedArgs: '<status>',
    options: [
        {
            name: 'status',
            type: 'STRING',
            description: 'Set the status message',
            required: true
        }
    ],

    slash: 'both',
    testOnly: true,
    guildOnly: true,
    ownerOnly: true,

     callback: ({ client, text }) => {
         client.user?.setPresence({
             status: 'online',
             activities: [
                 {
                     name: text
                 }
             ]
         })

         return 'Status updated!'
     }
} as ICommand