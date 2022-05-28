const { MessageEmbed } = require("discord.js");

module.exports = async (client, queue, song) => {
    let embed = new MessageEmbed()
    .setDescription(`**Added To the Queue • [${song.name}](${song.url})** \`${song.formattedDuration}\` • ${song.user}`)
    .setColor('#5865F2')
    .addField(`Uploader:`, `**${song.uploader.name}**`, true)
    .addField(`Requester:`, `${song.user}`, true)
    .addField(`Autoplay:`, `${queue.autoplay ? "Activated" : "Not Active"}`, true)
    .addField(`Total Duration:`, `${queue.formattedDuration}`, true)
    .setTimestamp()
    .setImage(song.thumbnail)


    queue.textChannel.send({ content: ' ', embeds: [embed] })
}