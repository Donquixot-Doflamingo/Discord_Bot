//require discord.js package
const discord = require("discord.js"); 

//create a client using a new keyword
const client = new discord.Client();

// safety if token (password)
const {
    token
 } = require("./token.json"); 

 // create array for clean code
const stringArray = ["ready", "reconnecting", "disconnecting", "message", "!hello" , "!help"];

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
client.on(stringArray[3], msg => {
    const toLower = msg.content.toLowerCase();
    //send back a reply when a specific command has ben written by a user
    if (toLower === stringArray[4]) {
        msg.reply("hello there bitch");
    } 
    //!help command
    else if (toLower === stringArray[5]) {
        msg.reply("the bot has only two commands !hello !help");
    }
});

//login the bot using token (password)
client.login(token);