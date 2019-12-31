script["Chapter-2"] =
[
    "play sound Click", "wait 500",
    "stop music", "scene Default with fadeOut",
    "play sound TitleTransition", "wait 2000",
    "scene ResortHallway with  fadeIn", "wait 1000", "play music Lively_Voyage loop",
    
    "wait 500", 
    "play sound Walk-floor", 
    "show Kama Default with fadeIn"
    "Kama What's wrong with me? <br> Why am I still thinking about Chaldea's Master?",
    "Kama Regardless of what Parvati thinks...I am not going to take up that thankless job again.",
    "show Kama Smug",
    {"Conditional": {
      "Condition": function ()
      {
        return storage.player.sel == "Gudako";
      },
      "True": "Kama Why, when Master of Chaldea's deadline ends, <br>and she hasn't retrieved the presents", 
      "False": "Kama Why, when Master of Chaldea's deadline ends, <br>and he hasn't retrieved the presents", 
    }},
    {"Conditional": {
      "Condition": function ()
      {
        return storage.player.sel == "Gudako";
      },
      "True": "Kama I am just going to throw the remainder down this mountain.<br>That should show her. Hah!",
      "False": "Kama I am just going to throw the remainder down this mountain.<br>That should show him. Hah!",
    }},
    
    "play sound Walk-floor",
    "stop music", "play sound cabin-door-opening", "scene HotelDusk with fadeIn",
    "show Kama Pissed", "scene HotelDusk with flash", "scene HotelDusk with flash", "play music SpinalCoaster", 
    "Kama W-what? <br> Who are you and how did you get into my room?",
	
    "show Pingu-Swag Sparkle with slideInRight", "show Kama Pissed left with grayscale",
    "Pingu-Swag Well, well! Look who's here! <br> What hole did you crawl out from, Goddess of Love?",
	"Pingu-Swag Only proper divas are allowed to be this fashionable late, you know?",
	"show Pingu-Swag Smug",
	"Pingu-Swag And you are not one.",
	"show Pingu-Swag default right with grayscale", "show Kama Irritated left",
	
	"Kama I will not ask again. <br> Who. Are. You.",
	"show Kama Irritated left with grayscale", "show Pingu-Swag Sparkle right",
	
	
	"Pingu-Swag I am the Top Star, dontcha know?",
	"Pingu-Swag The Dancing Queen. Young and Sweet! <br> Only Seventeen~",
	"Pingu-Swag But YOU can call me Spirit of Christmas Present!",
	"show Kama NotImpressed left", "show Pingu-Swag Smile right with grayscale",
	
	"Kama Really now. You?",
	"Kama Since when does a self-proclaimed diva embody this festival of Giving?",
    "show Kama NotImpressed left with grayscale", "show Pingu-Swag Sparkle right",
	
	"Pingu-Swag Since Hallmark commercialized it, of course!",
	"Pingu-Swag Now it's all about the glitz and the glam <br> and sharing your haul on social media!",
	"show Kama Irritated left", "show Pingu-Swag Smile right with grayscale",
	
	"Kama Like every annoyance so far, I doubt you are going away anytime soon either.",
	"Kama Fine then. Say what you are here to say, <br> and then never darken my doorstep again.",
	"show Kama Smug2 left",
	"Kama Well, what are you waiting for? <br> Do your worst.",
	"show Kama Smug2 left with grayscale", "show Pingu-Swag Excited right",
	
	"Pingu-Swag I am SO glad you said that!",
	"wait 300", "play sound Hologram-Start", "show Pingu-Swag Default right",
	"Pingu-Swag Let's see...just need to reroute the camera feed...",
	"show Pingu-Swag Sparkle right",
	"Pingu-Swag ...aaaand, Showtime!",
	"Here's what's going on in Chaldea right now!",
	"hide Pingu-Swag", "hide Kama",
	
    "jump Chapter-2-2",
],

