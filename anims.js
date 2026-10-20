var ANIMS = {};
/* t1: superseded duplicate removed — the live pilot scene is the assignment below. */
ANIMS.t1 = { steps: [
  { caption: "First, glimpse the bottom card — the 7♣. Burn it into memory. That's your <b>key</b>.",
    beats: ["key card"],
    actions: [
      {t:'deck', id:'deck', x:50, y:48, n:52},
      {t:'card', id:'key', rank:'7', suit:'♣', x:56, y:62, face:'down', w:11, z:3, secret:{rank:'7', suit:'♣'}},
      {t:'hand', id:'lh', x:36, y:56, side:'left', on:true, grip:'dealing grip'},
      {t:'hi', id:'key', on:true},
      {t:'label', id:'k', text:'your key: 7♣ (the bottom card)', x:50, y:88}
    ]},
  { caption: "Their card — the A♠ — is shown around, then placed back on <b>top</b> of the deck.",
    beats: ["selection returned"],
    actions: [
      {t:'hi', id:'key', on:false},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:15, face:'up', w:12, z:4},
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:50, y:36},
      {t:'label', id:'k', text:'A♠ on top · 7♣ on the bottom', x:50, y:88}
    ]},
  { caption: "One genuine cut, about halfway. The top half comes off and goes underneath — and now your key sits <b>directly on top of</b> their card.",
    beats: ["honest cut"],
    actions: [
      {t:'remove', id:'sel'}, {t:'remove', id:'key'}, {t:'remove', id:'deck'},
      {t:'hand', id:'lh', on:false},
      {t:'packet', id:'ptop', x:32, y:42, w:13, cards:[{bulk:25},{rank:'A', suit:'♠', face:'down'}]},
      {t:'packet', id:'pbot', x:68, y:42, w:13, cards:[{rank:'7', suit:'♣', face:'down'},{bulk:25}]},
      {t:'move', id:'pbot', x:50, y:34},
      {t:'move', id:'ptop', x:50, y:58},
      {t:'label', id:'k', text:'key card now sits right on top of theirs', x:50, y:88}
    ]},
  { caption: "Spread the deck face up and find your key. The card right after it is theirs. Name it.",
    beats: ["the find"], climax: true,
    actions: [
      {t:'remove', id:'ptop'}, {t:'remove', id:'pbot'},
      {t:'spread', x:12, y:48, dx:10.5, w:10, face:'up', cards:[
        {rank:'5', suit:'♥'}, {rank:'Q', suit:'♦'}, {rank:'9', suit:'♠'},
        {id:'key', rank:'7', suit:'♣'}, {id:'sel', rank:'A', suit:'♠'},
        {rank:'3', suit:'♦'}, {rank:'J', suit:'♣'} ]},
      {t:'hi', id:'key', on:true},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'7♣ = key → A♠ sits right below it', x:50, y:88}
    ]}
]};
ANIMS.t2 = { steps: [
  { caption: "Their card starts <b>on top</b> of the deck (Exposed view tracks it positionally — the article names no card). Deck in your left hand. One honest overhand shuffle is about to move it exactly one place: to the bottom.",
    beats: ["control the top"],
    actions: [
      {t:'packet', id:'deck', x:46, y:54, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:46, y:44, face:'down', w:11, z:5, ghost:true},
      {t:'hand', id:'lh', x:34, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'their card on top (Exposed)', x:50, y:88}
    ]},
  { caption: "Lift the <b>top half</b> with your right hand. Their card rides on top of that half (Exposed) — everything about this looks, and is, ordinary.",
    beats: ["the lift"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'up', x:64, y:42, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'low', x:34, y:58, w:13, cards:[{bulk:25}]},
      {t:'move', id:'sel', x:64, y:34},
      {t:'hand', id:'rh', x:72, y:34, side:'right', on:true},
      {t:'label', id:'k', text:'top half lifted', x:50, y:88}
    ]},
  { caption: "Left thumb <b>peels small packets</b> off the top of the right-hand packet into your left hand, until the right hand is empty. The first packet peeled carried their card — so it lands on the <b>bottom</b> of the reassembled deck. Exposed view: there it is, underneath.",
    beats: ["overhand peel"],
    actions: [
      {t:'remove', id:'up'},
      {t:'remove', id:'low'},
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:51}]},
      {t:'move', id:'sel', x:50, y:62, z:1},
      {t:'label', id:'k', text:'top card → bottom, in one shuffle', x:50, y:88}
    ]},
  { caption: "Keeping it there. On later shuffles, always leave the <b>bottom ten or so cards sitting</b> in your left hand — lift packets only from the top, peel, and drop them back on top. The bottom stock never moves, and neither does their card.",
    beats: ["keeping it there"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'stock', x:40, y:58, w:13, cards:[{bulk:10}]},
      {t:'packet', id:'up2', x:60, y:40, w:13, cards:[{bulk:41}]},
      {t:'move', id:'sel', x:40, y:66, z:1},
      {t:'note', id:'b', text:'bottom stock — never lifted', x:66, y:66},
      {t:'label', id:'k', text:'the bottom stock sits out the shuffle', x:50, y:88}
    ]},
  { caption: "The injog. When you want to bookmark a spot, let the <b>last packet land sticking out</b> about a centimetre toward you instead of squared — that little protruding step is a marker you can cut to exactly. Their card is still on the bottom (Exposed); now you also own a bookmark. Feel for this in your hands: <b>one honest overhand shuffle moves the top card to the bottom</b>.",
    climax: true,
    actions: [
      {t:'remove', id:'stock'},
      {t:'remove', id:'up2'},
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:42}]},
      {t:'packet', id:'inj', x:47, y:44, w:13, cards:[{bulk:9}]},
      {t:'move', id:'sel', x:50, y:62, z:1},
      {t:'note', id:'b', text:'injog — a marker you can cut to', x:70, y:26},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'injogged packet · their card on the bottom', x:50, y:88}
    ]}
]};

ANIMS.t3 = { steps: [
  { caption: "The <b>Q♥</b> sits on top of the deck. Only you know that. Deck face-down in your left hand, thumb along the left edge.",
    beats: ["force on top"],
    actions: [
      {t:'packet', id:'deck', x:42, y:54, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', rank:'Q', suit:'♥', x:42, y:44, face:'down', w:11, z:5, secret:{rank:'Q', suit:'♥'}},
      {t:'hand', id:'lh', x:30, y:56, side:'left', on:true},
      {t:'label', id:'k', text:'force card: Q♥, on top', x:50, y:88}
    ]},
  { caption: "Right hand comes over the top — thumb at the inner end, fingers at the outer — and <b>pinches off the top portion</b>, pulling it right. The article's whole secret is in the right-hand packet: its <b>bottom card never changes</b> through the shuffle, and that bottom card is your force card (Exposed view keeps it there).",
    beats: ["Hindu peel"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:31}]},
      {t:'packet', id:'rh', x:64, y:40, w:13, cards:[{bulk:20}]},
      {t:'move', id:'sel', x:64, y:50, z:1},
      {t:'hand', id:'rh', x:72, y:32, side:'right', on:true},
      {t:'label', id:'k', text:'top portion pinched off — Q♥ underneath it', x:50, y:88}
    ]},
  { caption: "Left thumb <b>strips small packets</b> off the top of the right-hand packet back into your left hand. That stripping rhythm is the whole shuffle — and the right hand keeps hold of its bottom stub the entire time.",
    beats: ["the strip"],
    actions: [
      {t:'repacket', id:'rh', cards:[{bulk:8}]},
      {t:'packet', id:'s1', x:27, y:42, w:11, cards:[{bulk:6}]},
      {t:'packet', id:'s2', x:27, y:62, w:11, cards:[{bulk:6}]},
      {t:'label', id:'k', text:'stripping packets — the stub never changes', x:50, y:88}
    ]},
  { caption: "“Say stop whenever you want.” — <b>Stop!</b> You freeze, tilt the right-hand packet, and show its <b>bottom card</b>: the Q♥. Free choice, apparently.",
    beats: ["the force"],
    actions: [
      {t:'move', id:'sel', x:64, y:56},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'“stop!” — the bottom card of the stub', x:50, y:88}
    ]},
  { caption: "Drop the stub on top to finish, and as you square up, keep a <b>left pinky break</b> right where the stub landed — your card is sitting at that break, ready to cut to whenever the reveal calls for it. They watched cards flying everywhere; the stop chose nothing. <b>That's the entire trick.</b>",
    climax: true,
    actions: [
      {t:'remove', id:'rh'},
      {t:'remove', id:'s1'},
      {t:'remove', id:'s2'},
      {t:'remove', id:'sel'},
      {t:'repacket', id:'deck', cards:[{bulk:43},{rank:'Q', suit:'♥', face:'down'},{bulk:8}]},
      {t:'note', id:'b', text:'pinky break at the stub — the Q♥ sits there', x:68, y:30},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'their “free choice” — the force', x:50, y:88}
    ]}
]};

ANIMS.t4 = { steps: [
  { caption: "As you square the deck, your left pinky holds a tiny break under the <b>top two cards</b>. There are two cards there — Exposed view proves it.",
    beats: ["pinky break"],
    actions: [
      {t:'deck', id:'d', x:50, y:52, n:52},
      {t:'card', id:'dt', rank:'7', suit:'♣', x:50, y:45, face:'down', w:12, z:5, ghost:true, secret:{rank:'7', suit:'♣'}},
      {t:'card', id:'du', rank:'K', suit:'♦', x:50, y:45, face:'down', w:12, z:6, secret:{rank:'K', suit:'♦'}},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true, grip:"mechanic's grip"},
      {t:'note', id:'b', text:'pinky break under the top two', x:74, y:66},
      {t:'label', id:'k', text:'two cards · one break', x:50, y:88}
    ]},
  { caption: "Right hand takes the double from above, <b>by the ends</b> — thumb at the inner end, fingers at the outer. Both cards come away as one.",
    beats: ["lift the double"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:63, y:20, side:'right', on:true, grip:'by the ends'},
      {t:'move', id:'dt', x:50, y:24},
      {t:'move', id:'du', x:50, y:24},
      {t:'label', id:'k', text:'two cards · handled as one', x:50, y:88}
    ]},
  { caption: "Keep them <b>perfectly squared</b>. A split edge is the only tell there is — if you can see daylight between them, so can everyone.",
    beats: ["squared"],
    actions: [
      {t:'hi', id:'du', on:true},
      {t:'note', id:'b', text:'no daylight between them', x:74, y:30},
      {t:'label', id:'k', text:'flush edges · no split', x:50, y:88}
    ]},
  { caption: "Turn it over like a book page and show the face: the K♦. The audience has seen <b>one</b> card — the 7♣ was hiding underneath it the whole time.",
    beats: ["display", "turnover"], climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'hi', id:'du', on:false},
      {t:'flip', id:'du', to:'up'},
      {t:'flip', id:'dt', to:'up'},
      {t:'label', id:'k', text:'the face they remember: K♦', x:50, y:88}
    ]},
  { caption: "Turn it back the same way and set it down. Now deal the top card: it is <b>not</b> the K♦ they remember — it's the 7♣. The K♦ never left the deck.",
    beats: ["the switch"],
    actions: [
      {t:'flip', id:'du', to:'down'},
      {t:'flip', id:'dt', to:'down'},
      {t:'move', id:'du', x:50, y:45},
      {t:'move', id:'dt', x:50, y:45},
      {t:'reveal', id:'dt'},
      {t:'move', id:'dt', x:24, y:40},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'dealt: "the K♦" — really the 7♣', x:50, y:88}
    ]}
]};

ANIMS.t5 = { steps: [
  { caption: "Deck in your right hand, the order untouched. Two cards are named in Exposed view — <b>A♠ on top, K♥ on the bottom</b>. Watch where they finish.",
    beats: ["false cut"],
    actions: [
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{rank:'K', suit:'♥', face:'down'},{bulk:50},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'A♠ on top · K♥ on the bottom', x:50, y:88}
    ]},
  { caption: "Left hand swing-cuts the top half off. Finish the cut: set the right-hand half on top of the left-hand half. <b>One genuine cut — the halves have swapped.</b>",
    beats: ["first cut"],
    actions: [
      {t:'remove', id:'stk'},
      {t:'packet', id:'up', x:50, y:34, w:13, cards:[{bulk:25},{rank:'A', suit:'♠', face:'down'}]},
      {t:'packet', id:'lo', x:50, y:62, w:13, cards:[{rank:'K', suit:'♥', face:'down'},{bulk:25}]},
      {t:'hand', id:'lh', x:38, y:40, side:'left', on:true},
      {t:'move', id:'lo', x:50, y:38},
      {t:'move', id:'up', x:50, y:60},
      {t:'label', id:'k', text:'halves swapped — A♠ buried mid-deck', x:50, y:88}
    ]},
  { caption: "Now do the exact same thing again. <b>Two identical half-cuts put everything back where it started.</b>",
    beats: ["second cut restores"],
    actions: [
      {t:'move', id:'lo', x:50, y:62},
      {t:'move', id:'up', x:50, y:36},
      {t:'label', id:'k', text:'swapped again — original order restored', x:50, y:88}
    ]},
  { caption: "Square up. The deck looks honestly cut, and your setup sits there untouched — <b>A♠ is back on top, K♥ back on the bottom</b>. Do it mid-sentence, the way you'd cut before any trick; two cuts somehow look more honest than one.",
    climax: true,
    actions: [
      {t:'remove', id:'lo'},
      {t:'remove', id:'up'},
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{rank:'K', suit:'♥', face:'down'},{bulk:50},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'A♠ top · K♥ bottom — order restored', x:50, y:88}
    ]}
]};

ANIMS.t14 = { steps: [
  { caption: "Your force card — the A♠ — starts on <b>top</b> of the deck. No shuffle, no setup: just timing and nerve. Exposed view keeps an eye on it.",
    beats: ["force on top"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'card', id:'f', rank:'A', suit:'♠', x:50, y:36, face:'down', w:12, z:5, ghost:true, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'lh', x:37, y:57, side:'left', on:true, grip:'dealing grip'},
      {t:'label', id:'k', text:'force card on top: A♠', x:50, y:88}
    ]},
  { caption: "Extend the deck toward them and riffle down the outer edge. They just <b>touch</b> the back of one card — they don't take it. Watch their hand, not the cards.",
    beats: ["the offer"],
    actions: [
      {t:'remove', id:'d'},
      {t:'fan', x:50, y:54, count:9, spread:64, radius:10, w:9, face:'down', prefix:'rf'},
      {t:'hand', id:'rh', x:64, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'riffle toward their waiting hand', x:50, y:88}
    ]},
  { caption: "Time it: slow the riffle so the instant their finger commits, the card beneath it is the top card — your force, slipped under their fingertip.",
    beats: ["timing", "the slip"],
    actions: [
      {t:'hand', id:'sh', x:72, y:47, side:'right', on:true, emoji:'☝'},
      {t:'move', id:'f', x:67, y:46},
      {t:'note', id:'b', text:'the top card, slipped under their finger', x:27, y:72},
      {t:'label', id:'k', text:'their touch lands on the force card', x:50, y:88}
    ]},
  { caption: "Stop the moment they touch. They take the card they touched — the A♠. There was genuinely nothing to see, which is exactly why it looks so fair.",
    beats: ["the reveal"], climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'sh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'reveal', id:'f'},
      {t:'move', id:'f', x:50, y:28},
      {t:'flip', id:'f', to:'up'},
      {t:'scale', id:'f', s:1.1},
      {t:'label', id:'k', text:'stop · they take the card they touched', x:50, y:88}
    ]}
]};
;

ANIMS.t20 = { steps: [
  { caption: "Three ways to learn a card without anyone knowing you looked. The deck never changes hands — only your eyes work.",
    beats: ["the peek"],
    actions: [
      {t:'deck', id:'d', x:50, y:52, n:50},
      {t:'card', id:'top', rank:'K', suit:'♥', x:50, y:44, face:'down', w:11, z:6, secret:{rank:'K', suit:'♥'}},
      {t:'card', id:'bot', rank:'9', suit:'♦', x:50, y:60, face:'down', w:11, z:6, secret:{rank:'9', suit:'♦'}},
      {t:'hand', id:'lh', x:38, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'three peeks · one deck', x:50, y:88}
    ]},
  { caption: "<b>Bottom peek:</b> deck face-down in your left hand. As you gesture or chat, tilt it a fraction toward yourself and glimpse the bottom card's index. One glance is enough — staring is what gets caught.",
    beats: ["bottom peek"],
    actions: [
      {t:'rot', id:'d', deg:8},
      {t:'rot', id:'top', deg:8},
      {t:'rot', id:'bot', deg:8},
      {t:'move', id:'bot', x:50, y:63},
      {t:'hi', id:'bot', on:true},
      {t:'note', id:'b', text:'one glance at the bottom index', x:72, y:70},
      {t:'label', id:'k', text:'bottom peek: the 9♦', x:50, y:88}
    ]},
  { caption: "<b>Top peek:</b> in dealing grip, your left thumb pushes the top card down and outward a hair, buckling it just enough to sight the index. Cover it by tapping the deck on the table to 'square' it.",
    beats: ["top peek"],
    actions: [
      {t:'rot', id:'d', deg:0},
      {t:'rot', id:'top', deg:0},
      {t:'rot', id:'bot', deg:0},
      {t:'move', id:'bot', x:50, y:60},
      {t:'hi', id:'bot', on:false},
      {t:'hand', id:'lh', x:38, y:58, side:'left', on:true, grip:'dealing grip'},
      {t:'move', id:'top', x:53, y:42},
      {t:'hi', id:'top', on:true},
      {t:'note', id:'b', text:'thumb buckle · sight the index', x:72, y:30},
      {t:'label', id:'k', text:'top peek: the K♥', x:50, y:88}
    ]},
  { caption: "<b>Riffle peek:</b> riffle up the back of the deck with your right thumb, lifting the top card just high enough to sight its index. The rule for all three: a peek isn't a move, it's a moment — your eyes do the work while your mouth keeps talking.",
    beats: ["riffle peek"], climax: true,
    actions: [
      {t:'hi', id:'top', on:false},
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:62, y:36, side:'right', on:true},
      {t:'move', id:'top', x:50, y:34},
      {t:'hi', id:'top', on:true},
      {t:'label', id:'k', text:'riffle peek · eyes work, mouth talks', x:50, y:88}
    ]}
]};
ANIMS.t6 = { steps: [
  { caption: "Deck face-down in your left hand. Tilt it so they clearly see the bottom card — the Q♠. 'Remember this one.' The card above it, the 4♥, is named only in Exposed view.",
    beats: ["bottom card"],
    actions: [
      {t:'deck', id:'d', x:50, y:44, n:50},
      {t:'card', id:'sec', rank:'4', suit:'♥', x:50, y:57, face:'down', w:11, secret:{rank:'4', suit:'♥'}},
      {t:'card', id:'bot', rank:'Q', suit:'♠', x:50, y:63, face:'up', w:11},
      {t:'hand', id:'lh', x:38, y:52, side:'left', on:true},
      {t:'label', id:'k', text:'bottom card: Q♠ · remember it', x:50, y:88}
    ]},
  { caption: "Right hand comes over from above — thumb inner end, fingers outer. As it slides the deck forward a touch, your left fingertips pull the bottom card back about a centimetre. It glides along the deck and stays behind in your left hand.",
    beats: ["the glide"],
    actions: [
      {t:'flip', id:'bot', to:'down'},
      {t:'hand', id:'rh', x:62, y:36, side:'right', on:true, grip:'by the ends'},
      {t:'move', id:'d', x:54, y:40},
      {t:'move', id:'sec', x:54, y:51},
      {t:'note', id:'b', text:'left fingertips pull the Q♠ back — it stays', x:26, y:76},
      {t:'label', id:'k', text:'the deck slides · the Q♠ stays', x:50, y:88}
    ]},
  { caption: "Right hand lifts away with the deck. The bottom card never left your left hand. Show the bottom of the right-hand deck: a stranger. Their card is gone.",
    beats: ["the show"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'d', x:68, y:32},
      {t:'move', id:'sec', x:68, y:45},
      {t:'flip', id:'sec', to:'up'},
      {t:'hi', id:'sec', on:true},
      {t:'label', id:'k', text:'new bottom: 4♥ · the Q♠ never left', x:50, y:88}
    ]},
  { caption: "Let the retained card fall casually to your side as you gesture. They saw the Q♠ one second ago, so their brain already filed it as 'still there.' That's what you're stealing — the assumption, not the card.",
    climax: true,
    actions: [
      {t:'hi', id:'sec', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'move', id:'bot', x:28, y:72},
      {t:'flip', id:'bot', to:'up'},
      {t:'hi', id:'bot', on:true},
      {t:'label', id:'k', text:'Q♠ was in your left hand all along', x:50, y:88}
    ]}
]};

ANIMS.t7 = { steps: [
  { caption: "The force card — the J♥ — sits on <b>top</b> of the deck in your left hand. Everything else is psychology.",
    beats: ["force on top"],
    actions: [
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:51},{rank:'J', suit:'♥', face:'down'}]},
      {t:'hand', id:'lh', x:38, y:58, side:'left', on:true, grip:'dealing grip'},
      {t:'label', id:'k', text:'force card on top: J♥', x:50, y:88}
    ]},
  { caption: "Right thumb riffles down the outer edge. They say <b>stop</b> whenever they feel like it — the break lands near the top.",
    beats: ["riffle · stop"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'upper', x:50, y:32, w:13, cards:[{bulk:7},{rank:'J', suit:'♥', face:'down'}]},
      {t:'packet', id:'lower', x:50, y:64, w:13, cards:[{bulk:44}]},
      {t:'hand', id:'rh', x:60, y:34, side:'right', on:true},
      {t:'label', id:'k', text:'"stop" — the break', x:50, y:88}
    ]},
  { caption: "As the right hand lifts its packet away, your <b>left thumb drags the top card back</b> — the J♥ stays behind on the lower packet, covered by the lifting hand.",
    beats: ["slip the force"],
    actions: [
      {t:'repacket', id:'upper', cards:[{bulk:7}]},
      {t:'card', id:'jh', rank:'J', suit:'♥', x:50, y:38, face:'down', w:11, z:5, secret:{rank:'J', suit:'♥'}},
      {t:'move', id:'jh', x:50, y:57},
      {t:'move', id:'upper', x:76, y:28},
      {t:'label', id:'k', text:'the J♥ stays behind', x:50, y:88}
    ]},
  { caption: "Show the top card of the lower packet: <b>the card they stopped at</b>. It was never in doubt — protect their belief that the stop chose it; that belief does most of the work.",
    climax: true,
    actions: [
      {t:'flip', id:'jh', to:'up'},
      {t:'scale', id:'jh', s:1.08},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'"the card you stopped at"', x:50, y:88}
    ]}
]};

ANIMS.t8 = { steps: [
  { caption: "Elmsley Count — four cards face-down in your left hand. One of them has a <b>red back</b> (the engine has one back design, so Exposed view ghosts it — it rides second from the top). You are going to count all four fairly, and its back will never be shown.",
    beats: ["elmsley count"],
    actions: [
      {t:'packet', id:'lh', x:36, y:52, w:12, cards:[{bulk:3}]},
      {t:'card', id:'odd', x:36, y:44, face:'down', w:11, z:5, ghost:true},
      {t:'hand', id:'lh', x:27, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'four cards · one odd back (Exposed)', x:50, y:88}
    ]},
  { caption: "<b>One.</b> Right hand takes the top card fairly, onto its own packet. Dead even rhythm — a metronome 1-2-3-4 is what sells this count.",
    beats: ["1 — fair"],
    actions: [
      {t:'repacket', id:'lh', cards:[{bulk:2}]},
      {t:'packet', id:'rh', x:62, y:52, w:12, cards:[{bulk:1}]},
      {t:'label', id:'k', text:'1 — fair take', x:50, y:88}
    ]},
  { caption: "<b>Two.</b> The right hand <b>dips a fraction</b> and takes this card <i>under</i> its packet instead of on top — and this card is the red back (Exposed: it slides underneath). Any hurry here and the eye catches the dip.",
    beats: ["2 — under"],
    actions: [
      {t:'move', id:'odd', x:62, y:60, z:1},
      {t:'label', id:'k', text:'2 — taken under the packet', x:50, y:88}
    ]},
  { caption: "<b>Three.</b> Fair again — the next card goes on top of the right-hand packet, in the same unhurried rhythm.",
    beats: ["3 — fair"],
    actions: [
      {t:'repacket', id:'lh', cards:[{bulk:1}]},
      {t:'repacket', id:'rh', cards:[{bulk:2}]},
      {t:'label', id:'k', text:'3 — fair take', x:50, y:88}
    ]},
  { caption: "<b>Four.</b> The last card is also taken <b>under</b> the packet. Four cards counted, one at a time, in full view — and one back was never displayed.",
    beats: ["4 — under"],
    actions: [
      {t:'remove', id:'lh'},
      {t:'card', id:'c4', x:62, y:66, face:'down', w:11, z:0},
      {t:'label', id:'k', text:'4 — taken under · count complete', x:50, y:88}
    ]},
  { caption: "Spread the four: one back is <b>red</b>. It was hidden the whole time — tucked under the packet at counts two and four while the count looked, and was, perfectly even. Slow is smooth, and smooth is invisible.",
    climax: true,
    actions: [
      {t:'remove', id:'rh'},
      {t:'remove', id:'odd'},
      {t:'remove', id:'c4'},
      {t:'spread', x:22, y:52, count:3, dx:15, w:11, face:'down', prefix:'b'},
      {t:'card', id:'red', x:58, y:50, face:'down', w:12, z:5},
      {t:'hi', id:'red', on:true},
      {t:'note', id:'b', text:'the red back — never displayed', x:62, y:28},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'four counted · one face — one back — never shown', x:50, y:88}
    ]}
]};
;

ANIMS.t15 = { steps: [
  { caption: "The card to vanish sits on top — deck in the left hand in <b>dealing grip</b>, nothing to see yet.",
    beats: ["setup"],
    actions: [
      {t:'deck', id:'d', x:45, y:52, n:51},
      {t:'card', id:'top', rank:'A', suit:'♠', x:45, y:41, face:'down', w:12, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'lh', x:35, y:55, side:'left', on:true, grip:'dealing grip'},
      {t:'label', id:'k', text:'card on top · 51 below', x:50, y:88}
    ]},
  { caption: "The right hand comes over to <b>square the deck</b> — thumb at the inner end, fingers at the outer.",
    beats: ["square-up"],
    actions: [
      {t:'hand', id:'rh', x:56, y:42, side:'right', on:true, grip:'thumb inner · fingers outer'},
      {t:'label', id:'k', text:'squaring', x:50, y:88}
    ]},
  { caption: "As the hand lifts away it presses down gently and <b>carries the top card with it</b> — bowed into the palm, clipped by pressure at the base of the fingers.",
    beats: ["palm"],
    actions: [
      {t:'palm', id:'top'},
      {t:'move', id:'top', x:60, y:46},
      {t:'hand', id:'rh', x:62, y:44, side:'right', on:true, grip:''},
      {t:'label', id:'k', text:'it leaves with the hand', x:50, y:88}
    ]},
  { caption: "The hand drifts away, <b>fingers softly curled</b> — never flat, never frozen. The deck can be handed out; the card is simply gone.",
    climax: true,
    actions: [
      {t:'move', id:'top', x:74, y:40},
      {t:'hand', id:'rh', x:76, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'empty hand · full palm', x:50, y:88}
    ]},
  { caption: "To bring it back, the hand returns over the deck — the card rides home <b>under cover of the square-up</b>, still palmed.",
    beats: ["the return"],
    actions: [
      {t:'hand', id:'rh', x:56, y:42, side:'right', on:true},
      {t:'move', id:'top', x:45, y:41},
      {t:'label', id:'k', text:'home under cover', x:50, y:88}
    ]},
  { caption: "Square once more and it's back on top. Palming is <b>ninety percent acting</b>: the hand looks empty because you behave as if it is.",
    actions: [
      {t:'unpalm', id:'top'},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'restored', x:50, y:88}
    ]}
]};
;

ANIMS.t21 = { steps: [
  { caption: "Deck in your left hand, held at the fingertips: thumb on one long edge, middle and ring fingers on the other. The named cards in Exposed view: <b>Q♦ on top, 5♥ at the break, 8♣ on the bottom</b>.",
    beats: ["fingertip grip"],
    actions: [
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{rank:'8', suit:'♣', face:'down'},{bulk:24},{rank:'5', suit:'♥', face:'down'},{bulk:25},{rank:'Q', suit:'♦', face:'down'}]},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true, grip:'fingertip grip'},
      {t:'label', id:'k', text:'one hand only · 5♥ at the break', x:50, y:88}
    ]},
  { caption: "Let the bottom half drop into your palm — it falls and pivots against your thumb.",
    beats: ["bottom half drops"],
    actions: [
      {t:'remove', id:'stk'},
      {t:'packet', id:'lo', x:44, y:60, w:13, cards:[{rank:'8', suit:'♣', face:'down'},{bulk:24},{rank:'5', suit:'♥', face:'down'}]},
      {t:'packet', id:'up', x:50, y:36, w:13, cards:[{bulk:25},{rank:'Q', suit:'♦', face:'down'}]},
      {t:'label', id:'k', text:'bottom half into the palm', x:50, y:88}
    ]},
  { caption: "Your index finger pushes the top half forward; it swings down into the palm and the dropped half settles over it. <b>The halves have swapped, one-handed.</b>",
    beats: ["the swing"],
    actions: [
      {t:'move', id:'up', x:46, y:56},
      {t:'move', id:'lo', x:53, y:43},
      {t:'label', id:'k', text:'halves swapped', x:50, y:88}
    ]},
  { caption: "Halves swapped: <b>5♥ rides on top now and Q♦ sits in the middle</b>. Do it again to cut straight back. Pure flourish — no secret, all style; clean mechanics first and speed arrives on its own.",
    climax: true,
    actions: [
      {t:'remove', id:'lo'},
      {t:'remove', id:'up'},
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{bulk:25},{rank:'Q', suit:'♦', face:'down'},{rank:'8', suit:'♣', face:'down'},{bulk:24},{rank:'5', suit:'♥', face:'down'}]},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'5♥ on top · Q♦ buried in the middle', x:50, y:88}
    ]}
]};

ANIMS.t22 = { steps: [
  { caption: "Left hand holds the deck in dealing grip, a <b>pinky break</b> separating the halves. The A♥ — named in Exposed view — sits on the lower half, just under the break. The pass will put it on top.",
    beats: ["break held"],
    actions: [
      {t:'packet', id:'up', x:50, y:40, w:13, cards:[{bulk:25},{rank:'9', suit:'♠', face:'down'}]},
      {t:'card', id:'sel', rank:'A', suit:'♥', x:50, y:49, face:'down', w:11, secret:{rank:'A', suit:'♥'}},
      {t:'packet', id:'lo', x:50, y:57, w:13, cards:[{bulk:25}]},
      {t:'hand', id:'lh', x:38, y:55, side:'left', on:true, grip:'dealing grip'},
      {t:'note', id:'b', text:'pinky break under the A♥', x:72, y:62},
      {t:'label', id:'k', text:'break between the halves', x:50, y:88}
    ]},
  { caption: "Right hand comes over the deck — thumb at the inner end, fingers at the outer — <b>covering the break</b>. The audience should see only the back of the hand, not a gap.",
    beats: ["cover"],
    actions: [
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true, grip:'by the ends'},
      {t:'label', id:'k', text:'right hand shades the break', x:50, y:88}
    ]},
  { caption: "In one motion the hands pivot: the bottom half swings up and over while the top half drops beneath. <b>The packets transpose</b> — under cover, in a blink.",
    beats: ["the pass"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'lo', x:50, y:40},
      {t:'move', id:'sel', x:50, y:32},
      {t:'move', id:'up', x:50, y:57},
      {t:'label', id:'k', text:'halves transposed under the hand', x:50, y:88}
    ]},
  { caption: "Square up immediately, casually, the way you would after any ordinary cut. <b>The A♥ is on top</b> — and nobody saw a thing.",
    climax: true,
    actions: [
      {t:'remove', id:'lo'},
      {t:'remove', id:'up'},
      {t:'packet', id:'done', x:50, y:51, w:14, cards:[{bulk:51}]},
      {t:'move', id:'sel', x:50, y:44},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'A♥ on top · act natural', x:50, y:88}
    ]}
]};
;
ANIMS.t9 = { steps: [
  { caption: "Snap Change — a small packet face-up in the left hand. It looks like one card; <b>Exposed view shows the second card beneath it</b>.",
    beats: ["display"],
    actions: [
      {t:'card', id:'und', x:48, y:50, face:'up', w:14, ghost:true},
      {t:'card', id:'top', x:50, y:46, face:'up', w:14, z:3},
      {t:'hand', id:'lh', x:36, y:56, side:'left', on:true},
      {t:'label', id:'k', text:'small packet, face up', x:50, y:88}
    ]},
  { caption: "The right hand comes over from above. <b>Middle and ring fingertips press on the face</b> of the top card, near its top edge.",
    beats: ["prep"],
    actions: [
      {t:'hand', id:'rh', x:61, y:40, side:'right', on:true},
      {t:'note', id:'b', text:'fingertips on the face · near the top edge', x:50, y:26},
      {t:'label', id:'k', text:'load the snap', x:50, y:88}
    ]},
  { caption: "One sharp motion: <b>drag the top card back toward you</b>. It flips face-down under cover of your hand — and the card beneath is simply there.",
    beats: ["change"],
    actions: [
      {t:'flip', id:'top', to:'down'},
      {t:'move', id:'top', x:57, y:59, z:1},
      {t:'move', id:'und', x:50, y:46},
      {t:'reveal', id:'und'},
      {t:'label', id:'k', text:'snap — new face', x:50, y:88}
    ]},
  { caption: "Hold still for a beat. No second adjustment. <b>Commit to it completely</b> — hesitation is the only thing that exposes this. Play it head-on, packet low; never give anyone the side.",
    climax: true,
    actions: [
      {t:'hi', id:'und', on:true},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'hold · do not fix', x:50, y:88}
    ]}
]};
;

ANIMS.t10 = { steps: [
  { caption: "Deal 21 cards face-up into <b>three columns of seven</b>, across row by row. They memorize a card and tell you only which column it's in — in this run-through, the <b>9♥</b>, sitting in the third column. (The article names no card; the nine is the worked example.)",
    beats: ["deal 3x7"],
    actions: [
      {t:'spread', x:28, y:30, dy:5.8, w:9.5, face:'up', prefix:'r1a', cards:[{rank:'A', suit:'♠', face:'up'},{rank:'Q', suit:'♥', face:'up'},{rank:'3', suit:'♦', face:'up'},{rank:'10', suit:'♦', face:'up'},{rank:'5', suit:'♠', face:'up'},{rank:'9', suit:'♠', face:'up'},{rank:'6', suit:'♣', face:'up'}]},
      {t:'spread', x:50, y:30, dy:5.8, w:9.5, face:'up', prefix:'r1b', cards:[{rank:'K', suit:'♦', face:'up'},{rank:'8', suit:'♠', face:'up'},{rank:'J', suit:'♣', face:'up'},{rank:'2', suit:'♥', face:'up'},{rank:'A', suit:'♦', face:'up'},{rank:'4', suit:'♥', face:'up'},{rank:'8', suit:'♥', face:'up'}]},
      {t:'spread', x:72, y:30, dy:5.8, w:9.5, face:'up', prefix:'r1c', cards:[{rank:'4', suit:'♣', face:'up'},{rank:'9', suit:'♥', face:'up'},{rank:'6', suit:'♠', face:'up'},{rank:'7', suit:'♣', face:'up'},{rank:'K', suit:'♣', face:'up'},{rank:'Q', suit:'♦', face:'up'},{rank:'3', suit:'♠', face:'up'}]},
      {t:'hi', id:'r1c1', on:true},
      {t:'label', id:'k', text:'three columns of seven', x:50, y:88}
    ]},
  { caption: "Gather the columns so theirs lands <b>in the middle</b> of the packet: pick up one of the other columns, then theirs, then the last. The 9♥ is now buried at a depth the procedure — not chance — controls: thirteenth from the top (Exposed view holds its place in the stack).",
    beats: ["middle gather"],
    actions: [
      {t:'remove', id:'r1a0'},
      {t:'remove', id:'r1a1'},
      {t:'remove', id:'r1a2'},
      {t:'remove', id:'r1a3'},
      {t:'remove', id:'r1a4'},
      {t:'remove', id:'r1a5'},
      {t:'remove', id:'r1a6'},
      {t:'remove', id:'r1b0'},
      {t:'remove', id:'r1b1'},
      {t:'remove', id:'r1b2'},
      {t:'remove', id:'r1b3'},
      {t:'remove', id:'r1b4'},
      {t:'remove', id:'r1b5'},
      {t:'remove', id:'r1b6'},
      {t:'remove', id:'r1c0'},
      {t:'remove', id:'r1c1'},
      {t:'remove', id:'r1c2'},
      {t:'remove', id:'r1c3'},
      {t:'remove', id:'r1c4'},
      {t:'remove', id:'r1c5'},
      {t:'remove', id:'r1c6'},
      {t:'packet', id:'pk', x:50, y:50, w:13, cards:[{rank:'K', suit:'♦', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'J', suit:'♣', face:'down'},{rank:'2', suit:'♥', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'4', suit:'♥', face:'down'},{rank:'8', suit:'♥', face:'down'},{rank:'4', suit:'♣', face:'down'},{rank:'9', suit:'♥', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'7', suit:'♣', face:'down'},{rank:'K', suit:'♣', face:'down'},{rank:'Q', suit:'♦', face:'down'},{rank:'3', suit:'♠', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'Q', suit:'♥', face:'down'},{rank:'3', suit:'♦', face:'down'},{rank:'10', suit:'♦', face:'down'},{rank:'5', suit:'♠', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'6', suit:'♣', face:'down'}]},
      {t:'label', id:'k', text:'their column in the middle', x:50, y:88}
    ]},
  { caption: "Deal three columns again, row by row. They indicate the <b>first</b> column this time — the 9♥ has changed columns, exactly as the procedure says it must.",
    beats: ["deal again"],
    actions: [
      {t:'remove', id:'pk'},
      {t:'spread', x:28, y:30, dy:5.8, w:9.5, face:'up', prefix:'r2a', cards:[{rank:'6', suit:'♣', face:'up'},{rank:'10', suit:'♦', face:'up'},{rank:'A', suit:'♠', face:'up'},{rank:'K', suit:'♣', face:'up'},{rank:'9', suit:'♥', face:'up'},{rank:'4', suit:'♥', face:'up'},{rank:'J', suit:'♣', face:'up'}]},
      {t:'spread', x:50, y:30, dy:5.8, w:9.5, face:'up', prefix:'r2b', cards:[{rank:'9', suit:'♠', face:'up'},{rank:'3', suit:'♦', face:'up'},{rank:'3', suit:'♠', face:'up'},{rank:'7', suit:'♣', face:'up'},{rank:'4', suit:'♣', face:'up'},{rank:'A', suit:'♦', face:'up'},{rank:'8', suit:'♠', face:'up'}]},
      {t:'spread', x:72, y:30, dy:5.8, w:9.5, face:'up', prefix:'r2c', cards:[{rank:'5', suit:'♠', face:'up'},{rank:'Q', suit:'♥', face:'up'},{rank:'Q', suit:'♦', face:'up'},{rank:'6', suit:'♠', face:'up'},{rank:'8', suit:'♥', face:'up'},{rank:'2', suit:'♥', face:'up'},{rank:'K', suit:'♦', face:'up'}]},
      {t:'hi', id:'r2a4', on:true},
      {t:'label', id:'k', text:'three columns of seven', x:50, y:88}
    ]},
  { caption: "Sandwich their column in the middle again. Each round <b>shrinks where the card can be</b>: the 9♥ is now tenth from the top.",
    beats: ["middle gather"],
    actions: [
      {t:'remove', id:'r2a0'},
      {t:'remove', id:'r2a1'},
      {t:'remove', id:'r2a2'},
      {t:'remove', id:'r2a3'},
      {t:'remove', id:'r2a4'},
      {t:'remove', id:'r2a5'},
      {t:'remove', id:'r2a6'},
      {t:'remove', id:'r2b0'},
      {t:'remove', id:'r2b1'},
      {t:'remove', id:'r2b2'},
      {t:'remove', id:'r2b3'},
      {t:'remove', id:'r2b4'},
      {t:'remove', id:'r2b5'},
      {t:'remove', id:'r2b6'},
      {t:'remove', id:'r2c0'},
      {t:'remove', id:'r2c1'},
      {t:'remove', id:'r2c2'},
      {t:'remove', id:'r2c3'},
      {t:'remove', id:'r2c4'},
      {t:'remove', id:'r2c5'},
      {t:'remove', id:'r2c6'},
      {t:'packet', id:'pk', x:50, y:50, w:13, cards:[{rank:'5', suit:'♠', face:'down'},{rank:'Q', suit:'♥', face:'down'},{rank:'Q', suit:'♦', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'8', suit:'♥', face:'down'},{rank:'2', suit:'♥', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'6', suit:'♣', face:'down'},{rank:'10', suit:'♦', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♣', face:'down'},{rank:'9', suit:'♥', face:'down'},{rank:'4', suit:'♥', face:'down'},{rank:'J', suit:'♣', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'3', suit:'♦', face:'down'},{rank:'3', suit:'♠', face:'down'},{rank:'7', suit:'♣', face:'down'},{rank:'4', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'8', suit:'♠', face:'down'}]},
      {t:'label', id:'k', text:'their column in the middle', x:50, y:88}
    ]},
  { caption: "Once more. Third deal, and their column is the first again — the 9♥ sits fourth down it. Always put their pile between the other two; three rounds is enough — don't over-deal.",
    beats: ["third deal"],
    actions: [
      {t:'remove', id:'pk'},
      {t:'spread', x:28, y:30, dy:5.8, w:9.5, face:'up', prefix:'r3a', cards:[{rank:'8', suit:'♠', face:'up'},{rank:'7', suit:'♣', face:'up'},{rank:'9', suit:'♠', face:'up'},{rank:'9', suit:'♥', face:'up'},{rank:'10', suit:'♦', face:'up'},{rank:'2', suit:'♥', face:'up'},{rank:'Q', suit:'♦', face:'up'}]},
      {t:'spread', x:50, y:30, dy:5.8, w:9.5, face:'up', prefix:'r3b', cards:[{rank:'A', suit:'♦', face:'up'},{rank:'3', suit:'♠', face:'up'},{rank:'J', suit:'♣', face:'up'},{rank:'K', suit:'♣', face:'up'},{rank:'6', suit:'♣', face:'up'},{rank:'8', suit:'♥', face:'up'},{rank:'Q', suit:'♥', face:'up'}]},
      {t:'spread', x:72, y:30, dy:5.8, w:9.5, face:'up', prefix:'r3c', cards:[{rank:'4', suit:'♣', face:'up'},{rank:'3', suit:'♦', face:'up'},{rank:'4', suit:'♥', face:'up'},{rank:'A', suit:'♠', face:'up'},{rank:'K', suit:'♦', face:'up'},{rank:'6', suit:'♠', face:'up'},{rank:'5', suit:'♠', face:'up'}]},
      {t:'hi', id:'r3a3', on:true},
      {t:'label', id:'k', text:'three columns of seven', x:50, y:88}
    ]},
  { caption: "Third gather — and now there's <b>exactly one place left</b>: their card is precisely the 11th from the top. It cannot be anywhere else.",
    beats: ["the middle"],
    actions: [
      {t:'remove', id:'r3a0'},
      {t:'remove', id:'r3a1'},
      {t:'remove', id:'r3a2'},
      {t:'remove', id:'r3a3'},
      {t:'remove', id:'r3a4'},
      {t:'remove', id:'r3a5'},
      {t:'remove', id:'r3a6'},
      {t:'remove', id:'r3b0'},
      {t:'remove', id:'r3b1'},
      {t:'remove', id:'r3b2'},
      {t:'remove', id:'r3b3'},
      {t:'remove', id:'r3b4'},
      {t:'remove', id:'r3b5'},
      {t:'remove', id:'r3b6'},
      {t:'remove', id:'r3c0'},
      {t:'remove', id:'r3c1'},
      {t:'remove', id:'r3c2'},
      {t:'remove', id:'r3c3'},
      {t:'remove', id:'r3c4'},
      {t:'remove', id:'r3c5'},
      {t:'remove', id:'r3c6'},
      {t:'packet', id:'pk', x:50, y:50, w:13, cards:[{rank:'4', suit:'♣', face:'down'},{rank:'3', suit:'♦', face:'down'},{rank:'4', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'5', suit:'♠', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'7', suit:'♣', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'9', suit:'♥', face:'down'},{rank:'10', suit:'♦', face:'down'},{rank:'2', suit:'♥', face:'down'},{rank:'Q', suit:'♦', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'3', suit:'♠', face:'down'},{rank:'J', suit:'♣', face:'down'},{rank:'K', suit:'♣', face:'down'},{rank:'6', suit:'♣', face:'down'},{rank:'8', suit:'♥', face:'down'},{rank:'Q', suit:'♥', face:'down'}]},
      {t:'label', id:'k', text:'their column in the middle', x:50, y:88}
    ]},
  { caption: "Count ten cards down, one at a time — and turn the next. <b>The 11th card: the 9♥.</b> Or let them name it first, for maximum drama. No sleight of hand at all; the math does the trick, and it still floors people.",
    climax: true,
    actions: [
      {t:'repacket', id:'pk', cards:[{rank:'4', suit:'♣', face:'down'},{rank:'3', suit:'♦', face:'down'},{rank:'4', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'5', suit:'♠', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'7', suit:'♣', face:'down'},{rank:'9', suit:'♠', face:'down'}]},
      {t:'packet', id:'pile', x:28, y:52, w:12, cards:[{rank:'Q', suit:'♥', face:'down'},{rank:'8', suit:'♥', face:'down'},{rank:'6', suit:'♣', face:'down'},{rank:'K', suit:'♣', face:'down'},{rank:'J', suit:'♣', face:'down'},{rank:'3', suit:'♠', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'Q', suit:'♦', face:'down'},{rank:'2', suit:'♥', face:'down'},{rank:'10', suit:'♦', face:'down'}]},
      {t:'card', id:'found', rank:'9', suit:'♥', x:50, y:40, face:'down', w:13, z:5},
      {t:'flip', id:'found', to:'up'},
      {t:'hi', id:'found', on:true},
      {t:'scale', id:'found', s:1.1},
      {t:'label', id:'k', text:'11th card — always', x:50, y:88}
    ]}
]};

ANIMS.t11 = { steps: [
  { caption: "Two cards: the <b>Ace of Spades</b> and the King of Hearts. \"Watch the Ace.\"",
    beats: ["two-card monte"],
    actions: [
      {t:'card', id:'as', rank:'A', suit:'♠', x:38, y:48, face:'up', w:14},
      {t:'card', id:'kh', rank:'K', suit:'♥', x:62, y:48, face:'up', w:14},
      {t:'hi', id:'as', on:true},
      {t:'label', id:'k', text:'watch the Ace', x:50, y:88}
    ]},
  { caption: "Turn the two-card packet face-down <b>as one block</b> — exactly like a double lift. <b>Nothing changed order.</b> That's the whole method.",
    beats: ["block turnover"],
    actions: [
      {t:'hi', id:'as', on:false},
      {t:'remove', id:'as'},
      {t:'remove', id:'kh'},
      {t:'card', id:'as', rank:'A', suit:'♠', x:50, y:45, face:'down', w:14, secret:{rank:'A', suit:'♠'}},
      {t:'card', id:'kh', rank:'K', suit:'♥', x:50, y:52, face:'down', w:14, secret:{rank:'K', suit:'♥'}},
      {t:'label', id:'k', text:'turned as one · order unchanged', x:50, y:88}
    ]},
  { caption: "Now the \"throw\" — toss the packet between your hands with a little flourish. <b>It looks like a switch. It isn't.</b>",
    beats: ["the throw"],
    actions: [
      {t:'hand', id:'rh', x:62, y:33, side:'right', on:true},
      {t:'move', id:'as', x:56, y:37},
      {t:'move', id:'kh', x:56, y:44},
      {t:'label', id:'k', text:'the throw — pure theater', x:50, y:88}
    ]},
  { caption: "\"Top or bottom — where's the Ace?\" They point at one — it's the King. The Ace is the other card. <b>They cannot win, because nothing ever happened</b> — conviction outperforms complexity.",
    climax: true,
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'move', id:'kh', x:68, y:54},
      {t:'flip', id:'kh', to:'up'},
      {t:'move', id:'as', x:38, y:44},
      {t:'flip', id:'as', to:'up'},
      {t:'hi', id:'as', on:true},
      {t:'label', id:'k', text:'they can never win', x:50, y:88}
    ]}
]};

ANIMS.t16 = { steps: [
  { caption: "Top Change — the cleanest switch in magic. The card they know sits <b>on top of the deck</b> in your left hand; the card you're switching it for is face-down in your right hand.",
    beats: ["start"],
    actions: [
      {t:'packet', id:'d', x:38, y:56, w:13, cards:[{bulk:50}]},
      {t:'card', id:'orig', x:38, y:49, face:'down', w:11, z:4, ghost:true},
      {t:'card', id:'sw', x:64, y:40, face:'down', w:11},
      {t:'hand', id:'lh', x:29, y:60, side:'left', on:true},
      {t:'hand', id:'rh', x:69, y:44, side:'right', on:true},
      {t:'label', id:'k', text:'known card on top · switch card in right', x:50, y:88}
    ]},
  { caption: "Bring the right hand over the deck, as if simply laying its card on top. <b>Neither hand stops moving.</b>",
    beats: ["meet"],
    actions: [
      {t:'move', id:'sw', x:46, y:50},
      {t:'hand', id:'rh', x:52, y:53, side:'right', on:true},
      {t:'label', id:'k', text:'hands meet — cover moment', x:50, y:88}
    ]},
  { caption: "In that single passing motion, two things happen at once: the right hand <b>drops its card</b> onto the deck, and your left thumb <b>slides the original top card into the right hand</b>.",
    beats: ["change"],
    actions: [
      {t:'move', id:'sw', x:38, y:49, z:3},
      {t:'move', id:'orig', x:65, y:41},
      {t:'hand', id:'rh', x:71, y:42, side:'right', on:true},
      {t:'note', id:'b', text:'leave one · take the other — in one motion (Exposed)', x:50, y:26},
      {t:'label', id:'k', text:'the exchange', x:50, y:88}
    ]},
  { caption: "The right hand continues on its way — gesturing, dropping to your side — carrying the stolen card with it. <b>The logic of the gesture is the cover</b>: if the motion makes sense, nobody watches the cards. Speed isn't the point.",
    climax: true,
    actions: [
      {t:'hi', id:'sw', on:true},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'continue the phrase · do not look down', x:50, y:88}
    ]}
]};
;

ANIMS.t23 = { steps: [
  { caption: "Their card is selected, noted, and <b>controlled to the top</b> of the deck. The A♠ stands in for it here.",
    beats: ["control to top"],
    actions: [
      {t:'packet', id:'deck', x:44, y:52, w:13, cards:[{bulk:47},{rank:'9', suit:'♦', face:'down'},{rank:'4', suit:'♥', face:'down'},{rank:'7', suit:'♣', face:'down'},{rank:'K', suit:'♣', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'lh', x:32, y:58, side:'left', on:true, grip:'dealing grip'},
      {t:'label', id:'k', text:'selection on top: A♠', x:50, y:88}
    ]},
  { caption: "Deal the <b>top five cards</b> into a face-down packet.",
    beats: ["deal five"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:47}]},
      {t:'packet', id:'five', x:64, y:44, w:12, cards:[{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♣', face:'down'},{rank:'7', suit:'♣', face:'down'},{rank:'4', suit:'♥', face:'down'},{rank:'9', suit:'♦', face:'down'}]},
      {t:'hand', id:'rh', x:74, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'five cards dealt', x:50, y:88}
    ]},
  { caption: "Spread them: <b>\"Is your card in here?\"</b> It is — they confirm it. The question is misdirection you never have to choreograph.",
    beats: ["the question"],
    actions: [
      {t:'remove', id:'five'},
      {t:'spread', x:22, y:46, dx:14, w:11, face:'up', prefix:'p', cards:[{id:'p0', rank:'K', suit:'♣'},{id:'p1', rank:'4', suit:'♥'},{id:'p2', rank:'7', suit:'♣'},{id:'p3', rank:'A', suit:'♠'},{id:'p4', rank:'9', suit:'♦'}]},
      {t:'hi', id:'p3', on:true},
      {t:'label', id:'k', text:'confirmed — the A♠ is here', x:50, y:88}
    ]},
  { caption: "Turn the packet face-up and <b>count the cards one by one</b> into your other hand. One…",
    beats: ["the count"],
    actions: [
      {t:'remove', id:'p0'},
      {t:'remove', id:'p1'},
      {t:'remove', id:'p2'},
      {t:'remove', id:'p3'},
      {t:'remove', id:'p4'},
      {t:'packet', id:'five', x:42, y:48, w:12, cards:[{rank:'K', suit:'♣', face:'up'},{rank:'4', suit:'♥', face:'up'},{rank:'7', suit:'♣', face:'up'},{rank:'A', suit:'♠', face:'up'},{rank:'9', suit:'♦', face:'up'}]},
      {t:'repacket', id:'five', cards:[{rank:'K', suit:'♣', face:'up'},{rank:'4', suit:'♥', face:'up'},{rank:'7', suit:'♣', face:'up'},{rank:'A', suit:'♠', face:'up'}]},
      {t:'packet', id:'pile', x:64, y:52, w:11, cards:[{rank:'9', suit:'♦', face:'up'}]},
      {t:'label', id:'k', text:'counting: one…', x:50, y:88}
    ]},
  { caption: "Two — and the <b>Biddle steal</b>: the second card never reaches the pile. It stays back beneath the packet, secretly in your right hand, while they're busy watching the count.",
    beats: ["Biddle steal"],
    actions: [
      {t:'repacket', id:'five', cards:[{rank:'K', suit:'♣', face:'up'},{rank:'4', suit:'♥', face:'up'},{rank:'7', suit:'♣', face:'up'}]},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:44, y:58, face:'up', w:11, z:2},
      {t:'palm', id:'sel'},
      {t:'label', id:'k', text:'the second card stays back', x:50, y:88}
    ]},
  { caption: "Three, four, five — the count finishes clean. <b>Set the counted cards down.</b>",
    beats: ["the count"],
    actions: [
      {t:'remove', id:'five'},
      {t:'repacket', id:'pile', cards:[{rank:'9', suit:'♦', face:'up'},{rank:'7', suit:'♣', face:'up'},{rank:'4', suit:'♥', face:'up'},{rank:'K', suit:'♣', face:'up'}]},
      {t:'label', id:'k', text:'five counted — or so it seems', x:50, y:88}
    ]},
  { caption: "Show the packet: <b>four cards</b>. Their card has vanished from among the five.",
    actions: [
      {t:'remove', id:'pile'},
      {t:'spread', x:26, y:48, dx:15, w:11, face:'up', prefix:'q', cards:[{id:'q0', rank:'9', suit:'♦'},{id:'q1', rank:'7', suit:'♣'},{id:'q2', rank:'4', suit:'♥'},{id:'q3', rank:'K', suit:'♣'}]},
      {t:'label', id:'k', text:'four cards — where is the fifth?', x:50, y:88}
    ]},
  { caption: "It was never in the count at all. Produce it <b>face-up on the deck</b>, where the steal left it — or from your pocket. Impossible, and clean.",
    climax: true,
    actions: [
      {t:'unpalm', id:'sel'},
      {t:'move', id:'sel', x:44, y:38},
      {t:'scale', id:'sel', s:1.1},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'the A♠ — never in the packet', x:50, y:88}
    ]}
]};
var ANIMS = ANIMS || {};

ANIMS.t12 = { steps: [
  { caption: "Their card is selected and signed — and controlled to the top. The card beneath it, the 7♣, rides as a ghost: it matters in phase two.",
    beats: ["signed selection"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:51, z:3},
      {t:'card', id:'du', rank:'7', suit:'♣', x:50, y:40, face:'down', w:12, z:5, ghost:true, secret:{rank:'7', suit:'♣'}},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:38, face:'up', w:13, z:6},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'signed selection · on top', x:50, y:88}
    ]},
  { caption: "Push it face up into the middle. Clearly lost.",
    beats: ["phase 1"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:50, y:52, z:2},
      {t:'label', id:'k', text:'into the middle · face up', x:50, y:88}
    ]},
  { caption: "Snap your fingers. It's back on top.",
    beats: ["phase 1"],
    actions: [
      {t:'move', id:'sel', x:50, y:38, z:6},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'back on top', x:50, y:88}
    ]},
  { caption: "Phase two: show their card with a <b>double lift</b> — two cards taken as one. Exposed view counts them: the A♠ in front, the 7♣ ghosted behind it.",
    beats: ["double lift"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:50, y:26, z:6},
      {t:'move', id:'du', x:50, y:26, z:5},
      {t:'flip', id:'sel', to:'up'},
      {t:'note', id:'b', text:'two cards · shown as one', x:74, y:30},
      {t:'label', id:'k', text:'the double lift', x:50, y:88}
    ]},
  { caption: "Turn the double face down, then take the top card — secretly the 7♣ — and push <b>that</b> into the middle. They watched their card go in. It never left the top.",
    beats: ["the lie"],
    actions: [
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:50, y:38, z:6},
      {t:'move', id:'du', x:50, y:38, z:5},
      {t:'reveal', id:'du'},
      {t:'move', id:'du', x:50, y:52, z:2},
      {t:'note', id:'b', text:'the buried card is the 7♣ — the A♠ stays', x:26, y:70},
      {t:'label', id:'k', text:'indifferent card buried · selection stays', x:50, y:88}
    ]},
  { caption: "Lose it in the middle for real this time. Put the deck in the card box. It still comes back.",
    beats: ["phase 3"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'sel', x:50, y:52, z:2},
      {t:'note', id:'b', text:'into the card box', x:74, y:66},
      {t:'label', id:'k', text:'lost for real · boxed', x:50, y:88}
    ]},
  { caption: "Finale, when you're ready: it rises with the deck in your pocket — or under a handkerchief. Two clean phases beat four shaky ones; the routine is built to grow.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'d', x:76, y:60},
      {t:'scale', id:'d', s:0.8},
      {t:'move', id:'sel', x:38, y:40, z:6},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'scale', id:'sel', s:1.12},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'it still comes back', x:50, y:88}
    ]}
]};

ANIMS.t13 = { steps: [
  { caption: "Their signed card, controlled to the top, placed face-up on the face-down deck. Out in the open: 'so we remember it.' Its little packet — the top stock — is the thing you protect from here on.",
    beats: ["top stock"],
    actions: [
      {t:'deck', id:'d', x:50, y:58, n:48},
      {t:'packet', id:'top', x:50, y:42, w:13, cards:[{bulk:3},{rank:'A', suit:'♠', face:'up'}]},
      {t:'hi', id:'top', on:true},
      {t:'label', id:'k', text:'their card · face-up on top', x:50, y:88}
    ]},
  { caption: "Keep it there with the top-stock control — shuffle everything <b>below</b> it. Their card's packet stays intact while the rest of the deck moves.",
    beats: ["top-stock control"],
    actions: [
      {t:'remove', id:'d'},
      {t:'packet', id:'p1', x:40, y:60, n:24},
      {t:'packet', id:'p2', x:60, y:60, n:24},
      {t:'move', id:'p1', x:44, y:62},
      {t:'move', id:'p2', x:56, y:62},
      {t:'label', id:'k', text:'everything below it shuffles · the top stock stays', x:50, y:88}
    ]},
  { caption: "Now the theatre: two or three sequences that look like you're mixing face-up cards into the deck — overhand shuffles that keep the top stock, false cuts — turning a few packets face-up as you go. The mixing is the illusion; the one packet whose orientation you protect is the trick.",
    beats: ["false shuffle", "the mess"],
    actions: [
      {t:'remove', id:'p2'},
      {t:'spread', x:30, y:66, count:6, dx:7, face:'up', w:8, prefix:'fu', cards:[{},{},{},{},{},{}]},
      {t:'move', id:'p1', x:32, y:56},
      {t:'hand', id:'rh', x:72, y:34, side:'right', on:true},
      {t:'label', id:'k', text:'looks mixed · their packet intact', x:50, y:88}
    ]},
  { caption: "Square the deck slowly. Spread it. Every card face-down — except theirs, face-up. They watched the mess happen, which is why the clean-up lands so hard.",
    climax: true,
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'fu0'},
      {t:'remove', id:'fu1'},
      {t:'remove', id:'fu2'},
      {t:'remove', id:'fu3'},
      {t:'remove', id:'fu4'},
      {t:'remove', id:'fu5'},
      {t:'remove', id:'p1'},
      {t:'hi', id:'top', on:false},
      {t:'remove', id:'top'},
      {t:'spread', x:8, y:56, count:12, dx:6.8, face:'down', w:8.5, prefix:'bk'},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:42, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'scale', id:'sel', s:1.1},
      {t:'label', id:'k', text:'only their card faces up', x:50, y:88}
    ]}
]};

ANIMS.t17 = { steps: [
  { caption: "Show three red cards, then three black cards.",
    beats: ["the colours"],
    actions: [
      {t:'spread', x:14, y:34, count:3, dx:13, face:'up', w:10, prefix:'r', cards:[{id:'r0', rank:'A', suit:'♥'},{id:'r1', rank:'7', suit:'♦'},{id:'r2', rank:'K', suit:'♥'}]},
      {t:'spread', x:14, y:62, count:3, dx:13, face:'up', w:10, prefix:'b', cards:[{id:'b0', rank:'A', suit:'♠'},{id:'b1', rank:'8', suit:'♣'},{id:'b2', rank:'Q', suit:'♠'}]},
      {t:'label', id:'k', text:'three reds · three blacks', x:50, y:88}
    ]},
  { caption: "Mix them face-down, laying them out alternately: red, black, red, black, red, black. The packet's declared order — Exposed view reads it — is exactly that alternation.",
    beats: ["the mix"],
    actions: [
      {t:'remove', id:'r0'},
      {t:'remove', id:'r1'},
      {t:'remove', id:'r2'},
      {t:'remove', id:'b0'},
      {t:'remove', id:'b1'},
      {t:'remove', id:'b2'},
      {t:'packet', id:'mix', x:50, y:50, w:14, cards:[{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'7', suit:'♦', face:'down'},{rank:'8', suit:'♣', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'Q', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'alternated · apparently mixed', x:50, y:88}
    ]},
  { caption: "Gather the packet — and in the gathering, let the colours quietly regroup: reds together, blacks together. The audience remembers the mixing and the separation. Nobody remembers the gathering — which is exactly where the trick lives.",
    beats: ["the gathering"],
    actions: [
      {t:'repacket', id:'mix', cards:[{rank:'A', suit:'♥', face:'down'},{rank:'7', suit:'♦', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'8', suit:'♣', face:'down'},{rank:'Q', suit:'♠', face:'down'}]},
      {t:'label', id:'k', text:'gathered · secretly grouped (Exposed)', x:50, y:88}
    ]},
  { caption: "Elmsley count the packet, showing 'mixed' reds and blacks. The count flashes alternating faces — and hides the grouping completely.",
    beats: ["Elmsley count"],
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'mix'},
      {t:'spread', x:14, y:44, count:4, dx:11, face:'up', w:9.5, prefix:'c', cards:[{id:'c0', rank:'A', suit:'♥'},{id:'c1', rank:'A', suit:'♠'},{id:'c2', rank:'7', suit:'♦'},{id:'c3', rank:'8', suit:'♣'}]},
      {t:'packet', id:'held', x:80, y:44, w:11, cards:[{rank:'K', suit:'♥', face:'down'},{rank:'Q', suit:'♠', face:'down'}]},
      {t:'label', id:'k', text:'count shows mixed · packet is grouped', x:50, y:88}
    ]},
  { caption: "Snap your fingers. Deal the packet into two piles: all three reds, all three blacks. Oil and water — they will not stay mixed.",
    climax: true,
    actions: [
      {t:'remove', id:'c0'},
      {t:'remove', id:'c1'},
      {t:'remove', id:'c2'},
      {t:'remove', id:'c3'},
      {t:'remove', id:'held'},
      {t:'spread', x:12, y:36, count:3, dx:12, face:'up', w:10, prefix:'f', cards:[{id:'f0', rank:'A', suit:'♥'},{id:'f1', rank:'7', suit:'♦'},{id:'f2', rank:'K', suit:'♥'}]},
      {t:'spread', x:12, y:64, count:3, dx:12, face:'up', w:10, prefix:'g', cards:[{id:'g0', rank:'A', suit:'♠'},{id:'g1', rank:'8', suit:'♣'},{id:'g2', rank:'Q', suit:'♠'}]},
      {t:'label', id:'k', text:'reds · blacks · separated', x:50, y:88}
    ]}
]};

ANIMS.t18 = { steps: [
  { caption: "Four aces face-down, in <b>Clubs–Hearts–Spades–Diamonds</b> order from the top. Remember the order — everything hides inside it.",
    beats: ["the packet"],
    actions: [
      {t:'card', id:'ac', rank:'A', suit:'♣', x:32, y:50, face:'down', w:11, secret:{rank:'A', suit:'♣'}},
      {t:'card', id:'ah', rank:'A', suit:'♥', x:44, y:50, face:'down', w:11, secret:{rank:'A', suit:'♥'}},
      {t:'card', id:'as', rank:'A', suit:'♠', x:56, y:50, face:'down', w:11, secret:{rank:'A', suit:'♠'}},
      {t:'card', id:'ad', rank:'A', suit:'♦', x:68, y:50, face:'down', w:11, secret:{rank:'A', suit:'♦'}},
      {t:'hand', id:'rh', x:76, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'A♣ A♥ A♠ A♦ — top to bottom', x:50, y:88}
    ]},
  { caption: "Triple turnover — <b>three cards lift as one</b>, and the face that shows is the Ace of Spades: 'the heaviest ace. Most ink.'",
    beats: ["triple turnover"],
    actions: [
      {t:'move', id:'ac', x:56, y:47, z:5},
      {t:'move', id:'ah', x:56, y:48.5, z:6},
      {t:'flip', id:'as', to:'up'},
      {t:'hi', id:'as', on:true},
      {t:'label', id:'k', text:'three as one · A♠ shows', x:50, y:88}
    ]},
  { caption: "Turn them face-down again, then give the packet a <b>twist — 180 degrees</b> in the hand. The twist is the choreography; watch what it covers.",
    beats: ["twist"],
    actions: [
      {t:'flip', id:'as', to:'down'},
      {t:'hi', id:'as', on:false},
      {t:'move', id:'ac', x:32, y:50},
      {t:'move', id:'ah', x:44, y:50},
      {t:'rot', id:'ac', deg:180},
      {t:'rot', id:'ah', deg:180},
      {t:'rot', id:'as', deg:180},
      {t:'rot', id:'ad', deg:180},
      {t:'label', id:'k', text:'twist', x:50, y:88}
    ]},
  { caption: "Elmsley count — and the <b>Ace of Hearts has turned face-up</b>. The count did it; the twist got the credit.",
    beats: ["Elmsley count"],
    actions: [
      {t:'move', id:'ac', x:34, y:45},
      {t:'move', id:'ah', x:46, y:45},
      {t:'flip', id:'ah', to:'up'},
      {t:'hi', id:'ah', on:true},
      {t:'label', id:'k', text:'A♥ turned', x:50, y:88}
    ]},
  { caption: "Twist again. Elmsley count, <b>letting the last card fall underneath</b> — the Ace of Clubs, face-up.",
    beats: ["Elmsley count"],
    actions: [
      {t:'hi', id:'ah', on:false},
      {t:'rot', id:'ac', deg:360},
      {t:'rot', id:'ah', deg:360},
      {t:'rot', id:'as', deg:360},
      {t:'rot', id:'ad', deg:360},
      {t:'move', id:'as', x:58, y:45},
      {t:'flip', id:'ac', to:'up'},
      {t:'hi', id:'ac', on:true},
      {t:'label', id:'k', text:'A♣ turned', x:50, y:88}
    ]},
  { caption: "The Ace of Diamonds is the stubborn one. Twist, and show the packet <b>still face-down all around</b> — backs outside, the two turned aces buried in the middle.",
    beats: ["twist"],
    actions: [
      {t:'hi', id:'ac', on:false},
      {t:'move', id:'as', x:50, y:46, z:6},
      {t:'move', id:'ah', x:50, y:47.5, z:5},
      {t:'move', id:'ac', x:50, y:49, z:4},
      {t:'move', id:'ad', x:50, y:50.5, z:3},
      {t:'label', id:'k', text:'backs all around', x:50, y:88}
    ]},
  { caption: "One last twist — and there it is: the <b>Ace of Diamonds, face-up in the middle</b>. They watched the twists; the counts did the work.",
    climax: true,
    actions: [
      {t:'move', id:'as', x:32, y:50},
      {t:'flip', id:'as', to:'up'},
      {t:'move', id:'ac', x:44, y:50},
      {t:'move', id:'ad', x:56, y:50},
      {t:'flip', id:'ad', to:'up'},
      {t:'move', id:'ah', x:68, y:50},
      {t:'hi', id:'ad', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'all four face-up', x:50, y:88}
    ]}
]};
// batchE animations: t19 Chicago Opener, t24 Do As I Do, t25 Card to Pocket
ANIMS.t19 = { steps: [
  { caption: "Setup: you need one extra — a <b>duplicate of a card with a different-coloured back</b>. The red-backed twin of the A♠ rides on top of the blue deck; its blue-backed mate is in the deck, waiting to be forced. (The article names no card; the A♠ is the worked example, and the duplicate is tracked by its back — Exposed view labels it.)",
    beats: ["setup"],
    actions: [
      {t:'packet', id:'deck', x:50, y:56, w:13, cards:[{bulk:52}]},
      {t:'card', id:'dup', x:50, y:44, face:'down', w:11, z:5},
      {t:'note', id:'b', text:'red-backed duplicate — on top', x:50, y:24},
      {t:'label', id:'k', text:'the odd-backed card, on top', x:50, y:88}
    ]},
  { caption: "Force its blue-backed mate — the <b>Hindu force (No. 3)</b> is perfect here. They stop at the A♠, look at it, and take it as their card. It is, in every way that matters to them, an ordinary blue-backed card.",
    beats: ["hindu shuffle"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:51}]},
      {t:'card', id:'mate', rank:'A', suit:'♠', x:50, y:32, face:'up', w:12, z:5},
      {t:'hi', id:'mate', on:true},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'their card — the blue-backed mate', x:50, y:88}
    ]},
  { caption: "They look at their card; it goes back in the middle — and you control it to the <b>top</b>, ending directly under the duplicate (Exposed view: the deck's top two cards are the pair).",
    beats: ["control"],
    actions: [
      {t:'hi', id:'mate', on:false},
      {t:'flip', id:'mate', to:'down'},
      {t:'move', id:'mate', x:50, y:50},
      {t:'remove', id:'mate'},
      {t:'repacket', id:'deck', cards:[{bulk:51},{rank:'A', suit:'♠', face:'down'}]},
      {t:'label', id:'k', text:'controlled to the top — under the duplicate', x:50, y:88}
    ]},
  { caption: "Double lift: turn over “their card” — <b>its back is red</b>. It changed colour inside the deck. The first phase makes them gasp; don't rush the second.",
    beats: ["the double"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:51}]},
      {t:'move', id:'dup', x:47, y:35, z:4},
      {t:'card', id:'dbl', rank:'A', suit:'♠', x:52, y:39, face:'up', w:12, z:5},
      {t:'hi', id:'dbl', on:true},
      {t:'note', id:'r', text:'the double — its back is red', x:52, y:20},
      {t:'label', id:'k', text:'their card — with a red back', x:50, y:88}
    ]},
  { caption: "Turn the double back over and deal the top card — the <b>red-backed one</b> — face-down to the table. Their blue-backed card is secretly back on top of the deck (Exposed view), exactly where the second phase needs it.",
    beats: ["deal it off"],
    actions: [
      {t:'remove', id:'dbl'},
      {t:'repacket', id:'deck', cards:[{bulk:51},{rank:'A', suit:'♠', face:'down'}]},
      {t:'move', id:'dup', x:74, y:50, z:5},
      {t:'unnote', id:'r'},
      {t:'label', id:'k', text:'the red-backed card, tabled', x:50, y:88}
    ]},
  { caption: "A second card is selected — <b>any card</b> — and lost in the deck. Control it to the top. (Exposed view tracks it positionally; the article names no card.)",
    beats: ["second selection"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:50},{rank:'A', suit:'♠', face:'down'}]},
      {t:'card', id:'sel2', x:28, y:36, face:'up', w:11, z:5},
      {t:'hi', id:'sel2', on:true},
      {t:'flip', id:'sel2', to:'down'},
      {t:'hi', id:'sel2', on:false},
      {t:'move', id:'sel2', x:50, y:43, z:6},
      {t:'label', id:'k', text:'second selection — controlled to the top', x:50, y:88}
    ]},
  { caption: "Pick up the tabled red-backed card, place it on the deck, and in the same motion <b>switch it for the top card</b> — your top change (No. 16) earns its keep here. Turn it over: <b>the red-backed card is now their second selection</b>. Two miracles, one odd-backed card.",
    climax: true,
    actions: [
      {t:'move', id:'dup', x:50, y:34, z:6},
      {t:'move', id:'dup', x:50, y:46, z:3},
      {t:'move', id:'sel2', x:50, y:28},
      {t:'flip', id:'sel2', to:'up'},
      {t:'hi', id:'sel2', on:true},
      {t:'scale', id:'sel2', s:1.08},
      {t:'label', id:'k', text:'the red-backed card — is their second selection', x:50, y:88}
    ]}
]};

ANIMS.t24 = { steps: [
  { caption: "The spectator shuffles, then cuts the deck into two roughly equal piles. They take one; you take the other. You each shuffle your own pile. The two cards that matter are declared from the start — read them in Exposed view.",
    beats: ["the duet"],
    actions: [
      {t:'packet', id:'pT', x:32, y:52, w:13, cards:[{bulk:12},{rank:'9', suit:'♣', face:'down'},{bulk:13}]},
      {t:'packet', id:'pY', x:68, y:52, w:13, cards:[{rank:'Q', suit:'♥', face:'down'},{bulk:24},{rank:'4', suit:'♦', face:'down'}]},
      {t:'move', id:'pT', x:30, y:52},
      {t:'move', id:'pY', x:70, y:52},
      {t:'label', id:'k', text:'two piles · you take one each', x:50, y:88}
    ]},
  { caption: "'Take any card from your pile, look at it, memorize it. I'll do the same.' While they study theirs, glimpse and remember the bottom card of your pile — the Q♥ (Exposed view names it). That is your key. Your own 'selection' is theatre; you don't need it.",
    beats: ["glimpse"],
    actions: [
      {t:'repacket', id:'pT', cards:[{bulk:12},{bulk:13}]},
      {t:'card', id:'sel', rank:'9', suit:'♣', x:30, y:30, face:'up', w:11},
      {t:'repacket', id:'pY', cards:[{rank:'Q', suit:'♥', face:'down'},{bulk:24}]},
      {t:'card', id:'mine', rank:'4', suit:'♦', x:70, y:30, face:'up', w:11},
      {t:'hi', id:'pY', on:true},
      {t:'label', id:'k', text:'their card: theirs to remember · your key: Q♥', x:50, y:88}
    ]},
  { caption: "'Place your card face-down on top of your pile. I'll do the same.'",
    beats: ["on top"],
    actions: [
      {t:'hi', id:'pY', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'remove', id:'sel'},
      {t:'repacket', id:'pT', cards:[{bulk:12},{bulk:13},{rank:'9', suit:'♣', face:'down'}]},
      {t:'flip', id:'mine', to:'down'},
      {t:'remove', id:'mine'},
      {t:'repacket', id:'pY', cards:[{rank:'Q', suit:'♥', face:'down'},{bulk:24},{rank:'4', suit:'♦', face:'down'}]},
      {t:'label', id:'k', text:'selections ride on top', x:50, y:88}
    ]},
  { caption: "Place your pile on top of their pile. Your glimpsed key card — the bottom card of your pile — is now sitting directly above their selection. Exposed view shows the pair touching: Q♥ over 9♣.",
    beats: ["key card"],
    actions: [
      {t:'remove', id:'pY'},
      {t:'repacket', id:'pT', cards:[{bulk:25},{rank:'9', suit:'♣', face:'down'},{rank:'Q', suit:'♥', face:'down'},{bulk:24},{rank:'4', suit:'♦', face:'down'}]},
      {t:'move', id:'pT', x:50, y:52},
      {t:'label', id:'k', text:'key Q♥ directly above their 9♣', x:50, y:88}
    ]},
  { caption: "They cut the combined deck, burying the pair. Wherever the cut falls, the pair travels together — a cut rotates the deck; it never separates neighbours.",
    beats: ["the cut"],
    actions: [
      {t:'repacket', id:'pT', cards:[{rank:'4', suit:'♦', face:'down'},{bulk:20},{bulk:25},{rank:'9', suit:'♣', face:'down'},{rank:'Q', suit:'♥', face:'down'},{bulk:4}]},
      {t:'label', id:'k', text:'cut · the pair stays together', x:50, y:88}
    ]},
  { caption: "'Find your card.' They search their memory; you search for your key card — and the card right beneath it is theirs. Pull it out as 'your' card. Turn them over together: they match.",
    climax: true,
    actions: [
      {t:'remove', id:'pT'},
      {t:'spread', x:6, y:58, count:12, dx:7, face:'down', w:8.5, prefix:'bk'},
      {t:'card', id:'key', rank:'Q', suit:'♥', x:44, y:38, face:'up', w:11},
      {t:'card', id:'found', rank:'9', suit:'♣', x:57, y:38, face:'up', w:11},
      {t:'hi', id:'key', on:true},
      {t:'hi', id:'found', on:true},
      {t:'label', id:'k', text:'beneath the key: their card', x:50, y:88}
    ]}
]};

ANIMS.t25 = { steps: [
  { caption: "Their card is <b>selected, signed, and controlled to the top</b>. What follows is the palm's graduation ceremony.",
    beats: ["control to top"],
    actions: [
      {t:'deck', id:'d', x:42, y:53, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:42, y:42, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed A♠ — on top', x:50, y:88}
    ]},
  { caption: "<b>Palm the top card</b> (No. 15) under cover of squaring the deck — the hand that leaves looks empty.",
    beats: ["palm"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'palm', id:'sel'},
      {t:'hand', id:'rh', x:58, y:36, side:'right', on:true},
      {t:'move', id:'sel', x:60, y:34, z:5},
      {t:'scale', id:'sel', s:0.9},
      {t:'move', id:'d', x:44, y:53},
      {t:'label', id:'k', text:'palmed under the square-up', x:50, y:88}
    ]},
  { caption: "Hand them the deck: <b>\"Hold this. Your card is gone.\"</b> The more ordinary the moments around the palm, the more impossible the middle feels.",
    actions: [
      {t:'move', id:'d', x:26, y:56},
      {t:'label', id:'k', text:'they hold the deck', x:50, y:88}
    ]},
  { caption: "Reach into your pocket — <b>or better, have them reach in</b>. The card loads as the hand goes in.",
    beats: ["pocket load"],
    actions: [
      {t:'move', id:'sel', x:84, y:60},
      {t:'hand', id:'rh', x:86, y:56, side:'right', on:true},
      {t:'label', id:'k', text:'into the pocket', x:50, y:88}
    ]},
  { caption: "Produce their <b>signed card</b> from the pocket, as if it had been there all along. Clean, impossible, done.",
    climax: true,
    actions: [
      {t:'unpalm', id:'sel'},
      {t:'move', id:'sel', x:66, y:42},
      {t:'scale', id:'sel', s:1.08},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'signed A♠ — from the pocket', x:50, y:88}
    ]}
]};
ANIMS.t26 = { steps: [
  { caption: "Stack the deck: suits cycle Clubs, Hearts, Spades, Diamonds — <b>CHaSeD</b> — and each value runs 3 higher than the last: A♣, 4♥, 7♠, 10♦, K♣, 3♥…",
    beats: ["the sequence"],
    actions: [
      {t:'spread', x:10, y:38, count:6, dx:13, face:'up', w:9.5, prefix:'r', cards:[{id:'r0', rank:'A', suit:'♣'},{id:'r1', rank:'4', suit:'♥'},{id:'r2', rank:'7', suit:'♠'},{id:'r3', rank:'10', suit:'♦'},{id:'r4', rank:'K', suit:'♣'},{id:'r5', rank:'3', suit:'♥'}]},
      {t:'hi', id:'r0', on:true},
      {t:'hi', id:'r1', on:true},
      {t:'label', id:'k', text:'A♣ → 4♥ → 7♠ → 10♦ → K♣ → 3♥ …', x:50, y:88}
    ]},
  { caption: "Because the sequence loops back on itself, the deck can be cut as many times as anyone likes. It never breaks — the order just rotates. The bottom pair survives every cut: the 7♠, with the 10♦ directly above it.",
    beats: ["the loop"],
    actions: [
      {t:'hi', id:'r0', on:false},
      {t:'hi', id:'r1', on:false},
      {t:'remove', id:'r0'},
      {t:'remove', id:'r1'},
      {t:'remove', id:'r2'},
      {t:'remove', id:'r3'},
      {t:'remove', id:'r4'},
      {t:'remove', id:'r5'},
      {t:'packet', id:'p1', x:36, y:50, n:26},
      {t:'packet', id:'p2', x:64, y:50, n:26},
      {t:'card', id:'bot', rank:'7', suit:'♠', x:36, y:66, face:'down', w:10, secret:{rank:'7', suit:'♠'}},
      {t:'card', id:'nxt', rank:'10', suit:'♦', x:36, y:60, face:'down', w:10, secret:{rank:'10', suit:'♦'}},
      {t:'label', id:'k', text:'cut freely · the order survives', x:50, y:88}
    ]},
  { caption: "Glimpse one card — the bottom is easiest. Say it's the 7♠. Add 3 to the value (7→10) and step the suit one place forward in CHaSeD (♠→♦): the next card is the 10♦. Name it — before it is turned.",
    climax: true,
    actions: [
      {t:'remove', id:'p1'},
      {t:'remove', id:'p2'},
      {t:'deck', id:'d', x:54, y:46, n:50},
      {t:'move', id:'bot', x:30, y:58},
      {t:'move', id:'nxt', x:30, y:46},
      {t:'flip', id:'bot', to:'up'},
      {t:'note', id:'b', text:'glimpsed: 7♠ · +3 value · next suit', x:68, y:64},
      {t:'flip', id:'nxt', to:'up'},
      {t:'hi', id:'nxt', on:true},
      {t:'label', id:'k', text:'7♠ → 10♦ · you knew it first', x:50, y:88}
    ]},
  { caption: "Run it the other way to name the card above, estimate how many cards were cut off, or spell to any named card. The work is all in the setup — once the stack is memorized, every effect it powers looks like genuine mind-reading.",
    beats: ["position math"],
    actions: [
      {t:'hi', id:'nxt', on:false},
      {t:'unnote', id:'b'},
      {t:'flip', id:'bot', to:'down'},
      {t:'flip', id:'nxt', to:'down'},
      {t:'move', id:'bot', x:54, y:60, z:1},
      {t:'move', id:'nxt', x:54, y:58, z:1},
      {t:'label', id:'k', text:'the stack does the work', x:50, y:88}
    ]}
]};
ANIMS.t27 = { steps: [
  { caption: "Setup, beforehand: the deck is <b>separated by colour — all 26 reds on top, all 26 blacks beneath</b> (Exposed view marks the boundary: A♥ rides the top, A♠ the bottom). A little casual shuffling patter covers it.",
    beats: ["colour separation"],
    actions: [
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{rank:'A', suit:'♠', face:'down'},{bulk:25},{bulk:25},{rank:'A', suit:'♥', face:'down'}]},
      {t:'note', id:'b', text:'reds on top · blacks beneath', x:50, y:24},
      {t:'label', id:'k', text:'the deck is stacked by colour', x:50, y:88}
    ]},
  { caption: "They deal the cards face-down by gut feeling — and your only real job is the instruction: <b>“Deal about half here, then the rest here.”</b> They finish this pile before starting the other. These first 26 cards are the red half — every one of them (Exposed).",
    beats: ["spectator deals"],
    actions: [
      {t:'repacket', id:'deck', cards:[{rank:'A', suit:'♠', face:'down'},{bulk:25}]},
      {t:'packet', id:'p1', x:28, y:52, w:12, cards:[{bulk:25},{rank:'A', suit:'♥', face:'down'}]},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'first pile dealt — all 26 reds', x:50, y:88}
    ]},
  { caption: "Now the rest go to the second pile. They still believe they are sorting by intuition — but the deck ran out of reds exactly when the piles changed. <b>The last 26 cards are all black.</b>",
    beats: ["second pile"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'p2', x:72, y:52, w:12, cards:[{rank:'A', suit:'♠', face:'down'},{bulk:25}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'second pile — all 26 blacks', x:50, y:88}
    ]},
  { caption: "Spread both piles: <b>one is all red, the other all black</b>. They sorted them without looking, and you never touched the deck. Take your bow.",
    climax: true,
    actions: [
      {t:'remove', id:'p1'},
      {t:'remove', id:'p2'},
      {t:'spread', x:5, y:26, dx:3.4, w:7, face:'up', prefix:'r', cards:[{rank:'A', suit:'♥'},{rank:'2', suit:'♥'},{rank:'3', suit:'♥'},{rank:'4', suit:'♥'},{rank:'5', suit:'♥'},{rank:'6', suit:'♥'},{rank:'7', suit:'♥'},{rank:'8', suit:'♥'},{rank:'9', suit:'♥'},{rank:'10', suit:'♥'},{rank:'J', suit:'♥'},{rank:'Q', suit:'♥'},{rank:'K', suit:'♥'},{rank:'A', suit:'♦'},{rank:'2', suit:'♦'},{rank:'3', suit:'♦'},{rank:'4', suit:'♦'},{rank:'5', suit:'♦'},{rank:'6', suit:'♦'},{rank:'7', suit:'♦'},{rank:'8', suit:'♦'},{rank:'9', suit:'♦'},{rank:'10', suit:'♦'},{rank:'J', suit:'♦'},{rank:'Q', suit:'♦'},{rank:'K', suit:'♦'}]},
      {t:'spread', x:5, y:58, dx:3.4, w:7, face:'up', prefix:'b', cards:[{rank:'A', suit:'♠'},{rank:'2', suit:'♠'},{rank:'3', suit:'♠'},{rank:'4', suit:'♠'},{rank:'5', suit:'♠'},{rank:'6', suit:'♠'},{rank:'7', suit:'♠'},{rank:'8', suit:'♠'},{rank:'9', suit:'♠'},{rank:'10', suit:'♠'},{rank:'J', suit:'♠'},{rank:'Q', suit:'♠'},{rank:'K', suit:'♠'},{rank:'A', suit:'♣'},{rank:'2', suit:'♣'},{rank:'3', suit:'♣'},{rank:'4', suit:'♣'},{rank:'5', suit:'♣'},{rank:'6', suit:'♣'},{rank:'7', suit:'♣'},{rank:'8', suit:'♣'},{rank:'9', suit:'♣'},{rank:'10', suit:'♣'},{rank:'J', suit:'♣'},{rank:'Q', suit:'♣'},{rank:'K', suit:'♣'}]},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'perfect colour separation', x:50, y:88}
    ]}
]};
ANIMS.t28 = { steps: [
  { caption: "Five cards, drawn at random. Among any five, <b>two must share a suit</b> — here, the two spades. That pigeonhole fact is the whole trick.",
    beats: ["five cards"],
    actions: [
      {t:'spread', x:14, y:46, dx:15, w:11, face:'up', prefix:'fc', cards:[{id:'as', rank:'A', suit:'♠'},{id:'qs', rank:'Q', suit:'♠'},{id:'h7', rank:'7', suit:'♥'},{id:'kd', rank:'K', suit:'♦'},{id:'c3', rank:'3', suit:'♣'}]},
      {t:'label', id:'k', text:'two spades among five', x:50, y:88}
    ]},
  { caption: "Your partner leaves the room. <b>Hide one of the pair</b> — the A♠ — and keep its mate to carry the code.",
    beats: ["hide one"],
    actions: [
      {t:'hi', id:'as', on:true},
      {t:'hi', id:'qs', on:true},
      {t:'flip', id:'as', to:'down'},
      {t:'move', id:'as', x:50, y:18},
      {t:'label', id:'k', text:'hidden: the A♠', x:50, y:88}
    ]},
  { caption: "Lay the mate face-up <b>first</b>: the Q♠. It silently names the suit — <b>spades</b>.",
    beats: ["the code"],
    actions: [
      {t:'hi', id:'as', on:false},
      {t:'hi', id:'qs', on:false},
      {t:'move', id:'qs', x:20, y:54},
      {t:'label', id:'k', text:'first card = the suit', x:50, y:88}
    ]},
  { caption: "Arrange the remaining three left to right: <b>low, high, medium</b> — 3♣, K♦, 7♥. The six possible orders encode the numbers <b>1 through 6</b>; this one says <b>two</b>.",
    beats: ["the code"],
    actions: [
      {t:'move', id:'c3', x:38, y:54},
      {t:'move', id:'kd', x:56, y:54},
      {t:'move', id:'h7', x:74, y:54},
      {t:'note', id:'b', text:'low · high · medium = +2', x:50, y:74},
      {t:'label', id:'k', text:'the order encodes +2', x:50, y:88}
    ]},
  { caption: "Your partner walks in, reads <b>spades</b> off the first card and <b>two</b> off the order, counts Q → K → <b>A</b> around the suit — and names the hidden card cold. No signals, no stooges, no marked cards.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'flip', id:'as', to:'up'},
      {t:'move', id:'as', x:50, y:30},
      {t:'scale', id:'as', s:1.15},
      {t:'hi', id:'as', on:true},
      {t:'label', id:'k', text:'named: the A♠', x:50, y:88}
    ]}
]};
ANIMS.t29 = { steps: [
  { caption: "Ten cards, secretly stacked so a strict alternating deal hands you a <b>straight flush</b> and them four kings. The stack is the whole trick — Exposed view can peek at its ends.",
    beats: ["stacked ten"],
    actions: [
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[
        {rank:'9', suit:'♥', face:'down'}, {rank:'Q', suit:'♦', face:'down'},
        {rank:'8', suit:'♥', face:'down'}, {rank:'K', suit:'♣', face:'down'},
        {rank:'7', suit:'♥', face:'down'}, {rank:'K', suit:'♦', face:'down'},
        {rank:'6', suit:'♥', face:'down'}, {rank:'K', suit:'♥', face:'down'},
        {rank:'5', suit:'♥', face:'down'}, {rank:'K', suit:'♠', face:'down'} ]},
      {t:'hand', id:'rh', x:63, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'ten-card stack — the deal is already decided', x:50, y:88}
    ]},
  { caption: "Deal the first two yourself, one to each hand. That locks who gets the odd positions and who gets the even ones.",
    beats: ["deal · choice"],
    actions: [
      {t:'repacket', id:'stk', cards:[
        {rank:'9', suit:'♥', face:'down'}, {rank:'Q', suit:'♦', face:'down'},
        {rank:'8', suit:'♥', face:'down'}, {rank:'K', suit:'♣', face:'down'},
        {rank:'7', suit:'♥', face:'down'}, {rank:'K', suit:'♦', face:'down'},
        {rank:'6', suit:'♥', face:'down'}, {rank:'K', suit:'♥', face:'down'} ]},
      {t:'card', id:'s1', rank:'K', suit:'♠', x:20, y:34, face:'down', w:11, secret:{rank:'K', suit:'♠'}},
      {t:'card', id:'p1', rank:'5', suit:'♥', x:20, y:66, face:'down', w:11, secret:{rank:'5', suit:'♥'}},
      {t:'label', id:'k', text:'you deal the first two — the alternation is locked', x:50, y:88}
    ]},
  { caption: "Now let the spectator deal the rest, even face-up. It changes nothing: the hands were fixed before the deal began.",
    beats: ["their deal"],
    actions: [
      {t:'remove', id:'stk'},
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'s2', rank:'K', suit:'♥', x:33, y:34, face:'up', w:11},
      {t:'card', id:'s3', rank:'K', suit:'♦', x:46, y:34, face:'up', w:11},
      {t:'card', id:'s4', rank:'K', suit:'♣', x:59, y:34, face:'up', w:11},
      {t:'card', id:'s5', rank:'Q', suit:'♦', x:72, y:34, face:'up', w:11},
      {t:'card', id:'p2', rank:'6', suit:'♥', x:33, y:66, face:'up', w:11},
      {t:'card', id:'p3', rank:'7', suit:'♥', x:46, y:66, face:'up', w:11},
      {t:'card', id:'p4', rank:'8', suit:'♥', x:59, y:66, face:'up', w:11},
      {t:'card', id:'p5', rank:'9', suit:'♥', x:72, y:66, face:'up', w:11},
      {t:'label', id:'k', text:'their row (top) · your row (bottom)', x:50, y:88}
    ]},
  { caption: "They turn over four kings. You turn over a straight flush. It was never in the dealing — it was in the stack.",
    beats: ["the reveal"], climax: true,
    actions: [
      {t:'flip', id:'s1', to:'up'},
      {t:'flip', id:'p1', to:'up'},
      {t:'hi', id:'s1', on:true},
      {t:'hi', id:'p1', on:true},
      {t:'label', id:'k1', text:'four kings', x:46, y:14},
      {t:'label', id:'k', text:'straight flush — you win', x:50, y:88}
    ]}
]};
ANIMS.t30 = { steps: [
  { caption: "The Clock Trick. Secretly arrange <b>thirteen cards, Ace through King, in order</b> on top of the deck. Exposed view shows the stack; to the audience it's a normal deck.",
    beats: ["the stack"],
    actions: [
      {t:'packet', id:'d', x:50, y:54, w:13, cards:[{bulk:39},{rank:'K', suit:'♠', face:'down'},{rank:'Q', suit:'♠', face:'down'},{rank:'J', suit:'♠', face:'down'},{rank:'10', suit:'♠', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'7', suit:'♠', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'5', suit:'♠', face:'down'},{rank:'4', suit:'♠', face:'down'},{rank:'3', suit:'♠', face:'down'},{rank:'2', suit:'♠', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'note', id:'b', text:'A→K secretly stacked on top (Exposed)', x:50, y:26},
      {t:'label', id:'k', text:'thirteen cards · secretly in order', x:50, y:88}
    ]},
  { caption: "The spectator deals twelve of them face-down in a circle, like the hours of a clock, starting at 1 o'clock. <b>Position N receives the Nth card</b> of the Ace-to-Queen run — they just don't know it. The thirteenth card, the King, stays in your hand.",
    beats: ["clock face"],
    actions: [
      {t:'remove', id:'d'},
      {t:'fan', x:50, y:52, count:12, spread:300, startDeg:-90, radius:16, w:8, face:'down', prefix:'h', cards:[{id:'h1', rank:'A', suit:'♠'},{id:'h2', rank:'2', suit:'♠'},{id:'h3', rank:'3', suit:'♠'},{id:'h4', rank:'4', suit:'♠'},{id:'h5', rank:'5', suit:'♠'},{id:'h6', rank:'6', suit:'♠'},{id:'h7', rank:'7', suit:'♠'},{id:'h8', rank:'8', suit:'♠'},{id:'h9', rank:'9', suit:'♠'},{id:'h10', rank:'10', suit:'♠'},{id:'h11', rank:'J', suit:'♠'},{id:'h12', rank:'Q', suit:'♠'}]},
      {t:'card', id:'king', rank:'K', suit:'♠', x:50, y:52, face:'down', w:10, z:5, secret:{rank:'K', suit:'♠'}},
      {t:'packet', id:'rest', x:85, y:82, w:10, cards:[{bulk:39}]},
      {t:'hand', id:'rh', x:63, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'twelve hours · dealt face-down', x:50, y:88}
    ]},
  { caption: "Ask them to name <b>any hour from 1 to 12</b>. Say they name 7 o'clock.",
    beats: ["name an hour"],
    actions: [
      {t:'hi', id:'h7', on:true},
      {t:'note', id:'b', text:'their hour: 7', x:50, y:26},
      {t:'label', id:'k', text:'any hour — say, 7', x:50, y:88}
    ]},
  { caption: "Flip the card at 7 o'clock: <b>the Seven</b>. It always matches — position N holds the Nth card. Finish by revealing the thirteenth card: <b>the King</b>, watching over all twelve hours.",
    climax: true,
    actions: [
      {t:'flip', id:'h7', to:'up'},
      {t:'flip', id:'king', to:'up'},
      {t:'hi', id:'king', on:true},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'7 at seven · the King over all', x:50, y:88}
    ]}
]};
ANIMS.t31 = { steps: [
  { caption: "Miraskill. Beforehand, <b>four red cards are quietly pocketed</b>. What remains is 48 cards — and that's what the spectator will shuffle.",
    beats: ["the pocket"],
    actions: [
      {t:'packet', id:'deck', x:40, y:54, w:13, cards:[{bulk:48}]},
      {t:'packet', id:'pocket', x:80, y:28, w:10, cards:[{rank:'3', suit:'♥', face:'down'},{rank:'7', suit:'♥', face:'down'},{rank:'9', suit:'♦', face:'down'},{rank:'J', suit:'♦', face:'down'}]},
      {t:'note', id:'b', text:'four reds short — the deck is 48, not 52 (Exposed)', x:50, y:18},
      {t:'label', id:'k', text:'four red cards · pocketed', x:50, y:88}
    ]},
  { caption: "The spectator genuinely shuffles the 48. Write the prediction — <b>\"your pile will come up four cards short\"</b> — and set it face-down where everyone can see it.",
    beats: ["free shuffle"],
    actions: [
      {t:'card', id:'pred', x:50, y:22, face:'down', w:12},
      {t:'hand', id:'rh', x:55, y:44, side:'right', on:true},
      {t:'note', id:'b', text:'they shuffle the 48 — genuinely', x:50, y:12},
      {t:'label', id:'k', text:'prediction written · in view', x:50, y:88}
    ]},
  { caption: "They deal the deck into face-up pairs: <b>red-red pairs</b> go in a pile in front of them, <b>black-black pairs</b> in a pile in front of you, mixed pairs are discarded. Mixed pairs eat equal numbers of reds and blacks — so the two piles would always come out even, except…",
    beats: ["pair sort"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'theirs', x:26, y:56, w:12, cards:[{bulk:16}]},
      {t:'packet', id:'yours', x:50, y:56, w:12, cards:[{bulk:20}]},
      {t:'packet', id:'disc', x:74, y:58, w:12, cards:[{bulk:12}]},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'red pairs theirs · black pairs yours · mixed discarded', x:50, y:88}
    ]},
  { caption: "Count the piles: theirs has 16, yours has 20 — <b>exactly four short</b>, word for word as predicted. The four missing reds are the whole secret.",
    beats: ["prediction hits"],
    actions: [
      {t:'hi', id:'theirs', on:true},
      {t:'hi', id:'yours', on:true},
      {t:'note', id:'b', text:'theirs 16 · yours 20 — four short, as predicted', x:50, y:26},
      {t:'label', id:'k', text:'prediction = the count', x:50, y:88}
    ]},
  { caption: "Mid-trick, under cover of the counting, <b>slip the four palmed cards back into the discards</b>. The deck is whole again — 52 — and nobody saw them leave or return.",
    beats: ["the restore"],
    actions: [
      {t:'hi', id:'theirs', on:false},
      {t:'hi', id:'yours', on:false},
      {t:'remove', id:'pocket'},
      {t:'repacket', id:'disc', cards:[{bulk:12},{rank:'3', suit:'♥', face:'down'},{rank:'7', suit:'♥', face:'down'},{rank:'9', suit:'♦', face:'down'},{rank:'J', suit:'♦', face:'down'}]},
      {t:'note', id:'b', text:'the four reds return to the discards (Exposed)', x:50, y:26},
      {t:'label', id:'k', text:'deck whole again — 52', x:50, y:88}
    ]},
  { caption: "Gather everything and deal again. Round two predicts — correctly — that <b>both piles match this time</b>. A pair-separation prophecy, Stewart James, 1935: the prediction does the entertaining; the arithmetic does the work.",
    climax: true,
    actions: [
      {t:'remove', id:'theirs'},
      {t:'remove', id:'yours'},
      {t:'remove', id:'disc'},
      {t:'packet', id:'theirs2', x:32, y:56, w:12, cards:[{bulk:26}]},
      {t:'packet', id:'yours2', x:68, y:56, w:12, cards:[{bulk:26}]},
      {t:'note', id:'b', text:'round two — dead even', x:50, y:26},
      {t:'label', id:'k', text:'round two — the piles match', x:50, y:88}
    ]}
]};
ANIMS.t32 = { steps: [
  { caption: "The force card — the A♠ — sits on <b>top</b> of the deck, and the deck goes on the table.",
    beats: ["force on top"],
    actions: [
      {t:'packet', id:'deck', x:50, y:54, w:13, cards:[{bulk:51},{rank:'A', suit:'♠', face:'down'}]},
      {t:'label', id:'k', text:'force card on top', x:50, y:88}
    ]},
  { caption: "They cut wherever they want: the <b>top portion</b> lifts off and is set beside the rest. The A♠ rides on top of their portion — it was the deck's top card.",
    beats: ["their cut"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'theirs', x:34, y:50, w:13, cards:[{bulk:25},{rank:'A', suit:'♠', face:'down'}]},
      {t:'packet', id:'rest', x:66, y:50, w:13, cards:[{bulk:26}]},
      {t:'hand', id:'rh', x:76, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'their free cut', x:50, y:88}
    ]},
  { caption: "Take the remaining bottom portion and lay it <b>crosswise</b> on top of their packet — \"marking the exact spot they cut to.\"",
    beats: ["cross"],
    actions: [
      {t:'move', id:'rest', x:34, y:50},
      {t:'rot', id:'rest', deg:90},
      {t:'label', id:'k', text:'the cross marks the spot', x:50, y:88}
    ]},
  { caption: "<b>Time misdirection</b>: chat for a beat, so the cross reads as a placeholder and the order of the packets fades from memory. The pause is the move — rushing makes the cross look like a force.",
    beats: ["time misdirection"],
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'let a beat pass', x:50, y:88}
    ]},
  { caption: "Lift the crosswise packet away and have them take the <b>top card of the lower packet</b>: the original top card of the deck — your force. Every step felt like their free choice.",
    beats: ["the force"], climax: true,
    actions: [
      {t:'move', id:'rest', x:70, y:36},
      {t:'rot', id:'rest', deg:0},
      {t:'repacket', id:'theirs', cards:[{bulk:25}]},
      {t:'card', id:'fc', rank:'A', suit:'♠', x:34, y:42, face:'down', w:11, z:5, secret:{rank:'A', suit:'♠'}},
      {t:'flip', id:'fc', to:'up'},
      {t:'hi', id:'fc', on:true},
      {t:'label', id:'k', text:'the card they cut to: A♠', x:50, y:88}
    ]}
]};
ANIMS.t33 = { steps: [
  { caption: "Slip Force. The force card starts <b>on top of the deck</b> — tracked in Exposed view. Everything that follows is just dealing.",
    beats: ["force"],
    actions: [
      {t:'packet', id:'d', x:44, y:54, w:13, cards:[{bulk:51}]},
      {t:'card', id:'force', x:44, y:47, face:'down', w:11, z:4, ghost:true},
      {t:'hand', id:'lh', x:34, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:55, y:45, side:'right', on:true},
      {t:'label', id:'k', text:'force card on top', x:50, y:88}
    ]},
  { caption: "Deal a pile, and let them stop you anywhere. On every deal, <b>push the top card forward</b> with the thumb, as if you're about to take it…",
    beats: ["slip force"],
    actions: [
      {t:'move', id:'force', x:51, y:49, z:5},
      {t:'label', id:'k', text:'pushed forward, as if to deal it', x:50, y:88}
    ]},
  { caption: "…then at the last moment <b>slip it back flush</b> and take the next card instead. The top stock never leaves the deck, and every deal looks identical.",
    beats: ["slip force"],
    actions: [
      {t:'move', id:'force', x:44, y:47, z:4},
      {t:'repacket', id:'d', cards:[{bulk:49}]},
      {t:'packet', id:'pile', x:68, y:56, w:11, cards:[{bulk:2}]},
      {t:'note', id:'b', text:'two cards dealt — the force card never left (Exposed)', x:50, y:26},
      {t:'label', id:'k', text:'slipped back · next card dealt', x:50, y:88}
    ]},
  { caption: "They say \"stop.\" This time, deal the top card honestly — <b>it's the force card</b>. The classic routine deals all four aces this way: every \"freely stopped-at\" card is an ace.",
    climax: true,
    actions: [
      {t:'reveal', id:'force'},
      {t:'move', id:'force', x:68, y:44, z:5},
      {t:'flip', id:'force', to:'up'},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'their stop — your force', x:50, y:88}
    ]}
]};
ANIMS.t34 = { steps: [
  { caption: "Hold the deck <b>face-down</b> in one hand, beveled slightly to the side; the other thumb rests on the top edge.",
    beats: ["fan grip"],
    actions: [
      {t:'deck', id:'d', x:46, y:54, n:52},
      {t:'hand', id:'lh', x:35, y:57, side:'left', on:true},
      {t:'hand', id:'rh', x:56, y:44, side:'right', on:true},
      {t:'note', id:'b', text:'thumb on the top edge · middle finger is the anchor', x:48, y:26},
      {t:'label', id:'k', text:'beveled · thumb set', x:50, y:88}
    ]},
  { caption: "Sweep the thumb in a <b>smooth, steady arc</b> — the cards spread into a semicircle, pivoting around the middle finger of the holding hand.",
    beats: ["thumb fan"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'d'},
      {t:'fan', x:50, y:54, count:52, spread:150, startDeg:-75, radius:15, w:6.5, face:'down', prefix:'f'},
      {t:'label', id:'k', text:'the arc', x:50, y:88}
    ]},
  { caption: "<b>Even pressure is the whole skill</b> — too hard and the cards clump; too light and the fan collapses. A fresh deck fans far easier; learn it on new cards.",
    beats: ["even pressure"],
    actions: [
      {t:'label', id:'k', text:'even · open', x:50, y:88}
    ]},
  { caption: "Close it <b>one-handed</b> — squeeze the fan shut into a squared deck. That's the flourish's natural finish.",
    climax: true,
    actions: [
      {t:'remove', id:'f0'},
      {t:'remove', id:'f1'},
      {t:'remove', id:'f2'},
      {t:'remove', id:'f3'},
      {t:'remove', id:'f4'},
      {t:'remove', id:'f5'},
      {t:'remove', id:'f6'},
      {t:'remove', id:'f7'},
      {t:'remove', id:'f8'},
      {t:'remove', id:'f9'},
      {t:'remove', id:'f10'},
      {t:'remove', id:'f11'},
      {t:'remove', id:'f12'},
      {t:'remove', id:'f13'},
      {t:'remove', id:'f14'},
      {t:'remove', id:'f15'},
      {t:'remove', id:'f16'},
      {t:'remove', id:'f17'},
      {t:'remove', id:'f18'},
      {t:'remove', id:'f19'},
      {t:'remove', id:'f20'},
      {t:'remove', id:'f21'},
      {t:'remove', id:'f22'},
      {t:'remove', id:'f23'},
      {t:'remove', id:'f24'},
      {t:'remove', id:'f25'},
      {t:'remove', id:'f26'},
      {t:'remove', id:'f27'},
      {t:'remove', id:'f28'},
      {t:'remove', id:'f29'},
      {t:'remove', id:'f30'},
      {t:'remove', id:'f31'},
      {t:'remove', id:'f32'},
      {t:'remove', id:'f33'},
      {t:'remove', id:'f34'},
      {t:'remove', id:'f35'},
      {t:'remove', id:'f36'},
      {t:'remove', id:'f37'},
      {t:'remove', id:'f38'},
      {t:'remove', id:'f39'},
      {t:'remove', id:'f40'},
      {t:'remove', id:'f41'},
      {t:'remove', id:'f42'},
      {t:'remove', id:'f43'},
      {t:'remove', id:'f44'},
      {t:'remove', id:'f45'},
      {t:'remove', id:'f46'},
      {t:'remove', id:'f47'},
      {t:'remove', id:'f48'},
      {t:'remove', id:'f49'},
      {t:'remove', id:'f50'},
      {t:'remove', id:'f51'},
      {t:'deck', id:'d', x:46, y:54, n:52},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'closed one-handed', x:50, y:88}
    ]}
]};
ANIMS.t35 = { steps: [
  { caption: "The Dribble — cards cascading hand to hand in a waterfall. Hold the deck up in one hand, angled slightly downward, <b>thumb along the top edge</b>; the other hand waits below.",
    beats: ["overhead grip"],
    actions: [
      {t:'packet', id:'d', x:50, y:28, w:13, cards:[{bulk:52}]},
      {t:'hand', id:'rh', x:58, y:20, side:'right', on:true},
      {t:'hand', id:'lh', x:47, y:71, side:'left', on:true},
      {t:'label', id:'k', text:'hold from above · catch below', x:50, y:88}
    ]},
  { caption: "Ease off the thumb pressure <b>just enough</b> that cards escape one by one. The skill is constant, light pressure: squeeze and you get bursts; relax too far and clumps drop.",
    beats: ["even release"],
    actions: [
      {t:'note', id:'b', text:'constant, light pressure', x:72, y:40},
      {t:'label', id:'k', text:'ease the thumb', x:50, y:88}
    ]},
  { caption: "Cards fall in a <b>steady waterfall</b> into the waiting hand — the same controlled release as the card spring, pointed at the floor instead of across.",
    beats: ["even release"],
    actions: [
      {t:'repacket', id:'d', cards:[{bulk:20}]},
      {t:'spread', x:46, y:42, count:18, dx:0.3, dy:1.1, w:7, face:'down', prefix:'s'},
      {t:'packet', id:'catch', x:48, y:69, w:12, cards:[{bulk:14}]},
      {t:'label', id:'k', text:'dribbling', x:50, y:88}
    ]},
  { caption: "Last cards fall; catch cleanly and square. Once it's smooth, the dribble becomes <b>the engine for catches, productions, and a dozen other flourishes</b> — and it's a genuine mix.",
    climax: true,
    actions: [
      {t:'remove', id:'s0'},
      {t:'remove', id:'s1'},
      {t:'remove', id:'s2'},
      {t:'remove', id:'s3'},
      {t:'remove', id:'s4'},
      {t:'remove', id:'s5'},
      {t:'remove', id:'s6'},
      {t:'remove', id:'s7'},
      {t:'remove', id:'s8'},
      {t:'remove', id:'s9'},
      {t:'remove', id:'s10'},
      {t:'remove', id:'s11'},
      {t:'remove', id:'s12'},
      {t:'remove', id:'s13'},
      {t:'remove', id:'s14'},
      {t:'remove', id:'s15'},
      {t:'remove', id:'s16'},
      {t:'remove', id:'s17'},
      {t:'remove', id:'d'},
      {t:'repacket', id:'catch', cards:[{bulk:52}]},
      {t:'move', id:'catch', x:50, y:52},
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'dribble complete', x:50, y:88}
    ]}
]};
ANIMS.t36 = { steps: [
  { caption: "Grip the deck with the <b>thumb along one long edge</b> and the fingers along the other, and bend it into a slight arch — the cards sit under tension.",
    beats: ["bow"],
    actions: [
      {t:'deck', id:'d', x:56, y:42, n:52},
      {t:'scale', id:'d', s:0.95},
      {t:'hand', id:'rh', x:63, y:35, side:'right', on:true, grip:'thumb + fingers on the long edges'},
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'arched · under tension', x:50, y:88}
    ]},
  { caption: "Aim at the waiting hand and let the thumb <b>release the cards gradually</b> — they shoot off in a tight, arcing stream.",
    beats: ["stream"],
    actions: [
      {t:'move', id:'d', x:43, y:55},
      {t:'scale', id:'d', s:1},
      {t:'label', id:'k', text:'tight stream', x:50, y:88}
    ]},
  { caption: "Start with your hands <b>close together</b> — distance comes only after the release feels smooth and even.",
    beats: ["catch"],
    actions: [
      {t:'label', id:'k', text:'start close', x:50, y:88}
    ]},
  { caption: "Control beats force — a <b>relaxed, steady thumb release</b> throws a longer, cleaner spring than muscling it. The spring and the dribble are the same skill in two directions.",
    climax: true,
    actions: [
      {t:'move', id:'d', x:59, y:39},
      {t:'label', id:'k', text:'longer · cleaner', x:50, y:88}
    ]}
]};
;
ANIMS.t37 = { steps: [
  { caption: "Sybil Cut — split the deck into <b>five packets</b>. Exposed view marks the deck's original top card and bottom card (the two ghosts): the whole lesson of this false cut is where they end up.",
    beats: ["split"],
    actions: [
      {t:'packet', id:'a', x:22, y:48, w:11, cards:[{bulk:10}]},
      {t:'packet', id:'b', x:38, y:42, w:11, cards:[{bulk:10}]},
      {t:'packet', id:'c', x:54, y:48, w:11, cards:[{bulk:10}]},
      {t:'packet', id:'d', x:70, y:42, w:11, cards:[{bulk:10}]},
      {t:'packet', id:'e', x:86, y:48, w:11, cards:[{bulk:10}]},
      {t:'card', id:'top', x:22, y:40, face:'down', w:10, z:5, ghost:true},
      {t:'card', id:'bot', x:86, y:56, face:'down', w:10, z:5, ghost:true},
      {t:'hand', id:'lh', x:32, y:60, side:'left', on:true},
      {t:'hand', id:'rh', x:62, y:34, side:'right', on:true},
      {t:'label', id:'k', text:'five packets — markers on the end cards', x:50, y:88}
    ]},
  { caption: "Pick the packets up, display them, <b>twirl them</b> between your fingers in a flowing sequence — it looks like the most thorough mixing imaginable. Learn it slowly, packet by packet; speed is the last thing you add.",
    beats: ["twirl"],
    actions: [
      {t:'move', id:'a', x:30, y:56},
      {t:'move', id:'top', x:30, y:48},
      {t:'move', id:'b', x:48, y:38},
      {t:'move', id:'c', x:64, y:56},
      {t:'move', id:'d', x:80, y:40},
      {t:'move', id:'e', x:88, y:52},
      {t:'move', id:'bot', x:88, y:60},
      {t:'rot', id:'a', deg:10},
      {t:'rot', id:'c', deg:-8},
      {t:'label', id:'k', text:'packets dancing — finish each transfer', x:50, y:88}
    ]},
  { caption: "The sequence is <b>constructed</b> so every packet lands back exactly where it started. The choreography is elaborate precisely so nobody suspects the simple truth underneath it.",
    beats: ["the construction"],
    actions: [
      {t:'move', id:'a', x:22, y:48},
      {t:'move', id:'top', x:22, y:40},
      {t:'move', id:'b', x:38, y:42},
      {t:'move', id:'c', x:54, y:48},
      {t:'move', id:'d', x:70, y:42},
      {t:'move', id:'e', x:86, y:48},
      {t:'move', id:'bot', x:86, y:56},
      {t:'rot', id:'a', deg:0},
      {t:'rot', id:'c', deg:0},
      {t:'label', id:'k', text:'every packet home again', x:50, y:88}
    ]},
  { caption: "Reassemble into one squared deck — and Exposed view delivers the verdict: the marked top card is still on top, the marked bottom card still on the bottom. <b>It's a false cut: pure choreography, and the deck order never changes.</b>",
    climax: true,
    actions: [
      {t:'remove', id:'a'},
      {t:'remove', id:'b'},
      {t:'remove', id:'c'},
      {t:'remove', id:'d'},
      {t:'remove', id:'e'},
      {t:'packet', id:'deck', x:50, y:51, w:13, cards:[{bulk:50}]},
      {t:'move', id:'top', x:50, y:43},
      {t:'move', id:'bot', x:50, y:59},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'squared · order intact — it was false', x:50, y:88}
    ]}
]};
;
ANIMS.t38 = { steps: [
  { caption: "Spelling Bee. Thirteen cards are arranged <b>3-8-7-A-Q-6-4-2-J-K-10-9-5</b> — the order is memorized with the story: \"387 years ago, a queen, 64 years old, had 2 sons, Jack and King. Jack worked until 10, but King worked a 9 to 5.\"",
    beats: ["the stack"],
    actions: [
      {t:'packet', id:'pkt', x:50, y:52, w:14, cards:[{rank:'5', suit:'♠', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'10', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'J', suit:'♠', face:'down'},{rank:'2', suit:'♠', face:'down'},{rank:'4', suit:'♠', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'Q', suit:'♠', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'7', suit:'♠', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'3', suit:'♠', face:'down'}]},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'note', id:'b', text:'the stack, top→bottom: 3-8-7-A-Q-6-4-2-J-K-10-9-5 (Exposed)', x:50, y:24},
      {t:'label', id:'k', text:'thirteen cards · story order', x:50, y:88}
    ]},
  { caption: "Hold the packet face-down. <b>A false shuffle at the start sells that it's mixed.</b> It isn't — the story order is untouched.",
    beats: ["false shuffle"],
    actions: [
      {t:'move', id:'pkt', x:55, y:47},
      {t:'note', id:'b', text:'false shuffle — the order never changes', x:50, y:24},
      {t:'label', id:'k', text:'looks mixed · is not', x:50, y:88}
    ]},
  { caption: "Spell the first rank: <b>A-C-E</b> — moving one card from top to bottom for each letter. When the last letter lands, the next card on top is the Ace. Set it aside.",
    beats: ["the spell"],
    actions: [
      {t:'repacket', id:'pkt', cards:[{rank:'7', suit:'♠', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'3', suit:'♠', face:'down'},{rank:'5', suit:'♠', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'10', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'J', suit:'♠', face:'down'},{rank:'2', suit:'♠', face:'down'},{rank:'4', suit:'♠', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'Q', suit:'♠', face:'down'}]},
      {t:'card', id:'hit1', rank:'A', suit:'♠', x:74, y:42, face:'up', w:11},
      {t:'label', id:'k', text:'A-C-E → the Ace', x:50, y:88}
    ]},
  { caption: "<b>T-W-O</b> — three more letters, three more cards to the bottom, and the Two is waiting on top. Every rank from Ace to King is spelled the same way.",
    beats: ["the spell"],
    actions: [
      {t:'repacket', id:'pkt', cards:[{rank:'4', suit:'♠', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'Q', suit:'♠', face:'down'},{rank:'7', suit:'♠', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'3', suit:'♠', face:'down'},{rank:'5', suit:'♠', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'10', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'J', suit:'♠', face:'down'}]},
      {t:'card', id:'hit2', rank:'2', suit:'♠', x:80, y:54, face:'up', w:11},
      {t:'label', id:'k', text:'T-W-O → the Two', x:50, y:88}
    ]},
  { caption: "Repeat through all thirteen — <b>every single one hits</b>. No sleight of hand anywhere: just positions and counts. Pace the spell; rushing turns a miracle into a procedure.",
    climax: true,
    actions: [
      {t:'hi', id:'hit1', on:true},
      {t:'hi', id:'hit2', on:true},
      {t:'note', id:'b', text:'no sleight of hand — just positions and counts', x:50, y:24},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'every one hits', x:50, y:88}
    ]}
]};

ANIMS.t39 = { steps: [
  { caption: "The spectator does almost everything: they shuffle the deck themselves. You barely touch it — <b>everything after the peek is arithmetic</b>.",
    beats: ["hands-off"],
    actions: [
      {t:'packet', id:'dk', x:50, y:56, w:13, cards:[{rank:'K', suit:'♠', face:'down'},{rank:'9', suit:'♦', face:'down'},{rank:'5', suit:'♣', face:'down'},{bulk:48}]},
      {t:'card', id:'sel', rank:'3', suit:'♥', x:50, y:47, face:'down', w:11, z:4, secret:{rank:'3', suit:'♥'}},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:64, y:58, side:'right', on:true},
      {t:'label', id:'k', text:'their deck — they shuffle', x:50, y:88}
    ]},
  { caption: "Behind your back they peek at the top card: the <b>3♥</b>. Its value — three — is the only number that matters.",
    beats: ["the peek"],
    actions: [
      {t:'flip', id:'sel', to:'up'},
      {t:'note', id:'b', text:'peeked card: 3♥ · value 3', x:50, y:24},
      {t:'label', id:'k', text:'peeked: a three', x:50, y:88}
    ]},
  { caption: "They move cards from the bottom of the deck to the top — <b>as many as their card's value</b>: three. Their card now sits fourth down, though nobody counted it there.",
    beats: ["the transfer"],
    actions: [
      {t:'flip', id:'sel', to:'down'},
      {t:'remove', id:'sel'},
      {t:'repacket', id:'dk', cards:[{bulk:48},{rank:'3', suit:'♥', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'9', suit:'♦', face:'down'},{rank:'5', suit:'♣', face:'down'}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'three cards: bottom to top', x:50, y:88}
    ]},
  { caption: "You take the deck back and deal one at a time, <b>counting 1, 2, 3… starting from the second card</b>. The first card whose value matches your count is theirs. No match yet.",
    beats: ["the count"],
    actions: [
      {t:'repacket', id:'dk', cards:[{bulk:48},{rank:'3', suit:'♥', face:'down'}]},
      {t:'card', id:'d1', rank:'5', suit:'♣', x:32, y:38, face:'up', w:10},
      {t:'card', id:'d2', rank:'9', suit:'♦', x:44, y:38, face:'up', w:10},
      {t:'card', id:'d3', rank:'K', suit:'♠', x:56, y:38, face:'up', w:10},
      {t:'note', id:'b', text:'count 1 → 9♦ · count 2 → K♠ · no match', x:50, y:24},
      {t:'label', id:'k', text:'dealing · counting', x:50, y:88}
    ]},
  { caption: "Count three — and the card dealt is the <b>3♥</b>. It started on top and three cards went above it, so it sat exactly where the count had to land. In Koran's presentation the spectator does even this — you just take the credit.",
    beats: ["the reveal"], climax: true,
    actions: [
      {t:'repacket', id:'dk', cards:[{bulk:48}]},
      {t:'card', id:'d4', rank:'3', suit:'♥', x:68, y:38, face:'up', w:11, z:4},
      {t:'hi', id:'d4', on:true},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'3 = 3 — their card', x:50, y:88}
    ]}
]};

ANIMS.t40 = { steps: [
  { caption: "Secretly stack the four aces together <b>ninth through twelfth from the top</b> — eight indifferent cards above them (Exposed view shows where they sit). Everything after this is done by the spectator.",
    beats: ["ace stack"],
    actions: [
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:40},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{bulk:8}]},
      {t:'note', id:'b', text:'aces at 9–12 from the top', x:50, y:24},
      {t:'label', id:'k', text:'the stack · eight cards over the aces', x:50, y:88}
    ]},
  { caption: "Hand the deck to a spectator. They deal <b>face down into four piles</b> in a row, one card at a time, pile to pile — the way you'd deal a hand of poker.",
    beats: ["the deal"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:40},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{bulk:4}]},
      {t:'packet', id:'p1', x:20, y:52, w:12, cards:[{bulk:1}]},
      {t:'packet', id:'p2', x:40, y:52, w:12, cards:[{bulk:1}]},
      {t:'packet', id:'p3', x:60, y:52, w:12, cards:[{bulk:1}]},
      {t:'packet', id:'p4', x:80, y:52, w:12, cards:[{bulk:1}]},
      {t:'hand', id:'rh', x:56, y:38, side:'right', on:true},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'dealing · one card to each pile', x:50, y:88}
    ]},
  { caption: "Around again — one, two, three, four, and back to one. <b>Two cards on every pile</b>, eight dealt, and the four aces are now the top four cards of the deck (Exposed). Nobody at the table knows it.",
    beats: ["the deal"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:40},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'repacket', id:'p1', cards:[{bulk:2}]},
      {t:'repacket', id:'p2', cards:[{bulk:2}]},
      {t:'repacket', id:'p3', cards:[{bulk:2}]},
      {t:'repacket', id:'p4', cards:[{bulk:2}]},
      {t:'label', id:'k', text:'two rounds dealt · aces on top of the deck', x:50, y:88}
    ]},
  { caption: "The third round is the stack's payoff: <b>the last card dealt onto every pile is an ace</b> (Exposed view shows them landing) — and the spectator dealt them there, one fair card at a time.",
    beats: ["the deal"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:40}]},
      {t:'repacket', id:'p1', cards:[{bulk:2},{rank:'A', suit:'♠', face:'down'}]},
      {t:'repacket', id:'p2', cards:[{bulk:2},{rank:'A', suit:'♥', face:'down'}]},
      {t:'repacket', id:'p3', cards:[{bulk:2},{rank:'A', suit:'♦', face:'down'}]},
      {t:'repacket', id:'p4', cards:[{bulk:2},{rank:'A', suit:'♣', face:'down'}]},
      {t:'label', id:'k', text:'three rounds dealt · an ace tops every pile', x:50, y:88}
    ]},
  { caption: "Twelve cards dealt. <b>Set the rest of the deck aside</b> — it has no part in what happens next.",
    beats: ["twelve dealt"],
    actions: [
      {t:'move', id:'deck', x:88, y:22, w:10},
      {t:'hand', id:'rh', on:false},
      {t:'note', id:'b', text:'the rest of the deck — out of play', x:62, y:14},
      {t:'label', id:'k', text:'four piles of three', x:50, y:88}
    ]},
  { caption: "Turn the top card of each pile over, one by one: <b>four aces</b>. Fully self-working — the only move was the secret stack beforehand, and the spectator dealt every card.",
    beats: ["four aces"], climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'repacket', id:'p1', cards:[{bulk:2}]},
      {t:'repacket', id:'p2', cards:[{bulk:2}]},
      {t:'repacket', id:'p3', cards:[{bulk:2}]},
      {t:'repacket', id:'p4', cards:[{bulk:2}]},
      {t:'card', id:'a1', rank:'A', suit:'♠', x:20, y:40, face:'down', w:11, z:5},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:40, y:40, face:'down', w:11, z:5},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:60, y:40, face:'down', w:11, z:5},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:80, y:40, face:'down', w:11, z:5},
      {t:'flip', id:'a1', to:'up'},
      {t:'flip', id:'a2', to:'up'},
      {t:'flip', id:'a3', to:'up'},
      {t:'flip', id:'a4', to:'up'},
      {t:'hi', id:'a1', on:true},
      {t:'hi', id:'a2', on:true},
      {t:'hi', id:'a3', on:true},
      {t:'hi', id:'a4', on:true},
      {t:'label', id:'k', text:'they dealt themselves four aces', x:50, y:88}
    ]}
]};

ANIMS.t41 = { steps: [
  { caption: "Borrow a shuffled deck — no setup. Fan through it and pull out two “prediction” cards, <b>secretly noting the top and bottom cards of the deck</b>: in this run-through the bottom is the 7♣ and the top is the Q♥ (Exposed). The two cards you pull are their mates — the 7♠ and the Q♦ — set aside face-down.",
    beats: ["two predictions"],
    actions: [
      {t:'packet', id:'deck', x:50, y:54, w:13, cards:[{rank:'7', suit:'♣', face:'down'},{bulk:48},{rank:'Q', suit:'♥', face:'down'}]},
      {t:'card', id:'pred1', rank:'7', suit:'♠', x:28, y:26, face:'down', w:11, z:5, secret:{rank:'7', suit:'♠'}},
      {t:'card', id:'pred2', rank:'Q', suit:'♦', x:72, y:26, face:'down', w:11, z:5, secret:{rank:'Q', suit:'♦'}},
      {t:'note', id:'b', text:'bottom: 7♣ · top: Q♥ — predictions are their mates', x:50, y:10},
      {t:'label', id:'k', text:'predictions set aside', x:50, y:88}
    ]},
  { caption: "They deal cards into a pile and <b>stop anywhere</b> — genuinely anywhere. (Here, twelve cards; the Q♥, dealt first, sits at the bottom of their pile.) The undealt remainder keeps the deck's original bottom card, the 7♣, underneath it — dealing from the top never changes that.",
    beats: ["deal and stop"],
    actions: [
      {t:'repacket', id:'deck', cards:[{rank:'7', suit:'♣', face:'down'},{bulk:37}]},
      {t:'packet', id:'pile', x:28, y:54, w:12, cards:[{rank:'Q', suit:'♥', face:'down'},{bulk:11}]},
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'they stop — anywhere', x:50, y:88}
    ]},
  { caption: "Lay the first prediction <b>face-up on their pile</b> and drop the rest of the deck on top. The prediction lands <b>directly under the deck's original bottom card</b> — the 7♣ sits right on its mate, the 7♠ (Exposed view shows the sandwich inside the stack).",
    beats: ["first sandwich"],
    actions: [
      {t:'remove', id:'pile'},
      {t:'remove', id:'pred1'},
      {t:'repacket', id:'deck', cards:[{rank:'Q', suit:'♥', face:'down'},{bulk:11},{rank:'7', suit:'♠', face:'up'},{rank:'7', suit:'♣', face:'down'},{bulk:37}]},
      {t:'label', id:'k', text:'prediction under the 7♣ — its mate', x:50, y:88}
    ]},
  { caption: "Repeat: they deal again and stop anywhere. The bottom of the deck is now the <b>Q♥</b> — it was dealt first in round one, so it has ridden underneath everything since — and the undealt remainder still ends on it.",
    beats: ["deal and stop again"],
    actions: [
      {t:'repacket', id:'deck', cards:[{rank:'Q', suit:'♥', face:'down'},{bulk:11},{rank:'7', suit:'♠', face:'up'},{rank:'7', suit:'♣', face:'down'},{bulk:22}]},
      {t:'packet', id:'pile2', x:28, y:54, w:12, cards:[{bulk:15}]},
      {t:'label', id:'k', text:'they stop — anywhere, again', x:50, y:88}
    ]},
  { caption: "Second prediction face-up on the pile, deck on top: it lands <b>directly under the deck's original top card</b> — the Q♦ under the Q♥ (Exposed). Both sandwiches are now built, and the stop-and-drop did all of it.",
    beats: ["second sandwich"],
    actions: [
      {t:'remove', id:'pile2'},
      {t:'remove', id:'pred2'},
      {t:'repacket', id:'deck', cards:[{bulk:15},{rank:'Q', suit:'♦', face:'up'},{rank:'Q', suit:'♥', face:'down'},{bulk:11},{rank:'7', suit:'♠', face:'up'},{rank:'7', suit:'♣', face:'down'},{bulk:22}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'both predictions sandwiched by their mates', x:50, y:88}
    ]},
  { caption: "Spread the deck: <b>each face-up prediction sits right next to its mate</b> — the Q♦ beside the Q♥, the 7♠ beside the 7♣. Lift each pair and show they match. No sleight of hand, no duplicates — the mates came from the same borrowed deck.",
    climax: true,
    actions: [
      {t:'remove', id:'deck'},
      {t:'spread', x:3, y:52, count:52, dx:1.8, w:7, face:'up', prefix:'sp'},
      {t:'remove', id:'sp18'},
      {t:'remove', id:'sp19'},
      {t:'remove', id:'sp33'},
      {t:'remove', id:'sp34'},
      {t:'card', id:'m1', rank:'Q', suit:'♥', x:36, y:44, face:'up', w:9, z:5},
      {t:'card', id:'m2', rank:'Q', suit:'♦', x:39, y:44, face:'up', w:9, z:5},
      {t:'card', id:'m3', rank:'7', suit:'♣', x:63, y:44, face:'up', w:9, z:5},
      {t:'card', id:'m4', rank:'7', suit:'♠', x:66, y:44, face:'up', w:9, z:5},
      {t:'hi', id:'m1', on:true},
      {t:'hi', id:'m2', on:true},
      {t:'hi', id:'m3', on:true},
      {t:'hi', id:'m4', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'the twins found their mates', x:50, y:88}
    ]}
]};
ANIMS.t42 = { steps: [
  { caption: "They name any card — say the <b>7♥</b>. Genuinely free choice, no force: the deck is ordinary, and so is the naming.",
    beats: ["name any card"],
    actions: [
      {t:'packet', id:'dk', x:50, y:54, w:13, cards:[{bulk:30},{rank:'7', suit:'♥', face:'down'},{bulk:21}]},
      {t:'hand', id:'rh', x:63, y:44, side:'right', on:true},
      {t:'note', id:'b', text:'free choice — no force', x:50, y:24},
      {t:'label', id:'k', text:'name any card', x:50, y:88}
    ]},
  { caption: "An innocent sequence — spreading the deck, squaring it — and you have <b>located the 7♥</b> and hold a finger break above it. Nothing about the handling looks like work.",
    beats: ["finger break"],
    actions: [
      {t:'remove', id:'dk'},
      {t:'packet', id:'lo', x:45, y:56, w:13, cards:[{bulk:30},{rank:'7', suit:'♥', face:'down'}]},
      {t:'packet', id:'hi2', x:59, y:50, w:13, cards:[{bulk:21}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'break above the 7♥', x:50, y:88}
    ]},
  { caption: "As the deck squares up, the card under the break is <b>secretly reversed</b>. The deck looks — and handles — completely normal.",
    beats: ["hidden reverse"],
    actions: [
      {t:'remove', id:'lo'},
      {t:'remove', id:'hi2'},
      {t:'packet', id:'dk', x:50, y:54, w:13, cards:[{bulk:30},{rank:'7', suit:'♥', face:'up'},{bulk:21}]},
      {t:'label', id:'k', text:'reversed inside', x:50, y:88}
    ]},
  { caption: "Spread the deck face-down across the table: fifty-one backs, and <b>one card face-up — the 7♥ they named</b>. This is the sleight version of the gimmicked deck, which is exactly why it belongs here.",
    beats: ["the stranger"], climax: true,
    actions: [
      {t:'remove', id:'dk'},
      {t:'spread', x:3, y:52, count:52, dx:1.7, w:7, face:'down', prefix:'sp'},
      {t:'remove', id:'sp26'},
      {t:'card', id:'rev', rank:'7', suit:'♥', x:47, y:45, face:'up', w:9, z:5},
      {t:'hi', id:'rev', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'the named card — reversed', x:50, y:88}
    ]}
]};
ANIMS.t43 = { steps: [
  { caption: "Three cards in a row: two losers and the <b>money card — the queen</b>. Watch her, especially the <b>bent corner</b>: it's the convincer, and it's the thing you'll trust most.",
    beats: ["three-card monte"],
    actions: [
      {t:'card', id:'l1', rank:'J', suit:'♣', x:28, y:50, face:'up', w:12},
      {t:'card', id:'q', rank:'Q', suit:'♥', x:50, y:50, face:'up', w:12},
      {t:'card', id:'l2', rank:'J', suit:'♠', x:72, y:50, face:'up', w:12},
      {t:'hi', id:'q', on:true},
      {t:'note', id:'bend', text:'bent corner — watch it', x:50, y:28},
      {t:'label', id:'k', text:'find the queen', x:50, y:88}
    ]},
  { caption: "Flip them face-down and the throw begins. The core secret is the <b>hype</b>: two cards are picked up <b>as one</b> — the queen underneath, a loser on top (Exposed view separates the pair). What happens next is not what it looks like.",
    beats: ["the throw"],
    actions: [
      {t:'hi', id:'q', on:false},
      {t:'remove', id:'l1'},
      {t:'remove', id:'q'},
      {t:'remove', id:'l2'},
      {t:'card', id:'l1', rank:'J', suit:'♣', x:28, y:50, face:'down', w:12, secret:{rank:'J', suit:'♣'}},
      {t:'card', id:'q', rank:'Q', suit:'♥', x:56, y:42, face:'down', w:12, z:4, secret:{rank:'Q', suit:'♥'}},
      {t:'card', id:'l2', rank:'J', suit:'♠', x:59, y:45, face:'down', w:12, z:5, secret:{rank:'J', suit:'♠'}},
      {t:'hand', id:'rh', x:66, y:34, side:'right', on:true},
      {t:'label', id:'k', text:'two cards, held as one', x:50, y:88}
    ]},
  { caption: "The hype lands: holding the pair, you <i>appear</i> to throw the bottom card — the queen — to the middle. You actually throw the <b>top card, a loser</b>. The queen is thrown second, to the right, where nobody is looking for her. Your eyes just lied to you, politely.",
    beats: ["the hype"],
    actions: [
      {t:'move', id:'l2', x:50, y:50},
      {t:'move', id:'q', x:72, y:50},
      {t:'label', id:'k', text:'the loser took the queen’s spot', x:50, y:88}
    ]},
  { caption: "A few honest tosses shuffle the row — and mid-routine the <b>bend is secretly transferred</b> to a loser. Now the card they're most sure of is bent, wrong, and not even the card the bend started on (Exposed view: the queen sits plainly on the right).",
    beats: ["the mix"],
    actions: [
      {t:'move', id:'l1', x:50, y:50},
      {t:'move', id:'l2', x:28, y:50},
      {t:'note', id:'bend', text:'bent corner — now on a loser', x:28, y:28},
      {t:'label', id:'k', text:'mixed — where is she?', x:50, y:88}
    ]},
  { caption: "They point — confidently — to the bent card on the left. It has a bend, it has their full attention, and it has never been the queen.",
    beats: ["the guess"],
    actions: [
      {t:'hand', id:'lh', x:28, y:38, side:'left', on:true},
      {t:'label', id:'k', text:'they pick the bent one', x:50, y:88}
    ]},
  { caption: "A loser. The queen was on the <b>right</b> the whole time — her position stayed under the thrower's control while they believed they were tracking her. Learn it as entertainment and history — <b>never play it for money, on either side of the throw</b>.",
    climax: true,
    actions: [
      {t:'flip', id:'l2', to:'up'},
      {t:'flip', id:'q', to:'up'},
      {t:'hi', id:'q', on:true},
      {t:'scale', id:'q', s:1.1},
      {t:'unnote', id:'bend'},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'the queen — always under control', x:50, y:88}
    ]}
]};
ANIMS.t44 = { steps: [
  { caption: "Their <b>signed card</b> — the A♠. You are about to put it somewhere absurd.",
    beats: ["signed card"],
    actions: [
      {t:'deck', id:'d', x:44, y:56, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:44, y:43, face:'up', w:12, secret:{rank:'A', suit:'♠'}},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed selection', x:50, y:88}
    ]},
  { caption: "Under cover of natural handling — turning the card over, handing it around — press a <b>small pellet of magician's wax</b> onto its back. Exposed view can see it sitting there; the room can't.",
    beats: ["the wax"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'card', id:'wax', x:44, y:43, face:'down', w:3, z:8, ghost:true},
      {t:'hand', id:'rh', x:56, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'wax on the back (Exposed)', x:50, y:88}
    ]},
  { caption: "Throw the card <b>spinning toward the ceiling</b>, flat like a frisbee, so it arrives back-first.",
    beats: ["the toss"],
    actions: [
      {t:'move', id:'sel', x:50, y:12, z:5},
      {t:'move', id:'wax', x:50, y:12, z:3},
      {t:'rot', id:'sel', deg:180},
      {t:'scale', id:'sel', s:0.85},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'the toss — back first', x:50, y:88}
    ]},
  { caption: "The wax <b>grabs on impact</b>. Point it out overhead — or let it drop later for the reveal. Their signed card, stuck to the ceiling.",
    climax: true,
    actions: [
      {t:'move', id:'wax', x:50, y:9},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'stuck — signed A♠, on the ceiling', x:50, y:88}
    ]}
]};
ANIMS.t45 = { steps: [
  { caption: "Display the four aces. Three of them are <b>double-faced cards</b> — an ace on one side, an indifferent card on the other. In Exposed view the ghost beside each ace is its other face.",
    beats: ["the gaff"],
    actions: [
      {t:'card', id:'df1', rank:'A', suit:'♠', x:20, y:38, face:'up', w:11},
      {t:'card', id:'df1x', rank:'5', suit:'♣', x:20, y:38, face:'up', w:11, ghost:true, secret:{rank:'5', suit:'♣'}},
      {t:'card', id:'df2', rank:'A', suit:'♥', x:40, y:38, face:'up', w:11},
      {t:'card', id:'df2x', rank:'9', suit:'♦', x:40, y:38, face:'up', w:11, ghost:true, secret:{rank:'9', suit:'♦'}},
      {t:'card', id:'df3', rank:'A', suit:'♦', x:60, y:38, face:'up', w:11},
      {t:'card', id:'df3x', rank:'2', suit:'♠', x:60, y:38, face:'up', w:11, ghost:true, secret:{rank:'2', suit:'♠'}},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:80, y:38, face:'up', w:11},
      {t:'hi', id:'df1', on:true},
      {t:'hi', id:'df2', on:true},
      {t:'hi', id:'df3', on:true},
      {t:'hi', id:'a4', on:true},
      {t:'note', id:'b', text:'the only gaff on this page: double-faced cards', x:50, y:16},
      {t:'label', id:'k', text:'four aces · three are double-faced', x:50, y:88}
    ]},
  { caption: "Cover three of them, each with three face-down indifferent cards; hand the fourth ace's packet to a spectator. In the covering, each double-facer is flipped — its packet is really all indifferent cards. And the fourth packet's face-down 'covers' are the three real aces.",
    beats: ["the cover", "double-faced"],
    actions: [
      {t:'hi', id:'df1', on:false},
      {t:'hi', id:'df2', on:false},
      {t:'hi', id:'df3', on:false},
      {t:'hi', id:'a4', on:false},
      {t:'unnote', id:'b'},
      {t:'remove', id:'df1'},
      {t:'remove', id:'df1x'},
      {t:'packet', id:'tp1', x:20, y:58, w:12, cards:[{rank:'5', suit:'♣', face:'down'},{bulk:3}]},
      {t:'remove', id:'df2'},
      {t:'remove', id:'df2x'},
      {t:'packet', id:'tp2', x:40, y:58, w:12, cards:[{rank:'9', suit:'♦', face:'down'},{bulk:3}]},
      {t:'remove', id:'df3'},
      {t:'remove', id:'df3x'},
      {t:'packet', id:'tp3', x:60, y:58, w:12, cards:[{rank:'2', suit:'♠', face:'down'},{bulk:3}]},
      {t:'packet', id:'sp', x:80, y:58, w:12, cards:[{rank:'A', suit:'♠', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♦', face:'down'}]},
      {t:'flip', id:'a4', to:'down'},
      {t:'move', id:'a4', x:80, y:46},
      {t:'hand', id:'sh', x:88, y:52, side:'right', on:true},
      {t:'label', id:'k', text:'tabled packets: all indifferent · spectator holds the real aces', x:50, y:88}
    ]},
  { caption: "One by one, the aces vanish from the three tabled packets — spread each to show only indifferent cards.",
    beats: ["vanish"],
    actions: [
      {t:'remove', id:'tp1'},
      {t:'spread', x:6, y:42, count:4, dx:9, face:'up', w:8, prefix:'v1', cards:[{id:'v1a', rank:'5', suit:'♣'},{},{},{}]},
      {t:'remove', id:'tp2'},
      {t:'spread', x:38, y:42, count:4, dx:9, face:'up', w:8, prefix:'v2', cards:[{id:'v2a', rank:'9', suit:'♦'},{},{},{}]},
      {t:'remove', id:'tp3'},
      {t:'spread', x:70, y:42, count:4, dx:9, face:'up', w:8, prefix:'v3', cards:[{id:'v3a', rank:'2', suit:'♠'},{},{},{}]},
      {t:'label', id:'k', text:'aces gone from the table', x:50, y:88}
    ]},
  { caption: "The spectator spreads their packet: all four aces, gathered there.",
    climax: true,
    actions: [
      {t:'hand', id:'sh', on:false},
      {t:'remove', id:'sp'},
      {t:'move', id:'a4', x:44, y:68},
      {t:'flip', id:'a4', to:'up'},
      {t:'card', id:'r1', rank:'A', suit:'♠', x:56, y:68, face:'up', w:11},
      {t:'card', id:'r2', rank:'A', suit:'♥', x:68, y:68, face:'up', w:11},
      {t:'card', id:'r3', rank:'A', suit:'♦', x:80, y:68, face:'up', w:11},
      {t:'hi', id:'a4', on:true},
      {t:'hi', id:'r1', on:true},
      {t:'hi', id:'r2', on:true},
      {t:'hi', id:'r3', on:true},
      {t:'label', id:'k', text:'all four aces · in their hands', x:50, y:88}
    ]}
]};
(function(){
"use strict";
function mk(tag, cls, html){ var e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e; }
var REDUCED = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function isRedSuit(s){ return s==='\u2665'||s==='\u2666'||s==='♥'||s==='♦'; }

/* Render a packet element as a real stack of mini-cards from a cards array
 * (bottom -> top). Only the top card's face is drawn; cards beneath render as
 * backs/edges. A face-down top or bottom card with a declared identity gets a
 * ghost tag (.pghost / .pbot) that only Exposed view reveals. */
function packetStack(pk, cards){
  Array.prototype.slice.call(pk.querySelectorAll('.pmini,.n,.pghost,.pbot')).forEach(function(n){ n.parentNode.removeChild(n); });
  if(!cards || !cards.length){ pk.classList.remove('has-cards'); return; }
  pk.classList.add('has-cards');
  var total=0; cards.forEach(function(cd){ total += (cd && cd.bulk) ? cd.bulk : 1; });
  // Flatten the top (up to) 10 physical cards for rendering, top card last.
  var flat=[];
  for(var i=cards.length-1;i>=0 && flat.length<10;i--){
    var e=cards[i];
    if(e && e.bulk){ for(var b=0;b<e.bulk && flat.length<10;b++) flat.push(null); }
    else flat.push(e);
  }
  flat.reverse(); // bottom -> top again
  flat.forEach(function(cd, ci){
    var isTop = ci===flat.length-1;
    var faceUp = isTop && cd && cd.face==='up';
    var mini=mk('div','pmini '+(faceUp?'pmini-face':'pmini-back')+((faceUp && isRedSuit(cd.suit))?' red':''));
    var off=(ci-(flat.length-1))*1.4;
    mini.style.transform='translate('+off+'px,'+off+'px)';
    mini.style.zIndex=ci;
    if(faceUp) mini.innerHTML='<span class="rk">'+(cd.rank||'')+'</span><span class="st">'+(cd.suit||'')+'</span>';
    pk.appendChild(mini);
  });
  pk.appendChild(mk('div','n', total+(total===1?' card':' cards')));
  var top=cards[cards.length-1], bot=cards[0];
  if(top && top.rank && top.face!=='up'){
    var gh=mk('div','pghost'+(isRedSuit(top.suit)?' red':''), (top.rank||'')+(top.suit||''));
    pk.appendChild(gh);
  }
  if(bot && bot.rank && bot.face!=='up' && bot!==top){
    var bt=mk('div','pbot', 'bottom: '+(bot.rank||'')+(bot.suit||''));
    pk.appendChild(bt);
  }
}

/* Does this scene use any secret-layer feature? (drives the view toggle) */
function scanSecrets(anim){
  var found=false;
  (anim.steps||[]).forEach(function(st){
    (st.actions||[]).forEach(function(a){
      if(a.ghost || a.secret || a.t==='palm') found=true;
      if(a.cards) a.cards.forEach(function(cd){ if(cd && cd.rank && cd.face!=='up') found=true; });
    });
  });
  return found;
}

/* Phase 2 action primitives (in addition to deck/card/move/rot/flip/hi/label/note/remove):
 *   packet  {id, x, y, n?, w?, z?}           — small stack
 *   fan     {x, y, count|cards, spread?, startDeg?, radius?, w?, face?, prefix?}
 *   spread  {x, y, count|cards, dx?, dy?, w?, face?, prefix?, stagger?}
 *   hand    {id?, x, y, side?:'left'|'right', emoji?, on?}
 *   scale   {id, s|scale}                    — explicit scale
 * move also accepts optional deg + scale.
 *
 * Phase 3 (pilot) extensions — see ANIMATION_SPEC.md:
 *   packet/deck content: a packet may declare cards:[{rank,suit,face}|{bulk:n}...]
 *     (bottom -> top). It then renders as a real stack of mini-cards; the top
 *     card's face shows when face:'up'. {t:'repacket', id, cards} re-declares
 *     an existing packet's composition.
 *   card    {secret:{rank,suit}} — a face-down card's true identity; shown as a
 *     ghost face in Exposed view only.
 *   card    {ghost:true} — secret-layer element: invisible in Audience view,
 *     ghosted (offset, translucent) in Exposed view.
 *   palm    {id} / unpalm {id} — mark an element palmed (hidden in Audience
 *     view, ghosted in the hand in Exposed view) / release it.
 *   reveal  {id} — a ghost element becomes solid and public.
 *   hand    {grip:'...'} — grip callout rendered under the hand glyph.
 *   step    {climax:true} — marks the reveal step (caption is styled).
 * Players with secret-layer content get an Audience/Exposed toggle and every
 * player gets a quarter-speed step-replay button.
 */
function Player(root, anim){
  this.root=root; this.anim=anim; this.i=0; this.playing=false; this.timer=null; this.objs={}; this.touched=false;
  this.speed=1; this.looping=false;
  this.meta={}; this.view='audience';
  var self=this;
  this.stage=mk('div','stage'); this.stage.setAttribute('aria-hidden','true');
  this.cap=mk('div','caption');
  var bar=mk('div','controls');
  this.bPrev=mk('button','cbtn','\u2039'); this.bPrev.setAttribute('aria-label','Previous step');
  this.bPlay=mk('button','cbtn play','\u25B6'); this.bPlay.setAttribute('aria-label','Play or pause');
  this.bNext=mk('button','cbtn','\u203A'); this.bNext.setAttribute('aria-label','Next step');
  this.bRe=mk('button','cbtn','\u21BA'); this.bRe.setAttribute('aria-label','Restart');
  this.pos=mk('span','steppos');

  var spdDiv = mk('div', 'spd-group');
  [0.5, 1, 1.5, 2].forEach(function(s){
    var sb = mk('button', 'sbtn' + (s === 1 ? ' active' : ''), s + 'x');
    sb.onclick = function(){
      self.speed = s;
      spdDiv.querySelectorAll('.sbtn').forEach(function(b){ b.classList.remove('active'); });
      sb.classList.add('active');
    };
    spdDiv.appendChild(sb);
  });
  this.bLoop = mk('button', 'cbtn loop-btn', '🔁');
  this.bLoop.title = "Loop current step";
  this.bLoop.onclick = function(){
    self.looping = !self.looping;
    self.bLoop.classList.toggle('active', self.looping);
  };

  this.bSlow = mk('button', 'cbtn slow-btn', '\u21BA\u00BC');
  this.bSlow.title = "Replay this step at quarter speed";
  this.bSlow.setAttribute('aria-label', 'Replay this step at quarter speed');
  this.bSlow.onclick = function(){ self.touched=true; self.replaySlow(); };

  this.hasSecrets = scanSecrets(anim);
  this.bView = null;
  if(this.hasSecrets){
    this.bView = mk('button', 'sbtn view-btn', 'Exposed view');
    this.bView.title = 'Toggle between what the audience sees and what is really happening';
    this.bView.setAttribute('aria-label', 'Toggle exposed view');
    this.bView.onclick = function(){ self.touched=true; self.setView(self.view==='exposed' ? 'audience' : 'exposed'); };
  }

  bar.appendChild(this.bPrev); bar.appendChild(this.bPlay); bar.appendChild(this.bNext); bar.appendChild(this.bRe); bar.appendChild(this.bLoop); bar.appendChild(this.bSlow); bar.appendChild(spdDiv); if(this.bView) bar.appendChild(this.bView); bar.appendChild(this.pos);
  root.appendChild(this.stage); root.appendChild(this.cap); root.appendChild(bar);
  this.bPrev.onclick=function(){ self.touched=true; self.goto(self.i-1); };
  this.bNext.onclick=function(){ self.touched=true; self.goto(self.i+1); };
  this.bRe.onclick=function(){ self.touched=true; self.goto(0); };
  this.bPlay.onclick=function(){ self.touched=true; if(self.playing) self.pause(); else self.play(); };
  if(REDUCED) this.root.classList.add('noanim');
  root._player=this;
  this.goto(0);
}
Player.prototype.reset=function(){ this.stage.innerHTML=''; this.objs={}; this.meta={}; };
/* Opacity an element should settle at, given its secret-layer state + view. */
Player.prototype._endOpacity=function(id){
  var m=this.meta[id];
  if(!m) return '1';
  if(m.palmed) return this.view==='exposed' ? '0.55' : '0';
  if(m.ghost) return this.view==='exposed' ? '0.6' : '0';
  return '1';
};
Player.prototype.setView=function(v){
  this.view=v;
  this.root.classList.toggle('exposed', v==='exposed');
  if(this.bView){
    this.bView.textContent = v==='exposed' ? 'Audience view' : 'Exposed view';
    this.bView.classList.toggle('active', v==='exposed');
  }
  for(var id in this.objs){
    var m=this.meta[id];
    if(m && (m.ghost || m.palmed)) this.objs[id].style.opacity=this._endOpacity(id);
  }
};
Player.prototype.replaySlow=function(){
  var self=this;
  this.root.classList.add('slowmo');
  this.goto(this.i);
  if(this._slowT) clearTimeout(this._slowT);
  this._slowT=setTimeout(function(){ self.root.classList.remove('slowmo'); }, 3600);
};
Player.prototype.goto=function(i){
  var n=this.anim.steps.length;
  i=Math.max(0, Math.min(n-1, i));
  this.pause();
  var keepNoAnim=this.root.classList.contains('noanim');
  this.root.classList.add('noanim');
  this.reset();
  var s;
  for(s=0;s<i;s++) this.applyStep(this.anim.steps[s], true);
  if(!keepNoAnim && !REDUCED) this.root.classList.remove('noanim');
  this.applyStep(this.anim.steps[i], false);
  this.i=i; this.render();
};
Player.prototype.render=function(){
  this.pos.textContent=(this.i+1)+' / '+this.anim.steps.length;
  this.bPlay.innerHTML=this.playing?'\u23F8':'\u25B6';
};
Player.prototype.applyStep=function(step, instantForce){
  var self=this;
  var instant=instantForce || this.root.classList.contains('noanim');
  var now=[], later=[];
  (step.actions||[]).forEach(function(a){
    // actions that need a painted "from" state go to later
    if(!instant && (a.t==='move' || a.t==='rot' || a.t==='flip' || a.t==='hi' || a.t==='scale')) later.push(a);
    else now.push(a);
  });
  now.forEach(function(a){ self.act(a, true); });
  if(later.length){
    // double rAF so the browser paints the "from" state first
    requestAnimationFrame(function(){
      requestAnimationFrame(function(){
        later.forEach(function(a){ self.act(a, false); });
      });
    });
  }
  if(step.caption){
    var beats=(step.beats||[]).map(function(b){ return '<span class="beat">'+b+'</span>'; }).join('');
    this.cap.innerHTML=step.caption+(beats?'<div class="beats">'+beats+'</div>':'');
  }
  this.cap.classList.toggle('is-climax', !!step.climax);
};
Player.prototype.stepDelay=function(){
  var n=((this.anim.steps[this.i]||{}).actions||[]).length;
  // Slightly longer base so the upgraded easing has time to breathe
  var base = Math.min(7200, 2600 + n*520);
  return Math.round(base / (this.speed || 1));
};
Player.prototype.play=function(){
  var self=this;
  if(this.i>=this.anim.steps.length-1) this.goto(0);
  this.playing=true; this.render();
  var tick=function(){
    if(!self.playing) return;
    if(self.looping){
      // re-apply current step for loop effect
      self.goto(self.i);
      self.timer=setTimeout(tick, self.stepDelay());
      return;
    }
    if(self.i<self.anim.steps.length-1){ self.goto(self.i+1); self.timer=setTimeout(tick, self.stepDelay()); }
    else self.pause();
  };
  this.timer=setTimeout(tick, this.stepDelay());
};
Player.prototype.pause=function(){
  this.playing=false;
  if(this.timer){ clearTimeout(this.timer); this.timer=null; }
  this.render();
};
Player.prototype._setTransform=function(el, deg, scale){
  deg = deg || 0;
  scale = scale == null ? 1 : scale;
  el.style.transform = 'translate(-50%,-50%) rotate('+deg+'deg) scale('+scale+')';
};
Player.prototype.act=function(a, instant){
  var o=this.objs, self=this;
  switch(a.t){
    case 'deck': {
      var d=mk('div','pdeck');
      if(a.n) d.appendChild(mk('div','n', a.n+' cards'));
      d.style.left=a.x+'%'; d.style.top=a.y+'%';
      if(a.w) d.style.width=a.w+'%';
      if(a.z) d.style.zIndex=a.z;
      d.style.opacity = '0';
      this.stage.appendChild(d); o[a.id]=d; self.meta[a.id]={kind:'deck'};
      if(instant){ d.style.opacity='1'; }
      else {
        requestAnimationFrame(function(){ d.style.opacity='1'; });
      }
      break;
    }
    case 'packet': {
      /* Small packet / stock — lighter stack than a full deck.
         With a.cards (bottom -> top), renders as a real stack of mini-cards. */
      var pk=mk('div','ppacket');
      if(a.cards && a.cards.length) packetStack(pk, a.cards);
      else if(a.n) pk.appendChild(mk('div','n', a.n+(a.n===1?' card':' cards')));
      pk.style.left=a.x+'%'; pk.style.top=a.y+'%';
      if(a.w) pk.style.width=a.w+'%';
      if(a.z) pk.style.zIndex=a.z;
      pk.style.opacity = '0';
      this.stage.appendChild(pk); o[a.id]=pk; self.meta[a.id]={kind:'packet', cards:a.cards||null};
      if(instant){ pk.style.opacity='1'; }
      else requestAnimationFrame(function(){ pk.style.opacity='1'; });
      break;
    }
    case 'repacket': {
      var rp=o[a.id];
      if(rp && a.cards){
        packetStack(rp, a.cards);
        self.meta[a.id]=self.meta[a.id]||{kind:'packet'};
        self.meta[a.id].cards=a.cards;
      }
      break;
    }
    case 'palm': {
      var pm=o[a.id];
      if(pm){
        self.meta[a.id]=self.meta[a.id]||{};
        self.meta[a.id].palmed=true;
        pm.classList.add('palmed-el');
        pm.style.opacity=self._endOpacity(a.id);
      }
      break;
    }
    case 'unpalm': {
      var up=o[a.id];
      if(up){
        self.meta[a.id]=self.meta[a.id]||{};
        self.meta[a.id].palmed=false;
        up.classList.remove('palmed-el');
        up.style.opacity=self._endOpacity(a.id);
      }
      break;
    }
    case 'reveal': {
      var rv2=o[a.id];
      if(rv2){
        self.meta[a.id]=self.meta[a.id]||{};
        self.meta[a.id].ghost=false;
        rv2.classList.remove('ghost-el');
        rv2.style.opacity=self._endOpacity(a.id);
      }
      break;
    }
    case 'card': {
      var isRed = (a.suit==='\u2665'||a.suit==='\u2666'||a.suit==='♥'||a.suit==='♦');
      var c=mk('div','pcard'+(a.face==='down'?' facedown':''));
      c.style.left=a.x+'%'; c.style.top=a.y+'%';
      if(a.w) c.style.width=a.w+'%';
      if(a.z) c.style.zIndex=a.z;
      if(a.deg) self._setTransform(c, a.deg, a.scale||1);
      var inner=mk('div','pinner');
      var idx = (a.rank||'') + (a.suit||'');
      var fr=mk('div','pface pfront'+(isRed?' red':''),
        '<span class="rk">'+(a.rank||'')+'</span><span class="st">'+(a.suit||'')+'</span>');
      if(idx) fr.setAttribute('data-idx', (a.rank||'')+'\n'+(a.suit||''));
      inner.appendChild(fr); inner.appendChild(mk('div','pface pback'));
      c.appendChild(inner);
      if(a.secret){
        c.appendChild(mk('div','pghost'+(isRedSuit(a.secret.suit)?' red':''),
          (a.secret.rank||'')+(a.secret.suit||'')));
      }
      if(a.ghost) c.classList.add('ghost-el');
      c.style.opacity = '0';
      this.stage.appendChild(c); o[a.id]=c;
      self.meta[a.id]={kind:'card', ghost:!!a.ghost, secret:!!a.secret, palmed:false,
        identity:(a.rank&&a.suit)?(a.rank+'|'+a.suit):null};
      var endOp = self._endOpacity(a.id);
      if(instant){ c.style.opacity=endOp; }
      else {
        // Re-resolve at fire time: a palm/ghost change later in the same
        // step must win over the fade-in.
        requestAnimationFrame(function(){ c.style.opacity=self._endOpacity(a.id); });
      }
      break;
    }
    case 'fan': {
      /* Fan cards in an arc.
         a.cards: array of {id, rank, suit, face} (optional — if omitted uses blank backs)
         a.x, a.y: center of fan
         a.count: number of cards (default 7)
         a.spread: total degrees of arc (default 70)
         a.startDeg: starting rotation (default -spread/2)
         a.radius: distance from center as % of stage width (default 9)
         a.w: card width %
         a.face: default face for cards
         a.prefix: id prefix (default 'fan')
      */
      var count = a.count || (a.cards && a.cards.length) || 7;
      var spread = a.spread != null ? a.spread : 70;
      var startDeg = a.startDeg != null ? a.startDeg : -spread/2;
      var radius = a.radius != null ? a.radius : 9;
      var prefix = a.prefix || 'fan';
      var face = a.face || 'down';
      var w = a.w || 9.5;
      var cards = a.cards || [];
      var step = count > 1 ? spread / (count - 1) : 0;
      for(var fi=0; fi<count; fi++){
        var cd = cards[fi] || {};
        var id = cd.id || (prefix + fi);
        var deg = startDeg + fi * step;
        var rad = deg * Math.PI / 180;
        var cx = a.x + Math.sin(rad) * radius;
        var cy = a.y - Math.cos(rad) * radius * 0.55; // elliptical
        var isRed = (cd.suit==='\u2665'||cd.suit==='\u2666'||cd.suit==='♥'||cd.suit==='♦');
        var c=mk('div','pcard fan-card'+( (cd.face||face)==='down'?' facedown':''));
        c.style.left=cx+'%'; c.style.top=cy+'%';
        c.style.width=w+'%';
        c.style.zIndex = 10 + fi;
        self._setTransform(c, deg, 1);
        var inner=mk('div','pinner');
        var rk = cd.rank || '', st = cd.suit || '';
        var fr=mk('div','pface pfront'+(isRed?' red':''),
          '<span class="rk">'+rk+'</span><span class="st">'+st+'</span>');
        if(rk||st) fr.setAttribute('data-idx', rk+'\n'+st);
        inner.appendChild(fr); inner.appendChild(mk('div','pface pback'));
        c.appendChild(inner);
        c.style.opacity = '0';
        this.stage.appendChild(c); o[id]=c;
        (function(el, delay){
          if(instant){ el.style.opacity='1'; }
          else setTimeout(function(){ el.style.opacity='1'; }, delay);
        })(c, instant ? 0 : fi * 45);
      }
      break;
    }
    case 'spread': {
      /* Linear ribbon / spread.
         a.cards or a.count
         a.x, a.y: start position (leftmost)
         a.dx: horizontal step % (default 7)
         a.dy: vertical step % (default 0)
         a.w, a.face, a.prefix
         a.stagger: ms between card appearances (default 40)
      */
      var count = a.count || (a.cards && a.cards.length) || 5;
      var dx = a.dx != null ? a.dx : 7;
      var dy = a.dy != null ? a.dy : 0;
      var prefix = a.prefix || 'sp';
      var face = a.face || 'down';
      var w = a.w || 9;
      var cards = a.cards || [];
      var stagger = a.stagger != null ? a.stagger : 40;
      for(var si=0; si<count; si++){
        var cd = cards[si] || {};
        var id = cd.id || (prefix + si);
        var cx = a.x + si * dx;
        var cy = a.y + si * dy;
        var isRed = (cd.suit==='\u2665'||cd.suit==='\u2666'||cd.suit==='♥'||cd.suit==='♦');
        var c=mk('div','pcard spread-card'+( (cd.face||face)==='down'?' facedown':''));
        c.style.left=cx+'%'; c.style.top=cy+'%';
        c.style.width=w+'%';
        c.style.zIndex = 5 + si;
        if(cd.deg || a.deg) self._setTransform(c, cd.deg||a.deg||0, 1);
        var inner=mk('div','pinner');
        var rk = cd.rank || '', st = cd.suit || '';
        var fr=mk('div','pface pfront'+(isRed?' red':''),
          '<span class="rk">'+rk+'</span><span class="st">'+st+'</span>');
        if(rk||st) fr.setAttribute('data-idx', rk+'\n'+st);
        inner.appendChild(fr); inner.appendChild(mk('div','pface pback'));
        c.appendChild(inner);
        c.style.opacity = '0';
        this.stage.appendChild(c); o[id]=c;
        (function(el, delay){
          if(instant){ el.style.opacity='1'; }
          else setTimeout(function(){ el.style.opacity='1'; }, delay);
        })(c, instant ? 0 : si * stagger);
      }
      break;
    }
    case 'hand': {
      /* Simple hand indicator.
         a.id, a.x, a.y
         a.side: 'left' | 'right' (default left)
         a.emoji: override glyph (default ✋)
         a.on: true/false to show/hide (default true)
      */
      var hid = 'h' + (a.id || 'main');
      var h = o[hid];
      if(!h){
        h = mk('div', 'phand ' + (a.side === 'right' ? 'right' : 'left'));
        h.textContent = a.emoji || '✋';
        h.appendChild(mk('span','pgrip'));
        this.stage.appendChild(h);
        o[hid] = h;
      }
      h.style.left = a.x + '%';
      h.style.top = a.y + '%';
      if(a.grip !== undefined){
        var gs = h.querySelector('.pgrip');
        if(gs) gs.textContent = a.grip || '';
      }
      if(a.side === 'right') h.classList.add('right');
      else h.classList.remove('right');
      if(a.on === false){
        h.classList.remove('visible');
      } else {
        if(instant) h.classList.add('visible');
        else requestAnimationFrame(function(){ h.classList.add('visible'); });
      }
      break;
    }
    case 'scale': {
      var sc = o[a.id];
      if(sc){
        var cur = sc.style.transform || '';
        var degMatch = cur.match(/rotate\(([-\d.]+)deg\)/);
        var deg = degMatch ? parseFloat(degMatch[1]) : 0;
        self._setTransform(sc, deg, a.s != null ? a.s : (a.scale != null ? a.scale : 1));
      }
      break;
    }
    case 'move': {
      var m=o[a.id];
      if(m){
        m.style.left=a.x+'%';
        m.style.top=a.y+'%';
        if(a.z) m.style.zIndex=a.z;
        if(a.w) m.style.width=a.w+'%';
        if(a.scale != null || a.deg != null){
          var cur = m.style.transform || '';
          var degMatch = cur.match(/rotate\(([-\d.]+)deg\)/);
          var deg = a.deg != null ? a.deg : (degMatch ? parseFloat(degMatch[1]) : 0);
          var scale = a.scale != null ? a.scale : 1;
          if(m.classList.contains('phi') && a.scale == null){
            scale = m.classList.contains('pdeck') || m.classList.contains('ppacket') ? 1.05 : 1.06;
          }
          self._setTransform(m, deg, scale);
        }
      }
      break;
    }
    case 'rot': {
      var rv=o[a.id];
      if(rv){
        var scale = 1;
        if(rv.classList.contains('phi')) scale = (rv.classList.contains('pdeck')||rv.classList.contains('ppacket')) ? 1.05 : 1.06;
        self._setTransform(rv, a.deg||0, scale);
      }
      break;
    }
    case 'note': {
      var nt=o['n'+a.id];
      if(!nt){ nt=mk('div','pnote'); nt.style.opacity='0'; this.stage.appendChild(nt); o['n'+a.id]=nt; }
      nt.innerHTML=a.text; nt.style.left=a.x+'%'; nt.style.top=a.y+'%';
      if(instant) nt.style.opacity='1';
      else requestAnimationFrame(function(){ nt.style.opacity='1'; });
      break;
    }
    case 'unnote': {
      var un=o['n'+a.id];
      if(un) un.style.opacity='0';
      break;
    }
    case 'flip': {
      var f=o[a.id];
      if(f) f.classList.toggle('facedown', a.to==='down');
      break;
    }
    case 'hi': {
      var hh=o[a.id];
      if(hh){
        hh.classList.toggle('phi', !!a.on);
        var cur = hh.style.transform || '';
        var degMatch = cur.match(/rotate\(([-\d.]+)deg\)/);
        var deg = degMatch ? parseFloat(degMatch[1]) : 0;
        var scale = a.on ? ((hh.classList.contains('pdeck')||hh.classList.contains('ppacket')) ? 1.05 : 1.06) : 1;
        self._setTransform(hh, deg, scale);
      }
      break;
    }
    case 'label': {
      var l=o['$'+a.id];
      if(!l){ l=mk('div','plabel'); l.style.opacity='0'; this.stage.appendChild(l); o['$'+a.id]=l; }
      l.textContent=a.text; l.style.left=a.x+'%'; l.style.top=a.y+'%';
      if(instant) l.style.opacity='1';
      else requestAnimationFrame(function(){ l.style.opacity='1'; });
      break;
    }
    case 'unlabel': {
      var u=o['$'+a.id];
      if(u) u.style.opacity='0';
      break;
    }
    case 'remove': {
      var r2=o[a.id];
      if(r2){
        delete o[a.id];
        delete self.meta[a.id];
        if(instant){
          if(r2.parentNode) r2.parentNode.removeChild(r2);
        } else {
          r2.style.opacity='0';
          // also handle hand visibility
          if(r2.classList && r2.classList.contains('phand')) r2.classList.remove('visible');
          setTimeout(function(){ if(r2.parentNode) r2.parentNode.removeChild(r2); }, 420);
        }
      }
      break;
    }
  }
};
;


ANIMS.t46 = { steps: [
  { caption: "Their card is returned to the middle (tracked positionally — the article names no card). As you square, hold a <b>left pinky break under it</b> — or transfer an injog into that break (Exposed view: the card rides at the break).",
    beats: ["pinky break"],
    actions: [
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:50, y:46, face:'down', w:11, z:5, ghost:true},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'note', id:'b', text:'pinky break under their card', x:72, y:64},
      {t:'label', id:'k', text:'break held under the selection', x:50, y:88}
    ]},
  { caption: "Right hand takes the deck from above, thumb at the inner end, and <b>picks up the break as a thumb break</b>. From the front, the gap is invisible.",
    beats: ["thumb break"],
    actions: [
      {t:'hand', id:'rh', x:60, y:38, side:'right', on:true},
      {t:'move', id:'sel', x:50, y:45},
      {t:'note', id:'b', text:'thumb break — invisible from the front', x:68, y:24},
      {t:'label', id:'k', text:'the break changes hands', x:50, y:88}
    ]},
  { caption: "Left hand <b>undercuts about half the cards below the break</b> and drops them on top. Their card stays on top of the packet still below the break (Exposed view) — the two packets that have moved were both strangers to it.",
    beats: ["first undercut"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'drop1', x:50, y:32, w:13, cards:[{bulk:13}]},
      {t:'packet', id:'up', x:50, y:46, w:13, cards:[{bulk:25}]},
      {t:'packet', id:'low', x:50, y:62, w:13, cards:[{bulk:13}]},
      {t:'move', id:'sel', x:50, y:55},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'first undercut', x:50, y:88}
    ]},
  { caption: "Come back and undercut <b>everything still below the break</b>, dropping that packet on top too — and the packet that lands last carries their card on its upper face: <b>their card is now the top card</b>. A false cut afterward “proves” you mixed the deck. You didn't. The two cuts should feel like one fidget, not a procedure.",
    climax: true,
    actions: [
      {t:'remove', id:'drop1'},
      {t:'remove', id:'up'},
      {t:'remove', id:'low'},
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:51}]},
      {t:'move', id:'sel', x:50, y:42},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'their card — on top', x:50, y:88}
    ]}
]};
ANIMS.t47 = { steps: [
  { caption: "A card lies face-down on the table. The card you want to switch in waits face-down in your right hand. <b>Exposed view knows which is which</b> — the audience sees two identical backs.",
    beats: ["the setup"],
    actions: [
      {t:'card', id:'tab', rank:'A', suit:'♠', x:38, y:52, face:'down', w:12, z:3, secret:{rank:'A', suit:'♠'}},
      {t:'card', id:'hnd', rank:'K', suit:'♥', x:64, y:44, face:'down', w:12, z:3, secret:{rank:'K', suit:'♥'}},
      {t:'hand', id:'rh', x:71, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'tabled card · card in hand', x:50, y:88}
    ]},
  { caption: "Slide the hand card <b>under the tabled card</b> until the two are roughly square. Left fingers can steady the tabled card so it doesn't skate.",
    beats: ["the scoop"],
    actions: [
      {t:'move', id:'hnd', x:41, y:55, z:2},
      {t:'hand', id:'lh', x:29, y:50, side:'left', on:true},
      {t:'label', id:'k', text:'scooped and squared', x:50, y:88}
    ]},
  { caption: "Start the turnover: right thumb draws the top card to the right while the fingers push the bottom card to the left — <b>they swap places under the flip</b>. The card that turns face-up is the hand card, not the card that was on the table.",
    beats: ["mexican turnover"],
    actions: [
      {t:'flip', id:'hnd', to:'up'},
      {t:'move', id:'hnd', x:38, y:50, z:4},
      {t:'move', id:'tab', x:64, y:44, z:4},
      {t:'label', id:'k', text:'swapped under the flip', x:50, y:88}
    ]},
  { caption: "Finish by turning the <b>original tabled card</b> — now in your hand — face-up onto the table, as if it had been there all along. Study the honest turnover until the fake one has the same shape: the tell is a card that hops instead of rolls.",
    beats: ["the finish"], climax: true,
    actions: [
      {t:'flip', id:'tab', to:'up'},
      {t:'move', id:'tab', x:57, y:50, z:4},
      {t:'hi', id:'tab', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'the original — there all along', x:50, y:88}
    ]}
]};
ANIMS.t48 = { steps: [
  { caption: "Five pairs of <b>near-twins</b> sit face to face — the 6♣ against the 6♠, the 7♥ against the 7♦, and so on: same colour, different suit, close enough that nobody memorizes a fan. No memorable court cards — sixes and sevens vanish from memory; queens don't.",
    beats: ["the setup"],
    actions: [
      {t:'packet', id:'prin', x:50, y:52, w:14, cards:[{rank:'6', suit:'♠', face:'down'},{rank:'7', suit:'♦', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'9', suit:'♦', face:'down'},{rank:'10', suit:'♠', face:'down'},{rank:'6', suit:'♣', face:'up'},{rank:'7', suit:'♥', face:'up'},{rank:'8', suit:'♣', face:'up'},{rank:'9', suit:'♥', face:'up'},{rank:'10', suit:'♣', face:'up'}]},
      {t:'note', id:'b', text:'five pairs of near-twins — mates squared behind', x:50, y:24},
      {t:'label', id:'k', text:'five faces show · five mates behind', x:50, y:88}
    ]},
  { caption: "Fan the packet so only the five faces show. <b>Don't let them touch</b> — ask someone to think of one card in the fan.",
    beats: ["think of one"],
    actions: [
      {t:'remove', id:'prin'},
      {t:'packet', id:'mates', x:22, y:64, w:12, cards:[{rank:'6', suit:'♠', face:'down'},{rank:'7', suit:'♦', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'9', suit:'♦', face:'down'},{rank:'10', suit:'♠', face:'down'}]},
      {t:'fan', x:56, y:46, spread:60, startDeg:-30, radius:12, w:11, face:'up', cards:[{id:'s6c', rank:'6', suit:'♣'},{id:'s7h', rank:'7', suit:'♥'},{id:'s8c', rank:'8', suit:'♣'},{id:'s9h', rank:'9', suit:'♥'},{id:'s10c', rank:'10', suit:'♣'}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'think of one', x:50, y:88}
    ]},
  { caption: "Say they think of the <b>7♥</b> — you can't know, and you don't need to. <b>No sleight at all</b>: the secret is that they never saw the cards you show at the end.",
    actions: [
      {t:'hi', id:'s7h', on:true},
      {t:'label', id:'k', text:'a free thought', x:50, y:88}
    ]},
  { caption: "Close the fan and <b>turn the packet toward yourself</b>.",
    actions: [
      {t:'remove', id:'s6c'},
      {t:'remove', id:'s7h'},
      {t:'remove', id:'s8c'},
      {t:'remove', id:'s9h'},
      {t:'remove', id:'s10c'},
      {t:'packet', id:'shown', x:56, y:52, w:12, cards:[{rank:'6', suit:'♣', face:'down'},{rank:'7', suit:'♥', face:'down'},{rank:'8', suit:'♣', face:'down'},{rank:'9', suit:'♥', face:'down'},{rank:'10', suit:'♣', face:'down'}]},
      {t:'label', id:'k', text:'packet turned toward you', x:50, y:88}
    ]},
  { caption: "In that turn, the shown packet is <b>exchanged for its mates</b>. The cards now in your hand are the twins nobody ever saw.",
    beats: ["packet switch"],
    actions: [
      {t:'remove', id:'shown'},
      {t:'move', id:'mates', x:50, y:52},
      {t:'label', id:'k', text:'the switch (Exposed)', x:50, y:88}
    ]},
  { caption: "Remove <b>any one mate</b> — here the 6♠ — and pocket it. It is, apparently, the one they thought of.",
    beats: ["the removal"],
    actions: [
      {t:'repacket', id:'mates', cards:[{rank:'7', suit:'♦', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'9', suit:'♦', face:'down'},{rank:'10', suit:'♠', face:'down'}]},
      {t:'card', id:'m6', rank:'6', suit:'♠', x:50, y:44, face:'down', w:11, z:5, secret:{rank:'6', suit:'♠'}},
      {t:'palm', id:'m6'},
      {t:'move', id:'m6', x:85, y:72},
      {t:'label', id:'k', text:'one mate pocketed', x:50, y:88}
    ]},
  { caption: "Spread the remaining mates — the ones they never saw — and ask if they see their card. <b>They don't</b>: whichever face they thought of, only its twin is here. Name the pocketed card only if you glimpsed which face they lingered on; otherwise, let the absence be the trick.",
    climax: true,
    actions: [
      {t:'remove', id:'mates'},
      {t:'spread', x:24, y:50, dx:16, w:11, face:'up', prefix:'m', cards:[{id:'m7d', rank:'7', suit:'♦'},{id:'m8s', rank:'8', suit:'♠'},{id:'m9d', rank:'9', suit:'♦'},{id:'m10s', rank:'10', suit:'♠'}]},
      {t:'label', id:'k', text:'their card is not here', x:50, y:88}
    ]}
]};
ANIMS.t49 = { steps: [
  { caption: "Bevel the deck so the cards step toward your spreading hand — <b>index finger on the near end</b>, the other fingers riding the long edge, on a cloth surface.",
    beats: ["table spread"],
    actions: [
      {t:'deck', id:'d', x:26, y:50, n:52},
      {t:'rot', id:'d', deg:4},
      {t:'hand', id:'rh', x:34, y:42, side:'right', on:true},
      {t:'note', id:'b', text:'cloth surface — pad or carpet, never bare glass', x:50, y:24},
      {t:'label', id:'k', text:'beveled · on cloth', x:50, y:88}
    ]},
  { caption: "Sweep in <b>one straight line with even pressure</b> — uneven pressure piles a clump at the far end.",
    beats: ["the stroke"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'d'},
      {t:'spread', x:9, y:50, count:52, dx:1.32, w:8, face:'down', prefix:'r', stagger:18},
      {t:'label', id:'k', text:'ribbon forming', x:50, y:88}
    ]},
  { caption: "Turn it over — <b>pinch the near end, lay a finger on top, and ride the length</b> of the ribbon; friction flips every card as you go.",
    beats: ["turnover"],
    actions: [
      {t:'remove', id:'r0'},
      {t:'remove', id:'r1'},
      {t:'remove', id:'r2'},
      {t:'remove', id:'r3'},
      {t:'remove', id:'r4'},
      {t:'remove', id:'r5'},
      {t:'remove', id:'r6'},
      {t:'remove', id:'r7'},
      {t:'remove', id:'r8'},
      {t:'remove', id:'r9'},
      {t:'remove', id:'r10'},
      {t:'remove', id:'r11'},
      {t:'remove', id:'r12'},
      {t:'remove', id:'r13'},
      {t:'remove', id:'r14'},
      {t:'remove', id:'r15'},
      {t:'remove', id:'r16'},
      {t:'remove', id:'r17'},
      {t:'remove', id:'r18'},
      {t:'remove', id:'r19'},
      {t:'remove', id:'r20'},
      {t:'remove', id:'r21'},
      {t:'remove', id:'r22'},
      {t:'remove', id:'r23'},
      {t:'remove', id:'r24'},
      {t:'remove', id:'r25'},
      {t:'remove', id:'r26'},
      {t:'remove', id:'r27'},
      {t:'remove', id:'r28'},
      {t:'remove', id:'r29'},
      {t:'remove', id:'r30'},
      {t:'remove', id:'r31'},
      {t:'remove', id:'r32'},
      {t:'remove', id:'r33'},
      {t:'remove', id:'r34'},
      {t:'remove', id:'r35'},
      {t:'remove', id:'r36'},
      {t:'remove', id:'r37'},
      {t:'remove', id:'r38'},
      {t:'remove', id:'r39'},
      {t:'remove', id:'r40'},
      {t:'remove', id:'r41'},
      {t:'remove', id:'r42'},
      {t:'remove', id:'r43'},
      {t:'remove', id:'r44'},
      {t:'remove', id:'r45'},
      {t:'remove', id:'r46'},
      {t:'remove', id:'r47'},
      {t:'remove', id:'r48'},
      {t:'remove', id:'r49'},
      {t:'remove', id:'r50'},
      {t:'remove', id:'r51'},
      {t:'spread', x:9, y:50, cards:[{rank:'A', suit:'♠', face:'up'},{rank:'2', suit:'♠', face:'up'},{rank:'3', suit:'♠', face:'up'},{rank:'4', suit:'♠', face:'up'},{rank:'5', suit:'♠', face:'up'},{rank:'6', suit:'♠', face:'up'},{rank:'7', suit:'♠', face:'up'},{rank:'8', suit:'♠', face:'up'},{rank:'9', suit:'♠', face:'up'},{rank:'10', suit:'♠', face:'up'},{rank:'J', suit:'♠', face:'up'},{rank:'Q', suit:'♠', face:'up'},{rank:'K', suit:'♠', face:'up'},{rank:'A', suit:'♥', face:'up'},{rank:'2', suit:'♥', face:'up'},{rank:'3', suit:'♥', face:'up'},{rank:'4', suit:'♥', face:'up'},{rank:'5', suit:'♥', face:'up'},{rank:'6', suit:'♥', face:'up'},{rank:'7', suit:'♥', face:'up'},{rank:'8', suit:'♥', face:'up'},{rank:'9', suit:'♥', face:'up'},{rank:'10', suit:'♥', face:'up'},{rank:'J', suit:'♥', face:'up'},{rank:'Q', suit:'♥', face:'up'},{rank:'K', suit:'♥', face:'up'},{rank:'A', suit:'♦', face:'up'},{rank:'2', suit:'♦', face:'up'},{rank:'3', suit:'♦', face:'up'},{rank:'4', suit:'♦', face:'up'},{rank:'5', suit:'♦', face:'up'},{rank:'6', suit:'♦', face:'up'},{rank:'7', suit:'♦', face:'up'},{rank:'8', suit:'♦', face:'up'},{rank:'9', suit:'♦', face:'up'},{rank:'10', suit:'♦', face:'up'},{rank:'J', suit:'♦', face:'up'},{rank:'Q', suit:'♦', face:'up'},{rank:'K', suit:'♦', face:'up'},{rank:'A', suit:'♣', face:'up'},{rank:'2', suit:'♣', face:'up'},{rank:'3', suit:'♣', face:'up'},{rank:'4', suit:'♣', face:'up'},{rank:'5', suit:'♣', face:'up'},{rank:'6', suit:'♣', face:'up'},{rank:'7', suit:'♣', face:'up'},{rank:'8', suit:'♣', face:'up'},{rank:'9', suit:'♣', face:'up'},{rank:'10', suit:'♣', face:'up'},{rank:'J', suit:'♣', face:'up'},{rank:'Q', suit:'♣', face:'up'},{rank:'K', suit:'♣', face:'up'}], dx:1.32, w:8, face:'up', prefix:'u', stagger:18},
      {t:'hand', id:'rh', x:80, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'the turnover', x:50, y:88}
    ]},
  { caption: "Scoop it up squared. It fools no one and <b>frames everything else</b> — a clean ribbon before a selection makes the deck look ordinary, which is the point.",
    climax: true,
    actions: [
      {t:'remove', id:'u0'},
      {t:'remove', id:'u1'},
      {t:'remove', id:'u2'},
      {t:'remove', id:'u3'},
      {t:'remove', id:'u4'},
      {t:'remove', id:'u5'},
      {t:'remove', id:'u6'},
      {t:'remove', id:'u7'},
      {t:'remove', id:'u8'},
      {t:'remove', id:'u9'},
      {t:'remove', id:'u10'},
      {t:'remove', id:'u11'},
      {t:'remove', id:'u12'},
      {t:'remove', id:'u13'},
      {t:'remove', id:'u14'},
      {t:'remove', id:'u15'},
      {t:'remove', id:'u16'},
      {t:'remove', id:'u17'},
      {t:'remove', id:'u18'},
      {t:'remove', id:'u19'},
      {t:'remove', id:'u20'},
      {t:'remove', id:'u21'},
      {t:'remove', id:'u22'},
      {t:'remove', id:'u23'},
      {t:'remove', id:'u24'},
      {t:'remove', id:'u25'},
      {t:'remove', id:'u26'},
      {t:'remove', id:'u27'},
      {t:'remove', id:'u28'},
      {t:'remove', id:'u29'},
      {t:'remove', id:'u30'},
      {t:'remove', id:'u31'},
      {t:'remove', id:'u32'},
      {t:'remove', id:'u33'},
      {t:'remove', id:'u34'},
      {t:'remove', id:'u35'},
      {t:'remove', id:'u36'},
      {t:'remove', id:'u37'},
      {t:'remove', id:'u38'},
      {t:'remove', id:'u39'},
      {t:'remove', id:'u40'},
      {t:'remove', id:'u41'},
      {t:'remove', id:'u42'},
      {t:'remove', id:'u43'},
      {t:'remove', id:'u44'},
      {t:'remove', id:'u45'},
      {t:'remove', id:'u46'},
      {t:'remove', id:'u47'},
      {t:'remove', id:'u48'},
      {t:'remove', id:'u49'},
      {t:'remove', id:'u50'},
      {t:'remove', id:'u51'},
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'scooped · squared', x:50, y:88}
    ]}
]};
ANIMS.t50 = { steps: [
  { caption: "Deck face up in the left hand, dealing grip. They see the 4♥. The card you want — the A♠ — is waiting on the <b>bottom</b>.",
    beats: ["the setup"],
    actions: [
      {t:'packet', id:'deck', x:50, y:48, w:15, cards:[
        {rank:'A', suit:'♠', face:'down'}, {bulk:50}, {rank:'4', suit:'♥', face:'up'} ]},
      {t:'hand', id:'lh', x:34, y:58, side:'left', on:true, grip:'dealing grip'},
      {t:'label', id:'k', text:'face: 4♥ · bottom: A♠', x:50, y:88}
    ]},
  { caption: "Right hand comes over the face, palm flat — a <b>stroke</b>, not a pose. The cover lasts less than a second.",
    beats: ["cover the face"],
    actions: [
      {t:'hand', id:'rh', x:50, y:38, side:'right', on:true},
      {t:'note', id:'b', text:'a hand that wipes and leaves is furniture', x:50, y:18},
      {t:'label', id:'k', text:'covered — for less than a second', x:50, y:88}
    ]},
  { caption: "Under the cover, the left fingers slide the bottom card out to the right, into the right palm. The hand takes it and moves away.",
    beats: ["bottom card slides"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'repacket', id:'deck', cards:[ {bulk:50}, {rank:'4', suit:'♥', face:'up'} ]},
      {t:'card', id:'chg', rank:'A', suit:'♠', x:66, y:46, face:'up', w:13, z:6},
      {t:'palm', id:'chg'},
      {t:'hand', id:'rh', x:68, y:34},
      {t:'note', id:'b', text:'slid out under cover — into the right palm', x:26, y:74},
      {t:'label', id:'k', text:'the bottom card leaves with the hand', x:50, y:88}
    ]},
  { caption: "The hand strokes back across the face — and leaves what it stole sitting where the 4♥ showed.",
    beats: ["the wipe"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'chg', x:50, y:48},
      {t:'hand', id:'rh', x:57, y:36},
      {t:'label', id:'k', text:'the wipe', x:50, y:88}
    ]},
  { caption: "What they see is the hand lifting off a <b>changed face</b>: the A♠. The 4♥ never moved — it's still there, right underneath it.",
    beats: ["the change"], climax: true,
    actions: [
      {t:'unpalm', id:'chg'},
      {t:'hand', id:'rh', x:74, y:20},
      {t:'hi', id:'chg', on:true},
      {t:'label', id:'k', text:'4♥ → A♠ in one wipe', x:50, y:88}
    ]}
]};
ANIMS.t51 = { steps: [
  { caption: "Their card is chosen — the A♠. Now the set-up: get a pinky break under the top card, and let the inner end of that top card lift a few millimetres.",
    beats: ["pinky break"],
    actions: [
      {t:'deck', id:'d', x:50, y:54, n:51},
      {t:'card', id:'top', rank:'K', suit:'♣', x:50, y:46, face:'down', w:11, z:6, secret:{rank:'K', suit:'♣'}},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:78, y:38, face:'up', w:11},
      {t:'hand', id:'lh', x:38, y:60, side:'left', on:true},
      {t:'note', id:'b', text:'pinky break under the top card', x:24, y:70},
      {t:'label', id:'k', text:'break under the top card', x:50, y:88}
    ]},
  { caption: "The gap runs the width of the deck. From the front, the gap reads as the <b>middle</b> of the deck. From your side, keep it tight to the heel of the thumb — a wide gap is the tell.",
    beats: ["depth illusion"],
    actions: [
      {t:'move', id:'top', x:50, y:41},
      {t:'note', id:'b', text:'a gap that reads as the middle', x:74, y:64},
      {t:'label', id:'k', text:'the depth illusion', x:50, y:88}
    ]},
  { caption: "Take their card and push it into that gap, slowly, as if you were hunting for a fair spot. A little pretend difficulty sells it. Tilt the hand a fraction to your right as they look — the bad angle is straight down the inner end, and you never offer them that seat.",
    beats: ["the tilt"],
    actions: [
      {t:'flip', id:'sel', to:'down'},
      {t:'hand', id:'rh', x:66, y:32, side:'right', on:true},
      {t:'move', id:'sel', x:50, y:48, z:5},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'into the gap · not the middle', x:50, y:88}
    ]},
  { caption: "Square up. Their card is directly under the top card — second from the top. A double lift now shows the wrong card, and the ambitious-card phase writes itself.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'move', id:'top', x:50, y:30, z:6},
      {t:'move', id:'sel', x:50, y:30, z:5},
      {t:'flip', id:'top', to:'up'},
      {t:'label', id:'k', text:'second from top · double lift shows the K♣', x:50, y:88}
    ]}
]};
ANIMS.t52 = { steps: [
  { caption: "Three cards face-up in a row. You need them to land on one — call it the <b>target</b>. The other two are discards. Ask them to point to one card. (Identities are the display's own; the article names none.)",
    beats: ["magician's choice"],
    actions: [
      {t:'card', id:'a', rank:'A', suit:'♠', x:28, y:50, face:'up', w:13},
      {t:'card', id:'b', rank:'7', suit:'♥', x:50, y:50, face:'up', w:13},
      {t:'card', id:'c', rank:'Q', suit:'♣', x:72, y:50, face:'up', w:13},
      {t:'hi', id:'a', on:true},
      {t:'note', id:'n', text:'you need this one', x:28, y:28},
      {t:'label', id:'k', text:'point to one', x:50, y:88}
    ]},
  { caption: "They point to the 7♥. That is not the target — so this point is an <b>elimination</b>: “We'll eliminate that.” You decide which sentence fits <i>after</i> they point, not before.",
    beats: ["eliminate"],
    actions: [
      {t:'unnote', id:'n'},
      {t:'hi', id:'a', on:false},
      {t:'hi', id:'b', on:true},
      {t:'move', id:'b', x:50, y:22},
      {t:'label', id:'k', text:'“we’ll lose that one”', x:50, y:88}
    ]},
  { caption: "Two cards remain. They point to the A♠ — so this time the point <b>is</b> the selection, and you stop. The last discard leaves. Same question, two routes; the wording never changed meaning between them.",
    beats: ["keep it"],
    actions: [
      {t:'hi', id:'b', on:false},
      {t:'remove', id:'b'},
      {t:'move', id:'c', x:78, y:22},
      {t:'hi', id:'a', on:true},
      {t:'label', id:'k', text:'same question · other sentence', x:50, y:88}
    ]},
  { caption: "If they had pointed to the queen instead, you would have eliminated her, and the last card standing would be the same one. <b>Every choice was theirs; the ending was fixed before they opened their mouth.</b> Equivoque dies if you rush it — deal with the card they gave you, then ask.",
    climax: true,
    actions: [
      {t:'remove', id:'c'},
      {t:'move', id:'a', x:50, y:48},
      {t:'scale', id:'a', s:1.1},
      {t:'label', id:'k', text:'the ending was fixed', x:50, y:88}
    ]}
]};
ANIMS.t53 = { steps: [
  { caption: "Bevel the deck slightly toward the right. The left hand takes it with the <b>fingers on the face, thumb at the inner end</b> — the same grip as a thumb fan, then you don't use it that way.",
    beats: ["the grip"],
    actions: [
      {t:'deck', id:'d', x:48, y:54, n:52},
      {t:'rot', id:'d', deg:-6},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true, grip:'thumb-fan grip'},
      {t:'note', id:'b', text:'fingers on the face · thumb at the inner end', x:48, y:26},
      {t:'label', id:'k', text:'bevelled · thumb-fan grip', x:50, y:88}
    ]},
  { caption: "The right hand meets the deck and <b>presses back</b>, so the cards bow instead of sliding. The left thumb starts the spread.",
    beats: ["pressure"],
    actions: [
      {t:'hand', id:'rh', x:60, y:44, side:'right', on:true, grip:'pressing back'},
      {t:'note', id:'b', text:'the cards bow instead of sliding', x:48, y:26},
      {t:'label', id:'k', text:'two-hand pressure', x:50, y:88}
    ]},
  { caption: "As the left thumb clears, the right hand <b>keeps pushing through the arc</b>. The fan opens wider than a thumb fan, and the indices stay readable.",
    beats: ["open"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'d'},
      {t:'fan', x:52, y:56, count:52, spread:130, startDeg:-65, radius:15, w:9, face:'down', prefix:'fan'},
      {t:'label', id:'k', text:'the fan opens', x:50, y:88}
    ]},
  { caption: "Hold it: <b>wider than a thumb fan</b>, even and controlled — and it works on a tired deck, which the thumb fan will not. A fan you can't close cleanly isn't finished.",
    climax: true,
    actions: [
      {t:'label', id:'k', text:'wider than a thumb fan', x:50, y:88}
    ]},
  { caption: "Close it by <b>reversing the pressure</b> — same path, slower.",
    actions: [
      {t:'remove', id:'fan0'},
      {t:'remove', id:'fan1'},
      {t:'remove', id:'fan2'},
      {t:'remove', id:'fan3'},
      {t:'remove', id:'fan4'},
      {t:'remove', id:'fan5'},
      {t:'remove', id:'fan6'},
      {t:'remove', id:'fan7'},
      {t:'remove', id:'fan8'},
      {t:'remove', id:'fan9'},
      {t:'remove', id:'fan10'},
      {t:'remove', id:'fan11'},
      {t:'remove', id:'fan12'},
      {t:'remove', id:'fan13'},
      {t:'remove', id:'fan14'},
      {t:'remove', id:'fan15'},
      {t:'remove', id:'fan16'},
      {t:'remove', id:'fan17'},
      {t:'remove', id:'fan18'},
      {t:'remove', id:'fan19'},
      {t:'remove', id:'fan20'},
      {t:'remove', id:'fan21'},
      {t:'remove', id:'fan22'},
      {t:'remove', id:'fan23'},
      {t:'remove', id:'fan24'},
      {t:'remove', id:'fan25'},
      {t:'remove', id:'fan26'},
      {t:'remove', id:'fan27'},
      {t:'remove', id:'fan28'},
      {t:'remove', id:'fan29'},
      {t:'remove', id:'fan30'},
      {t:'remove', id:'fan31'},
      {t:'remove', id:'fan32'},
      {t:'remove', id:'fan33'},
      {t:'remove', id:'fan34'},
      {t:'remove', id:'fan35'},
      {t:'remove', id:'fan36'},
      {t:'remove', id:'fan37'},
      {t:'remove', id:'fan38'},
      {t:'remove', id:'fan39'},
      {t:'remove', id:'fan40'},
      {t:'remove', id:'fan41'},
      {t:'remove', id:'fan42'},
      {t:'remove', id:'fan43'},
      {t:'remove', id:'fan44'},
      {t:'remove', id:'fan45'},
      {t:'remove', id:'fan46'},
      {t:'remove', id:'fan47'},
      {t:'remove', id:'fan48'},
      {t:'remove', id:'fan49'},
      {t:'remove', id:'fan50'},
      {t:'remove', id:'fan51'},
      {t:'deck', id:'d', x:48, y:54, n:52},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'closed by reversing', x:50, y:88}
    ]}
]};
ANIMS.t54 = { steps: [
  { caption: "Spread the deck face-up, as if searching for a card or just showing the mix. Everything is — and looks — <b>completely fair</b>.",
    beats: ["the spread"],
    actions: [
      {t:'spread', x:6, y:50, count:20, dx:1.5, w:8, face:'up', prefix:'a'},
      {t:'packet', id:'rest', x:76, y:50, w:12, cards:[{bulk:32}]},
      {t:'hand', id:'rh', x:84, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'spreading face-up — searching', x:50, y:88}
    ]},
  { caption: "The spread keeps growing at the same pace — and reaches <b>the card you need</b>.",
    beats: ["reach the target"],
    actions: [
      {t:'spread', x:38, y:50, count:18, dx:1.4, w:8, face:'up', prefix:'b', cards:[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{id:'tgt'}]},
      {t:'repacket', id:'rest', cards:[{bulk:14}]},
      {t:'move', id:'rest', x:82, y:50},
      {t:'hi', id:'tgt', on:true},
      {t:'label', id:'k', text:'the target — reached', x:50, y:88}
    ]},
  { caption: "Your right fingers catch the target under cover of the spread, and it <b>rides flush underneath</b> the cards. Keep the rhythm of the spread completely uniform — pausing or jerking here is what exposes the cull.",
    beats: ["cull"],
    actions: [
      {t:'hi', id:'tgt', on:false},
      {t:'remove', id:'tgt'},
      {t:'card', id:'tgt', x:62, y:50, face:'down', w:9, ghost:true},
      {t:'move', id:'tgt', x:48, y:65},
      {t:'note', id:'b', text:'riding flush underneath (Exposed)', x:50, y:26},
      {t:'label', id:'k', text:'culled under the spread', x:50, y:88}
    ]},
  { caption: "Square the spread — and the target has arrived <b>on top of the deck</b>, exactly where you drew it.",
    climax: true,
    actions: [
      {t:'remove', id:'a0'},
      {t:'remove', id:'a1'},
      {t:'remove', id:'a2'},
      {t:'remove', id:'a3'},
      {t:'remove', id:'a4'},
      {t:'remove', id:'a5'},
      {t:'remove', id:'a6'},
      {t:'remove', id:'a7'},
      {t:'remove', id:'a8'},
      {t:'remove', id:'a9'},
      {t:'remove', id:'a10'},
      {t:'remove', id:'a11'},
      {t:'remove', id:'a12'},
      {t:'remove', id:'a13'},
      {t:'remove', id:'a14'},
      {t:'remove', id:'a15'},
      {t:'remove', id:'a16'},
      {t:'remove', id:'a17'},
      {t:'remove', id:'a18'},
      {t:'remove', id:'a19'},
      {t:'remove', id:'b0'},
      {t:'remove', id:'b1'},
      {t:'remove', id:'b2'},
      {t:'remove', id:'b3'},
      {t:'remove', id:'b4'},
      {t:'remove', id:'b5'},
      {t:'remove', id:'b6'},
      {t:'remove', id:'b7'},
      {t:'remove', id:'b8'},
      {t:'remove', id:'b9'},
      {t:'remove', id:'b10'},
      {t:'remove', id:'b11'},
      {t:'remove', id:'b12'},
      {t:'remove', id:'b13'},
      {t:'remove', id:'b14'},
      {t:'remove', id:'b15'},
      {t:'remove', id:'b16'},
      {t:'remove', id:'rest'},
      {t:'packet', id:'deck', x:50, y:50, w:13, cards:[{bulk:51}]},
      {t:'reveal', id:'tgt'},
      {t:'move', id:'tgt', x:50, y:40, z:5},
      {t:'hi', id:'tgt', on:true},
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'culled to the top', x:50, y:88}
    ]}
]};
ANIMS.t55 = { steps: [
  { caption: "Their card is buried in the center of the deck, held under a <b>pinky break</b> — the break sits above it, and the deck looks innocent.",
    beats: ["pinky break"],
    actions: [
      {t:'packet', id:'low', x:48, y:55, w:13, cards:[{bulk:25},{rank:'A', suit:'♠', face:'down'}]},
      {t:'packet', id:'up', x:48, y:41, w:13, cards:[{bulk:26}]},
      {t:'hand', id:'lh', x:36, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'break above their card', x:50, y:88}
    ]},
  { caption: "The right hand <b>covers the deck, as if only squaring it</b> — a casual adjustment, nothing more.",
    beats: ["cover"],
    actions: [
      {t:'hand', id:'rh', x:59, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'cover', x:50, y:88}
    ]},
  { caption: "Under that cover, the right fingertips <b>push the card out sideways</b> — clear of the pack, straight into the right palm.",
    beats: ["side steal"],
    actions: [
      {t:'repacket', id:'low', cards:[{bulk:25}]},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:48, y:46, face:'down', w:11, z:8, secret:{rank:'A', suit:'♠'}},
      {t:'palm', id:'sel'},
      {t:'move', id:'sel', x:66, y:48},
      {t:'label', id:'k', text:'sideways · into the palm', x:50, y:88}
    ]},
  { caption: "The hands separate in <b>one natural motion</b> — the deck is clean, and their card rides in the palm, ready to produce or load. Do the steal inside a gesture: still hands are watched hands.",
    climax: true,
    actions: [
      {t:'move', id:'sel', x:76, y:44},
      {t:'move', id:'up', x:48, y:53},
      {t:'hand', id:'rh', x:78, y:40, side:'right', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'deck clean · card stolen', x:50, y:88}
    ]}
]};
;
ANIMS.t56 = { steps: [
  { caption: "Display the <b>four kings — the cannibals</b>. Three spectators each choose a card: the missionaries (in this run-through, the A♦, the 9♠ and the 5♥). Seven cards in play, all shown.",
    beats: ["the cannibals"],
    actions: [
      {t:'card', id:'k1', rank:'K', suit:'♠', x:20, y:34, face:'up', w:11},
      {t:'card', id:'k2', rank:'K', suit:'♥', x:40, y:34, face:'up', w:11},
      {t:'card', id:'k3', rank:'K', suit:'♦', x:60, y:34, face:'up', w:11},
      {t:'card', id:'k4', rank:'K', suit:'♣', x:80, y:34, face:'up', w:11},
      {t:'card', id:'m1', rank:'A', suit:'♦', x:30, y:62, face:'up', w:11},
      {t:'card', id:'m2', rank:'9', suit:'♠', x:50, y:62, face:'up', w:11},
      {t:'card', id:'m3', rank:'5', suit:'♥', x:70, y:62, face:'up', w:11},
      {t:'label', id:'k', text:'four kings · three missionaries', x:50, y:88}
    ]},
  { caption: "Place <b>one missionary under each of the first three kings</b>, and tuck the fourth king on top of the packet. Exposed view reads the stack from the bottom: missionary, king, missionary, king, missionary, king, king — every chosen card is inside, under a king.",
    beats: ["sandwich the missionaries"],
    actions: [
      {t:'remove', id:'k1'},
      {t:'remove', id:'k2'},
      {t:'remove', id:'k3'},
      {t:'remove', id:'k4'},
      {t:'remove', id:'m1'},
      {t:'remove', id:'m2'},
      {t:'remove', id:'m3'},
      {t:'packet', id:'pkt', x:50, y:50, w:14, cards:[{rank:'A', suit:'♦', face:'up'},{rank:'K', suit:'♠', face:'up'},{rank:'9', suit:'♠', face:'up'},{rank:'K', suit:'♥', face:'up'},{rank:'5', suit:'♥', face:'up'},{rank:'K', suit:'♦', face:'up'},{rank:'K', suit:'♣', face:'up'}]},
      {t:'label', id:'k', text:'each missionary under a king', x:50, y:88}
    ]},
  { caption: "Tell the story properly — <b>a narrative beat for each king's meal</b>. Square the packet face-down and commit to the fiction: the kings are eating. The framing is half the trick, so pace it — let the audience picture each meal before the finish.",
    beats: ["the story"],
    actions: [
      {t:'repacket', id:'pkt', cards:[{rank:'A', suit:'♦', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'5', suit:'♥', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'K', suit:'♣', face:'down'}]},
      {t:'hand', id:'rh', x:64, y:38, side:'right', on:true},
      {t:'note', id:'b', text:'a beat for each meal…', x:50, y:24},
      {t:'label', id:'k', text:'the kings feed', x:50, y:88}
    ]},
  { caption: "Spread the four kings: <b>three cards are trapped between them — the three chosen cards</b>, back from the dead. The missionaries were inside the packet the whole time; the story is what made them vanish.",
    climax: true,
    actions: [
      {t:'remove', id:'pkt'},
      {t:'card', id:'k1', rank:'K', suit:'♠', x:14, y:50, face:'up', w:11},
      {t:'card', id:'m1', rank:'A', suit:'♦', x:26, y:50, face:'up', w:11},
      {t:'card', id:'k2', rank:'K', suit:'♥', x:38, y:50, face:'up', w:11},
      {t:'card', id:'m2', rank:'9', suit:'♠', x:50, y:50, face:'up', w:11},
      {t:'card', id:'k3', rank:'K', suit:'♦', x:62, y:50, face:'up', w:11},
      {t:'card', id:'m3', rank:'5', suit:'♥', x:74, y:50, face:'up', w:11},
      {t:'card', id:'k4', rank:'K', suit:'♣', x:86, y:50, face:'up', w:11},
      {t:'hi', id:'m1', on:true},
      {t:'hi', id:'m2', on:true},
      {t:'hi', id:'m3', on:true},
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'the missionaries — inside the kings', x:50, y:88}
    ]}
]};
ANIMS.t57 = { steps: [
  { caption: "Show the <b>four aces</b> clearly. Sixteen cards in play: the aces, and twelve indifferent cards to bury them with.",
    beats: ["show the aces"],
    actions: [
      {t:'card', id:'a1', rank:'A', suit:'♠', x:26, y:36, face:'up', w:11},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:42, y:36, face:'up', w:11},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:58, y:36, face:'up', w:11},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:74, y:36, face:'up', w:11},
      {t:'packet', id:'stock', x:50, y:62, w:13, cards:[{bulk:12}]},
      {t:'label', id:'k', text:'four aces · twelve indifferent cards', x:50, y:88}
    ]},
  { caption: "Deal the aces <b>face-down into four separate packets</b> on the table, burying each under three indifferent cards. Four packets, an ace in every one — as far as anyone can tell (Exposed view holds each packet's composition).",
    beats: ["deal four packets"],
    actions: [
      {t:'remove', id:'a1'},
      {t:'remove', id:'a2'},
      {t:'remove', id:'a3'},
      {t:'remove', id:'a4'},
      {t:'remove', id:'stock'},
      {t:'packet', id:'p1', x:17, y:52, w:12, cards:[{rank:'A', suit:'♠', face:'down'},{bulk:3}]},
      {t:'packet', id:'p2', x:39, y:52, w:12, cards:[{rank:'A', suit:'♥', face:'down'},{bulk:3}]},
      {t:'packet', id:'p3', x:61, y:52, w:12, cards:[{rank:'A', suit:'♦', face:'down'},{bulk:3}]},
      {t:'packet', id:'p4', x:83, y:52, w:12, cards:[{rank:'A', suit:'♣', face:'down'},{bulk:3}]},
      {t:'label', id:'k', text:'an ace buried in each packet', x:50, y:88}
    ]},
  { caption: "Now the premise is quietly rebuilt — a <b>subtle packet switch, the classic master move</b>: as you gesture over each packet in turn, the first three aces are gathered into the final packet (Exposed view: packets one to three are now covers only; the clan is already together, under the last packet's covers).",
    beats: ["the master move"],
    actions: [
      {t:'repacket', id:'p1', cards:[{bulk:3}]},
      {t:'repacket', id:'p2', cards:[{bulk:3}]},
      {t:'repacket', id:'p3', cards:[{bulk:3}]},
      {t:'repacket', id:'p4', cards:[{rank:'A', suit:'♣', face:'down'},{bulk:3},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', x:60, y:36, side:'right', on:true},
      {t:'note', id:'b', text:'the aces gather — under the gestures', x:50, y:24},
      {t:'label', id:'k', text:'a gesture over each packet', x:50, y:88}
    ]},
  { caption: "Turn over the first three packets, one at a time: <b>the aces have vanished from every one</b> — nothing but indifferent cards.",
    beats: ["the vanishes"],
    actions: [
      {t:'remove', id:'p1'},
      {t:'remove', id:'p2'},
      {t:'remove', id:'p3'},
      {t:'spread', x:8, y:40, dx:9, w:9, face:'up', prefix:'e1', cards:[{rank:'3', suit:'♣'},{rank:'8', suit:'♦'},{rank:'J', suit:'♠'}]},
      {t:'spread', x:8, y:58, dx:9, w:9, face:'up', prefix:'e2', cards:[{rank:'5', suit:'♠'},{rank:'10', suit:'♥'},{rank:'2', suit:'♦'}]},
      {t:'spread', x:8, y:76, dx:9, w:9, face:'up', prefix:'e3', cards:[{rank:'7', suit:'♥'},{rank:'4', suit:'♣'},{rank:'Q', suit:'♠'}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'gone from the first three', x:50, y:88}
    ]},
  { caption: "Turn over the final packet: <b>all four aces, gathered together</b> — the whole clan, keeping company in the last place anyone left them. The clean-hands assembly: the gathering happened before the magic was announced.",
    climax: true,
    actions: [
      {t:'remove', id:'p4'},
      {t:'spread', x:52, y:36, dx:9, w:9, face:'up', prefix:'cov', cards:[{rank:'6', suit:'♦'},{rank:'9', suit:'♣'},{rank:'K', suit:'♥'}]},
      {t:'card', id:'a1', rank:'A', suit:'♠', x:54, y:58, face:'up', w:11, z:5},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:65, y:58, face:'up', w:11, z:5},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:76, y:58, face:'up', w:11, z:5},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:87, y:58, face:'up', w:11, z:5},
      {t:'hi', id:'a1', on:true},
      {t:'hi', id:'a2', on:true},
      {t:'hi', id:'a3', on:true},
      {t:'hi', id:'a4', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'the clan is gathered', x:50, y:88}
    ]}
]};
ANIMS.t58 = { steps: [
  { caption: "Display <b>four aces</b> in your hand and <b>four kings</b> on the table. Eight cards — that's the whole trick. Everything else is counting.",
    beats: ["the display"],
    actions: [
      {t:'spread', x:14, y:30, count:4, dx:13, w:11, face:'up', prefix:'a', cards:[{id:'a0', rank:'A', suit:'♠'},{id:'a1', rank:'A', suit:'♥'},{id:'a2', rank:'A', suit:'♦'},{id:'a3', rank:'A', suit:'♣'}]},
      {t:'spread', x:14, y:64, count:4, dx:13, w:11, face:'up', prefix:'k', cards:[{id:'k0', rank:'K', suit:'♠'},{id:'k1', rank:'K', suit:'♥'},{id:'k2', rank:'K', suit:'♦'},{id:'k3', rank:'K', suit:'♣'}]},
      {t:'label', id:'k', text:'aces in hand · kings on the table', x:50, y:88}
    ]},
  { caption: "Gather everything into one packet. <b>The count loads the kings beneath the aces</b> — counted one way the packet shows aces; counted the other way, it can show a king (Exposed).",
    beats: ["elmsley count","pinky break"],
    actions: [
      {t:'remove', id:'a0'},
      {t:'remove', id:'a1'},
      {t:'remove', id:'a2'},
      {t:'remove', id:'a3'},
      {t:'remove', id:'k0'},
      {t:'remove', id:'k1'},
      {t:'remove', id:'k2'},
      {t:'remove', id:'k3'},
      {t:'packet', id:'H', x:34, y:46, w:13, cards:[{rank:'K', suit:'♠', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'K', suit:'♣', face:'down'},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'up'}]},
      {t:'hand', id:'lh', x:24, y:52, side:'left', on:true},
      {t:'hand', id:'rh', x:46, y:40, side:'right', on:true},
      {t:'note', id:'b', text:'kings loaded under the aces (Exposed)', x:62, y:24},
      {t:'label', id:'k', text:'one packet of eight', x:50, y:88}
    ]},
  { caption: "Count one: the face card is a <b>king</b> now — place it on the table pile. The ace it replaced never left: the count buried it at the back of the packet (Exposed).",
    beats: ["transformation"],
    actions: [
      {t:'repacket', id:'H', cards:[{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'K', suit:'♣', face:'up'}]},
      {t:'repacket', id:'H', cards:[{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'up'}]},
      {t:'packet', id:'T', x:64, y:58, w:12, cards:[{rank:'K', suit:'♣', face:'up'}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'one king on the pile', x:50, y:88}
    ]},
  { caption: "Again, and again, and once more: each count shows a king, each king joins the pile — and <b>every ace is still in the packet</b>, buried one by one (Exposed).",
    beats: ["transformations"],
    actions: [
      {t:'repacket', id:'H', cards:[{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'K', suit:'♦', face:'up'}]},
      {t:'repacket', id:'H', cards:[{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'up'}]},
      {t:'repacket', id:'T', cards:[{rank:'K', suit:'♣', face:'up'},{rank:'K', suit:'♦', face:'up'}]},
      {t:'repacket', id:'H', cards:[{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'A', suit:'♣', face:'down'},{rank:'K', suit:'♥', face:'up'}]},
      {t:'repacket', id:'H', cards:[{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'A', suit:'♣', face:'up'}]},
      {t:'repacket', id:'T', cards:[{rank:'K', suit:'♣', face:'up'},{rank:'K', suit:'♦', face:'up'},{rank:'K', suit:'♥', face:'up'}]},
      {t:'repacket', id:'H', cards:[{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'up'}]},
      {t:'repacket', id:'H', cards:[{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'up'}]},
      {t:'repacket', id:'T', cards:[{rank:'K', suit:'♣', face:'up'},{rank:'K', suit:'♦', face:'up'},{rank:'K', suit:'♥', face:'up'},{rank:'K', suit:'♠', face:'up'}]},
      {t:'label', id:'k', text:'four kings on the pile', x:50, y:88}
    ]},
  { caption: "A magical gesture over both packets — then spread them: <b>the aces have returned to your hand and the kings to the table</b>. Reset. The instant reset dismantles the audience's card-count tracking — that collapse is what makes it so fooling.",
    beats: ["reset"], climax: true,
    actions: [
      {t:'remove', id:'H'},
      {t:'remove', id:'T'},
      {t:'spread', x:14, y:30, count:4, dx:13, w:11, face:'up', prefix:'a', cards:[{id:'a0', rank:'A', suit:'♠'},{id:'a1', rank:'A', suit:'♥'},{id:'a2', rank:'A', suit:'♦'},{id:'a3', rank:'A', suit:'♣'}]},
      {t:'spread', x:14, y:64, count:4, dx:13, w:11, face:'up', prefix:'k', cards:[{id:'k0', rank:'K', suit:'♠'},{id:'k1', rank:'K', suit:'♥'},{id:'k2', rank:'K', suit:'♦'},{id:'k3', rank:'K', suit:'♣'}]},
      {t:'hi', id:'a0', on:true},
      {t:'hi', id:'a1', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'reset — everything restored', x:50, y:88}
    ]}
]};
ANIMS.t59 = { steps: [
  { caption: "Secretly pre-arrange a fourteen-card stack on top: <b>spades 2–7, three plain aces, the A♠ tenth, then spades 10–K</b>. Exposed view can read the whole setup.",
    beats: ["the stack"],
    actions: [
      {t:'packet', id:'dk', x:50, y:54, w:13, cards:[{bulk:38},{rank:'K', suit:'♠', face:'down'},{rank:'Q', suit:'♠', face:'down'},{rank:'J', suit:'♠', face:'down'},{rank:'10', suit:'♠', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'7', suit:'♠', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'5', suit:'♠', face:'down'},{rank:'4', suit:'♠', face:'down'},{rank:'3', suit:'♠', face:'down'},{rank:'2', suit:'♠', face:'down'}]},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'note', id:'b', text:'stack: 2♠–7♠ · three aces · A♠ 10th · 10♠–K♠', x:50, y:24},
      {t:'label', id:'k', text:'a stacked deck', x:50, y:88}
    ]},
  { caption: "The spectator names a number from 10 to 20 — say <b>13</b>. Deal thirteen cards into a pile, reversing their order. Add the digits: 1 + 3 = 4.",
    beats: ["named number"],
    actions: [
      {t:'repacket', id:'dk', cards:[{bulk:38},{rank:'K', suit:'♠', face:'down'}]},
      {t:'packet', id:'pl', x:28, y:38, w:12, cards:[{rank:'2', suit:'♠', face:'down'},{rank:'3', suit:'♠', face:'down'},{rank:'4', suit:'♠', face:'down'},{rank:'5', suit:'♠', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'7', suit:'♠', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'10', suit:'♠', face:'down'},{rank:'J', suit:'♠', face:'down'},{rank:'Q', suit:'♠', face:'down'}]},
      {t:'note', id:'b', text:'they name 13 · 1 + 3 = 4', x:66, y:24},
      {t:'label', id:'k', text:'thirteen dealt', x:50, y:88}
    ]},
  { caption: "Count down four into the dealt pile: Q♠, J♠, 10♠ — and the fourth card is the <b>A♠</b>, exactly where the stack put it.",
    beats: ["count down"],
    actions: [
      {t:'repacket', id:'pl', cards:[{rank:'2', suit:'♠', face:'down'},{rank:'3', suit:'♠', face:'down'},{rank:'4', suit:'♠', face:'down'},{rank:'5', suit:'♠', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'7', suit:'♠', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♣', face:'down'}]},
      {t:'card', id:'c1', rank:'Q', suit:'♠', x:58, y:32, face:'down', w:10, secret:{rank:'Q', suit:'♠'}},
      {t:'card', id:'c2', rank:'J', suit:'♠', x:58, y:47, face:'down', w:10, secret:{rank:'J', suit:'♠'}},
      {t:'card', id:'c3', rank:'10', suit:'♠', x:58, y:62, face:'down', w:10, secret:{rank:'10', suit:'♠'}},
      {t:'card', id:'as', rank:'A', suit:'♠', x:76, y:47, face:'up', w:12, z:4},
      {t:'hi', id:'as', on:true},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'count: 1 · 2 · 3 · four', x:50, y:88}
    ]},
  { caption: "Further than that: spell <b>A-C-E O-F S-P-A-D-E-S</b>, dealing one card per letter from the deck — and on the last letter, the A♠ itself is produced.",
    beats: ["the spell"],
    actions: [
      {t:'repacket', id:'dk', cards:[{bulk:29}]},
      {t:'card', id:'s1', rank:'K', suit:'♠', x:12, y:72, face:'down', w:8, secret:{rank:'K', suit:'♠'}},
      {t:'card', id:'s2', x:19.5, y:72, face:'down', w:8},
      {t:'card', id:'s3', x:27, y:72, face:'down', w:8},
      {t:'card', id:'s4', x:34.5, y:72, face:'down', w:8},
      {t:'card', id:'s5', x:42, y:72, face:'down', w:8},
      {t:'card', id:'s6', x:49.5, y:72, face:'down', w:8},
      {t:'card', id:'s7', x:57, y:72, face:'down', w:8},
      {t:'card', id:'s8', x:64.5, y:72, face:'down', w:8},
      {t:'card', id:'s9', x:72, y:72, face:'down', w:8},
      {t:'card', id:'s10', x:79.5, y:72, face:'down', w:8},
      {t:'move', id:'as', x:89, y:70, z:5},
      {t:'note', id:'b', text:'A-C-E · O-F · S-P-A-D-E-S — eleven letters', x:50, y:12},
      {t:'label', id:'k', text:'one card per letter', x:50, y:88}
    ]},
  { caption: "Further than that: turn over the top of the dealt pile — <b>the other three aces</b> were waiting right underneath the A♠ all along.",
    beats: ["three aces"],
    actions: [
      {t:'repacket', id:'pl', cards:[{rank:'2', suit:'♠', face:'down'},{rank:'3', suit:'♠', face:'down'},{rank:'4', suit:'♠', face:'down'},{rank:'5', suit:'♠', face:'down'},{rank:'6', suit:'♠', face:'down'},{rank:'7', suit:'♠', face:'down'}]},
      {t:'card', id:'ac1', rank:'A', suit:'♣', x:22, y:20, face:'up', w:10},
      {t:'card', id:'ac2', rank:'A', suit:'♦', x:34, y:20, face:'up', w:10},
      {t:'card', id:'ac3', rank:'A', suit:'♥', x:46, y:20, face:'up', w:10},
      {t:'hi', id:'ac2', on:true},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'the other three aces', x:50, y:88}
    ]},
  { caption: "And further than that: the count-down cards, the last stack card from under the spell, and the A♠ complete a <b>royal flush in spades</b>. The stack was loaded with the whole ending.",
    beats: ["royal flush"], climax: true,
    actions: [
      {t:'flip', id:'c1', to:'up'},
      {t:'flip', id:'c2', to:'up'},
      {t:'flip', id:'c3', to:'up'},
      {t:'flip', id:'s1', to:'up'},
      {t:'move', id:'c3', x:24, y:34, z:5},
      {t:'move', id:'c2', x:36, y:34, z:5},
      {t:'move', id:'c1', x:48, y:34, z:5},
      {t:'move', id:'s1', x:60, y:34, z:5},
      {t:'move', id:'as', x:72, y:32, z:6},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'further than that — royal flush', x:50, y:88}
    ]}
]};
ANIMS.t60 = { steps: [
  { caption: "Have a spectator select and remember a card: the 9♥. Triumph with the sleights taken out — the procedure is honest, and the deck still rights itself.",
    beats: ["selection"],
    actions: [
      {t:'deck', id:'d', x:50, y:52, n:51, z:3},
      {t:'card', id:'sel', rank:'9', suit:'♥', x:50, y:34, face:'up', w:12, z:6, secret:{rank:'9', suit:'♥'}},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'selection: the 9♥', x:50, y:88}
    ]},
  { caption: "Their card goes back, and the deck is worked through Bannon's procedural system — interleaving face-up and face-down packets. No sleight of hand anywhere in it: the method is procedure, and the presentation should say so.",
    beats: ["the procedure", "no sleights"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:50, y:50, z:1},
      {t:'remove', id:'d'},
      {t:'packet', id:'fd1', x:28, y:46, n:13},
      {t:'spread', x:42, y:46, count:6, dx:6, face:'up', w:8, prefix:'fu', cards:[{},{},{},{},{},{}]},
      {t:'packet', id:'fd2', x:74, y:46, n:13},
      {t:'move', id:'fd1', x:38, y:50},
      {t:'move', id:'fd2', x:62, y:50},
      {t:'remove', id:'fd1'},
      {t:'remove', id:'fu0'},
      {t:'remove', id:'fu1'},
      {t:'remove', id:'fu2'},
      {t:'remove', id:'fu3'},
      {t:'remove', id:'fu4'},
      {t:'remove', id:'fu5'},
      {t:'remove', id:'fd2'},
      {t:'deck', id:'d', x:50, y:50, n:51, z:3},
      {t:'label', id:'k', text:'honest interleave · nothing hidden', x:50, y:88}
    ]},
  { caption: "Ribbon-spread the deck: every card has turned face-down — except for twelve cards of the chosen suit in ace-to-king order, with only their selection missing. The face-down card in the gap is the 9♥; Exposed view can name it.",
    beats: ["ribbon spread"],
    actions: [
      {t:'remove', id:'d'},
      {t:'spread', x:5, y:68, count:13, dx:6.9, face:'down', w:8, prefix:'bk'},
      {t:'spread', x:6, y:38, count:8, dx:6.2, face:'up', w:8.5, prefix:'h', cards:[{id:'h0', rank:'A', suit:'♥'},{id:'h1', rank:'2', suit:'♥'},{id:'h2', rank:'3', suit:'♥'},{id:'h3', rank:'4', suit:'♥'},{id:'h4', rank:'5', suit:'♥'},{id:'h5', rank:'6', suit:'♥'},{id:'h6', rank:'7', suit:'♥'},{id:'h7', rank:'8', suit:'♥'}]},
      {t:'spread', x:62, y:38, count:4, dx:6.2, face:'up', w:8.5, prefix:'j', cards:[{id:'j0', rank:'10', suit:'♥'},{id:'j1', rank:'J', suit:'♥'},{id:'j2', rank:'Q', suit:'♥'},{id:'j3', rank:'K', suit:'♥'}]},
      {t:'move', id:'sel', x:56, y:38, z:6},
      {t:'note', id:'b', text:'the suit in order · one card missing', x:50, y:16},
      {t:'label', id:'k', text:'hearts in order · the 9♥ missing', x:50, y:88}
    ]},
  { caption: "The missing card is theirs. Turn it over: the 9♥ completes the suit. Frame it as mental order over chaos rather than manual dexterity.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'scale', id:'sel', s:1.15},
      {t:'label', id:'k', text:'the selection completes the run', x:50, y:88}
    ]}
]};
ANIMS.t61 = { steps: [
  { caption: "Deal a block of cards face-up into a row, and set down a <b>pre-written prediction</b>. The rule: follow each card's value forward — <b>face cards count 5, aces count 1</b>, numbers are face value.",
    beats: ["the rule"],
    actions: [
      {t:'spread', x:8, y:48, dx:8.6, w:7.5, face:'up', prefix:'k', cards:[{id:'k0', rank:'2', suit:'♦', face:'up'},{id:'k1', rank:'4', suit:'♣', face:'up'},{id:'k2', rank:'3', suit:'♥', face:'up'},{id:'k3', rank:'K', suit:'♠', face:'up'},{id:'k4', rank:'A', suit:'♦', face:'up'},{id:'k5', rank:'3', suit:'♣', face:'up'},{id:'k6', rank:'2', suit:'♠', face:'up'},{id:'k7', rank:'A', suit:'♥', face:'up'},{id:'k8', rank:'K', suit:'♦', face:'up'},{id:'k9', rank:'6', suit:'♣', face:'up'}]},
      {t:'note', id:'env', text:'sealed prediction — written before the first card was dealt', x:50, y:18},
      {t:'label', id:'k', text:'pick any starting card', x:50, y:88}
    ]},
  { caption: "They mentally choose a starting point and a secret word to count by. Say they start on the <b>2♦</b> — two steps forward…",
    beats: ["the chain"],
    actions: [
      {t:'hi', id:'k0', on:true},
      {t:'label', id:'k', text:'start: 2♦ (+2)', x:50, y:88}
    ]},
  { caption: "…lands on the 3♥; three more to the 3♣; three more to the <b>K♦</b>, where the count runs out of road. One path, traced.",
    actions: [
      {t:'hi', id:'k2', on:true},
      {t:'hi', id:'k5', on:true},
      {t:'hi', id:'k8', on:true},
      {t:'label', id:'k', text:'2♦ → 3♥ → 3♣ → K♦', x:50, y:88}
    ]},
  { caption: "Start somewhere else entirely — the <b>K♠</b>: five steps, the same K♦. In fact <b>every start in the row merges</b> onto it. Kruskal's principle quietly herds all the paths together — as long as the counting rules are stated clearly.",
    beats: ["convergence"],
    actions: [
      {t:'hi', id:'k0', on:false},
      {t:'hi', id:'k2', on:false},
      {t:'hi', id:'k5', on:false},
      {t:'hi', id:'k3', on:true},
      {t:'label', id:'k', text:'every start merges here', x:50, y:88}
    ]},
  { caption: "Open the prediction: <b>K♦</b>. Pure mathematics wearing a card trick's clothes — invisible, and inevitable.",
    climax: true,
    actions: [
      {t:'note', id:'env', text:'the prediction, written first: K♦', x:50, y:18},
      {t:'scale', id:'k8', s:1.15},
      {t:'label', id:'k', text:'the Kruskal card', x:50, y:88}
    ]}
]};
ANIMS.t62 = { steps: [
  { caption: "Eight cards live in your pocket — a small, specially oriented bank. Here they are face up, so you can learn the bank: A♠, 3♥, 5♦, 7♣, 9♠, J♥, K♦, 2♣.",
    beats: ["the bank"],
    actions: [
      {t:'spread', x:10, y:48, count:8, dx:10.5, face:'up', w:9.5, prefix:'b', cards:[{id:'b0', rank:'A', suit:'♠'},{id:'b1', rank:'3', suit:'♥'},{id:'b2', rank:'5', suit:'♦'},{id:'b3', rank:'7', suit:'♣'},{id:'b4', rank:'9', suit:'♠'},{id:'b5', rank:'J', suit:'♥'},{id:'b6', rank:'K', suit:'♦'},{id:'b7', rank:'2', suit:'♣'}]},
      {t:'label', id:'k', text:'the eight-card bank', x:50, y:88}
    ]},
  { caption: "Ask the spectator to choose a number between 1 and 8 and to name a suit. They say: 'Six — hearts.' Gather the bank into its working packet. No switch, no secret turn: the orientation was set before they spoke.",
    beats: ["free choice"],
    actions: [
      {t:'remove', id:'b0'},
      {t:'remove', id:'b1'},
      {t:'remove', id:'b2'},
      {t:'remove', id:'b3'},
      {t:'remove', id:'b4'},
      {t:'remove', id:'b5'},
      {t:'remove', id:'b6'},
      {t:'remove', id:'b7'},
      {t:'packet', id:'pk', x:50, y:50, w:13, cards:[{rank:'2', suit:'♣', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'J', suit:'♥', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'7', suit:'♣', face:'down'},{rank:'5', suit:'♦', face:'down'},{rank:'3', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'note', id:'b', text:'their choice: 6 · hearts', x:50, y:24},
      {t:'label', id:'k', text:'they name 6 · hearts', x:50, y:88}
    ]},
  { caption: "Count down to their chosen number, dealing honestly. The specialized counting sequence rides on the Gilbreath principle — it keeps the orientation honest. This is arithmetic, not sleight of hand.",
    beats: ["Gilbreath count"],
    actions: [
      {t:'repacket', id:'pk', cards:[{rank:'2', suit:'♣', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'J', suit:'♥', face:'down'}]},
      {t:'packet', id:'dealt', x:28, y:50, w:12, cards:[{rank:'A', suit:'♠', face:'down'},{rank:'3', suit:'♥', face:'down'},{rank:'5', suit:'♦', face:'down'},{rank:'7', suit:'♣', face:'down'},{rank:'9', suit:'♠', face:'down'}]},
      {t:'label', id:'k', text:'count: 1 · 2 · 3 · 4 · 5 …', x:50, y:88}
    ]},
  { caption: "Spread the packet: every card faces the same way — except one. The sixth card, the J♥: the number they chose, the suit they named. Their card is the only stranger in the packet.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'pk'},
      {t:'remove', id:'dealt'},
      {t:'spread', x:10, y:48, count:8, dx:10.5, face:'down', w:9.5, prefix:'d', cards:[{id:'d0', rank:'A', suit:'♠', face:'down'},{id:'d1', rank:'3', suit:'♥', face:'down'},{id:'d2', rank:'5', suit:'♦', face:'down'},{id:'d3', rank:'7', suit:'♣', face:'down'},{id:'d4', rank:'9', suit:'♠', face:'down'},{id:'d5', rank:'J', suit:'♥', face:'up'},{id:'d6', rank:'K', suit:'♦', face:'down'},{id:'d7', rank:'2', suit:'♣', face:'down'}]},
      {t:'hi', id:'d5', on:true},
      {t:'label', id:'k', text:'only the J♥ faces the other way', x:50, y:88}
    ]}
]};
ANIMS.t63 = { steps: [
  { caption: "Square the deck into <b>two equal halves</b> and angle the inner corners of the packets together, thumbs on top.",
    beats: ["the setup"],
    actions: [
      {t:'packet', id:'h1', x:38, y:46, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'h2', x:62, y:46, w:13, cards:[{bulk:26}]},
      {t:'rot', id:'h1', deg:-10},
      {t:'rot', id:'h2', deg:10},
      {t:'hand', id:'lh', x:28, y:52, side:'left', on:true},
      {t:'hand', id:'rh', x:72, y:52, side:'right', on:true},
      {t:'note', id:'b', text:'thumbs on the inner corners', x:50, y:22},
      {t:'label', id:'k', text:'two halves · corners angled', x:50, y:88}
    ]},
  { caption: "Lift the inner corners slightly with your thumbs while <b>pushing the packets into one another</b> — the cards spring and weave, alternating corners automatically.",
    beats: ["riffle weave"],
    actions: [
      {t:'move', id:'h1', x:46, y:48},
      {t:'move', id:'h2', x:54, y:48},
      {t:'rot', id:'h1', deg:0},
      {t:'rot', id:'h2', deg:0},
      {t:'note', id:'b', text:'corners interlace — alternating, on their own', x:50, y:22},
      {t:'label', id:'k', text:'the weave', x:50, y:88}
    ]},
  { caption: "Drop the top thumbs and let the interlaced corners <b>cascade</b> into each other, releasing downward pressure. Keep your touch light — forcing the cards together bends corners and ruins the waterfall.",
    beats: ["the waterfall"], climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'h1'},
      {t:'remove', id:'h2'},
      {t:'spread', x:26, y:28, dx:0.9, dy:1.05, w:8, face:'down', prefix:'c', stagger:26, count:52},
      {t:'hand', id:'rh', x:66, y:26, side:'right', on:true},
      {t:'hand', id:'lh', x:44, y:80, side:'left', on:true},
      {t:'label', id:'k', text:'the cascade', x:50, y:88}
    ]},
  { caption: "Catch the cascade and <b>square the interwoven block</b> by pushing the sides together — or bridge it flat. A genuine mix, and it actually shuffles.",
    actions: [
      {t:'remove', id:'c0'},
      {t:'remove', id:'c1'},
      {t:'remove', id:'c2'},
      {t:'remove', id:'c3'},
      {t:'remove', id:'c4'},
      {t:'remove', id:'c5'},
      {t:'remove', id:'c6'},
      {t:'remove', id:'c7'},
      {t:'remove', id:'c8'},
      {t:'remove', id:'c9'},
      {t:'remove', id:'c10'},
      {t:'remove', id:'c11'},
      {t:'remove', id:'c12'},
      {t:'remove', id:'c13'},
      {t:'remove', id:'c14'},
      {t:'remove', id:'c15'},
      {t:'remove', id:'c16'},
      {t:'remove', id:'c17'},
      {t:'remove', id:'c18'},
      {t:'remove', id:'c19'},
      {t:'remove', id:'c20'},
      {t:'remove', id:'c21'},
      {t:'remove', id:'c22'},
      {t:'remove', id:'c23'},
      {t:'remove', id:'c24'},
      {t:'remove', id:'c25'},
      {t:'remove', id:'c26'},
      {t:'remove', id:'c27'},
      {t:'remove', id:'c28'},
      {t:'remove', id:'c29'},
      {t:'remove', id:'c30'},
      {t:'remove', id:'c31'},
      {t:'remove', id:'c32'},
      {t:'remove', id:'c33'},
      {t:'remove', id:'c34'},
      {t:'remove', id:'c35'},
      {t:'remove', id:'c36'},
      {t:'remove', id:'c37'},
      {t:'remove', id:'c38'},
      {t:'remove', id:'c39'},
      {t:'remove', id:'c40'},
      {t:'remove', id:'c41'},
      {t:'remove', id:'c42'},
      {t:'remove', id:'c43'},
      {t:'remove', id:'c44'},
      {t:'remove', id:'c45'},
      {t:'remove', id:'c46'},
      {t:'remove', id:'c47'},
      {t:'remove', id:'c48'},
      {t:'remove', id:'c49'},
      {t:'remove', id:'c50'},
      {t:'remove', id:'c51'},
      {t:'deck', id:'d', x:50, y:52, n:52},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'cascaded and squared', x:50, y:88}
    ]}
]};
ANIMS.t64 = { steps: [
  { caption: "Hold the deck <b>from above</b>: thumb at the inner edge, fingers resting across the top face. Plant the thumb firmly near the <b>bottom-left corner</b> — it is the pivot everything turns on.",
    beats: ["the grip"],
    actions: [
      {t:'deck', id:'d', x:48, y:55, n:52},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true, grip:'from above'},
      {t:'note', id:'b', text:'thumb planted at the bottom-left corner — the pivot', x:48, y:28},
      {t:'label', id:'k', text:'one hand · thumb pivot', x:50, y:88}
    ]},
  { caption: "<b>Pivot the top cards outward</b> in a sweeping circular motion, using the index and middle fingers as guides, pressure even across the outer edge.",
    beats: ["open"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'d'},
      {t:'fan', x:52, y:56, count:52, spread:85, startDeg:-42, radius:13, w:9, face:'down', prefix:'fan'},
      {t:'label', id:'k', text:'the sweep', x:50, y:88}
    ]},
  { caption: "A full <b>180-degree fan</b> locks into place — the whole deck bloomed in a single hand. This one is all thumb traction and finger flexibility; no second hand to help.",
    climax: true,
    actions: [
      {t:'remove', id:'fan0'},
      {t:'remove', id:'fan1'},
      {t:'remove', id:'fan2'},
      {t:'remove', id:'fan3'},
      {t:'remove', id:'fan4'},
      {t:'remove', id:'fan5'},
      {t:'remove', id:'fan6'},
      {t:'remove', id:'fan7'},
      {t:'remove', id:'fan8'},
      {t:'remove', id:'fan9'},
      {t:'remove', id:'fan10'},
      {t:'remove', id:'fan11'},
      {t:'remove', id:'fan12'},
      {t:'remove', id:'fan13'},
      {t:'remove', id:'fan14'},
      {t:'remove', id:'fan15'},
      {t:'remove', id:'fan16'},
      {t:'remove', id:'fan17'},
      {t:'remove', id:'fan18'},
      {t:'remove', id:'fan19'},
      {t:'remove', id:'fan20'},
      {t:'remove', id:'fan21'},
      {t:'remove', id:'fan22'},
      {t:'remove', id:'fan23'},
      {t:'remove', id:'fan24'},
      {t:'remove', id:'fan25'},
      {t:'remove', id:'fan26'},
      {t:'remove', id:'fan27'},
      {t:'remove', id:'fan28'},
      {t:'remove', id:'fan29'},
      {t:'remove', id:'fan30'},
      {t:'remove', id:'fan31'},
      {t:'remove', id:'fan32'},
      {t:'remove', id:'fan33'},
      {t:'remove', id:'fan34'},
      {t:'remove', id:'fan35'},
      {t:'remove', id:'fan36'},
      {t:'remove', id:'fan37'},
      {t:'remove', id:'fan38'},
      {t:'remove', id:'fan39'},
      {t:'remove', id:'fan40'},
      {t:'remove', id:'fan41'},
      {t:'remove', id:'fan42'},
      {t:'remove', id:'fan43'},
      {t:'remove', id:'fan44'},
      {t:'remove', id:'fan45'},
      {t:'remove', id:'fan46'},
      {t:'remove', id:'fan47'},
      {t:'remove', id:'fan48'},
      {t:'remove', id:'fan49'},
      {t:'remove', id:'fan50'},
      {t:'remove', id:'fan51'},
      {t:'fan', x:52, y:56, count:52, spread:175, startDeg:-87, radius:15, w:9, face:'down', prefix:'fan'},
      {t:'label', id:'k', text:'180° — locked', x:50, y:88}
    ]},
  { caption: "Close with a <b>soft squeeze</b>. Practice with a broken-in, clean deck — a brand-new slippery pack fights every step.",
    actions: [
      {t:'remove', id:'fan0'},
      {t:'remove', id:'fan1'},
      {t:'remove', id:'fan2'},
      {t:'remove', id:'fan3'},
      {t:'remove', id:'fan4'},
      {t:'remove', id:'fan5'},
      {t:'remove', id:'fan6'},
      {t:'remove', id:'fan7'},
      {t:'remove', id:'fan8'},
      {t:'remove', id:'fan9'},
      {t:'remove', id:'fan10'},
      {t:'remove', id:'fan11'},
      {t:'remove', id:'fan12'},
      {t:'remove', id:'fan13'},
      {t:'remove', id:'fan14'},
      {t:'remove', id:'fan15'},
      {t:'remove', id:'fan16'},
      {t:'remove', id:'fan17'},
      {t:'remove', id:'fan18'},
      {t:'remove', id:'fan19'},
      {t:'remove', id:'fan20'},
      {t:'remove', id:'fan21'},
      {t:'remove', id:'fan22'},
      {t:'remove', id:'fan23'},
      {t:'remove', id:'fan24'},
      {t:'remove', id:'fan25'},
      {t:'remove', id:'fan26'},
      {t:'remove', id:'fan27'},
      {t:'remove', id:'fan28'},
      {t:'remove', id:'fan29'},
      {t:'remove', id:'fan30'},
      {t:'remove', id:'fan31'},
      {t:'remove', id:'fan32'},
      {t:'remove', id:'fan33'},
      {t:'remove', id:'fan34'},
      {t:'remove', id:'fan35'},
      {t:'remove', id:'fan36'},
      {t:'remove', id:'fan37'},
      {t:'remove', id:'fan38'},
      {t:'remove', id:'fan39'},
      {t:'remove', id:'fan40'},
      {t:'remove', id:'fan41'},
      {t:'remove', id:'fan42'},
      {t:'remove', id:'fan43'},
      {t:'remove', id:'fan44'},
      {t:'remove', id:'fan45'},
      {t:'remove', id:'fan46'},
      {t:'remove', id:'fan47'},
      {t:'remove', id:'fan48'},
      {t:'remove', id:'fan49'},
      {t:'remove', id:'fan50'},
      {t:'remove', id:'fan51'},
      {t:'deck', id:'d', x:48, y:55, n:52},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'closed', x:50, y:88}
    ]}
]};

ANIMS.t65 = { steps: [
  { caption: "The pinky break — the secret separation that makes double lifts, controls and passes possible. Grip: deck in left-hand dealing position. The card above where the break will form is the deck's top card.",
    beats: ["dealing grip"],
    actions: [
      {t:'deck', id:'d', x:50, y:52, n:51},
      {t:'card', id:'abv', rank:'A', suit:'♠', x:50, y:45, face:'down', w:11, z:6, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'lh', x:38, y:60, side:'left', on:true, grip:'dealing grip'},
      {t:'label', id:'k', text:'left-hand dealing grip', x:50, y:88}
    ]},
  { caption: "Catch: as a card is returned or a packet lands, the pinky pad catches a thin edge at the rear. Or use the pull-down: the left pinky at the rear edge pulls down one or more cards until a flesh break forms above them.",
    beats: ["pinky pull-down", "the catch"],
    actions: [
      {t:'move', id:'abv', x:50, y:47},
      {t:'hi', id:'abv', on:true},
      {t:'note', id:'b', text:'pinky pad under the edge · at the rear', x:74, y:66},
      {t:'label', id:'k', text:'break held at the rear', x:50, y:88}
    ]},
  { caption: "Softness: keep the finger relaxed. Tension opens a visible side gap — practice squaring from the front while holding the break, because if you can see daylight at the side, the audience can too.",
    beats: ["soft flesh"],
    actions: [
      {t:'move', id:'abv', x:50, y:45.5},
      {t:'note', id:'b', text:'front edge stays square · no daylight at the side', x:50, y:24},
      {t:'label', id:'k', text:'soft · invisible from the front', x:50, y:88}
    ]},
  { caption: "Use: that break is your bookmark. The deck can now be cut exactly there — double lifts, undercuts, passes and forces all start from this separation.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'packet', id:'pkt', x:36, y:36, n:8},
      {t:'move', id:'abv', x:36, y:30},
      {t:'move', id:'d', x:57, y:57},
      {t:'label', id:'k', text:'cut here · lift here · double here', x:50, y:88}
    ]}
]};

ANIMS.t66 = { steps: [
  { caption: "The everyday cut that also powers many false cuts. Deck in the right hand, held from above; the <b>J♠ rides on top</b>, named in Exposed view.",
    beats: ["swing cut"],
    actions: [
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{rank:'3', suit:'♥', face:'down'},{bulk:50},{rank:'J', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'deck in right hand · J♠ on top', x:50, y:88}
    ]},
  { caption: "Left hand takes roughly half the cards in a small swinging arc — thumb on the face, fingers on the back.",
    beats: ["left takes top half"],
    actions: [
      {t:'remove', id:'stk'},
      {t:'packet', id:'up', x:36, y:42, w:13, cards:[{bulk:25},{rank:'J', suit:'♠', face:'down'}]},
      {t:'packet', id:'lo', x:58, y:55, w:13, cards:[{rank:'3', suit:'♥', face:'down'},{bulk:25}]},
      {t:'hand', id:'lh', x:30, y:48, side:'left', on:true},
      {t:'note', id:'b', text:'thumb on the face, fingers on the back', x:30, y:72},
      {t:'label', id:'k', text:'top half swings into the left hand', x:50, y:88}
    ]},
  { caption: "Complete the cut: the right-hand packet goes on top. A genuine cut — <b>the J♠ now sits in the middle of the deck</b>, on top of the left-hand packet.",
    beats: ["complete the cut"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'lo', x:36, y:41},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'cut complete — J♠ at the break', x:50, y:88}
    ]},
  { caption: "The workhorse variant: swing again but complete into an <b>out-jog</b> — the right-hand packet sits proud of the other. A square-up from here can leave the original top stock in place; that's a false cut, and the identical rhythm is the cover.",
    climax: true,
    actions: [
      {t:'remove', id:'lo'},
      {t:'remove', id:'up'},
      {t:'packet', id:'a', x:44, y:56, w:13, cards:[{bulk:25},{rank:'J', suit:'♠', face:'down'}]},
      {t:'packet', id:'b', x:57, y:42, w:13, cards:[{rank:'3', suit:'♥', face:'down'},{bulk:25}]},
      {t:'hand', id:'lh', x:34, y:52, side:'left', on:true},
      {t:'note', id:'n2', text:'out-jog: a square-up can restore the top stock', x:50, y:24},
      {t:'label', id:'k', text:'completed into an out-jog', x:50, y:88}
    ]}
]};

ANIMS.t67 = { steps: [
  { caption: "Four cards face-down. The <b>third card's face must never show</b> — count four as four while hiding it.",
    beats: ["hide the third"],
    actions: [
      {t:'card', id:'j1', rank:'7', suit:'♣', x:38, y:47, face:'down', w:11, z:4, secret:{rank:'7', suit:'♣'}},
      {t:'card', id:'j2', rank:'4', suit:'♦', x:38, y:49, face:'down', w:11, z:3, secret:{rank:'4', suit:'♦'}},
      {t:'card', id:'j3', rank:'A', suit:'♠', x:38, y:51, face:'down', w:11, z:2, secret:{rank:'A', suit:'♠'}},
      {t:'card', id:'j4', rank:'9', suit:'♥', x:38, y:53, face:'down', w:11, z:1, secret:{rank:'9', suit:'♥'}},
      {t:'hand', id:'lh', x:30, y:52, side:'left', on:true},
      {t:'label', id:'k', text:'the third stays hidden', x:50, y:88}
    ]},
  { caption: "One — take the first card <b>singly</b> into the right hand and show it: the 7♣.",
    beats: ["one"],
    actions: [
      {t:'hand', id:'rh', x:68, y:40, side:'right', on:true},
      {t:'move', id:'j1', x:62, y:48, z:4},
      {t:'flip', id:'j1', to:'up'},
      {t:'label', id:'k', text:'one', x:50, y:88}
    ]},
  { caption: "Two — the second card singly, shown the same way: the 4♦. <b>Rhythm is everything</b>; count out loud at a steady tempo.",
    beats: ["two"],
    actions: [
      {t:'flip', id:'j1', to:'down'},
      {t:'move', id:'j2', x:62, y:49.5, z:5},
      {t:'flip', id:'j2', to:'up'},
      {t:'label', id:'k', text:'two', x:50, y:88}
    ]},
  { caption: "Three — the <b>Jordan move</b>: the last two cards travel as one block, and the face that shows is the 9♥. The third card rides hidden inside the block.",
    beats: ["the Jordan move"],
    actions: [
      {t:'flip', id:'j2', to:'down'},
      {t:'move', id:'j3', x:62, y:51, z:6},
      {t:'move', id:'j4', x:62, y:51.8, z:7},
      {t:'flip', id:'j4', to:'up'},
      {t:'label', id:'k', text:'three — a block', x:50, y:88}
    ]},
  { caption: "Four — the <b>last card on top</b>. Four cards counted; the A♠'s face never appeared. The move was buried in the cadence.",
    climax: true,
    actions: [
      {t:'flip', id:'j4', to:'down'},
      {t:'move', id:'j3', x:62, y:46.5, z:8},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'four counted · A♠ invisible', x:50, y:88}
    ]}
]};

ANIMS.t68 = { steps: [
  { caption: "Setup: the top card — the K♠ — is the one that must stay. The second card, the A♥, is the one that leaves. Both are declared from the start; Exposed view can tell them apart.",
    beats: ["setup"],
    actions: [
      {t:'deck', id:'d', x:45, y:52, n:50},
      {t:'card', id:'sec', rank:'A', suit:'♥', x:46, y:44, face:'down', w:11, z:5, secret:{rank:'A', suit:'♥'}},
      {t:'card', id:'top', rank:'K', suit:'♠', x:45, y:42, face:'down', w:11, z:6, secret:{rank:'K', suit:'♠'}},
      {t:'hi', id:'top', on:true},
      {t:'hand', id:'lh', x:34, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'top card stays · second will deal', x:50, y:88}
    ]},
  { caption: "Push-off: the left thumb eases two cards as a unit, out from the deck together.",
    beats: ["push-off"],
    actions: [
      {t:'hi', id:'top', on:false},
      {t:'move', id:'top', x:53, y:40},
      {t:'move', id:'sec', x:53, y:42},
      {t:'hand', id:'rh', x:62, y:36, side:'right', on:true},
      {t:'note', id:'b', text:'two cards ease off as one', x:74, y:58},
      {t:'label', id:'k', text:'push two · as one', x:50, y:88}
    ]},
  { caption: "Take: the thumb draws the top card back square, while the right hand takes the exposed second card in the same motion as a normal deal.",
    beats: ["second deal"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'top', x:45, y:42},
      {t:'move', id:'sec', x:72, y:55, z:6},
      {t:'label', id:'k', text:'the second card is dealt', x:50, y:88}
    ]},
  { caption: "From the front: a clean single deal. In truth, the top card never left the deck — angle, timing and a natural wrist turn hide the brief dual-card push. Start slow in a mirror.",
    climax: true,
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'flip', id:'sec', to:'up'},
      {t:'flip', id:'top', to:'up'},
      {t:'hi', id:'sec', on:true},
      {t:'hi', id:'top', on:true},
      {t:'label', id:'k', text:'dealt: A♥ · top: K♠ — it never moved', x:50, y:88}
    ]}
]};
;

ANIMS.t69 = { steps: [
  { caption: "A packet of <b>five cards you want to show as four</b>. Exposed view can already see the trick's whole secret: the 10♠ rides inside the packet, where the block will hide it.",
    beats: ["the packet"],
    actions: [
      {t:'packet', id:'pkt', x:50, y:50, w:14, cards:[{rank:'10', suit:'♠', face:'down'},{rank:'J', suit:'♣', face:'up'},{rank:'Q', suit:'♦', face:'up'},{rank:'K', suit:'♥', face:'up'},{rank:'A', suit:'♠', face:'up'}]},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:64, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'five cards · show as four', x:50, y:88}
    ]},
  { caption: "Open the packet between the hands into a spread, <b>keeping two cards perfectly aligned as a single unit</b>: the 10♠ stays squared directly behind the K♥ (Exposed view separates the block — in Audience view there is simply nothing extra to see).",
    beats: ["the spread"],
    actions: [
      {t:'remove', id:'pkt'},
      {t:'card', id:'c1', rank:'A', suit:'♠', x:22, y:50, face:'up', w:12},
      {t:'card', id:'c2', rank:'K', suit:'♥', x:40, y:48, face:'up', w:12, z:3},
      {t:'card', id:'hid', rank:'10', suit:'♠', x:40, y:56, face:'down', w:12, z:1, ghost:true, secret:{rank:'10', suit:'♠'}},
      {t:'card', id:'c3', rank:'Q', suit:'♦', x:58, y:48, face:'up', w:12},
      {t:'card', id:'c4', rank:'J', suit:'♣', x:76, y:50, face:'up', w:12},
      {t:'label', id:'k', text:'four faces · the block hides the fifth', x:50, y:88}
    ]},
  { caption: "Display: <b>four faces visible</b>, and the display reads as casual — that is the beauty of the Ascanio. Soft hands, even light on the faces; the extra card rides hidden in the block and the count is never questioned.",
    beats: ["the display"],
    actions: [
      {t:'move', id:'c1', x:24, y:48},
      {t:'move', id:'c2', x:42, y:46},
      {t:'move', id:'hid', x:42, y:54},
      {t:'move', id:'c3', x:60, y:46},
      {t:'move', id:'c4', x:78, y:48},
      {t:'note', id:'b', text:'count them: four faces', x:50, y:24},
      {t:'label', id:'k', text:'a casual display — not a move', x:50, y:88}
    ]},
  { caption: "Resquare: close the spread and the packet is whole again — <b>five cards, shown as four, and the count remains secret</b>.",
    climax: true,
    actions: [
      {t:'remove', id:'c1'},
      {t:'remove', id:'c2'},
      {t:'remove', id:'c3'},
      {t:'remove', id:'c4'},
      {t:'remove', id:'hid'},
      {t:'packet', id:'pkt', x:50, y:50, w:14, cards:[{rank:'10', suit:'♠', face:'down'},{rank:'J', suit:'♣', face:'up'},{rank:'Q', suit:'♦', face:'up'},{rank:'K', suit:'♥', face:'up'},{rank:'A', suit:'♠', face:'up'}]},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'five cards · counted as four', x:50, y:88}
    ]}
]};

ANIMS.t70 = { steps: [
  { caption: "Show two aces, clearly different: the <b>black ace</b> and the <b>red ace</b>. If the audience is sure which ace is which, the transposition will hit harder — so display them cleanly.",
    beats: ["show the aces"],
    actions: [
      {t:'card', id:'as', rank:'A', suit:'♠', x:38, y:48, face:'up', w:13},
      {t:'card', id:'ah', rank:'A', suit:'♥', x:62, y:48, face:'up', w:13},
      {t:'hi', id:'as', on:true},
      {t:'label', id:'k', text:'black ace · red ace', x:50, y:88}
    ]},
  { caption: "Isolate them: each ace goes <b>face-down at opposite corners</b>, black to the left, red to the right — clear, fair, separated.",
    beats: ["isolated"],
    actions: [
      {t:'hi', id:'as', on:false},
      {t:'flip', id:'as', to:'down'},
      {t:'flip', id:'ah', to:'down'},
      {t:'move', id:'as', x:28, y:55},
      {t:'move', id:'ah', x:72, y:55},
      {t:'hand', id:'lh', x:28, y:42, side:'left', on:true},
      {t:'hand', id:'rh', x:72, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'one at each corner', x:50, y:88}
    ]},
  { caption: "The work happens <b>in the placements</b>: as the hands cross to settle the cards, a top change in the handling exchanges them — Exposed view tracks the truth: the black ace now rests on the <b>right</b>, the red ace on the <b>left</b>. Nothing else moves; the audience's certainty does the rest.",
    beats: ["top change"],
    actions: [
      {t:'remove', id:'as'},
      {t:'remove', id:'ah'},
      {t:'card', id:'ah', rank:'A', suit:'♥', x:28, y:55, face:'down', w:13, secret:{rank:'A', suit:'♥'}},
      {t:'card', id:'as', rank:'A', suit:'♠', x:72, y:55, face:'down', w:13, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'lh', x:72, y:42, side:'left', on:true},
      {t:'hand', id:'rh', x:28, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'placed — and exchanged (Exposed)', x:50, y:88}
    ]},
  { caption: "Turn them over: <b>they have transposed</b> — red where black was, black where red was, under conditions that looked completely fair. Minimal procedure, maximum clarity.",
    climax: true,
    actions: [
      {t:'flip', id:'ah', to:'up'},
      {t:'flip', id:'as', to:'up'},
      {t:'hi', id:'ah', on:true},
      {t:'hi', id:'as', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'they changed places', x:50, y:88}
    ]}
]};

ANIMS.t71 = { steps: [
  { caption: "Homing Card — their card (tracked positionally; the article names none), shown, and <b>controlled to the top</b> to start. The natural sequel to the Ambitious Card.",
    beats: ["control"],
    actions: [
      {t:'packet', id:'deck', x:50, y:56, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:50, y:36, face:'up', w:12, z:5},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'their card — on top', x:50, y:88}
    ]},
  { caption: "Lose it: insert it <b>fairly into the middle</b> of the deck, in full view. No rush, no cover — the fairness is the setup for everything after. (Exposed view keeps it inside the deck; the audience simply loses it.)",
    beats: ["lose it"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'remove', id:'sel'},
      {t:'card', id:'sel', x:50, y:50, face:'down', w:11, z:4, ghost:true},
      {t:'label', id:'k', text:'lost in the middle', x:50, y:88}
    ]},
  { caption: "Return. Immediately control it back — a <b>double undercut</b> this phase — and show it back on top. It never really left.",
    beats: ["return"],
    actions: [
      {t:'move', id:'sel', x:50, y:40},
      {t:'reveal', id:'sel'},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'back on top', x:50, y:88}
    ]},
  { caption: "Lose it again — deeper this time. And a <b>different control</b> waits for this phase (the pass, not the undercut), so the method never settles into a pattern they can track.",
    beats: ["lose it again"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'remove', id:'sel'},
      {t:'card', id:'sel', x:50, y:53, face:'down', w:11, z:4, ghost:true},
      {t:'label', id:'k', text:'lost again — deeper', x:50, y:88}
    ]},
  { caption: "This time it isn't on the deck at all: it is <b>produced from your hand</b>, where it homed to while the deck was being searched (Exposed view watched it travel). Each phase feels more impossible than the last — and then you end clean.",
    climax: true,
    actions: [
      {t:'move', id:'sel', x:74, y:36},
      {t:'reveal', id:'sel'},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'scale', id:'sel', s:1.08},
      {t:'hand', id:'rh', x:82, y:28, side:'right', on:true},
      {t:'label', id:'k', text:'it came home — to the hand', x:50, y:88}
    ]}
]};

ANIMS.t72 = { steps: [
  { caption: "Fold. <b>Both cards folded in half</b> — one of them is the cover, the other is the warp card that will turn inside out inside it.",
    beats: ["fold"],
    actions: [
      {t:'card', id:'cov', rank:'K', suit:'♥', x:38, y:50, face:'up', w:14},
      {t:'card', id:'wrp', rank:'A', suit:'♠', x:62, y:50, face:'up', w:14, secret:{rank:'A', suit:'♠'}},
      {t:'flip', id:'cov', to:'down'},
      {t:'flip', id:'wrp', to:'down'},
      {t:'scale', id:'cov', s:0.62},
      {t:'scale', id:'wrp', s:0.62},
      {t:'hand', id:'lh', x:28, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:72, y:58, side:'right', on:true},
      {t:'label', id:'k', text:'two folded cards', x:50, y:88}
    ]},
  { caption: "Nest. Slide the warp card <b>partway into the folded cover</b>. It is trapped, with nowhere to turn — which is what makes what happens next impossible.",
    beats: ["nest"],
    actions: [
      {t:'move', id:'wrp', x:53, y:52, z:3},
      {t:'move', id:'cov', x:45, y:49, z:5},
      {t:'label', id:'k', text:'nested in the fold', x:50, y:88}
    ]},
  { caption: "Push. As it travels through, a <b>hidden orientation change</b> turns it inside out — the fold geometry does it, invisibly, mid-journey (watch the Exposed view). Go slow: the visual has to register.",
    beats: ["the push"],
    actions: [
      {t:'move', id:'wrp', x:63, y:52, z:3},
      {t:'flip', id:'wrp', to:'up'},
      {t:'label', id:'k', text:'turning inside out', x:50, y:88}
    ]},
  { caption: "Display. It emerges <b>reversed — face-up where its back went in — while still clearly trapped</b> in the cover. One of the most visual packet effects ever invented, and ungimmicked.",
    beats: ["the warp"], climax: true,
    actions: [
      {t:'hi', id:'wrp', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'inside out — still trapped', x:50, y:88}
    ]}
]};

ANIMS.t73 = { steps: [
  { caption: "Sign and control: their card is signed — the A♠.",
    beats: ["signed selection"],
    actions: [
      {t:'deck', id:'d', x:40, y:52, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:40, y:38, face:'up', w:12, secret:{rank:'A', suit:'♠'}},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed selection', x:50, y:88}
    ]},
  { caption: "Bring it to a stealable position: face-down on top of the deck, ready to be stolen cleanly.",
    beats: ["control"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:40, y:44, z:6},
      {t:'note', id:'b', text:'on top · ready to steal', x:68, y:62},
      {t:'label', id:'k', text:'a stealable position', x:50, y:88}
    ]},
  { caption: "Isolate: two indifferent cards are shown clean — the 7♣ and the 4♥ — and held by the spectator. Nothing else is near them.",
    beats: ["isolate"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'card', id:'c1', rank:'7', suit:'♣', x:64, y:36, face:'up', w:11},
      {t:'card', id:'c2', rank:'4', suit:'♥', x:77, y:36, face:'up', w:11},
      {t:'hand', id:'sh', x:84, y:48, side:'right', on:true},
      {t:'label', id:'k', text:'two cards · shown clean · in their hands', x:50, y:88}
    ]},
  { caption: "Load: under cover of the deck passing over, the signed card is stolen from the top and loaded between their two cards. In Audience view nothing arrives; in Exposed view you can watch it travel, palmed, the whole way.",
    beats: ["the load", "steal"],
    actions: [
      {t:'flip', id:'c1', to:'down'},
      {t:'flip', id:'c2', to:'down'},
      {t:'move', id:'c1', x:68, y:40},
      {t:'move', id:'c2', x:68, y:54},
      {t:'palm', id:'sel'},
      {t:'move', id:'d', x:52, y:47},
      {t:'move', id:'sel', x:68, y:47},
      {t:'label', id:'k', text:'loaded · between their cards (Exposed)', x:50, y:88}
    ]},
  { caption: "They open their hands — the sandwich: their signed card in the middle. The stronger the conviction that their hands were empty, the harder the appearance hits. Don't rush the clean display.",
    climax: true,
    actions: [
      {t:'move', id:'d', x:28, y:54},
      {t:'unpalm', id:'sel'},
      {t:'move', id:'c1', x:68, y:31},
      {t:'move', id:'c2', x:68, y:63},
      {t:'flip', id:'c1', to:'up'},
      {t:'flip', id:'sel', to:'up'},
      {t:'flip', id:'c2', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'scale', id:'sel', s:1.1},
      {t:'label', id:'k', text:'their card · between theirs', x:50, y:88}
    ]}
]};

ANIMS.t74 = { steps: [
  { caption: "Setup: the aces sit in a <b>simple known order</b> — Exposed view shows them at depths 1, 14, 27 and 40 from the top (the A♠ on top itself), exactly where four roughly equal cuts will break. A shuffle that preserves them keeps the stack.",
    beats: ["ace stack"],
    actions: [
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:12},{rank:'A', suit:'♣', face:'down'},{bulk:12},{rank:'A', suit:'♦', face:'down'},{bulk:12},{rank:'A', suit:'♥', face:'down'},{bulk:12},{rank:'A', suit:'♠', face:'down'}]},
      {t:'note', id:'b', text:'aces at 1 · 14 · 27 · 40', x:50, y:24},
      {t:'label', id:'k', text:'aces in known positions', x:50, y:88}
    ]},
  { caption: "The spectator <b>cuts the deck into four roughly equal piles</b> under your light direction — and each cut breaks right at an ace (Exposed: every pile's top card is an ace). Their hands do all of it; sell the freedom of the cuts.",
    beats: ["their cuts"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'p1', x:20, y:52, w:12, cards:[{bulk:12},{rank:'A', suit:'♠', face:'down'}]},
      {t:'packet', id:'p2', x:40, y:52, w:12, cards:[{bulk:12},{rank:'A', suit:'♥', face:'down'}]},
      {t:'packet', id:'p3', x:60, y:52, w:12, cards:[{bulk:12},{rank:'A', suit:'♦', face:'down'}]},
      {t:'packet', id:'p4', x:80, y:52, w:12, cards:[{bulk:12},{rank:'A', suit:'♣', face:'down'}]},
      {t:'hand', id:'rh', x:56, y:38, side:'right', on:true},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'four spectator-cut piles', x:50, y:88}
    ]},
  { caption: "One simple policy finishes it: <b>balance the packets</b> — square and even the piles so the cut points stay exactly where the stack put them. No top card needs switching when the piles are balanced true (Exposed: the aces never moved).",
    beats: ["balancing"],
    actions: [
      {t:'move', id:'p1', x:20, y:50},
      {t:'move', id:'p2', x:40, y:50},
      {t:'move', id:'p3', x:60, y:50},
      {t:'move', id:'p4', x:80, y:50},
      {t:'label', id:'k', text:'piles balanced · aces on top', x:50, y:88}
    ]},
  { caption: "Turn over the top card of each pile: <b>four aces</b>. They cut the deck themselves — hands-off, clean, and impossibly fair-looking. The method was automatic; the presentation was the trick.",
    climax: true,
    actions: [
      {t:'repacket', id:'p1', cards:[{bulk:12}]},
      {t:'repacket', id:'p2', cards:[{bulk:12}]},
      {t:'repacket', id:'p3', cards:[{bulk:12}]},
      {t:'repacket', id:'p4', cards:[{bulk:12}]},
      {t:'card', id:'a1', rank:'A', suit:'♠', x:20, y:38, face:'down', w:11, z:5},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:40, y:38, face:'down', w:11, z:5},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:60, y:38, face:'down', w:11, z:5},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:80, y:38, face:'down', w:11, z:5},
      {t:'flip', id:'a1', to:'up'},
      {t:'flip', id:'a2', to:'up'},
      {t:'flip', id:'a3', to:'up'},
      {t:'flip', id:'a4', to:'up'},
      {t:'hi', id:'a1', on:true},
      {t:'hi', id:'a2', on:true},
      {t:'hi', id:'a3', on:true},
      {t:'hi', id:'a4', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'they cut to the aces', x:50, y:88}
    ]}
]};

ANIMS.t75 = { steps: [
  { caption: "The deck sits in the left hand, its front angled slightly down so the bottom edge stays hidden. The <b>bottom card</b> — the A♠ — is the one that will leave.",
    beats: ["setup"],
    actions: [
      {t:'deck', id:'d', x:42, y:47, n:51},
      {t:'rot', id:'d', deg:-4},
      {t:'card', id:'bot', rank:'A', suit:'♠', x:42, y:58, face:'down', w:11, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'lh', x:32, y:54, side:'left', on:true, grip:'dealing grip'},
      {t:'label', id:'k', text:'bottom card: A♠', x:50, y:88}
    ]},
  { caption: "The right hand approaches <b>exactly as for a normal top deal</b> — same reach, same rhythm. The cover is the sameness.",
    beats: ["the take"],
    actions: [
      {t:'hand', id:'rh', x:54, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'an honest approach', x:50, y:88}
    ]},
  { caption: "The left fingers <b>buckle and free the bottom card</b> into the right hand. It is dealt — while the top stock never moves.",
    beats: ["bottom deal"],
    actions: [
      {t:'move', id:'bot', x:72, y:54, z:5},
      {t:'note', id:'b', text:'bottom card into the deal — the top stays', x:70, y:72},
      {t:'label', id:'k', text:'dealt — from the bottom', x:50, y:88}
    ]},
  { caption: "Turn it over: the <b>A♠, from the bottom</b>. Same rhythm and wrist turn as an honest deal — from the front, that's all it ever looked like.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'flip', id:'bot', to:'up'},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'A♠ — dealt from the bottom', x:50, y:88}
    ]}
]};

ANIMS.t76 = { steps: [
  { caption: "Break: a pinky break under the top three cards. There are three cards there — Exposed view counts them: the K♦ on top, and the 7♣ and 4♠ ghosted beneath it.",
    beats: ["pinky break"],
    actions: [
      {t:'deck', id:'d', x:50, y:52, n:49},
      {t:'card', id:'c3', rank:'4', suit:'♠', x:50, y:46, face:'down', w:12, z:4, ghost:true, secret:{rank:'4', suit:'♠'}},
      {t:'card', id:'c2', rank:'7', suit:'♣', x:50, y:45, face:'down', w:12, z:5, ghost:true, secret:{rank:'7', suit:'♣'}},
      {t:'card', id:'c1', rank:'K', suit:'♦', x:50, y:44, face:'down', w:12, z:6, secret:{rank:'K', suit:'♦'}},
      {t:'hand', id:'lh', x:38, y:60, side:'left', on:true, grip:"mechanic's grip"},
      {t:'note', id:'b', text:'pinky break under the top three', x:74, y:66},
      {t:'label', id:'k', text:'three cards · one break', x:50, y:88}
    ]},
  { caption: "Lift: take all three from above — edges squared, no split. If a double is hard to keep square, a triple is harder: it must look identical to a single card.",
    beats: ["lift as one"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:63, y:20, side:'right', on:true, grip:'from above'},
      {t:'move', id:'c1', x:50, y:24},
      {t:'move', id:'c2', x:50, y:24},
      {t:'move', id:'c3', x:50, y:24},
      {t:'label', id:'k', text:'three cards · handled as one', x:50, y:88}
    ]},
  { caption: "Turnover: turn the triple over book-style and display it. One face shows — the K♦ — but three cards did the turning.",
    beats: ["turnover", "display"],
    actions: [
      {t:'flip', id:'c1', to:'up'},
      {t:'note', id:'b', text:'one face · three cards', x:74, y:30},
      {t:'label', id:'k', text:'display', x:50, y:88}
    ]},
  { caption: "Replace the triple face-down. The book-style turnover has reversed the little packet: the card that was on top is now third from the top. That shift is the switch the triple lift buys you.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'flip', id:'c1', to:'down'},
      {t:'move', id:'c3', x:50, y:43, z:6},
      {t:'move', id:'c2', x:50, y:44, z:5},
      {t:'move', id:'c1', x:50, y:45, z:4},
      {t:'label', id:'k', text:'top card now sits third', x:50, y:88}
    ]}
]};

ANIMS.t77 = { steps: [
  { caption: "Start. A packet of <b>six cards</b> in the left hand, to be counted into the right. The count is going to lie — watch the Exposed view to see where.",
    beats: ["the count"],
    actions: [
      {t:'packet', id:'L', x:38, y:52, w:13, cards:[{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'Q', suit:'♦', face:'down'},{rank:'J', suit:'♣', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'4', suit:'♥', face:'down'}]},
      {t:'hand', id:'lh', x:27, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'six cards to count', x:50, y:88}
    ]},
  { caption: "Count into the right hand: <b>one, two, three</b> — faces shown, rhythm steady. Three cards counted, three to go.",
    beats: ["counting"],
    actions: [
      {t:'repacket', id:'L', cards:[{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'Q', suit:'♦', face:'down'}]},
      {t:'card', id:'r1', rank:'4', suit:'♥', x:60, y:38, face:'up', w:10},
      {t:'card', id:'r2', rank:'9', suit:'♠', x:60, y:52, face:'up', w:10},
      {t:'card', id:'r3', rank:'J', suit:'♣', x:60, y:66, face:'up', w:10},
      {t:'hand', id:'rh', x:68, y:44, side:'right', on:true},
      {t:'label', id:'k', text:'one · two · three', x:50, y:88}
    ]},
  { caption: "Switch. Mid-count, inside the beat, the hands exchange stocks: <b>the counted cards flip back on top of the packet</b> (Exposed), and the three uncounted cards slide underneath — where they will stay, unseen.",
    beats: ["hamman switch"],
    actions: [
      {t:'remove', id:'r1'},
      {t:'remove', id:'r2'},
      {t:'remove', id:'r3'},
      {t:'repacket', id:'L', cards:[{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'Q', suit:'♦', face:'down'},{rank:'4', suit:'♥', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'J', suit:'♣', face:'down'}]},
      {t:'move', id:'L', x:44, y:52},
      {t:'note', id:'b', text:'counted three back on top, reversed (Exposed)', x:50, y:24},
      {t:'label', id:'k', text:'the switch — inside the beat', x:50, y:88}
    ]},
  { caption: "Finish. The spoken count completes: four, five, six. <b>The number matches; the faces never told the truth</b> — the same three cards were counted twice, and the packet's bottom three were never shown at all. That's the Hamman count: a clean rhythm hiding extras and wrong faces.",
    beats: ["the recount"], climax: true,
    actions: [
      {t:'repacket', id:'L', cards:[{rank:'A', suit:'♠', face:'down'},{rank:'K', suit:'♥', face:'down'},{rank:'Q', suit:'♦', face:'down'}]},
      {t:'card', id:'r4', rank:'J', suit:'♣', x:72, y:38, face:'up', w:10},
      {t:'card', id:'r5', rank:'9', suit:'♠', x:72, y:52, face:'up', w:10},
      {t:'card', id:'r6', rank:'4', suit:'♥', x:72, y:66, face:'up', w:10},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'four · five · six', x:50, y:88}
    ]}
]};

ANIMS.t78 = { steps: [
  { caption: "Deal. The deck is dealt out into <b>face-down pairs</b> — twenty-six of them. Two pairs matter, and Exposed view knows which: in this run-through, one holds a thought-of <b>A♠</b>, and another holds its mate, the <b>A♥</b>. (The article names no cards.)",
    beats: ["deal the pairs"],
    actions: [
      {t:'packet', id:'p0', x:10, y:36, w:5.5, n:2},
      {t:'packet', id:'p1', x:16.8, y:36, w:5.5, n:2},
      {t:'packet', id:'p2', x:23.6, y:36, w:5.5, n:2},
      {t:'packet', id:'p3', x:30.4, y:36, w:5.5, n:2},
      {t:'packet', id:'p4', x:37.2, y:36, w:5.5, cards:[{rank:'A', suit:'♠', face:'down'},{bulk:1}]},
      {t:'packet', id:'p5', x:44, y:36, w:5.5, n:2},
      {t:'packet', id:'p6', x:50.8, y:36, w:5.5, n:2},
      {t:'packet', id:'p7', x:57.6, y:36, w:5.5, n:2},
      {t:'packet', id:'p8', x:64.4, y:36, w:5.5, n:2},
      {t:'packet', id:'p9', x:71.19999999999999, y:36, w:5.5, n:2},
      {t:'packet', id:'p10', x:78, y:36, w:5.5, n:2},
      {t:'packet', id:'p11', x:84.8, y:36, w:5.5, n:2},
      {t:'packet', id:'p12', x:91.6, y:36, w:5.5, n:2},
      {t:'packet', id:'p13', x:10, y:56, w:5.5, n:2},
      {t:'packet', id:'p14', x:16.8, y:56, w:5.5, n:2},
      {t:'packet', id:'p15', x:23.6, y:56, w:5.5, n:2},
      {t:'packet', id:'p16', x:30.4, y:56, w:5.5, n:2},
      {t:'packet', id:'p17', x:37.2, y:56, w:5.5, n:2},
      {t:'packet', id:'p18', x:44, y:56, w:5.5, n:2},
      {t:'packet', id:'p19', x:50.8, y:56, w:5.5, n:2},
      {t:'packet', id:'p20', x:57.6, y:56, w:5.5, n:2},
      {t:'packet', id:'p21', x:64.4, y:56, w:5.5, cards:[{bulk:1},{rank:'A', suit:'♥', face:'down'}]},
      {t:'packet', id:'p22', x:71.19999999999999, y:56, w:5.5, n:2},
      {t:'packet', id:'p23', x:78, y:56, w:5.5, n:2},
      {t:'packet', id:'p24', x:84.8, y:56, w:5.5, n:2},
      {t:'packet', id:'p25', x:91.6, y:56, w:5.5, n:2},
      {t:'label', id:'k', text:'twenty-six pairs, face-down', x:50, y:88}
    ]},
  { caption: "Select. The spectator <b>isolates a pair</b> — the one that holds their thought-of card. They never name it aloud; the pair is simply set apart, and its contents stay their secret (Exposed view: the A♠ is inside).",
    beats: ["isolate a pair"],
    actions: [
      {t:'move', id:'p4', x:37, y:18},
      {t:'hi', id:'p4', on:true},
      {t:'hand', id:'rh', x:47, y:14, side:'right', on:true},
      {t:'label', id:'k', text:'their pair — set apart', x:50, y:88}
    ]},
  { caption: "Process. The remaining pairs are <b>eliminated or kept by a simple rule</b> — a plain binary choice at each branch. Sell the freedom of their choice at every one of them.",
    beats: ["the process"],
    actions: [
      {t:'remove', id:'p0'},
      {t:'remove', id:'p1'},
      {t:'remove', id:'p2'},
      {t:'remove', id:'p3'},
      {t:'remove', id:'p5'},
      {t:'remove', id:'p6'},
      {t:'remove', id:'p7'},
      {t:'remove', id:'p8'},
      {t:'remove', id:'p9'},
      {t:'remove', id:'p10'},
      {t:'remove', id:'p11'},
      {t:'remove', id:'p12'},
      {t:'label', id:'k', text:'keep or discard — fourteen pairs stand', x:50, y:88}
    ]},
  { caption: "The procedure runs its automatic course — until <b>two pairs</b> are left standing: theirs, and one other that the rule has been quietly protecting all along.",
    beats: ["down to two"],
    actions: [
      {t:'remove', id:'p13'},
      {t:'remove', id:'p14'},
      {t:'remove', id:'p15'},
      {t:'remove', id:'p16'},
      {t:'remove', id:'p17'},
      {t:'remove', id:'p18'},
      {t:'remove', id:'p19'},
      {t:'remove', id:'p20'},
      {t:'remove', id:'p22'},
      {t:'remove', id:'p23'},
      {t:'remove', id:'p24'},
      {t:'remove', id:'p25'},
      {t:'move', id:'p4', x:38, y:46},
      {t:'move', id:'p21', x:62, y:46},
      {t:'hi', id:'p4', on:false},
      {t:'label', id:'k', text:'two pairs remain', x:50, y:88}
    ]},
  { caption: "Reveal. Open the last pairs: their thought-of card — and beside it, forced into the open by nothing but the procedure, <b>its mate</b>. The method is automatic; the presentation was the trick all along.",
    climax: true,
    actions: [
      {t:'remove', id:'p4'},
      {t:'remove', id:'p21'},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:38, y:48, face:'up', w:11, z:5},
      {t:'card', id:'pt1', x:29, y:48, face:'down', w:10},
      {t:'card', id:'mate', rank:'A', suit:'♥', x:62, y:48, face:'up', w:11, z:5},
      {t:'card', id:'pt2', x:71, y:48, face:'down', w:10},
      {t:'hi', id:'sel', on:true},
      {t:'hi', id:'mate', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'selection and mate', x:50, y:88}
    ]}
]};

ANIMS.t79 = { steps: [
  { caption: "Display: the card in full view at the fingertips — the A♠, held where everyone can see it.",
    beats: ["display"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:46, face:'up', w:14},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', x:63, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'card in full view', x:50, y:88}
    ]},
  { caption: "Vanish: the hand closes over the card — and the card melts into the palm. The hand comes away empty. The card went nowhere; it is riding in the palm, which Exposed view shows you.",
    beats: ["invisible palm", "vanish"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'palm', id:'c'},
      {t:'hand', id:'rh', x:58, y:44, side:'right', on:true},
      {t:'move', id:'c', x:58, y:44},
      {t:'note', id:'b', text:'hand looks empty — the card is in the palm', x:30, y:66},
      {t:'label', id:'k', text:'vanished · palmed (Exposed)', x:50, y:88}
    ]},
  { caption: "Convince: show the hand casually empty. Less is more — one clean vanish and one strong reproduction beat three muddy ones.",
    beats: ["convince"],
    actions: [
      {t:'hand', id:'rh', x:34, y:58, side:'right', on:true},
      {t:'move', id:'c', x:34, y:58},
      {t:'label', id:'k', text:'casually empty', x:50, y:88}
    ]},
  { caption: "Produce: from the same hand, the pocket, or the deck — here, the same hand. It never went anywhere.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:55, y:40, side:'right', on:true},
      {t:'move', id:'c', x:55, y:40},
      {t:'unpalm', id:'c'},
      {t:'hi', id:'c', on:true},
      {t:'scale', id:'c', s:1.1},
      {t:'label', id:'k', text:'back again — it never left', x:50, y:88}
    ]}
]};

ANIMS.t80 = { steps: [
  { caption: "Grip: deck in a one-hand grip, with tension built into the packet. The card that will shoot is the top one — declared here, named in Exposed view.",
    beats: ["one-hand grip"],
    actions: [
      {t:'deck', id:'d', x:46, y:50, n:51},
      {t:'card', id:'shot', rank:'A', suit:'♠', x:46, y:42, face:'down', w:11, z:6, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'lh', x:35, y:57, side:'left', on:true, grip:'one-hand grip'},
      {t:'note', id:'b', text:'tension built into the packet', x:70, y:64},
      {t:'label', id:'k', text:'one hand · loaded', x:50, y:88}
    ]},
  { caption: "Release: a controlled snap sends one card — or a thin packet — flying forward out of the deck.",
    beats: ["the shot"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'shot', x:76, y:34, z:6},
      {t:'rot', id:'shot', deg:24},
      {t:'scale', id:'shot', s:1.05},
      {t:'label', id:'k', text:'it shoots', x:50, y:88}
    ]},
  { caption: "Catch: catch it with the free hand — or let it land face-up as a reveal. Use it to punctuate a production, or as a standalone flash. Start close to the table so misses are quiet; distance comes after accuracy.",
    climax: true,
    actions: [
      {t:'hand', id:'rh', x:82, y:32, side:'right', on:true},
      {t:'flip', id:'shot', to:'up'},
      {t:'hi', id:'shot', on:true},
      {t:'label', id:'k', text:'caught · the A♠, face up', x:50, y:88}
    ]}
]};

ANIMS.t81 = { steps: [
  { caption: "The <b>bottom card</b> is the one to steal — the A♠, underneath the deck in your left hand.",
    beats: ["setup"],
    actions: [
      {t:'deck', id:'d', x:48, y:47, n:51},
      {t:'card', id:'bot', rank:'A', suit:'♠', x:48, y:58, face:'down', w:11, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'lh', x:36, y:54, side:'left', on:true, grip:'dealing grip'},
      {t:'label', id:'k', text:'bottom card: A♠', x:50, y:88}
    ]},
  { caption: "As the right hand <b>takes the deck</b>, the left fingers curl the bottom card into the palm. The deck leaves clean; the card stays.",
    beats: ["bottom palm · the steal"],
    actions: [
      {t:'hand', id:'rh', x:60, y:38, side:'right', on:true},
      {t:'move', id:'d', x:62, y:40},
      {t:'palm', id:'bot'},
      {t:'move', id:'bot', x:34, y:60},
      {t:'scale', id:'bot', s:0.85},
      {t:'label', id:'k', text:'deck goes · card stays', x:50, y:88}
    ]},
  { caption: "The deck is handed away or set down. The left hand hangs <b>soft and natural</b> — the same acting rules as the top palm: never flat, never frozen.",
    beats: ["the leave"],
    actions: [
      {t:'move', id:'d', x:76, y:32},
      {t:'hand', id:'rh', on:false},
      {t:'note', id:'b', text:'still in the left palm', x:26, y:74},
      {t:'label', id:'k', text:'the leave', x:50, y:88}
    ]},
  { caption: "Produce it later — from a pocket, from the hand, or loaded where it's needed: <b>the A♠ that left while nobody watched</b>.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'unpalm', id:'bot'},
      {t:'move', id:'bot', x:50, y:46},
      {t:'scale', id:'bot', s:1.08},
      {t:'flip', id:'bot', to:'up'},
      {t:'hi', id:'bot', on:true},
      {t:'label', id:'k', text:'produced from the palm', x:50, y:88}
    ]}
]};

ANIMS.t82 = { steps: [
  { caption: "The work: under casual handling, put a <b>soft lengthwise bend</b> in the card — ends down, middle up, or the reverse. Less bend is more; if you can see it, they can see it.",
    beats: ["the work"],
    actions: [
      {t:'card', id:'cr', rank:'A', suit:'♠', x:50, y:44, face:'down', w:13, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'rh', x:60, y:36, side:'right', on:true},
      {t:'note', id:'b', text:'a soft bow — subtler than you think', x:50, y:22},
      {t:'label', id:'k', text:'the work card', x:50, y:88}
    ]},
  { caption: "Slip it into the deck and shuffle. The bend is <b>permanent</b> — it survives shuffles, invisible at a glance, obvious to a thumb.",
    beats: ["durability"],
    actions: [
      {t:'deck', id:'d', x:36, y:57, n:51},
      {t:'move', id:'cr', x:38, y:47},
      {t:'hand', id:'lh', x:26, y:62, side:'left', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'lost in the deck', x:50, y:88}
    ]},
  { caption: "Riffle or cut — <b>the deck wants to break at the crimp</b>. The packets part right at the bend, every time.",
    beats: ["the break"],
    actions: [
      {t:'remove', id:'d'},
      {t:'packet', id:'up', x:64, y:40, w:13, cards:[{bulk:25}]},
      {t:'packet', id:'lo', x:38, y:63, w:13, cards:[{bulk:26}]},
      {t:'move', id:'cr', x:38, y:53},
      {t:'label', id:'k', text:'the break finds it', x:50, y:88}
    ]},
  { caption: "Cut straight to it: <b>instant control with no visible break</b> — a lifelong locator, found by feel alone. Mark a force card, a stack boundary, whatever needs finding.",
    climax: true,
    actions: [
      {t:'flip', id:'cr', to:'up'},
      {t:'hi', id:'cr', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'the A♠ — cut to by feel', x:50, y:88}
    ]}
]};

ANIMS.t83 = { steps: [
  { caption: "Start: the selection — the A♠ — is on top of the deck.",
    beats: ["start"],
    actions: [
      {t:'deck', id:'d', x:50, y:54, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:44, face:'down', w:11, z:6, secret:{rank:'A', suit:'♠'}},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', x:61, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'selection on top', x:50, y:88}
    ]},
  { caption: "Shuffle overhand. When the key packet — the one that lands on the selection — should be marked, let it land <b>injogged</b>: protruding toward you, a single step in the deck.",
    beats: ["injog shuffle"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:50, y:46, z:1},
      {t:'packet', id:'sq', x:50, y:47, n:8},
      {t:'packet', id:'inj', x:50, y:56, n:10},
      {t:'note', id:'b', text:'this packet lands injogged — protruding toward you', x:76, y:70},
      {t:'label', id:'k', text:'the injog · your bookmark', x:50, y:88}
    ]},
  { caption: "Hold: the rest of the shuffle lands square above it. Keep everything else square — only one packet should step out. That single step is your bookmark.",
    beats: ["the step"],
    actions: [
      {t:'packet', id:'top2', x:50, y:38, n:14},
      {t:'hi', id:'inj', on:true},
      {t:'label', id:'k', text:'one step in a square deck', x:50, y:88}
    ]},
  { caption: "Cut: cut to the injog — everything above the step goes underneath — or undercut it, and the selection returns to the top (or goes to the bottom) as needed. The control is complete, and the shuffle looked honest throughout.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'hi', id:'inj', on:false},
      {t:'move', id:'top2', x:50, y:62, z:1},
      {t:'move', id:'inj', x:50, y:66, z:1},
      {t:'move', id:'sq', x:50, y:70, z:1},
      {t:'move', id:'sel', x:50, y:42, z:6},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'back on top · controlled', x:50, y:88}
    ]}
]};

ANIMS.t84 = { steps: [
  { caption: "Display. A face-up card in view. What the audience can't see: <b>a second card hidden in grip behind it</b> (Exposed).",
    beats: ["display"],
    actions: [
      {t:'card', id:'hd', x:48, y:50, face:'up', w:14, ghost:true},
      {t:'card', id:'fc', x:50, y:46, face:'up', w:14, z:3},
      {t:'hand', id:'rh', x:63, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'one card in view', x:50, y:88}
    ]},
  { caption: "Flick. A sharp flick of the fingers — and in the blur <b>the cards exchange</b>: the shown card drops away into the hand, the hidden card takes its place. Hesitation turns a spark into a move.",
    beats: ["flick change"],
    actions: [
      {t:'hand', id:'rh', x:58, y:44, side:'right', on:true},
      {t:'rot', id:'fc', deg:24},
      {t:'move', id:'fc', x:58, y:60, z:1},
      {t:'palm', id:'fc'},
      {t:'move', id:'hd', x:50, y:46},
      {t:'reveal', id:'hd'},
      {t:'label', id:'k', text:'flick — exchanged in the blur', x:50, y:88}
    ]},
  { caption: "<b>Hold.</b> Let the new face register. The change should feel like a spark, not a move.",
    beats: ["hold"], climax: true,
    actions: [
      {t:'hi', id:'hd', on:true},
      {t:'label', id:'k', text:'hold the new face', x:50, y:88}
    ]},
  { caption: "Clean. On the offbeat, the extra card is ditched. Nothing left to find.",
    beats: ["clean-up"],
    actions: [
      {t:'remove', id:'fc'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'ditched on the offbeat', x:50, y:88}
    ]}
]};

ANIMS.t85 = { steps: [
  { caption: "Their card — remember it (tracked positionally; the article names none). Now watch where it turns up. Everywhere. And nowhere.",
    beats: ["their card"],
    actions: [
      {t:'packet', id:'deck', x:50, y:56, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:50, y:38, face:'up', w:12, z:5},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'their card', x:50, y:88}
    ]},
  { caption: "“Here it is — on <b>top</b>…” A <b>double</b> is turned over and shown as their card: two cards handled as one, and the face you see belongs to the double. Their real card never reached the face of it (Exposed view keeps it underneath).",
    beats: ["double lift"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'remove', id:'sel'},
      {t:'card', id:'sel', x:50, y:46, face:'down', w:11, z:4, ghost:true},
      {t:'repacket', id:'deck', cards:[{bulk:50}]},
      {t:'card', id:'dbl', x:50, y:34, face:'up', w:12, z:5},
      {t:'hi', id:'dbl', on:true},
      {t:'label', id:'k', text:'“on top” — a double', x:50, y:88}
    ]},
  { caption: "“No — in the <b>middle</b>…” The deck opens and a card is shown buried in the centre: another double, produced for the display. Their card has not moved from the top (Exposed). Sell every display — the vanish only hurts if they believed the earlier shows.",
    beats: ["false show"],
    actions: [
      {t:'hi', id:'dbl', on:false},
      {t:'remove', id:'dbl'},
      {t:'remove', id:'deck'},
      {t:'packet', id:'up', x:50, y:36, w:13, cards:[{bulk:24}]},
      {t:'packet', id:'low', x:50, y:66, w:13, cards:[{bulk:26}]},
      {t:'move', id:'sel', x:50, y:27},
      {t:'card', id:'mid', x:50, y:51, face:'up', w:12, z:5},
      {t:'hi', id:'mid', on:true},
      {t:'label', id:'k', text:'“in the middle” — another double', x:50, y:88}
    ]},
  { caption: "“No — on the <b>bottom</b>…” The deck turns and its bottom card is shown as theirs: a <b>switch</b> this time. Top, middle, bottom — each show a double or a switch, and each one more certain than the last.",
    beats: ["false show"],
    actions: [
      {t:'hi', id:'mid', on:false},
      {t:'remove', id:'mid'},
      {t:'remove', id:'up'},
      {t:'remove', id:'low'},
      {t:'packet', id:'deck', x:50, y:50, w:13, cards:[{bulk:50}]},
      {t:'move', id:'sel', x:50, y:41},
      {t:'card', id:'bot', x:50, y:64, face:'up', w:12, z:5},
      {t:'hi', id:'bot', on:true},
      {t:'label', id:'k', text:'“on the bottom” — a switch', x:50, y:88}
    ]},
  { caption: "Vanish. Search the deck — spread it out, all fifty-one remaining cards: <b>their card is gone</b>. (Exposed view: it left in the right hand, palmed during the last show.)",
    beats: ["vanish"],
    actions: [
      {t:'hi', id:'bot', on:false},
      {t:'remove', id:'bot'},
      {t:'repacket', id:'deck', cards:[{bulk:51}]},
      {t:'remove', id:'sel'},
      {t:'card', id:'sel', x:50, y:41, face:'down', w:11},
      {t:'palm', id:'sel'},
      {t:'remove', id:'deck'},
      {t:'spread', x:5, y:54, count:51, dx:1.75, w:7.5, face:'down', prefix:'v'},
      {t:'move', id:'sel', x:78, y:38},
      {t:'hand', id:'rh', x:84, y:30, side:'right', on:true},
      {t:'label', id:'k', text:'nowhere in the deck', x:50, y:88}
    ]},
  { caption: "Produce. It turns up where it shouldn't — drawn from the <b>pocket</b> it travelled to while everyone was busy searching the deck. Everywhere and nowhere, and the pace is what made it play: each false show felt more certain than the last.",
    climax: true,
    actions: [
      {t:'unpalm', id:'sel'},
      {t:'move', id:'sel', x:76, y:32},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'scale', id:'sel', s:1.08},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'somewhere impossible', x:50, y:88}
    ]}
]};

ANIMS.t86 = { steps: [
  { caption: "A small packet — four cards. The A♠ will ride the elevator: <b>to the bottom, then back on top</b>, one card at a time.",
    beats: ["packet"],
    actions: [
      {t:'spread', x:24, y:46, dx:15, w:11, face:'up', prefix:'e', cards:[{id:'e0', rank:'A', suit:'♠'},{id:'e1', rank:'2', suit:'♥'},{id:'e2', rank:'3', suit:'♣'},{id:'e3', rank:'4', suit:'♦'}]},
      {t:'hi', id:'e0', on:true},
      {t:'label', id:'k', text:'the traveller: A♠', x:50, y:88}
    ]},
  { caption: "Square them face-down with the <b>A♠ on the bottom</b> of the packet.",
    beats: ["to the bottom"],
    actions: [
      {t:'remove', id:'e0'},
      {t:'remove', id:'e1'},
      {t:'remove', id:'e2'},
      {t:'remove', id:'e3'},
      {t:'packet', id:'pkt', x:50, y:50, w:12, cards:[{rank:'A', suit:'♠', face:'down'},{rank:'2', suit:'♥', face:'down'},{rank:'3', suit:'♣', face:'down'},{rank:'4', suit:'♦', face:'down'}]},
      {t:'label', id:'k', text:'A♠ at the bottom', x:50, y:88}
    ]},
  { caption: "Snap. Under cover of the snap, the bottom card <b>buckles up the back of the packet</b> — the ghost in Exposed view is the ride the audience never sees.",
    beats: ["buckle"],
    actions: [
      {t:'repacket', id:'pkt', cards:[{rank:'2', suit:'♥', face:'down'},{rank:'3', suit:'♣', face:'down'},{rank:'4', suit:'♦', face:'down'}]},
      {t:'card', id:'bk', rank:'A', suit:'♠', x:44, y:58, face:'down', w:11, z:2, ghost:true, secret:{rank:'A', suit:'♠'}},
      {t:'label', id:'k', text:'the buckle (Exposed)', x:50, y:88}
    ]},
  { caption: "Turn over the top card: the <b>A♠, back on top</b> — apparently straight through the packet.",
    beats: ["the rise"],
    actions: [
      {t:'remove', id:'bk'},
      {t:'card', id:'risen', rank:'A', suit:'♠', x:50, y:42, face:'down', w:11, z:5, secret:{rank:'A', suit:'♠'}},
      {t:'flip', id:'risen', to:'up'},
      {t:'hi', id:'risen', on:true},
      {t:'label', id:'k', text:'risen', x:50, y:88}
    ]},
  { caption: "Set the risen ace aside. Next passenger: the 2♥ takes the <b>same ride</b> — buckled up the back under the snap.",
    beats: ["repeat"],
    actions: [
      {t:'move', id:'risen', x:22, y:38},
      {t:'hi', id:'risen', on:false},
      {t:'repacket', id:'pkt', cards:[{rank:'3', suit:'♣', face:'down'},{rank:'4', suit:'♦', face:'down'}]},
      {t:'card', id:'bk2', rank:'2', suit:'♥', x:44, y:58, face:'down', w:11, z:2, ghost:true, secret:{rank:'2', suit:'♥'}},
      {t:'label', id:'k', text:'second ride', x:50, y:88}
    ]},
  { caption: "And the 2♥ arrives on top. <b>Clean display</b> of the risen cards — keep the packet small and the snaps sharp; rhythm sells the penetration.",
    climax: true,
    actions: [
      {t:'remove', id:'bk2'},
      {t:'card', id:'risen2', rank:'2', suit:'♥', x:36, y:38, face:'down', w:11, z:5, secret:{rank:'2', suit:'♥'}},
      {t:'flip', id:'risen2', to:'up'},
      {t:'hi', id:'risen2', on:true},
      {t:'hi', id:'risen', on:true},
      {t:'label', id:'k', text:'two cards rode the elevator', x:50, y:88}
    ]}
]};

ANIMS.t87 = { steps: [
  { caption: "Show a <b>red-backed deck</b>: backs clearly displayed, faces free. The whole colour rests on a single card — the red-backed cover card on top (Exposed).",
    beats: ["show red"],
    actions: [
      {t:'packet', id:'dk', x:50, y:56, w:13, cards:[{bulk:52}]},
      {t:'card', id:'cov', x:50, y:47, face:'down', w:12, z:4, secret:{}},
      {t:'hand', id:'rh', x:63, y:44, side:'right', on:true},
      {t:'label', id:'k', text:'red-backed deck', x:50, y:88}
    ]},
  { caption: "Spread the faces — completely, freely. <b>The cover card does its work from the palm</b> (Exposed); the faces were never the secret.",
    beats: ["spread faces"],
    actions: [
      {t:'palm', id:'cov'},
      {t:'remove', id:'dk'},
      {t:'spread', x:6, y:50, count:52, dx:1.7, w:7, face:'up', prefix:'f'},
      {t:'label', id:'k', text:'faces shown freely', x:50, y:88}
    ]},
  { caption: "A sequence of turns and squares sets the change — and in the turning, <b>the red cover card is ditched</b>. Nothing else about the deck changes. It never needed to.",
    beats: ["the turn"],
    actions: [
      {t:'remove', id:'f0'},
      {t:'remove', id:'f1'},
      {t:'remove', id:'f2'},
      {t:'remove', id:'f3'},
      {t:'remove', id:'f4'},
      {t:'remove', id:'f5'},
      {t:'remove', id:'f6'},
      {t:'remove', id:'f7'},
      {t:'remove', id:'f8'},
      {t:'remove', id:'f9'},
      {t:'remove', id:'f10'},
      {t:'remove', id:'f11'},
      {t:'remove', id:'f12'},
      {t:'remove', id:'f13'},
      {t:'remove', id:'f14'},
      {t:'remove', id:'f15'},
      {t:'remove', id:'f16'},
      {t:'remove', id:'f17'},
      {t:'remove', id:'f18'},
      {t:'remove', id:'f19'},
      {t:'remove', id:'f20'},
      {t:'remove', id:'f21'},
      {t:'remove', id:'f22'},
      {t:'remove', id:'f23'},
      {t:'remove', id:'f24'},
      {t:'remove', id:'f25'},
      {t:'remove', id:'f26'},
      {t:'remove', id:'f27'},
      {t:'remove', id:'f28'},
      {t:'remove', id:'f29'},
      {t:'remove', id:'f30'},
      {t:'remove', id:'f31'},
      {t:'remove', id:'f32'},
      {t:'remove', id:'f33'},
      {t:'remove', id:'f34'},
      {t:'remove', id:'f35'},
      {t:'remove', id:'f36'},
      {t:'remove', id:'f37'},
      {t:'remove', id:'f38'},
      {t:'remove', id:'f39'},
      {t:'remove', id:'f40'},
      {t:'remove', id:'f41'},
      {t:'remove', id:'f42'},
      {t:'remove', id:'f43'},
      {t:'remove', id:'f44'},
      {t:'remove', id:'f45'},
      {t:'remove', id:'f46'},
      {t:'remove', id:'f47'},
      {t:'remove', id:'f48'},
      {t:'remove', id:'f49'},
      {t:'remove', id:'f50'},
      {t:'remove', id:'f51'},
      {t:'packet', id:'dk', x:50, y:56, w:13, cards:[{bulk:52}]},
      {t:'rot', id:'dk', deg:180},
      {t:'remove', id:'cov'},
      {t:'label', id:'k', text:'cover ditched in the turn', x:50, y:88}
    ]},
  { caption: "Reveal: spread the deck — <b>every back is blue</b>. Never rush the final spread; let them see the colour before you move on.",
    beats: ["reveal blue"], climax: true,
    actions: [
      {t:'remove', id:'dk'},
      {t:'spread', x:6, y:50, count:52, dx:1.7, w:7, face:'down', prefix:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'every back blue', x:50, y:88}
    ]}
]};

ANIMS.t88 = { steps: [
  { caption: "A <b>stacked deck</b>: you know where every card sits. In this stack the 7♥ lies <b>twentieth</b> from the top.",
    beats: ["the stack"],
    actions: [
      {t:'packet', id:'stk', x:50, y:52, w:13, cards:[{bulk:32},{rank:'7', suit:'♥', face:'down'},{bulk:19}]},
      {t:'label', id:'k', text:'a stacked deck — every position known', x:50, y:88}
    ]},
  { caption: "They name a card and a number — genuinely free: the <b>7♥</b>, and <b>twelve</b>. The cleaner the naming process, the stronger the effect.",
    beats: ["named card · named number"],
    actions: [
      {t:'note', id:'b', text:'they name: the 7♥ — and the number 12', x:50, y:22},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'named: 7♥ at 12', x:50, y:88}
    ]},
  { caption: "Do the arithmetic in silence: it sits at 20, they want 12 — <b>cut eight cards</b>. The top eight come off…",
    beats: ["the shift"],
    actions: [
      {t:'remove', id:'stk'},
      {t:'packet', id:'top8', x:32, y:42, w:12, cards:[{bulk:8}]},
      {t:'packet', id:'rest', x:60, y:52, w:13, cards:[{bulk:32},{rank:'7', suit:'♥', face:'down'},{bulk:11}]},
      {t:'label', id:'k', text:'cut 8', x:50, y:88}
    ]},
  { caption: "…and go <b>underneath</b>. The cut is the whole shift — the 7♥ now sits exactly <b>twelfth</b> in the packet that remains on top.",
    actions: [
      {t:'move', id:'top8', x:60, y:68},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'7♥ now at 12', x:50, y:88}
    ]},
  { caption: "Count down toward their number — <b>eleven cards</b> dealt off the top, one at a time…",
    beats: ["the count"],
    actions: [
      {t:'repacket', id:'rest', cards:[{bulk:32},{rank:'7', suit:'♥', face:'down'}]},
      {t:'packet', id:'counted', x:28, y:42, w:12, cards:[{bulk:11}]},
      {t:'label', id:'k', text:'counting: eleven down', x:50, y:88}
    ]},
  { caption: "…and the <b>twelfth card</b> is turned over: the <b>7♥ they named</b>, at the number they named.",
    climax: true,
    actions: [
      {t:'repacket', id:'rest', cards:[{bulk:32}]},
      {t:'card', id:'named', rank:'7', suit:'♥', x:60, y:42, face:'down', w:11, z:5, secret:{rank:'7', suit:'♥'}},
      {t:'flip', id:'named', to:'up'},
      {t:'hi', id:'named', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'twelfth: the 7♥', x:50, y:88}
    ]}
]};

ANIMS.t89 = { steps: [
  { caption: "Deck in the <b>right hand</b>, top card targeted — the A♠. The left hand stays free the whole time.",
    beats: ["top targeted"],
    actions: [
      {t:'deck', id:'d', x:44, y:50, n:52},
      {t:'card', id:'top', rank:'A', suit:'♠', x:44, y:42, face:'down', w:12, z:5, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'rh', x:58, y:44, side:'right', on:true},
      {t:'hi', id:'top', on:true},
      {t:'label', id:'k', text:'deck in right hand · top card ready', x:50, y:88}
    ]},
  { caption: "During a square or a gesture, the fingers and the heel of the hand <b>lever</b> the top card up and back, toward the palm. One hand only.",
    beats: ["lever into palm"],
    actions: [
      {t:'hi', id:'top', on:false},
      {t:'hand', id:'rh', x:58, y:44, grip:'fingers + palm heel'},
      {t:'move', id:'top', x:54, y:44, deg:-10},
      {t:'label', id:'k', text:'lever · curl · hide', x:50, y:88}
    ]},
  { caption: "The left hand takes the deck away. The right hand stays natural and relaxed — in Audience view it's empty. Switch to Exposed view: the A♠ is sitting in the palm.",
    beats: ["palm", "deck away"],
    actions: [
      {t:'palm', id:'top'},
      {t:'move', id:'top', x:66, y:42},
      {t:'hand', id:'rh', x:66, y:36, grip:''},
      {t:'hand', id:'lh', x:28, y:54, side:'left', on:true},
      {t:'move', id:'d', x:28, y:54},
      {t:'label', id:'k', text:'left takes the deck · right hand looks empty', x:50, y:88}
    ]},
  { caption: "Relaxed fingers — never flash the palm. Produce the card on your own schedule, when attention is somewhere else.",
    beats: ["the produce"], climax: true,
    actions: [
      {t:'move', id:'top', x:50, y:28},
      {t:'unpalm', id:'top'},
      {t:'flip', id:'top', to:'up'},
      {t:'hi', id:'top', on:true},
      {t:'hand', id:'rh', x:59, y:22},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'produced on your schedule', x:50, y:88}
    ]}
]};
;

ANIMS.t90 = { steps: [
  { caption: "The card sits <b>in the palm</b> — face-in or face-out, the hand soft and natural around it.",
    beats: ["in the hand"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:48, face:'up', w:14},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', x:59, y:50, side:'right', on:true},
      {t:'label', id:'k', text:'card in palm', x:50, y:88}
    ]},
  { caption: "First fold — a <b>lengthwise crease</b>, made under cover of the hand; the palm hides the work.",
    beats: ["palm","fold 1"],
    actions: [
      {t:'palm', id:'c'},
      {t:'scale', id:'c', s:0.68},
      {t:'hi', id:'c', on:false},
      {t:'label', id:'k', text:'fold 1 · lengthwise', x:50, y:88}
    ]},
  { caption: "Second fold — <b>widthwise</b>. The card is now a compact quarter-packet: invisible bulk in a soft hand.",
    beats: ["fold 2"],
    actions: [
      {t:'scale', id:'c', s:0.42},
      {t:'label', id:'k', text:'quartered', x:50, y:88}
    ]},
  { caption: "Load it — <b>pocket, wallet, or a sealed envelope</b> — and let it wait; it unfolds later in an impossible place. Keep the hand soft: a tight fist telegraphs the fold.",
    climax: true,
    actions: [
      {t:'move', id:'c', x:76, y:68},
      {t:'hand', id:'rh', x:74, y:62, side:'right', on:true},
      {t:'label', id:'k', text:'loaded', x:50, y:88}
    ]}
]};
;

ANIMS.t91 = { steps: [
  { caption: "Split the deck into two packets. A <b>stock rides the top of one half</b> (Exposed) — the shuffle's whole job is to keep it there while looking thorough.",
    beats: ["split"],
    actions: [
      {t:'packet', id:'L', x:35, y:52, w:13, cards:[{bulk:21},{rank:'10', suit:'♠', face:'down'},{rank:'J', suit:'♠', face:'down'},{rank:'Q', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'packet', id:'R', x:65, y:52, w:13, cards:[{bulk:26}]},
      {t:'hand', id:'lh', x:26, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:74, y:58, side:'right', on:true},
      {t:'note', id:'b', text:'the stock: 10♠ J♠ Q♠ K♠ A♠ on top (Exposed)', x:50, y:24},
      {t:'label', id:'k', text:'split for the riffle', x:50, y:88}
    ]},
  { caption: "Riffle the ends together — but the weave <b>strips back as it pushes home</b>: the halves never truly mix. Study a real riffle first; the false one must match its sound and body language exactly.",
    beats: ["false weave"],
    actions: [
      {t:'move', id:'L', x:44, y:50, z:3},
      {t:'rot', id:'L', deg:-6},
      {t:'move', id:'R', x:56, y:50, z:2},
      {t:'rot', id:'R', deg:6},
      {t:'label', id:'k', text:'looks woven · strips back', x:50, y:88}
    ]},
  { caption: "Square. Push the halves flush as if mixed. The audience saw a shuffle — <b>the deck's order never changed</b>.",
    beats: ["square up"],
    actions: [
      {t:'remove', id:'L'},
      {t:'remove', id:'R'},
      {t:'packet', id:'dk', x:50, y:52, w:13, cards:[{bulk:47},{rank:'10', suit:'♠', face:'down'},{rank:'J', suit:'♠', face:'down'},{rank:'Q', suit:'♠', face:'down'},{rank:'K', suit:'♠', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'squared · order retained', x:50, y:88}
    ]},
  { caption: "Result: prove it in Exposed view — <b>the stock still sits on top in perfect order</b>, exactly where it started. Order intact; shuffle believed.",
    beats: ["the result"], climax: true,
    actions: [
      {t:'repacket', id:'dk', cards:[{bulk:47}]},
      {t:'card', id:'st1', rank:'A', suit:'♠', x:36, y:32, face:'down', w:9, z:4, secret:{rank:'A', suit:'♠'}},
      {t:'card', id:'st2', rank:'K', suit:'♠', x:43, y:29, face:'down', w:9, z:4, secret:{rank:'K', suit:'♠'}},
      {t:'card', id:'st3', rank:'Q', suit:'♠', x:50, y:28, face:'down', w:9, z:4, secret:{rank:'Q', suit:'♠'}},
      {t:'card', id:'st4', rank:'J', suit:'♠', x:57, y:29, face:'down', w:9, z:4, secret:{rank:'J', suit:'♠'}},
      {t:'card', id:'st5', rank:'10', suit:'♠', x:64, y:32, face:'down', w:9, z:4, secret:{rank:'10', suit:'♠'}},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'the stock — untouched', x:50, y:88}
    ]}
]};
;

ANIMS.t92 = { steps: [
  { caption: "Their selection is <b>signed and controlled</b>. The wallet has been in view the whole time — ordinary, familiar, above suspicion. Familiarity kills suspicion.",
    beats: ["sign · control"],
    actions: [
      {t:'deck', id:'d', x:45, y:52, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:45, y:40, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed — and controlled', x:50, y:88}
    ]},
  { caption: "<b>Palm the card</b> while attention is on the deck or on a gesture — the steal happens in the moment nobody is watching your hand.",
    beats: ["palm"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'palm', id:'sel'},
      {t:'move', id:'sel', x:72, y:42},
      {t:'hand', id:'rh', x:74, y:45, side:'right', on:true},
      {t:'label', id:'k', text:'palmed', x:50, y:88}
    ]},
  { caption: "As you <b>open the wallet</b> — or the window envelope inside it — the palmed card slides in. The opening itself covers the load.",
    beats: ["the load"],
    actions: [
      {t:'note', id:'w', text:'the wallet — opening now', x:72, y:64},
      {t:'move', id:'sel', x:72, y:58},
      {t:'label', id:'k', text:'loaded under the opening', x:50, y:88}
    ]},
  { caption: "Open it fully: <b>their signed card is inside</b> — personal, and impossible.",
    climax: true,
    actions: [
      {t:'unnote', id:'w'},
      {t:'unpalm', id:'sel'},
      {t:'move', id:'sel', x:58, y:44},
      {t:'scale', id:'sel', s:1.08},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'signed A♠ — in the wallet', x:50, y:88}
    ]}
]};
;

ANIMS.t93 = { steps: [
  { caption: "A glass sits on the table — in view from the start, and it never leaves anyone's sight. Their card is chosen: the A♠.",
    beats: ["glass in view"],
    actions: [
      {t:'deck', id:'d', x:38, y:52, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:38, y:38, face:'up', w:12, secret:{rank:'A', suit:'♠'}},
      {t:'hi', id:'sel', on:true},
      {t:'note', id:'g', text:'🥛 the glass — in view from the start', x:72, y:34},
      {t:'label', id:'k', text:'glass in play · their card chosen', x:50, y:88}
    ]},
  { caption: "Control: bring the selection to a stealable position — face-down on top of the deck, ready to be stolen on a moment nobody is watching for.",
    beats: ["control"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:38, y:44, z:6},
      {t:'note', id:'b', text:'controlled to a stealable position', x:66, y:64},
      {t:'label', id:'k', text:'ready to steal', x:50, y:88}
    ]},
  { caption: "Load: under the glass on an offbeat — a laugh, a gesture, attention on the deck. The card travels palmed (watch it in Exposed view) and settles under the glass. After the load, never look at the glass again.",
    beats: ["the load"],
    actions: [
      {t:'palm', id:'sel'},
      {t:'move', id:'d', x:45, y:48},
      {t:'move', id:'sel', x:72, y:48},
      {t:'note', id:'b', text:'never look at the glass after the load', x:66, y:64},
      {t:'label', id:'k', text:'loaded · on the offbeat', x:50, y:88}
    ]},
  { caption: "Let them discover it. Lift the glass — their card, underneath, under a glass that stayed in full view the whole time.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'unnote', id:'g'},
      {t:'unpalm', id:'sel'},
      {t:'move', id:'sel', x:72, y:46},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'scale', id:'sel', s:1.08},
      {t:'label', id:'k', text:'under the glass · in view all along', x:50, y:88}
    ]}
]};
;

ANIMS.t94 = { steps: [
  { caption: "Predict: write the prediction and place it in full view, before anything happens. It reads: 'You will stop on the A♠.' The A♠ itself waits held out, palmed — Exposed view can see it; the audience cannot.",
    beats: ["open prediction"],
    actions: [
      {t:'note', id:'p', text:"prediction: 'You will stop on the A♠'", x:26, y:36},
      {t:'deck', id:'d', x:62, y:52, n:52},
      {t:'card', id:'sw', rank:'A', suit:'♠', x:80, y:36, face:'down', w:11, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'rh', x:80, y:36, side:'right', on:true},
      {t:'palm', id:'sw'},
      {t:'label', id:'k', text:'prediction in full view', x:50, y:88}
    ]},
  { caption: "Deal: the spectator deals face-up and stops at will. The stop is genuinely free — no force of position. They stop on the 7♦.",
    beats: ["free stop"],
    actions: [
      {t:'spread', x:34, y:56, count:7, dx:6.5, face:'up', w:8, prefix:'dl', cards:[{},{},{},{},{},{},{}]},
      {t:'card', id:'stop', rank:'7', suit:'♦', x:84, y:50, face:'up', w:11},
      {t:'hi', id:'stop', on:true},
      {t:'label', id:'k', text:'they stop on the 7♦', x:50, y:88}
    ]},
  { caption: "The method lives in a <b>delayed switch</b>: as the stopped-at card is picked up, it is switched — the 7♦ rides away in the palm while the A♠ takes its place. From the front, one card was simply picked up.",
    beats: ["delayed switch"],
    actions: [
      {t:'hi', id:'stop', on:false},
      {t:'move', id:'stop', x:80, y:40},
      {t:'palm', id:'stop'},
      {t:'move', id:'sw', x:84, y:50},
      {t:'label', id:'k', text:'switched · the A♠ stands in (Exposed)', x:50, y:88}
    ]},
  { caption: "Reveal: turn over the card they 'stopped on' — the A♠. Now read the prediction aloud. It names their card exactly.",
    climax: true,
    actions: [
      {t:'unpalm', id:'sw'},
      {t:'flip', id:'sw', to:'up'},
      {t:'hi', id:'sw', on:true},
      {t:'scale', id:'sw', s:1.1},
      {t:'label', id:'k', text:'the prediction matches', x:50, y:88}
    ]}
]};
;

ANIMS.t95 = { steps: [
  { caption: "They name any card — say the <b>9♦</b>. The naming must feel unrestricted; any sense of steering kills the brainwave. Before anything is spread, the stranger has to be set.",
    beats: ["named"],
    actions: [
      {t:'packet', id:'dk', x:50, y:54, w:13, cards:[{bulk:30},{rank:'9', suit:'♦', face:'down'},{bulk:21}]},
      {t:'hand', id:'rh', x:63, y:44, side:'right', on:true},
      {t:'note', id:'b', text:'free choice — no force', x:50, y:24},
      {t:'label', id:'k', text:'any card named', x:50, y:88}
    ]},
  { caption: "Set. A <b>faro and a cut</b> — fair-looking handling that positions the 9♦ to become the only reversed card. The set happens out in the open, before the spread.",
    beats: ["faro set"],
    actions: [
      {t:'remove', id:'dk'},
      {t:'packet', id:'p1', x:41, y:52, w:13, cards:[{bulk:30},{rank:'9', suit:'♦', face:'down'}]},
      {t:'packet', id:'p2', x:61, y:52, w:13, cards:[{bulk:21}]},
      {t:'hand', id:'lh', x:30, y:58, side:'left', on:true},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'splitting for the faro', x:50, y:88}
    ]},
  { caption: "The weave and the square leave the 9♦ <b>face-up inside a face-down deck</b> — the only card facing the other way, exactly where the spread will find it (Exposed).",
    beats: ["hidden reverse"],
    actions: [
      {t:'remove', id:'p1'},
      {t:'remove', id:'p2'},
      {t:'packet', id:'dk', x:50, y:54, w:13, cards:[{bulk:30},{rank:'9', suit:'♦', face:'up'},{bulk:21}]},
      {t:'label', id:'k', text:'the stranger is set', x:50, y:88}
    ]},
  { caption: "Spread the deck. One card faces the other way — <b>it is the card they named</b>. Procedure kept invisible; the miracle is all that shows.",
    beats: ["the reveal"], climax: true,
    actions: [
      {t:'remove', id:'dk'},
      {t:'spread', x:3, y:52, count:52, dx:1.7, w:7, face:'down', prefix:'bs'},
      {t:'remove', id:'bs26'},
      {t:'card', id:'odd', rank:'9', suit:'♦', x:47, y:45, face:'up', w:9, z:5},
      {t:'hi', id:'odd', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'the named card — the only stranger', x:50, y:88}
    ]}
]};
;

ANIMS.t96 = { steps: [
  { caption: "A <b>full deck</b>, clearly in hand. One card is picked out in Exposed view — it's the one that will stay.",
    beats: ["display"],
    actions: [
      {t:'deck', id:'d', x:50, y:52, n:51},
      {t:'card', id:'one', rank:'A', suit:'♠', x:50, y:41, face:'down', w:11, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'lh', x:38, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:62, y:58, side:'right', on:true},
      {t:'label', id:'k', text:'a full deck in hand', x:50, y:88}
    ]},
  { caption: "<b>Cover</b>: a silk over the hands, the card box, a fold of the body — something has to hide the moment the mass leaves.",
    beats: ["cover"],
    actions: [
      {t:'note', id:'b', text:'cover: silk, box, fold — or a body ditch', x:50, y:20},
      {t:'hand', id:'lh', x:44, y:54, side:'left', on:true},
      {t:'hand', id:'rh', x:56, y:54, side:'right', on:true},
      {t:'label', id:'k', text:'covered', x:50, y:88}
    ]},
  { caption: "Under that cover the deck is <b>ditched</b> — to lap or pocket. The hands come apart: empty, except for one card.",
    beats: ["the ditch"],
    actions: [
      {t:'remove', id:'d'},
      {t:'unnote', id:'b'},
      {t:'move', id:'one', x:50, y:47},
      {t:'hand', id:'lh', x:30, y:60, side:'left', on:true},
      {t:'hand', id:'rh', x:70, y:60, side:'right', on:true},
      {t:'label', id:'k', text:'the deck is gone', x:50, y:88}
    ]},
  { caption: "<b>Shock first; clean up second.</b> The entire deck has vanished — this card never left. Don't explain the empty hands with more moves.",
    climax: true,
    actions: [
      {t:'flip', id:'one', to:'up'},
      {t:'hi', id:'one', on:true},
      {t:'scale', id:'one', s:1.1},
      {t:'label', id:'k', text:'one card remains', x:50, y:88}
    ]},
  { caption: "Optional second beat: <b>produce the deck again</b> from a pocket.",
    beats: ["reproduction"],
    actions: [
      {t:'deck', id:'d', x:78, y:44, n:51},
      {t:'hand', id:'rh', x:84, y:50, side:'right', on:true},
      {t:'label', id:'k', text:'the deck returns', x:50, y:88}
    ]}
]};


ANIMS.t97 = { steps: [
  { caption: "A <b>break or step</b> holds the target — the A♠ — in the <b>center</b> of the deck. Exposed view shows exactly where it lives.",
    beats: ["the mark"],
    actions: [
      {t:'packet', id:'stk', x:45, y:50, w:13, cards:[{bulk:25},{rank:'A', suit:'♠', face:'down'},{bulk:26}]},
      {t:'hand', id:'lh', x:33, y:56, side:'left', on:true, grip:'dealing grip'},
      {t:'label', id:'k', text:'target stepped in the center', x:50, y:88}
    ]},
  { caption: "The deck is <b>stepped</b> at the target — two stocks, offset by a card's width. From the front, nothing shows.",
    beats: ["the step"],
    actions: [
      {t:'remove', id:'stk'},
      {t:'packet', id:'top', x:45, y:39, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'bot', x:47, y:61, w:13, cards:[{bulk:25},{rank:'A', suit:'♠', face:'down'}]},
      {t:'label', id:'k', text:'the step', x:50, y:88}
    ]},
  { caption: "Deal — with a motion <b>identical to a clean top deal</b>, the take comes from the step. The center card slides out; the true top card stays exactly where it was.",
    beats: ["center deal"],
    actions: [
      {t:'repacket', id:'bot', cards:[{bulk:25}]},
      {t:'card', id:'dealt', rank:'A', suit:'♠', x:50, y:58, face:'down', w:11, z:5, secret:{rank:'A', suit:'♠'}},
      {t:'move', id:'dealt', x:74, y:52},
      {t:'hand', id:'rh', x:64, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'dealt from the center', x:50, y:88}
    ]},
  { caption: "The dealt card is the <b>A♠ from the middle</b> — and the top and bottom stocks remain untouched, ready for stacked demos. Angle-sensitive and hard: master the second and bottom deals first.",
    climax: true,
    actions: [
      {t:'flip', id:'dealt', to:'up'},
      {t:'hi', id:'dealt', on:true},
      {t:'remove', id:'top'},
      {t:'remove', id:'bot'},
      {t:'deck', id:'d', x:45, y:50, n:51},
      {t:'label', id:'k', text:'center dealt · stocks safe', x:50, y:88}
    ]}
]};
;

ANIMS.t98 = { steps: [
  { caption: "Target: the <b>second card from the bottom</b>. The bottom card itself never leaves the deck — keep your eye on it (the separate card, Exposed, is the target above it).",
    beats: ["second from bottom"],
    actions: [
      {t:'packet', id:'dk', x:44, y:52, w:13, cards:[{bulk:50}]},
      {t:'card', id:'bot', x:44, y:62, face:'down', w:11, z:2},
      {t:'card', id:'grk', x:44, y:59, face:'down', w:11, z:3, ghost:true},
      {t:'hand', id:'lh', x:31, y:57, side:'left', on:true},
      {t:'note', id:'b', text:'target: second from bottom (Exposed)', x:62, y:24},
      {t:'label', id:'k', text:'the greek deal', x:50, y:88}
    ]},
  { caption: "Take. The right hand deals — and the card that leaves is the one <b>above the bottom card</b>. The bottom card stays home; from the front, the cover is identical to a clean deal off the top.",
    beats: ["the take"],
    actions: [
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'reveal', id:'grk'},
      {t:'move', id:'grk', x:70, y:50, z:5},
      {t:'move', id:'dk', x:42, y:50},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'dealt — from the bottom', x:50, y:88}
    ]},
  { caption: "The dealt card was second-from-bottom all along — and the <b>bottom card is still there</b>. Rare, powerful, extremely angle-sensitive: practice in a mirror at half speed — if you can see the bottom edge, so can they.",
    beats: ["the proof"], climax: true,
    actions: [
      {t:'flip', id:'grk', to:'up'},
      {t:'move', id:'bot', x:44, y:65, z:2},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'bottom card intact', x:50, y:88}
    ]}
]};

ANIMS.t99 = { steps: [
  { caption: "Plan. You need a <b>pair of aces at deal positions one and three</b>. Right now they're buried at known depths (Exposed) — the shuffle has to bring them home without looking like it does anything.",
    beats: ["the plan"],
    actions: [
      {t:'packet', id:'dk', x:50, y:54, w:13, cards:[{bulk:19},{rank:'A', suit:'♠', face:'down'},{bulk:14},{rank:'A', suit:'♥', face:'down'},{bulk:17}]},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:64, y:44, side:'right', on:true},
      {t:'note', id:'b', text:'aces at depths 18 and 33 (Exposed)', x:50, y:24},
      {t:'label', id:'k', text:'know the deal order', x:50, y:88}
    ]},
  { caption: "Run. Peel cards into the left hand — singly, then in small groups — <b>counting silently</b>. The shuffle looks fair because most of it is.",
    beats: ["run the cards"],
    actions: [
      {t:'remove', id:'dk'},
      {t:'packet', id:'rh2', x:59, y:48, w:13, cards:[{bulk:19},{rank:'A', suit:'♠', face:'down'},{bulk:14},{rank:'A', suit:'♥', face:'down'},{bulk:5}]},
      {t:'packet', id:'lh2', x:35, y:57, w:13, cards:[{bulk:12}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'running · counting silently', x:50, y:88}
    ]},
  { caption: "Land. The last runs are single cards: an ace, one indifferent card, the second ace. <b>The pair now sits at positions one and three</b> (Exposed) — the shuffle is over and the hand is built.",
    beats: ["land the aces"],
    actions: [
      {t:'remove', id:'rh2'},
      {t:'remove', id:'lh2'},
      {t:'packet', id:'dk', x:50, y:54, w:13, cards:[{bulk:49},{rank:'A', suit:'♥', face:'down'},{bulk:1},{rank:'A', suit:'♠', face:'down'}]},
      {t:'label', id:'k', text:'aces at one and three', x:50, y:88}
    ]},
  { caption: "Deal. Two hands, alternating — and the first hand turns over <b>a pair of aces</b>. A fair-looking shuffle produced the stacked hand on schedule.",
    beats: ["the deal"], climax: true,
    actions: [
      {t:'repacket', id:'dk', cards:[{bulk:48}]},
      {t:'card', id:'d1', rank:'A', suit:'♠', x:34, y:36, face:'down', w:10, secret:{rank:'A', suit:'♠'}},
      {t:'card', id:'d2', x:62, y:36, face:'down', w:10},
      {t:'card', id:'d3', rank:'A', suit:'♥', x:34, y:60, face:'down', w:10, secret:{rank:'A', suit:'♥'}},
      {t:'card', id:'d4', x:62, y:60, face:'down', w:10},
      {t:'flip', id:'d1', to:'up'},
      {t:'flip', id:'d3', to:'up'},
      {t:'hi', id:'d1', on:true},
      {t:'hi', id:'d3', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'a pair of aces — first hand', x:50, y:88}
    ]}
]};

ANIMS.t100 = { steps: [
  { caption: "The spectator cuts the deck on the table. The left pile was the <b>original top half</b> — the A♠ rides on it, named in Exposed view. The K♣ sits under the other pile.",
    beats: ["they cut"],
    actions: [
      {t:'packet', id:'orig', x:36, y:50, w:13, cards:[{bulk:25},{rank:'A', suit:'♠', face:'down'}]},
      {t:'packet', id:'rest', x:64, y:50, w:13, cards:[{rank:'K', suit:'♣', face:'down'},{bulk:25}]},
      {t:'label', id:'k', text:'they cut — the A♠ half was on top', x:50, y:88}
    ]},
  { caption: "As you complete the cut, the hands <b>hop the original top half back on top</b> under the square-up. The hop is a sound and a blur — practice until the square-up sells the honesty.",
    beats: ["the hop"],
    actions: [
      {t:'hand', id:'lh', x:32, y:44, side:'left', on:true},
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'move', id:'rest', x:50, y:58},
      {t:'move', id:'orig', x:50, y:43},
      {t:'note', id:'b', text:'the hop is a sound and a blur', x:50, y:26},
      {t:'label', id:'k', text:'original top half hopped back on top', x:50, y:88}
    ]},
  { caption: "The deck looks cut and fair. It isn't — <b>the original top stock is back on top</b>, ready for the deal.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'orig'},
      {t:'remove', id:'rest'},
      {t:'packet', id:'done', x:50, y:50, w:14, cards:[{rank:'K', suit:'♣', face:'down'},{bulk:50},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'top stock restored — A♠ on top', x:50, y:88}
    ]}
]};
;

ANIMS.t101 = { steps: [
  { caption: "Two decks. The hot deck is in play; the cold deck waits — case, lap, or pocket — <b>stacked, with A♠ over K♠ on top</b>, as Exposed view shows.",
    beats: ["two decks"],
    actions: [
      {t:'packet', id:'hot', x:40, y:50, w:14, cards:[{bulk:52}]},
      {t:'packet', id:'cold', x:68, y:58, w:13, cards:[{bulk:50},{rank:'K', suit:'♠', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hi', id:'cold', on:true},
      {t:'label', id:'k', text:'hot in play · cold deck stacked & ready', x:50, y:88}
    ]},
  { caption: "Get your cover: a square-up, the case, a body turn. <b>Misdirection first, mechanics second.</b>",
    beats: ["cover"],
    actions: [
      {t:'hi', id:'cold', on:false},
      {t:'hand', id:'rh', x:52, y:40, side:'right', on:true},
      {t:'note', id:'b', text:'square-up · case · body turn', x:50, y:26},
      {t:'label', id:'k', text:'find your cover', x:50, y:88}
    ]},
  { caption: "Under the cover, the decks <b>trade places</b>. The best cooler is the one nobody notices happened.",
    beats: ["the switch"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'hot', x:68, y:58},
      {t:'move', id:'cold', x:40, y:50},
      {t:'label', id:'k', text:'decks trade places', x:50, y:88}
    ]},
  { caption: "Continue with the cold deck. <b>The stacked outcome is now ready to deal</b>, and the table never saw a second pack.",
    climax: true,
    actions: [
      {t:'remove', id:'hot'},
      {t:'hand', id:'rh', on:false},
      {t:'hi', id:'cold', on:true},
      {t:'label', id:'k', text:'cold deck in play — A♠ on top', x:50, y:88}
    ]}
]};
;

ANIMS.t102 = { steps: [
  { caption: "A <b>rubber-banded deck</b> is tossed into the audience. Several spectators will each peek a card — and you will name every single one.",
    beats: ["the toss"],
    actions: [
      {t:'packet', id:'d', x:50, y:50, w:13, cards:[{bulk:40},{rank:'3', suit:'♣', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'7', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'3', suit:'♣', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'7', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'3', suit:'♣', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'7', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'note', id:'b', text:'rubber-banded — and banked', x:50, y:24},
      {t:'label', id:'k', text:'toss it out', x:50, y:88}
    ]},
  { caption: "The secret, in Exposed view: the deck is a <b>bank</b> — the same <b>four cards repeat</b> through it, again and again. Wherever anyone peeks, they can only land on one of the four.",
    beats: ["the bank"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'d'},
      {t:'packet', id:'stk', x:34, y:52, w:13, cards:[{bulk:40}]},
      {t:'packet', id:'win', x:68, y:52, w:13, cards:[{rank:'3', suit:'♣', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'7', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'3', suit:'♣', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'7', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'3', suit:'♣', face:'down'},{rank:'K', suit:'♦', face:'down'},{rank:'7', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'label', id:'k', text:'the bank: A♠ 7♥ K♦ 3♣, repeating', x:50, y:88}
    ]},
  { caption: "Each person opens the banded deck slightly, <b>remembers one card</b>, and closes it. Three peeks — every one of them a bank card, because there is nothing else to peek.",
    beats: ["the peeks"],
    actions: [
      {t:'remove', id:'win'},
      {t:'packet', id:'rest', x:68, y:52, w:13, cards:[{bulk:9}]},
      {t:'card', id:'pk1', rank:'A', suit:'♠', x:26, y:26, face:'up', w:10},
      {t:'card', id:'pk2', rank:'7', suit:'♥', x:50, y:22, face:'up', w:10},
      {t:'card', id:'pk3', rank:'K', suit:'♦', x:74, y:26, face:'up', w:10},
      {t:'label', id:'k', text:'three peeks', x:50, y:88}
    ]},
  { caption: "The deck comes back and you <b>name every peeked card</b> — the A♠, the 7♥, the K♦. The method is a bank; the miracle is in the naming. Presentation carries this one.",
    climax: true,
    actions: [
      {t:'hi', id:'pk1', on:true},
      {t:'hi', id:'pk2', on:true},
      {t:'hi', id:'pk3', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'named: A♠ · 7♥ · K♦', x:50, y:88}
    ]}
]};

ANIMS.t103 = { steps: [
  { caption: "No card is touched, taken, or named aloud. They <b>only think of one</b>.",
    beats: ["think"],
    actions: [
      {t:'deck', id:'d', x:50, y:52, n:52},
      {t:'label', id:'k', text:'think of any card', x:50, y:88}
    ]},
  { caption: "The process is <b>invisible narrowing</b>: wording and timing steer the thought. Picture a card — a bright one, a picture card — and most minds land in the same small neighbourhood. The article's own example target: the Queen of Hearts.",
    beats: ["the steer"],
    actions: [
      {t:'hand', id:'rh', x:64, y:40, side:'right', on:true},
      {t:'note', id:'b', text:'"picture a card — a bright one, a picture card…"', x:50, y:22},
      {t:'label', id:'k', text:'the steer', x:50, y:88}
    ]},
  { caption: "Name it — or better, have them <b>remove it from the deck themselves</b> to confirm: the <b>Queen of Hearts</b>. One clean hit beats a chain of fishing questions; the less procedure, the stronger the mind-read.",
    climax: true,
    actions: [
      {t:'remove', id:'d'},
      {t:'deck', id:'d', x:50, y:52, n:51},
      {t:'card', id:'th', rank:'Q', suit:'♥', x:50, y:38, face:'up', w:12, z:5},
      {t:'hi', id:'th', on:true},
      {t:'label', id:'k', text:'the Queen of Hearts', x:50, y:88}
    ]}
]};

ANIMS.t104 = { steps: [
  { caption: "The heavy lifting is done before anything looks interesting: a <b>stack</b>. Exposed view reads the top fifteen cards — the winning cards (four aces and the K♠) sit at deal positions 2, 5, 8, 11 and 14, exactly where a round-robin deal will send them to the middle hand. A written prediction waits on the table.",
    beats: ["the stack"],
    actions: [
      {t:'packet', id:'deck', x:50, y:54, w:13, cards:[{bulk:37},{bulk:1},{rank:'K', suit:'♠', face:'down'},{bulk:2},{rank:'A', suit:'♣', face:'down'},{bulk:2},{rank:'A', suit:'♦', face:'down'},{bulk:2},{rank:'A', suit:'♥', face:'down'},{bulk:2},{rank:'A', suit:'♠', face:'down'},{bulk:1}]},
      {t:'note', id:'b', text:'prediction: the middle hand wins', x:50, y:24},
      {t:'label', id:'k', text:'stacked deck · prediction waits', x:50, y:88}
    ]},
  { caption: "Shuffle — fair or false — then <b>hands off</b>. Once the deck is tabled you don't touch it again; sell that fairness hard, because the prediction is only strong if the deal looked honest.",
    beats: ["the shuffle"],
    actions: [
      {t:'move', id:'deck', x:50, y:50},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:64, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'shuffled · hands off from here', x:50, y:88}
    ]},
  { caption: "Five-card hands are dealt, round-robin, by other hands. The deal delivers the stack exactly as placed (Exposed): the middle hand's packet is, from the bottom, <b>A♠, A♥, A♦, A♣, K♠</b> — the other two hands are indifferent cards.",
    beats: ["the deal"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:37}]},
      {t:'packet', id:'h1', x:24, y:54, w:12, cards:[{bulk:5}]},
      {t:'packet', id:'h2', x:50, y:54, w:12, cards:[{rank:'A', suit:'♠', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♣', face:'down'},{rank:'K', suit:'♠', face:'down'}]},
      {t:'packet', id:'h3', x:76, y:54, w:12, cards:[{bulk:5}]},
      {t:'label', id:'k', text:'three hands dealt', x:50, y:88}
    ]},
  { caption: "Open the prediction, then turn over the middle hand: <b>four aces and the king — the predicted winner</b>. You predicted the outcome of a poker deal without touching the cards after the shuffle; the stack did the work in silence.",
    climax: true,
    actions: [
      {t:'remove', id:'h2'},
      {t:'card', id:'w1', rank:'A', suit:'♠', x:26, y:48, face:'up', w:11, z:5},
      {t:'card', id:'w2', rank:'A', suit:'♥', x:38, y:48, face:'up', w:11, z:5},
      {t:'card', id:'w3', rank:'A', suit:'♦', x:50, y:48, face:'up', w:11, z:5},
      {t:'card', id:'w4', rank:'A', suit:'♣', x:62, y:48, face:'up', w:11, z:5},
      {t:'card', id:'w5', rank:'K', suit:'♠', x:74, y:48, face:'up', w:11, z:5},
      {t:'hi', id:'w1', on:true},
      {t:'hi', id:'w2', on:true},
      {t:'hi', id:'w3', on:true},
      {t:'hi', id:'w4', on:true},
      {t:'hi', id:'w5', on:true},
      {t:'note', id:'b', text:'prediction: the middle hand wins — four aces', x:50, y:24},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'predicted winner', x:50, y:88}
    ]}
]};

ANIMS.t105 = { steps: [
  { caption: "Mental Epic (Cards) — three predictions for three spectator choices, revealed one by one. All three are <b>written and isolated before any choice is made</b>: the A♠, the 7♥, and a third prediction sealed away — plus, hidden in Exposed view, a switch card waiting in reserve.",
    beats: ["triple prediction"],
    actions: [
      {t:"card", id:"p1", rank:"A", suit:"♠", x:28, y:50, face:"down", w:11, secret:{rank:"A", suit:"♠"}},
      {t:"card", id:"p2", rank:"7", suit:"♥", x:50, y:50, face:"down", w:11, secret:{rank:"7", suit:"♥"}},
      {t:"card", id:"p3", rank:"9", suit:"♣", x:72, y:50, face:"down", w:11, secret:{rank:"9", suit:"♣"}},
      {t:"card", id:"sw", rank:"K", suit:"♦", x:72, y:50, face:"down", w:11, ghost:true, secret:{rank:"K", suit:"♦"}},
      {t:"note", id:"b", text:"three predictions written", x:50, y:30},
      {t:"label", id:"k", text:"Mental Epic board or envelopes", x:50, y:88} ] },
  { caption: "Spectator one names a card — the A♠; spectator two a number — seven; spectator three a suit — diamonds. <b>Each prediction stays isolated</b> while the free choices are made.",
    beats: ["three choices"],
    actions: [
      {t:"unnote", id:"b"},
      {t:"note", id:"b", text:"choices: A♠ · number 7 · suit ♦", x:50, y:30},
      {t:"label", id:"k", text:"three free choices", x:50, y:88} ] },
  { caption: "Reveal one, two: the A♠ prediction and the 7♥ prediction are turned over exactly as written. <b>Two clean hits</b> — no switch, no force, nothing to hide.",
    beats: ["reveal"],
    actions: [
      {t:"unnote", id:"b"},
      {t:"flip", id:"p1", to:"up"},
      {t:"flip", id:"p2", to:"up"},
      {t:"hi", id:"p1", on:true},
      {t:"hi", id:"p2", on:true},
      {t:"label", id:"k", text:"two clean hits", x:50, y:88} ] },
  { caption: "Then the third. The sealed prediction was the 9♣ — wrong for diamonds — so the <b>switch</b> happens under cover of the reveal: in Exposed view the ghost K♦ slides in as the original is palmed away, and what turns over is a diamond.",
    beats: ["switch", "dual reality"],
    climax: true,
    actions: [
      {t:"hi", id:"p1", on:false},
      {t:"hi", id:"p2", on:false},
      {t:"remove", id:"p3"},
      {t:"move", id:"sw", x:72, y:50},
      {t:"reveal", id:"sw"},
      {t:"flip", id:"sw", to:"up"},
      {t:"label", id:"k", text:"the third: switched to a diamond", x:50, y:88} ] },
  { caption: "All three match. <b>Two clean hits and a clever third</b> beat three soft ones — build the reveals, and the last one lands hardest.",
    beats: [],
    actions: [
      {t:"hi", id:"p1", on:true},
      {t:"hi", id:"p2", on:true},
      {t:"label", id:"k", text:"all three predicted", x:50, y:88} ] }
] };

ANIMS.t106 = { steps: [
  { caption: "Tell the story first — Hickok, the saloon, the hand he was holding when he was shot. Under the story, the deck is <b>stacked</b>: Exposed view shows the top five cards — the two black aces, the two black eights, and one indifferent card.",
    beats: ["the stack"],
    actions: [
      {t:'packet', id:'deck', x:50, y:54, w:13, cards:[{bulk:47},{bulk:1},{rank:'8', suit:'♣', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'note', id:'b', text:'prediction: aces and eights', x:50, y:24},
      {t:'label', id:'k', text:'the Dead Man\'s Hand — stacked', x:50, y:88}
    ]},
  { caption: "A simple deal delivers the stack: <b>five cards</b>, dealt one at a time into a hand. Nothing is forced in view — the load was pre-loaded, and the deal is as plain as it looks.",
    beats: ["the deal"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:47}]},
      {t:'packet', id:'hand', x:50, y:44, w:12, cards:[{rank:'A', suit:'♠', face:'down'},{rank:'A', suit:'♣', face:'down'},{rank:'8', suit:'♠', face:'down'},{rank:'8', suit:'♣', face:'down'},{bulk:1}]},
      {t:'hand', id:'rh', x:63, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'five cards dealt', x:50, y:88}
    ]},
  { caption: "Set the hand down and finish the story — the prediction is named before anyone sees a face: <b>aces and eights</b>. History and cards should land together, so the telling comes first and the reveal second.",
    beats: ["the story lands"],
    actions: [
      {t:'move', id:'hand', x:50, y:50},
      {t:'label', id:'k', text:'the prediction: aces and eights', x:50, y:88}
    ]},
  { caption: "Turn them over: <b>black aces and black eights</b> — the Dead Man's Hand, with one indifferent card riding along, exactly as the legend holds it. History and cards collide.",
    climax: true,
    actions: [
      {t:'remove', id:'hand'},
      {t:'card', id:'a1', rank:'A', suit:'♠', x:22, y:48, face:'up', w:11, z:5},
      {t:'card', id:'a2', rank:'A', suit:'♣', x:36, y:48, face:'up', w:11, z:5},
      {t:'card', id:'e1', rank:'8', suit:'♠', x:50, y:48, face:'up', w:11, z:5},
      {t:'card', id:'e2', rank:'8', suit:'♣', x:64, y:48, face:'up', w:11, z:5},
      {t:'card', id:'fifth', x:78, y:48, face:'up', w:11, z:5},
      {t:'hi', id:'a1', on:true},
      {t:'hi', id:'a2', on:true},
      {t:'hi', id:'e1', on:true},
      {t:'hi', id:'e2', on:true},
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'aces and eights', x:50, y:88}
    ]}
]};

ANIMS.t107 = { steps: [
  { caption: "A quiet, coverable pass. Left hand holds a <b>pinky break</b> between the halves; the 10♣, named in Exposed view, waits on the lower half.",
    beats: ["the break"],
    actions: [
      {t:'packet', id:'up', x:50, y:40, w:13, cards:[{bulk:25},{rank:'4', suit:'♠', face:'down'}]},
      {t:'card', id:'sel', rank:'10', suit:'♣', x:50, y:49, face:'down', w:11, secret:{rank:'10', suit:'♣'}},
      {t:'packet', id:'lo', x:50, y:57, w:13, cards:[{bulk:25}]},
      {t:'hand', id:'lh', x:38, y:55, side:'left', on:true, grip:'dealing grip'},
      {t:'note', id:'b', text:'pinky break between the halves', x:72, y:62},
      {t:'label', id:'k', text:'break held', x:50, y:88}
    ]},
  { caption: "Right hand comes over the deck and <b>screens the break</b> — softer cover than a classic pass, and kinder to the angles.",
    beats: ["cover"],
    actions: [
      {t:'hand', id:'rh', x:60, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'right hand screens', x:50, y:88}
    ]},
  { caption: "The bottom half swings out and over as the top half drops under — <b>transposed behind the screen of fingers</b>.",
    beats: ["the pass"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'lo', x:50, y:40},
      {t:'move', id:'sel', x:50, y:32},
      {t:'move', id:'up', x:50, y:57},
      {t:'label', id:'k', text:'halves transposed — screened', x:50, y:88}
    ]},
  { caption: "Square, soft and immediate. <b>The 10♣ is on top.</b> Match the cover to your hands and this stays invisible.",
    climax: true,
    actions: [
      {t:'remove', id:'lo'},
      {t:'remove', id:'up'},
      {t:'packet', id:'done', x:50, y:51, w:14, cards:[{bulk:51}]},
      {t:'move', id:'sel', x:50, y:44},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'10♣ on top', x:50, y:88}
    ]}
]};

ANIMS.t108 = { steps: [
  { caption: "Secretly reverse the bottom half under cover of the top stock. The markers, named in Exposed view: <b>2♠ on top of the deck, 8♦ on the bottom</b>.",
    beats: ["the setup"],
    actions: [
      {t:'packet', id:'up', x:50, y:41, w:13, cards:[{bulk:25},{rank:'2', suit:'♠', face:'down'}]},
      {t:'packet', id:'lo', x:50, y:58, w:13, cards:[{rank:'8', suit:'♦', face:'down'},{bulk:25}]},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'label', id:'k', text:'bottom card: 8♦ · top card: 2♠', x:50, y:88}
    ]},
  { caption: "Right hand covers. Left fingers <b>flip the bottom section face-up</b> while the top cards screen the action — the top cards must not move; all motion stays below the cover.",
    beats: ["the half pass"],
    actions: [
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true},
      {t:'repacket', id:'lo', cards:[{bulk:25},{rank:'8', suit:'♦', face:'up'}]},
      {t:'note', id:'b', text:'bottom section turns under cover', x:50, y:24},
      {t:'label', id:'k', text:'the bottom half reverses', x:50, y:88}
    ]},
  { caption: "Square up. The bottom stock is now <b>face-up under the face-down top stock</b> — in Exposed view the 8♦ marks where the reversed section begins. Ready for Triumph, color changes, and secret reverses.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'remove', id:'lo'},
      {t:'remove', id:'up'},
      {t:'packet', id:'done', x:50, y:50, w:14, cards:[{bulk:25},{bulk:25},{rank:'2', suit:'♠', face:'down'}]},
      {t:'card', id:'rev', rank:'8', suit:'♦', x:50, y:50, face:'up', w:11, ghost:true, secret:{rank:'8', suit:'♦'}},
      {t:'label', id:'k', text:'bottom half face-up under the cover', x:50, y:88}
    ]}
]};

ANIMS.t109 = { steps: [
  { caption: "The selection — the A♠ — sits on <b>top</b> of the deck. You're going to reverse it inside a cut, with no visible reverse action at all.",
    beats: ["setup"],
    actions: [
      {t:'packet', id:'deck', x:50, y:50, w:13, cards:[{bulk:51},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true, grip:'dealing grip'},
      {t:'label', id:'k', text:'selection on top', x:50, y:88}
    ]},
  { caption: "<b>Cut</b>: half the deck comes off into the right hand. The selection rides on top of that half.",
    beats: ["the cut"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'top', x:64, y:40, w:13, cards:[{bulk:25},{rank:'A', suit:'♠', face:'down'}]},
      {t:'packet', id:'bot', x:38, y:58, w:13, cards:[{bulk:26}]},
      {t:'hand', id:'rh', x:72, y:34, side:'right', on:true},
      {t:'label', id:'k', text:'the cut', x:50, y:88}
    ]},
  { caption: "As the cut completes, the selection <b>flips over against the lower packet</b>, turned by the landing itself. Don't pause on the flip — the cut is the move.",
    beats: ["Braue reversal"],
    actions: [
      {t:'repacket', id:'top', cards:[{bulk:25}]},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:48, y:48, face:'up', w:11, z:5},
      {t:'move', id:'top', x:48, y:39},
      {t:'label', id:'k', text:'reversed on the cut', x:50, y:88}
    ]},
  { caption: "<b>Square the deck.</b> The selection now sits face-up inside it, at a position you know — ready for ambitious phases, secret reverses, kicker productions.",
    beats: ["square"],
    actions: [
      {t:'move', id:'bot', x:48, y:57},
      {t:'move', id:'sel', x:48, y:48},
      {t:'move', id:'top', x:48, y:40},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'squared — reversed inside', x:50, y:88}
    ]},
  { caption: "Spread the deck and there it is: <b>one card reversed in the middle</b> — the selection, turned face-up with nobody having seen a thing.",
    climax: true,
    actions: [
      {t:'remove', id:'top'},
      {t:'remove', id:'bot'},
      {t:'spread', x:6, y:52, dx:1.65, w:8, face:'down', prefix:'r', count:51},
      {t:'move', id:'sel', x:50, y:50, z:9},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'one card reversed: A♠', x:50, y:88}
    ]}
]};

ANIMS.t110 = { steps: [
  { caption: "Hold. A card in the right hand; the deck in the left with a <b>known bottom card</b> (Exposed). The pass is about to trade one for the other.",
    beats: ["the hold"],
    actions: [
      {t:'packet', id:'dk', x:40, y:54, w:13, cards:[{bulk:50}]},
      {t:'card', id:'bot', x:40, y:63, face:'down', w:11, z:3, ghost:true},
      {t:'card', id:'hc', x:64, y:44, face:'down', w:12},
      {t:'hand', id:'lh', x:29, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:71, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'card in hand · known bottom', x:50, y:88}
    ]},
  { caption: "Pass. As the right hand passes the deck, it <b>leaves its card and takes the bottom card in one continuous motion</b>. Nothing stops; nothing flashes.",
    beats: ["bottom change"],
    actions: [
      {t:'move', id:'hc', x:40, y:60, z:4},
      {t:'remove', id:'hc'},
      {t:'repacket', id:'dk', cards:[{bulk:51}]},
      {t:'reveal', id:'bot'},
      {t:'move', id:'bot', x:64, y:44, z:4},
      {t:'label', id:'k', text:'switched in the pass', x:50, y:88}
    ]},
  { caption: "Continue. The hand <b>moves on with the new card</b> — the gesture keeps going, so there is nothing for the eye to settle on.",
    beats: ["continue"],
    actions: [
      {t:'move', id:'bot', x:72, y:50, z:4},
      {t:'hand', id:'rh', x:77, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'hand moves on', x:50, y:88}
    ]},
  { caption: "The card in the hand is now the deck's <b>bottom card</b>; the old card is buried in the deck. Same rule as the top change: the gesture must make sense — speed is secondary.",
    beats: ["the cover"], climax: true,
    actions: [
      {t:'flip', id:'bot', to:'up'},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'the bottom card — in hand', x:50, y:88}
    ]}
]};

ANIMS.t111 = { steps: [
  { caption: "Flushtration Count — a packet of four cards. Its <b>bottom card is the A♠</b> (Exposed view shows the whole stack; the article names no card, so the ace and its packet-mates are this run-through's example). Remember that face — it is the only one this count will ever show.",
    beats: ["the packet"],
    actions: [
      {t:'packet', id:'pkt', x:44, y:50, w:13, cards:[{rank:'A', suit:'♠', face:'down'},{rank:'7', suit:'♣', face:'down'},{rank:'9', suit:'♦', face:'down'},{rank:'J', suit:'♥', face:'down'}]},
      {t:'hand', id:'lh', x:32, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'four cards in hand', x:50, y:88}
    ]},
  { caption: "Show. Turn the packet face-up and display the <b>bottom card</b> — the A♠. Fair, open, unhurried.",
    beats: ["show"],
    actions: [
      {t:'repacket', id:'pkt', cards:[{rank:'7', suit:'♣', face:'down'},{rank:'9', suit:'♦', face:'down'},{rank:'J', suit:'♥', face:'down'}]},
      {t:'card', id:'bot', rank:'A', suit:'♠', x:44, y:33, face:'up', w:12, z:5},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'rh', x:58, y:28, side:'right', on:true},
      {t:'label', id:'k', text:'the bottom card — the A♠', x:50, y:88}
    ]},
  { caption: "Deal. Turn the packet face-down and deal <b>one card</b> onto the table. The audience files it as the ace they just saw — but dealt cards come off the <b>top</b>. It's the J♥ (Exposed).",
    beats: ["deal one"],
    actions: [
      {t:'remove', id:'bot'},
      {t:'repacket', id:'pkt', cards:[{rank:'A', suit:'♠', face:'down'},{rank:'7', suit:'♣', face:'down'},{rank:'9', suit:'♦', face:'down'}]},
      {t:'card', id:'d1', rank:'J', suit:'♥', x:66, y:50, face:'down', w:11, secret:{rank:'J', suit:'♥'}},
      {t:'label', id:'k', text:'one dealt — off the top', x:50, y:88}
    ]},
  { caption: "Repeat. Show the face again — the <b>same A♠</b>, because dealing off the top never touches the bottom. Deal another: the 9♦, filed by every watching eye as a second ace.",
    beats: ["repeat"],
    actions: [
      {t:'repacket', id:'pkt', cards:[{rank:'7', suit:'♣', face:'down'}]},
      {t:'card', id:'bot', rank:'A', suit:'♠', x:44, y:33, face:'up', w:12, z:5},
      {t:'hi', id:'bot', on:true},
      {t:'card', id:'d2', rank:'9', suit:'♦', x:74, y:56, face:'down', w:11, secret:{rank:'9', suit:'♦'}},
      {t:'label', id:'k', text:'same face · another dealt', x:50, y:88}
    ]},
  { caption: "Result. Deal the last packet card down and turn the dealt cards over: a jack, a nine, a seven. The audience believed every card matched — but <b>only one face was ever shown</b>: the same bottom card, again and again. Rhythm and confidence sell it; hesitation invites scrutiny.",
    climax: true,
    actions: [
      {t:'remove', id:'pkt'},
      {t:'card', id:'d3', rank:'7', suit:'♣', x:58, y:60, face:'down', w:11, secret:{rank:'7', suit:'♣'}},
      {t:'move', id:'bot', x:34, y:42},
      {t:'flip', id:'d1', to:'up'},
      {t:'flip', id:'d2', to:'up'},
      {t:'flip', id:'d3', to:'up'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'one ace — shown every time', x:50, y:88}
    ]}
]};

ANIMS.t112 = { steps: [
  { caption: "One card, and a hand that must look <b>empty and idle</b>. The gambler's cop hides the card low — in the curled fingers, not in a full classic palm.",
    beats: ["setup"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:45, y:52, face:'down', w:12, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'the card to cop', x:50, y:88}
    ]},
  { caption: "The card <b>settles into the curl of the fingers and heel</b> — not a full palm. A low, natural hold, clipped by bent fingers.",
    beats: ["the settle"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'palm', id:'c'},
      {t:'move', id:'c', x:36, y:62},
      {t:'scale', id:'c', s:0.8},
      {t:'hand', id:'lh', x:34, y:60, side:'left', on:true, grip:'curled fingers · heel of hand'},
      {t:'note', id:'b', text:'into the curl — not a full palm', x:56, y:74},
      {t:'label', id:'k', text:'copped — hand looks empty', x:50, y:88}
    ]},
  { caption: "The hand <b>hangs at the side</b>, relaxed and idle. Relaxation is the camouflage — a stiff hand announces the steal.",
    beats: ["the hang"],
    actions: [
      {t:'move', id:'c', x:30, y:72},
      {t:'hand', id:'lh', x:28, y:74, side:'left', on:true, grip:''},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'hangs empty', x:50, y:88}
    ]},
  { caption: "Walk, gesture, reach into a pocket — or <b>produce it on your own schedule</b>. The cop keeps the card available and the hand innocent.",
    climax: true,
    actions: [
      {t:'unpalm', id:'c'},
      {t:'move', id:'c', x:50, y:46},
      {t:'scale', id:'c', s:1.08},
      {t:'flip', id:'c', to:'up'},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'produced from the cop', x:50, y:88}
    ]}
]};

ANIMS.t113 = { steps: [
  { caption: "One card, to be held <b>flat against the palm by the thumb</b> — the Tenkai palm: open-looking, versatile, and devastating head-on.",
    beats: ["setup"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:48, y:50, face:'down', w:12, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'the card', x:50, y:88}
    ]},
  { caption: "<b>Pin</b>: the thumb holds the card flat against the upper palm, almost parallel to the floor. Keep the thumb soft — a hard pinch flashes the edge.",
    beats: ["the pin"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'palm', id:'c'},
      {t:'move', id:'c', x:58, y:40, z:2},
      {t:'scale', id:'c', s:0.85},
      {t:'rot', id:'c', deg:15},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true, grip:'thumb pin'},
      {t:'note', id:'b', text:'flat against the upper palm — thumb soft', x:72, y:56},
      {t:'label', id:'k', text:'Tenkai position', x:50, y:88}
    ]},
  { caption: "<b>Open</b>: the fingers are free and the hand looks nearly empty from the front. The price is angles — devastating head-on, careful at the sides.",
    beats: ["the open hand"],
    actions: [
      {t:'hand', id:'rh', x:58, y:44, side:'right', on:true, grip:''},
      {t:'note', id:'b', text:'head-on it reads empty — guard the sides', x:72, y:56},
      {t:'label', id:'k', text:'open — head-on', x:50, y:88}
    ]},
  { caption: "Vanishes, transfers, productions: the card simply <b>appears</b> from a hand that looked empty.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'unpalm', id:'c'},
      {t:'move', id:'c', x:50, y:46},
      {t:'rot', id:'c', deg:0},
      {t:'scale', id:'c', s:1.08},
      {t:'flip', id:'c', to:'up'},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'produced from Tenkai', x:50, y:88}
    ]}
]};

ANIMS.t114 = { steps: [
  { caption: "Two cards — though the audience will only ever count one. A <b>second card hides inside the fist</b> before you begin: Exposed view can see it; the room can't.",
    beats: ["setup"],
    actions: [
      {t:'hand', id:'rh', x:54, y:44, side:'right', on:true},
      {t:'card', id:'hid', rank:'K', suit:'♠', x:54, y:44, face:'down', w:11, z:2, ghost:true, secret:{rank:'K', suit:'♠'}},
      {t:'card', id:'in', rank:'5', suit:'♥', x:30, y:46, face:'up', w:12},
      {t:'hi', id:'in', on:true},
      {t:'label', id:'k', text:'one card hidden in the fist', x:50, y:88}
    ]},
  { caption: "The face-up 5♥ goes <b>into the top of the fist</b>.",
    beats: ["in"],
    actions: [
      {t:'move', id:'in', x:50, y:36},
      {t:'label', id:'k', text:'in at the top', x:50, y:88}
    ]},
  { caption: "Inside the hand, the <b>switch</b>: the 5♥ stays in the fist, and the hidden card is the one that travels through and out the bottom.",
    beats: ["through"],
    actions: [
      {t:'palm', id:'in'},
      {t:'reveal', id:'hid'},
      {t:'move', id:'hid', x:54, y:64},
      {t:'flip', id:'hid', to:'up'},
      {t:'label', id:'k', text:'the switch (Exposed)', x:50, y:88}
    ]},
  { caption: "Out comes the <b>K♠</b> — a different card entirely. <b>Hold it a beat</b>: the change needs a moment to register. The 5♥ never left the fist.",
    climax: true,
    actions: [
      {t:'scale', id:'hid', s:1.1},
      {t:'hi', id:'hid', on:true},
      {t:'label', id:'k', text:'changed on the way through', x:50, y:88}
    ]}
]};

ANIMS.t115 = { steps: [
  { caption: "The deck in both hands, with a <b>break held between the halves</b>. Exposed view keeps the two halves separate — that break is where the pass will happen.",
    beats: ["the break"],
    actions: [
      {t:'packet', id:'low', x:50, y:58, w:13, cards:[{bulk:26}]},
      {t:'card', id:'sel', x:50, y:51, face:'down', w:11, z:4, ghost:true},
      {t:'packet', id:'up', x:50, y:45, w:13, cards:[{bulk:25}]},
      {t:'hand', id:'lh', x:36, y:54, side:'left', on:true},
      {t:'hand', id:'rh', x:64, y:54, side:'right', on:true},
      {t:'note', id:'b', text:'break between the halves', x:50, y:26},
      {t:'label', id:'k', text:'break held', x:50, y:88}
    ]},
  { caption: "<b>Spread.</b> The deck opens between both hands — an action that looks like a search or a display, and is meant to.",
    beats: ["spread"],
    actions: [
      {t:'remove', id:'low'},
      {t:'remove', id:'up'},
      {t:'spread', x:8, y:50, dx:1.42, w:9, face:'down', prefix:'a', count:26},
      {t:'move', id:'sel', x:47, y:50},
      {t:'spread', x:50.5, y:50, dx:1.42, w:9, face:'down', prefix:'b', count:25},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'spread between the hands', x:50, y:88}
    ]},
  { caption: "<b>Pass.</b> Under the moving cards, the break is passed: the <b>bottom half travels to the top</b> while the spread is still in motion. The motion is the cover — nothing holds still long enough to be watched.",
    beats: ["Spread Pass"],
    actions: [
      {t:'remove', id:'a0'},
      {t:'remove', id:'a1'},
      {t:'remove', id:'a2'},
      {t:'remove', id:'a3'},
      {t:'remove', id:'a4'},
      {t:'remove', id:'a5'},
      {t:'remove', id:'a6'},
      {t:'remove', id:'a7'},
      {t:'remove', id:'a8'},
      {t:'remove', id:'a9'},
      {t:'remove', id:'a10'},
      {t:'remove', id:'a11'},
      {t:'remove', id:'a12'},
      {t:'remove', id:'a13'},
      {t:'remove', id:'a14'},
      {t:'remove', id:'a15'},
      {t:'remove', id:'a16'},
      {t:'remove', id:'a17'},
      {t:'remove', id:'a18'},
      {t:'remove', id:'a19'},
      {t:'remove', id:'a20'},
      {t:'remove', id:'a21'},
      {t:'remove', id:'a22'},
      {t:'remove', id:'a23'},
      {t:'remove', id:'a24'},
      {t:'remove', id:'a25'},
      {t:'remove', id:'b0'},
      {t:'remove', id:'b1'},
      {t:'remove', id:'b2'},
      {t:'remove', id:'b3'},
      {t:'remove', id:'b4'},
      {t:'remove', id:'b5'},
      {t:'remove', id:'b6'},
      {t:'remove', id:'b7'},
      {t:'remove', id:'b8'},
      {t:'remove', id:'b9'},
      {t:'remove', id:'b10'},
      {t:'remove', id:'b11'},
      {t:'remove', id:'b12'},
      {t:'remove', id:'b13'},
      {t:'remove', id:'b14'},
      {t:'remove', id:'b15'},
      {t:'remove', id:'b16'},
      {t:'remove', id:'b17'},
      {t:'remove', id:'b18'},
      {t:'remove', id:'b19'},
      {t:'remove', id:'b20'},
      {t:'remove', id:'b21'},
      {t:'remove', id:'b22'},
      {t:'remove', id:'b23'},
      {t:'remove', id:'b24'},
      {t:'packet', id:'newup', x:50, y:43, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'newlow', x:50, y:58, w:13, cards:[{bulk:25}]},
      {t:'move', id:'sel', x:50, y:34},
      {t:'note', id:'b', text:'former bottom half — passed to the top (Exposed)', x:50, y:24},
      {t:'note', id:'c', text:'former top half — now underneath', x:50, y:74},
      {t:'label', id:'k', text:'halves transposed in the spread', x:50, y:88}
    ]},
  { caption: "<b>Resquare.</b> The spread closes and the deck squares — the halves have traded places inside an action that only ever looked like a search.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'unnote', id:'c'},
      {t:'move', id:'newup', x:50, y:47},
      {t:'move', id:'sel', x:50, y:36},
      {t:'move', id:'newlow', x:50, y:55},
      {t:'label', id:'k', text:'resquared — pass complete', x:50, y:88}
    ]},
  { caption: "<b>Cover.</b> Motion hides the transpose. Bold and visual — but the spread must look motivated: <b>searching for a card works well</b>. An unmotivated spread is just a stage for the move.",
    beats: ["cover"],
    actions: [
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'the spread was the cover', x:50, y:88}
    ]}
]};

ANIMS.t116 = { steps: [
  { caption: "<b>Angle.</b> The selection sits in the center of the deck, <b>outjogged or angled</b> — tracked here as the separate card between the two packets. Everything else is one continuous push.",
    beats: ["angle"],
    actions: [
      {t:'packet', id:'below', x:50, y:59, w:13, cards:[{bulk:25}]},
      {t:'card', id:'sel', x:55, y:51, face:'down', w:11, deg:16, z:4},
      {t:'packet', id:'above', x:50, y:43, w:13, cards:[{bulk:26}]},
      {t:'hand', id:'lh', x:36, y:56, side:'left', on:true},
      {t:'hand', id:'rh', x:63, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'selection angled in the center', x:50, y:88}
    ]},
  { caption: "<b>Push.</b> As the selection is pushed flush, it <b>slides diagonally into the right palm</b> — the classic Erdnase steal, in the same motion that squares it away. One continuous push: any pause between square and palm telegraphs the steal.",
    beats: ["Diagonal Palm Shift"],
    actions: [
      {t:'palm', id:'sel'},
      {t:'move', id:'sel', x:66, y:36, z:5},
      {t:'rot', id:'sel', deg:0},
      {t:'scale', id:'sel', s:0.85},
      {t:'move', id:'above', x:50, y:47},
      {t:'move', id:'below', x:50, y:55},
      {t:'label', id:'k', text:'into the right palm as it squares', x:50, y:88}
    ]},
  { caption: "<b>Square.</b> The deck looks fair — and the selection is <b>gone from it</b>. Fifty-one cards in the deck; the fifty-second is in your right palm.",
    beats: ["square"],
    actions: [
      {t:'move', id:'sel', x:70, y:42},
      {t:'label', id:'k', text:'deck fair · selection palmed', x:50, y:88}
    ]},
  { caption: "<b>Produce.</b> From the palm, on your schedule — the card stolen from the center of a squared deck, in one push.",
    climax: true,
    actions: [
      {t:'unpalm', id:'sel'},
      {t:'move', id:'sel', x:50, y:34},
      {t:'scale', id:'sel', s:1.08},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'produced from the palm', x:50, y:88}
    ]}
]};

ANIMS.t117 = { steps: [
  { caption: "Pass the halves as the deck is turned over — <b>the turnover is the cover</b>. The break is held between the halves; the 4♠ waits below it, named in Exposed view.",
    beats: ["break held"],
    actions: [
      {t:'packet', id:'up', x:50, y:40, w:13, cards:[{bulk:25},{rank:'J', suit:'♣', face:'down'}]},
      {t:'card', id:'sel', rank:'4', suit:'♠', x:50, y:49, face:'down', w:11, secret:{rank:'4', suit:'♠'}},
      {t:'packet', id:'lo', x:50, y:57, w:13, cards:[{bulk:25}]},
      {t:'hand', id:'lh', x:38, y:55, side:'left', on:true},
      {t:'note', id:'b', text:'break held between the halves', x:72, y:62},
      {t:'label', id:'k', text:'deck about to turn over', x:50, y:88}
    ]},
  { caption: "Turn the deck over in the hands — a face-up display, a 'let me show you' gesture. <b>Motivate the turnover</b> and nobody watches your hands.",
    beats: ["the turnover"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'rot', id:'up', deg:180},
      {t:'rot', id:'sel', deg:180},
      {t:'rot', id:'lo', deg:180},
      {t:'label', id:'k', text:'turning over…', x:50, y:88}
    ]},
  { caption: "Under cover of the larger motion, the halves transpose. The turn is loud; <b>the pass hides inside it</b>.",
    beats: ["pass on the turnover"],
    actions: [
      {t:'move', id:'lo', x:50, y:40},
      {t:'move', id:'sel', x:50, y:32},
      {t:'move', id:'up', x:50, y:57},
      {t:'label', id:'k', text:'halves passed during the turn', x:50, y:88}
    ]},
  { caption: "The deck lands squared — orientation changed, order shifted. <b>The 4♠ is on top.</b>",
    climax: true,
    actions: [
      {t:'remove', id:'lo'},
      {t:'remove', id:'up'},
      {t:'packet', id:'done', x:50, y:51, w:14, cards:[{bulk:51}]},
      {t:'move', id:'sel', x:50, y:44},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'squared · 4♠ on top', x:50, y:88}
    ]}
]};

ANIMS.t118 = { steps: [
  { caption: "<b>Cover.</b> The right hand holds a packet above the deck — a display, a count, anything intentional-looking. Below it, the deck in the left hand is held in <b>two portions at a break</b>.",
    beats: ["cover"],
    actions: [
      {t:'packet', id:'mlow', x:50, y:61, w:13, cards:[{bulk:19}]},
      {t:'card', id:'sel', x:50, y:55, face:'down', w:11, z:4, ghost:true},
      {t:'packet', id:'mup', x:50, y:51, w:13, cards:[{bulk:20}]},
      {t:'packet', id:'cover', x:50, y:33, w:13, cards:[{bulk:12}]},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:63, y:28, side:'right', on:true},
      {t:'note', id:'b', text:'break between the lower portions', x:74, y:56},
      {t:'label', id:'k', text:'cover packet above · break below', x:50, y:88}
    ]},
  { caption: "<b>Pass.</b> The left hand passes the lower portions — they <b>transpose beneath the cover</b>, and the cover never moves. What the audience watches is the one thing that isn't happening.",
    beats: ["Cover Pass"],
    actions: [
      {t:'move', id:'mlow', x:50, y:50},
      {t:'move', id:'sel', x:50, y:44},
      {t:'move', id:'mup', x:50, y:60},
      {t:'unnote', id:'b'},
      {t:'note', id:'b', text:'lower portions transposed (Exposed) — cover still', x:50, y:76},
      {t:'label', id:'k', text:'the pass, under cover', x:50, y:88}
    ]},
  { caption: "<b>Replace.</b> The cover packet goes back on top, exactly where it was held.",
    beats: ["replace"],
    actions: [
      {t:'move', id:'cover', x:50, y:42},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'cover replaced', x:50, y:88}
    ]},
  { caption: "<b>Result.</b> The pass is done and <b>nothing looked like a cut</b> — because the visible action, a packet held and replaced, was never the action that mattered. The cover packet must look intentional: a display or a count works well.",
    climax: true,
    actions: [
      {t:'move', id:'cover', x:50, y:45},
      {t:'move', id:'mlow', x:50, y:53},
      {t:'move', id:'sel', x:50, y:47},
      {t:'move', id:'mup', x:50, y:58},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'cover pass complete', x:50, y:88}
    ]}
]};

ANIMS.t119 = { steps: [
  { caption: "Multiple Shift — <b>three selections</b>, from three spectators (tracked positionally; the article names no cards). Clean insertions matter more than a fast shift.",
    beats: ["three selections"],
    actions: [
      {t:'packet', id:'deck', x:50, y:56, w:13, cards:[{bulk:49}]},
      {t:'card', id:'s1', x:32, y:32, face:'up', w:10, z:5},
      {t:'card', id:'s2', x:50, y:28, face:'up', w:10, z:5},
      {t:'card', id:'s3', x:68, y:32, face:'up', w:10, z:5},
      {t:'hi', id:'s1', on:true},
      {t:'hi', id:'s2', on:true},
      {t:'hi', id:'s3', on:true},
      {t:'label', id:'k', text:'three selections inserted', x:50, y:88}
    ]},
  { caption: "Insert. Each card goes in at a <b>different depth</b>, fairly — with breaks or steps held at each one. Exposed view keeps the three separated inside the squared deck; to the audience, they're simply lost.",
    beats: ["insert"],
    actions: [
      {t:'remove', id:'s1'},
      {t:'remove', id:'s2'},
      {t:'remove', id:'s3'},
      {t:'card', id:'s1', x:50, y:46, face:'down', w:10, z:4, ghost:true},
      {t:'card', id:'s2', x:50, y:52, face:'down', w:10, z:4, ghost:true},
      {t:'card', id:'s3', x:50, y:58, face:'down', w:10, z:4, ghost:true},
      {t:'note', id:'b', text:'breaks and steps held at each depth', x:74, y:38},
      {t:'label', id:'k', text:'inserted at different depths', x:50, y:88}
    ]},
  { caption: "Shift. <b>One action</b> gathers them all — every held break closes the same way, and the three selections travel together. If the inserts looked fair, the gather is invisible.",
    beats: ["the shift"],
    actions: [
      {t:'move', id:'s1', x:50, y:40},
      {t:'move', id:'s2', x:50, y:37},
      {t:'move', id:'s3', x:50, y:34},
      {t:'hand', id:'rh', x:64, y:30, side:'right', on:true},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'a single shift gathers them', x:50, y:88}
    ]},
  { caption: "Arrive. <b>All three on top</b> (or bottom — the same shift serves both) — the engine inside multi-selection routines and ace assemblies.",
    climax: true,
    actions: [
      {t:'reveal', id:'s1'},
      {t:'reveal', id:'s2'},
      {t:'reveal', id:'s3'},
      {t:'flip', id:'s1', to:'up'},
      {t:'flip', id:'s2', to:'up'},
      {t:'flip', id:'s3', to:'up'},
      {t:'move', id:'s1', x:42, y:36},
      {t:'move', id:'s2', x:50, y:33},
      {t:'move', id:'s3', x:58, y:36},
      {t:'hi', id:'s2', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'all three controlled', x:50, y:88}
    ]}
]};

ANIMS.t120 = { steps: [
  { caption: "A small packet in the left hand — <b>five cards</b>, counted aloud in a moment. The bottom card, tracked separately underneath, is the one the count will hide.",
    beats: ["the packet"],
    actions: [
      {t:'packet', id:'pkt', x:48, y:48, w:13, cards:[{bulk:4}]},
      {t:'card', id:'hid', x:48, y:59, face:'down', w:11, z:2, ghost:true},
      {t:'hand', id:'lh', x:35, y:54, side:'left', on:true},
      {t:'label', id:'k', text:'five cards · bottom card tracked', x:50, y:88}
    ]},
  { caption: "<b>Buckle.</b> The left fingers <b>pull the bottom card back</b>, buckling it to create a natural break above it. Soft buckle — a loud snap or a visible kink gives it away.",
    beats: ["buckle"],
    actions: [
      {t:'move', id:'hid', x:43, y:62},
      {t:'rot', id:'hid', deg:-8},
      {t:'note', id:'b', text:'bottom card buckled back — break above it', x:50, y:26},
      {t:'label', id:'k', text:'the buckle', x:50, y:88}
    ]},
  { caption: "<b>Take.</b> The right hand takes the <b>block above the buckle as one card</b> — two cards travel, the count says \"one.\" The buckled card stays behind in the left hand.",
    beats: ["Buckle Count · the take"],
    actions: [
      {t:'repacket', id:'pkt', cards:[{bulk:2}]},
      {t:'packet', id:'pile', x:68, y:50, w:12, cards:[{bulk:2}]},
      {t:'hand', id:'rh', x:76, y:42, side:'right', on:true},
      {t:'unnote', id:'b'},
      {t:'note', id:'b', text:'two cards taken — counted as one', x:68, y:70},
      {t:'label', id:'k', text:'"one…"', x:50, y:88}
    ]},
  { caption: "<b>Continue.</b> The remaining cards are counted off one by one — \"two, three, four\" — each one honest. Only the first take lied.",
    beats: ["the count"],
    actions: [
      {t:'repacket', id:'pile', cards:[{bulk:4}]},
      {t:'remove', id:'pkt'},
      {t:'move', id:'hid', x:40, y:64},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'"…two, three, four"', x:50, y:88}
    ]},
  { caption: "<b>Result.</b> The spoken count says four; the hands hold <b>five</b>. The hidden card stays concealed under the left hand — the foundation of many packet counts.",
    climax: true,
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'counted four — holding five', x:50, y:88}
    ]}
]};

ANIMS.t121 = { steps: [
  { caption: "Pinky Count — secretly count cards with the left pinky, establishing a break at a precise number without looking. The deck is a declared packet: in Exposed view you can see the <b>four cards that will be counted</b> sitting on top.",
    beats: ["count by feel"],
    actions: [
      {t:"packet", id:"deckp", x:50, y:50, w:13, cards:[{bulk:48}, {rank:"9", suit:"♣", face:"down"}, {rank:"5", suit:"♦", face:"down"}, {rank:"2", suit:"♥", face:"down"}, {rank:"A", suit:"♠", face:"down"}]},
      {t:"hand", id:"lh", x:38, y:56, side:"left", on:true},
      {t:"label", id:"k", text:"pinky at the rear edge", x:50, y:88} ] },
  { caption: "Pinky pulls down <b>one card at a time</b> at the rear, counting by touch — four cards, felt not seen. Thumb and fingers stay still from the front.",
    beats: ["one by one"],
    actions: [
      {t:"remove", id:"deckp"},
      {t:"packet", id:"main", x:50, y:54, w:13, cards:[{bulk:48}]},
      {t:"packet", id:"cnt", x:50, y:38, w:13, cards:[{rank:"9", suit:"♣", face:"down"}, {rank:"5", suit:"♦", face:"down"}, {rank:"2", suit:"♥", face:"down"}, {rank:"A", suit:"♠", face:"down"}]},
      {t:"note", id:"b", text:"pinky counts · front stays square", x:70, y:60},
      {t:"label", id:"k", text:"counting to a break", x:50, y:88} ] },
  { caption: "<b>Break held at the exact number</b> — four cards above the pinky's break, the rest below. Ready for a force, a double, or a pass — no glimpse required.",
    beats: ["break"],
    climax: true,
    actions: [
      {t:"unnote", id:"b"},
      {t:"move", id:"cnt", x:50, y:36},
      {t:"hi", id:"cnt", on:true},
      {t:"label", id:"k", text:"break at the count: 4", x:50, y:88} ] },
  { caption: "From the front, thumb and fingers never moved — <b>the deck looks squared</b>. Start with three or four; speed and silence come with repetition.",
    beats: ["squared front"],
    actions: [
      {t:"hi", id:"cnt", on:false},
      {t:"remove", id:"cnt"},
      {t:"remove", id:"main"},
      {t:"packet", id:"deckp", x:50, y:50, w:13, cards:[{bulk:48}, {rank:"9", suit:"♣", face:"down"}, {rank:"5", suit:"♦", face:"down"}, {rank:"2", suit:"♥", face:"down"}, {rank:"A", suit:"♠", face:"down"}]},
      {t:"label", id:"k", text:"squared from the front", x:50, y:88} ] }
] };

ANIMS.t122 = { steps: [
  { caption: "One card, and a right hand that must read <b>empty from the front</b>. The lateral palm hides the card at the hand's edge — not in the palm at all.",
    beats: ["setup"],
    actions: [
      {t:'card', id:'c', x:48, y:50, face:'down', w:12},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'the card to clip', x:50, y:88}
    ]},
  { caption: "<b>Clip.</b> The card is clipped <b>between the thumb base and the side of the middle fingers</b> — held at the edge of the hand, where a head-on audience never looks.",
    beats: ["Lateral Palm · the clip"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'palm', id:'c'},
      {t:'move', id:'c', x:63, y:42, z:2},
      {t:'rot', id:'c', deg:24},
      {t:'scale', id:'c', s:0.85},
      {t:'note', id:'b', text:'thumb base + side of middle fingers (Exposed)', x:70, y:60},
      {t:'label', id:'k', text:'clipped at the edge', x:50, y:88}
    ]},
  { caption: "<b>Flat.</b> The card lies <b>flat against the hand's edge</b> — not deep in the palm. That flatness is what lets the hand open and move naturally.",
    beats: ["flat"],
    actions: [
      {t:'rot', id:'c', deg:10},
      {t:'move', id:'c', x:64, y:44},
      {t:'note', id:'b', text:'flat to the edge — not a classic palm', x:70, y:60},
      {t:'label', id:'k', text:'flat against the edge', x:50, y:88}
    ]},
  { caption: "<b>Open.</b> The hand opens and faces the audience: <b>empty from the front</b>. Angle-specific — rehearse your working angles before using it live.",
    beats: ["the open hand"],
    actions: [
      {t:'move', id:'c', x:58, y:46},
      {t:'hand', id:'rh', x:52, y:44, side:'right', on:true},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'empty — head-on', x:50, y:88}
    ]},
  { caption: "<b>Use.</b> Built for steals during spreads and <b>open-hand productions</b>: the card appears from a hand that was shown empty a moment ago.",
    climax: true,
    actions: [
      {t:'unpalm', id:'c'},
      {t:'move', id:'c', x:46, y:48},
      {t:'rot', id:'c', deg:0},
      {t:'scale', id:'c', s:1.08},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'produced from lateral palm', x:50, y:88}
    ]}
]};

ANIMS.t123 = { steps: [
  { caption: "Display. A face-up card in view — with <b>a second card hidden beneath it</b> (Exposed), squared so the two read as one.",
    beats: ["display"],
    actions: [
      {t:'card', id:'und', x:48, y:50, face:'up', w:14, ghost:true},
      {t:'card', id:'top', x:50, y:46, face:'up', w:14, z:3},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'face-up card in view', x:50, y:88}
    ]},
  { caption: "Wipe. A covering motion passes across — the face card is <b>slid away under cover</b>, and the card beneath is left in its place.",
    beats: ["downs change"],
    actions: [
      {t:'hand', id:'rh', x:52, y:44, side:'right', on:true},
      {t:'move', id:'top', x:64, y:58, z:1},
      {t:'palm', id:'top'},
      {t:'move', id:'und', x:50, y:46},
      {t:'reveal', id:'und'},
      {t:'label', id:'k', text:'the wipe', x:50, y:88}
    ]},
  { caption: "Reveal. The wipe clears and a <b>new face</b> registers. Smooth and direct — older than most color changes still in use; no snap required.",
    beats: ["reveal"], climax: true,
    actions: [
      {t:'hi', id:'und', on:true},
      {t:'label', id:'k', text:'new face', x:50, y:88}
    ]},
  { caption: "Clean. The stolen face card is ditched as the hand leaves. Nothing remains but the change.",
    beats: ["clean-up"],
    actions: [
      {t:'remove', id:'top'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'clean', x:50, y:88}
    ]}
]};

ANIMS.t124 = { steps: [
  { caption: "Face. A card lies face-up on the deck. In the right palm rides the <b>change card</b> (Exposed), ready before the hand ever moves.",
    beats: ["the face"],
    actions: [
      {t:'packet', id:'dk', x:50, y:57, w:13, cards:[{bulk:50}]},
      {t:'card', id:'fc', x:50, y:44, face:'up', w:13, z:3},
      {t:'card', id:'hd', x:68, y:36, face:'up', w:11},
      {t:'palm', id:'hd'},
      {t:'hand', id:'rh', x:73, y:30, side:'right', on:true},
      {t:'label', id:'k', text:'face card on the deck', x:50, y:88}
    ]},
  { caption: "Brush. The right hand sweeps across in one continuous stroke: the palmed card is <b>deposited</b> as the old face is <b>picked up under the palm</b>. Any pause mid-brush turns it into a move.",
    beats: ["paintbrush change"],
    actions: [
      {t:'hand', id:'rh', x:52, y:40, side:'right', on:true},
      {t:'move', id:'hd', x:50, y:44, z:4},
      {t:'unpalm', id:'hd'},
      {t:'palm', id:'fc'},
      {t:'move', id:'fc', x:68, y:36, z:4},
      {t:'label', id:'k', text:'the brush', x:50, y:88}
    ]},
  { caption: "The hand clears — and leaves <b>a different face</b> behind. A cousin of the Erdnase change with a softer stroke: texture, not flash.",
    beats: ["the deposit"], climax: true,
    actions: [
      {t:'hand', id:'rh', x:76, y:28, side:'right', on:true},
      {t:'remove', id:'fc'},
      {t:'hi', id:'hd', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'a different face left behind', x:50, y:88}
    ]}
]};

ANIMS.t125 = { steps: [
  { caption: "Setup. The face card is displayed. Beneath it, squared as one with it, waits the <b>second card</b> (Exposed) — ready before anything moves.",
    beats: ["setup"],
    actions: [
      {t:'packet', id:'dk', x:50, y:57, w:13, cards:[{bulk:50}]},
      {t:'card', id:'sc', x:48, y:46, face:'up', w:13, z:2, ghost:true},
      {t:'card', id:'fc', x:50, y:44, face:'up', w:13, z:3},
      {t:'hand', id:'rh', x:64, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'face card displayed', x:50, y:88}
    ]},
  { caption: "Wave. The right hand passes over in a <b>soft, continuous motion</b> — the face card is drawn away under the wave, and the second card is left as the new face.",
    beats: ["vernon change"],
    actions: [
      {t:'hand', id:'rh', x:50, y:38, side:'right', on:true},
      {t:'move', id:'fc', x:64, y:38, z:4},
      {t:'palm', id:'fc'},
      {t:'move', id:'sc', x:50, y:44},
      {t:'reveal', id:'sc'},
      {t:'label', id:'k', text:'the wave', x:50, y:88}
    ]},
  { caption: "Leave. The hand clears. The new face was <b>deposited, not placed</b> — there is no single moment to point at.",
    beats: ["the leave"],
    actions: [
      {t:'hand', id:'rh', x:74, y:30, side:'right', on:true},
      {t:'remove', id:'fc'},
      {t:'label', id:'k', text:'hand clears', x:50, y:88}
    ]},
  { caption: "<b>Hold.</b> No snap, no slap — let the change breathe. Vernon's point: it should feel like magic, not a skill demo.",
    beats: ["hold"], climax: true,
    actions: [
      {t:'hi', id:'sc', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'let it breathe', x:50, y:88}
    ]}
]};

ANIMS.t126 = { steps: [
  { caption: "<b>Break.</b> A break is held <b>above the selection</b> — the tracked card, with a small stock above it and the rest of the deck below. Two cuts will walk it to the top.",
    beats: ["the break"],
    actions: [
      {t:'packet', id:'low', x:50, y:60, w:13, cards:[{bulk:30}]},
      {t:'card', id:'sel', x:50, y:51, face:'down', w:11, z:4, ghost:true},
      {t:'packet', id:'mid', x:50, y:44, w:13, cards:[{bulk:11}]},
      {t:'packet', id:'top', x:50, y:37, w:13, cards:[{bulk:10}]},
      {t:'hand', id:'lh', x:36, y:56, side:'left', on:true},
      {t:'note', id:'b', text:'break just above the selection', x:74, y:48},
      {t:'label', id:'k', text:'break above the selection', x:50, y:88}
    ]},
  { caption: "<b>First cut.</b> The upper packet is cut <b>to the bottom</b>. Casual, unremarkable — and the break above the selection is still held in the cards that remain.",
    beats: ["Double Cut · first cut"],
    actions: [
      {t:'hand', id:'rh', x:62, y:32, side:'right', on:true},
      {t:'move', id:'top', x:50, y:68},
      {t:'move', id:'low', x:50, y:56},
      {t:'move', id:'sel', x:50, y:47},
      {t:'move', id:'mid', x:50, y:40},
      {t:'label', id:'k', text:'upper packet to the bottom', x:50, y:88}
    ]},
  { caption: "<b>Second cut.</b> Cut <b>at the break</b> — the remaining stock above the selection goes to the bottom too, and the selection arrives on top. Both cuts looked identical; that sameness is the disguise.",
    beats: ["Double Cut · second cut"],
    actions: [
      {t:'move', id:'mid', x:50, y:70},
      {t:'move', id:'low', x:50, y:52},
      {t:'move', id:'sel', x:50, y:43},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'cut at the break', x:50, y:88}
    ]},
  { caption: "<b>Square.</b> The deck squares with the <b>selection on top</b>. The most-used utility cut in card magic — it lives on casualness, so never announce a cut.",
    climax: true,
    actions: [
      {t:'remove', id:'low'},
      {t:'remove', id:'mid'},
      {t:'remove', id:'top'},
      {t:'packet', id:'deck', x:50, y:53, w:13, cards:[{bulk:51}]},
      {t:'move', id:'sel', x:50, y:42},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'selection on top', x:50, y:88}
    ]}
]};

ANIMS.t127 = { steps: [
  { caption: "The deck in the left hand, and the <b>top card</b> — tracked separately on top of the packet — is the card this cut pretends to lose. Watch it, not the cut.",
    beats: ["setup"],
    actions: [
      {t:'packet', id:'deck', x:50, y:55, w:13, cards:[{bulk:51}]},
      {t:'card', id:'topc', x:50, y:44, face:'down', w:11, z:4, ghost:true},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'the top card', x:50, y:88}
    ]},
  { caption: "<b>Hold back.</b> As the right hand takes the upper half, the <b>left thumb retains the top card</b> — it slips back onto the lower half instead of travelling with the cut. Soft thumb, natural rhythm: the hold-back must be invisible from the front.",
    beats: ["Slip Cut · hold back"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'lower', x:44, y:60, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'upper', x:58, y:38, w:13, cards:[{bulk:25}]},
      {t:'move', id:'topc', x:44, y:49},
      {t:'hand', id:'rh', x:68, y:32, side:'right', on:true},
      {t:'note', id:'b', text:'top card slipped onto the lower half (Exposed)', x:50, y:78},
      {t:'label', id:'k', text:'held back by the thumb', x:50, y:88}
    ]},
  { caption: "<b>Cut.</b> The upper half completes its travel and goes <b>under</b> the lower half — a real cut, of every card except the one that matters.",
    beats: ["the cut"],
    actions: [
      {t:'move', id:'upper', x:44, y:70},
      {t:'move', id:'lower', x:46, y:56},
      {t:'move', id:'topc', x:46, y:45},
      {t:'label', id:'k', text:'upper half underneath', x:50, y:88}
    ]},
  { caption: "<b>Complete.</b> Reassemble and square: the <b>original top card is still on top</b> — or controlled to wherever the handling needs it.",
    beats: ["complete"],
    actions: [
      {t:'remove', id:'upper'},
      {t:'remove', id:'lower'},
      {t:'packet', id:'deck', x:50, y:55, w:13, cards:[{bulk:51}]},
      {t:'move', id:'topc', x:50, y:44},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'still on top', x:50, y:88}
    ]},
  { caption: "<b>Use.</b> Forces, false cuts, and stock retention all live here: a cut the audience saw happen, that <b>changed nothing on top</b>.",
    climax: true,
    actions: [
      {t:'scale', id:'topc', s:1.06},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'cut — and never moved', x:50, y:88}
    ]}
]};

ANIMS.t128 = { steps: [
  { caption: "<b>Grip.</b> The deck in one hand, in a <b>Charlier-style grip</b>. The bottom card — tracked separately underneath — is the stock this flashy cut will secretly protect.",
    beats: ["the grip"],
    actions: [
      {t:'packet', id:'deck', x:48, y:49, w:13, cards:[{bulk:51}]},
      {t:'card', id:'bot', x:48, y:60, face:'down', w:11, z:2, ghost:true},
      {t:'hand', id:'lh', x:35, y:54, side:'left', on:true, grip:'Charlier grip'},
      {t:'label', id:'k', text:'bottom card tracked', x:50, y:88}
    ]},
  { caption: "<b>Revolve.</b> The halves cut in the one-handed Charlier action — while the <b>bottom card is held back</b> by the thumb or fingers, out of the revolve entirely.",
    beats: ["HaLo Cut · hold back"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'ha', x:36, y:44, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'hb', x:62, y:44, w:13, cards:[{bulk:25}]},
      {t:'rot', id:'ha', deg:-12},
      {t:'rot', id:'hb', deg:12},
      {t:'move', id:'bot', x:26, y:64},
      {t:'note', id:'b', text:'bottom card held back (Exposed)', x:28, y:80},
      {t:'label', id:'k', text:'halves revolve · bottom card stays', x:50, y:88}
    ]},
  { caption: "<b>Land.</b> The halves land and square — and the held-back card <b>returns to the bottom</b>, exactly where it started.",
    beats: ["land"],
    actions: [
      {t:'remove', id:'ha'},
      {t:'remove', id:'hb'},
      {t:'packet', id:'deck', x:48, y:49, w:13, cards:[{bulk:51}]},
      {t:'move', id:'bot', x:48, y:60},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'back on the bottom', x:50, y:88}
    ]},
  { caption: "<b>Use.</b> Bottom-stock preservation during a flashy cut: the cut was real, the flourish was real — and the <b>bottom card never moved</b>. Named for Harry Lorayne; learn a clean Charlier first.",
    climax: true,
    actions: [
      {t:'hand', id:'lh', x:35, y:54, side:'left', on:true, grip:''},
      {t:'label', id:'k', text:'HaLo cut — bottom intact', x:50, y:88}
    ]}
]};

ANIMS.t129 = { steps: [
  { caption: "Up-the-Ladder Cut — a flourishy <b>false cut</b>. Exposed view marks the deck's original top card and bottom card (the two ghosts): watch where they end up while packets strip into a ladder.",
    beats: ["strip"],
    actions: [
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:50}]},
      {t:'card', id:'top', x:50, y:44, face:'down', w:11, z:5, ghost:true},
      {t:'card', id:'bot', x:50, y:60, face:'down', w:11, z:5, ghost:true},
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'markers on the end cards (Exposed)', x:50, y:88}
    ]},
  { caption: "Strip. Small packets come off into the left hand one after another, each landing stepped a little lower than the last — a <b>ladder</b> of packets building in the hand.",
    beats: ["ladder of packets"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'p1', x:34, y:38, w:12, cards:[{bulk:12}]},
      {t:'packet', id:'p2', x:42, y:46, w:12, cards:[{bulk:12}]},
      {t:'packet', id:'p3', x:50, y:54, w:12, cards:[{bulk:13}]},
      {t:'packet', id:'p4', x:58, y:62, w:12, cards:[{bulk:13}]},
      {t:'move', id:'top', x:34, y:30},
      {t:'move', id:'bot', x:58, y:70},
      {t:'hand', id:'lh', x:26, y:50, side:'left', on:true},
      {t:'label', id:'k', text:'ladder built — three to five packets', x:50, y:88}
    ]},
  { caption: "Build. Hold the ladder a moment — <b>even packet sizes and a steady tempo</b> are what make what comes next invisible. Nothing has been mixed; the packets are simply displayed in the order they were stripped.",
    beats: ["build"],
    actions: [
      {t:'move', id:'p1', x:36, y:40},
      {t:'move', id:'top', x:36, y:32},
      {t:'move', id:'p4', x:60, y:60},
      {t:'move', id:'bot', x:60, y:68},
      {t:'label', id:'k', text:'the ladder, displayed', x:50, y:88}
    ]},
  { caption: "Reverse. Square the packets back together <b>in reverse order</b> — last stripped, first restored — so every packet lands exactly where it started.",
    beats: ["reverse"],
    actions: [
      {t:'remove', id:'p1'},
      {t:'remove', id:'p2'},
      {t:'remove', id:'p3'},
      {t:'remove', id:'p4'},
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:50}]},
      {t:'move', id:'top', x:50, y:44},
      {t:'move', id:'bot', x:50, y:60},
      {t:'label', id:'k', text:'squared back in reverse order', x:50, y:88}
    ]},
  { caption: "Squared — and the markers deliver the verdict: top card still on top, bottom card still on the bottom. <b>Looks mixed; order unchanged.</b> A full-deck false cut wearing a flourish's clothes.",
    climax: true,
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'up-the-ladder — order intact', x:50, y:88}
    ]}
]};

ANIMS.t130 = { steps: [
  { caption: "A flashy spinning cut — a packet revolves end-for-end as it is cut. The <b>A♣ rides on top</b> of the deck, named in Exposed view.",
    beats: ["spin the packet"],
    actions: [
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{rank:'2', suit:'♦', face:'down'},{bulk:50},{rank:'A', suit:'♣', face:'down'}]},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'A♣ on top', x:50, y:88}
    ]},
  { caption: "Right hand takes a packet from the top.",
    beats: ["the cut"],
    actions: [
      {t:'remove', id:'stk'},
      {t:'packet', id:'spn', x:50, y:33, w:13, cards:[{bulk:25},{rank:'A', suit:'♣', face:'down'}]},
      {t:'packet', id:'base', x:50, y:58, w:13, cards:[{rank:'2', suit:'♦', face:'down'},{bulk:25}]},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'packet taken', x:50, y:88}
    ]},
  { caption: "The packet <b>revolves 180°</b> — or a full 360° — in the air or on the fingers. Smooth rotation beats a wild toss.",
    beats: ["the revolution"],
    actions: [
      {t:'rot', id:'spn', deg:180},
      {t:'move', id:'spn', x:57, y:30},
      {t:'label', id:'k', text:'the packet revolves', x:50, y:88}
    ]},
  { caption: "It lands and completes the cut — a true cut here: <b>the A♣ ends up buried in the middle</b>. Style first; control optional. Practice the spin without the deck first.",
    climax: true,
    actions: [
      {t:'remove', id:'spn'},
      {t:'remove', id:'base'},
      {t:'packet', id:'done', x:50, y:50, w:14, cards:[{bulk:25},{rank:'A', suit:'♣', face:'down'},{rank:'2', suit:'♦', face:'down'},{bulk:25}]},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'cut complete — A♣ in the middle', x:50, y:88}
    ]}
]};

ANIMS.t131 = { steps: [
  { caption: "One card in the right hand, shown plainly. The back palm will hide it <b>behind the hand itself</b> — no palm, no pocket, just the fingers.",
    beats: ["setup"],
    actions: [
      {t:'card', id:'c', x:48, y:50, face:'down', w:12},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'the card', x:50, y:88}
    ]},
  { caption: "<b>Pivot.</b> The card <b>swings behind the hand</b> — a quick pivot on the fingers, timed with a turn of the wrist.",
    beats: ["Back Palm · the pivot"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'palm', id:'c'},
      {t:'move', id:'c', x:62, y:40, z:1},
      {t:'rot', id:'c', deg:28},
      {t:'scale', id:'c', s:0.85},
      {t:'label', id:'k', text:'behind the hand', x:50, y:88}
    ]},
  { caption: "<b>Clip.</b> Behind the hand, the card is <b>held between the fingers at the back</b> — clipped, flat, and following the hand wherever it goes.",
    beats: ["the clip"],
    actions: [
      {t:'rot', id:'c', deg:12},
      {t:'move', id:'c', x:63, y:42},
      {t:'note', id:'b', text:'clipped between the fingers (Exposed)', x:72, y:58},
      {t:'label', id:'k', text:'clipped at the back', x:50, y:88}
    ]},
  { caption: "<b>Show.</b> The palm faces out — <b>empty</b>. Classic continuous front-and-back vanish material, and angles are everything.",
    beats: ["show empty"],
    actions: [
      {t:'hand', id:'rh', x:52, y:44, side:'right', on:true},
      {t:'move', id:'c', x:57, y:44},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'palm empty · card behind', x:50, y:88}
    ]},
  { caption: "<b>Produce.</b> Reverse the pivot — or transfer — and the card is simply <b>back</b>, from a hand that was shown empty.",
    climax: true,
    actions: [
      {t:'unpalm', id:'c'},
      {t:'move', id:'c', x:48, y:48},
      {t:'rot', id:'c', deg:0},
      {t:'scale', id:'c', s:1.08},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'produced from back palm', x:50, y:88}
    ]}
]};

ANIMS.t132 = { steps: [
  { caption: "<b>Palm.</b> The card starts <b>palmed in the left hand</b> — invisible in Audience view, ghosted here in Exposed. The right hand is empty, and about to receive it.",
    beats: ["palm"],
    actions: [
      {t:'card', id:'c', x:33, y:52, face:'down', w:11, ghost:true},
      {t:'palm', id:'c'},
      {t:'hand', id:'lh', x:32, y:56, side:'left', on:true},
      {t:'hand', id:'rh', x:68, y:52, side:'right', on:true},
      {t:'label', id:'k', text:'palmed in the left (Exposed)', x:50, y:88}
    ]},
  { caption: "<b>Meet.</b> The hands come together — a gesture, a clap, a square-up. The meet must look <b>motivated</b>: a meaningless hand-touch is suspicious.",
    beats: ["the meet"],
    actions: [
      {t:'move', id:'c', x:47, y:50},
      {t:'hand', id:'lh', x:44, y:52, side:'left', on:true},
      {t:'hand', id:'rh', x:56, y:52, side:'right', on:true},
      {t:'label', id:'k', text:'hands meet', x:50, y:88}
    ]},
  { caption: "<b>Transfer.</b> In that moment of contact, the card <b>changes hands</b> — it leaves the left palm and settles into the right, still palmed, still invisible.",
    beats: ["Palm-to-Palm Transfer"],
    actions: [
      {t:'move', id:'c', x:54, y:50},
      {t:'note', id:'b', text:'now in the right palm (Exposed)', x:66, y:66},
      {t:'label', id:'k', text:'the transfer', x:50, y:88}
    ]},
  { caption: "<b>Separate.</b> The hands part: the left is clean, and the <b>right hand now holds the palm</b> — ready for a delayed production the audience will never connect to the meet.",
    climax: true,
    actions: [
      {t:'move', id:'c', x:67, y:50},
      {t:'hand', id:'lh', x:30, y:56, side:'left', on:true},
      {t:'hand', id:'rh', x:70, y:52, side:'right', on:true},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'now in the right palm', x:50, y:88}
    ]}
]};

ANIMS.t133 = { steps: [
  { caption: "Braue Add-On — a packet is <b>displayed</b>: three cards, shown and counted fairly. The right hand, resting naturally, already holds <b>two more</b> — Exposed view can see them ghosted in the hand; the audience sees nothing.",
    beats: ["display"],
    actions: [
      {t:'spread', x:28, y:50, count:3, dx:13, w:11, face:'down', prefix:'d'},
      {t:'card', id:'add1', x:76, y:34, face:'down', w:10, ghost:true},
      {t:'card', id:'add2', x:76, y:42, face:'down', w:10, ghost:true},
      {t:'hand', id:'rh', x:83, y:30, side:'right', on:true},
      {t:'label', id:'k', text:'three shown · two waiting (Exposed)', x:50, y:88}
    ]},
  { caption: "Load. Under cover of the display — as the right hand gathers the packet to continue — the two extras are <b>loaded underneath</b> it. The display is the cover; never rush the moment the extras are added.",
    beats: ["the load"],
    actions: [
      {t:'remove', id:'d0'},
      {t:'remove', id:'d1'},
      {t:'remove', id:'d2'},
      {t:'remove', id:'add1'},
      {t:'remove', id:'add2'},
      {t:'packet', id:'pkt', x:44, y:50, w:13, cards:[{bulk:5}]},
      {t:'hand', id:'rh', x:54, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'added under cover', x:50, y:88}
    ]},
  { caption: "Continue. Count the packet out: <b>five cards</b> — heavier than anyone believes. This quiet addition is the foundation under a hundred packet tricks and ace assemblies.",
    climax: true,
    actions: [
      {t:'remove', id:'pkt'},
      {t:'spread', x:24, y:52, count:5, dx:13, w:11, face:'down', prefix:'c'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'Braue add-on complete', x:50, y:88}
    ]}
]};

ANIMS.t134 = { steps: [
  { caption: "The deck's face card is in view — and the card <b>directly beneath it</b> is the one that will remain. The right hand is about to steal the face card away.",
    beats: ["the face"],
    actions: [
      {t:'packet', id:'dk', x:50, y:57, w:13, cards:[{bulk:50}]},
      {t:'card', id:'bf', x:48, y:46, face:'up', w:13, z:2},
      {t:'card', id:'fc', x:50, y:44, face:'up', w:13, z:3},
      {t:'hand', id:'rh', x:64, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'face card will change', x:50, y:88}
    ]},
  { caption: "Cover. The right hand passes over the face card, briefly. <b>The cover is the whole secret</b> — the steal happens inside it.",
    beats: ["cover"],
    actions: [
      {t:'hand', id:'rh', x:52, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'hand covers — briefly', x:50, y:88}
    ]},
  { caption: "Steal. Under cover, the face card is <b>side-stolen</b> into the hand. The card beneath becomes the new face — it was never touched.",
    beats: ["side steal"],
    actions: [
      {t:'move', id:'fc', x:70, y:42, z:4},
      {t:'palm', id:'fc'},
      {t:'hand', id:'rh', x:73, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'side-stolen', x:50, y:88}
    ]},
  { caption: "Clear. The hand moves away and the <b>change registers</b>: a new face, arrived at by subtraction. Built on the side steal — if the steal is invisible, the change is free.",
    beats: ["clear"], climax: true,
    actions: [
      {t:'remove', id:'fc'},
      {t:'hi', id:'bf', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'change registered', x:50, y:88}
    ]}
]};

ANIMS.t135 = { steps: [
  { caption: "Snap Deal — a sharp, audible deal. The top of the deck is declared in Exposed view: <b>A♠ on top, 7♣ second, K♦ third</b>. The fair take comes first: the A♠ leaves the deck with a snap of the fingers.",
    beats: ["the snap"],
    actions: [
      {t:"packet", id:"stk", x:42, y:50, w:13, cards:[{bulk:49}, {rank:"K", suit:"♦", face:"down"}, {rank:"7", suit:"♣", face:"down"}, {rank:"A", suit:"♠", face:"down"}]},
      {t:"hand", id:"lh", x:32, y:55, side:"left", on:true},
      {t:"hand", id:"rh", x:58, y:48, side:"right", on:true},
      {t:"repacket", id:"stk", cards:[{bulk:49}, {rank:"K", suit:"♦", face:"down"}, {rank:"7", suit:"♣", face:"down"}]},
      {t:"card", id:"dealt", rank:"A", suit:"♠", x:70, y:50, face:"down", w:11, secret:{rank:"A", suit:"♠"}},
      {t:"label", id:"k", text:"deal with a snap", x:50, y:88} ] },
  { caption: "The <b>sound</b> draws attention — and can mask a false take. Keep the snap volume consistent whether the deal is fair or false; never change the sound.",
    beats: ["sound as cover"],
    actions: [
      {t:"hi", id:"dealt", on:true},
      {t:"note", id:"b", text:"snap! — same volume, fair or false", x:50, y:24},
      {t:"label", id:"k", text:"snap covers the take", x:50, y:88} ] },
  { caption: "Fair use: turn it over — the A♠, the genuine top card. Professional, intentional dealing texture; <b>what you see is what left the deck</b>.",
    beats: ["fair use"],
    actions: [
      {t:"unnote", id:"b"},
      {t:"hi", id:"dealt", on:false},
      {t:"flip", id:"dealt", to:"up"},
      {t:"label", id:"k", text:"fair: the top card really dealt", x:50, y:88} ] },
  { caption: "False use — same snap, but this is a <b>second deal</b>: the card that leaves is the K♦ from second place, while the 7♣ stays on top of the deck, exactly where Exposed view shows it. The audience swears they saw the top card dealt.",
    beats: ["second deal"],
    climax: true,
    actions: [
      {t:"repacket", id:"stk", cards:[{bulk:49}, {rank:"7", suit:"♣", face:"down"}]},
      {t:"card", id:"dealt2", rank:"K", suit:"♦", x:70, y:68, face:"down", w:11, secret:{rank:"K", suit:"♦"}},
      {t:"flip", id:"dealt2", to:"up"},
      {t:"hi", id:"dealt2", on:true},
      {t:"label", id:"k", text:"dealt: K♦ · the 7♣ never left the top", x:50, y:88} ] }
] };

ANIMS.t136 = { steps: [
  { caption: "A cut that looks genuine because packet edges mislead the eye. The <b>Q♥ rides on top</b>, named in Exposed view; the 6♣ is on the bottom.",
    beats: ["the setup"],
    actions: [
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{rank:'6', suit:'♣', face:'down'},{bulk:50},{rank:'Q', suit:'♥', face:'down'}]},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'Q♥ on top', x:50, y:88}
    ]},
  { caption: "Packets are placed so the <b>visible edges suggest a real cut</b>. The audience's eye follows the wrong packet.",
    beats: ["optical layout"],
    actions: [
      {t:'remove', id:'stk'},
      {t:'packet', id:'pa', x:33, y:43, w:12, cards:[{bulk:16},{rank:'Q', suit:'♥', face:'down'}]},
      {t:'packet', id:'pb', x:52, y:52, w:12, cards:[{bulk:17}]},
      {t:'packet', id:'pc', x:65, y:41, w:12, cards:[{rank:'6', suit:'♣', face:'down'},{bulk:17}]},
      {t:'label', id:'k', text:'edges suggest a real cut', x:50, y:88}
    ]},
  { caption: "Reassemble — quietly picking the packets up in the order that <b>restores the original sequence</b>. The optical sell is in the edge alignment.",
    beats: ["reassemble"],
    actions: [
      {t:'move', id:'pc', x:50, y:58},
      {t:'move', id:'pb', x:50, y:49},
      {t:'move', id:'pa', x:50, y:40},
      {t:'label', id:'k', text:'gathered in restoring order', x:50, y:88}
    ]},
  { caption: "Believed cut; order intact. <b>The Q♥ never left the top.</b> Study it in a mirror, from the audience view.",
    climax: true,
    actions: [
      {t:'remove', id:'pa'},
      {t:'remove', id:'pb'},
      {t:'remove', id:'pc'},
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{rank:'6', suit:'♣', face:'down'},{bulk:50},{rank:'Q', suit:'♥', face:'down'}]},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'Q♥ on top — order intact', x:50, y:88}
    ]}
]};

ANIMS.t137 = { steps: [
  { caption: "A pass hidden inside a riffle. The break is held between the halves; the J♦, named in Exposed view, sits on the lower half.",
    beats: ["break held"],
    actions: [
      {t:'packet', id:'up', x:50, y:40, w:13, cards:[{bulk:25},{rank:'8', suit:'♠', face:'down'}]},
      {t:'card', id:'sel', rank:'J', suit:'♦', x:50, y:49, face:'down', w:11, secret:{rank:'J', suit:'♦'}},
      {t:'packet', id:'lo', x:50, y:57, w:13, cards:[{bulk:25}]},
      {t:'hand', id:'lh', x:38, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'note', id:'b', text:'break held', x:70, y:60},
      {t:'label', id:'k', text:'riffle will cover the pass', x:50, y:88}
    ]},
  { caption: "The right thumb riffles down the outer edge, as if searching for a card. <b>Sound and motion are the cover.</b>",
    beats: ["the riffle"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'up', x:50, y:36},
      {t:'move', id:'lo', x:50, y:60},
      {t:'move', id:'sel', x:50, y:53},
      {t:'note', id:'b', text:'right thumb riffles the outer edge', x:50, y:24},
      {t:'label', id:'k', text:'riffling — like a search', x:50, y:88}
    ]},
  { caption: "As the riffle runs, the halves transpose beneath it. The riffle must look motivated — <b>searching for a card is a perfect reason</b>.",
    beats: ["pass under the riffle"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'lo', x:50, y:40},
      {t:'move', id:'sel', x:50, y:32},
      {t:'move', id:'up', x:50, y:57},
      {t:'label', id:'k', text:'halves passed during the riffle', x:50, y:88}
    ]},
  { caption: "Square up. It looked like a search or a flourish; <b>the J♦ is on top</b>.",
    climax: true,
    actions: [
      {t:'remove', id:'lo'},
      {t:'remove', id:'up'},
      {t:'packet', id:'done', x:50, y:51, w:14, cards:[{bulk:51}]},
      {t:'move', id:'sel', x:50, y:44},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'J♦ on top', x:50, y:88}
    ]}
]};

ANIMS.t138 = { steps: [
  { caption: "The deck sits on — or just above — the table. The 3♥, named in Exposed view, waits on the lower half; the table edge gives natural cover.",
    beats: ["at the table"],
    actions: [
      {t:'packet', id:'up', x:50, y:48, w:13, cards:[{bulk:25},{rank:'Q', suit:'♠', face:'down'}]},
      {t:'card', id:'sel', rank:'3', suit:'♥', x:50, y:56, face:'down', w:11, secret:{rank:'3', suit:'♥'}},
      {t:'packet', id:'lo', x:50, y:63, w:13, cards:[{bulk:25}]},
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:60, y:50, side:'right', on:true},
      {t:'label', id:'k', text:'deck near the table edge', x:50, y:88}
    ]},
  { caption: "Both hands square the deck against the table edge or mat. <b>Don't pass without a reason to square</b> — this is the reason.",
    beats: ["the square"],
    actions: [
      {t:'hand', id:'lh', x:43, y:57, side:'left', on:true},
      {t:'hand', id:'rh', x:57, y:53, side:'right', on:true},
      {t:'note', id:'b', text:'squaring against the table', x:50, y:28},
      {t:'label', id:'k', text:'hands square the deck', x:50, y:88}
    ]},
  { caption: "In that squaring action, the halves transpose. Nothing leaves the table; <b>nothing looks like a move</b>.",
    beats: ["pass at the table"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'lo', x:50, y:48},
      {t:'move', id:'sel', x:50, y:40},
      {t:'move', id:'up', x:50, y:63},
      {t:'label', id:'k', text:'halves transposed in the squaring', x:50, y:88}
    ]},
  { caption: "The deck rests, squared and fair. <b>The 3♥ is on top</b>, and the pass happened inside an action nobody questions.",
    climax: true,
    actions: [
      {t:'remove', id:'lo'},
      {t:'remove', id:'up'},
      {t:'packet', id:'done', x:50, y:57, w:14, cards:[{bulk:51}]},
      {t:'move', id:'sel', x:50, y:50},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'squared and fair · 3♥ on top', x:50, y:88}
    ]}
]};

ANIMS.t139 = { steps: [
  { caption: "The swing-cut action you already know — executed so the original top stock returns to the top. Markers in Exposed view: <b>A♠ on top, K♦ underneath</b>.",
    beats: ["swing · restore"],
    actions: [
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{rank:'K', suit:'♦', face:'down'},{bulk:50},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'A♠ on top · K♦ on the bottom', x:50, y:88}
    ]},
  { caption: "Left hand takes the top half in a swing — <b>the exact body language of your real swing cut</b>.",
    beats: ["the swing"],
    actions: [
      {t:'remove', id:'stk'},
      {t:'packet', id:'up', x:36, y:42, w:13, cards:[{bulk:25},{rank:'A', suit:'♠', face:'down'}]},
      {t:'packet', id:'lo', x:58, y:55, w:13, cards:[{rank:'K', suit:'♦', face:'down'},{bulk:25}]},
      {t:'hand', id:'lh', x:30, y:48, side:'left', on:true},
      {t:'label', id:'k', text:'left hand takes the top half', x:50, y:88}
    ]},
  { caption: "Instead of completing honestly, a strip or hop restores the original top as the packets meet: <b>the left-hand packet ends back on top</b>. Same swing, same tempo — different ending.",
    beats: ["swing · strip back"],
    actions: [
      {t:'move', id:'lo', x:50, y:57},
      {t:'move', id:'up', x:50, y:43},
      {t:'label', id:'k', text:'the top half lands back on top', x:50, y:88}
    ]},
  { caption: "Squared. It looked like a casual swing cut; <b>the order never changed</b>. Match the body language of your real swing cut exactly — the rhythm is the cover.",
    climax: true,
    actions: [
      {t:'remove', id:'up'},
      {t:'remove', id:'lo'},
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{rank:'K', suit:'♦', face:'down'},{bulk:50},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'squared — A♠ still on top', x:50, y:88}
    ]}
]};

ANIMS.t140 = { steps: [
  { caption: "Flip-Flop Cut — split the deck into <b>thirds</b>, in the hands. Exposed view marks the original top and bottom cards: in a cut that can preserve full order, those two cards are the audit.",
    beats: ["split"],
    actions: [
      {t:'packet', id:'a', x:30, y:48, w:12, cards:[{bulk:17}]},
      {t:'packet', id:'b', x:50, y:44, w:12, cards:[{bulk:17}]},
      {t:'packet', id:'c', x:70, y:48, w:12, cards:[{bulk:16}]},
      {t:'card', id:'top', x:30, y:40, face:'down', w:10, z:5, ghost:true},
      {t:'card', id:'bot', x:70, y:56, face:'down', w:10, z:5, ghost:true},
      {t:'hand', id:'lh', x:24, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:76, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'thirds — end cards marked (Exposed)', x:50, y:88}
    ]},
  { caption: "Flip-flop. The packets <b>flip end-for-end and trade hands</b> in a quick rhythm — theatre first. The marked cards ride their packets, ends swapped (Exposed view follows them).",
    beats: ["flip-flop"],
    actions: [
      {t:'move', id:'a', x:70, y:48},
      {t:'rot', id:'a', deg:180},
      {t:'move', id:'top', x:70, y:56},
      {t:'move', id:'c', x:30, y:48},
      {t:'rot', id:'c', deg:180},
      {t:'move', id:'bot', x:30, y:40},
      {t:'rot', id:'b', deg:180},
      {t:'label', id:'k', text:'flip-flop in progress', x:50, y:88}
    ]},
  { caption: "And flop back — chaos is the cover, and <b>rhythm sells the chaos</b>. Uneven timing looks like fumbling; this should look like weather.",
    beats: ["flop back"],
    actions: [
      {t:'move', id:'a', x:30, y:48},
      {t:'rot', id:'a', deg:0},
      {t:'move', id:'top', x:30, y:40},
      {t:'move', id:'c', x:70, y:48},
      {t:'rot', id:'c', deg:0},
      {t:'move', id:'bot', x:70, y:56},
      {t:'rot', id:'b', deg:0},
      {t:'label', id:'k', text:'the sequence reverses itself', x:50, y:88}
    ]},
  { caption: "Square. <b>Fully restored</b> — the marked top and bottom cards are home (Exposed). It could have been genuinely mixed instead; the audience can't tell which you chose, and that uncertainty is the sell.",
    climax: true,
    actions: [
      {t:'remove', id:'a'},
      {t:'remove', id:'b'},
      {t:'remove', id:'c'},
      {t:'packet', id:'deck', x:50, y:50, w:13, cards:[{bulk:50}]},
      {t:'move', id:'top', x:50, y:42},
      {t:'move', id:'bot', x:50, y:58},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'flip-flop cut complete — order restored', x:50, y:88}
    ]}
]};

ANIMS.t141 = { steps: [
  { caption: "Display. <b>Four aces, face up</b> — the article's usual case. Clean displays before the switch matter most: everything after depends on these being believed.",
    beats: ["the display"],
    actions: [
      {t:'spread', x:16, y:34, count:4, dx:13, w:11, face:'up', prefix:'a', cards:[{id:'a0', rank:'A', suit:'♠'},{id:'a1', rank:'A', suit:'♥'},{id:'a2', rank:'A', suit:'♦'},{id:'a3', rank:'A', suit:'♣'}]},
      {t:'packet', id:'dk', x:50, y:64, w:13, cards:[{bulk:48}]},
      {t:'hand', id:'rh', x:66, y:44, side:'right', on:true},
      {t:'label', id:'k', text:'four aces — face up', x:50, y:88}
    ]},
  { caption: "The deck is spread and each ace is <b>counted into it at its own place</b> — a natural, motivated action. The switch lives inside this: watch where the aces actually end up (Exposed).",
    beats: ["spread count"],
    actions: [
      {t:'remove', id:'dk'},
      {t:'spread', x:8, y:62, count:48, dx:1.85, w:7, face:'down', prefix:'ds'},
      {t:'move', id:'a0', x:22, y:56, z:5},
      {t:'move', id:'a1', x:42, y:56, z:5},
      {t:'move', id:'a2', x:62, y:56, z:5},
      {t:'move', id:'a3', x:82, y:56, z:5},
      {t:'label', id:'k', text:'aces into the spread', x:50, y:88}
    ]},
  { caption: "Switch. The spread is gathered and squared — and inside that motion the aces are <b>switched</b>: not isolated at four depths, but loaded together inside the deck (Exposed).",
    beats: ["atfus switch"],
    actions: [
      {t:'remove', id:'ds0'},
      {t:'remove', id:'ds1'},
      {t:'remove', id:'ds2'},
      {t:'remove', id:'ds3'},
      {t:'remove', id:'ds4'},
      {t:'remove', id:'ds5'},
      {t:'remove', id:'ds6'},
      {t:'remove', id:'ds7'},
      {t:'remove', id:'ds8'},
      {t:'remove', id:'ds9'},
      {t:'remove', id:'ds10'},
      {t:'remove', id:'ds11'},
      {t:'remove', id:'ds12'},
      {t:'remove', id:'ds13'},
      {t:'remove', id:'ds14'},
      {t:'remove', id:'ds15'},
      {t:'remove', id:'ds16'},
      {t:'remove', id:'ds17'},
      {t:'remove', id:'ds18'},
      {t:'remove', id:'ds19'},
      {t:'remove', id:'ds20'},
      {t:'remove', id:'ds21'},
      {t:'remove', id:'ds22'},
      {t:'remove', id:'ds23'},
      {t:'remove', id:'ds24'},
      {t:'remove', id:'ds25'},
      {t:'remove', id:'ds26'},
      {t:'remove', id:'ds27'},
      {t:'remove', id:'ds28'},
      {t:'remove', id:'ds29'},
      {t:'remove', id:'ds30'},
      {t:'remove', id:'ds31'},
      {t:'remove', id:'ds32'},
      {t:'remove', id:'ds33'},
      {t:'remove', id:'ds34'},
      {t:'remove', id:'ds35'},
      {t:'remove', id:'ds36'},
      {t:'remove', id:'ds37'},
      {t:'remove', id:'ds38'},
      {t:'remove', id:'ds39'},
      {t:'remove', id:'ds40'},
      {t:'remove', id:'ds41'},
      {t:'remove', id:'ds42'},
      {t:'remove', id:'ds43'},
      {t:'remove', id:'ds44'},
      {t:'remove', id:'ds45'},
      {t:'remove', id:'ds46'},
      {t:'remove', id:'ds47'},
      {t:'remove', id:'a0'},
      {t:'remove', id:'a1'},
      {t:'remove', id:'a2'},
      {t:'remove', id:'a3'},
      {t:'packet', id:'dk', x:50, y:54, w:13, cards:[{bulk:48},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', x:60, y:44, side:'right', on:true},
      {t:'label', id:'k', text:'squared — switched', x:50, y:88}
    ]},
  { caption: "Result. The audience swears the aces are <b>isolated inside the deck</b>. They are together — loaded on top, wherever you need them. That is why ATFUS is the core move of the modern ace assembly.",
    beats: ["the result"], climax: true,
    actions: [
      {t:'repacket', id:'dk', cards:[{bulk:48}]},
      {t:'card', id:'g0', rank:'A', suit:'♠', x:36, y:32, face:'down', w:10, z:4, secret:{rank:'A', suit:'♠'}},
      {t:'card', id:'g1', rank:'A', suit:'♥', x:45, y:32, face:'down', w:10, z:4, secret:{rank:'A', suit:'♥'}},
      {t:'card', id:'g2', rank:'A', suit:'♦', x:54, y:32, face:'down', w:10, z:4, secret:{rank:'A', suit:'♦'}},
      {t:'card', id:'g3', rank:'A', suit:'♣', x:63, y:32, face:'down', w:10, z:4, secret:{rank:'A', suit:'♣'}},
      {t:'flip', id:'g0', to:'up'},
      {t:'hi', id:'g0', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'together — not isolated', x:50, y:88}
    ]}
]};

ANIMS.t142 = { steps: [
  { caption: "Block Push-Off — push two or more cards as a squared block for doubles, triples, and false counts. Prepare: the left thumb lines up a squared block on top — in Exposed view the packet declares it honestly: <b>K♦ under the A♠, two cards</b>.",
    beats: ["squared block"],
    actions: [
      {t:"packet", id:"stk", x:50, y:55, w:13, cards:[{bulk:50}, {rank:"K", suit:"♦", face:"down"}, {rank:"A", suit:"♠", face:"down"}]},
      {t:"hand", id:"lh", x:38, y:58, side:"left", on:true},
      {t:"note", id:"b", text:"thumb prepares a block", x:70, y:50},
      {t:"label", id:"k", text:"block ready: two cards", x:50, y:88} ] },
  { caption: "Push: the block <b>slides off the top as a unit</b> — both cards travel together, edges flush, nothing separates.",
    beats: ["push-off"],
    actions: [
      {t:"unnote", id:"b"},
      {t:"remove", id:"stk"},
      {t:"packet", id:"rest", x:50, y:58, w:13, cards:[{bulk:50}]},
      {t:"packet", id:"blk", x:50, y:40, w:13, cards:[{rank:"K", suit:"♦", face:"down"}, {rank:"A", suit:"♠", face:"down"}]},
      {t:"label", id:"k", text:"block pushed as a unit", x:50, y:88} ] },
  { caption: "Take: the right hand takes the block <b>as if it were a single card</b> — one smooth take, no fumbling, no re-grip.",
    beats: ["take as one"],
    actions: [
      {t:"hand", id:"rh", x:60, y:42, side:"right", on:true},
      {t:"move", id:"blk", x:56, y:38},
      {t:"label", id:"k", text:"block taken as one", x:50, y:88} ] },
  { caption: "Edges: they <b>must stay flush — any split is a tell</b>. Only in Exposed view do the two cards separate: it was the A♠ and the K♦ all along. Drill until a double push-off feels identical to a single; then add triples.",
    beats: ["flush edges"],
    climax: true,
    actions: [
      {t:"remove", id:"blk"},
      {t:"card", id:"b1", rank:"A", suit:"♠", x:44, y:40, face:"down", w:11, secret:{rank:"A", suit:"♠"}},
      {t:"card", id:"b2", rank:"K", suit:"♦", x:58, y:40, face:"down", w:11, secret:{rank:"K", suit:"♦"}},
      {t:"flip", id:"b1", to:"up"},
      {t:"flip", id:"b2", to:"up"},
      {t:"hi", id:"b1", on:true},
      {t:"hi", id:"b2", on:true},
      {t:"label", id:"k", text:"two cards · edges flush the whole way", x:50, y:88} ] }
] };

ANIMS.t143 = { steps: [
  { caption: "Square. The deck is <b>momentarily squared</b> — flush, no push-off, no preparation. Under the top card sits the second (Exposed).",
    beats: ["squared deck"],
    actions: [
      {t:'packet', id:'dk', x:42, y:54, w:13, cards:[{bulk:50}]},
      {t:'card', id:'sec', x:42, y:47, face:'down', w:11, z:3, ghost:true},
      {t:'card', id:'top', x:42, y:45, face:'down', w:11, z:4},
      {t:'hand', id:'lh', x:30, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'deck squared — flush', x:50, y:88}
    ]},
  { caption: "Strike. The right hand <b>strikes and takes the second card</b> in one sharp motion. The top card never leaves the deck — it barely stirs.",
    beats: ["strike second deal"],
    actions: [
      {t:'reveal', id:'sec'},
      {t:'move', id:'sec', x:72, y:50, z:6},
      {t:'move', id:'top', x:42, y:44, z:4},
      {t:'hand', id:'rh', x:66, y:44, side:'right', on:true},
      {t:'label', id:'k', text:'second card — struck', x:50, y:88}
    ]},
  { caption: "The dealt card was the <b>second</b> — and the top card is still on top. Strike seconds reward timing over setup, and they're more angle-sensitive than push-off seconds: mirror work is mandatory.",
    beats: ["top stays"], climax: true,
    actions: [
      {t:'flip', id:'sec', to:'up'},
      {t:'hi', id:'top', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'top card never left', x:50, y:88}
    ]}
]};

ANIMS.t144 = { steps: [
  { caption: "Display. A face-up card in view — a double, though only Exposed view can tell. <b>Cardini's lesson: less is more.</b>",
    beats: ["display"],
    actions: [
      {t:'card', id:'bk', x:48, y:50, face:'up', w:14, ghost:true},
      {t:'card', id:'fc', x:50, y:46, face:'up', w:14, z:3},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'a card in view', x:50, y:88}
    ]},
  { caption: "Snap. A sharp wrist turn: the face card snaps to the back of the pair and <b>the card behind takes its place</b>. Quick, economical — nothing extra moves.",
    beats: ["cardini change"],
    actions: [
      {t:'rot', id:'fc', deg:-28},
      {t:'move', id:'fc', x:47, y:51, z:1},
      {t:'move', id:'bk', x:50, y:46, z:3},
      {t:'reveal', id:'bk'},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'the snap exchange', x:50, y:88}
    ]},
  { caption: "<b>Hold.</b> The new face registers and the hands go still. Don't decorate the change — land it and stop.",
    beats: ["hold"], climax: true,
    actions: [
      {t:'rot', id:'fc', deg:0},
      {t:'hi', id:'bk', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'land it and stop', x:50, y:88}
    ]}
]};

ANIMS.t145 = { steps: [
  { caption: "Spin. A card — really a double (Exposed) — begins to <b>twirl in a continuous motion</b>. The spin is the cover and the effect in one.",
    beats: ["the spin"],
    actions: [
      {t:'card', id:'bk', x:48, y:50, face:'up', w:14, ghost:true},
      {t:'card', id:'fc', x:50, y:46, face:'up', w:14, z:3},
      {t:'rot', id:'bk', deg:120},
      {t:'rot', id:'fc', deg:120},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'the double spins', x:50, y:88}
    ]},
  { caption: "Exchange. Mid-spin, under the blur, <b>the faces exchange</b> — the front card rotates away to the back and its partner turns into view. The motion never stops, so there is no moment to catch.",
    beats: ["shapeshifter change"],
    actions: [
      {t:'rot', id:'bk', deg:300},
      {t:'rot', id:'fc', deg:300},
      {t:'move', id:'fc', x:48, y:50, z:1},
      {t:'move', id:'bk', x:50, y:46, z:3},
      {t:'reveal', id:'bk'},
      {t:'label', id:'k', text:'mid-spin exchange', x:50, y:88}
    ]},
  { caption: "<b>Stop.</b> The spin dies on the new face, held still. A wobbly twirl kills the morph — the spin must look intentional, smooth, effortless.",
    beats: ["the stop"], climax: true,
    actions: [
      {t:'rot', id:'bk', deg:360},
      {t:'rot', id:'fc', deg:360},
      {t:'hi', id:'bk', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'stop — new face', x:50, y:88}
    ]}
]};

ANIMS.t146 = { steps: [
  { caption: "Kiss Change — two cards face-up, held apart: the <b>A♠</b> and the <b>K♥</b>. Behind the ace rides a third card (Exposed view only) — the change is loaded before anything happens. (The faces are this run-through's; the article names none.)",
    beats: ["two cards"],
    actions: [
      {t:'card', id:'chg', rank:'Q', suit:'♦', x:42, y:48, face:'down', w:11, z:1, ghost:true},
      {t:'card', id:'c1', rank:'A', suit:'♠', x:42, y:48, face:'up', w:12, z:5},
      {t:'card', id:'c2', rank:'K', suit:'♥', x:60, y:52, face:'up', w:12},
      {t:'hi', id:'c1', on:true},
      {t:'hand', id:'rh', x:68, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'two cards · one will change', x:50, y:88}
    ]},
  { caption: "The <b>kiss</b>: the two held cards come together, faces meeting…",
    beats: ["kiss"],
    actions: [
      {t:'hi', id:'c1', on:false},
      {t:'move', id:'c1', x:50, y:50},
      {t:'move', id:'chg', x:50, y:50},
      {t:'move', id:'c2', x:53, y:50},
      {t:'label', id:'k', text:'kiss — faces meet', x:50, y:88}
    ]},
  { caption: "…and in that contact, a face is <b>switched</b>: the hidden card takes the face-up place, and the A♠ slips behind it (Exposed view). The exchange happens entirely inside the kiss — there is no other moment it could have happened.",
    beats: ["the switch","change"],
    actions: [
      {t:'remove', id:'c1'},
      {t:'card', id:'back', rank:'A', suit:'♠', x:50, y:50, face:'down', w:11, z:1, ghost:true},
      {t:'reveal', id:'chg'},
      {t:'flip', id:'chg', to:'up'},
      {t:'label', id:'k', text:'the faces exchange in the contact', x:50, y:88}
    ]},
  { caption: "Separate. One face has <b>changed</b> — the ace is a queen now. Intimate and strong at close range; don't rush the separation, let the change register.",
    climax: true,
    actions: [
      {t:'move', id:'chg', x:42, y:48},
      {t:'move', id:'back', x:40, y:51},
      {t:'move', id:'c2', x:60, y:52},
      {t:'hi', id:'chg', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'kiss change done', x:50, y:88}
    ]}
]};

ANIMS.t147 = { steps: [
  { caption: "The original invisible cut. Left hand holds the deck with a <b>pinky break</b> between the halves; the K♠ sits on the lower half, named in Exposed view.",
    beats: ["pinky break"],
    actions: [
      {t:'packet', id:'up', x:50, y:40, w:13, cards:[{bulk:25},{rank:'6', suit:'♦', face:'down'}]},
      {t:'card', id:'sel', rank:'K', suit:'♠', x:50, y:49, face:'down', w:11, secret:{rank:'K', suit:'♠'}},
      {t:'packet', id:'lo', x:50, y:57, w:13, cards:[{bulk:25}]},
      {t:'hand', id:'lh', x:38, y:58, side:'left', on:true, grip:'dealing grip'},
      {t:'note', id:'b', text:'pinky break between the halves', x:72, y:62},
      {t:'label', id:'k', text:'break held · right hand approaches', x:50, y:88}
    ]},
  { caption: "Right hand covers from above — thumb at the inner end, fingers at the outer. <b>The audience sees only the back of the hand.</b>",
    beats: ["full cover"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true, grip:'by the ends'},
      {t:'label', id:'k', text:'right hand screens everything', x:50, y:88}
    ]},
  { caption: "In one motion: the bottom half swings up and forward as the top half drops under. <b>The transpose takes a blink</b> — the hands barely seem to move.",
    beats: ["the pass"],
    actions: [
      {t:'move', id:'lo', x:50, y:40},
      {t:'move', id:'sel', x:50, y:32},
      {t:'move', id:'up', x:50, y:57},
      {t:'note', id:'b', text:'hands barely seem to move', x:50, y:24},
      {t:'label', id:'k', text:'halves exchange under cover', x:50, y:88}
    ]},
  { caption: "Square immediately — the same motion you'd use after any ordinary cut. <b>The K♠ is on top</b> and the pass is over before attention arrives. Graduate school: until it's invisible, use a control that doesn't require it.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'lo'},
      {t:'remove', id:'up'},
      {t:'packet', id:'done', x:50, y:51, w:14, cards:[{bulk:51}]},
      {t:'move', id:'sel', x:50, y:44},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'K♠ on top · square at once', x:50, y:88}
    ]}
]};

ANIMS.t148 = { steps: [
  { caption: "The audience believes a pass happened. Nothing did. The card is <b>already controlled</b> — the Q♣ sits on top before anything 'happens', as Exposed view shows.",
    beats: ["already controlled"],
    actions: [
      {t:'packet', id:'dk', x:50, y:51, w:14, cards:[{bulk:51}]},
      {t:'card', id:'sel', rank:'Q', suit:'♣', x:50, y:44, face:'down', w:11, secret:{rank:'Q', suit:'♣'}},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'Q♣ already on top (Exposed view)', x:50, y:88}
    ]},
  { caption: "Mime the cover and the tension of a real pass — then simply square up. <b>No halves moved; the deck never splits.</b>",
    beats: ["mime · square"],
    actions: [
      {t:'hand', id:'rh', x:56, y:38, side:'right', on:true},
      {t:'note', id:'b', text:'hands suggest the move · deck never splits', x:50, y:26},
      {t:'label', id:'k', text:'the bluff', x:50, y:88}
    ]},
  { caption: "Sell it: act as if the hard work is done. <b>The 'pass' was pure theater</b> — the Q♣ never moved. For spectators who know to watch for a pass.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'bluff complete — nothing moved', x:50, y:88}
    ]}
]};

ANIMS.t149 = { steps: [
  { caption: "<b>Mark.</b> The selection — tracked as the separate card — sits in the deck <b>outjogged or at a break</b>. Steranko's shift will control it in one continuous, open-looking action.",
    beats: ["mark"],
    actions: [
      {t:'packet', id:'below', x:50, y:59, w:13, cards:[{bulk:25}]},
      {t:'card', id:'sel', x:56, y:51, face:'down', w:11, deg:10, z:4, ghost:true},
      {t:'packet', id:'above', x:50, y:43, w:13, cards:[{bulk:26}]},
      {t:'hand', id:'lh', x:36, y:56, side:'left', on:true},
      {t:'hand', id:'rh', x:63, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'selection outjogged', x:50, y:88}
    ]},
  { caption: "<b>Flow.</b> A <b>continuous lateral and downward action</b> as the selection goes flush — no pause, no hitch. In Exposed view you can follow the tracked card travelling inside the deck; from the front there is only a square-up.",
    beats: ["S.W.E. Shift · flow"],
    actions: [
      {t:'move', id:'sel', x:43, y:55},
      {t:'rot', id:'sel', deg:0},
      {t:'note', id:'b', text:'lateral + downward — inside the deck (Exposed)', x:50, y:76},
      {t:'label', id:'k', text:'one continuous flow', x:50, y:88}
    ]},
  { caption: "<b>Arrive.</b> The card arrives <b>on top</b> — or into the palm — with no pause between square and control. Any hitch turns flow into a move.",
    beats: ["arrive"],
    actions: [
      {t:'move', id:'sel', x:50, y:36, z:5},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'on top — no pause', x:50, y:88}
    ]},
  { caption: "<b>Openness.</b> The open look is the cover: the deck squares in full view, the selection on top, and <b>nothing ever looked like it happened</b>.",
    climax: true,
    actions: [
      {t:'remove', id:'above'},
      {t:'remove', id:'below'},
      {t:'packet', id:'deck', x:50, y:53, w:13, cards:[{bulk:51}]},
      {t:'move', id:'sel', x:50, y:42},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'S.W.E. shift complete', x:50, y:88}
    ]}
]};

ANIMS.t150 = { steps: [
  { caption: "<b>Target.</b> The <b>bottom card</b> of the deck — tracked separately underneath — is the one to steal. The classic Erdnase bottom palm takes it while the deck itself is being handled openly.",
    beats: ["target"],
    actions: [
      {t:'packet', id:'deck', x:48, y:48, w:13, cards:[{bulk:51}]},
      {t:'card', id:'bot', x:48, y:59, face:'down', w:11, z:2},
      {t:'hand', id:'lh', x:35, y:54, side:'left', on:true},
      {t:'label', id:'k', text:'bottom card targeted', x:50, y:88}
    ]},
  { caption: "<b>Cover.</b> The right hand comes over to <b>square the deck, or take it</b> — ordinary handling, and all the cover the steal needs.",
    beats: ["cover"],
    actions: [
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'move', id:'deck', x:50, y:47},
      {t:'move', id:'bot', x:50, y:58},
      {t:'label', id:'k', text:'right hand covers', x:50, y:88}
    ]},
  { caption: "<b>Curl.</b> Under that cover, the left fingers <b>draw the bottom card into the left palm</b>. Soft hand — the palm survives only if nothing looks held.",
    beats: ["Erdnase Bottom Palm · the curl"],
    actions: [
      {t:'palm', id:'bot'},
      {t:'move', id:'bot', x:36, y:60, z:2},
      {t:'scale', id:'bot', s:0.85},
      {t:'note', id:'b', text:'curled into the left palm (Exposed)', x:28, y:74},
      {t:'label', id:'k', text:'palmed in the left', x:50, y:88}
    ]},
  { caption: "<b>Leave.</b> The deck is handed away or tabled — <b>fifty-one cards, gone from your hands</b> — while the bottom card stays retained in a soft left hand, covered by a natural body turn.",
    climax: true,
    actions: [
      {t:'move', id:'deck', x:72, y:38},
      {t:'hand', id:'rh', on:false},
      {t:'unnote', id:'b'},
      {t:'note', id:'b', text:'retained in the left palm (Exposed)', x:28, y:74},
      {t:'label', id:'k', text:'deck away · card retained', x:50, y:88}
    ]}
]};

ANIMS.t151 = { steps: [
  { caption: "<b>Grip.</b> The deck in a <b>single-hand dealing grip</b> in the left hand. The bottom card — tracked underneath — is the one that will be dealt. The other hand does nothing at all; that is the point.",
    beats: ["the grip"],
    actions: [
      {t:'packet', id:'deck', x:45, y:48, w:13, cards:[{bulk:51}]},
      {t:'card', id:'bot', x:45, y:59, face:'down', w:11, z:2, ghost:true},
      {t:'hand', id:'lh', x:33, y:54, side:'left', on:true, grip:'one-hand dealing grip'},
      {t:'hand', id:'rh', x:82, y:66, side:'right', on:true},
      {t:'label', id:'k', text:'one hand only · bottom card tracked', x:50, y:88}
    ]},
  { caption: "<b>Free.</b> The fingers of the dealing hand <b>buckle and release the bottom card</b> — the same hand that holds the deck frees the card from underneath it.",
    beats: ["One-Handed Bottom Deal · free the bottom"],
    actions: [
      {t:'move', id:'bot', x:52, y:62},
      {t:'rot', id:'bot', deg:-8},
      {t:'note', id:'b', text:'bottom card buckled free (Exposed)', x:56, y:78},
      {t:'label', id:'k', text:'freed from the bottom', x:50, y:88}
    ]},
  { caption: "<b>Pivot.</b> The freed card <b>pivots out into a deal motion</b> — dealt face-down onto the table, in the rhythm of an ordinary top deal.",
    beats: ["pivot · deal"],
    actions: [
      {t:'reveal', id:'bot'},
      {t:'move', id:'bot', x:72, y:54, z:5},
      {t:'rot', id:'bot', deg:0},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'dealt — from the bottom', x:50, y:88}
    ]},
  { caption: "<b>Sell.</b> Among the hardest false deals — and the sell is the <b>free hand, which never touched the deck</b>. If it never comes near, the deal looks impossible to fake.",
    climax: true,
    actions: [
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'lh', x:33, y:54, side:'left', on:true, grip:''},
      {t:'label', id:'k', text:'one-handed bottom deal', x:50, y:88}
    ]}
]};

ANIMS.t152 = { steps: [
  { caption: "The deck sits in your left hand. The card that matters is the <b>bottom card</b> — the article names no card, so Exposed view simply tracks it, ghosted under the deck, from the first frame.",
    beats: ["setup"],
    actions: [
      {t:'packet', id:'deck', x:44, y:50, w:13, cards:[{bulk:51}]},
      {t:'card', id:'bot', x:44, y:61, face:'down', w:11, z:3, ghost:true},
      {t:'hand', id:'lh', x:32, y:56, side:'left', on:true},
      {t:'label', id:'k', text:'the bottom card — tracked (Exposed)', x:50, y:88}
    ]},
  { caption: "Take. The right hand comes over and takes a card in the deal — but the card it takes is the <b>bottom card</b>, drawn out from underneath while the top of the deck never moves.",
    beats: ["bottom deal","the take"],
    actions: [
      {t:'hand', id:'rh', x:56, y:40, side:'right', on:true},
      {t:'move', id:'bot', x:58, y:46, z:5},
      {t:'label', id:'k', text:'taken — from the bottom', x:50, y:88}
    ]},
  { caption: "Turn. In the same motion the card <b>turns face-up</b> — the flash of its face is already starting to pull every eye toward it.",
    beats: ["turn face-up"],
    actions: [
      {t:'reveal', id:'bot'},
      {t:'flip', id:'bot', to:'up'},
      {t:'label', id:'k', text:'face-up in the same motion', x:50, y:88}
    ]},
  { caption: "Pitch. It lands <b>face-up on the table</b>, pitched out in stud style, well away from the deck it secretly came from.",
    beats: ["the pitch"],
    actions: [
      {t:'move', id:'bot', x:72, y:58},
      {t:'rot', id:'bot', deg:10},
      {t:'label', id:'k', text:'pitched face-up', x:50, y:88}
    ]},
  { caption: "Cover. The face-up arrival <b>draws the eye to the card, not the source</b> — that flash is the misdirection, and it is why this deal is so strong in gambling demos.",
    climax: true,
    actions: [
      {t:'hi', id:'bot', on:true},
      {t:'scale', id:'bot', s:1.08},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'stud bottom deal — the flash covers the source', x:50, y:88}
    ]}
]};

ANIMS.t153 = { steps: [
  { caption: "Two packets: a <b>source</b> and a <b>destination</b>. Two aces ride the top of the source packet (Exposed) — they're what needs to move.",
    beats: ["two packets"],
    actions: [
      {t:'packet', id:'src', x:34, y:52, w:12, cards:[{bulk:4},{rank:'A', suit:'♠', face:'down'},{rank:'A', suit:'♥', face:'down'}]},
      {t:'packet', id:'dst', x:66, y:52, w:12, cards:[{bulk:6}]},
      {t:'hand', id:'lh', x:24, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:76, y:44, side:'right', on:true},
      {t:'label', id:'k', text:'source · destination', x:50, y:88}
    ]},
  { caption: "Display. The source packet is picked up, shown naturally, and <b>squared against the destination</b>. The display must be motivated — never transfer for its own sake.",
    beats: ["the display"],
    actions: [
      {t:'move', id:'src', x:53, y:50, z:4},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'squaring up', x:50, y:88}
    ]},
  { caption: "Carry. Under cover of the square-up, the right hand <b>loads the two aces onto the destination</b> (Exposed). From the front, the gesture is nothing but tidying.",
    beats: ["vernon transfer"],
    actions: [
      {t:'repacket', id:'src', cards:[{bulk:4}]},
      {t:'repacket', id:'dst', cards:[{bulk:6},{rank:'A', suit:'♠', face:'down'},{rank:'A', suit:'♥', face:'down'}]},
      {t:'move', id:'src', x:34, y:52, z:3},
      {t:'label', id:'k', text:'loaded under cover', x:50, y:88}
    ]},
  { caption: "Result. Both packets <b>look unchanged</b> — but the destination now carries the aces on top, and the source is two cards lighter. A precision utility, invisible when the display makes sense.",
    beats: ["the result"], climax: true,
    actions: [
      {t:'hi', id:'dst', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'transfer complete', x:50, y:88}
    ]}
]};

ANIMS.t154 = { steps: [
  { caption: "One card in your right hand, face down — the article names no card; the lesson is purely <b>where the card ends up</b>: the extreme rear of the hand.",
    beats: ["setup"],
    actions: [
      {t:'card', id:'c', x:50, y:48, face:'down', w:12},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'one card — position is the lesson', x:50, y:88}
    ]},
  { caption: "Slide. The card slides back until it sits at the <b>base of the thumb and the rear edge</b> of the hand, palmed there — Exposed view shows it parked behind everything the audience can see.",
    beats: ["rear palm","slide to the rear"],
    actions: [
      {t:'palm', id:'c'},
      {t:'move', id:'c', x:63, y:52, z:1},
      {t:'scale', id:'c', s:0.8},
      {t:'label', id:'k', text:'palmed at the rear edge (Exposed)', x:50, y:88}
    ]},
  { caption: "Open. The fingers are <b>free</b> and the palm can face outward — the hand reads completely empty, because the card is behind the hand, not under it.",
    beats: ["open hand"],
    actions: [
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true},
      {t:'move', id:'c', x:61, y:50},
      {t:'note', id:'b', text:'fingers free · palm can face outward', x:72, y:62},
      {t:'label', id:'k', text:'the hand reads empty', x:50, y:88}
    ]},
  { caption: "Angle. This position is <b>angle-critical</b> — lock your working angles and rehearse them before you ever use it live. From the wrong seat, the rear edge is exactly what shows.",
    beats: ["angles"],
    actions: [
      {t:'note', id:'b', text:'lock your working angles — rehearse them first', x:72, y:62},
      {t:'label', id:'k', text:'angle-critical', x:50, y:88}
    ]},
  { caption: "Produce. The card comes forward out of the rear position — or transfers from there into the next move. An <b>open hand</b> just produced a card it plainly wasn't holding.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'unpalm', id:'c'},
      {t:'move', id:'c', x:50, y:46},
      {t:'flip', id:'c', to:'up'},
      {t:'scale', id:'c', s:1.08},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'produced from rear palm', x:50, y:88}
    ]}
]};

ANIMS.t155 = { steps: [
  { caption: "One card in your right hand, face down — again no card is named; the lesson is depth. This palm parks the card <b>deep in the palm cavity</b> for maximum cover.",
    beats: ["setup"],
    actions: [
      {t:'card', id:'c', x:50, y:48, face:'down', w:12},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'one card — depth is the lesson', x:50, y:88}
    ]},
  { caption: "Settle. The card settles <b>fully into the palm cavity</b>, palmed deep — Exposed view shows it sunk in the hand, not lying flat across it.",
    beats: ["deep palm","settle deep"],
    actions: [
      {t:'palm', id:'c'},
      {t:'move', id:'c', x:57, y:47, z:1},
      {t:'scale', id:'c', s:0.7},
      {t:'label', id:'k', text:'palmed deep in the cavity (Exposed)', x:50, y:88}
    ]},
  { caption: "Curl. The fingers stay <b>natural</b> and the hand can gesture — nothing about the hand's behaviour announces that it is holding anything at all.",
    beats: ["natural curl"],
    actions: [
      {t:'hand', id:'rh', x:54, y:36, side:'right', on:true},
      {t:'move', id:'c', x:51, y:44},
      {t:'note', id:'b', text:'fingers natural · the hand can gesture', x:70, y:60},
      {t:'label', id:'k', text:'a natural, gesturing hand', x:50, y:88}
    ]},
  { caption: "Cover. Deep in the cavity, the card survives angles that would kill a flat palm — <b>more angle forgiveness than flat or Tenkai palms</b>. When the angles are hostile, this is the palm that holds.",
    climax: true,
    actions: [
      {t:'hand', id:'rh', x:64, y:44, side:'right', on:true},
      {t:'move', id:'c', x:61, y:51},
      {t:'note', id:'b', text:'cover holds from almost any angle', x:70, y:60},
      {t:'label', id:'k', text:'maximum cover', x:50, y:88}
    ]},
  { caption: "Trade-off. The price of that cover is <b>less finger freedom</b> than Tenkai or lateral palms give you. Neither is better — <b>choose by situation</b>: hostile angles, go deep; need your fingers, go Tenkai or lateral.",
    beats: ["trade-off"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'deep palm — cover bought with finger freedom', x:50, y:88}
    ]}
]};

ANIMS.t156 = { steps: [
  { caption: "Edge Grip — the deck is held <b>at the long edges</b>: thumb on one long edge, fingers on the other. The platform for precise second, bottom, and center deals.",
    beats: ["edge grip"],
    actions: [
      {t:'deck', id:'d', x:45, y:50, n:52},
      {t:'card', id:'top', rank:'A', suit:'♠', x:45, y:40, face:'down', w:11, z:3, secret:{rank:'A', suit:'♠'}},
      {t:'hand', id:'lh', x:33, y:55, side:'left', on:true, grip:'edge grip'},
      {t:'note', id:'b', text:'thumb and fingers on the long edges', x:72, y:48},
      {t:'label', id:'k', text:'edge grip established', x:50, y:88} ] },
  { caption: "Stable. The deck is <b>secure</b>; individual cards can be pushed or released with fine control — push just the top card a fraction and feel it move alone.",
    beats: ["fine control"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'top', x:45, y:34},
      {t:'hi', id:'top', on:true},
      {t:'label', id:'k', text:'deck secure · one card under fine control', x:50, y:88} ] },
  { caption: "Platform. The grip itself is <b>not a move</b> — it is the platform most advanced false deals are built on.",
    beats: ["the platform"],
    actions: [
      {t:'hi', id:'top', on:false},
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'move', id:'top', x:68, y:48, z:5},
      {t:'label', id:'k', text:'edge grip · a deal delivered from the platform', x:50, y:88} ] },
  { caption: "Practice. Get comfortable here <b>before adding false takes</b> — most advanced false deals start with grip, and edge grip is worth drilling on its own.",
    beats: ["practice drill"],
    climax: true,
    actions: [
      {t:'flip', id:'top', to:'up'},
      {t:'hi', id:'top', on:true},
      {t:'label', id:'k', text:'drill the grip on its own', x:50, y:88} ] }
] };

ANIMS.t157 = { steps: [
  { caption: "Cards Across — two packets, <b>ten cards each</b>, counted out in the open. A counted number of cards is about to travel from one packet to the other without anything visibly moving.",
    beats: ["two packets"],
    actions: [
      {t:'packet', id:'pa', x:30, y:52, w:13, cards:[{bulk:10}]},
      {t:'packet', id:'pb', x:70, y:52, w:13, cards:[{bulk:10}]},
      {t:'hand', id:'rh', x:50, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'two packets of ten — counted fairly', x:50, y:88}
    ]},
  { caption: "Sell the counts. Both packets are counted again, slowly and fairly — <b>the invisible transit is only strong if the numbers were believed</b>, so nothing here is rushed or faked.",
    beats: ["the counts"],
    actions: [
      {t:'note', id:'b', text:'ten… and ten. Both counts believed.', x:50, y:24},
      {t:'label', id:'k', text:'both counts sold', x:50, y:88}
    ]},
  { caption: "The send. <b>Three cards</b> are “sent” across — and in Exposed view you can see how: three cards are quietly palmed out of the first packet during the gesture (the article's method: false counts and a <b>hidden transfer</b>). In Audience view, nothing moves at all.",
    beats: ["the send"],
    actions: [
      {t:'repacket', id:'pa', cards:[{bulk:7}]},
      {t:'packet', id:'xfer', x:50, y:62, w:11, cards:[{bulk:3}]},
      {t:'palm', id:'xfer'},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'three cards travel — invisibly (Exposed)', x:50, y:88}
    ]},
  { caption: "Recount. The palmed three are loaded onto the second packet as it is gathered, and the numbers tell the story: the first packet holds <b>seven</b>, the second holds <b>thirteen</b> — short and long by exactly the number sent.",
    climax: true,
    actions: [
      {t:'remove', id:'xfer'},
      {t:'repacket', id:'pb', cards:[{bulk:13}]},
      {t:'note', id:'b', text:'7 · 13 — the three arrived', x:50, y:24},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'7 · 13 — cards across', x:50, y:88}
    ]}
]};

ANIMS.t158 = { steps: [
  { caption: "A small packet, counted as six. It is <b>not six</b> — three extra cards ride hidden with it, ghosted here in Exposed view. The article names no cards; only the count is real, so the packet is tracked by count alone.",
    beats: ["the setup"],
    actions: [
      {t:'packet', id:'pkt', x:38, y:50, w:13, cards:[{bulk:6}]},
      {t:'card', id:'ex0', x:38, y:50, face:'down', w:11, z:1, ghost:true},
      {t:'card', id:'ex1', x:38, y:50, face:'down', w:11, z:1, ghost:true},
      {t:'card', id:'ex2', x:38, y:50, face:'down', w:11, z:1, ghost:true},
      {t:'hand', id:'lh', x:26, y:56, side:'left', on:true},
      {t:'label', id:'k', text:'“six” cards — three extras hidden (Exposed)', x:50, y:88}
    ]},
  { caption: "Count six. <b>Clear and slow</b> — the six counted cards travel into the other hand one by one. The three extras never make the trip; they stay behind in the counting hand.",
    beats: ["the count"],
    actions: [
      {t:'hand', id:'rh', x:74, y:42, side:'right', on:true},
      {t:'move', id:'pkt', x:64, y:46},
      {t:'label', id:'k', text:'six counted — the extras stay behind', x:50, y:88}
    ]},
  { caption: "Discard. <b>Throw three away</b> — genuinely away, face down on the table. Six were counted, three are gone… the arithmetic seems airtight.",
    beats: ["discard"],
    actions: [
      {t:'repacket', id:'pkt', cards:[{bulk:3}]},
      {t:'packet', id:'away', x:64, y:74, w:12, cards:[{bulk:3}]},
      {t:'label', id:'k', text:'three thrown away', x:50, y:88}
    ]},
  { caption: "Recount. Gather what's left and count again: <b>still six</b>. The three extras have quietly joined the pile — the false count hid them, and the discard everyone watched was paid for out of cards nobody counted.",
    beats: ["false count"], climax: true,
    actions: [
      {t:'move', id:'ex0', x:64, y:46, z:5},
      {t:'move', id:'ex1', x:64, y:46, z:5},
      {t:'move', id:'ex2', x:64, y:46, z:5},
      {t:'label', id:'k', text:'recounted: still six', x:50, y:88}
    ]},
  { caption: "Repeat. Throw the counted cards away too, count what remains — and this time the packet is <b>genuinely small</b>: three cards, counted honestly. Rhythm and attitude carry the comedy; deadpan or playful, pick one and commit.",
    beats: ["repeat"],
    actions: [
      {t:'remove', id:'pkt'},
      {t:'repacket', id:'away', cards:[{bulk:6}]},
      {t:'reveal', id:'ex0'},
      {t:'reveal', id:'ex1'},
      {t:'reveal', id:'ex2'},
      {t:'move', id:'ex0', x:50, y:48},
      {t:'move', id:'ex1', x:50, y:48},
      {t:'move', id:'ex2', x:50, y:48},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'finally — genuinely three', x:50, y:88}
    ]}
]};

ANIMS.t159 = { steps: [
  { caption: "Follow the Leader — two leaders face-up: the <b>A♥</b> for the reds, the <b>A♠</b> for the blacks, each over a packet of its own colour. Exposed view can see into both packets: six reds under red, six blacks under black — for now.",
    beats: ["leaders"],
    actions: [
      {t:'card', id:'lr', rank:'A', suit:'♥', x:30, y:28, face:'up', w:11},
      {t:'card', id:'lb', rank:'A', suit:'♠', x:70, y:28, face:'up', w:11},
      {t:'packet', id:'pr', x:30, y:56, w:12, cards:[{rank:'2', suit:'♥', face:'down'},{rank:'5', suit:'♥', face:'down'},{rank:'9', suit:'♥', face:'down'},{rank:'J', suit:'♥', face:'down'},{rank:'4', suit:'♦', face:'down'},{rank:'K', suit:'♦', face:'down'}]},
      {t:'packet', id:'pb', x:70, y:56, w:12, cards:[{rank:'2', suit:'♣', face:'down'},{rank:'5', suit:'♠', face:'down'},{rank:'9', suit:'♠', face:'down'},{rank:'J', suit:'♣', face:'down'},{rank:'4', suit:'♣', face:'down'},{rank:'K', suit:'♠', face:'down'}]},
      {t:'hi', id:'lr', on:true},
      {t:'hi', id:'lb', on:true},
      {t:'label', id:'k', text:'leaders · matching packets underneath', x:50, y:88}
    ]},
  { caption: "Swap. The leaders <b>change places</b> in full view — red leader to the black side, black leader to the red. And underneath, under cover of the swap, the packets quietly <b>cross with them</b> (Exposed view shows both crossings; the audience watches only the face-up leaders).",
    beats: ["swap"],
    actions: [
      {t:'hi', id:'lr', on:false},
      {t:'hi', id:'lb', on:false},
      {t:'move', id:'lr', x:70, y:28},
      {t:'move', id:'lb', x:30, y:28},
      {t:'move', id:'pr', x:70, y:56},
      {t:'move', id:'pb', x:30, y:56},
      {t:'label', id:'k', text:'leaders swapped — packets followed (Exposed)', x:50, y:88}
    ]},
  { caption: "Mix them more, switch them again — every swap must look free, and each one makes the match feel more impossible. The packets travel with their leaders every time (Exposed); the audience's eyes stay on the two face-up aces.",
    beats: ["switched again"],
    actions: [
      {t:'move', id:'lr', x:30, y:28},
      {t:'move', id:'lb', x:70, y:28},
      {t:'move', id:'pr', x:30, y:56},
      {t:'move', id:'pb', x:70, y:56},
      {t:'label', id:'k', text:'swapped back — still following', x:50, y:88}
    ]},
  { caption: "Reveal. Turn the packets over under their leaders: <b>reds under the red ace, blacks under the black ace</b> — no matter how often the leaders changed places. The cards obey, because they never stopped following.",
    climax: true,
    actions: [
      {t:'remove', id:'pr'},
      {t:'remove', id:'pb'},
      {t:'spread', x:8, y:56, dx:7, w:10, face:'up', prefix:'rs', cards:[{rank:'2', suit:'♥'},{rank:'5', suit:'♥'},{rank:'9', suit:'♥'},{rank:'J', suit:'♥'},{rank:'4', suit:'♦'},{rank:'K', suit:'♦'}]},
      {t:'spread', x:56, y:56, dx:7, w:10, face:'up', prefix:'bs', cards:[{rank:'2', suit:'♣'},{rank:'5', suit:'♠'},{rank:'9', suit:'♠'},{rank:'J', suit:'♣'},{rank:'4', suit:'♣'},{rank:'K', suit:'♠'}]},
      {t:'hi', id:'lr', on:true},
      {t:'hi', id:'lb', on:true},
      {t:'label', id:'k', text:'follow the leader — colours obey', x:50, y:88}
    ]}
]};

ANIMS.t161 = { steps: [
  { caption: "Aces — displayed, and set aside. Below them, three selections: the <b>7♣, Q♦ and 3♥</b>. Every card that matters is on the table from the start.",
    beats: ["aces displayed"],
    actions: [
      {t:'card', id:'a1', rank:'A', suit:'♠', x:18, y:30, face:'up', w:11},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:36, y:30, face:'up', w:11},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:54, y:30, face:'up', w:11},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:72, y:30, face:'up', w:11},
      {t:'card', id:'s1', rank:'7', suit:'♣', x:30, y:64, face:'up', w:10, secret:{rank:'7', suit:'♣'}},
      {t:'card', id:'s2', rank:'Q', suit:'♦', x:50, y:64, face:'up', w:10, secret:{rank:'Q', suit:'♦'}},
      {t:'card', id:'s3', rank:'3', suit:'♥', x:70, y:64, face:'up', w:10, secret:{rank:'3', suit:'♥'}},
      {t:'label', id:'k', text:'aces · three selections', x:50, y:88} ] },
  { caption: "Selections. Three cards are chosen and shown around — the 7♣, the Q♦ and the 3♥. Remember them; they are about to vanish into the deck.",
    beats: ["selections shown"],
    actions: [
      {t:'hi', id:'s1', on:true},
      {t:'hi', id:'s2', on:true},
      {t:'hi', id:'s3', on:true},
      {t:'move', id:'s1', x:30, y:60},
      {t:'move', id:'s2', x:50, y:60},
      {t:'move', id:'s3', x:70, y:60},
      {t:'label', id:'k', text:'three selections — remember them', x:50, y:88} ] },
  { caption: "Selections are <b>lost in the deck</b>, and the aces are set aside, apparently alone. Watch the top of the deck in Exposed view as the selections go in.",
    beats: ["lost in the deck", "aces set aside"],
    actions: [
      {t:'hi', id:'s1', on:false},
      {t:'hi', id:'s2', on:false},
      {t:'hi', id:'s3', on:false},
      {t:'packet', id:'dk', x:50, y:52, w:13, cards:[{bulk:45}]},
      {t:'flip', id:'s1', to:'down'},
      {t:'flip', id:'s2', to:'down'},
      {t:'flip', id:'s3', to:'down'},
      {t:'move', id:'s1', x:50, y:40, z:5},
      {t:'move', id:'s2', x:50, y:42, z:6},
      {t:'move', id:'s3', x:50, y:44, z:7},
      {t:'move', id:'a1', x:84, y:28, z:1},
      {t:'move', id:'a2', x:84, y:28, z:2},
      {t:'move', id:'a3', x:84, y:28, z:3},
      {t:'move', id:'a4', x:84, y:28, z:4},
      {t:'label', id:'k', text:'selections lost · aces waiting alone', x:50, y:88} ] },
  { caption: "Method: <b>controls</b> kept all three selections on top of the deck, not lost in it — and as the ace packet is squared, the three are secretly loaded between the aces (ATFUS, packet switch). Exposed view shows the load; the audience sees aces that never went near the deck.",
    beats: ["controls", "ATFUS", "packet switch"],
    actions: [
      {t:'palm', id:'s1'},
      {t:'palm', id:'s2'},
      {t:'palm', id:'s3'},
      {t:'hand', id:'rh', x:70, y:20, side:'right', on:true},
      {t:'move', id:'a1', x:84, y:28, z:1},
      {t:'move', id:'s1', x:84, y:28, z:2},
      {t:'move', id:'a2', x:84, y:28, z:3},
      {t:'move', id:'s2', x:84, y:28, z:4},
      {t:'move', id:'a3', x:84, y:28, z:5},
      {t:'move', id:'s3', x:84, y:28, z:6},
      {t:'move', id:'a4', x:84, y:28, z:7},
      {t:'label', id:'k', text:'loaded between the aces — invisible in Audience view', x:50, y:88} ] },
  { caption: "Magic: spread the aces — the three selections are <b>trapped between them</b>. The isolation of the aces felt absolute; the load was invisible.",
    beats: ["the reveal"],
    climax: true,
    actions: [
      {t:'remove', id:'dk'},
      {t:'unpalm', id:'s1'},
      {t:'unpalm', id:'s2'},
      {t:'unpalm', id:'s3'},
      {t:'hand', id:'rh', on:false},
      {t:'move', id:'a1', x:14, y:50, z:1},
      {t:'move', id:'s1', x:26, y:50, z:2},
      {t:'move', id:'a2', x:38, y:50, z:3},
      {t:'move', id:'s2', x:50, y:50, z:4},
      {t:'move', id:'a3', x:62, y:50, z:5},
      {t:'move', id:'s3', x:74, y:50, z:6},
      {t:'move', id:'a4', x:86, y:50, z:7},
      {t:'flip', id:'s1', to:'up'},
      {t:'flip', id:'s2', to:'up'},
      {t:'flip', id:'s3', to:'up'},
      {t:'hi', id:'s1', on:true},
      {t:'hi', id:'s2', on:true},
      {t:'hi', id:'s3', on:true},
      {t:'label', id:'k', text:'collected between the aces', x:50, y:88} ] }
] };

ANIMS.t162 = { steps: [
  { caption: "Sign. Their selection is <b>signed</b> — the article names no card, so it is tracked positionally: this face, with their signature on it, is the one that has to come back.",
    beats: ["signed card"],
    actions: [
      {t:'packet', id:'deck', x:50, y:56, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:50, y:36, face:'up', w:12, z:5},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'their signed card', x:50, y:88}
    ]},
  { caption: "The signed card is <b>lost in the deck and controlled</b> to a known position — riding on top of the deck, face down, where the throw will put it against the ceiling.",
    beats: ["control"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:50, y:44},
      {t:'label', id:'k', text:'lost — and controlled to the top', x:50, y:88}
    ]},
  { caption: "Prepare. A dab of <b>wax or moisture</b> goes on the card — the ghost speck in Exposed view is all that will hold it up there. Test the surface first; not every ceiling cooperates.",
    beats: ["the wax"],
    actions: [
      {t:'card', id:'wax', x:50, y:44, face:'down', w:3, z:8, ghost:true},
      {t:'hand', id:'rh', x:62, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'wax on the card (Exposed)', x:50, y:88}
    ]},
  { caption: "Throw. The <b>whole deck is thrown at the ceiling</b> — cards, wax and all, flat against it for one instant.",
    beats: ["the throw"],
    actions: [
      {t:'move', id:'deck', x:50, y:18},
      {t:'move', id:'sel', x:50, y:12},
      {t:'move', id:'wax', x:50, y:12},
      {t:'rot', id:'sel', deg:180},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'the deck hits the ceiling', x:50, y:88}
    ]},
  { caption: "Reveal. The deck falls — and <b>one card stays up there</b>: their signed card, stuck fast while fifty-one cards rain down around it.",
    climax: true,
    actions: [
      {t:'move', id:'deck', x:50, y:74},
      {t:'move', id:'wax', x:50, y:10},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'scale', id:'sel', s:1.08},
      {t:'label', id:'k', text:'signed card — on the ceiling', x:50, y:88}
    ]}
]};

ANIMS.t163 = { steps: [
  { caption: "Reset — four aces and four kings, clearly shown. They will <b>transpose and reset</b> in a rapid packet sequence; Exposed view tags every card so you can track it face-down.",
    beats: ["aces and kings"],
    actions: [
      {t:'card', id:'a1', rank:'A', suit:'♠', x:16, y:32, face:'up', w:10, secret:{rank:'A', suit:'♠'}},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:30, y:32, face:'up', w:10, secret:{rank:'A', suit:'♥'}},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:44, y:32, face:'up', w:10, secret:{rank:'A', suit:'♦'}},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:58, y:32, face:'up', w:10, secret:{rank:'A', suit:'♣'}},
      {t:'card', id:'k1', rank:'K', suit:'♠', x:16, y:66, face:'up', w:10, secret:{rank:'K', suit:'♠'}},
      {t:'card', id:'k2', rank:'K', suit:'♥', x:30, y:66, face:'up', w:10, secret:{rank:'K', suit:'♥'}},
      {t:'card', id:'k3', rank:'K', suit:'♦', x:44, y:66, face:'up', w:10, secret:{rank:'K', suit:'♦'}},
      {t:'card', id:'k4', rank:'K', suit:'♣', x:58, y:66, face:'up', w:10, secret:{rank:'K', suit:'♣'}},
      {t:'label', id:'k', text:'aces · kings', x:50, y:88} ] },
  { caption: "Sequence. Each packet is gathered face-down and counted through — Elmsley counts and mixes. The packets are handled so much that <b>which stack is which</b> is easy to lose; Exposed view never loses it.",
    beats: ["Elmsley count"],
    actions: [
      {t:'flip', id:'a1', to:'down'},
      {t:'flip', id:'a2', to:'down'},
      {t:'flip', id:'a3', to:'down'},
      {t:'flip', id:'a4', to:'down'},
      {t:'flip', id:'k1', to:'down'},
      {t:'flip', id:'k2', to:'down'},
      {t:'flip', id:'k3', to:'down'},
      {t:'flip', id:'k4', to:'down'},
      {t:'hand', id:'rh', x:50, y:26, side:'right', on:true},
      {t:'move', id:'a1', x:36, y:47, z:1},
      {t:'move', id:'a2', x:36, y:49, z:2},
      {t:'move', id:'a3', x:36, y:51, z:3},
      {t:'move', id:'a4', x:36, y:53, z:4},
      {t:'move', id:'k1', x:64, y:47, z:1},
      {t:'move', id:'k2', x:64, y:49, z:2},
      {t:'move', id:'k3', x:64, y:51, z:3},
      {t:'move', id:'k4', x:64, y:53, z:4},
      {t:'label', id:'k', text:'counted through · packets gathered', x:50, y:88} ] },
  { caption: "The packets have <b>transposed</b>: where the aces lay, kings show — and where the kings lay, aces. Same eight cards, tracked the whole way in Exposed view.",
    beats: ["transpose"],
    actions: [
      {t:'move', id:'a1', x:16, y:66, z:1},
      {t:'move', id:'a2', x:30, y:66, z:2},
      {t:'move', id:'a3', x:44, y:66, z:3},
      {t:'move', id:'a4', x:58, y:66, z:4},
      {t:'move', id:'k1', x:16, y:32, z:1},
      {t:'move', id:'k2', x:30, y:32, z:2},
      {t:'move', id:'k3', x:44, y:32, z:3},
      {t:'move', id:'k4', x:58, y:32, z:4},
      {t:'flip', id:'a1', to:'up'},
      {t:'flip', id:'a2', to:'up'},
      {t:'flip', id:'a3', to:'up'},
      {t:'flip', id:'a4', to:'up'},
      {t:'flip', id:'k1', to:'up'},
      {t:'flip', id:'k2', to:'up'},
      {t:'flip', id:'k3', to:'up'},
      {t:'flip', id:'k4', to:'up'},
      {t:'label', id:'k', text:'transposed — aces where the kings lay', x:50, y:88} ] },
  { caption: "Reset. The sequence runs again — counts and mixes, at speed — and the packets cross back. Keep your eyes on the Exposed ghosts: nothing is exchanged, the handling does it all.",
    beats: ["count back"],
    actions: [
      {t:'flip', id:'a1', to:'down'},
      {t:'flip', id:'a2', to:'down'},
      {t:'flip', id:'a3', to:'down'},
      {t:'flip', id:'a4', to:'down'},
      {t:'flip', id:'k1', to:'down'},
      {t:'flip', id:'k2', to:'down'},
      {t:'flip', id:'k3', to:'down'},
      {t:'flip', id:'k4', to:'down'},
      {t:'move', id:'a1', x:64, y:47, z:1},
      {t:'move', id:'a2', x:64, y:49, z:2},
      {t:'move', id:'a3', x:64, y:51, z:3},
      {t:'move', id:'a4', x:64, y:53, z:4},
      {t:'move', id:'k1', x:36, y:47, z:1},
      {t:'move', id:'k2', x:36, y:49, z:2},
      {t:'move', id:'k3', x:36, y:51, z:3},
      {t:'move', id:'k4', x:36, y:53, z:4},
      {t:'label', id:'k', text:'counted back · packets crossed home', x:50, y:88} ] },
  { caption: "Both packets are <b>back to original order</b> — aces above, kings below. High-skill packet magic: speed without clarity is noise, so every phase kept a readable beat.",
    beats: ["reset"],
    climax: true,
    actions: [
      {t:'move', id:'a1', x:16, y:32, z:1},
      {t:'move', id:'a2', x:30, y:32, z:2},
      {t:'move', id:'a3', x:44, y:32, z:3},
      {t:'move', id:'a4', x:58, y:32, z:4},
      {t:'move', id:'k1', x:16, y:66, z:1},
      {t:'move', id:'k2', x:30, y:66, z:2},
      {t:'move', id:'k3', x:44, y:66, z:3},
      {t:'move', id:'k4', x:58, y:66, z:4},
      {t:'flip', id:'a1', to:'up'},
      {t:'flip', id:'a2', to:'up'},
      {t:'flip', id:'a3', to:'up'},
      {t:'flip', id:'a4', to:'up'},
      {t:'flip', id:'k1', to:'up'},
      {t:'flip', id:'k2', to:'up'},
      {t:'flip', id:'k3', to:'up'},
      {t:'flip', id:'k4', to:'up'},
      {t:'hi', id:'a1', on:true},
      {t:'hi', id:'k1', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'reset complete', x:50, y:88} ] }
] };

ANIMS.t164 = { steps: [
  { caption: "Twisted Sisters — four queens in play, all face down. Exposed view knows them all from the start: <b>Q♥, Q♦, Q♠, Q♣</b>.", beats: ["two minds · two queens"], actions: [
    {t:"card", id:"qh", rank:"Q", suit:"♥", x:20, y:48, face:"down", w:11, secret:{rank:"Q", suit:"♥"}},
    {t:"card", id:"qd", rank:"Q", suit:"♦", x:40, y:48, face:"down", w:11, secret:{rank:"Q", suit:"♦"}},
    {t:"card", id:"qs", rank:"Q", suit:"♠", x:60, y:48, face:"down", w:11, secret:{rank:"Q", suit:"♠"}},
    {t:"card", id:"qc", rank:"Q", suit:"♣", x:80, y:48, face:"down", w:11, secret:{rank:"Q", suit:"♣"}},
    {t:"label", id:"k", text:"four queens", x:50, y:88} ] },
  { caption: "Each spectator peeks at — and thinks of — one queen. One thinks of the <b>Q♥</b>; the other, the <b>Q♠</b>. The other two queens are never named.", beats: ["peek"], actions: [
    {t:"move", id:"qh", x:32, y:30},
    {t:"flip", id:"qh", to:"up"},
    {t:"move", id:"qs", x:68, y:30},
    {t:"flip", id:"qs", to:"up"},
    {t:"hi", id:"qh", on:true},
    {t:"hi", id:"qs", on:true},
    {t:"label", id:"k", text:"peeked: Q♥ and Q♠ — one per spectator", x:50, y:88} ] },
  { caption: "The peeked queens go back face down and the packets are isolated. Twists and turns follow — and in Exposed view you can watch the thought-of queens <b>cross into each other's packet</b>, turned right over as they go.", beats: ["twist · transpose"], actions: [
    {t:"hi", id:"qh", on:false},
    {t:"hi", id:"qs", on:false},
    {t:"flip", id:"qh", to:"down"},
    {t:"flip", id:"qs", to:"down"},
    {t:"move", id:"qd", x:36, y:46},
    {t:"move", id:"qs", x:36, y:58, deg:180},
    {t:"move", id:"qc", x:64, y:46},
    {t:"move", id:"qh", x:64, y:58, deg:180},
    {t:"label", id:"k", text:"two isolated packets · twisted and turned", x:50, y:88} ] },
  { caption: "The reveals, kept separated: in one packet, the named Q♠ — reversed. In the other, the named Q♥ — reversed. <b>Both named queens have changed places.</b> A modern classic of packet mentalism.", beats: ["the reveal"], climax: true, actions: [
    {t:"flip", id:"qs", to:"up"},
    {t:"flip", id:"qh", to:"up"},
    {t:"hi", id:"qs", on:true},
    {t:"hi", id:"qh", on:true},
    {t:"label", id:"k", text:"twisted sisters — reversed and transposed", x:50, y:88} ] }
] };

ANIMS.t166 = { steps: [
  { caption: "Three Card Monte — find the <b>money card</b> among three: the queen (the display's own; the article allows a queen or an ace) and two losers. Every time you think you know, you're wrong.",
    beats: ["follow the lady"],
    actions: [
      {t:'card', id:'x1', rank:'7', suit:'♣', x:30, y:50, face:'up', w:12},
      {t:'card', id:'q', rank:'Q', suit:'♥', x:50, y:45, face:'up', w:12},
      {t:'card', id:'x2', rank:'8', suit:'♠', x:70, y:50, face:'up', w:12},
      {t:'hi', id:'q', on:true},
      {t:'label', id:'k', text:'follow the queen', x:50, y:88}
    ]},
  { caption: "Mix. The cards go face-down and the throws begin — with a <b>hype</b> move inside them: two cards handled as one, the top card thrown to where the queen seems to land. A bent corner gives them something to follow. Follow it in Exposed view instead: the queen ends on the <b>right</b>; the bent card in the middle is a loser.",
    beats: ["the mix"],
    actions: [
      {t:'hi', id:'q', on:false},
      {t:'remove', id:'x1'},
      {t:'remove', id:'q'},
      {t:'remove', id:'x2'},
      {t:'card', id:'x1', rank:'7', suit:'♣', x:30, y:50, face:'down', w:12, secret:{rank:'7', suit:'♣'}},
      {t:'card', id:'x2', rank:'8', suit:'♠', x:50, y:50, face:'down', w:12, secret:{rank:'8', suit:'♠'}},
      {t:'card', id:'q', rank:'Q', suit:'♥', x:70, y:50, face:'down', w:12, secret:{rank:'Q', suit:'♥'}},
      {t:'note', id:'bend', text:'bent corner — on the wrong card', x:50, y:28},
      {t:'hand', id:'rh', x:62, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'throw · hype · bent corner', x:50, y:88}
    ]},
  { caption: "Guess. They pick the middle card — the bent one. Of course they do; the whole game is built so that the most-trackable card is the wrong one.",
    beats: ["the guess"],
    actions: [
      {t:'hand', id:'lh', x:50, y:38, side:'left', on:true},
      {t:'label', id:'k', text:'they pick the bent one', x:50, y:88}
    ]},
  { caption: "Wrong — a loser. The queen was on the right all along. <b>Lesson:</b> a street classic and a clinic in misdirection. Teach it as entertainment, and as a warning — never use it to take money.",
    climax: true,
    actions: [
      {t:'flip', id:'x2', to:'up'},
      {t:'flip', id:'q', to:'up'},
      {t:'hi', id:'q', on:true},
      {t:'scale', id:'q', s:1.1},
      {t:'unnote', id:'bend'},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'never where you think', x:50, y:88}
    ]}
]};

ANIMS.t167 = { steps: [
  { caption: "They select a card and it is named aloud: the <b>Ace of Spades</b>. Count the name — A-C-E O-F S-P-A-D-E-S is <b>eleven letters</b>, so the spell needs the card exactly eleven deep.",
    beats: ["the name"],
    actions: [
      {t:'packet', id:'dk', x:50, y:57, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:38, face:'up', w:12, z:4},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'lh', x:36, y:60, side:'left', on:true},
      {t:'note', id:'b', text:'ACE OF SPADES — eleven letters', x:50, y:20},
      {t:'label', id:'k', text:'their card, named', x:50, y:88}
    ]},
  { caption: "The card goes back on top and a <b>double undercut</b> begins: the first cut buries it deep — no longer on top, not yet at spell depth (Exposed).",
    beats: ["double undercut"],
    actions: [
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:50, y:48, z:4},
      {t:'remove', id:'sel'},
      {t:'repacket', id:'dk', cards:[{bulk:15},{rank:'A', suit:'♠', face:'down'},{bulk:36}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'first undercut', x:50, y:88}
    ]},
  { caption: "The second undercut parks it <b>exactly eleventh from the top</b> (Exposed) — spell depth for its own name. Control plus letter count makes the spell automatic.",
    beats: ["double undercut"],
    actions: [
      {t:'repacket', id:'dk', cards:[{bulk:26},{bulk:15},{rank:'A', suit:'♠', face:'down'},{bulk:10}]},
      {t:'label', id:'k', text:'eleven deep', x:50, y:88}
    ]},
  { caption: "Spell the name aloud, dealing <b>one card per letter</b>. Pace the spell — rushing turns a miracle into a procedure.",
    beats: ["the spell"],
    actions: [
      {t:'repacket', id:'dk', cards:[{bulk:41}]},
      {t:'card', id:'L1', x:14, y:68, face:'down', w:8},
      {t:'card', id:'L2', x:21.5, y:68, face:'down', w:8},
      {t:'card', id:'L3', x:29, y:68, face:'down', w:8},
      {t:'card', id:'L4', x:36.5, y:68, face:'down', w:8},
      {t:'card', id:'L5', x:44, y:68, face:'down', w:8},
      {t:'card', id:'L6', x:51.5, y:68, face:'down', w:8},
      {t:'card', id:'L7', x:59, y:68, face:'down', w:8},
      {t:'card', id:'L8', x:66.5, y:68, face:'down', w:8},
      {t:'card', id:'L9', x:74, y:68, face:'down', w:8},
      {t:'card', id:'L10', x:81.5, y:68, face:'down', w:8},
      {t:'card', id:'as', rank:'A', suit:'♠', x:89, y:68, face:'down', w:8, z:3, secret:{rank:'A', suit:'♠'}},
      {t:'note', id:'b', text:'A-C-E · O-F · S-P-A-D-E-S', x:50, y:24},
      {t:'label', id:'k', text:'one card per letter', x:50, y:88}
    ]},
  { caption: "Turn the last letter's card: <b>the Ace of Spades</b>. The control put it at spell depth; the name did the rest.",
    beats: ["last letter"], climax: true,
    actions: [
      {t:'flip', id:'as', to:'up'},
      {t:'hi', id:'as', on:true},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'last letter — their card', x:50, y:88}
    ]}
]};;

ANIMS.t168 = { steps: [
  { caption: "Lie Detector — the spectator thinks of a card and remembers it: the <b>A♠</b>. That is the card you have to find, whatever they tell you next.", beats: ["truth or lie"], actions: [
    {t:"deck", id:"d", x:50, y:54, n:51},
    {t:"card", id:"sel", rank:"A", suit:"♠", x:50, y:30, face:"down", w:12, secret:{rank:"A", suit:"♠"}},
    {t:"flip", id:"sel", to:"up"},
    {t:"hi", id:"sel", on:true},
    {t:"label", id:"k", text:"remember a card · lie if you want", x:50, y:88} ] },
  { caption: "Questions: colour, suit, value. They may answer truthfully or not — <b>sell the freedom to lie</b>. The card goes back into the deck while they decide how honest to be.", beats: ["questions"], actions: [
    {t:"hi", id:"sel", on:false},
    {t:"flip", id:"sel", to:"down"},
    {t:"move", id:"sel", x:50, y:42},
    {t:"hand", id:"rh", x:64, y:36, side:"right", on:true},
    {t:"note", id:"b", text:"colour? suit? value? — lie or tell the truth", x:74, y:70},
    {t:"label", id:"k", text:"lie or truth — it will not matter", x:50, y:88} ] },
  { caption: "Now the process that ignores their answers: elimination, dealing the deck down packet by packet. In Exposed view, watch the A♠ — it <b>rides with the surviving packet</b>, because the process, not the answers, decides where it lands.", beats: ["process · elimination"], actions: [
    {t:"unnote", id:"b"},
    {t:"remove", id:"d"},
    {t:"packet", id:"pa", x:30, y:50, w:13, cards:[{bulk:25}]},
    {t:"packet", id:"pb", x:70, y:50, w:13, cards:[{bulk:26}]},
    {t:"move", id:"sel", x:70, y:38},
    {t:"label", id:"k", text:"a process that works either way", x:50, y:88} ] },
  { caption: "Packet after packet is eliminated, on true answers and false ones alike. One packet remains — and the A♠ is still with it, <b>right on top</b>.", beats: ["process · elimination"], actions: [
    {t:"remove", id:"pa"},
    {t:"move", id:"pb", x:50, y:54},
    {t:"move", id:"sel", x:50, y:42},
    {t:"label", id:"k", text:"one packet left · their card on top", x:50, y:88} ] },
  { caption: "Turn the top card over: the <b>A♠</b> — their card, revealed regardless of honesty. The method never cared whether they lied.", beats: ["the reveal"], climax: true, actions: [
    {t:"flip", id:"sel", to:"up"},
    {t:"hi", id:"sel", on:true},
    {t:"scale", id:"sel", s:1.1},
    {t:"hand", id:"rh", on:false},
    {t:"label", id:"k", text:"found anyway", x:50, y:88} ] }
] };

ANIMS.t169 = { steps: [
  { caption: "Cutting the Aces — four cuts, four aces. This run-through uses the article's first setup method, the <b>ace stack</b>: Exposed view shows an ace waiting at every quarter of the deck — 13, 26, 39 and 52 cards up from the bottom — positions a series of cuts will land on.",
    beats: ["ace stack"],
    actions: [
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:12},{rank:'A', suit:'♣', face:'down'},{bulk:12},{rank:'A', suit:'♦', face:'down'},{bulk:12},{rank:'A', suit:'♥', face:'down'},{bulk:12},{rank:'A', suit:'♠', face:'down'}]},
      {t:'note', id:'b', text:'aces at the quarter points (Exposed)', x:50, y:24},
      {t:'label', id:'k', text:'the stack — cut casually, or let them cut', x:50, y:88}
    ]},
  { caption: "First cuts. Two packets of thirteen come off the top — and each one is <b>topped by an ace</b> (Exposed: the A♠, then the A♥), because the stack put an ace exactly where a quarter-cut lands.",
    beats: ["the cuts"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:12},{rank:'A', suit:'♣', face:'down'},{bulk:12},{rank:'A', suit:'♦', face:'down'}]},
      {t:'packet', id:'p1', x:20, y:52, w:12, cards:[{bulk:12},{rank:'A', suit:'♠', face:'down'}]},
      {t:'packet', id:'p2', x:38, y:52, w:12, cards:[{bulk:12},{rank:'A', suit:'♥', face:'down'}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'two packets — an ace on each (Exposed)', x:50, y:88}
    ]},
  { caption: "The remaining half splits the same way: two more packets of thirteen, the A♦ and the A♣ riding their tops. Four packets, and the freedom of the cuts — yours or theirs — was real; the <b>positions</b> were never free.",
    beats: ["four packets"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'p3', x:58, y:52, w:12, cards:[{bulk:12},{rank:'A', suit:'♦', face:'down'}]},
      {t:'packet', id:'p4', x:78, y:52, w:12, cards:[{bulk:12},{rank:'A', suit:'♣', face:'down'}]},
      {t:'label', id:'k', text:'four packets formed by cuts', x:50, y:88}
    ]},
  { caption: "Turn the top of each packet over — <b>an ace on every one</b>. Four cuts, four aces: a strong, direct opener, and all of it was decided before the first cut was made.",
    climax: true,
    actions: [
      {t:'repacket', id:'p1', cards:[{bulk:12}]},
      {t:'repacket', id:'p2', cards:[{bulk:12}]},
      {t:'repacket', id:'p3', cards:[{bulk:12}]},
      {t:'repacket', id:'p4', cards:[{bulk:12}]},
      {t:'card', id:'a1', rank:'A', suit:'♠', x:20, y:38, face:'up', w:11, z:5},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:38, y:38, face:'up', w:11, z:5},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:58, y:38, face:'up', w:11, z:5},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:78, y:38, face:'up', w:11, z:5},
      {t:'hi', id:'a1', on:true},
      {t:'hi', id:'a2', on:true},
      {t:'hi', id:'a3', on:true},
      {t:'hi', id:'a4', on:true},
      {t:'label', id:'k', text:'four cuts · four aces', x:50, y:88}
    ]}
]};

ANIMS.t170 = { steps: [
  { caption: "Lazy Man's Card Trick — a card is selected and noted: the <b>A♠</b>. From here on, you will do almost none of the work.", beats: ["spectator does the work"], actions: [
    {t:"packet", id:"deck", x:50, y:56, w:14, cards:[{bulk:50}, {rank:"9", suit:"♦", face:"down"}]},
    {t:"card", id:"sel", rank:"A", suit:"♠", x:50, y:28, face:"down", w:12, secret:{rank:"A", suit:"♠"}},
    {t:"flip", id:"sel", to:"up"},
    {t:"hi", id:"sel", on:true},
    {t:"hand", id:"lh", x:36, y:62, side:"left", on:true},
    {t:"label", id:"k", text:"selection noted: A♠", x:50, y:88} ] },
  { caption: "The card is replaced in the deck. As it goes back, <b>glimpse the card directly above it — the 9♦</b>. That is your key: wherever the A♠ hides, it sits right under the 9♦.", beats: ["glimpse", "key card"], actions: [
    {t:"hi", id:"sel", on:false},
    {t:"flip", id:"sel", to:"down"},
    {t:"remove", id:"sel"},
    {t:"repacket", id:"deck", cards:[{bulk:50}, {rank:"A", suit:"♠", face:"down"}, {rank:"9", suit:"♦", face:"down"}]},
    {t:"note", id:"b", text:"glimpse: the card above it is the 9♦ — your key", x:27, y:76},
    {t:"label", id:"k", text:"replaced · key card 9♦ sits directly above it", x:50, y:88} ] },
  { caption: "Hands off. The spectator cuts, shuffles within limits, and deals — you barely touch the deck. In Exposed view the pair never separates: <b>the 9♦ stays directly above the A♠</b> through every complete cut.", beats: ["hands off", "spectator cuts"], actions: [
    {t:"unnote", id:"b"},
    {t:"remove", id:"deck"},
    {t:"packet", id:"ptop", x:32, y:44, w:13, cards:[{bulk:23}, {rank:"A", suit:"♠", face:"down"}, {rank:"9", suit:"♦", face:"down"}]},
    {t:"packet", id:"pbot", x:68, y:44, w:13, cards:[{bulk:27}]},
    {t:"move", id:"pbot", x:50, y:36},
    {t:"move", id:"ptop", x:50, y:60},
    {t:"hand", id:"rh", x:64, y:28, side:"right", on:true},
    {t:"label", id:"k", text:"spectator cuts and deals · the pair stays together", x:50, y:88} ] },
  { caption: "Spread the deck and find your key, the 9♦. The card right after it is theirs: the <b>A♠</b>. Maximum effect, minimum visible skill — they did the work.", beats: ["the find"], climax: true, actions: [
    {t:"hand", id:"rh", on:false},
    {t:"hand", id:"lh", on:false},
    {t:"remove", id:"ptop"},
    {t:"remove", id:"pbot"},
    {t:"spread", x:12, y:48, dx:10.5, w:10, face:"up", cards:[{rank:"5", suit:"♥"}, {rank:"Q", suit:"♦"}, {id:"key", rank:"9", suit:"♦"}, {id:"sel", rank:"A", suit:"♠"}, {rank:"3", suit:"♦"}, {rank:"J", suit:"♣"}, {rank:"8", suit:"♠"}]},
    {t:"hi", id:"key", on:true},
    {t:"hi", id:"sel", on:true},
    {t:"label", id:"k", text:"9♦ = key → A♠ sits right after it", x:50, y:88} ] }
] };

ANIMS.t171 = { steps: [
  { caption: "Card in Lemon — a selection is signed: the <b>A♠</b>, signature and all. A lemon sits in view the whole time, looking ordinary and unprepared.", beats: ["signed · inside the fruit"], actions: [
    {t:"deck", id:"d", x:38, y:54, n:51},
    {t:"card", id:"sel", rank:"A", suit:"♠", x:38, y:32, face:"down", w:12, secret:{rank:"A", suit:"♠"}},
    {t:"flip", id:"sel", to:"up"},
    {t:"hi", id:"sel", on:true},
    {t:"note", id:"lem", text:"🍋 a lemon — in view from the start", x:76, y:36},
    {t:"label", id:"k", text:"signed selection: A♠", x:50, y:88} ] },
  { caption: "The signed card is lost in the deck — and gone from it. It does not go far: under cover it is <b>palmed out</b>. In Exposed view you can see the A♠ riding in the right hand.", beats: ["vanish", "palm"], actions: [
    {t:"hi", id:"sel", on:false},
    {t:"flip", id:"sel", to:"down"},
    {t:"move", id:"sel", x:38, y:44},
    {t:"palm", id:"sel"},
    {t:"hand", id:"rh", x:50, y:38, side:"right", on:true},
    {t:"label", id:"k", text:"gone from the deck — palmed", x:50, y:88} ] },
  { caption: "The lemon that has been in view is cut open. As it opens, the palmed A♠ — <b>folded down small</b> — goes inside it, where no one sees it arrive.", beats: ["fruit · the load"], actions: [
    {t:"move", id:"sel", x:74, y:56},
    {t:"scale", id:"sel", s:0.55},
    {t:"hand", id:"rh", x:82, y:46},
    {t:"label", id:"k", text:"lemon cut open · the card goes in folded", x:50, y:88} ] },
  { caption: "Inside the lemon: a folded card. Open it out — it is the <b>signed A♠</b>, the very card that vanished from the deck. Classic impossible location.", beats: ["the reveal"], climax: true, actions: [
    {t:"unnote", id:"lem"},
    {t:"unpalm", id:"sel"},
    {t:"move", id:"sel", x:60, y:48},
    {t:"scale", id:"sel", s:1.1},
    {t:"flip", id:"sel", to:"up"},
    {t:"hi", id:"sel", on:true},
    {t:"hand", id:"rh", on:false},
    {t:"label", id:"k", text:"signed card in the lemon", x:50, y:88} ] }
] };

ANIMS.t173 = { steps: [
  { caption: "Matching the Cards — four selections: the A♠, K♥, 7♦ and 3♣. Their mates are already waiting in a separate packet — A♣, K♦, 7♠ and 3♥, pre-arranged bottom to top so the deal will pair them automatically. <b>Stack does the work before anything looks magical.</b>",
    beats: ["selections", "mates pre-arranged"],
    actions: [
      {t:"spread", x:10, y:30, count:4, dx:15, face:"up", w:11, prefix:"s", cards:[{rank:"A", suit:"♠"}, {rank:"K", suit:"♥"}, {rank:"7", suit:"♦"}, {rank:"3", suit:"♣"}]},
      {t:"packet", id:"mates", x:72, y:58, w:13, cards:[{rank:"3", suit:"♥", face:"down"}, {rank:"7", suit:"♠", face:"down"}, {rank:"K", suit:"♦", face:"down"}, {rank:"A", suit:"♣", face:"down"}]},
      {t:"deck", id:"d", x:30, y:62, n:44},
      {t:"label", id:"k", text:"four selections · mates stacked and waiting", x:50, y:88} ] },
  { caption: "The four selections are <b>lost in the deck</b> — gathered up and buried at different depths. Sell the chaos of the loss: the deck now honestly holds all four, face down among the rest, while the mate packet waits untouched.",
    beats: ["lost in the deck"],
    actions: [
      {t:"remove", id:"s0"},
      {t:"remove", id:"s1"},
      {t:"remove", id:"s2"},
      {t:"remove", id:"s3"},
      {t:"remove", id:"d"},
      {t:"packet", id:"deckp", x:38, y:52, w:13, cards:[{bulk:12}, {rank:"A", suit:"♠", face:"down"}, {bulk:9}, {rank:"K", suit:"♥", face:"down"}, {bulk:9}, {rank:"7", suit:"♦", face:"down"}, {bulk:9}, {rank:"3", suit:"♣", face:"down"}, {bulk:9}]},
      {t:"label", id:"k", text:"selections buried in the deck", x:50, y:88} ] },
  { caption: "A structured deal pairs them: each selection is dealt out face down and the <b>next mate off the stacked packet goes with it</b> — A♣ onto the first pile, K♦ onto the second, 7♠ onto the third, 3♥ onto the fourth. Clear dealing rules; the pattern does the work. Exposed view shows every face-down identity.",
    beats: ["structured deal"],
    actions: [
      {t:"remove", id:"deckp"},
      {t:"remove", id:"mates"},
      {t:"card", id:"s0", rank:"A", suit:"♠", x:16, y:38, face:"down", w:10, secret:{rank:"A", suit:"♠"}},
      {t:"card", id:"mt0", rank:"A", suit:"♣", x:16, y:58, face:"down", w:10, secret:{rank:"A", suit:"♣"}},
      {t:"card", id:"s1", rank:"K", suit:"♥", x:38, y:38, face:"down", w:10, secret:{rank:"K", suit:"♥"}},
      {t:"card", id:"mt1", rank:"K", suit:"♦", x:38, y:58, face:"down", w:10, secret:{rank:"K", suit:"♦"}},
      {t:"card", id:"s2", rank:"7", suit:"♦", x:60, y:38, face:"down", w:10, secret:{rank:"7", suit:"♦"}},
      {t:"card", id:"mt2", rank:"7", suit:"♠", x:60, y:58, face:"down", w:10, secret:{rank:"7", suit:"♠"}},
      {t:"card", id:"s3", rank:"3", suit:"♣", x:82, y:38, face:"down", w:10, secret:{rank:"3", suit:"♣"}},
      {t:"card", id:"mt3", rank:"3", suit:"♥", x:82, y:58, face:"down", w:10, secret:{rank:"3", suit:"♥"}},
      {t:"label", id:"k", text:"dealt into four pairs, face down", x:50, y:88} ] },
  { caption: "Reveal: turn every pair over. Each selection sits with <b>its true mate — four perfect matches</b>. Order from chaos is the whole effect.",
    beats: ["reveal"],
    climax: true,
    actions: [
      {t:"flip", id:"s0", to:"up"},
      {t:"flip", id:"mt0", to:"up"},
      {t:"flip", id:"s1", to:"up"},
      {t:"flip", id:"mt1", to:"up"},
      {t:"flip", id:"s2", to:"up"},
      {t:"flip", id:"mt2", to:"up"},
      {t:"flip", id:"s3", to:"up"},
      {t:"flip", id:"mt3", to:"up"},
      {t:"hi", id:"s0", on:true},
      {t:"hi", id:"mt0", on:true},
      {t:"hi", id:"s1", on:true},
      {t:"hi", id:"mt1", on:true},
      {t:"hi", id:"s2", on:true},
      {t:"hi", id:"mt2", on:true},
      {t:"hi", id:"s3", on:true},
      {t:"hi", id:"mt3", on:true},
      {t:"label", id:"k", text:"four perfect matches", x:50, y:88} ] }
] };

ANIMS.t174 = { steps: [
  { caption: "Sign. Their card is <b>signed and placed on the table</b> — no card is named in the article, so the signature is the identity: this exact card has to be the one found underneath.",
    beats: ["signed card"],
    actions: [
      {t:'card', id:'c', x:50, y:45, face:'up', w:13},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'signed card — on the table', x:50, y:88}
    ]},
  { caption: "Cover. Your hand comes down over the card, flat and fair. <b>Angles matter</b> — the cover has to look like nothing but a hand resting on a card.",
    beats: ["the cover"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'covered — fairly', x:50, y:88}
    ]},
  { caption: "Under that cover, the card never goes through anything: it is <b>lapped</b> — palmed off the table's edge and carried underneath, as Exposed view shows. The tabletop your hand lifts from will be honestly empty.",
    beats: ["lapping"],
    actions: [
      {t:'palm', id:'c'},
      {t:'move', id:'c', x:50, y:74, z:2},
      {t:'hand', id:'rh', x:58, y:34, side:'right', on:true},
      {t:'label', id:'k', text:'lapped under the table (Exposed)', x:50, y:88}
    ]},
  { caption: "Reveal. Under the table: <b>their signed card</b>, signature and all — apparently pushed through solid wood by a hand that never did anything but rest on it.",
    climax: true,
    actions: [
      {t:'unpalm', id:'c'},
      {t:'scale', id:'c', s:1.1},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'signed card — under the table', x:50, y:88}
    ]}
]};

ANIMS.t175 = { steps: [
  { caption: "One card — <b>signed</b>, so it can't be confused with any other — is returned to the middle of the deck (tracked in Exposed). The whole sequence asks one question: how does it keep getting to the top?",
    beats: ["the selection"],
    actions: [
      {t:'packet', id:'dk', x:50, y:57, w:13, cards:[{bulk:51}]},
      {t:'card', id:'amb', x:50, y:49, face:'down', w:11, z:4, ghost:true},
      {t:'hand', id:'lh', x:36, y:60, side:'left', on:true},
      {t:'hand', id:'rh', x:64, y:60, side:'right', on:true},
      {t:'note', id:'b', text:'signed card — buried mid-deck (Exposed)', x:50, y:24},
      {t:'label', id:'k', text:'the ambitious card', x:50, y:88}
    ]},
  { caption: "Rise one: it is shown on top. A <b>double lift</b> does the showing — the travel itself happened under the control (Exposed).",
    beats: ["double lift"],
    actions: [
      {t:'move', id:'amb', x:50, y:43, z:5},
      {t:'reveal', id:'amb'},
      {t:'flip', id:'amb', to:'up'},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'rise one — on top', x:50, y:88}
    ]},
  { caption: "Again: it goes back into the middle, and this time a <b>pass</b> brings it up. Vary the controls — the same method twice in a row trains their eyes.",
    beats: ["the pass"],
    actions: [
      {t:'flip', id:'amb', to:'down'},
      {t:'remove', id:'amb'},
      {t:'card', id:'amb', x:50, y:49, face:'down', w:11, z:4, ghost:true},
      {t:'move', id:'amb', x:50, y:43, z:5},
      {t:'reveal', id:'amb'},
      {t:'flip', id:'amb', to:'up'},
      {t:'label', id:'k', text:'rise two — a different road', x:50, y:88}
    ]},
  { caption: "Pop-up: buried in the center once more, the card <b>visibly rises out of the middle of the deck</b> — the most honest-looking rise of the set.",
    beats: ["pop-up rise"],
    actions: [
      {t:'flip', id:'amb', to:'down'},
      {t:'remove', id:'amb'},
      {t:'card', id:'amb', x:50, y:52, face:'down', w:11, z:4, ghost:true},
      {t:'move', id:'amb', x:50, y:30, z:6},
      {t:'reveal', id:'amb'},
      {t:'flip', id:'amb', to:'up'},
      {t:'label', id:'k', text:'it rises from the center', x:50, y:88}
    ]},
  { caption: "Finale: the card vanishes from the deck — <b>palmed off</b> (Exposed) — and is produced from the pocket. Top, top again, pop-up, pocket: the classic phase, complete.",
    beats: ["palm","pocket production"], climax: true,
    actions: [
      {t:'flip', id:'amb', to:'down'},
      {t:'palm', id:'amb'},
      {t:'move', id:'amb', x:78, y:56, z:5},
      {t:'hand', id:'rh', x:80, y:48, side:'right', on:true},
      {t:'unpalm', id:'amb'},
      {t:'flip', id:'amb', to:'up'},
      {t:'hi', id:'amb', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'from the pocket', x:50, y:88}
    ]}
]};

ANIMS.t176 = { steps: [
  { caption: "Numeric Force — a freely named number counts to a forced or predicted card. The set is a <b>position force</b>: the K♥ already waits at a known depth — twelfth from the top (Exposed view can see it; the article names no card, so the king is this run-through's example).",
    beats: ["any number"],
    actions: [
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:40},{rank:'K', suit:'♥', face:'down'},{bulk:11}]},
      {t:'note', id:'b', text:'force card: K♥, 12th from the top', x:50, y:24},
      {t:'label', id:'k', text:'name a number', x:50, y:88}
    ]},
  { caption: "They name <b>12</b>. Any number in range would do — the position was fixed before they spoke, and the range is never mentioned as a restriction.",
    beats: ["number named"],
    actions: [
      {t:'note', id:'b', text:'they name 12 — freely', x:50, y:24},
      {t:'hand', id:'rh', x:63, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'their number: 12', x:50, y:88}
    ]},
  { caption: "Count, fairly: eleven cards dealt one at a time into a pile. Nothing is adjusted — the arithmetic was done at the setup, not during the count.",
    beats: ["count"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:40},{rank:'K', suit:'♥', face:'down'}]},
      {t:'packet', id:'pile', x:26, y:52, w:12, cards:[{bulk:11}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'counting — eleven dealt', x:50, y:88}
    ]},
  { caption: "And the twelfth card — the one their number lands on — is the card that was waiting: <b>the K♥</b>. Their number; your card.",
    climax: true,
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:40}]},
      {t:'card', id:'f', rank:'K', suit:'♥', x:26, y:40, face:'down', w:12, z:5},
      {t:'flip', id:'f', to:'up'},
      {t:'hi', id:'f', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'their number · your card', x:50, y:88}
    ]}
]};

ANIMS.t177 = { steps: [
  { caption: "Display. A small packet — four cards, none of them named in the article, so only the count matters — shown <b>clearly in the hands</b>. The vanish is only as strong as this display is fair.",
    beats: ["display"],
    actions: [
      {t:'packet', id:'pkt', x:50, y:50, w:14, cards:[{bulk:4}]},
      {t:'hand', id:'lh', x:38, y:44, side:'left', on:true},
      {t:'hand', id:'rh', x:62, y:44, side:'right', on:true},
      {t:'label', id:'k', text:'four cards — clearly in the hands', x:50, y:88}
    ]},
  { caption: "Vanish. A squeeze for cover, and the whole packet is <b>ditched to the pocket</b> in one motion — Exposed view shows all four cards landing there, ghosted, while the hands stay in sight.",
    beats: ["the ditch"],
    actions: [
      {t:'remove', id:'pkt'},
      {t:'card', id:'d0', x:84, y:68, face:'down', w:11, z:2, ghost:true},
      {t:'card', id:'d1', x:84, y:68, face:'down', w:11, z:3, ghost:true},
      {t:'card', id:'d2', x:84, y:68, face:'down', w:11, z:4, ghost:true},
      {t:'card', id:'d3', x:84, y:68, face:'down', w:11, z:5, ghost:true},
      {t:'hand', id:'rh', x:82, y:58, side:'right', on:true},
      {t:'label', id:'k', text:'ditched to the pocket (Exposed)', x:50, y:88}
    ]},
  { caption: "Empty. Both hands are shown <b>empty</b> — opened, turned, nothing to hide behind. One clean vanish beats three muddy ones, and this one was clean.",
    climax: true,
    actions: [
      {t:'hand', id:'lh', x:40, y:48, side:'left', on:true},
      {t:'hand', id:'rh', x:60, y:48, side:'right', on:true},
      {t:'label', id:'k', text:'hands empty', x:50, y:88}
    ]},
  { caption: "Optional reproduction: the same four cards — the very elements Exposed view watched into the pocket — come back out of it. A vanish with a return ticket, when you want one.",
    beats: ["reproduction"],
    actions: [
      {t:'reveal', id:'d0'},
      {t:'reveal', id:'d1'},
      {t:'reveal', id:'d2'},
      {t:'reveal', id:'d3'},
      {t:'move', id:'d0', x:50, y:48},
      {t:'move', id:'d1', x:50, y:48},
      {t:'move', id:'d2', x:50, y:48},
      {t:'move', id:'d3', x:50, y:48},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'reproduced — from the pocket', x:50, y:88}
    ]}
]};

ANIMS.t178 = { steps: [
  { caption: "Hands off. The deck goes into <b>their hands</b> — with their card, unnamed in the article and tracked here positionally in Exposed view, set at a depth the process controls: a <b>stack / spelling depth</b> makes their own actions land on it.",
    beats: ["hands off","automatic process"],
    actions: [
      {t:'packet', id:'deck', x:48, y:52, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:48, y:44, face:'down', w:11, z:3, ghost:true},
      {t:'hand', id:'lh', x:34, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:62, y:44, side:'right', on:true},
      {t:'label', id:'k', text:'deck in their hands · their card at depth (Exposed)', x:50, y:88}
    ]},
  { caption: "Guide. You only instruct — <b>spell, deal, or cut</b>. Here they deal a pile off the top, following a script that feels like free choices, not a recipe; the tracked card rides the remaining packet exactly where the process put it.",
    beats: ["guided process"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'dealt', x:28, y:50, w:12, cards:[{bulk:10}]},
      {t:'packet', id:'rest', x:66, y:50, w:13, cards:[{bulk:41}]},
      {t:'move', id:'sel', x:66, y:42},
      {t:'label', id:'k', text:'they deal — you only talk', x:50, y:88}
    ]},
  { caption: "They reveal. <b>They turn over their own card</b> — found by their own hands, on your instructions they barely noticed following. Give them the credit: the method stays invisible precisely because the magic was “theirs”.",
    climax: true,
    actions: [
      {t:'reveal', id:'sel'},
      {t:'flip', id:'sel', to:'up'},
      {t:'move', id:'sel', x:50, y:40, z:6},
      {t:'scale', id:'sel', s:1.1},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'they found their own card', x:50, y:88}
    ]}
]};

ANIMS.t179 = { steps: [
  { caption: "Control. Their selection — unnamed in the article, tracked positionally in Exposed view — is controlled to a <b>springy position</b> in the deck, loaded like a catapult and waiting for tension to let go.",
    beats: ["control"],
    actions: [
      {t:'packet', id:'deck', x:46, y:54, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:52, y:46, face:'down', w:11, z:3, ghost:true},
      {t:'hand', id:'lh', x:32, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'selection — at a springy position (Exposed)', x:50, y:88}
    ]},
  { caption: "Release. A riffle, a snap, or a squeeze — and the card <b>leaps out of the deck face-up</b> under its own apparent power, flipping as it flies. Tension and release; a soft deck springs better than a stiff one.",
    beats: ["the release"],
    actions: [
      {t:'reveal', id:'sel'},
      {t:'flip', id:'sel', to:'up'},
      {t:'move', id:'sel', x:50, y:22, z:6},
      {t:'rot', id:'sel', deg:180},
      {t:'label', id:'k', text:'it jumps — face-up', x:50, y:88}
    ]},
  { caption: "Catch. Take it out of the air and <b>hold the visual beat</b> — don't rush past it. Pure visual punctuation after a control, and the pause is what makes it land.",
    climax: true,
    actions: [
      {t:'hand', id:'rh', x:66, y:32, side:'right', on:true},
      {t:'move', id:'sel', x:58, y:36},
      {t:'scale', id:'sel', s:1.08},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'caught — hold the beat', x:50, y:88}
    ]}
]};

ANIMS.t180 = { steps: [
  { caption: "Card Under Box — the card case sits on the table <b>from the start</b>, in view the whole time, and their card is selected. The article names no card, so Exposed view tracks the selection positionally.",
    beats: ["case in play"],
    actions: [
      {t:'packet', id:'deck', x:40, y:54, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:40, y:36, face:'up', w:12, z:5},
      {t:'hi', id:'sel', on:true},
      {t:'card', id:'case', x:72, y:54, face:'down', w:15, z:6},
      {t:'label', id:'k', text:'their card · the case, in view all along', x:50, y:88}
    ]},
  { caption: "Load. Their card is controlled and, on an <b>offbeat</b> — while attention is on the deck — palmed out and slid <b>under the case</b>. The case never looks touched. From here on, never look at it.",
    beats: ["the load"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'palm', id:'sel'},
      {t:'move', id:'sel', x:72, y:54, z:2},
      {t:'hand', id:'rh', x:54, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'loaded under the case (Exposed)', x:50, y:88}
    ]},
  { caption: "Reveal. Their card has vanished from the deck — so lift the case and let them discover it: <b>their card, underneath</b>, under a box that stayed in full view the entire time.",
    climax: true,
    actions: [
      {t:'move', id:'case', x:72, y:28},
      {t:'unpalm', id:'sel'},
      {t:'flip', id:'sel', to:'up'},
      {t:'scale', id:'sel', s:1.08},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'under the box — the whole time', x:50, y:88}
    ]}
]};

ANIMS.t181 = { steps: [
  { caption: "Four Ace Production — the deck looks shuffled, but the four aces have been <b>controlled to the top</b>, in producible positions (Exposed view shows all four riding the stack). Everything after this is presentation.",
    beats: ["aces controlled"],
    actions: [
      {t:'packet', id:'deck', x:50, y:54, w:13, cards:[{bulk:48},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', x:62, y:44, side:'right', on:true},
      {t:'label', id:'k', text:'shuffled deck — aces on top (Exposed)', x:50, y:88}
    ]},
  { caption: "Cut — and the first ace is simply <b>there</b> on the cut: the <b>A♠</b>, produced in one beat. Flash beats a slow deal-through, so no searching, no counting.",
    beats: ["produce one"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:48},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'},{rank:'A', suit:'♥', face:'down'}]},
      {t:'card', id:'a1', rank:'A', suit:'♠', x:20, y:38, face:'up', w:11, z:5},
      {t:'hi', id:'a1', on:true},
      {t:'label', id:'k', text:'one — the A♠, on the cut', x:50, y:88}
    ]},
  { caption: "Spin the second ace out of the deck — the <b>A♥</b>. Vary the production style for each ace, so the sequence builds instead of repeating.",
    beats: ["produce two"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:48},{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♦', face:'down'}]},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:38, y:38, face:'up', w:11, z:5},
      {t:'hi', id:'a2', on:true},
      {t:'rot', id:'a2', deg:-6},
      {t:'label', id:'k', text:'two — the A♥, spun out', x:50, y:88}
    ]},
  { caption: "Pop the third — the <b>A♦</b> — snapped out in a flash. Three different productions, three aces, and the deck has never been opened up or dealt through.",
    beats: ["produce three"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:48},{rank:'A', suit:'♣', face:'down'}]},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:58, y:38, face:'up', w:11, z:5},
      {t:'hi', id:'a3', on:true},
      {t:'scale', id:'a3', s:1.06},
      {t:'label', id:'k', text:'three — the A♦, popped', x:50, y:88}
    ]},
  { caption: "Flip the last one off the top — the <b>A♣</b>. Four productions, four styles, no wasted motion between them.",
    beats: ["produce four"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:48}]},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:78, y:38, face:'up', w:11, z:5},
      {t:'hi', id:'a4', on:true},
      {t:'label', id:'k', text:'four — the A♣, flipped off the top', x:50, y:88}
    ]},
  { caption: "Hold the display: <b>all four aces, face-up</b>, out of a “shuffled” deck in seconds. Setup plus flashy production — that is the whole trick, and the setup did the work before the flash began.",
    climax: true,
    actions: [
      {t:'scale', id:'a1', s:1.08},
      {t:'scale', id:'a2', s:1.08},
      {t:'scale', id:'a3', s:1.08},
      {t:'scale', id:'a4', s:1.08},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'four ace production — hold the display', x:50, y:88}
    ]}
]};

ANIMS.t182 = { steps: [
  { caption: "Triumphant Cut — their card is shown and returned to the deck (the article names no card, so Exposed view tracks it <b>positionally</b>). What follows looks like the deck being hopelessly mixed, face-up into face-down.",
    beats: ["selection returned"],
    actions: [
      {t:'packet', id:'deck', x:50, y:54, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:50, y:30, face:'up', w:12, z:5},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'their card — remembered, returned', x:50, y:88}
    ]},
  { caption: "Mix. Half the deck is turned face-up and shuffled into the face-down half — backs and faces everywhere. Their card goes back <b>reversed</b> against the rest (Exposed: it rides the face-down packet, facing the other way).",
    beats: ["mix"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'remove', id:'deck'},
      {t:'remove', id:'sel'},
      {t:'spread', x:6, y:36, count:25, dx:1.8, w:7.5, face:'up', prefix:'u'},
      {t:'packet', id:'fd', x:50, y:62, w:13, cards:[{bulk:26}]},
      {t:'card', id:'sel', x:50, y:52, face:'down', w:11, z:5, ghost:true},
      {t:'label', id:'k', text:'face-up into face-down — a genuine mess', x:50, y:88}
    ]},
  { caption: "Cut sequence. Theatrical cuts and turns work through the mess — packets lifted, turned, recombined. The cuts are the <b>theater</b>; nothing in them rights anything yet, and their card rides its packet throughout (Exposed).",
    beats: ["cut sequence"],
    actions: [
      {t:'move', id:'fd', x:38, y:62},
      {t:'move', id:'sel', x:38, y:52},
      {t:'hand', id:'rh', x:56, y:34, side:'right', on:true},
      {t:'note', id:'b', text:'cuts and turns — pure theater', x:68, y:22},
      {t:'label', id:'k', text:'cutting through the mess', x:50, y:88}
    ]},
  { caption: "The righting. Inside the final square, a <b>half-pass / block transfer</b> turns the face-up block around as the deck is reassembled — every card ends facing the same way again, except one: their card stays reversed (Exposed: still facing the other way, now inside a uniform deck).",
    beats: ["half-pass"],
    actions: [
      {t:'remove', id:'u0'},
      {t:'remove', id:'u1'},
      {t:'remove', id:'u2'},
      {t:'remove', id:'u3'},
      {t:'remove', id:'u4'},
      {t:'remove', id:'u5'},
      {t:'remove', id:'u6'},
      {t:'remove', id:'u7'},
      {t:'remove', id:'u8'},
      {t:'remove', id:'u9'},
      {t:'remove', id:'u10'},
      {t:'remove', id:'u11'},
      {t:'remove', id:'u12'},
      {t:'remove', id:'u13'},
      {t:'remove', id:'u14'},
      {t:'remove', id:'u15'},
      {t:'remove', id:'u16'},
      {t:'remove', id:'u17'},
      {t:'remove', id:'u18'},
      {t:'remove', id:'u19'},
      {t:'remove', id:'u20'},
      {t:'remove', id:'u21'},
      {t:'remove', id:'u22'},
      {t:'remove', id:'u23'},
      {t:'remove', id:'u24'},
      {t:'remove', id:'fd'},
      {t:'packet', id:'deck', x:50, y:54, w:13, cards:[{bulk:51}]},
      {t:'move', id:'sel', x:50, y:54},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'rights itself — one card stays reversed (Exposed)', x:50, y:88}
    ]},
  { caption: "Spread the deck: <b>every card face-down except one</b> — their selection, face-up in the middle, the only card the triumph left reversed. The mess was real; so was the recovery.",
    climax: true,
    actions: [
      {t:'remove', id:'deck'},
      {t:'spread', x:3, y:54, count:51, dx:1.85, w:7.5, face:'down', prefix:'s'},
      {t:'move', id:'sel', x:50, y:46, z:5},
      {t:'reveal', id:'sel'},
      {t:'flip', id:'sel', to:'up'},
      {t:'scale', id:'sel', s:1.1},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'all face-down — except their card', x:50, y:88}
    ]}
]};

ANIMS.t183 = { steps: [
  { caption: "Prediction Card — before anything begins, a written prediction card is <b>placed aside face-down</b> and never touched again. It names the A♠ — and in Exposed view the deck's top card is the A♠, the one card that will be forced. The earlier the prediction appears, the stronger the hit.",
    beats: ["prediction in view"],
    actions: [
      {t:"note", id:"b", text:"prediction card — written, face down, set aside", x:27, y:32},
      {t:"packet", id:"deckp", x:63, y:52, w:13, cards:[{bulk:51}, {rank:"A", suit:"♠", face:"down"}]},
      {t:"hand", id:"lh", x:49, y:60, side:"left", on:true},
      {t:"label", id:"k", text:"prediction locked in first · A♠ on top", x:50, y:88} ] },
  { caption: "Select. They choose <b>freely</b> from the deck — riffle through and let them touch any back they like. No switches visible; the prediction sits untouched the whole time.",
    beats: ["free selection", "riffle"],
    actions: [
      {t:"fan", x:63, y:54, count:9, spread:64, radius:10, w:9, face:"down", prefix:"rf"},
      {t:"hand", id:"rh", x:78, y:36, side:"right", on:true},
      {t:"label", id:"k", text:"they touch any card they like", x:50, y:88} ] },
  { caption: "The riffle force does the work underneath that freedom: time the riffle so the card under their fingertip at the moment they commit is the <b>top card — the A♠</b>, slipped to their touch. That is the card they take.",
    beats: ["riffle force", "timing"],
    actions: [
      {t:"repacket", id:"deckp", cards:[{bulk:51}]},
      {t:"card", id:"sel", rank:"A", suit:"♠", x:70, y:30, face:"down", w:12, secret:{rank:"A", suit:"♠"}},
      {t:"hand", id:"sh", x:82, y:38, side:"right", on:true, emoji:"☝"},
      {t:"label", id:"k", text:"their touch lands on the force card: A♠", x:50, y:88} ] },
  { caption: "Match. Turn their card over — the A♠ — then finally read the prediction set aside before they chose. <b>Prediction equals selection.</b> Force did the work; the locked-in prediction gets the credit.",
    beats: ["reveal"],
    climax: true,
    actions: [
      {t:"reveal", id:"sel"},
      {t:"flip", id:"sel", to:"up"},
      {t:"move", id:"sel", x:50, y:40},
      {t:"note", id:"b", text:"prediction card reads: “A♠”", x:27, y:32},
      {t:"hi", id:"sel", on:true},
      {t:"hand", id:"sh", on:false},
      {t:"hand", id:"rh", on:false},
      {t:"label", id:"k", text:"prediction matches: A♠", x:50, y:88} ] }
] };

ANIMS.t184 = { steps: [
  { caption: "Back-to-Back — two cards held <b>back to back</b>: the <b>A♠</b> one way, the <b>K♥</b> the other. Keep this display clear before anything changes. Exposed view shows the secret the display hides: each “card” is a <b>double</b> — a second face rides behind each shown face (the 7♣ and the Q♦).",
    beats: ["display"],
    actions: [
      {t:'card', id:'c1', rank:'A', suit:'♠', x:46, y:46, face:'up', w:12, z:4},
      {t:'card', id:'c2', rank:'K', suit:'♥', x:54, y:54, face:'up', w:12, z:4},
      {t:'card', id:'g1', rank:'7', suit:'♣', x:46, y:46, face:'up', w:12, z:3, ghost:true, secret:{rank:'7', suit:'♣'}},
      {t:'card', id:'g2', rank:'Q', suit:'♦', x:54, y:54, face:'up', w:12, z:3, ghost:true, secret:{rank:'Q', suit:'♦'}},
      {t:'hi', id:'c1', on:true},
      {t:'hi', id:'c2', on:true},
      {t:'label', id:'k', text:'two cards back to back — doubles underneath (Exposed)', x:50, y:88}
    ]},
  { caption: "Squeeze. A turn under pressure — and inside the squeeze the pair is secretly <b>turned over as a unit</b>: the doubles roll so their hidden faces come to the outside (Exposed view tracks the roll). The backs the audience sees never change.",
    beats: ["squeeze"],
    actions: [
      {t:'hi', id:'c1', on:false},
      {t:'hi', id:'c2', on:false},
      {t:'move', id:'c1', x:48, y:48},
      {t:'move', id:'c2', x:52, y:52},
      {t:'move', id:'g1', x:48, y:48},
      {t:'move', id:'g2', x:52, y:52},
      {t:'hand', id:'rh', x:62, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'squeezed and turned — in secret (Exposed)', x:50, y:88}
    ]},
  { caption: "Show. Both faces have changed: the <b>7♣</b> and the <b>Q♦</b> — the hidden faces of the doubles, now on the outside (Exposed view: the old A♠ and K♥ are still there, now facing inward). Two cards, back to back, and <b>both</b> are different. Clean display; let it sit.",
    climax: true,
    actions: [
      {t:'move', id:'g1', x:48, y:48},
      {t:'move', id:'g2', x:52, y:52},
      {t:'remove', id:'c1'},
      {t:'remove', id:'c2'},
      {t:'remove', id:'g1'},
      {t:'remove', id:'g2'},
      {t:'card', id:'n1', rank:'7', suit:'♣', x:48, y:48, face:'up', w:12, z:4},
      {t:'card', id:'n2', rank:'Q', suit:'♦', x:52, y:52, face:'up', w:12, z:4},
      {t:'card', id:'h1', rank:'A', suit:'♠', x:48, y:48, face:'up', w:12, z:3, ghost:true, secret:{rank:'A', suit:'♠'}},
      {t:'card', id:'h2', rank:'K', suit:'♥', x:52, y:52, face:'up', w:12, z:3, ghost:true, secret:{rank:'K', suit:'♥'}},
      {t:'hi', id:'n1', on:true},
      {t:'hi', id:'n2', on:true},
      {t:'scale', id:'n1', s:1.08},
      {t:'scale', id:'n2', s:1.08},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'both changed — the doubles did it', x:50, y:88}
    ]}
]};

ANIMS.t185 = { steps: [
  { caption: "Stop Trick — the force card, the A♠, is <b>planted in the deck before you start</b>: sixth card down, right in the range where most people say stop. The deck is a declared packet, so Exposed view can count down to it — five indifferent cards sit on top of it.",
    beats: ["setup", "planted force card"],
    actions: [
      {t:"packet", id:"deckp", x:46, y:50, w:13, cards:[{bulk:46}, {rank:"A", suit:"♠", face:"down"}, {bulk:5}]},
      {t:"hand", id:"rh", x:60, y:42, side:"right", on:true},
      {t:"label", id:"k", text:"A♠ planted sixth down · deal — say stop anytime", x:50, y:88} ] },
  { caption: "Deal cards face down, one at a time, at an even pace. Five indifferent cards come off the top — and now, in Exposed view, <b>the A♠ sits on top of the deck</b>, the very next card out. They still haven't said stop.",
    beats: ["the deal"],
    actions: [
      {t:"repacket", id:"deckp", cards:[{bulk:46}, {rank:"A", suit:"♠", face:"down"}]},
      {t:"spread", x:12, y:68, count:5, dx:10, face:"down", w:9, prefix:"dl"},
      {t:"label", id:"k", text:"five dealt · A♠ now on top, next out", x:50, y:88} ] },
  { caption: "“Stop!” — right on the planted card. The timing force lands because the pace put their stop on the sixth card: deal the top card off as the stopped-at card. Face down, it is <b>the A♠</b> — Exposed view proves it was never any other card.",
    beats: ["timing force", "the stop"],
    actions: [
      {t:"repacket", id:"deckp", cards:[{bulk:46}]},
      {t:"card", id:"stop", rank:"A", suit:"♠", x:74, y:42, face:"down", w:12, secret:{rank:"A", suit:"♠"}},
      {t:"hi", id:"stop", on:true},
      {t:"label", id:"k", text:"stopped here — on the planted card", x:50, y:88} ] },
  { caption: "Never rush after they stop — <b>the pause sells fairness</b>. Then turn the stopped-at card over: the A♠. It is their card, freely stopped at — because the stop was never as free as it felt.",
    beats: ["reveal"],
    climax: true,
    actions: [
      {t:"flip", id:"stop", to:"up"},
      {t:"scale", id:"stop", s:1.1},
      {t:"hand", id:"rh", on:false},
      {t:"label", id:"k", text:"their card at the stop: A♠", x:50, y:88} ] }
] };

ANIMS.t186 = { steps: [
  { caption: "Show aces. The four aces, faces clear — A♠, A♥, A♦, A♣. Their backs are <b>implied uniform</b>: one colour, unremarkable, never actually shown. Remember that; it's the gap the whole trick walks through.",
    beats: ["show aces"],
    actions: [
      {t:'spread', x:20, y:48, dx:18, w:11, face:'up', prefix:'a', cards:[{id:'a0', rank:'A', suit:'♠'},{id:'a1', rank:'A', suit:'♥'},{id:'a2', rank:'A', suit:'♦'},{id:'a3', rank:'A', suit:'♣'}]},
      {t:'label', id:'k', text:'four aces — backs implied uniform', x:50, y:88}
    ]},
  { caption: "One by one — the A♠ first. Turned down and shown: <b>its back has changed colour</b>. The ghost overlay in Exposed view marks the new back — a dual-backer does the work, and each change gets its own beat.",
    beats: ["back change"],
    actions: [
      {t:'flip', id:'a0', to:'down'},
      {t:'card', id:'g0', x:20, y:48, face:'down', w:11, z:6, ghost:true},
      {t:'hi', id:'a0', on:true},
      {t:'label', id:'k', text:'first back changed (Exposed)', x:50, y:88}
    ]},
  { caption: "The A♥ next — turned, shown, <b>changed</b> as well. Shown one at a time, each back reads as an individual impossibility rather than a packet trick.",
    beats: ["back change"],
    actions: [
      {t:'hi', id:'a0', on:false},
      {t:'flip', id:'a1', to:'down'},
      {t:'card', id:'g1', x:38, y:48, face:'down', w:11, z:6, ghost:true},
      {t:'hi', id:'a1', on:true},
      {t:'label', id:'k', text:'second back changed (Exposed)', x:50, y:88}
    ]},
  { caption: "The A♦ — <b>changed</b>. Three down, one to go, and the audience is now checking the last ace's back in their memory. It was never shown either.",
    beats: ["back change"],
    actions: [
      {t:'hi', id:'a1', on:false},
      {t:'flip', id:'a2', to:'down'},
      {t:'card', id:'g2', x:56, y:48, face:'down', w:11, z:6, ghost:true},
      {t:'hi', id:'a2', on:true},
      {t:'label', id:'k', text:'third back changed (Exposed)', x:50, y:88}
    ]},
  { caption: "And the A♣ — <b>changed</b>. Four separate beats, four separate miracles, one small secret underneath them all.",
    beats: ["back change"],
    actions: [
      {t:'hi', id:'a2', on:false},
      {t:'flip', id:'a3', to:'down'},
      {t:'card', id:'g3', x:74, y:48, face:'down', w:11, z:6, ghost:true},
      {t:'hi', id:'a3', on:true},
      {t:'label', id:'k', text:'fourth back changed (Exposed)', x:50, y:88}
    ]},
  { caption: "All four. The <b>new colour is complete</b> — every ace, a back it never started with. Packet switches and dual-backers did the work; the audience's certainty that the backs were ever uniform did the rest.",
    climax: true,
    actions: [
      {t:'hi', id:'a0', on:true},
      {t:'hi', id:'a1', on:true},
      {t:'hi', id:'a2', on:true},
      {t:'label', id:'k', text:'all four — new colour complete', x:50, y:88}
    ]}
]};

ANIMS.t187 = { steps: [
  { caption: "Case in play. The card case sits <b>in view from the start</b> — the flat prop at the right — and their card is selected. No card is named in the article, so the selection is tracked positionally from here on.",
    beats: ["case in play"],
    actions: [
      {t:'packet', id:'deck', x:40, y:54, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:40, y:36, face:'up', w:12, z:5},
      {t:'hi', id:'sel', on:true},
      {t:'card', id:'case', x:72, y:54, face:'down', w:15, z:6},
      {t:'label', id:'k', text:'their card · the case, in view all along', x:50, y:88}
    ]},
  { caption: "Control. Their card is controlled to a <b>stealable position</b> — face down on top of the deck, where a palm can take it without a wasted motion.",
    beats: ["control"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:40, y:44},
      {t:'label', id:'k', text:'controlled — stealable, on top', x:50, y:88}
    ]},
  { caption: "Load. On an <b>offbeat</b>, while attention is on the deck, the card is palmed out and slid <b>under the case</b> — Exposed view shows it arriving underneath the prop that never moved. From here on, never look at the case.",
    beats: ["the load"],
    actions: [
      {t:'palm', id:'sel'},
      {t:'move', id:'sel', x:72, y:54, z:2},
      {t:'hand', id:'rh', x:52, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'loaded under the case (Exposed)', x:50, y:88}
    ]},
  { caption: "Reveal. Their card has vanished from the deck — so lift the case and let them discover it: <b>their card, underneath</b>, under a box that stayed in full view the entire time.",
    climax: true,
    actions: [
      {t:'move', id:'case', x:72, y:28},
      {t:'unpalm', id:'sel'},
      {t:'flip', id:'sel', to:'up'},
      {t:'scale', id:'sel', s:1.08},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'under the box — the whole time', x:50, y:88}
    ]}
]};

ANIMS.t188 = { steps: [
  { caption: "Layout: the four aces in a row — A♠, A♥, A♦ and the leader, A♣. These four cards are the whole plot: three will seem to vanish, and <b>all four end under the leader</b>.",
    beats: ["classic assembly"],
    actions: [
      {t:'deck', id:'d', x:50, y:16, n:52},
      {t:'card', id:'a1', rank:'A', suit:'♠', x:22, y:44, face:'up', w:11},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:40, y:44, face:'up', w:11},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:58, y:44, face:'up', w:11},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:76, y:44, face:'up', w:11},
      {t:'hi', id:'a1', on:true}, {t:'hi', id:'a2', on:true}, {t:'hi', id:'a3', on:true}, {t:'hi', id:'a4', on:true},
      {t:'label', id:'k', text:'four aces · A♣ (right) is the leader', x:50, y:88}
    ]},
  { caption: "Each ace is covered with <b>three cards</b>, making four packets of four. Exposed view shows the truth of every packet: an ace face-down at the bottom, three indifferent cards on top.",
    beats: ["cover"],
    actions: [
      {t:'hi', id:'a1', on:false}, {t:'hi', id:'a2', on:false}, {t:'hi', id:'a3', on:false}, {t:'hi', id:'a4', on:false},
      {t:'remove', id:'a1'}, {t:'remove', id:'a2'}, {t:'remove', id:'a3'}, {t:'remove', id:'a4'}, {t:'remove', id:'d'},
      {t:'packet', id:'p1', x:22, y:48, w:13, cards:[{rank:'A', suit:'♠', face:'down'},{bulk:3}]},
      {t:'packet', id:'p2', x:40, y:48, w:13, cards:[{rank:'A', suit:'♥', face:'down'},{bulk:3}]},
      {t:'packet', id:'p3', x:58, y:48, w:13, cards:[{rank:'A', suit:'♦', face:'down'},{bulk:3}]},
      {t:'packet', id:'p4', x:76, y:48, w:13, cards:[{rank:'A', suit:'♣', face:'down'},{bulk:3}]},
      {t:'label', id:'k', text:'four packets · ace at the bottom of each', x:50, y:88}
    ]},
  { caption: "The secret work — switches and ATFUS handling under cover of the covering and squaring: the three aces are <b>switched out of their packets and gathered into the leader packet</b>. Watch the true counts in Exposed view: three packets drop to three cards, the leader grows to seven.",
    beats: ["switch", "ATFUS"],
    actions: [
      {t:'repacket', id:'p1', cards:[{bulk:3}]},
      {t:'repacket', id:'p2', cards:[{bulk:3}]},
      {t:'repacket', id:'p3', cards:[{bulk:3}]},
      {t:'repacket', id:'p4', cards:[{rank:'A', suit:'♣', face:'down'},{rank:'A', suit:'♠', face:'down'},{rank:'A', suit:'♥', face:'down'},{rank:'A', suit:'♦', face:'down'},{bulk:3}]},
      {t:'hi', id:'p4', on:true},
      {t:'label', id:'k', text:'aces switched into the leader · three packets hold only covers', x:50, y:88}
    ]},
  { caption: "Vanish: one by one the three packets are spread and shown — <b>no ace anywhere</b>, just the three covering cards each, false-counted so the packets still feel full. Pace them: each empty packet should feel more impossible than the last.",
    beats: ["vanish", "false count"],
    actions: [
      {t:'hi', id:'p4', on:false},
      {t:'remove', id:'p1'}, {t:'remove', id:'p2'}, {t:'remove', id:'p3'},
      {t:'spread', x:10, y:26, dx:10, w:9, face:'up', prefix:'v1', cards:[{rank:'2', suit:'♣'},{rank:'9', suit:'♦'},{rank:'5', suit:'♠'}]},
      {t:'spread', x:10, y:48, dx:10, w:9, face:'up', prefix:'v2', cards:[{rank:'3', suit:'♥'},{rank:'8', suit:'♣'},{rank:'Q', suit:'♠'}]},
      {t:'spread', x:10, y:70, dx:10, w:9, face:'up', prefix:'v3', cards:[{rank:'4', suit:'♦'},{rank:'J', suit:'♣'},{rank:'6', suit:'♥'}]},
      {t:'label', id:'k', text:'three packets shown empty of aces', x:50, y:88}
    ]},
  { caption: "Gather: turn over the leader packet. Under its three covering cards sit <b>all four aces</b> — they never vanished, they travelled.",
    beats: ["gather"],
    climax: true,
    actions: [
      {t:'remove', id:'p4'},
      {t:'card', id:'a1', rank:'A', suit:'♠', x:52, y:36, face:'up', w:11},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:66, y:38, face:'up', w:11},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:80, y:36, face:'up', w:11},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:66, y:62, face:'up', w:11},
      {t:'hi', id:'a1', on:true}, {t:'hi', id:'a2', on:true}, {t:'hi', id:'a3', on:true}, {t:'hi', id:'a4', on:true},
      {t:'label', id:'k', text:'all four under the leader', x:50, y:88}
    ]}
] };

ANIMS.t189 = { steps: [
  { caption: "They name any card — say the <b>J♣</b>. Genuinely free choice, no force: the deck is ordinary, and so is the naming. (The article names no example; the jack is this run-through's.)",
    beats: ["name any card"],
    actions: [
      {t:'packet', id:'dk', x:50, y:54, w:13, cards:[{bulk:29},{rank:'J', suit:'♣', face:'down'},{bulk:22}]},
      {t:'hand', id:'rh', x:63, y:44, side:'right', on:true},
      {t:'note', id:'b', text:'free choice — no force', x:50, y:24},
      {t:'label', id:'k', text:'name any card', x:50, y:88}
    ]},
  { caption: "The set. A faro, a cut — an innocent handling — and inside it the named card is <b>located</b>: the deck is split right at the J♣ (Exposed view shows it riding the top of the lower half).",
    beats: ["the set"],
    actions: [
      {t:'remove', id:'dk'},
      {t:'packet', id:'lo', x:45, y:56, w:13, cards:[{bulk:29},{rank:'J', suit:'♣', face:'down'}]},
      {t:'packet', id:'hi2', x:59, y:50, w:13, cards:[{bulk:22}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'located — split at the named card', x:50, y:88}
    ]},
  { caption: "As the halves come back together, the J♣ is <b>secretly reversed</b> — it now sits face-up inside the face-down deck (Exposed view shows its face in the stack). The deck looks, and handles, completely normal.",
    beats: ["hidden reverse"],
    actions: [
      {t:'remove', id:'lo'},
      {t:'remove', id:'hi2'},
      {t:'packet', id:'dk', x:50, y:54, w:13, cards:[{bulk:29},{rank:'J', suit:'♣', face:'up'},{bulk:22}]},
      {t:'label', id:'k', text:'the stranger is set — reversed inside', x:50, y:88}
    ]},
  { caption: "Spread the deck: fifty-one backs, and <b>one card faces the other way</b>. Lift it out — it is the named card, <b>the J♣</b>. Naming must feel unrestricted; procedure kills the miracle, so there is almost no procedure.",
    climax: true,
    actions: [
      {t:'remove', id:'dk'},
      {t:'spread', x:3, y:52, count:52, dx:1.7, w:7, face:'down', prefix:'sp'},
      {t:'remove', id:'sp22'},
      {t:'card', id:'rev', rank:'J', suit:'♣', x:40, y:45, face:'up', w:9, z:5},
      {t:'hi', id:'rev', on:true},
      {t:'scale', id:'rev', s:1.1},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'the named card — the only stranger', x:50, y:88}
    ]}
]};

ANIMS.t190 = { steps: [
  { caption: "Control. The selection is returned to the <b>middle of the deck</b> — tracked here as the separate card in Exposed view. From the front, it's just lost.",
    beats: ["control"],
    actions: [
      {t:'packet', id:'d', x:50, y:56, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:50, y:49, face:'down', w:11, z:4, ghost:true},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:64, y:58, side:'right', on:true},
      {t:'note', id:'b', text:'selection buried mid-deck (Exposed)', x:50, y:26},
      {t:'label', id:'k', text:'selection in the middle', x:50, y:88}
    ]},
  { caption: "Rise. A <b>hidden finger or tilt drives the card upward</b>. From the front it rises by itself — the deck hand never moves.",
    beats: ["the rise"],
    actions: [
      {t:'move', id:'sel', x:50, y:33, z:6},
      {t:'note', id:'b', text:'driven up from behind — the deck hand stays still', x:50, y:26},
      {t:'label', id:'k', text:'rising…', x:50, y:88}
    ]},
  { caption: "Hold. Let it climb slowly and stop on its own. <b>The deck hand stays still</b> — any wobble gives the method away.",
    climax: true,
    actions: [
      {t:'scale', id:'sel', s:1.05},
      {t:'note', id:'b', text:'slow climb, then stillness', x:50, y:26},
      {t:'label', id:'k', text:'it rises on its own', x:50, y:88}
    ]},
  { caption: "Take. Draw the card out and show its face — a strong ambitious phase, because the rise happened in the open.",
    actions: [
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'pop-up complete', x:50, y:88}
    ]}
]};

ANIMS.t191 = { steps: [
  { caption: "False Overhand Shuffle — the overhand action that <b>preserves the full order</b>, or a large stock. The top card is tracked in Exposed view: watch where it ends.",
    beats: ["looks mixed · order kept"],
    actions: [
      {t:'packet', id:'d', x:50, y:54, w:13, cards:[{bulk:51}]},
      {t:'card', id:'top', x:50, y:47, face:'down', w:11, z:4, ghost:true},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'hand', id:'rh', x:62, y:46, side:'right', on:true},
      {t:'note', id:'b', text:'top card tracked (Exposed)', x:50, y:26},
      {t:'label', id:'k', text:'overhand · order intact', x:50, y:88}
    ]},
  { caption: "Run. Peel packets off in a pattern that <b>restores the order</b> instead of mixing it — same sound, same rhythm as a real overhand shuffle.",
    beats: ["the run"],
    actions: [
      {t:'remove', id:'d'},
      {t:'packet', id:'run', x:42, y:44, w:12, cards:[{bulk:26}]},
      {t:'packet', id:'rest', x:58, y:57, w:12, cards:[{bulk:25}]},
      {t:'move', id:'top', x:42, y:37, z:5},
      {t:'note', id:'b', text:'packets peel off — and land back in the same order', x:50, y:24},
      {t:'label', id:'k', text:'running · restoring', x:50, y:88}
    ]},
  { caption: "Milk. Optionally, milk the top and bottom cards together — pulling both ends at once <b>holds the stock</b> while the middle appears to mix.",
    beats: ["the milk"],
    actions: [
      {t:'move', id:'top', x:58, y:50, z:5},
      {t:'move', id:'run', x:46, y:62},
      {t:'note', id:'b', text:'top and bottom milked together — stock held at both ends', x:50, y:24},
      {t:'label', id:'k', text:'milk · stock held', x:50, y:88}
    ]},
  { caption: "Square. It looked and sounded thoroughly shuffled — <b>the order never changed</b>: the tracked card finishes exactly where it started, on top.",
    climax: true,
    actions: [
      {t:'remove', id:'run'},
      {t:'remove', id:'rest'},
      {t:'packet', id:'done', x:50, y:52, w:13, cards:[{bulk:51}]},
      {t:'move', id:'top', x:50, y:45, z:4},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'false overhand complete', x:50, y:88}
    ]}
]};

ANIMS.t192 = { steps: [
  { caption: "Sign. The selection is <b>signed and controlled</b> — and the sealed envelope sits in view the whole time. Familiarity kills suspicion: the envelope should feel ordinary.",
    beats: ["signed · sealed"],
    actions: [
      {t:'packet', id:'d', x:38, y:54, w:13, cards:[{bulk:51}]},
      {t:'card', id:'sel', x:38, y:39, face:'up', w:12},
      {t:'card', id:'env', x:74, y:50, face:'down', w:15},
      {t:'hand', id:'lh', x:29, y:58, side:'left', on:true},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed selection · envelope in view', x:50, y:88}
    ]},
  { caption: "Palm. While attention is elsewhere, the signed card is <b>stolen into the palm</b> — in Audience view the hand reads empty.",
    beats: ["palm"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'palm', id:'sel'},
      {t:'move', id:'sel', x:66, y:42},
      {t:'hand', id:'rh', x:70, y:40, side:'right', on:true},
      {t:'note', id:'b', text:'palmed under cover (Exposed)', x:50, y:26},
      {t:'label', id:'k', text:'stolen while they look elsewhere', x:50, y:88}
    ]},
  { caption: "Load. The envelope is picked up and opened — and in that same action the palmed card <b>slips inside</b>.",
    beats: ["load"],
    actions: [
      {t:'move', id:'sel', x:74, y:48},
      {t:'move', id:'env', x:74, y:52},
      {t:'label', id:'k', text:'loaded as the envelope opens', x:50, y:88}
    ]},
  { caption: "Reveal. The envelope is opened and the card drawn out: <b>their signature</b>, waiting inside a sealed envelope that never left view.",
    climax: true,
    actions: [
      {t:'unpalm', id:'sel'},
      {t:'move', id:'sel', x:74, y:34, z:6},
      {t:'move', id:'env', x:74, y:58},
      {t:'hi', id:'sel', on:true},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'signed card in the envelope', x:50, y:88}
    ]}
]};

ANIMS.t193 = { steps: [
  { caption: "Select: three cards are chosen — the A♠, the K♥ and the 7♦. Remember all three: the routine is finding <b>these exact cards</b>, one at a time, in escalating ways.",
    beats: ["three cards", "three finds"],
    actions: [
      {t:'card', id:'s1', rank:'A', suit:'♠', x:30, y:40, face:'up', w:11},
      {t:'card', id:'s2', rank:'K', suit:'♥', x:50, y:40, face:'up', w:11},
      {t:'card', id:'s3', rank:'7', suit:'♦', x:70, y:40, face:'up', w:11},
      {t:'hi', id:'s1', on:true}, {t:'hi', id:'s2', on:true}, {t:'hi', id:'s3', on:true},
      {t:'label', id:'k', text:'three selections: A♠ · K♥ · 7♦', x:50, y:88}
    ]},
  { caption: "All three are lost in the deck. Exposed view shows where they really lie: the A♠ on <b>top</b>, the K♥ in the <b>middle</b>, the 7♦ <b>deep inside</b> — each find that follows is just collecting a card you already know the address of.",
    beats: ["lost in the deck"],
    actions: [
      {t:'hi', id:'s1', on:false}, {t:'hi', id:'s2', on:false}, {t:'hi', id:'s3', on:false},
      {t:'remove', id:'s1'}, {t:'remove', id:'s2'}, {t:'remove', id:'s3'},
      {t:'packet', id:'d', x:48, y:52, w:14, cards:[{bulk:20},{rank:'7', suit:'♦', face:'down'},{bulk:16},{rank:'K', suit:'♥', face:'down'},{bulk:13},{rank:'A', suit:'♠', face:'down'}]},
      {t:'label', id:'k', text:'lost — but placed: A♠ top · K♥ middle · 7♦ deep', x:50, y:88}
    ]},
  { caption: "Find 1 — the simple production: the first selection is produced straight from the <b>top</b> of the deck. Keep it plain; the routine needs somewhere to grow from.",
    beats: ["find 1", "top production"],
    actions: [
      {t:'repacket', id:'d', cards:[{bulk:20},{rank:'7', suit:'♦', face:'down'},{bulk:16},{rank:'K', suit:'♥', face:'down'},{bulk:13}]},
      {t:'card', id:'s1', rank:'A', suit:'♠', x:18, y:38, face:'up', w:11},
      {t:'hi', id:'s1', on:true},
      {t:'label', id:'k', text:'find 1: A♠ — off the top', x:50, y:88}
    ]},
  { caption: "Find 2 — stronger: the K♥ <b>pops up</b> from the middle of the deck where it was lost. Same deck, same knowledge — a bigger picture. Never repeat a method: the second find must not train their eyes for the third.",
    beats: ["find 2", "pop-up production"],
    actions: [
      {t:'hi', id:'s1', on:false},
      {t:'repacket', id:'d', cards:[{bulk:20},{rank:'7', suit:'♦', face:'down'},{bulk:29}]},
      {t:'card', id:'s2', rank:'K', suit:'♥', x:48, y:20, face:'up', w:11, z:5},
      {t:'hi', id:'s2', on:true},
      {t:'label', id:'k', text:'find 2: K♥ — pops up from the middle', x:50, y:88}
    ]},
  { caption: "Find 3 — the biggest: the last selection isn't in the deck at all as far as the audience is concerned — it is produced from the <b>pocket</b>. All three found, each reveal bigger than the last.",
    beats: ["find 3", "pocket production"],
    climax: true,
    actions: [
      {t:'hi', id:'s2', on:false},
      {t:'repacket', id:'d', cards:[{bulk:49}]},
      {t:'hand', id:'rh', x:72, y:58, side:'right', on:true},
      {t:'card', id:'s3', rank:'7', suit:'♦', x:84, y:66, face:'up', w:11},
      {t:'hi', id:'s1', on:true}, {t:'hi', id:'s2', on:true}, {t:'hi', id:'s3', on:true},
      {t:'label', id:'k', text:'find 3: 7♦ — from the pocket · all three found', x:50, y:88}
    ]}
] };

ANIMS.t194 = { steps: [
  { caption: "Prediction Sandwich — two face-up mates are displayed (the two jacks here; the article allows jokers or mates). Their card has been selected and shown — the article names no card, so it is tracked <b>positionally</b>. A prediction can name it, or the sandwich itself can be the prediction.",
    beats: ["the mates"],
    actions: [
      {t:'packet', id:'deck', x:50, y:62, w:13, cards:[{bulk:49}]},
      {t:'card', id:'j1', rank:'J', suit:'♠', x:40, y:34, face:'up', w:12, z:5},
      {t:'card', id:'j2', rank:'J', suit:'♥', x:60, y:34, face:'up', w:12, z:5},
      {t:'card', id:'sel', x:50, y:48, face:'up', w:11, z:5},
      {t:'hi', id:'j1', on:true},
      {t:'hi', id:'j2', on:true},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'two mates displayed · their card chosen', x:50, y:88}
    ]},
  { caption: "Selection. Their card is returned and <b>lost in the deck</b> — fairly buried, as far as anyone can tell. The mates wait face-up on the table, nowhere near it.",
    beats: ["lost in the deck"],
    actions: [
      {t:'hi', id:'j1', on:false},
      {t:'hi', id:'j2', on:false},
      {t:'hi', id:'sel', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:50, y:52, z:5},
      {t:'label', id:'k', text:'their card — lost in the deck', x:50, y:88}
    ]},
  { caption: "Trap — the load. The mates are picked up and waved over the deck, and in that pass their card is <b>palmed off the deck and loaded between the mates</b> (Exposed view: it rides hidden between the two face-up cards). Nothing is visible in Audience view.",
    beats: ["the load"],
    actions: [
      {t:'palm', id:'sel'},
      {t:'move', id:'sel', x:50, y:36, z:4},
      {t:'move', id:'j1', x:42, y:36},
      {t:'move', id:'j2', x:58, y:36},
      {t:'hand', id:'rh', x:64, y:28, side:'right', on:true},
      {t:'label', id:'k', text:'loaded between the mates (Exposed)', x:50, y:88}
    ]},
  { caption: "Open the mates apart — and trapped between them is <b>their card</b>, caught mid-deck by two cards that never touched it. Clean display of the sandwich: <b>let it sit</b> before you move on.",
    climax: true,
    actions: [
      {t:'unpalm', id:'sel'},
      {t:'flip', id:'sel', to:'up'},
      {t:'move', id:'j1', x:38, y:40},
      {t:'move', id:'j2', x:62, y:40},
      {t:'scale', id:'sel', s:1.1},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'trapped — the sandwich complete', x:50, y:88}
    ]}
]};

ANIMS.t195 = { steps: [
  { caption: "Start. Hold the deck in your right hand, face-down — fingers on the outer short edge, thumb on the inner short edge. <b>A light grip from above</b>, not a tight fist.",
    beats: ["start grip"],
    actions: [
      {t:'packet', id:'rh', x:56, y:46, w:13, cards:[{bulk:52}]},
      {t:'hand', id:'rh', x:64, y:39, side:'right', on:true, grip:'light grip from above'},
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'right hand holds the deck', x:50, y:88}
    ]},
  { caption: "Peel. Bring the left hand up and use the left thumb to <b>drag a small packet — about 5 to 15 cards — off the top</b> into the left palm.",
    beats: ["peel packets"],
    actions: [
      {t:'repacket', id:'rh', cards:[{bulk:44}]},
      {t:'packet', id:'lh', x:40, y:53, w:12, cards:[{bulk:8}]},
      {t:'label', id:'k', text:'peel · drop · peel · drop', x:50, y:88}
    ]},
  { caption: "Repeat. Keep peeling small packets into the left hand until the right hand is empty. <b>Small packets mix better</b> than one big peel — and the order really does change.",
    beats: ["peel packets"],
    actions: [
      {t:'repacket', id:'rh', cards:[{bulk:12}]},
      {t:'repacket', id:'lh', cards:[{bulk:40}]},
      {t:'label', id:'k', text:'almost across', x:50, y:88}
    ]},
  { caption: "Square. Tap the edges neat. One pass is a light mix — <b>do the whole shuffle two or three times</b> for a normal mix. This is a real shuffle; false versions come later.",
    climax: true,
    actions: [
      {t:'remove', id:'rh'},
      {t:'repacket', id:'lh', cards:[{bulk:52}]},
      {t:'move', id:'lh', x:50, y:50},
      {t:'hand', id:'rh', x:64, y:39, side:'right', on:true, grip:''},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'squared — shuffle complete', x:50, y:88}
    ]}
]};

ANIMS.t196 = { steps: [
  { caption: "Split. Place the deck on the table and cut it into <b>two roughly equal halves</b>, side by side, long edges toward you. Aim for even halves — uneven splits still work, but look messier.",
    beats: ["split"],
    actions: [
      {t:'packet', id:'l', x:38, y:52, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'r', x:62, y:52, w:13, cards:[{bulk:26}]},
      {t:'hand', id:'lh', x:30, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:70, y:58, side:'right', on:true},
      {t:'label', id:'k', text:'two equal halves', x:50, y:88}
    ]},
  { caption: "Grip. A <b>thumb on the inner corner</b> of each half — the corners that face each other — with fingers resting on the outer edges to steady the packets.",
    beats: ["grip"],
    actions: [
      {t:'hand', id:'lh', x:33, y:44, side:'left', on:true, grip:'thumb on the inner corner'},
      {t:'hand', id:'rh', x:67, y:44, side:'right', on:true, grip:'thumb on the inner corner'},
      {t:'label', id:'k', text:'thumbs on the inner corners', x:50, y:88}
    ]},
  { caption: "Riffle. Bend the thumbs up slightly so the corners lift, and release the cards in a rapid <b>alternate stream</b> — a few from the left, a few from the right, left, right — weaving together. The weave does not need to be perfectly card-alternating; close is fine.",
    beats: ["riffle"],
    actions: [
      {t:'move', id:'l', x:45, y:50},
      {t:'move', id:'r', x:55, y:50},
      {t:'rot', id:'l', deg:5},
      {t:'rot', id:'r', deg:-5},
      {t:'note', id:'b', text:'left, right, left, right…', x:50, y:24},
      {t:'label', id:'k', text:'riffle — cards interweave', x:50, y:88}
    ]},
  { caption: "Push. When all the cards have fallen, push the two woven halves <b>into each other</b> until they form one block. Pushing before the riffle finishes causes jams and bent corners — wait for the last card.",
    beats: ["push"],
    actions: [
      {t:'remove', id:'l'},
      {t:'remove', id:'r'},
      {t:'packet', id:'d', x:50, y:50, w:13, cards:[{bulk:52}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'pushed flush — one block', x:50, y:88}
    ]},
  { caption: "Square. Neaten the edges — that is <b>one complete riffle shuffle</b>. Two or three in a row is a thorough mix; one, performed while you claim the deck is well mixed, is a tell.",
    climax: true,
    actions: [
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'squared · one complete riffle shuffle', x:50, y:88}
    ]}
]};

ANIMS.t197 = { steps: [
  { caption: "Start. Hold the deck face-down in the right hand <b>from above</b>: thumb on the inner short edge, fingers on the outer short edge.",
    beats: ["start"],
    actions: [
      {t:'packet', id:'rh', x:56, y:46, w:13, cards:[{bulk:52}]},
      {t:'hand', id:'rh', x:63, y:39, side:'right', on:true, grip:'Biddle-style grip'},
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'right hand holds the deck from above', x:50, y:88}
    ]},
  { caption: "Strip. The left hand pinches the top of the deck — thumb on one long edge, fingers on the other — and <b>pulls a small packet down</b> into the left palm.",
    beats: ["strip"],
    actions: [
      {t:'repacket', id:'rh', cards:[{bulk:42}]},
      {t:'packet', id:'lh', x:40, y:54, w:12, cards:[{bulk:10}]},
      {t:'label', id:'k', text:'strip packets into the left hand', x:50, y:88}
    ]},
  { caption: "Repeat. Keep stripping small packets from the right-hand stock onto the left-hand pile until the right hand is empty. <b>Keep the packets small</b> so the order actually changes.",
    beats: ["strip"],
    actions: [
      {t:'repacket', id:'rh', cards:[{bulk:14}]},
      {t:'repacket', id:'lh', cards:[{bulk:38}]},
      {t:'label', id:'k', text:'nearly stripped across', x:50, y:88}
    ]},
  { caption: "Square. The deck is now in the left hand — square it up, and repeat the whole shuffle for a deeper mix. This is only the honest mix: <b>the Hindu force is a different technique</b> that uses the same motion.",
    climax: true,
    actions: [
      {t:'remove', id:'rh'},
      {t:'repacket', id:'lh', cards:[{bulk:52}]},
      {t:'move', id:'lh', x:50, y:50},
      {t:'hand', id:'rh', x:63, y:39, side:'right', on:true, grip:''},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'hindu shuffle complete', x:50, y:88}
    ]}
]};

ANIMS.t198 = { steps: [
  { caption: "Spread. Toss the face-down deck across a clear table space so the cards lie in a <b>loose, messy layer</b> — all fifty-two, backs up. Washing so hard that cards flip face-up ruins the one rule: nothing is exposed.",
    beats: ["spread out"],
    actions: [
      {t:'spread', x:8, y:34, count:18, dx:4.4, w:8, face:'down', prefix:'a'},
      {t:'spread', x:11, y:50, count:17, dx:4.6, w:8, face:'down', prefix:'b'},
      {t:'spread', x:9, y:64, count:17, dx:4.6, w:8, face:'down', prefix:'c'},
      {t:'label', id:'k', text:'cards spread on the table', x:50, y:88}
    ]},
  { caption: "Wash. Both hands flat, push the cards in <b>small circles</b> so they slide over and under each other. Ten to twenty seconds is enough — use a big enough space that nothing cascades off the table.",
    beats: ["wash"],
    actions: [
      {t:'remove', id:'a0'},
      {t:'remove', id:'a1'},
      {t:'remove', id:'a2'},
      {t:'remove', id:'a3'},
      {t:'remove', id:'a4'},
      {t:'remove', id:'a5'},
      {t:'remove', id:'a6'},
      {t:'remove', id:'a7'},
      {t:'remove', id:'a8'},
      {t:'remove', id:'a9'},
      {t:'remove', id:'a10'},
      {t:'remove', id:'a11'},
      {t:'remove', id:'a12'},
      {t:'remove', id:'a13'},
      {t:'remove', id:'a14'},
      {t:'remove', id:'a15'},
      {t:'remove', id:'a16'},
      {t:'remove', id:'a17'},
      {t:'remove', id:'b0'},
      {t:'remove', id:'b1'},
      {t:'remove', id:'b2'},
      {t:'remove', id:'b3'},
      {t:'remove', id:'b4'},
      {t:'remove', id:'b5'},
      {t:'remove', id:'b6'},
      {t:'remove', id:'b7'},
      {t:'remove', id:'b8'},
      {t:'remove', id:'b9'},
      {t:'remove', id:'b10'},
      {t:'remove', id:'b11'},
      {t:'remove', id:'b12'},
      {t:'remove', id:'b13'},
      {t:'remove', id:'b14'},
      {t:'remove', id:'b15'},
      {t:'remove', id:'b16'},
      {t:'remove', id:'c0'},
      {t:'remove', id:'c1'},
      {t:'remove', id:'c2'},
      {t:'remove', id:'c3'},
      {t:'remove', id:'c4'},
      {t:'remove', id:'c5'},
      {t:'remove', id:'c6'},
      {t:'remove', id:'c7'},
      {t:'remove', id:'c8'},
      {t:'remove', id:'c9'},
      {t:'remove', id:'c10'},
      {t:'remove', id:'c11'},
      {t:'remove', id:'c12'},
      {t:'remove', id:'c13'},
      {t:'remove', id:'c14'},
      {t:'remove', id:'c15'},
      {t:'remove', id:'c16'},
      {t:'spread', x:13, y:40, count:18, dx:4.2, w:8, face:'down', prefix:'d'},
      {t:'spread', x:7, y:56, count:17, dx:4.8, w:8, face:'down', prefix:'e'},
      {t:'spread', x:14, y:68, count:17, dx:4.3, w:8, face:'down', prefix:'f'},
      {t:'hand', id:'lh', x:32, y:44, side:'left', on:true},
      {t:'hand', id:'rh', x:68, y:58, side:'right', on:true},
      {t:'label', id:'k', text:'circular wash motion', x:50, y:88}
    ]},
  { caption: "Gather. Scoop the cards into a <b>single pile</b>. Do not try to keep any order — the point is chaos, and gathering in a sneaky order after “randomizing” defeats the whole display of fairness.",
    beats: ["gather"],
    actions: [
      {t:'remove', id:'d0'},
      {t:'remove', id:'d1'},
      {t:'remove', id:'d2'},
      {t:'remove', id:'d3'},
      {t:'remove', id:'d4'},
      {t:'remove', id:'d5'},
      {t:'remove', id:'d6'},
      {t:'remove', id:'d7'},
      {t:'remove', id:'d8'},
      {t:'remove', id:'d9'},
      {t:'remove', id:'d10'},
      {t:'remove', id:'d11'},
      {t:'remove', id:'d12'},
      {t:'remove', id:'d13'},
      {t:'remove', id:'d14'},
      {t:'remove', id:'d15'},
      {t:'remove', id:'d16'},
      {t:'remove', id:'d17'},
      {t:'remove', id:'e0'},
      {t:'remove', id:'e1'},
      {t:'remove', id:'e2'},
      {t:'remove', id:'e3'},
      {t:'remove', id:'e4'},
      {t:'remove', id:'e5'},
      {t:'remove', id:'e6'},
      {t:'remove', id:'e7'},
      {t:'remove', id:'e8'},
      {t:'remove', id:'e9'},
      {t:'remove', id:'e10'},
      {t:'remove', id:'e11'},
      {t:'remove', id:'e12'},
      {t:'remove', id:'e13'},
      {t:'remove', id:'e14'},
      {t:'remove', id:'e15'},
      {t:'remove', id:'e16'},
      {t:'remove', id:'f0'},
      {t:'remove', id:'f1'},
      {t:'remove', id:'f2'},
      {t:'remove', id:'f3'},
      {t:'remove', id:'f4'},
      {t:'remove', id:'f5'},
      {t:'remove', id:'f6'},
      {t:'remove', id:'f7'},
      {t:'remove', id:'f8'},
      {t:'remove', id:'f9'},
      {t:'remove', id:'f10'},
      {t:'remove', id:'f11'},
      {t:'remove', id:'f12'},
      {t:'remove', id:'f13'},
      {t:'remove', id:'f14'},
      {t:'remove', id:'f15'},
      {t:'remove', id:'f16'},
      {t:'packet', id:'pile', x:50, y:50, w:14, cards:[{bulk:52}]},
      {t:'rot', id:'pile', deg:3},
      {t:'label', id:'k', text:'scooped into one pile', x:50, y:88}
    ]},
  { caption: "Square. Tap the pile into a neat deck — done. <b>Maximum fairness, zero sleight</b>: this is the mix to use when you want the audience to believe the shuffle was completely out of your control. A riffle afterward tightens the square, if you want one.",
    climax: true,
    actions: [
      {t:'rot', id:'pile', deg:0},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'gathered and squared', x:50, y:88}
    ]}
]};

ANIMS.t199 = { steps: [
  { caption: "Split the deck and riffle the corners together — stop when the cards are <b>woven but not yet pushed all the way flush</b>.",
    beats: ["the riffle"],
    actions: [
      {t:'packet', id:'l', x:37, y:52, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'r', x:63, y:52, w:13, cards:[{bulk:26}]},
      {t:'label', id:'k', text:'halves woven · not yet squared', x:50, y:88}
    ]},
  { caption: "Grip the woven deck at each end: <b>fingers underneath, thumbs on top</b>, near the short edges.",
    beats: ["grip for the bridge"],
    actions: [
      {t:'remove', id:'l'},
      {t:'remove', id:'r'},
      {t:'packet', id:'wov', x:50, y:50, w:14, cards:[{bulk:52}]},
      {t:'hand', id:'lh', x:29, y:43, side:'left', on:true, grip:'by the ends'},
      {t:'hand', id:'rh', x:71, y:43, side:'right', on:true, grip:'by the ends'},
      {t:'label', id:'k', text:'grip the ends — thumbs on top', x:50, y:88}
    ]},
  { caption: "Press the ends inward and down slightly so the center of the deck <b>bows upward into an arch</b>. Don't force it — forcing the arch creases cards.",
    beats: ["the arch"],
    actions: [
      {t:'note', id:'b', text:'arch: ends in and down, center bows up', x:50, y:24},
      {t:'scale', id:'wov', s:1.07},
      {t:'label', id:'k', text:'the arch', x:50, y:88}
    ]},
  { caption: "Ease the pressure and let the cards <b>spring and cascade into a single squared packet</b> — that cascade is the bridge.",
    beats: ["the bridge"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'scale', id:'wov', s:1},
      {t:'label', id:'k', text:'the bridge cascades shut', x:50, y:88}
    ]},
  { caption: "Tap square — one riffle-plus-bridge is complete. Remember: <b>the bridge does not mix further; the riffle did the mixing</b>. Learn a clean riffle first; soft cards bridge more easily than a stiff new deck.",
    climax: true,
    actions: [
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'one riffle-plus-bridge complete', x:50, y:88}
    ]}
]};

ANIMS.t200 = { steps: [
  { caption: "A series of simple cuts into a pile — fair-looking, and clean packet practice. Two markers in Exposed view: <b>5♠ on top, J♥ on the bottom</b>. Follow them.",
    beats: ["the setup"],
    actions: [
      {t:'packet', id:'src', x:50, y:54, w:14, cards:[{rank:'J', suit:'♥', face:'down'},{bulk:50},{rank:'5', suit:'♠', face:'down'}]},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'5♠ on top · J♥ on the bottom', x:50, y:88}
    ]},
  { caption: "Lift a packet from the top and set it down as a new pile. The 5♠ goes with it — <b>it now tops the pile</b>.",
    beats: ["first cut"],
    actions: [
      {t:'repacket', id:'src', cards:[{rank:'J', suit:'♥', face:'down'},{bulk:36}]},
      {t:'packet', id:'pile', x:28, y:54, w:13, cards:[{bulk:14},{rank:'5', suit:'♠', face:'down'}]},
      {t:'label', id:'k', text:'first packet down as a new pile', x:50, y:88}
    ]},
  { caption: "Cut another packet from what remains and drop it onto the pile. And another — <b>three to five packets looks natural</b>; dozens looks nervous.",
    beats: ["run the cuts"],
    actions: [
      {t:'repacket', id:'src', cards:[{rank:'J', suit:'♥', face:'down'},{bulk:2}]},
      {t:'repacket', id:'pile', cards:[{bulk:14},{rank:'5', suit:'♠', face:'down'},{bulk:15},{bulk:19}]},
      {t:'label', id:'k', text:'packet after packet onto the pile', x:50, y:88}
    ]},
  { caption: "Place whatever is left on top and square. The running cut changed where cards sit — <b>the J♥ rode from the bottom to third from the top</b> — but nothing interleaved the way a riffle would. Say 'cut' if you narrate it; it isn't a deep shuffle.",
    climax: true,
    actions: [
      {t:'remove', id:'src'},
      {t:'repacket', id:'pile', cards:[{bulk:14},{rank:'5', suit:'♠', face:'down'},{bulk:15},{bulk:19},{rank:'J', suit:'♥', face:'down'},{bulk:2}]},
      {t:'move', id:'pile', x:50, y:52},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'J♥: bottom → third from the top', x:50, y:88}
    ]}
]};

ANIMS.t201 = { steps: [
  { caption: "Setup. The force card — the <b>5♦</b> in this run-through; the article names none — is placed <b>tenth from the top</b>, where a count and a small piece of arithmetic must land on it (Exposed view shows its depth).",
    beats: ["the set"],
    actions: [
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:42},{rank:'5', suit:'♦', face:'down'},{bulk:9}]},
      {t:'note', id:'b', text:'force card: 5♦, 10th from the top', x:50, y:24},
      {t:'label', id:'k', text:'force card placed', x:50, y:88}
    ]},
  { caption: "Number. Ask for <b>any number from 10 to 20</b> — and keep the range natural in conversation, so it never feels like a restriction. They name <b>15</b>.",
    beats: ["number named"],
    actions: [
      {t:'note', id:'b', text:'they name 15', x:50, y:24},
      {t:'hand', id:'rh', x:63, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'name a number from 10 to 20', x:50, y:88}
    ]},
  { caption: "Count. Deal fifteen cards fairly into a pile, one at a time. Dealing reverses them — so the force card, tenth down in the deck, now sits <b>sixth from the top of the pile</b>. Hold that number: six.",
    beats: ["count"],
    actions: [
      {t:'repacket', id:'deck', cards:[{bulk:37}]},
      {t:'packet', id:'pile', x:25, y:52, w:12, cards:[{bulk:9},{rank:'5', suit:'♦', face:'down'},{bulk:5}]},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'fifteen dealt — the force rides the pile', x:50, y:88}
    ]},
  { caption: "The finish is a digit sum: 1 + 5 = <b>6</b>. Count six cards off the pile — the first five are nothing, dealt aside…",
    beats: ["digit sum"],
    actions: [
      {t:'repacket', id:'pile', cards:[{bulk:9}]},
      {t:'packet', id:'side', x:25, y:38, w:11, cards:[{bulk:5}]},
      {t:'card', id:'f', rank:'5', suit:'♦', x:48, y:52, face:'down', w:12, z:5, secret:{rank:'5', suit:'♦'}},
      {t:'label', id:'k', text:'count six — the sixth is dealt apart', x:50, y:88}
    ]},
  { caption: "…and the sixth card is the force card — <b>the 5♦</b> — placed before they ever named a number. The count was fair; the arithmetic was loaded.",
    climax: true,
    actions: [
      {t:'flip', id:'f', to:'up'},
      {t:'hi', id:'f', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'forced at their number', x:50, y:88}
    ]}
]};

ANIMS.t202 = { steps: [
  { caption: "Right hand holds the deck from above in <b>Biddle grip</b>. The 10♥ rides on top, named in Exposed view.",
    beats: ["grip"],
    actions: [
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{rank:'4', suit:'♣', face:'down'},{bulk:50},{rank:'10', suit:'♥', face:'down'}]},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true, grip:'Biddle grip'},
      {t:'label', id:'k', text:'right hand · Biddle grip · 10♥ on top', x:50, y:88}
    ]},
  { caption: "Left hand takes the top half with a <b>short swivel action</b> — one continuous motion, no pause at the take.",
    beats: ["swivel"],
    actions: [
      {t:'remove', id:'stk'},
      {t:'packet', id:'up', x:38, y:42, w:13, cards:[{bulk:25},{rank:'10', suit:'♥', face:'down'}]},
      {t:'packet', id:'lo', x:58, y:55, w:13, cards:[{rank:'4', suit:'♣', face:'down'},{bulk:25}]},
      {t:'hand', id:'lh', x:30, y:48, side:'left', on:true},
      {t:'rot', id:'up', deg:-8},
      {t:'label', id:'k', text:'top half swivels into the left hand', x:50, y:88}
    ]},
  { caption: "Complete the cut: the right-hand half goes on top — or hold a break if the routine needs it. A fair-looking cut: <b>the 10♥ now sits mid-deck</b>, on top of the left-hand packet. Hesitation makes it look like a move; match the speed of a real cut.",
    climax: true,
    actions: [
      {t:'rot', id:'up', deg:0},
      {t:'move', id:'lo', x:38, y:41},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'cut complete — 10♥ at the break', x:50, y:88}
    ]}
]};

ANIMS.t203 = { steps: [
  { caption: "Key: glimpse the bottom card as you hold the deck — the K♥. Burn it into memory; that's your <b>key</b>. Their selection, the A♠, has already been chosen and is declared here too, face-up at the side — both identities are on the table from the start.",
    beats: ["glimpse the key"],
    actions: [
      {t:'deck', id:'d', x:50, y:48, n:52},
      {t:'card', id:'key', rank:'K', suit:'♥', x:56, y:62, face:'down', w:11, z:3, secret:{rank:'K', suit:'♥'}},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:84, y:28, face:'up', w:11, z:4},
      {t:'hand', id:'lh', x:36, y:56, side:'left', on:true},
      {t:'hi', id:'key', on:true},
      {t:'label', id:'k', text:'your key: K♥ (the bottom card) · their card: A♠', x:50, y:88}
    ]},
  { caption: "Return: their selection goes back <b>on top</b> of the deck — the A♠ on top, your K♥ key still on the bottom, the full deck between them for now.",
    beats: ["selection returned"],
    actions: [
      {t:'hi', id:'key', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:50, y:34},
      {t:'label', id:'k', text:'A♠ on top · K♥ on the bottom', x:50, y:88}
    ]},
  { caption: "One genuine cut, about halfway. The bottom half comes up and over — and now your key sits <b>directly against their card</b>, the K♥ right on top of the A♠. Exposed view shows both halves declared: nothing was slipped anywhere.",
    beats: ["honest cut"],
    actions: [
      {t:'remove', id:'sel'}, {t:'remove', id:'key'}, {t:'remove', id:'d'},
      {t:'hand', id:'lh', on:false},
      {t:'packet', id:'ptop', x:32, y:42, w:13, cards:[{bulk:25},{rank:'A', suit:'♠', face:'down'}]},
      {t:'packet', id:'pbot', x:68, y:42, w:13, cards:[{rank:'K', suit:'♥', face:'down'},{bulk:25}]},
      {t:'move', id:'pbot', x:50, y:32},
      {t:'move', id:'ptop', x:50, y:58},
      {t:'label', id:'k', text:'key card now sits right against theirs', x:50, y:88}
    ]},
  { caption: "Search: spread the deck face-up and scan for the key. There it is — the K♥. Don't stare at it: <b>scan the spread as if you are still deciding</b>.",
    beats: ["spread and search"],
    actions: [
      {t:'remove', id:'ptop'}, {t:'remove', id:'pbot'},
      {t:'spread', x:12, y:48, dx:10.5, w:10, face:'up', cards:[{rank:'5', suit:'♦'},{rank:'Q', suit:'♣'},{rank:'9', suit:'♠'},{id:'key', rank:'K', suit:'♥'},{id:'sel', rank:'A', suit:'♠'},{rank:'3', suit:'♣'},{rank:'J', suit:'♦'}]},
      {t:'hi', id:'key', on:true},
      {t:'label', id:'k', text:'found the key: K♥ — keep scanning, don\u2019t stare', x:50, y:88}
    ]},
  { caption: "Reveal: the card right next to the key is theirs. Name it — <b>the A♠</b>. You never found their card at all; you found your own, and it pointed.",
    beats: ["the reveal"],
    climax: true,
    actions: [
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'K♥ = key → A♠ sits right next to it', x:50, y:88}
    ]}
] };

ANIMS.t204 = { steps: [
  { caption: "Load. The force card — the article names none, so it is tracked positionally — starts <b>under the deck</b>, loaded before the spread even begins. Exposed view shows it riding underneath.",
    beats: ["the load"],
    actions: [
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:51}]},
      {t:'card', id:'f', x:50, y:62, face:'down', w:11, z:1, ghost:true},
      {t:'label', id:'k', text:'force card under the deck (Exposed)', x:50, y:88}
    ]},
  { caption: "Spread. Offer a free-looking spread of the whole deck and invite them to <b>touch any card</b>. Underneath, the force card travels with the spread (Exposed) — it is already waiting near the middle, where touches land.",
    beats: ["spread"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'spread', x:4, y:50, count:51, dx:1.8, w:7.5, face:'down', prefix:'s'},
      {t:'move', id:'f', x:46, y:59},
      {t:'hand', id:'rh', x:60, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'touch any card', x:50, y:88}
    ]},
  { caption: "Align. Their finger comes down — and as you square the spread, the squaring <b>slides the force card to exactly their touch</b>. It ends as the top card of the squared deck, at their fingertip (Exposed).",
    beats: ["align"],
    actions: [
      {t:'remove', id:'s0'},
      {t:'remove', id:'s1'},
      {t:'remove', id:'s2'},
      {t:'remove', id:'s3'},
      {t:'remove', id:'s4'},
      {t:'remove', id:'s5'},
      {t:'remove', id:'s6'},
      {t:'remove', id:'s7'},
      {t:'remove', id:'s8'},
      {t:'remove', id:'s9'},
      {t:'remove', id:'s10'},
      {t:'remove', id:'s11'},
      {t:'remove', id:'s12'},
      {t:'remove', id:'s13'},
      {t:'remove', id:'s14'},
      {t:'remove', id:'s15'},
      {t:'remove', id:'s16'},
      {t:'remove', id:'s17'},
      {t:'remove', id:'s18'},
      {t:'remove', id:'s19'},
      {t:'remove', id:'s20'},
      {t:'remove', id:'s21'},
      {t:'remove', id:'s22'},
      {t:'remove', id:'s23'},
      {t:'remove', id:'s24'},
      {t:'remove', id:'s25'},
      {t:'remove', id:'s26'},
      {t:'remove', id:'s27'},
      {t:'remove', id:'s28'},
      {t:'remove', id:'s29'},
      {t:'remove', id:'s30'},
      {t:'remove', id:'s31'},
      {t:'remove', id:'s32'},
      {t:'remove', id:'s33'},
      {t:'remove', id:'s34'},
      {t:'remove', id:'s35'},
      {t:'remove', id:'s36'},
      {t:'remove', id:'s37'},
      {t:'remove', id:'s38'},
      {t:'remove', id:'s39'},
      {t:'remove', id:'s40'},
      {t:'remove', id:'s41'},
      {t:'remove', id:'s42'},
      {t:'remove', id:'s43'},
      {t:'remove', id:'s44'},
      {t:'remove', id:'s45'},
      {t:'remove', id:'s46'},
      {t:'remove', id:'s47'},
      {t:'remove', id:'s48'},
      {t:'remove', id:'s49'},
      {t:'remove', id:'s50'},
      {t:'packet', id:'deck', x:50, y:54, w:13, cards:[{bulk:51}]},
      {t:'move', id:'f', x:50, y:43, z:5},
      {t:'label', id:'k', text:'squared — the force is the touched card', x:50, y:88}
    ]},
  { caption: "Commit. Hand it over <b>without adjusting twice</b> — the card they touched, dealt straight to them. Speed without accuracy looks guilty; this was accurate before they reached out.",
    climax: true,
    actions: [
      {t:'reveal', id:'f'},
      {t:'move', id:'f', x:50, y:34},
      {t:'scale', id:'f', s:1.08},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'forced card taken', x:50, y:88}
    ]}
]};

ANIMS.t205 = { steps: [
  { caption: "A table cut into packets that restacks to the original order — looks mixed, stays stacked. The <b>A♣ rides on top</b>, named in Exposed view.",
    beats: ["looks cut"],
    actions: [
      {t:'packet', id:'stk', x:50, y:54, w:14, cards:[{rank:'9', suit:'♦', face:'down'},{bulk:50},{rank:'A', suit:'♣', face:'down'}]},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'deck on the table · A♣ on top', x:50, y:88}
    ]},
  { caption: "Divide the deck into two or three table packets.",
    beats: ["the cut"],
    actions: [
      {t:'remove', id:'stk'},
      {t:'packet', id:'pa', x:31, y:50, w:12, cards:[{bulk:16},{rank:'A', suit:'♣', face:'down'}]},
      {t:'packet', id:'pb', x:50, y:45, w:12, cards:[{bulk:17}]},
      {t:'packet', id:'pc', x:69, y:50, w:12, cards:[{rank:'9', suit:'♦', face:'down'},{bulk:17}]},
      {t:'label', id:'k', text:'two or three table packets', x:50, y:88}
    ]},
  { caption: "Pick them up in an order that <b>restores the original sequence</b> — bottom packet first, top packet last.",
    beats: ["restack"],
    actions: [
      {t:'move', id:'pc', x:50, y:57},
      {t:'move', id:'pb', x:50, y:48},
      {t:'move', id:'pa', x:50, y:39},
      {t:'label', id:'k', text:'restacking to the original sequence', x:50, y:88}
    ]},
  { caption: "Square. The deck looks cut; <b>the order is unchanged</b> — a stack or a top stock survives. Do it mid-sentence: the more unimportant it looks, the better it plays.",
    climax: true,
    actions: [
      {t:'remove', id:'pa'},
      {t:'remove', id:'pb'},
      {t:'remove', id:'pc'},
      {t:'packet', id:'stk', x:50, y:50, w:14, cards:[{rank:'9', suit:'♦', face:'down'},{bulk:50},{rank:'A', suit:'♣', face:'down'}]},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'order retained — A♣ on top', x:50, y:88}
    ]}
]};

ANIMS.t206 = { steps: [
  { caption: "Deck face-down in the left palm, squared. <b>Index at the outer-left corner</b>, on the far short edge.",
    beats: ["the foundation grip"],
    actions: [
      {t:'packet', id:'dk', x:48, y:52, w:14, cards:[{bulk:51},{rank:'7', suit:'♠', face:'down'}]},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true, grip:"mechanic's grip"},
      {t:'note', id:'b', text:'index: outer-left corner', x:50, y:24},
      {t:'label', id:'k', text:"mechanic's grip — the dealing grip", x:50, y:88}
    ]},
  { caption: "Middle and ring fingers run along the <b>right long edge</b> — they steady the deck from the side.",
    beats: ["finger roles"],
    actions: [
      {t:'note', id:'b', text:'middle & ring: right long edge', x:50, y:24},
      {t:'label', id:'k', text:'steady from the side', x:50, y:88}
    ]},
  { caption: "The <b>pinky rests at the inner short edge</b> — the end nearest you. Later, it's the finger that holds a break without a visible gap.",
    beats: ["finger roles"],
    actions: [
      {t:'note', id:'b', text:'pinky: inner short edge — holds a break later', x:50, y:24},
      {t:'label', id:'k', text:'pinky at the inner end', x:50, y:88}
    ]},
  { caption: "The <b>thumb lies along the left long edge</b>, ready to push cards off the top. If the deck screams or the edges flare, the grip is too tight.",
    beats: ["finger roles"],
    actions: [
      {t:'note', id:'b', text:'thumb: left long edge — pushes cards off', x:50, y:24},
      {t:'label', id:'k', text:'thumb ready to push off', x:50, y:88}
    ]},
  { caption: "The thumb pushes off <b>a single card, clean</b> — the 7♠, named in Exposed view. Almost every deal, count, and many flourishes start from this grip: control, not decoration.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'repacket', id:'dk', cards:[{bulk:51}]},
      {t:'card', id:'po', rank:'7', suit:'♠', x:60, y:44, face:'down', w:11, secret:{rank:'7', suit:'♠'}},
      {t:'hi', id:'po', on:true},
      {t:'label', id:'k', text:'one card, pushed off clean', x:50, y:88}
    ]}
]};

ANIMS.t207 = { steps: [
  { caption: "Holding the deck from above by the short ends: <b>thumb at the inner short end</b>. Required for Elmsley-style counts, many cuts, and packet displays.",
    beats: ["overhand grip"],
    actions: [
      {t:'packet', id:'dk', x:50, y:50, w:14, cards:[{bulk:52}]},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true, grip:'Biddle grip'},
      {t:'label', id:'k', text:'Biddle grip · held by the ends', x:50, y:88}
    ]},
  { caption: "Fingers at the outer short end — middle and ring do most of the work. <b>Light pressure: the deck hangs from the ends</b>; do not squeeze the long sides.",
    beats: ["light"],
    actions: [
      {t:'note', id:'b', text:'fingers at the outer end — middle & ring work', x:50, y:26},
      {t:'label', id:'k', text:'ends, not sides', x:50, y:88}
    ]},
  { caption: "Now switch: the left hand takes the deck in <b>mechanic's grip</b>. Practice moving from one grip to the other in a single beat.",
    beats: ["the switch"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true, grip:"mechanic's grip"},
      {t:'move', id:'dk', x:46, y:54},
      {t:'hand', id:'rh', on:false, grip:''},
      {t:'label', id:'k', text:"mechanic's grip", x:50, y:88}
    ]},
  { caption: "And back to Biddle in the same beat. <b>Lift, square, and set down without noise</b> — noisy grips are tight grips; soft hands look skilled.",
    climax: true,
    actions: [
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true, grip:'Biddle grip'},
      {t:'move', id:'dk', x:50, y:46},
      {t:'hand', id:'lh', on:false, grip:''},
      {t:'label', id:'k', text:'Biddle grip ready', x:50, y:88}
    ]}
]};

ANIMS.t208 = { steps: [
  { caption: "Arch. Hold the deck at <b>both short ends and bow it</b>, high in one hand.",
    beats: ["cascade"],
    actions: [
      {t:'packet', id:'d', x:50, y:38, w:14, cards:[{bulk:52}]},
      {t:'scale', id:'d', s:1.08},
      {t:'hand', id:'rh', x:59, y:30, side:'right', on:true},
      {t:'hand', id:'lh', x:44, y:64, side:'left', on:true},
      {t:'label', id:'k', text:'deck arched between the hands', x:50, y:88}
    ]},
  { caption: "Aim. The lower hand waits ready to catch at chest height. <b>Broken-in cards waterfall more easily</b> than a stiff brick.",
    beats: ["aim"],
    actions: [
      {t:'hand', id:'lh', x:46, y:66, side:'left', on:true},
      {t:'note', id:'b', text:'catch hand ready below', x:50, y:20},
      {t:'label', id:'k', text:'aim the fall', x:50, y:88}
    ]},
  { caption: "Release. Ease the pressure so the cards <b>stream, not explode</b> — an even ribbon, no clumps.",
    beats: ["release"],
    actions: [
      {t:'repacket', id:'d', cards:[{bulk:18}]},
      {t:'spread', x:45, y:44, count:20, dx:0.4, dy:0.95, w:7, face:'down', prefix:'w'},
      {t:'packet', id:'catch', x:48, y:70, w:12, cards:[{bulk:14}]},
      {t:'label', id:'k', text:'cards falling in a stream', x:50, y:88}
    ]},
  { caption: "Catch & square. Gather the fall and neaten it <b>without a second fumble</b> — the quiet square after is part of the flourish.",
    climax: true,
    actions: [
      {t:'remove', id:'w0'},
      {t:'remove', id:'w1'},
      {t:'remove', id:'w2'},
      {t:'remove', id:'w3'},
      {t:'remove', id:'w4'},
      {t:'remove', id:'w5'},
      {t:'remove', id:'w6'},
      {t:'remove', id:'w7'},
      {t:'remove', id:'w8'},
      {t:'remove', id:'w9'},
      {t:'remove', id:'w10'},
      {t:'remove', id:'w11'},
      {t:'remove', id:'w12'},
      {t:'remove', id:'w13'},
      {t:'remove', id:'w14'},
      {t:'remove', id:'w15'},
      {t:'remove', id:'w16'},
      {t:'remove', id:'w17'},
      {t:'remove', id:'w18'},
      {t:'remove', id:'w19'},
      {t:'remove', id:'d'},
      {t:'repacket', id:'catch', cards:[{bulk:52}]},
      {t:'move', id:'catch', x:50, y:50},
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'waterfall complete', x:50, y:88}
    ]}
]};

ANIMS.t209 = { steps: [
  { caption: "Divide the deck into two roughly equal packets in the hands. The markers in Exposed view: <b>7♦ on top, 3♠ on the bottom</b>.",
    beats: ["split"],
    actions: [
      {t:'packet', id:'a', x:40, y:45, w:13, cards:[{bulk:25},{rank:'7', suit:'♦', face:'down'}]},
      {t:'packet', id:'b', x:60, y:55, w:13, cards:[{rank:'3', suit:'♠', face:'down'},{bulk:25}]},
      {t:'hand', id:'lh', x:32, y:50, side:'left', on:true},
      {t:'hand', id:'rh', x:68, y:50, side:'right', on:true},
      {t:'label', id:'k', text:'two roughly equal packets', x:50, y:88}
    ]},
  { caption: "Swing the packets apart in a <b>scissor motion</b> — keep them parallel so the move reads as intentional, not fumbled.",
    beats: ["open"],
    actions: [
      {t:'rot', id:'a', deg:-18},
      {t:'rot', id:'b', deg:18},
      {t:'move', id:'a', x:33, y:40},
      {t:'move', id:'b', x:67, y:60},
      {t:'label', id:'k', text:'packets open like scissors', x:50, y:88}
    ]},
  { caption: "Bring them together. Open and close should feel like <b>one gesture</b> — no pause before the close.",
    beats: ["close"],
    actions: [
      {t:'rot', id:'a', deg:0},
      {t:'rot', id:'b', deg:0},
      {t:'move', id:'a', x:50, y:43},
      {t:'move', id:'b', x:50, y:58},
      {t:'label', id:'k', text:'closing…', x:50, y:88}
    ]},
  { caption: "Square. Even packet sizes, a smooth open–close, and the 7♦ is back on top — <b>simple, readable, great in combos</b>.",
    climax: true,
    actions: [
      {t:'remove', id:'a'},
      {t:'remove', id:'b'},
      {t:'packet', id:'done', x:50, y:50, w:14, cards:[{rank:'3', suit:'♠', face:'down'},{bulk:50},{rank:'7', suit:'♦', face:'down'}]},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'one deck · open–close in one rhythm', x:50, y:88}
    ]}
]};

ANIMS.t210 = { steps: [
  { caption: "Table. A squared deck near one side of your workspace.",
    beats: ["table spread"],
    actions: [
      {t:'packet', id:'d', x:24, y:50, w:12, cards:[{bulk:52}]},
      {t:'hand', id:'rh', x:31, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'deck on the table', x:50, y:88}
    ]},
  { caption: "Push. The fingers drive the top cards into <b>one long line</b> across the table — or a soft arc.",
    beats: ["spread"],
    actions: [
      {t:'remove', id:'d'},
      {t:'spread', x:8, y:50, count:26, dx:1.55, w:8, face:'down', prefix:'s'},
      {t:'spread', x:49, y:50, count:26, dx:1.5, w:8, face:'down', prefix:'r'},
      {t:'hand', id:'rh', x:88, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'one smooth push', x:50, y:88}
    ]},
  { caption: "Evenness. Walk the line and even it out: <b>consistent gaps</b> — avoid clumps and barren stretches.",
    beats: ["evenness"],
    actions: [
      {t:'note', id:'b', text:'consistent gaps — no clumps, no barren stretches', x:50, y:28},
      {t:'label', id:'k', text:'even spacing', x:50, y:88}
    ]},
  { caption: "Close. Scoop or ribbon-close back into a deck. <b>A clean spread makes every later production look more professional.</b>",
    climax: true,
    actions: [
      {t:'remove', id:'s0'},
      {t:'remove', id:'s1'},
      {t:'remove', id:'s2'},
      {t:'remove', id:'s3'},
      {t:'remove', id:'s4'},
      {t:'remove', id:'s5'},
      {t:'remove', id:'s6'},
      {t:'remove', id:'s7'},
      {t:'remove', id:'s8'},
      {t:'remove', id:'s9'},
      {t:'remove', id:'s10'},
      {t:'remove', id:'s11'},
      {t:'remove', id:'s12'},
      {t:'remove', id:'s13'},
      {t:'remove', id:'s14'},
      {t:'remove', id:'s15'},
      {t:'remove', id:'s16'},
      {t:'remove', id:'s17'},
      {t:'remove', id:'s18'},
      {t:'remove', id:'s19'},
      {t:'remove', id:'s20'},
      {t:'remove', id:'s21'},
      {t:'remove', id:'s22'},
      {t:'remove', id:'s23'},
      {t:'remove', id:'s24'},
      {t:'remove', id:'s25'},
      {t:'remove', id:'r0'},
      {t:'remove', id:'r1'},
      {t:'remove', id:'r2'},
      {t:'remove', id:'r3'},
      {t:'remove', id:'r4'},
      {t:'remove', id:'r5'},
      {t:'remove', id:'r6'},
      {t:'remove', id:'r7'},
      {t:'remove', id:'r8'},
      {t:'remove', id:'r9'},
      {t:'remove', id:'r10'},
      {t:'remove', id:'r11'},
      {t:'remove', id:'r12'},
      {t:'remove', id:'r13'},
      {t:'remove', id:'r14'},
      {t:'remove', id:'r15'},
      {t:'remove', id:'r16'},
      {t:'remove', id:'r17'},
      {t:'remove', id:'r18'},
      {t:'remove', id:'r19'},
      {t:'remove', id:'r20'},
      {t:'remove', id:'r21'},
      {t:'remove', id:'r22'},
      {t:'remove', id:'r23'},
      {t:'remove', id:'r24'},
      {t:'remove', id:'r25'},
      {t:'packet', id:'done', x:50, y:50, w:12, cards:[{bulk:52}]},
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'LePaul spread complete', x:50, y:88}
    ]}
]};

ANIMS.t211 = { steps: [
  { caption: "Lift the top half in the right hand. The <b>K♥ rides on top</b> of it, named in Exposed view.",
    beats: ["split"],
    actions: [
      {t:'packet', id:'base', x:50, y:58, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'top', x:50, y:39, w:13, cards:[{bulk:25},{rank:'K', suit:'♥', face:'down'}]},
      {t:'hand', id:'rh', x:58, y:32, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:56, side:'left', on:true},
      {t:'label', id:'k', text:'top half lifted · K♥ on top', x:50, y:88}
    ]},
  { caption: "Release with a <b>horizontal twist</b> so the packet rotates as it falls.",
    beats: ["the spin"],
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'rot', id:'top', deg:170},
      {t:'move', id:'top', x:55, y:33},
      {t:'label', id:'k', text:'released with a twist', x:50, y:88}
    ]},
  { caption: "It settles, spinning, above the lower half — <b>one clean rotation, centered</b>. Low and controlled beats high and lucky.",
    beats: ["land"],
    actions: [
      {t:'rot', id:'top', deg:350},
      {t:'move', id:'top', x:50, y:47},
      {t:'label', id:'k', text:'it settles', x:50, y:88}
    ]},
  { caption: "The lower half completes on top of the spun packet and you square at once: <b>a real cut under the spin — the K♥ ends in the middle</b>. Practice over a bed or soft surface while learning the spin.",
    climax: true,
    actions: [
      {t:'remove', id:'top'},
      {t:'remove', id:'base'},
      {t:'packet', id:'done', x:50, y:50, w:14, cards:[{bulk:25},{rank:'K', suit:'♥', face:'down'},{bulk:26}]},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'cut complete — K♥ in the middle', x:50, y:88}
    ]}
]};

ANIMS.t212 = { steps: [
  { caption: "Start. The deck sits in the left hand; the right index is ready to drive the fan.",
    beats: ["build the fan"],
    actions: [
      {t:'packet', id:'d', x:46, y:54, w:12, cards:[{bulk:52}]},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:61, y:47, side:'right', on:true},
      {t:'label', id:'k', text:'deck in the left hand', x:50, y:88}
    ]},
  { caption: "Drive. The right index pushes the cards into an <b>even arc</b>, faces toward the audience.",
    beats: ["arc"],
    actions: [
      {t:'remove', id:'d'},
      {t:'fan', x:50, y:56, count:52, spread:140, startDeg:-70, radius:15, w:8, face:'up', prefix:'f'},
      {t:'label', id:'k', text:'even index-driven fan', x:50, y:88}
    ]},
  { caption: "Shape. Adjust until the indexes are readable and the spacing is uniform. <b>Readable beats huge</b> — a tight clean fan outperforms a messy wide one.",
    beats: ["shape"],
    actions: [
      {t:'note', id:'b', text:'indexes readable · spacing uniform', x:50, y:24},
      {t:'label', id:'k', text:'readable, not just wide', x:50, y:88}
    ]},
  { caption: "Close. A soft squeeze brings the fan back to a squared deck — <b>quietly</b>.",
    climax: true,
    actions: [
      {t:'remove', id:'f0'},
      {t:'remove', id:'f1'},
      {t:'remove', id:'f2'},
      {t:'remove', id:'f3'},
      {t:'remove', id:'f4'},
      {t:'remove', id:'f5'},
      {t:'remove', id:'f6'},
      {t:'remove', id:'f7'},
      {t:'remove', id:'f8'},
      {t:'remove', id:'f9'},
      {t:'remove', id:'f10'},
      {t:'remove', id:'f11'},
      {t:'remove', id:'f12'},
      {t:'remove', id:'f13'},
      {t:'remove', id:'f14'},
      {t:'remove', id:'f15'},
      {t:'remove', id:'f16'},
      {t:'remove', id:'f17'},
      {t:'remove', id:'f18'},
      {t:'remove', id:'f19'},
      {t:'remove', id:'f20'},
      {t:'remove', id:'f21'},
      {t:'remove', id:'f22'},
      {t:'remove', id:'f23'},
      {t:'remove', id:'f24'},
      {t:'remove', id:'f25'},
      {t:'remove', id:'f26'},
      {t:'remove', id:'f27'},
      {t:'remove', id:'f28'},
      {t:'remove', id:'f29'},
      {t:'remove', id:'f30'},
      {t:'remove', id:'f31'},
      {t:'remove', id:'f32'},
      {t:'remove', id:'f33'},
      {t:'remove', id:'f34'},
      {t:'remove', id:'f35'},
      {t:'remove', id:'f36'},
      {t:'remove', id:'f37'},
      {t:'remove', id:'f38'},
      {t:'remove', id:'f39'},
      {t:'remove', id:'f40'},
      {t:'remove', id:'f41'},
      {t:'remove', id:'f42'},
      {t:'remove', id:'f43'},
      {t:'remove', id:'f44'},
      {t:'remove', id:'f45'},
      {t:'remove', id:'f46'},
      {t:'remove', id:'f47'},
      {t:'remove', id:'f48'},
      {t:'remove', id:'f49'},
      {t:'remove', id:'f50'},
      {t:'remove', id:'f51'},
      {t:'packet', id:'done', x:50, y:52, w:12, cards:[{bulk:52}]},
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'index fan complete', x:50, y:88}
    ]}
]};

ANIMS.t213 = { steps: [
  { caption: "Keep the deck in a clear zone in front of your chest — the <b>camera box</b>. If you cannot see the cards, neither can your audience.",
    beats: ["frame"],
    actions: [
      {t:'packet', id:'dk', x:50, y:46, w:14, cards:[{bulk:52}]},
      {t:'hand', id:'lh', x:39, y:53, side:'left', on:true},
      {t:'hand', id:'rh', x:61, y:53, side:'right', on:true},
      {t:'note', id:'b', text:'camera box: chest height, centered', x:50, y:22},
      {t:'label', id:'k', text:'deck in the camera box', x:50, y:88}
    ]},
  { caption: "<b>Elbows softly in</b> — avoid winging out and hiding the cards behind your arms.",
    beats: ["elbows in"],
    actions: [
      {t:'hand', id:'lh', x:43, y:54, side:'left', on:true},
      {t:'hand', id:'rh', x:57, y:54, side:'right', on:true},
      {t:'label', id:'k', text:'elbows softly in', x:50, y:88}
    ]},
  { caption: "<b>Shoulders relaxed</b> — tension shows up in the hands. Eyes glance at the deck when needed; don't stare the whole time.",
    beats: ["quiet body"],
    actions: [
      {t:'note', id:'b', text:'shoulders down · eyes glance, don\'t stare', x:50, y:22},
      {t:'label', id:'k', text:'quiet upper body', x:50, y:88}
    ]},
  { caption: "Film from the audience view and check the frame. <b>Slow is readable</b> — speed comes after clean positions.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'hi', id:'dk', on:true},
      {t:'label', id:'k', text:'posture first · then speed', x:50, y:88}
    ]}
]};

ANIMS.t214 = { steps: [
  { caption: "Bow — hold the deck by its <b>short ends</b> and apply even pressure until it arches.",
    beats: ["bow"],
    actions: [
      {t:'deck', id:'d', x:50, y:46, n:52},
      {t:'hand', id:'lh', x:38, y:52, side:'left', on:true},
      {t:'hand', id:'rh', x:62, y:52, side:'right', on:true},
      {t:'label', id:'k', text:'short ends · even pressure', x:50, y:88}
    ]},
  { caption: "Release — the cards <b>stream</b> across to the receiving hand in one continuous ribbon, not a spray.",
    beats: ["stream"],
    actions: [
      {t:'move', id:'d', x:61, y:48},
      {t:'scale', id:'d', s:1.04},
      {t:'label', id:'k', text:'continuous stream', x:50, y:88}
    ]},
  { caption: "Catch — <b>soft palm</b>, never a slap; the stream lands and settles into the hand.",
    beats: ["catch"],
    actions: [
      {t:'scale', id:'d', s:1},
      {t:'label', id:'k', text:'soft catch', x:50, y:88}
    ]},
  { caption: "Square — <b>end clean</b> before the next move. If cards spray, use less pressure and less distance.",
    climax: true,
    actions: [
      {t:'move', id:'d', x:50, y:50},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'squared · ready', x:50, y:88}
    ]}
]};

ANIMS.t215 = { steps: [
  { caption: "Pick one move — <b>only one focus</b> per block: a waterfall, a cut, one thing.",
    beats: ["deliberate practice"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'one move only', x:50, y:88}
    ]},
  { caption: "Slow reps — correct positions <b>before tempo</b>; form first, always.",
    beats: ["slow reps"],
    actions: [
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'move', id:'d', x:50, y:47},
      {t:'label', id:'k', text:'form first', x:50, y:88}
    ]},
  { caption: "Tempo — speed up <b>only while form holds</b>; the moment it breaks, slow back down.",
    beats: ["tempo"],
    actions: [
      {t:'move', id:'d', x:50, y:50},
      {t:'scale', id:'d', s:1.03},
      {t:'label', id:'k', text:'speed while form holds', x:50, y:88}
    ]},
  { caption: "Film — record the last set <b>from the front</b>; your eyes forgive, the lens doesn't.",
    beats: ["film"],
    actions: [
      {t:'note', id:'b', text:'record the last set — from the front', x:50, y:26},
      {t:'label', id:'k', text:'film the last set', x:50, y:88}
    ]},
  { caption: "Combo — end with <b>two or three moves you already own</b>. Ten clean minutes beat thirty messy ones.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'move', id:'d', x:50, y:52},
      {t:'scale', id:'d', s:1},
      {t:'label', id:'k', text:'owned combo · session done', x:50, y:88}
    ]}
]};

ANIMS.t216 = { steps: [
  { caption: "Grip. The deck is bowed in <b>one hand</b>, short ends under control. Build this only after the two-handed spring is solid.",
    beats: ["one hand · stream"],
    actions: [
      {t:'packet', id:'d', x:50, y:42, w:13, cards:[{bulk:52}]},
      {t:'scale', id:'d', s:1.08},
      {t:'hand', id:'rh', x:59, y:34, side:'right', on:true},
      {t:'label', id:'k', text:'deck bowed in one hand', x:50, y:88}
    ]},
  { caption: "Arc. Aim the stream into a soft catch zone or onto the table. <b>Film from the side</b> to judge the arc.",
    beats: ["aim"],
    actions: [
      {t:'note', id:'b', text:'aim at a soft catch zone', x:50, y:22},
      {t:'label', id:'k', text:'aim the stream', x:50, y:88}
    ]},
  { caption: "Release. Ease the pressure evenly so the cards <b>flow instead of explode</b>. Soft, broken-in cards help.",
    beats: ["release"],
    actions: [
      {t:'repacket', id:'d', cards:[{bulk:16}]},
      {t:'spread', x:38, y:48, count:22, dx:0.5, dy:0.85, w:7, face:'down', prefix:'s'},
      {t:'packet', id:'pile', x:52, y:70, w:12, cards:[{bulk:14}]},
      {t:'label', id:'k', text:'stream from one hand', x:50, y:88}
    ]},
  { caption: "Finish. Catch or pile the stream, then square <b>without a second recovery move</b>.",
    climax: true,
    actions: [
      {t:'remove', id:'s0'},
      {t:'remove', id:'s1'},
      {t:'remove', id:'s2'},
      {t:'remove', id:'s3'},
      {t:'remove', id:'s4'},
      {t:'remove', id:'s5'},
      {t:'remove', id:'s6'},
      {t:'remove', id:'s7'},
      {t:'remove', id:'s8'},
      {t:'remove', id:'s9'},
      {t:'remove', id:'s10'},
      {t:'remove', id:'s11'},
      {t:'remove', id:'s12'},
      {t:'remove', id:'s13'},
      {t:'remove', id:'s14'},
      {t:'remove', id:'s15'},
      {t:'remove', id:'s16'},
      {t:'remove', id:'s17'},
      {t:'remove', id:'s18'},
      {t:'remove', id:'s19'},
      {t:'remove', id:'s20'},
      {t:'remove', id:'s21'},
      {t:'remove', id:'d'},
      {t:'repacket', id:'pile', cards:[{bulk:52}]},
      {t:'move', id:'pile', x:50, y:50},
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'one-hand spring complete', x:50, y:88}
    ]}
]};

ANIMS.t217 = { steps: [
  { caption: "Sybil Cut, advanced timing — multi-packet finger choreography, and an honest one: there is <b>no secret</b> in this scene, only transfers to master. Split the deck into <b>five clear packets</b>.",
    beats: ["split"],
    actions: [
      {t:'packet', id:'p1', x:18, y:50, w:11, cards:[{bulk:10}]},
      {t:'packet', id:'p2', x:34, y:44, w:11, cards:[{bulk:10}]},
      {t:'packet', id:'p3', x:50, y:50, w:11, cards:[{bulk:10}]},
      {t:'packet', id:'p4', x:66, y:44, w:11, cards:[{bulk:11}]},
      {t:'packet', id:'p5', x:82, y:50, w:11, cards:[{bulk:11}]},
      {t:'hand', id:'lh', x:26, y:60, side:'left', on:true},
      {t:'hand', id:'rh', x:74, y:34, side:'right', on:true},
      {t:'label', id:'k', text:'five packets — clear and separate', x:50, y:88}
    ]},
  { caption: "Isolate. Learn <b>each transfer on its own</b> before linking anything — one packet's path, repeated, until it needs no looking at. Collisions mean the previous transfer is not finished; that is information, not failure.",
    beats: ["isolated transfers"],
    actions: [
      {t:'move', id:'p2', x:42, y:38},
      {t:'note', id:'b', text:'one transfer — in isolation', x:50, y:22},
      {t:'label', id:'k', text:'isolate each transfer first', x:50, y:88}
    ]},
  { caption: "Path. Memorize the <b>transfer order</b> — say it out loud if needed — and run the full path at <b>metronome-slow</b> tempo until collisions stop. Packet integrity first; the path is the lesson.",
    beats: ["the path"],
    actions: [
      {t:'move', id:'p1', x:26, y:56},
      {t:'move', id:'p2', x:34, y:44},
      {t:'move', id:'p3', x:58, y:56},
      {t:'move', id:'p4', x:74, y:38},
      {t:'move', id:'p5', x:88, y:56},
      {t:'unnote', id:'b'},
      {t:'note', id:'b', text:'metronome-slow — no collisions', x:50, y:22},
      {t:'label', id:'k', text:'the path, at tempo zero', x:50, y:88}
    ]},
  { caption: "Link. Only now raise the speed, transfer chained to transfer, <b>keeping packet integrity</b> at every join. If a collision appears, the tempo went up before the link was ready — slow down.",
    beats: ["link"],
    actions: [
      {t:'move', id:'p1', x:18, y:50},
      {t:'move', id:'p3', x:50, y:50},
      {t:'move', id:'p5', x:82, y:50},
      {t:'rot', id:'p2', deg:6},
      {t:'rot', id:'p4', deg:-6},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'linked — speed comes last', x:50, y:88}
    ]},
  { caption: "Assemble and square — a <b>stable final square</b> is the mastery mark: every packet home, no collisions, tempo earned rather than grabbed. Precision over speed, every time.",
    climax: true,
    actions: [
      {t:'remove', id:'p1'},
      {t:'remove', id:'p2'},
      {t:'remove', id:'p3'},
      {t:'remove', id:'p4'},
      {t:'remove', id:'p5'},
      {t:'packet', id:'deck', x:50, y:51, w:13, cards:[{bulk:52}]},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'sybil sequence complete — squared clean', x:50, y:88}
    ]}
]};

ANIMS.t218 = { steps: [
  { caption: "Lift — the <b>upper packet clears the deck</b>; the lower half waits below.",
    beats: ["lift"],
    actions: [
      {t:'packet', id:'base', x:50, y:56, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'rev', x:50, y:34, w:13, cards:[{bulk:26}]},
      {t:'hand', id:'rh', x:60, y:30, side:'right', on:true},
      {t:'label', id:'k', text:'upper packet clear', x:50, y:88}
    ]},
  { caption: "Axis — choose a <b>stable rotation line</b> and commit to it; the spin is just the result.",
    beats: ["axis"],
    actions: [
      {t:'rot', id:'rev', deg:12},
      {t:'label', id:'k', text:'stable axis', x:50, y:88}
    ]},
  { caption: "One <b>clean revolution</b> — a full 360° with the faces readable as it turns.",
    beats: ["full revolution"],
    actions: [
      {t:'rot', id:'rev', deg:360},
      {t:'label', id:'k', text:'360°', x:50, y:88}
    ]},
  { caption: "Land — square on the lower half <b>without a bounce recovery</b>. One clean revolution beats a triple spin that dies on landing.",
    climax: true,
    actions: [
      {t:'move', id:'rev', x:50, y:53},
      {t:'repacket', id:'base', cards:[{bulk:52}]},
      {t:'remove', id:'rev'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'landed · square', x:50, y:88}
    ]}
]};

ANIMS.t219 = { steps: [
  { caption: "Load. Build <b>light tension in the fingers</b> — energy, then stillness. The packet is ready to travel.",
    beats: ["snap"],
    actions: [
      {t:'packet', id:'d', x:50, y:52, w:13, cards:[{bulk:52}]},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'hand', id:'rh', x:62, y:44, side:'right', on:true},
      {t:'label', id:'k', text:'build tension · release', x:50, y:88}
    ]},
  { caption: "Path. The packet travels a <b>short, decided line</b> — no wandering, no wind-up.",
    beats: ["release"],
    actions: [
      {t:'repacket', id:'d', cards:[{bulk:30}]},
      {t:'move', id:'d', x:40, y:57},
      {t:'packet', id:'shot', x:67, y:37, w:12, cards:[{bulk:22}]},
      {t:'label', id:'k', text:'snap into place', x:50, y:88}
    ]},
  { caption: "Stop. The packet arrives with a <b>crisp halt</b> — the snap is optional; the stop is not. No bounce, no fix-up.",
    beats: ["stop"],
    actions: [
      {t:'move', id:'shot', x:57, y:45},
      {t:'hi', id:'shot', on:true},
      {t:'label', id:'k', text:'crisp halt', x:50, y:88}
    ]},
  { caption: "Hold. <b>Stillness after impact sells the move.</b> Practice silent accuracy first; add the snap only when the stop is reliable.",
    climax: true,
    actions: [
      {t:'hi', id:'shot', on:false},
      {t:'remove', id:'shot'},
      {t:'repacket', id:'d', cards:[{bulk:52}]},
      {t:'move', id:'d', x:50, y:50},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'hot shot complete', x:50, y:88}
    ]}
]};

ANIMS.t220 = { steps: [
  { caption: "Balance. A single card, <b>centered over its support point</b> — a fingertip, or the deck's surface.",
    beats: ["spin"],
    actions: [
      {t:'card', id:'c', x:50, y:44, face:'up', w:13},
      {t:'hand', id:'rh', x:58, y:53, side:'right', on:true},
      {t:'note', id:'b', text:'centered over the support point', x:50, y:24},
      {t:'label', id:'k', text:'card balanced for spin', x:50, y:88}
    ]},
  { caption: "Flick. A <b>small impulse</b> starts the spin — then let the rotation continue on its own.",
    beats: ["flick"],
    actions: [
      {t:'rot', id:'c', deg:350},
      {t:'label', id:'k', text:'spin · stabilize', x:50, y:88}
    ]},
  { caption: "Stabilize. Keep the center <b>from walking off the pad</b> — a wandering center is a dying spin.",
    beats: ["stabilize"],
    actions: [
      {t:'rot', id:'c', deg:700},
      {t:'note', id:'b', text:'keep the center over the pad', x:50, y:24},
      {t:'label', id:'k', text:'steady center', x:50, y:88}
    ]},
  { caption: "Catch. Take the card cleanly into the next action. A pad spin is <b>punctuation between heavier cuts</b>, not a long solo.",
    climax: true,
    actions: [
      {t:'move', id:'c', x:56, y:50},
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'pad spin complete', x:50, y:88}
    ]}
]};

ANIMS.t221 = { steps: [
  { caption: "Two-Hand Sybil Intro — a short multi-packet sequence shared across <b>both hands</b>, the bridge into full sybil work. No secret here either: just a path to memorize. Split into <b>three packets</b>, each with a clear owner — left hand, bridge, right hand.",
    beats: ["split"],
    actions: [
      {t:'packet', id:'a', x:30, y:52, w:12, cards:[{bulk:17}]},
      {t:'packet', id:'b', x:50, y:46, w:12, cards:[{bulk:17}]},
      {t:'packet', id:'c', x:70, y:52, w:12, cards:[{bulk:18}]},
      {t:'hand', id:'lh', x:22, y:60, side:'left', on:true},
      {t:'hand', id:'rh', x:78, y:60, side:'right', on:true},
      {t:'label', id:'k', text:'three packets — clear ownership per hand', x:50, y:88}
    ]},
  { caption: "Name. <b>Call each transfer out loud</b> as you make it — A across, B over, C home — until the path is automatic and your mouth can stop. Naming is not a crutch; it is how the path gets memorized.",
    beats: ["name the path"],
    actions: [
      {t:'move', id:'a', x:42, y:56},
      {t:'note', id:'b', text:'“A across… B over… C home…”', x:50, y:24},
      {t:'label', id:'k', text:'call each transfer until it is automatic', x:50, y:88}
    ]},
  { caption: "Metronome. <b>One transfer per beat</b> — no rushing the easy ones, no pausing on the hard ones. Square nothing yet: the deck only comes together at the end of the phrase. If you cannot do it slowly, you cannot do it quickly.",
    beats: ["metronome"],
    actions: [
      {t:'move', id:'a', x:30, y:52},
      {t:'move', id:'b', x:58, y:42},
      {t:'move', id:'c', x:62, y:56},
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'one transfer per beat', x:50, y:88}
    ]},
  { caption: "Assemble. Square the deck <b>only at the end of the phrase</b> — a clean final deck, arrived at on the beat. That tidy ending is the whole bridge: from here, the full sybil is just more packets on the same discipline.",
    climax: true,
    actions: [
      {t:'remove', id:'a'},
      {t:'remove', id:'b'},
      {t:'remove', id:'c'},
      {t:'packet', id:'deck', x:50, y:51, w:13, cards:[{bulk:52}]},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'two-hand sequence complete — squared at the end', x:50, y:88}
    ]}
]};

ANIMS.t222 = { steps: [
  { caption: "Ends — pressure <b>only on the short ends</b>; the long edges stay out of it.",
    beats: ["ends"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:39, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:61, y:55, side:'right', on:true},
      {t:'label', id:'k', text:'short ends only', x:50, y:88}
    ]},
  { caption: "Compress — <b>even, brief, reversible</b>; the deck squeezes down between the hands.",
    beats: ["compress"],
    actions: [
      {t:'scale', id:'d', s:0.88},
      {t:'label', id:'k', text:'compress', x:50, y:88}
    ]},
  { caption: "Expand — a <b>soft return</b> to full thickness; never force a permanent warp into the cards.",
    beats: ["expand"],
    actions: [
      {t:'scale', id:'d', s:1},
      {t:'label', id:'k', text:'full thickness again', x:50, y:88}
    ]},
  { caption: "Link — flow <b>straight into the next cut</b> or display; the squeeze is a connector, not a destination.",
    climax: true,
    actions: [
      {t:'move', id:'d', x:50, y:46},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'into the next move', x:50, y:88}
    ]}
]};

ANIMS.t223 = { steps: [
  { caption: "Shape — build a <b>readable L</b> with the two packets; geometry first, speed second.",
    beats: ["L shape"],
    actions: [
      {t:'packet', id:'vert', x:43, y:40, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'horiz', x:58, y:57, w:13, cards:[{bulk:26}]},
      {t:'rot', id:'horiz', deg:90},
      {t:'hand', id:'rh', x:56, y:34, side:'right', on:true},
      {t:'label', id:'k', text:'the L', x:50, y:88}
    ]},
  { caption: "Hold — <b>one beat</b> so the shape registers. If the audience can't see the L, the move is only a messy cut.",
    beats: ["hold"],
    actions: [
      {t:'label', id:'k', text:'hold the beat', x:50, y:88}
    ]},
  { caption: "Close — resolve into a <b>single squared deck</b>. Later, link L-cuts into longer phrases.",
    climax: true,
    actions: [
      {t:'move', id:'vert', x:50, y:48},
      {t:'move', id:'horiz', x:50, y:48},
      {t:'rot', id:'horiz', deg:0},
      {t:'repacket', id:'vert', cards:[{bulk:52}]},
      {t:'remove', id:'horiz'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'resolved · squared', x:50, y:88}
    ]}
]};

ANIMS.t224 = { steps: [
  { caption: "Pick three — only moves with a <b>high success rate</b>; a failed 'almost learned' middle kills the phrase.",
    beats: ["combo"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'A · B · C — owned moves', x:50, y:88}
    ]},
  { caption: "Transitions — practise <b>A→B and B→C</b> more than the middles; the joins are where phrases die.",
    beats: ["transitions"],
    actions: [
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'drill the joins', x:50, y:88}
    ]},
  { caption: "Phrase — run the <b>full line without stopping</b> to square: swivel cut → scissor cut → waterfall, one breath.",
    climax: true,
    actions: [
      {t:'move', id:'d', x:50, y:46},
      {t:'scale', id:'d', s:1.03},
      {t:'label', id:'k', text:'no pause · one phrase', x:50, y:88}
    ]},
  { caption: "Write it — keep a <b>short list</b> of combos that always work, and build the next phrase from those.",
    actions: [
      {t:'note', id:'b', text:'combo list: A → B → C', x:50, y:26},
      {t:'scale', id:'d', s:1},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'written down', x:50, y:88}
    ]}
]};

ANIMS.t225 = { steps: [
  { caption: "Isolate — <b>one transfer or one axis</b> per block; nothing else shares the set.",
    beats: ["isolate"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'one piece at a time', x:50, y:88}
    ]},
  { caption: "Slow — <b>ten clean slow reps</b> before any tempo is allowed near it.",
    beats: ["slow reps"],
    actions: [
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'move', id:'d', x:50, y:47},
      {t:'label', id:'k', text:'ten clean reps', x:50, y:88}
    ]},
  { caption: "Cap — stop the set <b>when form breaks</b>; never 'push through' and engrave the break.",
    beats: ["cap"],
    actions: [
      {t:'label', id:'k', text:'stop at the break', x:50, y:88}
    ]},
  { caption: "Film — <b>front and side, weekly</b>; bad form you can't see is bad form you keep.",
    beats: ["film"],
    actions: [
      {t:'note', id:'b', text:'film front + side — weekly', x:50, y:26},
      {t:'label', id:'k', text:'weekly film', x:50, y:88}
    ]},
  { caption: "Quota — <b>one new advanced move per week</b> is enough. Own it before stacking another; speed without form is a fumble at higher velocity.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'move', id:'d', x:50, y:52},
      {t:'label', id:'k', text:'owned · then the next', x:50, y:88}
    ]}
]};

ANIMS.t226 = { steps: [
  { caption: "Thumb — <b>one short end</b> of the deck belongs to the thumb; that is its whole job.",
    beats: ["map the hand"],
    actions: [
      {t:'deck', id:'d', x:50, y:48, n:52},
      {t:'hand', id:'rh', x:59, y:40, side:'right', on:true, grip:'thumb on one short end'},
      {t:'label', id:'k', text:'thumb end', x:50, y:88}
    ]},
  { caption: "Fingers — the <b>opposite short end</b>: middle and ring fingers do most of the work.",
    beats: ["ends only"],
    actions: [
      {t:'hand', id:'rh', x:59, y:40, side:'right', on:true, grip:'middle + ring on the far short end'},
      {t:'label', id:'k', text:'finger end', x:50, y:88}
    ]},
  { caption: "Long edges — <b>free</b>. Squeeze them and the deck cannot spring; it only crushes.",
    beats: ["longs free"],
    actions: [
      {t:'hand', id:'rh', x:59, y:40, side:'right', on:true, grip:''},
      {t:'note', id:'b', text:'long edges FREE — no squeeze', x:50, y:26},
      {t:'label', id:'k', text:'longs stay free', x:50, y:88}
    ]},
  { caption: "Test — you should be able to <b>bow the deck</b> without the sides pinching shut. Noisy, crushed edges mean you're gripping the longs: reset the map.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'scale', id:'d', s:0.94},
      {t:'label', id:'k', text:'bow test passed', x:50, y:88}
    ]}
]};

ANIMS.t227 = { steps: [
  { caption: "Press — thumb and fingers work <b>toward each other</b> along the short ends.",
    beats: ["build the bow"],
    actions: [
      {t:'deck', id:'d', x:50, y:48, n:52},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true, grip:'ends only'},
      {t:'label', id:'k', text:'end pressure', x:50, y:88}
    ]},
  { caption: "Arch — the <b>center of the deck rises</b> into a continuous curve; the bend is stored energy.",
    beats: ["arch"],
    actions: [
      {t:'scale', id:'d', s:0.94},
      {t:'note', id:'b', text:'center rises · ends fixed', x:50, y:26},
      {t:'label', id:'k', text:'smooth arch', x:50, y:88}
    ]},
  { caption: "Check — look for a <b>smooth arc</b>. A kink in one spot means the pressure is uneven.",
    beats: ["check"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'arc, not a kink', x:50, y:88}
    ]},
  { caption: "Reset — if it kinks, <b>release fully and bow again slowly</b>, then hold the even bow a beat before any release.",
    climax: true,
    actions: [
      {t:'scale', id:'d', s:0.9},
      {t:'label', id:'k', text:'even bow · held', x:50, y:88}
    ]}
]};

ANIMS.t228 = { steps: [
  { caption: "Start. The bow is stable and the <b>catch zone is already ready</b> — nothing gets set up mid-release.",
    beats: ["ease, do not yank"],
    actions: [
      {t:'packet', id:'d', x:50, y:40, w:13, cards:[{bulk:52}]},
      {t:'scale', id:'d', s:1.08},
      {t:'hand', id:'rh', x:59, y:32, side:'right', on:true},
      {t:'hand', id:'lh', x:44, y:66, side:'left', on:true},
      {t:'label', id:'k', text:'bow held · release begins', x:50, y:88}
    ]},
  { caption: "Ease. <b>Slightly reduce the end pressure</b> — do not open the hands wide. A yank on both ends makes the whole block jump.",
    beats: ["ease"],
    actions: [
      {t:'scale', id:'d', s:1.03},
      {t:'note', id:'b', text:'reduce end pressure — slightly', x:50, y:22},
      {t:'label', id:'k', text:'ease, do not yank', x:50, y:88}
    ]},
  { caption: "Peel. Cards should leave <b>from the arch in order</b>, one after another — a sequence, not a burst.",
    beats: ["stream"],
    actions: [
      {t:'repacket', id:'d', cards:[{bulk:20}]},
      {t:'spread', x:42, y:48, count:20, dx:0.45, dy:0.8, w:7, face:'down', prefix:'s'},
      {t:'packet', id:'catch', x:48, y:69, w:12, cards:[{bulk:12}]},
      {t:'label', id:'k', text:'sequential peel — not explosion', x:50, y:88}
    ]},
  { caption: "The fail sign: <b>if the block jumps as one, the release was too sudden</b>. Practice the release into a table pile before adding a hand catch.",
    climax: true,
    actions: [
      {t:'remove', id:'s0'},
      {t:'remove', id:'s1'},
      {t:'remove', id:'s2'},
      {t:'remove', id:'s3'},
      {t:'remove', id:'s4'},
      {t:'remove', id:'s5'},
      {t:'remove', id:'s6'},
      {t:'remove', id:'s7'},
      {t:'remove', id:'s8'},
      {t:'remove', id:'s9'},
      {t:'remove', id:'s10'},
      {t:'remove', id:'s11'},
      {t:'remove', id:'s12'},
      {t:'remove', id:'s13'},
      {t:'remove', id:'s14'},
      {t:'remove', id:'s15'},
      {t:'remove', id:'s16'},
      {t:'remove', id:'s17'},
      {t:'remove', id:'s18'},
      {t:'remove', id:'s19'},
      {t:'remove', id:'d'},
      {t:'repacket', id:'catch', cards:[{bulk:52}]},
      {t:'move', id:'catch', x:50, y:50},
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'controlled release', x:50, y:88}
    ]}
]};

ANIMS.t229 = { steps: [
  { caption: "Low first. Spring into a pile <b>just below the hand</b>. Low arcs are controllable; high arcs spray until the stream is even.",
    beats: ["aim the arc"],
    actions: [
      {t:'packet', id:'d', x:50, y:36, w:13, cards:[{bulk:52}]},
      {t:'scale', id:'d', s:1.06},
      {t:'hand', id:'rh', x:58, y:29, side:'right', on:true},
      {t:'label', id:'k', text:'start height set', x:50, y:88}
    ]},
  { caption: "Read. At low height, read the stream: it has to be <b>even</b> before anything is raised.",
    beats: ["low first"],
    actions: [
      {t:'repacket', id:'d', cards:[{bulk:24}]},
      {t:'spread', x:44, y:46, count:16, dx:0.5, dy:0.7, w:7, face:'down', prefix:'a'},
      {t:'packet', id:'pile', x:50, y:66, w:12, cards:[{bulk:12}]},
      {t:'label', id:'k', text:'height is a dial, not a flex', x:50, y:88}
    ]},
  { caption: "Raise slowly. Height is a <b>dial you turn after control exists</b> — a little at a time.",
    beats: ["raise"],
    actions: [
      {t:'remove', id:'a0'},
      {t:'remove', id:'a1'},
      {t:'remove', id:'a2'},
      {t:'remove', id:'a3'},
      {t:'remove', id:'a4'},
      {t:'remove', id:'a5'},
      {t:'remove', id:'a6'},
      {t:'remove', id:'a7'},
      {t:'remove', id:'a8'},
      {t:'remove', id:'a9'},
      {t:'remove', id:'a10'},
      {t:'remove', id:'a11'},
      {t:'remove', id:'a12'},
      {t:'remove', id:'a13'},
      {t:'remove', id:'a14'},
      {t:'remove', id:'a15'},
      {t:'remove', id:'pile'},
      {t:'repacket', id:'d', cards:[{bulk:52}]},
      {t:'move', id:'d', x:50, y:29},
      {t:'label', id:'k', text:'a little higher', x:50, y:88}
    ]},
  { caption: "Side film. A side-angle video shows the arc shape better than a front view — and while the arc is unstable, <b>practice over a bed or carpet</b>.",
    climax: true,
    actions: [
      {t:'note', id:'b', text:'side view reads the arc best', x:50, y:20},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'arc under control', x:50, y:88}
    ]}
]};

ANIMS.t230 = { steps: [
  { caption: "Early platform. The catch hand is <b>in place before you ease the bow</b> — never reach for the stream.",
    beats: ["receive"],
    actions: [
      {t:'packet', id:'d', x:58, y:38, w:13, cards:[{bulk:52}]},
      {t:'hand', id:'rh', x:66, y:31, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:60, side:'left', on:true},
      {t:'label', id:'k', text:'catch hand ready early', x:50, y:88}
    ]},
  { caption: "Soft palm. The fingers <b>guide the cards in</b> — they do not stab at the stream, slap, or clamp.",
    beats: ["soft palm"],
    actions: [
      {t:'repacket', id:'d', cards:[{bulk:22}]},
      {t:'spread', x:44, y:48, count:18, dx:0.45, dy:0.75, w:7, face:'down', prefix:'c'},
      {t:'packet', id:'catch', x:44, y:67, w:12, cards:[{bulk:12}]},
      {t:'label', id:'k', text:'guide into the palm', x:50, y:88}
    ]},
  { caption: "Wait. Square <b>only after the last card arrives</b> — the platform holds until the stream is done.",
    beats: ["wait"],
    actions: [
      {t:'remove', id:'c0'},
      {t:'remove', id:'c1'},
      {t:'remove', id:'c2'},
      {t:'remove', id:'c3'},
      {t:'remove', id:'c4'},
      {t:'remove', id:'c5'},
      {t:'remove', id:'c6'},
      {t:'remove', id:'c7'},
      {t:'remove', id:'c8'},
      {t:'remove', id:'c9'},
      {t:'remove', id:'c10'},
      {t:'remove', id:'c11'},
      {t:'remove', id:'c12'},
      {t:'remove', id:'c13'},
      {t:'remove', id:'c14'},
      {t:'remove', id:'c15'},
      {t:'remove', id:'c16'},
      {t:'remove', id:'c17'},
      {t:'remove', id:'d'},
      {t:'repacket', id:'catch', cards:[{bulk:52}]},
      {t:'move', id:'catch', x:45, y:58},
      {t:'label', id:'k', text:'square after the last card', x:50, y:88}
    ]},
  { caption: "The jam to avoid: <b>grabbing mid-stream</b> creates folds and stops the flow. If you miss, let the cards fall and reset — chasing mid-air makes it worse.",
    climax: true,
    actions: [
      {t:'move', id:'catch', x:50, y:50},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'clean catch', x:50, y:88}
    ]}
]};

ANIMS.t231 = { steps: [
  { caption: "Watch. From the side, the stream tells the truth: <b>continuous ribbon, clumps, or gaps</b>. The air shows your pressure curve.",
    beats: ["read the stream"],
    actions: [
      {t:'packet', id:'d', x:56, y:36, w:13, cards:[{bulk:52}]},
      {t:'scale', id:'d', s:1.06},
      {t:'hand', id:'rh', x:64, y:29, side:'right', on:true},
      {t:'label', id:'k', text:'watch spacing in the air', x:50, y:88}
    ]},
  { caption: "Clumps. Bunched cards mean an <b>uneven release</b> — smooth the ease; less \"all at once.\"",
    beats: ["diagnose"],
    actions: [
      {t:'repacket', id:'d', cards:[{bulk:26}]},
      {t:'spread', x:40, y:46, count:14, dx:0.35, dy:0.7, w:7, face:'down', prefix:'q'},
      {t:'packet', id:'catch', x:46, y:66, w:12, cards:[{bulk:12}]},
      {t:'note', id:'b', text:'clump → smoother ease', x:50, y:22},
      {t:'label', id:'k', text:'clumps: uneven release', x:50, y:88}
    ]},
  { caption: "Gaps. Holes in the stream mean <b>hesitation</b> — keep the pressure change steadier through the middle of the release.",
    beats: ["diagnose"],
    actions: [
      {t:'remove', id:'q0'},
      {t:'remove', id:'q1'},
      {t:'remove', id:'q2'},
      {t:'remove', id:'q3'},
      {t:'remove', id:'q4'},
      {t:'remove', id:'q5'},
      {t:'remove', id:'q6'},
      {t:'remove', id:'q7'},
      {t:'remove', id:'q8'},
      {t:'remove', id:'q9'},
      {t:'remove', id:'q10'},
      {t:'remove', id:'q11'},
      {t:'remove', id:'q12'},
      {t:'remove', id:'q13'},
      {t:'remove', id:'catch'},
      {t:'repacket', id:'d', cards:[{bulk:30}]},
      {t:'spread', x:36, y:44, count:12, dx:1.1, dy:0.6, w:7, face:'down', prefix:'g'},
      {t:'packet', id:'catch', x:48, y:66, w:12, cards:[{bulk:10}]},
      {t:'note', id:'b', text:'gap → steadier pressure', x:50, y:22},
      {t:'label', id:'k', text:'gaps: hesitation mid-ease', x:50, y:88}
    ]},
  { caption: "Goal: <b>one continuous ribbon</b> — not a spray and not a brick. Adjust one variable at a time, and film every few sessions: memory lies; video does not.",
    climax: true,
    actions: [
      {t:'remove', id:'g0'},
      {t:'remove', id:'g1'},
      {t:'remove', id:'g2'},
      {t:'remove', id:'g3'},
      {t:'remove', id:'g4'},
      {t:'remove', id:'g5'},
      {t:'remove', id:'g6'},
      {t:'remove', id:'g7'},
      {t:'remove', id:'g8'},
      {t:'remove', id:'g9'},
      {t:'remove', id:'g10'},
      {t:'remove', id:'g11'},
      {t:'remove', id:'d'},
      {t:'remove', id:'catch'},
      {t:'packet', id:'done', x:50, y:50, w:13, cards:[{bulk:52}]},
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'even stream', x:50, y:88}
    ]}
]};

ANIMS.t232 = { steps: [
  { caption: "Spray — cards everywhere: the first fix is <b>less pressure, a lower arc</b>, a softer deck if needed.",
    beats: ["spray"],
    actions: [
      {t:'deck', id:'d', x:50, y:46, n:52},
      {t:'rot', id:'d', deg:8},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'spray → ease off', x:50, y:88}
    ]},
  { caption: "Brick — nothing moves: the bow isn't even, or you're <b>squeezing the long edges</b> shut.",
    beats: ["brick"],
    actions: [
      {t:'rot', id:'d', deg:0},
      {t:'scale', id:'d', s:0.93},
      {t:'label', id:'k', text:'brick → even bow', x:50, y:88}
    ]},
  { caption: "Jam on the catch — <b>catch later</b>, softer palm, and do not clamp early.",
    beats: ["jam"],
    actions: [
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'scale', id:'d', s:1},
      {t:'label', id:'k', text:'jam → catch later', x:50, y:88}
    ]},
  { caption: "The rule — <b>one variable per set of reps</b>, so you know what helped. Random thrashing engraves bad form; systematic beats stubborn.",
    climax: true,
    actions: [
      {t:'move', id:'d', x:44, y:54},
      {t:'label', id:'k', text:'one dial at a time', x:50, y:88}
    ]}
]};

ANIMS.t233 = { steps: [
  { caption: "New decks — <b>stiff</b>; they tend to spray or refuse a deep bow.",
    beats: ["condition"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'note', id:'b', text:'new deck: stiff', x:50, y:26},
      {t:'label', id:'k', text:'stiff', x:50, y:88}
    ]},
  { caption: "Broken-in — the same grip <b>bows and streams more easily</b>; the deck has learned the move with you.",
    beats: ["condition"],
    actions: [
      {t:'note', id:'b', text:'broken-in: bows easily', x:50, y:26},
      {t:'label', id:'k', text:'broken-in', x:50, y:88}
    ]},
  { caption: "Humidity — cards can <b>cling</b>; the release needs a cleaner ease, and dry air changes it again.",
    beats: ["condition"],
    actions: [
      {t:'note', id:'b', text:'humid: cards cling', x:50, y:26},
      {t:'label', id:'k', text:'cling', x:50, y:88}
    ]},
  { caption: "Match — <b>practice deck ≈ performance deck</b>, and re-check the bow after any deck change. Switching mid-learning feels like starting over, because it almost is.",
    climax: true,
    actions: [
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'train on the deck you will use', x:50, y:88}
    ]}
]};

ANIMS.t234 = { steps: [
  { caption: "Rung 1 — the <b>two-handed spring</b>, owned. Nothing here starts until this is boring.",
    beats: ["ladder"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:60, y:45, side:'right', on:true},
      {t:'label', id:'k', text:'rung 1 · two hands', x:50, y:88}
    ]},
  { caption: "Rung 2 — one-hand <b>bow only, no release</b>, until the arch is even.",
    beats: ["ladder"],
    actions: [
      {t:'hand', id:'lh', on:false},
      {t:'scale', id:'d', s:0.94},
      {t:'label', id:'k', text:'rung 2 · bow only', x:50, y:88}
    ]},
  { caption: "Rung 3 — a <b>low one-hand stream</b> into a table pile.",
    beats: ["ladder"],
    actions: [
      {t:'scale', id:'d', s:1},
      {t:'move', id:'d', x:50, y:57},
      {t:'label', id:'k', text:'rung 3 · low stream', x:50, y:88}
    ]},
  { caption: "Rung 4 — the same low stream, now into a <b>hand catch</b>.",
    beats: ["ladder"],
    actions: [
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'move', id:'d', x:44, y:54},
      {t:'label', id:'k', text:'rung 4 · catch', x:50, y:88}
    ]},
  { caption: "Rung 5 — raise the <b>arc height only now</b>, after the catch is reliable. Failed rung? Drop back one. Speed is not a rung.",
    climax: true,
    actions: [
      {t:'move', id:'d', x:57, y:38},
      {t:'label', id:'k', text:'rung 5 · height last', x:50, y:88}
    ]}
]};

ANIMS.t235 = { steps: [
  { caption: "One — plan a <b>single spring</b>, then continue the act; it is a beat, not a set.",
    beats: ["show conditions"],
    actions: [
      {t:'deck', id:'d', x:56, y:40, n:52},
      {t:'hand', id:'rh', x:62, y:34, side:'right', on:true},
      {t:'hand', id:'lh', x:42, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'one spring', x:50, y:88}
    ]},
  { caption: "Abort — if the bow feels wrong, <b>do not release</b>; cut instead. A skipped spring is invisible.",
    beats: ["abort rule"],
    actions: [
      {t:'scale', id:'d', s:0.94},
      {t:'label', id:'k', text:'bad bow → cut instead', x:50, y:88}
    ]},
  { caption: "Finish — <b>square and look up</b>. The hold after sells it; the audience remembers the calm finish more than the maximum height.",
    climax: true,
    actions: [
      {t:'scale', id:'d', s:1},
      {t:'move', id:'d', x:44, y:54},
      {t:'label', id:'k', text:'square · eyes up', x:50, y:88}
    ]},
  { caption: "Never — <b>chase a failed spring</b> in front of people. One intentional attempt, a clean finish, or a graceful abort.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'never three retries', x:50, y:88}
    ]}
]};

ANIMS.t236 = { steps: [
  { caption: "Neutral — <b>both ends ease together</b>; this is the performance default.",
    beats: ["neutral release"],
    actions: [
      {t:'deck', id:'d', x:52, y:44, n:52},
      {t:'hand', id:'rh', x:59, y:38, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'neutral', x:50, y:88}
    ]},
  { caption: "Thumb-lead — ease the thumb end a <b>fraction earlier</b> and the stream shifts with it.",
    beats: ["thumb-lead"],
    actions: [
      {t:'move', id:'d', x:46, y:52},
      {t:'label', id:'k', text:'thumb-lead', x:50, y:88}
    ]},
  { caption: "Finger-lead — the <b>opposite bias</b>, the opposite shift; the clump patterns change too.",
    beats: ["finger-lead"],
    actions: [
      {t:'move', id:'d', x:56, y:46},
      {t:'label', id:'k', text:'finger-lead', x:50, y:88}
    ]},
  { caption: "Use — bias is for <b>diagnosis and fine aim</b>, not random style changes mid-show. If the stream always drifts one way, you already have an unconscious bias: neutralise it first.",
    climax: true,
    actions: [
      {t:'move', id:'d', x:50, y:50},
      {t:'label', id:'k', text:'bias understood', x:50, y:88}
    ]}
]};

ANIMS.t237 = { steps: [
  { caption: "Grip map — rebuild the <b>ends-only grip</b> in the left hand from scratch.",
    beats: ["other hand"],
    actions: [
      {t:'deck', id:'d', x:48, y:48, n:52},
      {t:'hand', id:'lh', x:40, y:42, side:'left', on:true, grip:'ends only'},
      {t:'label', id:'k', text:'left grip map', x:50, y:88}
    ]},
  { caption: "Bow — an <b>even arch</b> before any release; do not mirror right-hand habits blindly.",
    beats: ["rebuild"],
    actions: [
      {t:'scale', id:'d', s:0.94},
      {t:'label', id:'k', text:'left bow', x:50, y:88}
    ]},
  { caption: "Low stream — <b>table pile only</b> until it's even; left-hand lag is normal.",
    beats: ["low stream"],
    actions: [
      {t:'scale', id:'d', s:1},
      {t:'move', id:'d', x:48, y:57},
      {t:'label', id:'k', text:'low · table pile', x:50, y:88}
    ]},
  { caption: "Catch — add the catch <b>after the stream is boringly reliable</b>; low height only until the quality matches the right hand.",
    climax: true,
    actions: [
      {t:'hand', id:'rh', x:60, y:55, side:'right', on:true},
      {t:'move', id:'d', x:53, y:53},
      {t:'label', id:'k', text:'left catch added', x:50, y:88}
    ]}
]};

ANIMS.t238 = { steps: [
  { caption: "Catch — <b>soft and complete</b>; the catching hand becomes the next spring hand.",
    beats: ["cycle"],
    actions: [
      {t:'deck', id:'d', x:44, y:54, n:52},
      {t:'hand', id:'lh', x:42, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'caught', x:50, y:88}
    ]},
  { caption: "Micro-square — only enough to <b>regrip the ends</b>; a full square between springs kills the phrase.",
    beats: ["micro-square"],
    actions: [
      {t:'move', id:'d', x:46, y:52},
      {t:'label', id:'k', text:'micro-square only', x:50, y:88}
    ]},
  { caption: "Re-bow — the <b>same even-arch standard</b> as the first spring; the second bow is where quality usually dies.",
    beats: ["re-bow"],
    actions: [
      {t:'scale', id:'d', s:0.94},
      {t:'label', id:'k', text:'second bow', x:50, y:88}
    ]},
  { caption: "Spring again — and stop there: <b>two cycles in performance is enough</b>. More is practice, not better entertainment.",
    climax: true,
    actions: [
      {t:'scale', id:'d', s:1},
      {t:'move', id:'d', x:57, y:42},
      {t:'label', id:'k', text:'two cycles · done', x:50, y:88}
    ]}
]};

ANIMS.t239 = { steps: [
  { caption: "Pre-shape. The receiving fingers are <b>already in a soft fan posture</b> before anything is released.",
    beats: ["catch to shape"],
    actions: [
      {t:'packet', id:'d', x:58, y:38, w:13, cards:[{bulk:52}]},
      {t:'hand', id:'rh', x:66, y:31, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'catch hand shaped for fan', x:50, y:88}
    ]},
  { caption: "Stream. Low and even — <b>the same release as a normal catch</b>. Nothing fancy happens in the air.",
    beats: ["stream"],
    actions: [
      {t:'repacket', id:'d', cards:[{bulk:18}]},
      {t:'spread', x:44, y:46, count:20, dx:0.45, dy:0.75, w:7, face:'down', prefix:'s'},
      {t:'packet', id:'catch', x:44, y:65, w:12, cards:[{bulk:14}]},
      {t:'label', id:'k', text:'low, even stream', x:50, y:88}
    ]},
  { caption: "Land. The cards settle into the arc of the waiting hand — <b>minor adjust only</b>. If the fan is messy, the problem is usually the stream, not the fingers.",
    beats: ["land in arc"],
    actions: [
      {t:'remove', id:'s0'},
      {t:'remove', id:'s1'},
      {t:'remove', id:'s2'},
      {t:'remove', id:'s3'},
      {t:'remove', id:'s4'},
      {t:'remove', id:'s5'},
      {t:'remove', id:'s6'},
      {t:'remove', id:'s7'},
      {t:'remove', id:'s8'},
      {t:'remove', id:'s9'},
      {t:'remove', id:'s10'},
      {t:'remove', id:'s11'},
      {t:'remove', id:'s12'},
      {t:'remove', id:'s13'},
      {t:'remove', id:'s14'},
      {t:'remove', id:'s15'},
      {t:'remove', id:'s16'},
      {t:'remove', id:'s17'},
      {t:'remove', id:'s18'},
      {t:'remove', id:'s19'},
      {t:'remove', id:'d'},
      {t:'remove', id:'catch'},
      {t:'fan', x:46, y:58, count:52, spread:120, startDeg:-60, radius:14, w:8, face:'down', prefix:'f'},
      {t:'label', id:'k', text:'stream settles into fan', x:50, y:88}
    ]},
  { caption: "Gate. This link is earned <b>only after the plain catch is automatic</b> — spring to fan to close to cut.",
    climax: true,
    actions: [
      {t:'remove', id:'f0'},
      {t:'remove', id:'f1'},
      {t:'remove', id:'f2'},
      {t:'remove', id:'f3'},
      {t:'remove', id:'f4'},
      {t:'remove', id:'f5'},
      {t:'remove', id:'f6'},
      {t:'remove', id:'f7'},
      {t:'remove', id:'f8'},
      {t:'remove', id:'f9'},
      {t:'remove', id:'f10'},
      {t:'remove', id:'f11'},
      {t:'remove', id:'f12'},
      {t:'remove', id:'f13'},
      {t:'remove', id:'f14'},
      {t:'remove', id:'f15'},
      {t:'remove', id:'f16'},
      {t:'remove', id:'f17'},
      {t:'remove', id:'f18'},
      {t:'remove', id:'f19'},
      {t:'remove', id:'f20'},
      {t:'remove', id:'f21'},
      {t:'remove', id:'f22'},
      {t:'remove', id:'f23'},
      {t:'remove', id:'f24'},
      {t:'remove', id:'f25'},
      {t:'remove', id:'f26'},
      {t:'remove', id:'f27'},
      {t:'remove', id:'f28'},
      {t:'remove', id:'f29'},
      {t:'remove', id:'f30'},
      {t:'remove', id:'f31'},
      {t:'remove', id:'f32'},
      {t:'remove', id:'f33'},
      {t:'remove', id:'f34'},
      {t:'remove', id:'f35'},
      {t:'remove', id:'f36'},
      {t:'remove', id:'f37'},
      {t:'remove', id:'f38'},
      {t:'remove', id:'f39'},
      {t:'remove', id:'f40'},
      {t:'remove', id:'f41'},
      {t:'remove', id:'f42'},
      {t:'remove', id:'f43'},
      {t:'remove', id:'f44'},
      {t:'remove', id:'f45'},
      {t:'remove', id:'f46'},
      {t:'remove', id:'f47'},
      {t:'remove', id:'f48'},
      {t:'remove', id:'f49'},
      {t:'remove', id:'f50'},
      {t:'remove', id:'f51'},
      {t:'packet', id:'done', x:50, y:50, w:13, cards:[{bulk:52}]},
      {t:'hand', id:'lh', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'spring-to-fan path', x:50, y:88}
    ]}
]};

ANIMS.t240 = { steps: [
  { caption: "Hold — peak bow pressure stays <b>stable for a beat</b>; the curve starts level, not spiked.",
    beats: ["the curve"],
    actions: [
      {t:'deck', id:'d', x:54, y:44, n:52},
      {t:'scale', id:'d', s:0.93},
      {t:'hand', id:'rh', x:60, y:38, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'hold', x:50, y:88}
    ]},
  { caption: "Ramp — pressure <b>falls smoothly</b> as the cards leave; no cliff-drop anywhere in the release.",
    beats: ["smooth ramp"],
    actions: [
      {t:'scale', id:'d', s:0.97},
      {t:'move', id:'d', x:50, y:50},
      {t:'label', id:'k', text:'smooth ramp', x:50, y:88}
    ]},
  { caption: "Empty — hands are <b>free as the last cards leave</b>; nothing is still being squeezed at the end.",
    beats: ["empty"],
    actions: [
      {t:'move', id:'d', x:43, y:55},
      {t:'scale', id:'d', s:1},
      {t:'label', id:'k', text:'empty hands', x:50, y:88}
    ]},
  { caption: "Read it — <b>cliff-drop → spray; stalled ramp → gaps</b>. Feel the curve in the fingers; do not only watch the cards.",
    climax: true,
    actions: [
      {t:'label', id:'k', text:'feel the curve', x:50, y:88}
    ]}
]};
;
;
;
;


ANIMS.t160 = { steps: [
  { caption: "Setup. Your force card — the A♠ — sits on <b>top of the face-down deck</b>. Exposed view can see it; the audience sees only a deck.",
    beats: ["force on top"],
    actions: [
      {t:'deck', id:'d', x:50, y:52, n:52},
      {t:'card', id:'f', rank:'A', suit:'♠', x:50, y:40, face:'down', w:12, z:3, secret:{rank:'A', suit:'♠'}},
      {t:'hi', id:'f', on:true},
      {t:'label', id:'k', text:'force card on top', x:50, y:88} ] },
  { caption: "First cut. They cut a packet, turn it <b>face-up</b>, and place it back on the deck. Let them handle the cuts.",
    beats: ["first cut"],
    actions: [
      {t:'hi', id:'f', on:false},
      {t:'hand', id:'rh', x:68, y:38, side:'right', on:true},
      {t:'packet', id:'up1', x:50, y:42, w:14, z:5, cards:[{bulk:11}, {rank:'8', suit:'♣', face:'up'}]},
      {t:'move', id:'f', x:50, y:47, z:3},
      {t:'label', id:'k', text:'face-up packet back on the deck', x:50, y:88} ] },
  { caption: "Deeper cut. They cut <b>deeper</b> — through the face-up block into face-down cards — turn that whole packet face-up, and place it on top.",
    beats: ["deeper cut"],
    actions: [
      {t:'remove', id:'up1'},
      {t:'packet', id:'up2', x:50, y:40, w:14, z:5, cards:[{rank:'8', suit:'♣', face:'down'}, {bulk:13}, {rank:'9', suit:'♦', face:'up'}]},
      {t:'move', id:'f', x:50, y:49, z:3},
      {t:'label', id:'k', text:'deeper packet face-up on top', x:50, y:88} ] },
  { caption: "Reveal. Spread to the <b>first face-down card</b> under the face-up cards: the A♠ — the original top card, forced. Your job was only the starting position and the reveal.",
    beats: ["force revealed"],
    climax: true,
    actions: [
      {t:'remove', id:'up2'},
      {t:'remove', id:'d'},
      {t:'hand', id:'rh', on:false},
      {t:'spread', x:14, y:50, dx:12, w:10, face:'up', prefix:'fu', cards:[{rank:'9', suit:'♦'}, {rank:'5', suit:'♣'}, {rank:'J', suit:'♥'}]},
      {t:'move', id:'f', x:50, y:50, z:6},
      {t:'flip', id:'f', to:'up'},
      {t:'hi', id:'f', on:true},
      {t:'spread', x:62, y:50, dx:12, w:10, face:'down', prefix:'dn', count:2},
      {t:'label', id:'k', text:'first face-down = force card A♠', x:50, y:88} ] }
] };

ANIMS.t165 = { steps: [
  { caption: "Your force card — the article names none, so Exposed view tracks it positionally, ghosted on <b>top</b> of the face-down deck. That starting position is your whole job; everything after it is theirs.",
    beats: ["force on top"],
    actions: [
      {t:'packet', id:'deck', x:50, y:52, w:13, cards:[{bulk:51}]},
      {t:'card', id:'force', x:50, y:42, face:'down', w:11, z:5, ghost:true},
      {t:'label', id:'k', text:'force card on top (Exposed)', x:50, y:88}
    ]},
  { caption: "Script, first cut: <b>“Cut about half… turn it face-up on top.”</b> They do — and turning that packet over buries your force card, now face-up, at the very bottom of the face-up block.",
    beats: ["first cut"],
    actions: [
      {t:'remove', id:'deck'},
      {t:'packet', id:'bot', x:50, y:62, w:13, cards:[{bulk:26}]},
      {t:'packet', id:'up1', x:50, y:38, w:13, cards:[{bulk:25, face:'up'}]},
      {t:'reveal', id:'force'},
      {t:'flip', id:'force', to:'up'},
      {t:'move', id:'force', x:50, y:50},
      {t:'hand', id:'rh', x:64, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'first cut — turned face-up on top', x:50, y:88}
    ]},
  { caption: "Script, second cut: <b>“Now cut deeper… turn that face-up too.”</b> They cut through the face-up block into the face-down cards below and flip the whole packet — which turns your force card face-down again, just under the new face-up cards. And through both cuts, <b>you do not touch the deck</b>.",
    beats: ["deeper cut","hands off"],
    actions: [
      {t:'remove', id:'bot'},
      {t:'remove', id:'up1'},
      {t:'packet', id:'rest', x:50, y:64, w:13, cards:[{bulk:16}]},
      {t:'packet', id:'mid', x:50, y:54, w:13, cards:[{bulk:25}]},
      {t:'packet', id:'topup', x:50, y:34, w:13, cards:[{bulk:10, face:'up'}]},
      {t:'flip', id:'force', to:'down'},
      {t:'move', id:'force', x:50, y:44},
      {t:'label', id:'k', text:'deeper cut — your hands never touched it', x:50, y:88}
    ]},
  { caption: "Find. Spread the deck and stop at the <b>first face-down card</b> under the face-up cards: the original top card of the deck — your force, delivered by their own two cuts.",
    beats: ["the find"], climax: true,
    actions: [
      {t:'remove', id:'topup'},
      {t:'spread', x:16, y:20, dx:6.5, dy:0, w:8, face:'up', prefix:'fu', count:10},
      {t:'move', id:'force', x:50, y:48, z:6},
      {t:'flip', id:'force', to:'up'},
      {t:'hi', id:'force', on:true},
      {t:'scale', id:'force', s:1.1},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'first face-down card: the force', x:50, y:88}
    ]},
  { caption: "Sell it. <b>Credit them for every choice</b> — they cut, they turned, they cut deeper. The method was never a secret move mid-stream; it was the cut procedure itself, and the stronger the “you did everything” frame, the stronger the force.",
    beats: ["sell it"],
    actions: [
      {t:'label', id:'k', text:'“you did everything”', x:50, y:88}
    ]}
]};

ANIMS.t172 = { steps: [
  { caption: "Business-Card Prophecy — the prediction is <b>written on a business card</b> and kept in view from the start. It names the A♠. There is only one A♠ in play: in Exposed view it sits on top of the deck, ready to be forced.",
    beats: ["prediction in view"],
    actions: [
      {t:"note", id:"b", text:"business card — prediction written, face down", x:28, y:30},
      {t:"packet", id:"deckp", x:62, y:50, w:13, cards:[{bulk:51}, {rank:"A", suit:"♠", face:"down"}]},
      {t:"hand", id:"lh", x:48, y:58, side:"left", on:true},
      {t:"label", id:"k", text:"prediction in view · force card on top: A♠", x:50, y:88} ] },
  { caption: "Force. Use any clean force — here the classic force: they appear to take any card, but the card they take is the <b>top card, the A♠</b>. One confident force beats a complicated switch.",
    beats: ["classic force"],
    actions: [
      {t:"repacket", id:"deckp", cards:[{bulk:51}]},
      {t:"card", id:"sel", rank:"A", suit:"♠", x:62, y:24, face:"down", w:12, secret:{rank:"A", suit:"♠"}},
      {t:"hand", id:"rh", x:76, y:32, side:"right", on:true},
      {t:"label", id:"k", text:"they take the top card — the A♠", x:50, y:88} ] },
  { caption: "Reveal. Show the prediction and the selection together: turn their card over and read the business card aloud. <b>Same card — A♠.</b> The prophecy is only as strong as the force feels free.",
    beats: ["reveal"],
    climax: true,
    actions: [
      {t:"flip", id:"sel", to:"up"},
      {t:"move", id:"sel", x:44, y:48},
      {t:"note", id:"b", text:"business card reads: “You will take the A♠”", x:28, y:30},
      {t:"hi", id:"sel", on:true},
      {t:"hand", id:"rh", on:false},
      {t:"label", id:"k", text:"prediction matches: A♠", x:50, y:88} ] }
] };
;
;
;
;
;

var players=[];
document.querySelectorAll('.animplayer').forEach(function(root){
  var anim=ANIMS[root.getAttribute('data-anim')];
  if(!anim || !anim.steps || !anim.steps.length){
    root.innerHTML='<div class="caption">Animation coming soon.</div>'; return;
  }
  players.push(new Player(root, anim));
});
if('IntersectionObserver' in window && !REDUCED){
  var io=new IntersectionObserver(function(es){
    es.forEach(function(e){
      var p=e.target._player; if(!p) return;
      if(e.intersectionRatio>=0.4){ if(!p.touched && !p.playing) p.play(); }
      else if(p.playing && p.touched) p.pause();
    });
  },{threshold:[0,0.4,1]});
  players.forEach(function(p){ io.observe(p.root); });
}
})();
