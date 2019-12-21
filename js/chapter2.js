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
      "True": "Kama Why, when Master of Chaldea's deadline ends, <br>and she hasn't retrieved the presents, 
      "False": "Kama Why, when Master of Chaldea's deadline ends, <br>and he hasn't retrieved the presents, 
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
    "show Pingu-Swag Sparkle",
    "Pingu-Swag Well, well! Look who's here!",
    
    "jump Chapter-2-End",
],

// script["Chapter-2-2"] =
// [
    
    
//    "jump Chapter-2-End",
// ],

script ["Chapter-2-End"]=
[
  "clear",
  "This is the end of Chapter 2.", "stop music", "play music Finish",
  "display message Credits",
  "end",
];
