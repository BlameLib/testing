script["Prologue-Aftermath"] = [
  "play sound Click", "wait 500",
  "stop music", "scene Default with fadeOut",
  "play sound TitleTransition", "wait 3000", "scene black with fadeIn",
  "centered <font color='#ffffff'>—Sometime later—</font>", "wait 1000", "play music Lively_Voyage loop",
  "Nameless Tell me again, why should I be the one to do this? <br> This task really is quite beneath me, you hear?",
  "Nameless Yes, I know I agreed to help.. and you should be grateful that I did.",
  "Nameless But still, this? Someone else would be better suited to do this.",
  "Nameless W-what do you mean \"you two are one and the same\"!? How dare you! <br> Why, I'll-",
  "show Ishtar Annoyed with fadeIn",
  "Ishtar T'ch... he cut the call. Such is to be expected from a lowlife like him. <br> Hmph.",
  "hide Ishtar with fadeOut", "wait 1000", "scene black with fadeOut", "wait 1000", "scene WhistlerDay with fadeIn", "wait 1000", "show Ishtar Default with fadeIn",
  "Ishtar This really is a fine hideout though. <br>Old mountains like these are always a good spot for mining Gemstones.",
  "show Ishtar Angry2",
  "Ishtar Haaaaaah! But this is more important right now... <br> I suppose it can't be helped!",
  "show Ishtar Happy",
  "Ishtar Sooner I can drag that Goddess out of here, sooner I can see what delights this mountain has to offer.",

  "jump Prologue-Aftermath-2",

],

script ["Prologue-Aftermath-2"] =
[
    "stop music", "scene WhistlerDay with fadeOut", "play sound SceneTransition3", "wait 2000",  "play sound Jump", "wait 2000", "scene HotelDay with fadeIn",  "play sound Thump", "scene HotelDay with jello", "wait 1000", "play music Paradise loop",

    "show Kama Embarrassed with wobble",
    "Kama Hold on, hold on, I'm coming!",
    "show Kama Flustered2",
    "Kama Ugh... who could it be? Don't tell me Master found me already?",
    "show Kama Default",
    "play sound Door-Open", "clear", "wait 2000",
    "show Kama Default left", "show Ishtar Uh right with fadeIn", "wait 1000", "show Kama NotImpressed left",
    "Ishtar (Ow, ow-)", "show Ishtar Uh2 right",
    "Ishtar Ahem-", "wait 1000", "show Ishtar Smug right", "show Kama NotImpressed left with grayscale",
    "Ishtar Soooo, <i>YOU</i> are the Goddess of Love I have heard so much about.<br> You don't look like much, do you child?",
    "show Kama Irritated left", "show Ishtar Smug right with grayscale",
    "Kama Who do you think you are calling a child? And who invited you here in the first place? <br> Just go away.",
    "show Ishtar Annoyed right", "show Kama Irritated left with grayscale",
    "Ishtar There's nothing I'd like more, you little brat. <br> Do you think I am here willingly?",
    "Ishtar Why, you should be humbled that one such as I came all the way to here, to give you a warning. <br> And an advice, from one Goddess to another.",
    "show Kama Smug left", "show Ishtar Annoyed right with grayscale",
    "Kama You? Offering advice to anyone? How amusing. <br> Still, I'll hear you out. What is it?",
    "show Ishtar Embarrassed2 right", "show Kama Smug left with grayscale",
    "Ishtar H-how rude!",
    "show Kama NotImpressed left with grayscale", "show Ishtar Embarrassed right",
    "Ishtar I really should blow you off this mountain for that insolence!",
    "show Ishtar Embarrassed3 right",
    "Ishtar But, I promised to behave after the last incident... y-yes.<br> That's the only reason I'll forgive your trepass this time.",
    "show Ishtar Serious right",
    "Ishtar Coming back to the point, it's really in your best interests to stop all this foolishness. <br> Return the presents and come back to Chaldea.", "show Ishtar Serious right with grayscale",
    "show Kama Irritated left",
    "Kama And if I don't? Is this the part where you threaten me with dire consequences?",
    "show Kama Irritated2 left",
    "Kama Nothing that Chaldea and its Master can do can compare with the agony of being burnt to ashes.",
    "show Ishtar Uh2 right", "show Kama Irritated2 left with grayscale",
    "Ishtar Eh? No no! That's not how Master gets even.",
    "show Kama NotImpressed left with grayscale",

    {"Conditional": {
				"Condition": function ()
        {
					return storage.player.sel == "Gudako";
				},
				"True": "Ishtar No, when she wants you to pay for all the trouble you have caused her... <br> She pulls out all the stops to humble you!",
				"False": "Ishtar No, when he wants you to pay for all the trouble you have caused him... <br> He pulls out all the stops to humble you!",
			}},

    "show Kama Pout left", "show Ishtar Uh2 right with grayscale",
    "Kama ... what?",
    "show Ishtar Uh3 right", "show Kama Pout left with grayscale", "play music KingOfGold loop",
    "Ishtar There used to be a time when my name would make the devotees fall to their knees  and press their foreheads on the ground in awe of me...",
    "show Ishtar Uh4 right",
    "Ishtar And Chaldea's Master and that awful Goldy had the temerity to make me, <i><b>ME</b></i>, carry a tablet around my neck, showing my guilt to the world!",
    "show Ishtar Cry4 right",
    "Ishtar Not once... but twice!",
    "show Ishtar Cry3 right", "wait 300",
    "show Ishtar Cry4 right", "wait 300",
    "show Ishtar Cry3 right", "wait 300",
    "show Ishtar Cry4 right",
    "Ishtar Tell me, who does that? How is that remotely fair?",

    "show Kama Pout2 left", "show Ishtar Cry4 right with grayscale",
    "Kama (Now she is just whining about her treatment. This is getting annoying)",
    "show Ishtar Cry4 right", "show Kama Pout2 left with grayscale",
    "jump Prologue-Aftermath-3",
],

