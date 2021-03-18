module.exports = {
    name: 'serverembedinfo',
    description: "Making an embed" ,
    execute (message , args) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor ('#FFFFFF')
        .setTitle ('Frequently Asked Questions')
        .addFields (
            {name: 'Q: What is this server about? ', value:'Just read the above embed to find out.'},
            {name: 'Q: Who are the makers of the bots? ', value:'Yipzs#1575 is the owner of the Adrena Project! The owner of the Pup bot is Sab#6666!'},
            {name: 'Q: How do I get to the community server? ', value:'Do ~adrencom withhin the bot commands channels.'},
            {name: 'Q: What are the current goals with the Adrena Project? ', value:'As of right now, I plan on making 3 different bots. One will be a Play bot called "AdrenaPlay" that involves an economy system and leveling. While one of the others is a music bot called "AdrenaJam". In addition, the main moderation bot is called Adrena.'},
            {name: 'Q: What language do you use to code the bots? ', value:'I currently use JavaScript. Later in the future I want to learn other languages to be more advanced within the coding industry.'},
            {name: 'Q: Why did you start to code a bot? ', value:'I decided to make a bot because I wanted a project for COVID.'},
            {name: 'Q: Do you have any social media? ', value:'All of them are connected to my Discord!'},
        
        
        
            )
         
        .setFooter('If you have any more questions, feel free to ask');
            
        message.channel.send(newEmbed)

    }


}