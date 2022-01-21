//require discord.js package
const discord = require("discord.js"); 

//create a client using a new keyword
const client = new discord.Client();

// safety if token (password)
const {
    token
 } = require("./token.json"); 

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
    //write if statement if the message includes a specific keyword
    if(msg.content.include("!mediumclue")){
        //split the screen
        var decodeMessage = msg.content.split(" ");
        // the variable with the split string content is now an array
        
        //console log the data
        console.log(decodeMessage);

        //attempt to convert second item in array to a number
        var correctNumber = Number(decodeMessage[1]);

        //console log the data
        console.log(correctNumber);

        //rum math.floor on the second index to even out the number
        correctNumber =  math.floor(correctNumber);

        //cosole log the data
        console.log(correctNumber);

        //only run if the no is equal to mediumclue and it is a no between 0 to 10001
        if(decodeMessage[0] === "!mediumclue" && Number(correctNumber && correctNumber<10001 && correctNumber>0 && decodeMessage.length == 2)){
            var netheriteBootsDropRate = 333;
            var netheriteLeggingsDropRate = 666;
            var netheriteChestPlateDropRate = 999;
            var itemsFromClue = 0;
            var rollOnTable = 0;
            var netheriteBoots = 0;
            var netheriteLeggings = 0;
            var netheriteChestPlate = 0;

            //for loop that creates rolls on the meduium clue table
            for (var i = 0; i < correctNumber; i++){
                var itemsEachClue = Math.floor((Math.random()* 3) + 3);
                itemsFromClue += itemsEachClue;
            }     
            
            //log the amount of items from the clue scrolls
            console.log(itemsFromClue);

            //for loop for each item roll
            for (var i = 0; i < itemsFromClue ; i++){
                rollOnTable = Math.floor((Math.random()*1000) + 1);

                if(rollOnTable === netheriteBootsDropRate){
                    netheriteBoots++;
                }
                else if(rollOnTable === netheriteLeggingsDropRate){
                    netheriteLeggings++;
                }
                else if(rollOnTable === netheriteChestPlateDropRate){
                    netheriteChestPlate++;
                }
                 
            }     
            msg.reply("you opened" + correctNumber + "mediumclue. \nAnd you rolled" + itemsFromClue + 
            "items in total.\nand you got" + netheriteLeggings + "netherite Leggings" + netheriteBoots + 
            "netherite Boots" + netheriteChestPlate + "netherite Chest Plate");
        }
    }
});

 //login the bot using token (password)
client.login(token);