script ["Prologue-Aftermath-3"] =
[
    "play sound FastForward",
    "show Ishtar Uh3 right", "wait 500", "show Ishtar Uh right", "wait 500", "show Ishtar Uh3 right", "wait 500", "show Ishtar Uh2 right", "wait 500", "show Ishtar Uh right",
    "Ishtar ... and to top it all off, they said I was to blame!",
    "show Ishtar Uh4 right",
    "Ishtar Again! Sure, it was my idea to recreate Gugalanna.",
    "show Ishtar Cry right",
    "Ishtar But was forcing me to pay for all the damages really necessary?",
    "show Ishtar Cry3 right", "show Kama Irritated left grayscale",
    "Ishtar And I am not the only Goddess that Chaldea treats with such wanton cruelty!",
    "Ishtar It's the worst, and I hate it! You still have time! <br> Give up on your plan, and you might escape the denigration.",
    "show Ishtar Cry4 right",
    "Ishtar Otherwise, the next thing you know, you are being paraded around like a common criminal.",
    "stop music", "wait 1000",

    "show Kama NotImpressed left", "show Ishtar Cry4 right grayscale",
    "Kama Hmph, are you done?", "play music Paradise loop",
    "show Ishtar Uh3 right with grayscale", "show Kama Default left",
    "Kama The way I see it... I have already been punished for merely doing my duty.",
    "Kama I might as well commit some crimes, to match that punishment, no?",
    "show Kama Happy left",
    "Kama Fufufu. <br> Not that you would understand. Perhaps I should speak slower and use smaller words?",
    "show Ishtar Embarrassed2 right", "show Kama NotImpressed left with grayscale",
    "Ishtar H-hmph. Well, whatever! Don't say I didn't warn you.",
    "show Ishtar Embarrassed right", "wait 1000", "show Ishtar Annoyed right",
    "Ishtar And I'll make a note to get back at you someday for this horrible behavior!",

    "show Kama NotImpressed left", "show Ishtar Annoyed right with grayscale",
    "Kama Are you done?",
    "show Kama Sad2 left",
    "Kama <i>(Sigh)</i> You hear one threat, you have heard them all.",
    "show Kama Irritated left",
    "Kama Leave now... I have a mind to go and soak in the spa and your rambling is wasting precious daylight.",
    "show Kama Irritated left with grayscale", "show Ishtar Angry2 right", "wait 500", "show Ishtar Serious right",
    "Ishtar Well, I tried. <i>(Shrugs)</i>",
    "play sound Walk", "hide Ishtar with fadeOutRight", "clear", "wait 2000",
    "show Ishtar Smug center with lightSpeedIn", "play sound Breaking", "wait 500", "show Ishtar Smug right with slideInLeft",
    "Ishtar Oh! I almost forgot! <br> Our mutual acquaintance has sent a warning.",
    "Ishtar Starting tonight... you will be visited by three Spirits.",
    "show Kama Default left", "show Ishtar Smug right with grayscale",
    "Kama For what purpose exactly?",
    "show Ishtar Uh2 right", "show Kama Default left with grayscale",
    "Ishtar Er... I forgot.",
    "show Kama NotImpressed left", "show Ishtar Uh2 right with grayscale", "wait 1000",
    "show Ishtar Uh right", "show Kama NotImpressed left with grayscale",
    "Ishtar Hey! Don't look at me like that!",
    "Ishtar He is fond of rambling and he kept going on and on and on!",
    "show Ishtar Uh4 right",
    "Ishtar ... And I tuned him out after a while.",
    "show Ishtar Angry2 right",
    "Ishtar A-anyway... that's all that I had to say, so I'll be going now. <br> I'd wish you luck, but I don't want to.",
    "show Ishtar Default right", "wait 300", "show Ishtar Bubblegum right", "wait 300", "show Ishtar Default right", "wait 300", "show Ishtar Bubblegum right",
    "Ishtar Onward Maanna!!!",
    "play sound Woosh", "hide Ishtar with lightSpeedOut", "wait 1000", "stop music",
    "show Kama Sad2 with fadeIn",
    "Kama What a pain. Even with how troublesome that Goddess is...<br> this body of mine feels a twinge of loneliness, now that she has gone.",
    "show Kama Sad",
    "Kama How strange.", "wait 500",
    "jump Prologue-Aftermath-4",
],

