const Discord = require('discord.js');
const client = new Discord.Client();
const weather = require('weather-js');
const Canvas = require('canvas');
client.login('NzM2NjYxNDY3MTk3MzQxNzQ2.XxyDdA.FOL8Du4N-NibOc4o4B_9WJyNwpc');

const version = '2.0.1.0'

const PREFIX = 'pw.'

client.on('message', async message => {

    let args = message.content.substring(PREFIX.length).split(" ");
    if (!message.content.startsWith(PREFIX)) return;

    switch(args[0]){
        case 'info':
            const embed = new Discord.MessageEmbed()
            .setTitle('Pepis Weather Bot')
            .addField('Version', version)
            .addField('Made by the official IceColdPepis ', 'brought to you in part by Davy Hones')
            .addField('**Updates**', 'V 1.0.0.0: Bot exists\nV 2.0.0.0: Bot exists again\nV 2.0.1.0: Bot actually works')
            .addField('Thanks for using the Pepis Weather Bot', `**${message.author.username}**`)
            .setThumbnail('https://cdn.discordapp.com/attachments/688176858436599893/746131140221337640/Pepis_Weather_Bot.png')
            .setColor(0xFFFFFF);
            message.channel.send(embed);
        break;
        case 'help':
            const helpEmbed = new Discord.MessageEmbed()
            .setTitle('Prefix: "pw."')
            .addField('Commands (pw.)', 'info, help, ping, weather (pw.weather [insert area here]), clear (clears messages in bulk, bot must be admin for this command (pw.clear 5)), userinfo')
            .setThumbnail('https://cdn.discordapp.com/attachments/688176858436599893/746131140221337640/Pepis_Weather_Bot.png')
            .setColor(0xFFFFFF);
            message.channel.send(helpEmbed);
        break;
        case 'bestquotes':
                let quotes = ['https://media.discordapp.net/attachments/701878752342179954/701882692337270884/image0.png', 'https://cdn.discordapp.com/attachments/701878752342179954/701948825786515486/image0.png', 'https://cdn.discordapp.com/attachments/701878752342179954/702190257873092608/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/702213670415106089/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/702227932612919336/unknown.png', '"Potion seller?"\nDavid: "Hi :)"', 'https://cdn.discordapp.com/attachments/701878752342179954/716774003062210640/unknown.png\nhttps://cdn.discordapp.com/attachments/701878752342179954/716774038139306024/unknown.png\nhttps://cdn.discordapp.com/attachments/701878752342179954/716774139146535448/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/721252339431899186/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/726113482814128229/video0.mov', 'https://cdn.discordapp.com/attachments/701878752342179954/745695068672753674/unknown.png', 'https://media.discordapp.net/attachments/701878752342179954/748183325205594223/unknown.png', 'https://media.discordapp.net/attachments/701878752342179954/748186086517243904/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/748705981055238244/unknown.png', '"Never doubt the Daniels." -Caleb Daniels 2020\n*pots cue ball*', '"You can`t change your preference." -David 2020', 'https://cdn.discordapp.com/attachments/701878752342179954/757709387828690965/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/757727974903513178/unknown.png', 'Donald: "I wish Ireland took over England"\nMe: "They were too drunk"\nDonald: "Maybe they weren`t drunk enough"', '"I`M LAGGING" -Random Person On Rocket League\n"Close your window you`re letting all your signal out" -Their teammate 2020', 'https://cdn.discordapp.com/attachments/701878752342179954/759622445685669898/65129341_774052766329696_997752062848532480_n.png', 'https://cdn.discordapp.com/attachments/710210092133253152/710806469863276564/video0.mp4', '"Is this your husband? Remove." -Google Translate 2020', '"You earhead" -Caleb 2020', 'https://cdn.discordapp.com/attachments/701878752342179954/762407828135870494/unknown.png', '"I`m just trying to make grass." -David 2020', '"The crease is now not epic" -David 20920', '"Now the hard part is doing the other side" -Davi 29023920', '"My mom was mad at me and left me in the car all day." -David while half conscious', 'https://cdn.discordapp.com/attachments/701878752342179954/763543500544671744/unknown.png', '*discord ping*\nDavid: "WHO SAID THAT"', 'https://media.discordapp.net/attachments/701878752342179954/763932593380392960/image0.png?width=380&height=676', '"THERE COMES A TIME IN A MANS LIFE WHEN HE HAS TO KICK SAMMY" -David Eli Honers 2-2-', 'https://media.discordapp.net/attachments/701878752342179954/764253465530335262/unknown.png', '"Come back here with your microtransactions" -Brian 2020', 'https://media.discordapp.net/attachments/701878752342179954/766388667383283712/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/766392931996270622/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/766746079831523358/unknown.png', 'https://media.discordapp.net/attachments/688176858436599893/766805395657719828/unknown.png', 'https://media.discordapp.net/attachments/701878752342179954/768918333256630342/image0.png', '"The vision was giving me post dramatic down syndrome" me 2020', '"Can we kill this Jesus man" -Jose 2020', '"Okay I just realized what I said is retarded but I`m gonna defend it anyway because I`m Donald" -Donald in the year of Donald', '"Me and Caleb being impostors is so dysfunctionally functional" -Donald 2020', 'https://cdn.discordapp.com/attachments/701878752342179954/770101098568351744/unknown.png\naaron on drugs\naaron overdosed\naaron our dad\n aaron **oop**\n \ndead', '"I`m just trying to have a good time with my girlfriend and there`s this KID walking on his FUCKING KNEES." -Kid 2020', 'https://cdn.discordapp.com/attachments/701878752342179954/770847816142290954/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/771506855066337320/unknown.png\nhttps://cdn.discordapp.com/attachments/701878752342179954/771507099585740820/unknown.png\nhttps://cdn.discordapp.com/attachments/701878752342179954/771579173428264980/unknown.png', '"What did he say I was Steveing" -Brian 2020', '"That son of a bitch, I thought he was voting!" -Donald', 'Caleb : clicks on the crowder election stream\n \n Crowder: I MIGHT BE A SIMP', 'https://cdn.discordapp.com/attachments/701878752342179954/773395732983185428/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/774093635108077589/unknown.png', ':lock_with_ink_pen:', 'https://cdn.discordapp.com/attachments/701878752342179954/774401338305413140/romam.png', 'https://cdn.discordapp.com/attachments/701878752342179954/774410384324034570/p9eZdbNpPV.png', 'https://cdn.discordapp.com/attachments/701878752342179954/774895362359296010/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/775499298170601532/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/775507334037241886/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/776611401975201842/unknown.png', '"You don`t know true courage until you`ve held two desk fans towards your processor to prevent a nuclear meltdown." -Caleb 2020', 'https://cdn.discordapp.com/attachments/701878752342179954/780292020765851658/unknown.png', 'https://cdn.discordapp.com/attachments/296056831514509312/780301236250476544/video0.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/780307880762015775/image0.gif', '"You remember that time I just accidentally started beatboxing in the woods." -Donald 2', 'https://cdn.discordapp.com/attachments/701878752342179954/780973594804617216/unknown.png\nPOV: You`re at Bass Pro Shops', '"Oh thats Joy I remember her." -Caleb 2020', '"I literally do not have enough strength in my arms to care" -Caleb 2020', 'https://cdn.discordapp.com/attachments/701878752342179954/781803591643955220/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/782057364999372820/unknown.png', 'https://cdn.discordapp.com/attachments/728283354319028317/782286581863940106/sqlerg.mp4', 'https://cdn.discordapp.com/attachments/688176858436599893/782290459828551710/squom.mp4\n POV: YOU ARE AIR', 'https://cdn.discordapp.com/attachments/688176858436599893/782295564170821632/rick.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/782296886715351100/sq.mp4', 'https://cdn.discordapp.com/attachments/688176858436599893/782312021693300756/the_battle_of_the_squidwards.mp4', 'https://cdn.discordapp.com/attachments/688176858436599893/782048616084668426/video0.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/782413104247996467/unknown.png', '"Death robots are like femboys." -Femboy 2020 yes i meant to say donald but his name is femboy now', 'Caleb: gargling noise "That was the sound of me dying from pure gay"', '"We live in the worst. Fucking. Timeline." -Donald 2020', 'Customer service services - cities skylines', 'https://cdn.discordapp.com/attachments/728283354319028317/783853526903160842/Squidwar_1.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/784087833102909440/image0.png', 'https://cdn.discordapp.com/attachments/701878752342179954/784541368492097617/image0.png', 'https://cdn.discordapp.com/attachments/701878752342179954/784541370411909196/image0.png', 'https://cdn.discordapp.com/attachments/701878752342179954/784541796494999630/image0.png', '"First we take the tour, then we discuss the plans, then we walk home and forget the plans! :)" -Donald 2020', 'https://cdn.discordapp.com/attachments/701878752342179954/785705087381143613/unknown.png\nbackstory: I uploaded a Chant de Valiosis and literally immediately brian asked when my next train vid would be', 'https://cdn.discordapp.com/attachments/701878752342179954/785708387869786112/tmp_1607397679980.jpg', 'https://cdn.discordapp.com/attachments/701878752342179954/785982186520182784/video0.mov', 'https://cdn.discordapp.com/attachments/701878752342179954/786391548127346718/oh_no.mp4', 'https://cdn.discordapp.com/attachments/411346934520086530/786814751635669042/unknown.png\nhttps://cdn.discordapp.com/attachments/411346934520086530/786814792644034580/unknown.png', 'https://cdn.discordapp.com/attachments/688176858436599893/787531674358775808/Cale_B.mp4', 'https://cdn.discordapp.com/attachments/688176858436599893/787522346852155402/shitpost_statuss.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/787788742659538954/God_is_dead.mp4', '"What will always get you laid"\n**parting the *red sea***', 'https://cdn.discordapp.com/attachments/724055819548622968/768047296126386196/video0_11.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/788524292773904444/image0.png', 'https://cdn.discordapp.com/attachments/701878752342179954/788660999234256896/David_Approaches-1.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/788661103600599090/Valioz_Vinatrovi.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/788876743673905192/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/788770963709100052/image0.png', 'Caleb: Fucking multiplying by 17 billion\nCaleb: "I feel like I`m gonna run out of breath"\nDonald: "SUFFOCATION BY MATH"', '“You are cute in my yees” -Caleb 2020 to David', 'I am a popping tire -David 420', '"By no I meant yes" -Caleb 2020', 'https://cdn.discordapp.com/attachments/701878752342179954/789734556060090368/20201219_010214.jpg', 'https://cdn.discordapp.com/attachments/701878752342179954/789746539294621696/unknown-22.png', 
                'https://cdn.discordapp.com/attachments/688176858436599893/789907910796116008/4qzyig.jpg', 'Gary now I know\nI was wrong\nI was speeding and now you`re gone (wah wah wahh wah wah wahh wahhhhh)\nGary I`m sorry I ran over you oh I never expected you to\ncross the road while I was going at mach 3\nPlease come home cuz I miss you Gary\n \nGary come home\n \nGary can`t you see, nevermind\nI realize you`re blind because you died (wah wah wahh wah wah wahh wahhhhh)more than a splat youre my best friend ill never forget how tragically i trampled you under the wheels of mynew car your shell right now is probably stuck inside the tar\nsomewhere youre probably fertilizing\na brand new patch of farm\n \nBy: The Myrtle Beach Boys (Caleband Donald Live performance)', 'We don`t need alcohol to get drunk" -me', 'https://cdn.discordapp.com/attachments/701878752342179954/791075807648940032/unknown.png', 'https://cdn.discordapp.com/attachments/690944051733856308/697557101827981322/video0_8.mov', 'https://cdn.discordapp.com/attachments/701878752342179954/791510361807126558/unknown.png', '"FUCKING ASS, LITERAL CHEEKS" -Caleb 2020 failing to scale a wall in World of magic', '"CUMTRON" -DONADL 2020', '"Valiosis Christmas by Snoe Gaming on Snoe Gaming Letsplays on SnoeGaming.co/Pepis" -Caleb 2020\n"Do you wanna try that again" -Donald 2020\n"Not really" -Caleb 2020', 'https://cdn.discordapp.com/attachments/701878752342179954/794676116895563806/David_gets_concerned.mp4', 'https://cdn.discordapp.com/attachments/688176858436599893/794677313786609724/sharpen.png', 'https://cdn.discordapp.com/attachments/701878752342179954/794681638470549534/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/794683671655219220/WomensWrongs.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/795049894917308476/unknown.png', '"Stephen Spongebob CEO of Spongebob has hardwired my brain to think of Spongebob at all times" -Donald 2021', 'what you think this is a game of cards against humanity on the pepis?', 'Donald to Harry: "Shut up"\nMe to Harry: "Shut down"\nDonald to Harry: "Update and restart"', 'the quotes are just general but enchanted -Caleb', '"I spent a lot of time not making it, yknow until I did." -Brandon Snaderson 2020', 'Harry talking to his mom: "el blanco"\nCaleb: "What`d you call me"', 'https://cdn.discordapp.com/attachments/701878752342179954/797854008655478855/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/797726715111538718/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/798952057532710922/Toilet_paper.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/798775934622105600/meme.png', 'https://cdn.discordapp.com/attachments/701878752342179954/798979340590121000/youtube_2009.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/798984665750044743/pppppppppppppppp.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/799368421950881882/video0_1_6.mp4', 'https://cdn.discordapp.com/attachments/688176858436599893/798994178910191666/hhh.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/799474580447690793/video0_1_7.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/800066585347883070/Plankton_Eating_Chum.png', '"Suck all of the cumstitution right out of my consticock" -Caleb 20201', '"Hentai and lolis and all that stuff, leee da leedle leedle leedle leedle leeeeeee" -David and Caleb Danielerrys 2017 through today', 'https://cdn.discordapp.com/attachments/701878752342179954/802988417414725642/Ok_dude_i_think_thats_good.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/804198392468733972/Polish_20210127_225656476.png', 'https://cdn.discordapp.com/attachments/688176858436599893/804202686982914058/AooAoowwo.mp4', 'https://cdn.discordapp.com/attachments/785316347265024040/803364861835870219/April_Fools.mp4', 'https://cdn.discordapp.com/attachments/785316347265024040/803364796346794034/139614245_2871663649770867_5500246335088802583_n.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/804496192045711380/image0.png', 'https://cdn.discordapp.com/attachments/688176858436599893/804556391829340170/video0.mov', 'https://cdn.discordapp.com/attachments/701878752342179954/804862804464631828/image0.png', 'https://cdn.discordapp.com/attachments/701878752342179954/805281974281306142/unknown.png', 'https://www.youtube.com/watch?v=YspzfLGxGns', 'https://cdn.discordapp.com/attachments/701878752342179954/806023078931857458/unknown.png', 'THAT WAS THE FUCK SHIT - caleb', '"ryou`ve had three quotes today caleb tahts a reeeeercord :3" -Donald 2021', 'https://cdn.discordapp.com/attachments/701878752342179954/806397991434846208/video0.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/807077833105080380/meme-3.png', 'https://cdn.discordapp.com/attachments/701878752342179954/807077833612460032/meme-2.png', 'https://media.discordapp.net/attachments/688176858436599893/807102995363397662/image4.jpg?width=837&height=676', 'https://cdn.discordapp.com/attachments/701878752342179954/807421734327287848/unknown.png\n"ART CLASS lOl" -Squidnog`s board 2020', 'https://cdn.discordapp.com/attachments/688176858436599893/807682906284884008/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/809461513458155550/image0.jpg', 'https://cdn.discordapp.com/attachments/701878752342179954/809539630277197874/unknown.png', 'https://cdn.discordapp.com/attachments/772512934986645545/788087952525361162/68A86F60-43DF-4F76-B3B5-B6D25A9E480E.png', 'https://cdn.discordapp.com/attachments/688176858436599893/810587583914573874/unknown.png', 'its like asking for a cram and cheese sandwich', 'https://cdn.discordapp.com/attachments/701878752342179954/814971299499081788/unknown.png', 'Caleb : ooh shiny\nMe: things that are shiny are never good\nRealIceColdPepis tried to swim in lava', 'https://cdn.discordapp.com/attachments/701878752342179954/817152396299731004/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/818332354589229096/Polish_20210307_225427539.png', 'https://cdn.discordapp.com/attachments/701878752342179954/818348564891566110/unknown.png', '"Are you ready to see pain in MAP FORMAT!?" -Donald 2021', 'https://cdn.discordapp.com/attachments/701878752342179954/820043554448998431/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/821474555419557938/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/821831830927966228/unknown.png', 'Did you just measure distance in TONS?', 'https://cdn.discordapp.com/attachments/701878752342179954/822695826550947850/E_but_only_the_words_with_E_and_also_shotgun.mp4', 'https://cdn.discordapp.com/attachments/688176858436599893/822974047586877470/david_lol.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/823379275809816597/darn.png', '"hard times create hot men" -donald 2000000000000000000\nOH MY GOD IT WORKS THE OTHER WAY AROUND TOO\nHOT TIMES CREATE HARD MENLOL', 'https://cdn.discordapp.com/attachments/701878752342179954/823791374310309888/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/823792047067889675/unknown.png', 'https://youtu.be/ygAcBer3KV0', 'https://cdn.discordapp.com/attachments/701878752342179954/825537305900089374/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/828775296617414656/meme.png', 'https://cdn.discordapp.com/attachments/701878752342179954/829090194044747866/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/830563755803934780/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/831014315594088477/image0.png', '"We were like the sus choir.\nBiblically accurate sus." -Doadlnd 20', 'https://cdn.discordapp.com/attachments/701878752342179954/839261050134331492/magik.png', 'https://cdn.discordapp.com/attachments/761424068095508550/840315470354841600/meme.png', 'https://cdn.discordapp.com/attachments/761424068095508550/840326366498390026/meme.png', 'https://cdn.discordapp.com/attachments/761424068095508550/840326624910245918/meme.png', 'https://cdn.discordapp.com/attachments/701878752342179954/842594463062556712/Well_i_like_cock.mp4', '"Saddam Hussein could learn a thing or two"\n*bomb fails*\n"but not from you LOL" -Doddln', 'Caleb: "The deepest pits of hell are reserved for people like this, you know child traffickers, shooters, muslims"\nDonald: "Yeah Joy"\nCaleb: "YeahLO"', 'https://cdn.discordapp.com/attachments/701878752342179954/845151275696128010/meme.png', 'https://cdn.discordapp.com/attachments/701878752342179954/845392203362074654/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/849068977040654346/unknown.png', 'https://cdn.discordapp.com/attachments/701878752342179954/850624045778337792/A.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/850840072495824937/Cotton_Candy_Type_Beat.mp4', 'https://cdn.discordapp.com/attachments/701878752342179954/850869652540096532/VID_20210210_202120.mp4', '"I am kroovin" -Pepis 2021', 'https://cdn.discordapp.com/attachments/701878752342179954/857339495778484224/unknown.png', 'https://cdn.discordapp.com/attachments/688176858436599893/857365881259425802/image0.png', 'E'];
                let index = (Math.floor(Math.random() * quotes.length))
                message.channel.send(quotes[index]);
        break;
        case 'userinfo':
              const userCanvas = Canvas.createCanvas(1000, 300)
              const userCtx = userCanvas.getContext('2d');
              var member = message.guild.member(message.author)

              userCtx.strokeStyle = '#ffffff'
              userCtx.strokeRect(0, 0, userCanvas.width, userCanvas.height); //fuck messsss

              var userImage = './userInfo.jpg'

              var userBg = await Canvas.loadImage(userImage);

              userCtx.drawImage(userBg, 0, 0, userCanvas.width, userCanvas.height)
              userCtx.font = '100px Verdana';
              userCtx.fillStyle = '#ffffff';
              userCtx.strokeStyle = '#000000';
              userCtx.fillText(message.author.username, 325, 100);
              userCtx.strokeText(message.author.username, 325, 100);
              userCtx.font = '33px Verdana';
              userCtx.fillText(`Account created ${message.author.createdAt.toLocaleString()}`, 325, 175);
              userCtx.strokeText(`Account created ${message.author.createdAt.toLocaleString()}`, 325, 175);
              userCtx.fillText(`Joined server ${member.joinedAt.toLocaleString()}`, 325, 250);
              userCtx.strokeText(`Joined server ${member.joinedAt.toLocaleString()}`, 325, 250);

              const userAvtr = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' }));
              userCtx.drawImage(userAvtr, 25, 25, 250, 250)
              
              const uInfo = new Discord.MessageAttachment(userCanvas.toBuffer(), `Info.png`)

              message.channel.send(uInfo)
        break;
        case 'ping':
            var ping = Date.now() - message.createdTimestamp + " ms"
            message.channel.send("Your ping is `" + `${Date.now() - message.createdTimestamp}` + " ms`")
        break;
        case 'weathertest':
            weather.find({search: args.join(" "), degreeType: 'F'}, async function(err, result) {
                if (err) message.channel.send(err);
                if (!args[0]) message.channel.send("Please specify a location. (pw.weather New York City, NY)")
                message.channel.send(Current.temperature);
            });
        break;
        case 'weather':
            weather.find({search: args.join(" "), degreeType: 'F'}, async function(err, result) {
                if (err) message.channel.send(err);
                if (!args[1]) message.channel.send("Please specify a location. (pw.weather New York City, NY)")
                const canvas = Canvas.createCanvas(720, 450);
                const ctx = canvas.getContext('2d');
    
                ctx.strokeStyle = '#ffffff'
                ctx.strokeRect(0, 0, canvas.width, canvas.height);

                var Current = result[0].current;
                var Location = result[0].location;
                var partlycldybg = './wallpaperS.jpg'
                var clearbg = './wallpaperClr.jpg'
                var rainybg = './wallpaperR.jpg' 
                var nightbg = './wallpaperSN.jpg'
                var snowbg = './wallpaperSnw.jpg'
                var cloudybg = './wallpaperC.jpg'
                var sunnybg = './wallpaperSunny.jpg'
                
                var background = await Canvas.loadImage(sunnybg)
                if(Current.skytext === 'Rain') background = await Canvas.loadImage(rainybg)
                if(Current.skytext === 'Smoke') background = await Canvas.loadImage(cloudybg)
                if(Current.skytext === 'Clear') background = await Canvas.loadImage(clearbg)
                if(Current.skytext === 'Sunny') background = await Canvas.loadImage(sunnybg)
                if(Current.skytext === 'Light Rain') background = await Canvas.loadImage(rainybg)
                if(Current.skytext === 'Rain Showers') background = await Canvas.loadImage(rainybg)
                if(Current.skytext === 'Light Rain and Snow') background = await Canvas.loadImage(snowbg)
                if(Current.skytext === 'Snow') background = await Canvas.loadImage(snowbg)
                if(Current.skytext === 'Light Snow') background = await Canvas.loadImage(snowbg)
                if(Current.skytext === 'Cloudy') background = await Canvas.loadImage(cloudybg)
                if(Current.skytext === 'Mostly Cloudy') background = await Canvas.loadImage(cloudybg)
                if(Current.skytext === 'Mostly Sunny') background = await Canvas.loadImage(sunnybg)
                if(Current.skytext === 'Partly Sunny') background = await Canvas.loadImage(partlycldybg)
 
                ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
                ctx.font = '100px Arial Black';
                ctx.fillStyle = '#ffffff';
                if(Current.temperature > 85) ctx.fillStyle = '#ffb291'
                if(Current.temperature > 100) ctx.fillStyle = '#ff3126'
                if(Current.temperature >= 110) ctx.fillStyle = '#ff0000'
                if(Current.temperature < 65) ctx.fillStyle = '#91abff'
                if(Current.temperature < 50) ctx.fillStyle = '#1928fa'
                ctx.fillText(`${Current.temperature}° F`, 390, 260,);
                ctx.strokeStyle = '#000000'
                ctx.strokeText(`${Current.temperature}° F`, 390, 260,);
                if(Current.feelslike > 85) ctx.fillStyle = '#ffb291'
                if(Current.feelslike > 100) ctx.fillStyle = '#ff3126'
                if(Current.feelslike >= 110) ctx.fillStyle = '#ff0000'
                if(Current.feelslike < 65) ctx.fillStyle = '#91abff'
                if(Current.feelslike < 50) ctx.fillStyle = '#1928fa'
                ctx.font = '40px Arial Black'
                ctx.fillText(`Feels like ${Current.feelslike}°`, 390, 320,);
                ctx.strokeText(`Feels like ${Current.feelslike}°`, 390, 320,);
                ctx.font = `40px Arial`;
                ctx.fillStyle = '#ffffff'
                ctx.fillText(`${Location.name}`, 50, 95,);
                ctx.strokeText(`${Location.name}`, 50, 95,);
                ctx.font = '50px Arial';
                ctx.fillText(`${Current.skytext}`, 50, 160,);
                ctx.strokeText(`${Current.skytext}`, 50, 160,);
                ctx.font = '50px Arial';
                ctx.fillText(`${Current.observationtime}`, 50, 225,);
                ctx.strokeText(`${Current.observationtime}`, 50, 225,);
                ctx.fillText(`${Current.day}`, 50, 290,);
                ctx.strokeText(`${Current.day}`, 50, 290,);
                ctx.beginPath();
                ctx.arc(100, 375, 50, 0, Math.PI * 2, true);
                ctx.closePath();
                ctx.clip();
                const avatar = await Canvas.loadImage(message.author.displayAvatarURL({ format: 'jpg' })); // when it beeps take it out put the bread in for 10 minutes at 400||EDIT: I DIDNT CUT IT AND MY DAD GOT MAD
                ctx.drawImage(avatar, 50, 325, 100, 100)
                const attachment = new Discord.MessageAttachment(canvas.toBuffer(), 'Weather.png')
                message.channel.send (attachment);
            })
            break;
        case 'clear':
        if(!args[1]) return message.reply('Please specify amount.')
        if(args[1]>=100) return message.reply('Please specify an amount lower than 100.')
        if(message.member.hasPermission('MANAGE_MESSAGES') === false) return message.reply('Only Administators can use this command')
        Arg2 = parseFloat(args[1]);
        message.channel.bulkDelete(Arg2 + 1);
        break;
    }
});