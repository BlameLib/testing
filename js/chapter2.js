script["Chapter-2"] =
[
    "play sound Click", "wait 500",
    "stop music", "scene Default with fadeOut",
    "play sound TitleTransition", "wait 2000",
    "scene Resort-Hallway with  fadeIn", "wait 1000", "play music A_Lively_Voyage loop",
    
    "wait 500", 
    "play sound Walk-floor", 
    "show Kama Default with fadeIn"
    "Kama What's wrong with me? <br> Why am I still thinking about Chaldea's Master?",
    "Kama Regardless of what Parvati thinks...I am not going to take up that thankless job again.",
    
    {"Conditional": {
      "Condition": function ()
      {
        return storage.player.sel == "Gudako";
      },
      "True": "Kama Why, when Master of Chaldea's deadline ends, and she hasn't retrieved the presents, <br>I am just going to throw the remainder down this mountain.<br>That should show her. Hah!",
      "False": "Kama Why, when Master of Chaldea's deadline ends, and he hasn't retrieved the presents, <br>I am just going to throw the remainder down this mountain.<br>That should show him. Hah!",
    }},
    "jump Chapter-2-2",
],

script["Chapter-2-2"] =
[
    "stop music", "play sound cabin-door-opening", "scene HotelNight with fadeIn",
    "show Kama Pissed", "scene HotelNight with flash", "scene HotelNight with flash", "play music SpinalCoaster", 
    
    "jump Chapter-2-End",
],

script ["Chapter-2-End"]=
[
  "clear",
  "This is the end of Chapter 2.", "stop music", "play music Finish",
  "display message Credits",
  "end",
],