script ["Prologue-Aftermath-4"] =
[
  "stop music", "scene HotelDay with fadeOut", "play sound SceneTransition3", "wait 2000",  "scene Stratosphere-Day with fadeIn", "play music LightOfHumanity loop",

  "centered <font color='#000000'>—Somewhere, upper atmosphere—</font>",
  "show {{player.sel}} Default",
  "play sound Neighing", "{{player.sel}} Lucky that we still had Llamrei Unit II in storage!",
  "hide {{player.sel}} with fadeOut",
  "show Arthur Default with fadeIn",
  "Arthur Indeed! By some stroke of luck, it is responding to me.",
  "Arthur But, let's not worry about the why, and just rejoice in our unexpected fortune.",
  "show Arthur Default left with grayscale", "show Brynhildr Default right with fadeIn",
  "Brynhildr It is fast. As fast as one of Lord Odin's chariots. <br> I used to fly behind it, whenever he would set out, and my sisters would follow suit.",
  "show Brynhildr Happy right",
  "Brynhildr This brings back so many memories.",
  "hide Arthur with fadeOut", "hide Brynhildr with fadeOut",
  "show Mash-Holo Happy with fadeIn",
  "Mash-Holo Oh! That sounds wonderful!",
  "Mash-Holo I was worried when Da Vinci told us that Kama was hiding all the way in Canada. <br> But with this, we will be there in no time.",
  "hide Mash-Holo with fadeOut",
  "show Jeanne Default with fadeIn",
  "Jeanne The sooner we get there, the better. <br> But, the question still remains:  what should we be on the lookout for?",
  "Jeanne Love is rather subjective. What we may love and value, Kama might not.",
  "show Jeanne Default left with grayscale", "show Mordred Default right with fadeIn",
  "Mordred If it were me, I'd probably want a new horse.",
  "show Mordred Happy right",
  "Mordred Or the chance to kick Father's ass for the crown.",
  "hide Mordred with fadeOut", "hide Jeanne with fadeOut", "show Arthur Surprised with fadeIn",
  "Arthur Language, Mordred.",
  "show Arthur Surprised left with grayscale", "show Mordred Default right with fadeIn",
  "Mordred Oh, not <i>YOUR</i> crown, father. It wouldn't fit me very well, for one.",
  "show Mordred Happy right",
  "Mordred And kicking your ass wouldn't be as fun as kicking Father's ass.",
  "hide Arthur with fadeOut", "hide Mordred with fadeOut", "show Jeanne Default with fadeIn",
  "Jeanne I see succession is still a contentious issue in the British Monarchy. <br> Some things never really change, do they?",
  "show Jeanne Default left with grayscale", "show Mordred Angry right with fadeIn",
  "Mordred Oi! Them's fightin' words, frenchie!",
  "hide Jeanne with fadeOut", "hide Mordred with fadeOut",
  "show Gawain Happy with fadeIn",
  "Gawain Hahaha. Well, it's not like the Lady Saint is wrong, Sir Mordred.",
  "show Gawain Default",
  "Gawain Your actions are quite... infamous.",
  "show Gawain Default left with grayscale", "show Mordred Angry right with fadeIn",
  "Mordred Big words coming from the guy who never gets a Sunlight Field Bonus in any event! Ha!",

  "jump Prologue-Aftermath-5",

],

