//require discord.js package
const discord = require("discord.js"); 

//create a client using a new keyword
const client = new discord.Client();

// safety if token (password)
const {
    token
 } = require("./token.json"); 

 // create array for clean code
const stringArray = ["ready", "reconnecting", "disconnecting", "message"];

//display a message when bot comes online
client.on(stringArray[0], () => {
    console.log(`logged in as ${client.user.tag}!`);
});

// reconnecting event
client.on(stringArray[1], () => {
    console.log(`the bot is reconnecting: ${client.user.tag}`);
});

// disconnect event
client.on(stringArray[2], () => {
    console.log(`the bot is disconnecting ${client.user.tag}`);
});

//check for new messages
DiscordClient.on(stringArray[3], async msg => {
    //display some data about the current server
    if(msg.content === "!serverinfo"){
        console.log(msg.channel.TextChannel);
        console.log(msg.TextChannel);
        msg.reply("channel name : " + msg.channel.name + "\n"
        + "nsfw: " + msg.channel.nsfw + "\n" + "members on servers: " + msg.channel.guild.members + "\n");
    }
        //only reply if the user writes in bot-testing channel
    else if(msg.channel === "bot-testing" && msg.content === "!nsfw"){
        if(msg.channel.nsfw){
            msg.reply("this channel is 18+");
        }
        //make bot response only if the channel is nsfw
        else if(!msg.channel.nsfw){
            msg.reply("this channel is not 18+");
        }
    }

        //reply with details about the author who sent the message
        else if (msg.content === "!authorInfo"){
            msg.reply("Author name : " + msg.authorusername + "#" + msg.author.discriminator + "is a bot?" +  msg.author.bot + "!authorinfo");
        }

        //test command for bot
        else if (msg.content === "!authorInfo"){
            msg.reply("Author name : " + msg.authorusername + "#" + msg.author.discriminator + "is a bot?" +  msg.author.bot);
        }

        //calculate when the server was created using the joinedTimeStampmilliseconds

        //use the joinedTimeStamp and convert into a actual date

        //do we need node datetime-package

        //read documentation

        //google "how-to"

        //talk about googling

        //stackoverflow

        // what and how good it is

        //w3c i better for practical and finding solution to get started
    });

//login the bot using token (password)
client.login(token);