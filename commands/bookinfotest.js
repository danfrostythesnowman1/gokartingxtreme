var randomColor = Math.floor(Math.random() * 16777215).toString(16);

exports.run = (Discord, client, message, args) => {

    message.reply("Go-Karting Xtreme - Private Session Booking Info");
    var embedinfo = new Discord.RichEmbed()
  .setTitle("Go-Karting Xtreme")
  .setColor("#15f153")
  .setDescription("Private Booking Information & ToS")
  .addField("Payment", "Payment will be paid after our team have decided that the session will be able to go ahead. Once paid, no refunds will be given. We DM you on discord to discuss the final stages of private hire sessions.")
  .addField("Plans", "We have three stages for private hire sessions, `bronze`, `silver` and `gold`.")
    message.channel.sendEmbed(embedinfo);
    //.then(m=>m.delete(10000))
    var embedgold = new Discord.RichEmbed()
  .setTitle("Gold") //Wait a sec I've got an idea, we should have it so different pages has different plans, let me find dat code.
    .setColor("#FFD700")
    .setDescription("Gold Plan Details:")
    .addField("Session Time", "30 minutes")
    .addField("Racer Amount", "20 racers maximum")
    .addField("Staff", "At least 8 working staff members")
    .addField("Race Types", "Free time, races and showdown avalible")
    .addField("Price", "R$400 (SALE)")
    message.channel.sendEmbed(embedgold);
    var embedsilver = new Discord.RichEmbed()
  .setTitle("Go-Karting Xtreme")
  .setColor("#15f153")
  .setDescription("Private Booking Information & ToS")
  .addField("Payment", "Payment will be paid after our team have decided that the session will be able to go ahead. Once paid, no refunds will be given. We DM you on discord to discuss the final stages of private hire sessions.")
  .addField("Plans", "We have three stages for private hire sessions, `bronze`, `silver` and `gold`.")
    message.channel.sendEmbed(embedsilver);
    var embedbronze= new Discord.RichEmbed()
  .setTitle("Go-Karting Xtreme")
  .setColor("#15f153")
  .setDescription("Private Booking Information & ToS")
  .addField("Payment", "Payment will be paid after our team have decided that the session will be able to go ahead. Once paid, no refunds will be given. We DM you on discord to discuss the final stages of private hire sessions.")
  .addField("Plans", "We have three stages for private hire sessions, `bronze`, `silver` and `gold`.")
    message.channel.sendEmbed(embedbronze);

}