script ["Prologue-Aftermath-5"] =
[
  "stop music", "show Mordred Angry right",
  "show Gawain Happy left", "wait 2000",
  "show Mordred Angry center with bounceInRight",
  "play sound Clang",
  "show Gawain Angry center with bounceInLeft", "wait 500",
  "hide Mordred with bounceOutRight", "hide Gawain with bounceOutLeft",
  "wait 1500",

  "show Gawain Angry center with bounceInLeft",
  "play sound Clang2",
  "show Mordred Angry center with bounceInRight","wait 500",
  "hide Mordred with bounceOutRight", "hide Gawain with bounceOutLeft",
  "wait 2000",

  "play sound Clang3",
  "show Gawain Angry center with bounceIn", "show Mordred Angry center with bounceIn",
  "wait 300",
  "show Mordred Angry center with bounceIn", "show Gawain Angry center with bounceIn",
  "wait 300",
  "show Gawain Angry center with bounceIn", "show Mordred Angry center with bounceIn",
  "wait 300",
  "hide Mordred with bounceOutRight", "hide Gawain with bounceOutLeft",

  "wait 2000",

  "scene black with fadeIn",
  "play sound NP-Start", "wait 2000",
  "show Mordred Angry with fadeIn", "play sound MordredNP", "wait 5300", "stop sound",
  "hide Mordred with fadeOut", "show Arthur Surprised with fadeIn",
  "Arthur Sir Knights! Please desist! <br> Your actions run contrary to the spirit of the holiday!",
  "scene Stratosphere-Day with fadeIn", "show Arthur Determined", "play music LightOfHumanity loop",
  "Arthur Surely there is something both of you can cooperate on.",

  "jump Prologue-Aftermath-6",
],

