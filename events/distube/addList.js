const { MessageEmbed } = require("discord.js");

module.exports = async (client, queue, playlist) => {
    const embed = new MessageEmbed()
        .setDescription(`**Queued • [${playlist.name}](${playlist.url})** \`${queue.formattedDuration}\` (${playlist.songs.length} tracks) • ${playlist.user}`)
        .setColor('#5865F2')
        .addField(`Uploader:`, `**[${nowTrack.uploader.name}](${nowTrack.uploader.url})**`, true)
        .addField(`Requester:`, `${nowTrack.user}`, true)
        .addField(`Current Volume:`, `${song.volume}%`, true)
        .addField(`Filters:`, `${nowQueue.filters.join(", ") || "Normal"}`, true)
        .addField(`Autoplay:`, `${nowQueue.autoplay ? "Activated" : "Not Active"}`, true)
        .addField(`Total Duration:`, `${nowQueue.formattedDuration}`, true)
        .addField(`Current Duration: \`[0:00 / ${nowTrack.formattedDuration}]\``, `\`\`\`🔴 | 🎶──────────────────────────────\`\`\``)
        .setTimestamp()
        .setImage(playlist.thumbnail)
  
      queue.textChannel.send({ embeds: [embed] })
}