script["Chapter-2-2"] =
[
    "stop music", "scene HotelDusk with fadeOut", "play sound SceneTransition3", "wait 2000", "scene Room with fadeIn",
    "show Nursery Upset right with fadeIn", "show Janta Upset center with fadeIn",  "show Jack Upset left with fadeIn",
	"play music Demise loop",
	"show Nursery right with grayscale", "show Janta center with grayscale",
	
	"Jack Mommy still isn't back with presents. No Christmas then? What do we do?",
	"show Jack right with grayscale", "show Nursery Angry left",
	
	"Nursery There's nothing we an do, but trust in Master. I'm sure he'll bring this story a happy ending!",
	"show Nursery left with grayscale", "show Janta Agitated center",
	
	"Janta She's right! Reindeer's record is <i>impeachable!<i/>",
	"show Janta center with grayscale", "show Nursery Upset left",
	
	"Nursery Impeccable, you mean.",
	"show Nursery left in grayscale", "show Janta center",
	
	"Janta I know what I said!",
	"show Janta center in grayscale", "show Jack Serious right",

	"Jack I like Peaches. <br> Remember when we had Peach cobbler last year?", 
	"Jack Mommy gave us two slices for being a good girl.", 
	"show Jack Pissed right",
	"Jack I know, let's take Bad Santa's cake away!",
	"show Jack Serious right in grayscale", "show Nursery Upset left",
	
	"Nursery But where is the Bad Santa anyway? <br> Can we go to look for her?",
	"show Nursery left in grayscale", "show Janta Upset center", 
	
	"Janta I want to...but Reindeer took the sleigh when they left."
	"show Janta Irritated", 
	"Janta Without that, we cannot arrange for transposition!",
	"show Janta Crying center", "show Nursery Upset left", "show Jack serious right",
	
	"Jack Ths makes us very sad! <br> Why would Bad Santa do this?",
	"show Jack Upset right",
	
	//figure out how to do "crying intensifies"
	
	"wait 300", "play sound Hologram-End",
	"hide Jack", "hide Nursery", "hide Janta",
	
	
	
    "jump Chapter-2-3",
],

script["Chapter-2-3"] =
[
	"stop music", "scene Room with fadeOut", "play sound SceneTransition3", "wait 2000", "scene HotelDusk with fadeIn",
	"show Kama Smug left with grayscale", "show Pingu-Swag Smug right",
	"play music Common_Melody loop",
	
	"Pingu-Swag Wow, that's just horrible of you, isn't it?",
	"Pingu-Swag Making little girls cry. <br> How despicable.",
	"show Pingu-Swag right in grayscale", "show Kama left",
	
	"Kama They should be thanking me. <br> I am just teaching them the realities of life",
	"Kama Chaldea's Master pampers them too much.",
	"Kama About time they learned of disappointment",
	"show Kama left in grayscale", "show Pingu-Swag Pissed right",
	
	"Pingu-Swag ...I want to argue with that, <br> but you may have a point.",
	"Pingu-Swag Moving on! <br> Let's see what else is going on in Chaldea!",
	"wait 300", "play sound Hologram-Start",
	"hide Pingu-Swag", "hide Kama",
	
	"jump Chapter-2-4",
],

script["Chapter-2-4"] =
[
	"stop music", "scene HotelDusk with fadeOut", "play sound SceneTransition3", "wait 2000", "scene Rayshift with fadeIn",
	"show Gareth Pissed left with fadeIn",
	"play music Lively_Voyage loop",
	
	"Gareth Oww..where am I?",
	"Gareth Haaaaaaaa!!! It's Miss Inventor! <br> What am I doing here?!",
	"show DaVinci Wink right with Fadein", "show Gareth Default left with grayscale",
	
	"DaVinci Relax~! <br> What's the last thing that you remember?",
	"show DaVinci right in grayscale", "show Gareth Surprised left",
	
	"Gareth I...uaaa...I don't know!", 
	"Gareth I felt this fresh breeze, that reminded me of horses... ",
	"Gareth ...or freshly oiled spears...and umm... <br>awawawawawa...",
	"show Gareth left in grayscale", "show DaVinci Default right",
	
	"DaVinci I see. Same as the others. <br> I can be reasonably sure of my guess now.",
	"Da Vinci Unfortunate. <br> I had hoped <i>that</i> wouldn't be the case.",
	"show DaVinci right in grayscale", "show Gareth Stunned left",
	
	"Gareth What happened? <br> Is everything okay?",
	"show Gareth left in grayscale", "show DaVinci Surprised right",
	"stop music", "play music Into_The_Dark_Clouds loop",
	
	"DaVinci You were victim of a powerful Noble Phantasm at the hands of a rogue servant,",
	"Da Vinci Considering the scale of the action",
	"Da Vinci I have no choice but to declare that Servant as an Enemy of Chaldea",
	
	"wait 300", "play sound Hologram-End",
	"hide DaVinci", "hide Gareth",
	
	"jump Chapter-2-5",
],

