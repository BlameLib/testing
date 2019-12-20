script["Chapter-1"] =
[
  "play sound Click", "wait 500",
  "stop music", "scene Default with fadeOut",
  "play sound TitleTransition", "wait 2000",
  "scene HotelDusk with fadeIn", "wait 1000", "play music Common_Melody loop",

  "wait 500",
  "play sound Hologram-Start",
  "show Kama Default with fadeIn",
  "Kama Ah, the Master of Chaldea. <br> Do you have a reason for calling, or have you finally decided to accept the futility of opposing me?",

  "show Kama Default left",
  "show {{player.sel}}-Holo Determined right with fadeIn",

  "{{player.sel}}-Holo Oh! Nothing of the sort! I am just letting you know that we are progressing well!",
  "show {{player.sel}}-Holo Default right",
  "{{player.sel}}-Holo Before you know it, we will be able to reclaim every single present that you took!",

  "show Kama Smug left",

  "Kama Is that so? <br> Fufufu, I find that hard to believe.",
  "Kama You will struggle, of course. You are too resilient to give up, dear Master... <br>...but no one has ever tamed Love.",
  "Kama This is one battle you are destined to lose.",

  "show {{player.sel}}-Holo Determined right",

  "{{player.sel}} Battles aren't won and lost till the end, are they?<br>There is still some time to go before Christmas.",

  "show {{player.sel}}-Holo Default right",
  "{{player.sel}} Just you wait Kama!<br>I am going to make sure that before the end, you will return the presents yourself with a smile!",
,
  "show Kama Disgust left",
  "Kama How cute. <br> You really do believe that, don't you? Fufufu, what a silly Master.",

  "show {{player.sel}}-Holo Default right",

  "{{player.sel}} Silly or no, I have a duty towards all of you... and you are no different Kama.<br>You are part of the group!",

  "show Kama Flustered left",

  "Kama W-whatever.<br>If that is all you have to say, I'd rather you go now.<br>Your naivety is getting on my nerves.",

  "{{player.sel}} Aww come on!<br> You don't mean that! You lov- ",

  "show Kama Pout2 with bounceInLeft",
  "hide {{player.sel}}-Holo with rotateOutDownLeft",
  "play sound Hologram-End", "wait 1000",

  "show Kama Pout",

  {"Conditional": {
      "Condition": function ()
      {
        return storage.player.sel == "Gudako";
      },
      "True": "Kama Stupid Master.Tch. <br>Who does she think she is, telling me what I am supposed to feel.<br>Hmpf.",
      "False": "Kama Stupid Master.Tch. <br>Who does he think he is, telling me what I am supposed to feel.<br>Hmpf."
    }},

  "jump Chapter-1-2",
],

