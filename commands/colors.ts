import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'Testing',
    description: 'Sends an embed',
    permissions: ['ADMINISTRATOR'],
    
    callback: ({ message, text }) => {
        const embed = new MessageEmbed()
            .setTitle("Role Colors")
            .setDescription("The colors below are previews of the role colors available from the menu above.")
            .setColor("RED")
            .addFields([
                {
                    name: 'name',
                    value: 'value',
                    inline: true,
                }
            ])
            // .addField('name three', 'value three')
        return embed 
    }
} as ICommand