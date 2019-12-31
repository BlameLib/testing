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
    "stop music", "play sound cabin-door-opening", "scene HotelNight with fadeIn",
    "show Kama Pissed", "scene HotelNight with flash", "scene HotelNight with flash", "play music SpinalCoaster", 
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
	
    "jump Chapter-2-2",
],

script["Chapter-2-2"] =
[
    "stop music", "scene HotelNight with fadeOut", "play sound SceneTransition3", "wait 2000", "scene Room with fadeIn",
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
	
	
	
    "jump Chapter-2-3",
],

script["Chapter-2-3"] =
[
	"stop music", "scene Room with fadeOut", "play sound SceneTransition3", "wait 2000", "scene HotelNight with fadeIn",
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
	
	"jump Chapter-2-4",
],

script["Chapter-2-4"] =
[
	"stop music", "scene HotelNight with fadeOut", "play sound SceneTransition3", "wait 2000", "scene Rayshift with fadeIn",
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
	
	"jump Chapter-2-5",
],

script ["Chapter-2-End"]=
[
  "clear",
  "This is the end of Chapter 2.", "stop music", "play music Finish",
  "display message Credits",
  "end",
];