script["Chapter-2-5"] =
[
	"stop music", "scene Rayshift with fadeOut", "play sound SceneTransition3", "wait 2000", "scene HotelDusk with fadeIn",
	"show Kama Sad left with grayscale", "show Pingu-Swag Smug right",
	"play music SpinalCoaster loop",
	
	"Pingu-Swag Well now! <br> Quite a step up, wouldn't you say?",
	"Pingu-Swag From a grinch to a criminal...not a good look there!",
	"show Pingu-Swag Sadistic",
	"Pingu-Swag Oh? Don't have anything to say now?",
	"Pingu-Swag Where's all that bluster of yours? <br> Your arrogance...that smarmy smugness?",
	"Pingu-Swag If I didn't know any better, <br> I'd say you were nearing a Melt-down.",
	"show Pingu-Swag right in grayscale", "show Kama Pissed2 left",
	
	"Kama S-Shut up!",
	"show Kama left in grayscale", "hide Pingu-Swag", "show Pingu Sadistic2 right",
	
	"Pingu I can see it in your eyes...that urge to deny. <br> To say you don't care because none of these people matter to you",
	"Pingu But what about the one that does matter?",
	"Pingu Tell me, Goddess of Love... <br> are you ready to see what our Master thinks of you?",
	"show Pingu right in grayscale", "show Kama Pout2 left",
	
	"Kama T-That...Tch, Whatever.",
	"Kama Chaldea's Master is no more important to me than an insect under my feet",
	"show Kama left in grayscale", "show Pingu Smile right",
	
	"Pingu How Pathetic. <br> A goddess who lies to even herself.", 
	"Pingu Love is radiant...",
	"Pingu It's a star shining above the lake, <br>reflecting it's beauty for all to appreciate.",
	"Pingu And above all, Love is honest.",
	"Pingu Till you are honest with yourself, <br>your words are meaningless.",
	"show Pingu right in grayscale", "show Kama sad left",
	
	"Kama ...",
	"show Kama left in grayscale", "show Pingu Sadistic2 right",
	
	"Pingu That conflict of emotions on your face... <br> that tumult that you feel...",
	"Pingu The ripples in the sheen of still waters... <br> this is what I came here to see.",
	"Pingu Come closer... <br> Let's hear what master has to say about you.",
	"wait 300", "play sound Hologram-Start",
	
	"jump Chapter-2-6",
],

