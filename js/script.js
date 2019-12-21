"use strict";

/* exported messages */
/* exported notifications */
/* exported particles */
/* exported music */
/* exported voice */
/* exported sound */
/* exported videos */
/* exported images */
/* exported scenes */
/* exported characters */
/* exported script */

/* global storage */

// Define the messages used in the game.
let messages = {
	"Help":
	{
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='https://monogatari.io/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='https://monogatari.io/demo/'>Demo</a> - A simple Demo.</p>"
	},
	"Credits":
	{
		"Title": "Credits",
		"Subtitle": "",
		"Message": "<b>Organizer</b>: Peco<br> <b>Coding</b>: Peco <br> <b>Script</b>: Warren <br> <b>Testing</b>: Peco, Warren <br> <b>Art Assets</b>: Peco, Adva, Grape, Vena<br> <b>Sprite Edits</b>: Warren, Grape <br> <b>Music</b>: <font color='#3E70CB'><a href='https://www.youtube.com/embed/BhYx7jMj3ZI' title='Decadence of Abyss (Music Box) target='_parent'>R3 Music Box</a></font>",
	},
};

// Define the notifications used in the game
let notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
	}
};

// Define the Particles JS Configurations used in the game
let particles = {
	"quietSnow":
	{
		"particles": {
    "number": {
      "value": 300,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "img/ui/starburst.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.6,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": false,
        "mode":  "bubble"
      },
      "onclick": {
        "enable": false,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
	} // end particles
};

// Define the music used in the game.
const music = {
	"Menu_Theme": "EpicOfRemnantStartMenuTheme.ogg",
	// R3 Music Box @ YouTube
	// https://www.youtube.com/watch?v=BhYx7jMj3ZI
	"Decadence": "Abyss of DecadenceFateGrand Order [Music Box].ogg",
	"Sun_in_Abyss": "The Sun in the Abyss.ogg",
	"Ooku_BGM": "Tokugawa Labyrinth Map.mp3",
	"Familiar_Melody": "Familiar_Melody.ogg",
	"Lively_Voyage": "A_Lively_Voyage.ogg",
	"Indomitable_Resolution": "Indomitable Resolution.ogg",
	"Finish": "Battle Finish.ogg",
	"Paradise": "Paradise of Everlasting Summer.ogg",
	"KingOfGold": "King of Gold.ogg",
	"LightOfHumanity": "Light_of_Humanity.ogg",
	"Your_Wish": "Your Wish.ogg",

	"Casino": "Casino Shop.mp3",
	"Common_Melody": "Common Melody.mp3",
	"Into_The_Dark_Clouds": "Into the Dark Clouds.mp3",
	"LB_Lively_Voyage": "Lively Voyage Lostbelt.mp3",
	"SIN_Map": "SIN Map.mp3",
	"Ooku_BGM2": "Tokugawa Kaiten Labyrinth Map2.ogg",
	"Beast_III": "Advent Beast III-L.mp3",
	"Demise": "Demise.ogg",
	
	"SpinalCoaster": "Spinal Coaster.mp3",
};

// Define the voice files used in the game.
const voice = {

};

// Define the sounds used in the game.
const sound = {
	"Click": "confirm click.mp3",
	"TitleTransition": "title transition.mp3",
	"SceneTransition": "scene transition.mp3",
	"Transition-Start": "transition2.mp3",
	"Transition-End": "transition3.mp3",
	"Wind": "wind.mp3",
	"Door": "chaldea door.mp3",
	"Keyboard": "keyboard.mp3",
	"Hologram-Start": "hologram start.mp3",
	"Hologram-End": "hologram end.mp3",
	"Jump": "jump.mp3",
	"Thump": "thump fall.mp3",
	"SceneTransition2": "scene transition2.mp3",
	"SceneTransition3": "scene transition3.mp3",
	"Door-Open": "cabin door opening.mp3",
	"Door-Close": "cabin door closed.mp3",
	"FastForward": "fast forwarding.mp3",
	"Breaking": "breaking.mp3",
	"Woosh": "woosh.mp3",
	"Walk": "walk echo.mp3",

	"Clang": "fight clang.mp3",
	"Clang2": "fight clang2.mp3",
	"Clang3": "fight clang3.mp3",
	"NP-Start": "NP start.mp3",
	"MordredNP": "MordredNoblePhantasm2.ogg",
	"Neighing": "horse.mp3",

	"Walk-Snow": "walk on snow.mp3",
	"Walk-Floor": "walk echo.mp3",
	"Bird-Owl": "bird owl.mp3",
	"Knock": "knock.mp3",
	"Horror": "comical horror.mp3",
	"Whack": "whack.mp3",
	"Heartbeat": "heartbeat.mp3",
	"Electricity": "electricity.mp3",
	"Electricity2": "electricity2.mp3",
	"Ominous": "ominous.mp3",
	"Funny": "funny.mp3",
	"Funny2": "funny2.mp3",
};

// Define the videos used in the game.
const videos = {

};

// Define the images used in the game.
const images = {
	"Gudas": "selection.png",
	"Gudas-m": "selection-gudao.png",
	"Gudas-f": "selection-gudako.png",
	"Gudas2": "selection-mc.png",
	"Gudas2-m": "selection-gudao-mc.png",
	"Gudas2-f": "selection-gudako-mc.png",
};

// Define the backgrounds for each scene.
const scenes = {
	"Default": "default-bg.png",
	"Room": "myroom.png",
	"WhistlerDay": "whistler-day.png",
	"WhistlerNight": "whistler-night.png",
	"WhistlerSunset": "whistler-sunset.png",
	"Hallway": "hallway.png",
	"Rayshift": "rayshift-chamber.png",
	"HotelDay": "hotel-day.png",
	"HotelDayBlizzard": "hotel-day-blizzard.png",
	"HotelDusk": "hotel-dusk.png",
	"HotelNight": "hotel-night.png",
	"HotelNightBlizzard": "hotel-night-blizzard.png",
	"HotelNightAurora": "hotel-night-aurora.png",
	"HotelNight2": "hotel-night2.png",
	"Stratosphere-Day": "stratosphere-day.png",
	"Stratosphere-Dusk": "stratosphere-dusk.png",
	"Stratosphere-Night": "stratosphere-night.png",
	
	"ResortHallway": "resort-hallway.png",
};

// Define the Characters
const characters = {

	"Gudao":
	{
		'Name': "Fujimaru Ritsuka",
		'Color': '#add8e6',
		'Directory': 'Gudao',
		'Images':
		{
			"Normal": "normal.png",
			"Default": "default.png",
			"Kazuma": "scorn.png",
			"Surprised": "surprised.png",
			"Determined": "determined.png",
		}
	},

	"Gudao-Holo":
	{
		'Name': "Fujimaru Ritsuka",
		'Color': '#add8e6',
		'Directory': 'Gudao2',
		'Images':
		{
			"Default": "default.png",
			"Kazuma": "scorn.png",
			"Surprised": "surprised.png",
			"Determined": "determined.png",
		}
	},

	"Gudako":
	{
		'Name': "Fujimaru Ritsuka",
		'Color': '#d1633b',
		'Directory': 'Gudako',
		'Images':
		{
			"Normal": "normal.png",
			"Default": "default.png",
			"Kazuma": "scorn.png",
			"Surprised": "surprised.png",
			"Determined": "determined.png",
		}
	},

	"Gudako-Holo":
	{
		'Name': "Fujimaru Ritsuka",
		'Color': '#d1633b',
		'Directory': 'Gudako2',
		'Images':
		{
			"Default": "default.png",
			"Kazuma": "scorn.png",
			"Surprised": "surprised.png",
			"Determined": "determined.png",
		}
	},

	"Nameless":
	{
		"Name": "???",
		"Color": "#ffffff",
	},
	"Kama-Holo":
	{
		"Name": "Kama",
		"Color": "#ffffff",
		"Directory": "Kama",
		"Images":
		{
			"Default": "default.png",
			"NotImpressed": "not impressed.png",
			"Smug": "smug.png",
			"SmugDark": "smug dark.png",
			"Upset": "upset.png",
			"Upset2": "upset yell.png",
			"UpsetDark": "upset dark.png",
			"UpsetDark2": "upset yell dark.png",

		},
	},

	"Kama":
	{
		"Name": "Kama",
		"Color": "#ffffff",
		"Directory": "Kama2",
		"Images":
		{
			"Default": "Default.png",
			"Smile": "Smile.png",
			"Flustered": "Flustered.png",
			"Flustered2": "Flustered2.png",
			"Disgust": "Disgust.png",
			"Embarrassed": "Embarrassed.png",
			"Happy": "Happy.png",
			"Pout": "Pout.png",
			"Pout2": "Pout2.png",
			"Irritated": "Irritated.png",
			"Irritated2": "Irritated2.png",
			"Pissed": "Pissed.png",
			"Pissed2": "Pissed2.png",
			"Sad": "Sad.png",
			"Sad2": "Sad2.png",
			"Smug": "Smug.png",
			"Smug2": "Smug2.png",
			"NotImpressed": "Not Impressed.png",
		},
	},

	"Mash":
	{
		"Name": "Mash Kyrielight",
		"Color": "#ffffff",
		"Directory": "Mash",
		"Images":
		{
			"Default": "default.png",
			"Happy": "happy.png",
			"Upset": "upset.png",
			"Upset2": "upset eyes closed.png",
			"Upset3": "upset yell.png",
			"Surprised": "surprised.png",
		},
	},

	"Mash-Holo":
	{
		"Name": "Mash Kyrielight",
		"Color": "#ffffff",
		"Directory": "Mash2",
		"Images":
		{
			"Default": "default.png",
			"Happy": "happy.png",
			"Upset": "upset.png",
			"Upset2": "upset eyes closed.png",
			"Upset3": "upset yell.png",
			"Surprised": "surprised.png",
		},
	},

	"DaVinci":
	{
		"Name": "Leonardo Da Vinci",
		"Color": "#ffffff",
		"Directory": "DaVinci",
		"Images":
		{
			"Default": "default.png",
			"Gleeful": "gleeful.png",
			"Wink": "wink.png",
			"Surprised": "surprised.png",
			"Upset": "upset.png",
		},
	},

	"Jack":
	{
		"Name": "Jack the Ripper",
		"Directory": "NurseryTrio",
		"Images":
		{
			"Upset": "jack upset.png",
			"Serious": "jack serious.png",
			"Pissed": "jack pissed.png",
		},
	},

	"Nursery":
	{
		"Name": "Nursery Rhyme",
		"Directory": "NurseryTrio",
		"Images":
		{
			"Upset": "nursery upset.png",
			"Angry": "nursery angry.png",
		},
	},

	"Janta":
	{
		"Name": "Jeanne d'Arc (Alter) (Santa Lily)",
		"Directory": "NurseryTrio",
		"Images":
		{
			"Upset": "janta upset.png",
			"Upset2": "janta crying.png",
			"Agitated": "janta agitated.png",
			"Irritated": "janta irritated.png",
		},
	},

	"Emiya":
	{
		"Name": "Santam",
		"Color": "#ffffff",
		"Directory": "Emiya",
		"Images":
		{
			"Default": "default.png",
			"Happy": "happy.png",
			"Happy2": "happy eyes closed.png",
		},
	},

	"Arthur":
	{
	  "Name": "Santam (Prototype)",
		"Color": "#ffffff",
	  "Directory": "Arthur",
	  "Images":
	  {
	    "Default": "default.png",
	    "Determined": "determined.png",
			"Surprised": "surprised.png",
	  },
	},

	"Brynhildr":
	{
	  "Name": "Sadtam",
		"Color": "#ffffff",
	  "Directory": "Brynhildr",
	  "Images":
	  {
	    "Default": "default.png",
	    "Embarrassed": "embarrassed.png",
	    "Happy": "happy.png",
	    "Smile": "smile.png",
	  },
	},

	"Jeanne":
	{
	  "Name": "Saintam",
		"Color": "#ffffff",
	  "Directory": "Jeanne",
	  "Images":
	  {
			"Default": "default.png",
			"Happy": "happy.png",
	  },
	},

	"Gawain":
	{
	  "Name": "Suntam",
		"Color": "#ffffff",
	  "Directory": "Gawain",
	  "Images":
	  {
			"Default": "default.png",
			"Happy": "happy.png",
			"Angry": "angry.png",
	  },
	},

	"Mordred":
	{
	  "Name": "Punktam",
		"Color": "#ffffff",
	  "Directory": "Mordred",
	  "Images":
	  {
	    "Default": "default.png",
	    "Happy": "happy.png",
			"Angry": "angry.png",
	  },
	},

	"Staff":
	{
		"Name": "Chaldea Staff",
		"Color": "#ffffff",
	},

	"Ishtar":
	{
	  "Name": "Ishtar",
		"Color": "#ffffff",
	  "Directory": "Ishtar",
	  "Images":
	  {
	    "Default": "Default.png",
			"Angry": "Angry.png",
			"Angry2": "Angry2.png",
			"Annoyed": "Annoyed.png",
			"Bubblegum": "Bubblegum.png",
			"Cry": "Cry.png",
			"Cry2": "Cry2.png",
			"Cry3": "Cry3.png",
			"Cry4": "Cry4.png",
			"Embarrassed": "Embarrassed.png",
			"Embarrassed2": "Embarrassed2.png",
			"Embarrassed3": "Embarrassed3.png",
			"Flirt": "Flirt.png",
			"Happy": "Happy.png",
			"Happy2": "Happy2.png",
			"Sad": "Sad.png",
			"Sad2": "Sad2.png",
			"Serious": "Serious.png",
			"Smile": "Smile.png",
			"Smug": "Smug.png",
			"Uh": "Uh.png",
			"Uh2": "Uh2.png",
			"Uh3": "Uh3.png",
			"Uh4": "Uh4.png",
	  },
	},
	"Parvati":
	{
	  "Name": "Parvati",
		"Color": "#ffffff",
	  "Directory": "Parvati",
	  "Images":
	  {
			"Default": "Neutral.png",
			"Angry": "Angry.png",
			"Annoyed": "Annoyed.png",
			"Concerned": "Concerned.png",
			"Cry": "Cry.png",
			"Embarrassed": "Embarrassed.png",
			"Embarrassed2": "Embarrassed2.png",
			"Embarrassed3": "Embarrassed3.png",
			"Happy": "Happy.png",
			"Pissed": "Pissed.png",
			"Smile": "Smile.png",
			"Surprised": "Surprised.png",
			"Tired": "Tired.png",
	  },
	},
	"Pingu":
	{
		"Name": "Meltryllis",
		"Color": "#ffffff",
		"Directory": "Pingu",
		"Images": 
		{
			"Angry": "Angry.png",
			"Blush": "Blush.png",
			"Blush2": "Blush2.png",
			"Embarrassed": "Embarrassed.png",
			"Embarrassed2": "Embarrassed2.png",
			"Embarrassed3": "Embarrassed3.png",
			"Excited": "Excited.png",
			"Default": "Neutral.png",
			"Pissed": "Pissed.png",
			"Sad": "Sad.png",
			"Sadistic": "Sadistic.png",
			"Sadistic2": "Sadistic2.png",
			"Smile": "Smile.png",
			"Smug": "Smug.png",
			"Sparkle": "Sparkle.png",
		},
	},
	"Pingu-Swag":
	{
		"Name": "Meltryllis",
		"Color": "#ffffff",
		"Directory": "Pingu Swag",
		"Images": 
		{
			"Angry": "Angry.png",
			"Blush": "Blush.png",
			"Blush2": "Blush2.png",
			"Embarrassed": "Embarrassed.png",
			"Embarrassed2": "Embarrassed2.png",
			"Embarrassed3": "Embarrassed3.png",
			"Excited": "Excited.png",
			"Default": "Neutral.png",
			"Pissed": "Pissed.png",
			"Sad": "Sad.png",
			"Sadistic": "Sadistic.png",
			"Sadistic2": "Sadistic2.png",
			"Smile": "Smile.png",
			"Smug": "Smug.png",
			"Sparkle": "Sparkle.png",
		},
	},
	"Gareth":
	{
	  "Name": "Gareth",
		"Color": "#ffffff",
	  "Directory": "Gareth",
	  "Images":
	  {
		  "Amazed": "Amazed.png",
		  "Annoyed": "Annoyed.png",
		  "Embarassed": "Embarassed.png",
		  "Grumpy": "Grumpy.png",
		  "Happy": "Happy.png",
		  "Intense": "Intense.png",
		  "Meme": "Meme.png",
		  "Meme2": "Meme2.png",
		  "Nervous": "Nervous.png",
		  "Neutral": "Neutral.png",
		  "Pissed": "Pissed.png",
		  "Sad": "Sad.png",
		  "Sad2": "Sad2.png",
		  "Sad3": "Sad3.png",
		  "Serious": "Serious.png",
		  "Stunned": "Stunned.png",
		  "Surprised": "Surprised.png",
		  
	  },
	},

};

let script = {
	// The game starts here.
	"Start":
	[
		//"notify Welcome",
		"clear",
		"scene Default with fadeIn", "play music Menu_Theme loop", "show Gudas with fadeIn",
		{
			"Choice":
			{
				"Dialogue": "Please choose the protagonist.",
				"Girl":
				{
					"Text": "Female",
					"Do": "jump Gudako",
					"Class": "flexButton",
				},
				"Boy":
				{
					"Text": "Male",
					"Do": "jump Gudao",
					"Class": "flexButton",
				},
			},
		},
	],

	"Gudao":
	[
		"clear",
		function () {
			storage.player.sel = "Gudao";
			return true;
		},
		"play sound Click",
		"hide Gudas",
		"show Gudas-m with fadeIn", "wait 1000",
		"hide Gudas-m with fadeOut", "show Gudao Normal with fadeInRight",
		"Male protagonist has been chosen.", "wait 1000",
		"hide Gudao with fadeOutLeft",
		"jump SelectChapter"
	],
	"Gudako":
	[
		function ()
		{
			storage.player.sel = "Gudako";
			return true;
		},
		"play sound Click",
		"hide Gudas",
		"show Gudas-f with fadeIn", "wait 700",
		"hide Gudas-f with fadeOut", "show Gudako Normal with fadeInLeft",
		"Female protagonist has been chosen.", "wait 700",
		"hide Gudako with fadeOutRight",
		"jump SelectChapter",
	],

	"Prologue-1":
	[
		"play sound Click", "wait 500",
		"stop music", "scene Default with fadeOut",
		"play sound TitleTransition", "wait 3000", "scene WhistlerSunset with fadeIn", "particles quietSnow", "wait 1000", "play music Decadence loop",
		"centered <font color='#ffffff'>—Sometime in the future—</font>",
		"The evening's air is cool and crisp. <br> Even the world seems to be rejoicing in the celebration of the night to come.",
		"But as the sun sank in the horizon, and painted the world in enchanting hues— <br>I realized, I too should be feeling happy.",
		"I had everything I could want.",
		"Freedom. <br> Adulation. <br> Possessions.",
		"Yet, for all those, all I could feel, was a twinge in my heart.",
		"Why..? <br> Why did this hurt so much? <br> Why did I feel this loneliness?",
		"He told me that I deserved to be loved... <br> that even though I lacked a body... <br> that even though I had caused so much trouble...",
		"I was worthy of being loved.",
		"Then why is everyone miserable at the sight of me? <br> What am I doing wrong?",
		"Or perhaps... that man was lying?",
		"stop particles",
		"scene WhistlerSunset with fadeOut", "stop music",
		"play sound SceneTransition", "wait 4000", "jump Prologue-2",
	],
	"Prologue-2":
	[
		"scene Room fadeIn", "wait 1000", "play music Lively_Voyage loop",
		"play sound Door", "wait 1000",
		"show Mash Default with fadeIn",
		"Mash Senpai! Senpai! <br> <font size='20'>Wake up!</font><br>",
		"show Mash Upset",
		"Mash Oh, this is just terrible!",
		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "Mash... What happened?",
					"Do": "jump Prologue-3",
				},
				"Selection 2":
				{
					"Text": "I was having a nice dream... it's gone now.",
					"Do": "jump Prologue-3",
				},
			},
		}, // copy choice list here
	],
	"Prologue-3":
	[
		"play sound Click",
		"Mash Oh, it's horrible! All the presents that we had gathered for Christmas...",
		"show Mash Upset3 with shake","Mash <font size='20'>ARE MISSING!</font>",

		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "Oh no! Is this the work of an Enemy Santa?",
					"Do": "jump Prologue-4",
				},
				"Selection 2":
				{
					"Text": "Why can't we ever have a normal Christmas?",
					"Do": "jump Prologue-4",
				},
			},
		}, // copy choice list here

	],
	"Prologue-4":
	[
		"play sound Click",
		"show Mash Upset2",
		"Mash T-that's beside the point, Senpai! <br> This is a big crisis, and all the child Servants are crying!",
		"Mash I am not sure who took them and why, but Miss Da Vinci and Mr. Holmes are looking into it.",

		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "Oh, that's good! They'll solve it in no time.",
					"Do": "jump Prologue-5",
				},
				"Selection 2":
				{
					"Text": "Are we sure they had nothing to do with this mischief?",
					"Do": "jump Prologue-5",
				},
			},
		}, // copy choice list here
	],

	"Prologue-5":
	[
		"play sound Click",
		"hide Mash", "show DaVinci Default with fadeIn",
		"DaVinci Hello~! I heard someone mention my name!<br> I wasn't quite sure what to expect when I learned that presents had been stolen.",
		"DaVinci I was even more surprised to learn that my presents, hidden secretly in my room, had been taken too.",
		"DaVinci And let me tell you, it's nigh-impossible for anyone to break into the room of a genius!",
		"show DaVinci Default left", "show Mash Default right with fadeIn",
		"Mash But... someone did. Do you know who?",
		"DaVinci I am coming to that. Patience, Patience.",
		"show DaVinci Wink left",
		"DaVinci You know you cannot rush genius. Or perfection.",
		"show DaVinci Default left",
		"DaVinci Now, as I was saying, there is no physical way for anyone to have gotten in with the intention to steal.",
		"show Mash Surprised right",
		"Mash So... what you are saying is...",
		"show DaVinci Gleeful left",
		"DaVinci ... it's someone without a body. Correct! Well done Mash!",
		"show DaVinci Default left", "show Mash Default right",
		"DaVinci And Holmes just confirmed...<br> Kama is missing from Chaldea as well. It's rather obvious now who our culprit is!",

		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "<i>Sigh</i>. One. Normal. Christmas. <b>Just one</b>. That's all.",
					"Do": "jump Prologue-6",
				},
				"Selection 2":
				{
					"Text": "Is being troublesome a hidden attribute of the Sakurafaces?",
					"Do": "jump Prologue-6",
				},
			},
		}, // copy choice list here
	],

	"Prologue-6":
	[
		"play sound Click",
		"Mash Bemoaning this will get us nowhere Senpai!<br> We need to bring Kama back! And the presents too!",
		"show Mash Upset right",
		"Mash These faces... they are killing me!",
		"hide DaVinci", "hide Mash",
		"show Nursery Upset right with fadeIn", "show Janta Upset center with fadeIn",  "show Jack Upset left with fadeIn", "wait 2000", "hide Janta with fadeOut", "hide Nursery with fadeOut", "hide Jack with fadeOut", "wait 500",
		"show DaVinci Default left with fadeIn", "show Mash Upset right with fadeIn",
		"show DaVinci Gleeful left",
		"DaVinci *<i>Whistles</i>* <br> That look is weapons-grade. If only we could somehow harness it...",
		"show Mash Upset3 right",
		"Mash Miss Da Vinci! Please concentrate!",
		"show DaVinci Default left", "show Mash Default right",
		"DaVinci Right right, oh where was I? <br> Ah yes... it's thanks to your wonderful inventor Da Vinci, that we can know where Kama has gone.",
		"show DaVinci Wink left", "wait 500", "show DaVinci Default left",
		"play sound Keyboard",
		"DaVinci Tracking her now...<br> aaaaaaand, there we go! Establishing contact!",
		"hide DaVinci", "hide Mash",
		"play sound Hologram-Start",
		"show Kama-Holo Default with fadeIn",
		"Kama-Holo Oh? What's this? You have found me here, Inventor of Chaldea?",
		"show Kama-Holo Default right","show DaVinci Default left with fadeIn",
		"DaVinci Of course! What, did you really think you could go where I couldn't find you? Or anyone else for that matter?",

		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "That's our Da Vinci!",
					"Do": "jump Prologue-7",
				},
				"Selection 2":
				{
					"Text": "That's rather alarming, but go Da Vinci!",
					"Do": "jump Prologue-7",
				},
			},
		}, // copy choice list here
	],

	"Prologue-7":
	[
		"play sound Click",
		"show Kama-Holo NotImpressed right",
		"Kama-Holo W-whatever. T'ch. Why don't you just go away and leave me alone? <br> Shoo shoo!",
		"show DaVinci Gleeful left",
		"DaVinci No can do! You have taken something valuable with you!",
		"hide DaVinci",
		"show Kama-Holo NotImpressed left", "show Mash Upset3 right with fadeIn",
		"Mash Yes! Exactly! Return the presents you stole right now! You are ruining Christmas!",
		"show Mash Default right",
		"show Kama-Holo Smug left",
		"Kama-Holo Fufufu! Is that so? I say I am improving it.",
		"hide Mash with fadeOut",

		"stop music", "show Kama-Holo Upset with fadeIn", "play music Ooku_BGM loop",

		"Kama-Holo Each year, Chaldea runs around like a mouse being chased by a cat, and it is so undignified!",
		"show Kama-Holo SmugDark",
		"Kama-Holo Besides, I am claiming copyright infringement on this holida~y! Hehehe!",

		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "OBJECTION!",
					"Do": "jump Prologue-8",
				},
				"Selection 2":
				{
					"Text": "Is that even legal?",
					"Do": "jump Prologue-8",
				},
			},
		}, // copy choice list here

	],

	"Prologue-8":
	[
		"play sound Click",
		"show Kama-Holo NotImpressed",
		"Kama-Holo Oh, you seem to disagree, Master?",
		"Kama-Holo Tell me, isn't this Christmas all about giving love? <br> About demonstrating your affection?",
		{ // start of choice
			"Choice":
			{
				"Selection 1":
				{
					"Text": "Oh no, I see where she is going with this...",
					"Do": "jump Prologue-9",
				},
			},
		}, // end of choice
	],

	"Prologue-9":
	[
		"play sound Click",
		"show Kama-Holo UpsetDark",
		"Kama-Holo Yes, exactly! <br> A festival celebrating affection and love, and all the credit goes to an old man in a red suit?",
		"Kama-Holo That's unfair!",
		"show Kama-Holo UpsetDark2",
		"Kama-Holo So, to protest, I am declaring that—",
		"show Kama-Holo UpsetDark2 with shake infinite", "Kama-Holo <font size='20'>Christmas has been cancelled!</font>", "wait 2000",
		"clear",
		"hide Kama-Holo","pause music",
		"show DaVinci Surprised left with fadeIn", "show Mash Surprised right with fadeIn",
		"wait 1000", "show DaVinci Upset left",
		"DaVinci <i>(Gasp)</i>",
		"show Mash Upset3 right",
		"Mash <i>(Gasp)</i>",

		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "<i>(Gasp)</i>",
					"Do": "jump Prologue-10",
				},
				"Selection 2":
				{
					"Text": "Noooooo! Anything but that!",
					"Do": "jump Prologue-10",
				},
			},
		}, // copy choice list here
	],

	"Prologue-10":
	[
		"play sound Click",
		"hide DaVinci", "hide Mash",

		"play music Ooku_BGM loop", "show Kama-Holo SmugDark with fadeIn",

		"Kama-Holo Fufufu! It's so ni~i~ce to see you all squirm like this.",
		"show Kama-Holo UpsetDark",
		"Kama-Holo Consider this the Goddess of Love's revenge! <br> It's always <i>\"Kama do this\"</i>, <i>\"Kama do that\"</i>, and then... the credit goes to an old weirdo?",
		"Kama-Holo Not anymore! Nuh-uh!",
		"show Kama-Holo UpsetDark left", "show Mash Upset right with fadeIn",
		"Mash ... Senpai...<br>... She might have a little point there.",
		"show Mash Upset2 right",
		"Mash But we still cannot allow her to ruin Christmas like this! Think of the little ones.",
		"hide Kama-Holo", "hide Mash",
		"show Nursery Upset right with fadeIn", "show Janta Upset2 center with fadeIn", "show Jack Upset left with fadeIn", "wait 2000", "hide Janta with fadeOut", "hide Nursery with fadeOut", "hide Jack with fadeOut", "wait 500",

		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "Kama, be reasonable.",
					"Do": "jump Prologue-11",
				},
			},
		}, // copy choice list here
	],

	"Prologue-11":
	[
		"play sound Click",
		"show Kama-Holo Upset with fadeIn",
		"Kama-Holo Reasonable? <i>Reasonable?</i> Is what is being done to me reasonable in any measure? <br> But... since you are asking me directly... I can't refuse you.",
		"show Kama-Holo NotImpressed",
		"Kama-Holo Fine. You really want these presents back this badly? Then bring me something equally valuable in exchange. <br> Only then will I return these presents to you.",

		{ // start of choice
			"Choice":
			{
				"Selection 1":
				{
					"Text": "Okay! Now we have a chance!",
					"Do": "jump Prologue-12",
				},
			},
		}, // end of choice

	],

	"Prologue-12":
	[
		"play sound Click",
		"show Kama-Holo Smug",
		"Kama-Holo Ufufufu! Is that what you think?",
		"Kama-Holo Remember, wealth and money means nothing to me. <br> You will have to think harder, if you want these baubles back.",
		"show Kama-Holo Default",
		"Kama-Holo Now, go away. I have heard lots of good things about Breakfast-in-Bed and I want to sleep in a little longer. <br> I will be wai~ti~ng~!",
		"<i>-click-</i>", "play sound Hologram-End", "hide Kama-Holo with fadeOut",
		"stop music", "wait 1000",
		"show Mash Upset with fadeIn", "wait 500", "play music Lively_Voyage loop",
		"Mash Oh no, she cut the call. <br> Senpai... what do we do? What is it that Kama will value?",

		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "I am not sure... maybe presents of her own?",
					"Do": "jump Prologue-13",
				},
				"Selection 2":
				{
					"Text": "She <i>is</i> the Goddess of Love. Perhaps she will value love?",
					"Do": "jump Prologue-13",
				},
			},
		}, // copy choice list here
	],

	"Prologue-13":
	[
		"play sound Click",
		"show Mash Upset right", "show DaVinci Default left with fadeIn",
		"DaVinci Mm! That's a nice hypothesis. In fact, I would even say that you are most likely correct.",
		"DaVinci It seems Kama wishes for being loved, than giving love, for a change.",
		"show DaVinci Gleeful left",
		"DaVinci Once again, you show great aptitude for understanding the hearts and minds of your servants.",
		"show Mash Happy right",
		"Mash Senpai really is wonderful!",
		"show Mash Upset2 right",
		"Mash But... to find something that Kama can cherish... It will be difficult to that alone.",
		"show DaVinci Default left",
		"DaVinci True. Even with my amazing help... there's just so much ground we can cover in so little time. <br> Having some help will make this go a little faster.",
		"show Mash Surprised right", "pause 1000", "show Mash Happy right",
		"Mash Oh, good idea! Senpai, maybe we can try asking the other Servants to help!",

		{ // start of choice
			"Choice":
			{
				"Selection 1":
				{
					"Text": "<i>(Nod)</i>",
					"Do": "jump Prologue-14",
				},
			},
		}, // end of choice
	],

	"Prologue-14":
	[
		"play sound Click", "wait 1500",
		"pause music", "hide DaVinci", "hide Mash",
		"scene Room with fadeOut",
		"play sound SceneTransition3", "wait 4000", "scene Hallway with fadeIn",
		"play music Familiar_Melody loop",
		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "... I should have known Kama tricked us.",
					"Do": "jump Prologue-15",
				},
				"Selection 2":
				{
					"Text": "Damn! They are all insensate under her Sammohana.",
					"Do": "jump Prologue-15",
				},
			},
		}, // copy choice list here
	],

	"Prologue-15":
	[
		"play sound Click",
		"show Mash Default with fadeIn",
		"Mash Don't lose hope Senpai! I'm sure help will turn up! <br> That's what usually happens in events like these!",
		"Nameless And you'd be right, Lady Kyrielight! <br> For behold, The Spirit of Christmas is here!",
		"show Mash Surprised",

		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "SANTAM!!! THE CHRISTMAS HERO!",
					"Do": "jump Prologue-16",
				},
				"Selection 2":
				{
					"Text": "Hooray! Talky Mom is here!",
					"Do": "jump Prologue-16",
				},
			},
		}, // copy choice list here
	],

	"Prologue-16":
	[
		"play sound Click",
		"show Mash Happy",
		"show Mash Happy left",
		"show Emiya Happy right with fadeIn",
		"Emiya Y-yes, it's time for my contracted annual appearance. <br> I'm here to save Christmas from the latest danger to it!",
		"Emiya What's it this time?",
		"Emiya A greedy Santa? <br> A little Santa with confidence issues? <br> A Santa utterly unsuited for their job?",
		"Emiya I am ready for anything.",

		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "Eheheh... funny you say that.",
					"Do": "jump Prologue-17",
				},
				"Selection 2":
				{
					"Text": "A bit of all three, I'm afraid.",
					"Do": "jump Prologue-17",
				},
			},
		}, // copy choice list here
	],

	"Prologue-17":
	[
		"play sound Click",
		"show Emiya Default right",
		"Emiya Tell me everything.",
		"scene Hallyway with fadeOut", "stop music",
		"play sound Transition-Start", "wait 3000",
		"play sound Transition-End", "wait 2000",
		"scene Rayshift with fadeIn", "wait 1000",
		"show Emiya Default with fadeIn",
		"Emiya So, this is how it is. This is too big a danger to allow to fester. <br> I will need to assemble the Santam Squad!",
		"play music Indomitable_Resolution loop",
		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "<i>(Eyes shining in excitement)</i>",
					"Do": "jump Prologue-18",
				},
				"Selection 2":
				{
					"Text": "Go go Power Santams!",
					"Do": "jump Prologue-18",
				},
			},
		}, // copy choice list here
	],

	"Prologue-18":
	[
		"play sound Click",
		"hide Emiya",
		"show Arthur Default with fadeIn", "wait 1500", "hide Arthur",
		"show Brynhildr Smile with fadeIn", "wait 1500", "hide Brynhildr",
		"show Jeanne Default with fadeIn", "wait 1500", "hide Jeanne",
		"show Gawain Default with fadeIn", "wait 1500", "hide Gawain",
		"show Mordred Default with fadeIn", "wait 1500", "hide Mordred",
		"show Arthur Default with fadeIn",
		"Arthur I'll be happy to be of service.",
		"show Arthur Determined",
		"Arthur Think of this as my way of thanking you for all your hard work.",
		"hide Arthur", "show Brynhildr Smile with fadeIn",
		"Brynhildr I have chosen worthy heroes in the past. I will aid you in choosing worthy gifts.",
		"show Brynhildr Embarrassed",
		"Brynhildr Ah... but please don't look at me in admiration... <i>(tiny sigh)</i>",
		"hide Brynhildr",
		"show Jeanne Default",
		"Jeanne This is a worthy cause, Master!",
		"show Jeanne Happy",
		"Jeanne Every step of this holy journey, I will be at your side!",
		"hide Jeanne",
		"show Gawain Default with fadeIn",
		"Gawain I will endeavor to aid you with every fiber of my being.",
		"show Gawain Happy",
		"Gawain I will not fail in this promise!",
		"hide Gawain", "show Mordred Default with fadeIn",
		"Mordred Oi, I'm just here to spend some time with Father.",
		"show Mordred Happy",
		"Mordred But I'll tag along and help, alright? I can do this much.",

		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "Everyone... thank you for coming.",
					"Do": "jump Prologue-19",
				},
				"Selection 2":
				{
					"Text": "You know those masks are useless, right?",
					"Do": "jump Prologue-19",
				},
			},
		}, // copy choice list here
	],

	"Prologue-19":
	[
		"play sound Click",
		"hide Mordred", "show Mash Happy with fadeIn",
		"Mash Senpai... this is great, but I think we will need more help.",
		"Nameless And that's where we come in!",
		"show Mash Surprised",
		{ // start of choice list
			"Choice":
			{
				"Selection 1":
				{
					"Text": "Oh? It's the Chaldea Staff?",
					"Do": "jump Prologue-20",
				},
				"Selection 2":
				{
					"Text": "You guys... you all came too?",
					"Do": "jump Prologue-20",
				},
			},
		}, // copy choice list here
	],

	"Prologue-20":
	[
		"play sound Click",
		"hide Mash with fadeOut",
		"Staff: Of course we did! Each day you go out, braving dangers and risking your life for our sake... <br> This is the least we can do!",
		"show Emiya Default with fadeIn",
		"Emiya (This was totally unexpected, but let's just go along with it.)",
		"show Emiya Happy2",
		"Emiya In that case, come on and form a line by my side! <br>Sign up your name here, if you want to help save Christmas with the Santam Squad!",
		"hide Emiya", "scene Rayshift with fadeOut", "wait 1000", "jump Prologue-end",
	],

	"Prologue-end":
	[
		"scene black fadeIn", "wait 1000",
		{
			"Input": {
				"Text": "What is your name?",
				"Validation": function (input) {
					return input.trim().length > 0;
				},
				"Save": function (input) {
					storage.player.name = input;
					return true;
				},
				"Warning": "You must enter a name!"
			}
		},
		"play sound Click",
		"show {{player.sel}} Normal",
		"Thank you for signing up to help save Christmas, <font color='#08A5DF'>{{player.name}}</font>!",
		"Please read the sign-up information on the discord channel.",
		"This is the end of the Prologue.", "stop music", "play music Finish",
		"display message Credits",
		"end",
	],

	"SelectChapter":
	[
		"Have you played through the prologue and prologue aftermath?",
		{
			"Choice":
			{
				"True":
				{
					"Text": "Yes",
					"Do": "jump SelectChapter-2",
				},
				"False":
				{
					"Text": "No",
					"Do": "jump SelectChapter-1",
				},
				// hide this
				// "Test":
				// {
				// 	"Text": "Jump to Test",
				// 	"Do": "jump Test",
				// },
				// hide this
			},
		},
	],

	"SelectChapter-1":
	[
		"play sound Click",
		"Please select the chapter to play.",
		{
			"Choice":
			{
				"Prologue":
				{
					"Text": "Prologue",
					"Do": "jump Prologue-1",
				},
				"Prologue Aftermath":
				{
					"Text": "Prologue Aftermath",
					"Do": "jump Prologue-Aftermath",
				},
				"Back to Selection":
				{
					"Text": "Select story chapter instead",
					"Do": "jump SelectChapter-2",
				},
			},
		},
	],

	"SelectChapter-2":
	[
		"play sound Click",
		"Please select the chapter to play.",
		{
			"Choice":
			{
				"Chapter 1":
				{
					"Text": "Chapter 1",
					"Do": "jump Chapter-1",
				},
				"Chapter 2":
				{
					"Text": "Chapter 2",
					"Do": "jump Chapter-2",
				},
				"Chapter 3":
				{
					"Text": "Chapter 3",
					"Class": "button-disabled",
				},
				"Back to Selection":
				{
					"Text": "Go to prologue and prologue aftermath instead",
					"Do": "jump SelectChapter-1",
				},
			},
		},
	],

};
