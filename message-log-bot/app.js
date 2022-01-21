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
    //console log the object when writing a specific command
    if(msg.content === "!object"){
        //console.log(msg.channel.guild); 
        //in the log you will get the id copy it and paste it down
        DiscordClient.channel.get("id").send("hello, someone used the !object command in a text channel called" + msg.channel.name
        + "in a server called " + msg.channel.guild.name);  //paste here
    }
});

//login the bot using token (password)
client.login(token);