script["Chapter-1-2"] =
[
  "stop music", "scene HotelDusk with fadeOut", "play sound SceneTransition3", "wait 2000", "scene WhistlerNight with fadeIn",

  "play sound Bird-Owl",
  "wait 2000",
  "play sound Wind",
  "Nameless Ahhhh,  these mountains are so pleasant! <br>They remind me so much of Kāilāsā.<br>Strange that Kama would choose to come here, of all places.",

  "show Parvati Default",
  "Parvati Does that mean that some part of her misses her old abode?",
  "show Parvati Concerned",
  "Parvati I just hope she doesn't run away again on seeing me.",
  "play sound Walk-Snow", "show Parvati Concerned with fadeOutLeft", "wait 2000",
  "play sound Knock", "hide Parvati with fadeOut",

  "scene WhistlerNight with fadeOut",
  "scene HotelNight with fadeIn",

  "wait 1000",
  "show Kama Irritated with fadeIn",
  "Kama This is getting repetitive!<br>Who is it this time? Do you people not understand the concept of leave me alon-</i>",

  "play sound Door-Open", "wait 2000",
  "show Kama Embarrassed", "play sound Horror",
  "Kama EEEEeeeeeeeeee!",

  "show Kama Pissed",
  "Kama WHAT ARE <b>YOU</b> DOING HERE!?!?!?",

  "show Parvati Default with slideInRight", "wait 300", "play sound Whack",
  "show Kama Pissed with fadeOutLeft", "wait 2000",
  "show Parvati Default right with fadeInLeft", "play sound Walk-Floor", "wait 4000",
  "play sound Door-Close", "wait 500",
  "show Parvati Default right with grayscale", "wait 800",
  "show Kama Irritated left with fadeIn", "wait 2000",
  "show Kama Irritated left with grayscale", "show Parvati Default right",

  "play music LB_Lively_Voyage loop",
  "Parvati Hello~ ! So this is where you have been holed up Kama!<br>And this is the way to greet Big Sis Parvati?",
  "show Parvati Smile right",
  "Parvati Where's your manners young girl?",

  "show Parvati Smile right with grayscale",
  "show Kama Pissed left",
  "Kama No! No words! <br> Out I say! Go away!",
  "Kama What is with you and showing up when least wanted?<br>Wasn't getting me burned to death enough that you came back again?",
  "Kama If you want help with Shiva again, I am not going to do anything, you hear?",

  "show Kama Pissed2 left",
  "Kama Take my bow and arrow and shoot your lazy murderous husband with it yourself!",

  "show Kama Pissed left with grayscale",
  "show Parvati Concerned right",
  "Parvati N-No! That's not what I am here for!",

  "show Parvati Concerned right with grayscale",
  "show Kama Irritated left",
  "Kama You expect me to believe that? No one comes to me until they want something.<br>The only time my name is remembered, is when a desire needs to be fulfilled.",

  "show Kama Irritated2 left",

  "Kama So get to the point, Parvati.<br>What do you want from me?",

  "show Kama Irritated2 left with grayscale",
  "show Parvati Embarrassed2 right",
  "Parvati I am here to help you!<br>I am the Spirit of Christmas Past, come to show you the past that you have forgotten!",

  "show Parvati Concerned right with grayscale",
  "show Kama Default left",
  "Kama ...Really.<br>I don't recall any of us celebrating Christmas all those millennia ago.",

  "show Kama Default left with grayscale",
  "show Parvati Default right",
  "Parvati The name of the festival doesn't matter.<br>What matters, is the spirit.",
  "Parvati In our time, YOU were the bringer of joy, remember? <br> When you laughed, the spring breeze would blow.",

  "show Parvati Happy right",

  "Parvati Your music, your gaze caused the lotus flowers to bloom and the world to be renewed once more.<br>After the long winter, your presence promised the coming spring.",

  "show Parvati Embarrassed3 right",
  "Parvati Have you forgotten all of that Kama?",

  "jump Chapter-1-3",
],

script["Chapter-1-3"] =
[
  "stop music",
  "hide Parvati with fadeOut",
  "show Kama Irritated with Default", "wait 1000",
  "show Kama Irritated2 with pulse", "play sound Heartbeat", "wait 1000",
  "play sound Ominous", "wait 2500",
  "play sound Electricity2", "scene HotelNight with flash", "wait 2000", "scene HotelNight2 with flash",

  "play music Beast_III loop",
  // play beast III-L music here

  "show Kama Smug2 with fadeIn",
  "Kama I remember everything, Parvati.<br>I remember the searing pain, as my flesh was burned from my body.",
  "Kama I remember the agony as my ashes were scattered across the uncaring universe.",

  "show Kama Irritated2",
  "Kama I remember the uncaring resurrection...the thoughtless refusal to grant me a new body.<br>I remember doing nothing but my duty, and receiving death as a reward.",
  "Kama All those indignities I suffered...I suffered on your behalf.",

  "show Kama Pissed2",
  "Kama If you had any shame, you would be here asking for my forgiveness...and not to demand me for anything!",
  "Kama Why, I- OW!", "play sound Funny2", "stop music",

  "show Kama Pissed left with bounce",
  "show Parvati Surprised right with slideInRight", "wait 1000",
  "show Parvati Surprised right with grayscale",

  "show Kama Pissed left with shake",
  "Kama Did you just jab me with Trisula?!?",

  "show Kama Pissed left with grayscale",
  "show Parvati Concerned right",
  "Parvati No no! My hand slipped trying to turn the lights back on, that's all!",
  "play sound Electricity", "wait 500", "scene HotelNight with flash", "show Kama Pissed left with grayscale", "show Parvati Concerned right",

  "show Parvati Concerned right with grayscale",
  "show Kama Pissed left",

  "Kama <b><i>YOU TOTALLY DID IT ON PURPOSE!</i></b>",

  "show Kama Pissed left with grayscale",
  "show Parvati Tired right",

  "Parvati I keep telling you, it was an accident!",
  "Parvati Besides, you were getting on bit of a soapbox.<br>Yes, I admit it...you were treated unfairly back then-",

  "show Parvati Tired right with grayscale",
  "show Kama NotImpressed left",

  "Kama Understatement of the millenia.",
  "show Kama NotImpressed left with grayscale",
  "show Parvati Annoyed right", "wait 1000",
  "show Parvati Embarrassed3 right",
  "play music Demise loop",
  "Parvati But as I was saying...despite that unfortunate incident...it has no bearing on what you are doing today.",

  "show Parvati Concerned right",
  "Parvati I can understand your resentment and melancholy...<br>but that doesn't excuse your attempt to make everyone else just as miserable!",

  "show Parvati Concerned right with grayscale",
  "show Kama Disgust left",
  "Kama They only know Love thanks to me.<br>It is fitting that they learn of Misery by my actions too.",

  "show Kama Disgust left with grayscale",
  "show Parvati Pissed right",
  "Parvati That's not the right thing to do Kama, and you know it.",

  "show Parvati Pissed right with grayscale",
  "show Kama Smug left",
  "Kama Do I ?<br>All I know is Love and all it entails.<br>When has Love ever known right from wrong?",
  "jump Chapter-1-4",
],

