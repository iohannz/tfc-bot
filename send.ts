import { TextChannel } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Configuration',
    description: 'Sends a message.',

    permissions: ['ADMINISTRATOR'],

    minArgs: 2,
    expectedArgs: '<channel> <text>',
    expectedArgTypes: ['CHANNEL', 'STRING'],

    slash: 'both',

    // Specify test servers
    // testOnly: true,
    guildOnly: true,

    // Callback when user runs command
    callback: ({ message, interaction, args }) => {
        const channel = (
            message 
                ? message.mentions.channels.first() 
                : interaction.options.getChannel('channel')
        ) as TextChannel

        if(!channel || channel.type !== 'GUILD_TEXT'){
            return 'Please tag a text channel.'
        }
        args.shift() // remove the channel from the arguments array
        const text = args.join(' ');

        channel.send(text) 

        if(interaction){
            interaction.reply({
                content: 'Send message!',
                ephemeral: true
            })
        }
    }
} as ICommand