script ["Prologue-Aftermath-6"]=
[
  "hide Arthur with fadeOut",
  "show {{player.sel}} Kazuma",
  "{{player.sel}} Well, there was the time with mashed potatoes...",
  "hide {{player.sel}}",
  "show Gawain Angry left with shake-horizontal", "show Mordred Angry right with shake-horizontal",

  function ()
  {
    characters.Nameless.Name = "Gawain and Mordred";
    return true;
  },

  "Nameless <font size='20'>THAT NEVER HAPPENED !!</font>",

  function ()
  {
    characters.Nameless.Name = "???";
    return true;
  },

  "hide Gawain", "hide Mordred",
  "show Brynhildr Default with fadeIn",
  "Brynhildr Our mission will be a failure if this goes on.<br> Master, please do something.",
  "hide Brynhildr with fadeOut",
  "show Jeanne Happy with fadeIn",
  "Jeanne Master, consider this an obstacle in a holiday quest. <br> One that you must overcome.",
  "show Jeanne Happy left with grayscale", "show Emiya Default right with fadeIn",
  "Emiya They are quite right. What you need to do now is the most time-honored of heroic traditions. <br> One that is critical to a good outcome.",
  "hide Jeanne with fadeOut", "hide Emiya with fadeOut",
  "show Mash-Holo Surprised with fadeIn",
  "Mash-Holo Oh? What do you speak of, Emi- ahem Santam?",
  "hide Mash-Holo with fadeOut", "show Emiya Happy with fadeIn",
  "Emiya A Heroic Speech, of course!",

  "hide Emiya with fadeOut", "show {{player.sel}} Surprised left with fadeIn", "show Mash-Holo Surprised right with fadeIn", "wait 1500",
  "show {{player.sel}} Surprised left with grayscale", "show Mash-Holo Upset2 right",
  "Mash-Holo W-well.. I can't argue with the logic of that.",
  "show Mash-Holo Happy right",
  "Mash-Holo Senpai, you have been a beacon for numerous Heroic Spirits that follow you.<br> It's time that you rally them.",
  "show Mash-Holo Happy right with grayscale",
  "show {{player.sel}} Surprised left",
  "{{player.sel}} Wait, isn't all this a bit too dramatic?",
  "hide {{player.sel}} with fadeOut", "hide Mash-Holo with fadeOut",
  "show Emiya Default with fadeIn",
  "Emiya It is tradition. And traditions must be followed, no?",
  "show {{player.sel}} Default left", "show Emiya Default right with grayscale",
  "{{player.sel}} If you say so...",
  "hide Emiya with fadeOut", "show {{player.sel}} Determined with fadeIn",
  "{{player.sel}} Ahem... guys! Fighting amongst ourselves gets us nowhere! <br> Right now, our task is to save Christmas and help Kama.",
  "hide {{player.sel}} with fadeOut",
  "show {{player.sel}} Determined left with grayscale", "show Mordred Default right with fadeIn",
  "Mordred Help? Wouldn't it be easier to go up there, beat her up, and take the presents back?",
  "show {{player.sel}} Kazuma left", "show Mordred Default  right with grayscale",
  "{{player.sel}} Kama might be acting out and creating trouble, but she is still a Goddess of Love.",
  "show {{player.sel}} Determined left",
  "{{player.sel}} Try as she might, she cannot deny her nature.",
  "hide Mordred with fadeOut", "show {{player.sel}} Determined left with grayscale", "show Jeanne Default right with fadeIn",
  "Jeanne Wise words, Master. But my earlier question still stands. <br> How will we know what to look out for?",
  "hide Jeanne with fadeOut",
  "show {{player.sel}} Determined",
  "{{player.sel}} It won't be easy, but in this season of joy and giving... look out for those with love in their hearts.",
  "{{player.sel}} Those doing selfless and good deeds. <br> Those bringing love to others without any expectation of a reward.",
  "{{player.sel}} Or even those who are simply happy to be.",

  "hide {{player.sel}} with fadeOut", "clear",

  "show Jeanne Happy right with fadeIn", "show Brynhildr Happy left with fadeIn",
  "wait 2000", "hide Jeanne with fadeOut", "hide Brynhildr with fadeOut",
  "show Mordred Happy right with fadeIn", "show Arthur Determined left with fadeIn", "show Emiya Happy center with fadeIn",
  "wait 2000", "hide Arthur with fadeOut", "hide Mordred with fadeOut", "show Emiya Happy2 center",
  "Emiya (You don't realize it Master, but you described yourself.)",
  "Emiya (Perhaps what Kama really needs... is you.)",
  "hide Emiya with fadeOut",
  "show Jeanne Happy with fadeIn",
  "Jeanne Well said Master! <br>Everyone! This is a battle we cannot afford to lose!",
  "Jeanne If we stand together, side by side... if we face the future with joy and determination on our hearts... <br> There is nothing that we cannot accomplish.",
  "Jeanne Onward! <br> Our steps will not falter and our courage will not waver, as we fight to save Christmas!",
  "hide Jeanne with fadeOut", "clear",

  function ()
  {
    characters.Nameless.Name = "Everyone";
    return true;
  },

  "Nameless <font size='20'>Yeah!!</font>",

  function ()
  {
    characters.Nameless.Name = "???";
    return true;
  },

  "jump EndMsg"
],

script ["EndMsg"] =
[
  "This is the end of the Prologue Aftermath.", "stop music", "play music Finish",
  "display message Credits",
  "end",
];