script["Chapter-1-4"] =
[
  "show Kama Smug left with grayscale",
  "show Parvati Concerned right",
  "Parvati When you chose to rouse my Shiva despite the dangers.<br>In your bitterness, you have forgotten the circumstances of that time, Ananga.",

  "show Parvati Concerned right with grayscale",
  "show Kama Sad left",
  "Kama ...",

  "show Kama Sad left with grayscale",
  "show Parvati Tired right",
  "Parvati It was the evil demon Taraka, who was causing mayhem through the world. <br>Killing and trampling all who opposed him.",
  "Parvati You led armies against that foul creature, alongside the other Gods...but in vain.",
  "show Parvati Concerned right",
  "Parvati It was then, that you learned of Taraka's boon...how he couldn't die unless it was at the hands of son of Shiva.",
  "show Parvati Cry right",
  "Parvati And so...for the good of all...you <b>volunteered</b> to rouse Shiva from his meditation.",

  "show Parvati Cry right with grayscale",
  "show Kama Sad2 left",
  "Kama For all the good it did. ",

  "show Kama Sad2 left with grayscale",
  "show Parvati Embarrassed3 right",
  "Parvati It did a lot of good.<br>Your actions...your sacrifice...it saved us all.",

  "show Parvati Embarrassed3 right with grayscale",
  "show Kama Sad left",
  "Kama (Sighs) <br> Perhaps. But that was then Parvati.",
  "Kama I am no longer the same Kama.<br>This is not even my body!",

  "show Kama Sad left with grayscale",
  "show Parvati Default right",

  "Parvati This may not be your body...but you are still the same Kama.",

  "show Parvati Smile right",
  "Parvati What you look like doesn't change who you are deep inside.<br>Much like this festival of warmth and joy.",
  "Parvati Its name may be different now...but you are still the one who will bring joy to it.<br>Trust me...I only speak the truth.",

  "show Parvati Smile right with grayscale",
  "show Kama Irritated left",
  "Kama Trust you?<br>And Just why should I trust what you say?",

  "show Kama Irritated left with grayscale",
  "show Parvati Tired right",
  "Parvati ... because I was the one who begged Shiva to bring you back to life.",
  "Parvati I have only ever wished the best for you.",

  "show Parvati Tired right with grayscale",
  "show Kama Sad left", "wait 1500", "show Kama Sad2 left",
  "Kama I... I'll think about it.<br>Just go.",
  "Kama I can't bear to even look at you right now.",

  "show Kama Sad2 left with grayscale",
  "show Parvati Concerned right",
  "Parvati Kama ...I-",

  "show Parvati Concerned right with grayscale",
  "show Kama Pissed left",
  "stop music", "Kama <b>LEAVE!</b>",

  "show Kama Pissed left with grayscale",
  "show Parvati Surprised right", "wait 1000",
  "show Parvati Embarrassed3 right with fadeOut", "play sound Walk-Floor", "wait 1500",
  "play sound Door-Open", "wait 2000", "play sound Door-Close", "wait 1000",

  "show Kama Sad with fadeIn",
  "Kama Could she be right? No...all that was eons ago.",
  "show Kama Default",
  "Kama Those days are long since past.<br>As long as I am happy...that is all that matters.",
  "Kama I am not going to worry about what anyone thinks of me.<br>My happiness is all I am going to care about.",

  "jump Chapter-1-End",
],

script ["Chapter-1-End"]=
[
  "clear",
  "This is the end of Chapter 1.", "stop music", "play music Finish",
  "display message Credits",
  "end",
],

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

script ["MusicTest"]=
[
  "play music testmusic.mp3 loop",
],
script ["Test"]=
[
    "stop music", "clear",

    // "jump Prologue-Aftermath-6",
    // "This is the test screen",

    "jump MusicTest",
];
