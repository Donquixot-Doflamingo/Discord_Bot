//require discord.js package
const discord = require("discord.js"); 

//create a client using a new keyword
const client = new discord.Client();

// array of commands
const commandArray = ["!command" , "!event" , "!author"]

// reply array
const replyArray = ["https://formingbliss.com", "the owner is harsh khandewal"];

//date format for event date
const eventDate = "22-01-2021 07:42:00";

//placeholder formatting string
const format = "d/m/y H:M"

//variables for hours and minutesin milisecinds
const hoursInMs = 3600000;
const minutesInMs = 60000; 

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
client.on(stringArray[3], async msg => {
    //check for commands
    if(msg.content === commandArray[0]){
        msg.reply("This bots commands are !command !event !author");
    }

    //check for !event
    else if(msg.content === commandArray[1]){
        //require package
        var datetimePackage = require("node-datetime");

        //create 2 variable for the event date
        var nextClanEventDate = datetimePackage.create(eventDate);
        var nextClanEventDateModify = datetimePackage.create(eventDate);

        //offset hours appropriate for your server host the bot + local machine
        nextClanEventDateModify.offsetInHours(5.5);

        //format both varible into a diffrenet date format
        var formatNextEventClanDate = nextClanEventDate.format(format);
        var formatNextEventClanDateModify = nextClanEventDate.format(format);
        
        //store the current time and date in different variable
        var dateRightNow = datetimePackage.create();

        //format the current dates
        var formatDateRightNow = dateRightNow.format(format);

        //convert one of the event date variables and current date variable so that we can comparer them
        var dateRightNowInMs = new Date(dateRightNow);
        var clanEventInMs = new Date(formatNextEventClanDateModify);

        //create a variable and store the difference of them
        const dateDifference = clanEventInMs - dateRightNowInMs;

        //calculate hours and minutes left
        var hoursLeft = Math.floor(dateDifference / hoursInMs);
        var reminder = dateDifference - (hoursLeft * hoursInMs);
        var minutesLeft = Math.floor(reminder / minutesInMs);

        //create a msg array with correct date, hours and minutes left before event
        var msgArray = [
            "next clan event date is : " + formatNextEventClanDate + "GMT\n",
            "The event begins in: " + hoursLeft + "h " + minutesLeft + "m\n",
            "The event is a small charity event for homeless people."
        ];  

        // reply the message with that informnation
        msg.reply(msgArray[0] + msgArray[1] + msgArray[2]);

    }
    
    // check for !author 
    else if (msg.content === commandArray[2]) {
        // send back a message about the author 
        msg.reply(replyArray[0]  + replyArray[2]);
    }
});

//login the bot using token (password)
client.login(token);