script ["Chapter-2-6"]=
[
	"stop music", "scene HotelDusk with fadeOut", "play sound SceneTransition3", "wait 2000", "scene Bazaar with fadeIn",
	"play music Your_Wish loop", "show Mash Happy right with fadeIn", 
	
	"Mash Senpai! Senpai! Over here! <br> I got you some coffee!",
	"Mash With how cold it is, it should be great!",
	"show Mash right in grayscale", "show {{player.sel}} Determined left with fade-in",
	
	"{{player.sel}} Thanks Mash!",
	"{{player.sel}} Any new updates from Da Vinci?",
	"show {{player.sel}} left in grayscale", "show Mash right",
	
	"Mash Oh yes! <br> More and more servants are coming out of Kama's Hypnosis.",
	"Mash As soon as they are feeling better, <br> They are being sent out here, to help us.",
	"Mash Already, our ranks have swelled to beyond just Arch-",
	"hide {{player.sel}} with fadeOut", "hide Mash with fadeOut", "show Emiya happy with fadeIn",
	
	"Emiya CHRISTMAS SANTAM!",
	"hide Emiya with fadeOut", "show {{player.sel}} Determined left with fadeIn", "show Mash Surprised right with fadeIn",
	
	"Mash ...Y-yes, Santam and the Super Santam Squad.",
	"show Mash Happy right",
	"Mash With all of us working together, we should be done in no time!",
	"Mash I'm receiving encouraging reports from everyone!",
	"show Mash right in grayscale", "show {{player.sel}} Default left",
	
	"{{player.sel}} Oh, that's good! ~",
	"{{player.sel}} Such a pity that kama did this, <br> But in a way, we are getting to enjoy some time away from Chaldea.",
	"{{player.sel}} It's nice to spend time with your friends on Christmas, after all", 
	"show {{player.sel}} left in grayscale", "show Mash Surprised right",
	
	"Mash O-oh...I would have thought you unhappy, <br>to have to work again, on yet another Christmas.",
	"show Mash right in grayscale", "show {{player.sel}} left", 
	
	"{{player.sel}} Wellll... <br>I've come to accept that this is how Chaldeas' Christmases are!",
	"show {{player.sel}} Determined left",
	"{{player.sel}} If you look beyond the impending crisis, <br>it's actually kind of pleasant!",
	"show {{player.sel}} Kazuma left",
	"{{player.sel}} Still...if only the reason wasn't Kama letting us down.",
	"show {{player.sel}} left in grayscale", "show Mash Upset right",
	
	"Mash You sound disappointed, Senpai.",
	"show Mash right in grayscale", "show {{player.sel}} Surprised right",
	
	"{{player.sel}} That's because I am.",
	"{{player.sel}} I knew Kama was having trouble fitting in, <br> but I never thought she'd do something like this...",
	
	"wait 300", "play sound Hologram-End",
	"hide {{player.sel}}", "hide Mash",
	
	"jump Chapter-2-7",
],

script ["Chapter-2-7"]=
[
	"stop music", "scene Rayshift with fadeOut", "play sound SceneTransition3", "wait 2000", "scene HotelDusk with fadeIn",
	"show Kama Sad2 left in grayscale", "show Pingu Smug right",
	
	"Pingu ...And that's the last nail in your coffin.",
	"Pingu You've managed to even disappoint Master.",
	"Pingu The same Master, who is tolerant and understanding <br> of the evilest of tyrants and the biggest monsters of humanity",
	"Pingu ...was disappointed by you.",
	"show Pingu Angry",
	"Pingu I hope you are proud of yourself.",
	"show Pingu right in grayscale", "show Kama Pissed2 left",
	
	"Kama Just...just go.",
	"Kama I don't want to see this anymore. <br> Leave me alone!",
	"Kama If I am to be a disappointment, then I would rather be one in solitude <br> than be looked at with judging stares!",
	"Kama Go!",
	
	"show Pingu Default right with bounce",
	"show Kama right with slideInRight", "wait 1000",
	"show Pingu Sad right with shake", "show Kama left in grayscale",
	
	"Pingu You are already a disappointment, Goddess of Love.",
	"Pingu Don't make it worse by being a fool.",
	"Pingu There's still time to correct yourself, <br> and do what needs to be done.",
	"Pingu Even if you hide away from the world, <br> from everyone's judging gaze...",
	"Pingu ...you will still have to face the mirror some time.",
	"show Pingu right in grayscale", "show Kama Pissed2 left",
	
	"Kama That's easy for you to say! <br> What do you expect me to do?",
	"show Kama left in grayscale", "show Pingu Smile right",
	
	"Pingu I don't know, and that's not my problem.",
	{"Conditional": {
      "Condition": function ()
      {
        return storage.player.sel == "Gudako";
      },
      "True": "Pingu I am just a messenger, <br> who did what she told me to do.", 
      "False": "Pingu I am just a messenger, <br> who did what he told me to do.", 
    }},
	"Pingu The rest is up to you",
	"hide Pingu", "show Pingu-Swag Sparkle right with fadeIn",
	"Pingu-Swag Now, this beautiful siren exits the stage, <br> and away from the limelight.",
	"Pingu-Swag MELT-<b>OUT!</b>",
	
	"jump Chapter-2-End",
],

script ["Chapter-2-End"]=
[
  "clear",
  "This is the end of Chapter 2.", "stop music", "play music Finish",
  "display message Credits",
  "end",
];
