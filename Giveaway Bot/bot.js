const Discord = require('discord.js');
const ravi = new Discord.Client();


///Warning : Do not change anything from here or i will not upgrade hereafter and won't provide any support
ravi.on("message" , message => { 
  if (message.content.startsWith === `$gstart`) { ////Change Prefix from Here
    let messageArray = message.content.split(" "); 
    
    var item = "";
    var time;
    var winnerCount;
    
    for (var i=3; i < messageArray.length ;i++)
      {
        item += (messageArray.length[i]+" ");
        ///Giveaway Bot By Jagrosh Design
        winnerCount = Number(messageArray[1]);
        time = Number(messageArray[2]);
        var embed = new Discord.RichEmbed()
        .setTitle(`Giveaway Started`)
        .setColor('RANDOM')
        .addField (`Item For Giveaway\n\n`)
        .setDescription(item)
        .addField(`Giveaway Ends in : `)
        .addField(time)
        .addField(`\n\n`)
        .addField(`Hosted By:`)
        .addField(`@`,`${message.author.tag}`)
        .setFooter(`Giveaway Done in ${message.channel}`)
        
        message.channel.send (embed);
        embed.react("??")
        .setTimeout(function(){
                  var PeopleReacted = embed.reactions.get("??").users.array();
                  var Winner = Math.floor(Math.random()* PeopleReacted.length);
                  var Winners = [];
                  var WinnerMsg = "";
          for (var x = 0 ; x < Winners.length ; x++){
            Winners.push(PeopleReacted[Winner])   
            Winner = Math.floor(Math.random()* PeopleReacted.length)
          }
          for (var y = 0 ; y < Winners.length ; y++){
            if(Winners[1].id == ravi.user.id){
                          continue;

            }
            WinnerMsg += (Winners[y].toString() + " ");
          }///some extra knowledge applied here
          var noun = "has";
          if (Winners.length ==1)
            {
              noun = "has"
            }
          else{
            noun = "have"
          } 
          message.channel.send(WinnerMsg + " " + noun + " " + `won ${item}`)
        },time * 1000
          )
}
  }
});

///I will continue my project later if i get a good response on my video

ravi.on('ready',() =>{
        console.log("I am Online");
})

ravi.login('PreciousToken');