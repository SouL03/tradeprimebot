module.exports.run = async (bot, message, args) => {
    const reactions = await message.awaitReactions(reaction => reaction.name === "white_check_mark", {time: 7000});
    console.log(reactions);
}

module.exports.help = {
    name: "await" 
}
