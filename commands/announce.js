exports.run(Discord, client, message, args, collector) => {

	message.author.send("What is the announcment title?");
        console.log(collector)
        let title = collector.on('collect', message => {
            });
            
        let description = collector.on('collect', message => {
        });
        
        let bookEmbed = new Discord.RichEmbed()
    .setTitle(`${title)
    .setDescription(`${description}`)
    .setColor("#15f153")
    .setFooter("Go-Karting Xtreme", message.createdAt)

    let bookingchannel = message.guild.channels.find(`name`, "directors-chat");
    if(!bookingchannel) return message.channel.send("There has been an error with our system, contact TheReal_CatCrafter to check the problem out.");
    bookingchannel.send(bookEmbed);
    message.reply("Your announcment has been sent!")
    
}