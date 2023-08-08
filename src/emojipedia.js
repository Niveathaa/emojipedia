import Entry from "./components/Entry";

const emojipedia = [
  {
    id: 1,
    emoji: "💪",
    name: "Tense Biceps",
    meaning: "“You can do that!” or “I feel strong!” Arm with tense biceps. "
  },
  {
    id: 2,
    emoji: "🙏",
    name: "Person With Folded Hands",
    meaning:
      "Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. ."
  },
  {
    id: 3,
    emoji: "🤣",
    name: "Rolling On The Floor, Laughing",
    meaning:
      "This is funny! A smiley face, rolling on the floor, laughing. The face is laughing boundlessly. The emoji version of “rofl“. Stands for „rolling on the floor, laughing“."
  },

  {
    id: 4,
    emoji: "😊",
    name: "Smiling face with smiling eyes",
    meaning:
      "With a shy, embarrassed smile, the 😊 emoji radiates happiness, contentment, peace of mind, and gratitude."
  },

  {
    id: 5,
    emoji: "😊",
    name: "Smiling face with smiling eyes",
    meaning:
      "With a shy, embarrassed smile, the 😊 emoji radiates happiness, contentment, peace of mind, and gratitude."
  },
  {
    id: 6,
    emoji: "🙂",
    name: "Slightly smiling face",
    meaning: "It such as being positive, happy or patronizing and being ironic"
  },
  {
    id: 7,
    emoji: "😉",
    name: "Wink",
    meaning:
      "signals a joke or a hidden meaning which when used won’t be understood by many"
  },
  {
    id: 8,
    emoji: "😊",
    name: "smiling and Innocent",
    meaning: "This emoji means being as innocent and pure as an angel"
  },
  {
    id: 9,
    emoji: "😍",
    name: "Smiling Face With Heart-Eyes",
    meaning:
      "A smile of love is shown by the 😍 emoji, which beams with happiness with its heart-shaped eyes. It conveys intense love and affection for a person, place or even an object."
  },
  {
    id: 10,
    emoji: "😋",
    name: "Face Savouring Delicious Food",
    meaning:
      "Licking your lips with pleasure, the 😋 emoji shows an expression of satisfaction, hunger or joy over delicious food. It is shown beaming with joy "
  },
  {
    id: 11,
    emoji: "🤨",
    name: "Face With a Raised Eyebrow",
    meaning:
      "A raised-eyebrow 🤨 emoji gives a questioning and skeptical look. It can be used to express skepticism, disbelief, or disapproval"
  },
  {
    id: 12,
    emoji: "😎",
    name: "😎 Face With Sunglasses",
    meaning:
      "I'm the king of the world! Smart and casual, this 😎 emoji features a face with a wide, closed smile and black sunglasses. It expresses coolness and confidence"
  },
  {
    id: 13,
    emoji: "🥸",
    name: "🥸 Disguised face",
    meaning:
      "With funny glasses, fake eyebrows, a bulbous nose and a glued-on mustache, the 🥸 emoji shows a disguised face. This emoji is used to indicate that someone wants to hide their identity or intentions."
  },
  {
    id: 14,
    emoji: "🤩",
    name: "🤩 Smirking Face With Starry Eyes",
    meaning:
      "Overwhelmed with excitement, the 🤩 emoji shows a face with a wide, open smile and stars for eyes, as if seeing a loved one."
  },
  {
    id: 15,
    emoji: "🤭",
    name: "🤭 Face With Hand Over The Mouth",
    meaning:
      "Expresses shock, surprise, or a sudden perception. Typical gesture, which shows that the other person is not telling the truth. Thinks he's being lied to."
  },
  {
    id: 16,
    emoji: "🤤",
    name: "🤤 Drooling Face",
    meaning:
      "Slobbering face, the saliva flowing from the corner of the mouth. Represents desire for a person, delicious food, the new car, or the anticipation of an event. Expression of extreme interest and desire."
  },
  {
    id: 17,
    emoji: "🫦",
    name: "🫦 Biting Lip",
    meaning:
      "The bite on the lip signals: I find you hot and want to flirt! But it can also be used as a symbol of anxiety, tension or insecurity. Ask your conversation partner about his thoughts."
  },
  {
    id: 18,
    emoji: "💋",
    name: "💋 Kiss Mark",
    meaning:
      "Red sensual lip print. Would like to give you a kiss, thereby leaving an imprint of the lipstick. Can mean “You're so nice” or “Many thanks!” "
  },
  {
    id: 19,
    emoji: "❤️‍🔥",
    name: "❤️‍🔥 heart on firer ",
    meaning: " ❤️‍🔥 symbolizes a more intense and passionate love or lust than the classic heart❤️. It can be used to show that someone is feeling love or desire, or that they have a burning heart for someone or something.  "
  },
  {
    id: 20,
    emoji: "🫣",
    name: "🫣face with peeking eye Emoji",
    meaning:
"This emoji is a yellow face with its hands over its eyes and raised eyebrows. One wide eye is peeking through the fingers, as if trying to see something without being noticed."  },
  {
    id: 21,
    emoji: "🤫",
    name: "🤫 shushing face, hush Emoji",
    meaning: "This mysterious character features a round, yellow face with one finger pressed to its lips, signaling silence or secrecy, as if saying Shh!"
  },
  {
    id: 22,
    emoji: "😜",
    name: "😜winking face with tongue",
    meaning:
    "This mischievous emoji features a circular yellow face, one eye winking and the other wide open, with a playful grin and a tongue sticking out, conveying a sense of fun, excitement, wackiness, or joking."  },

  {
    id: 23,
    emoji: "😮‍💨",
    name: "😮‍💨 face exhaling Emoji",
    meaning: "it is composed of two emojis that are joined by a zero-width joiner: the 😮 emoji, which represents a face with a frown, and the 💨 emoji, which represents a puff of air."
  },

  {
    id: 24,
    emoji: "😷",
    name: "😷 face with medical mask, sick Emoji",
    meaning:
      "This emoji depicts a round yellow face donning a white surgical mask. Most platforms originally depicted it with downcast eyes and a slight frown, suggesting that the emoji is feeling sad or unwell."
  },
  {
    id: 25,
    emoji: "🤢",
    name: "🤢 nauseated face, disgust Emoji",
    meaning:
      "When you first lay eyes on the distinctive green face of the 🤢 emoji, your mind might instantly conjure images of feeling nauseated or downright sick."
  },
  {
    id: 26,
    emoji: "🤬",
    name: "🤬 cursing Emoji",
    meaning:
"This emoji shows an angry red face with a black bar and white symbols covering its mouth, indicating that it is swearing or being vulgar."  },
  {
    id: 27,
    emoji: "🤡",
    name: "🤡clown face",
    meaning: "This emoji shows a made up face with a big red nose, white face paint, a big red smile and two tufts of hair (red or blue). This is the typical image of a clown."
    
  },
  {
    id: 28,
    emoji: "👺",
    name: "👺 goblin",
    meaning:
"This vibrant character, inspired by the Japanese Goblin, bursts onto your screen with a distinctive red face, fierce eyes, long nose and a glaring, toothy expression."  }
];
export default emojipedia;
