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
  { caption: "The A♠ sits on top of the pack. Keep an eye on it — it isn't going anywhere.",
    beats: ["control the top"],
    actions: [
      {t:'deck', id:'deck', x:50, y:52, n:52},
      {t:'card', id:'top', rank:'A', suit:'♠', x:50, y:52, face:'down', w:11},
      {t:'hi', id:'top', on:true},
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'A♠ on top', x:50, y:88}
    ]},
  { caption: "Peel small packets off the top into your other hand. Little bunches, nothing dramatic.",
    beats: ["overhand peel"],
    actions: [
      {t:'hi', id:'top', on:false},
      {t:'packet', id:'pkt1', x:50, y:52, n:9},
      {t:'move', id:'pkt1', x:74, y:36},
      {t:'hand', id:'lh', x:72, y:48, side:'left', on:true},
      {t:'label', id:'k', text:'small packets peel off the top', x:50, y:88}
    ]},
  { caption: "Again — another small packet. The A♠ never budges from the original stock.",
    actions: [
      {t:'packet', id:'pkt2', x:50, y:52, n:7},
      {t:'move', id:'pkt2', x:74, y:56},
      {t:'hi', id:'top', on:true}
    ]},
  { caption: "Set the packets back and square up. Turn over the top card: <b>still the A♠</b>.",
    beats: ["still on top"],
    actions: [
      {t:'remove', id:'pkt1'}, {t:'remove', id:'pkt2'},
      {t:'hand', id:'rh', on:false}, {t:'hand', id:'lh', on:false},
      {t:'flip', id:'top', to:'up'},
      {t:'scale', id:'top', s:1.08},
      {t:'label', id:'k', text:'A♠ — never left the top', x:50, y:88}
    ]}
]};

ANIMS.t3 = { steps: [
  { caption: "The Q♥ sits on top of the deck. Only you know that.",
    beats: ["force on top"],
    actions: [
      {t:'deck', id:'deck', x:38, y:50, n:52},
      {t:'card', id:'force', rank:'Q', suit:'♥', x:38, y:50, face:'down', w:11},
      {t:'hi', id:'force', on:true},
      {t:'label', id:'k', text:'force card: Q♥, on top', x:38, y:88}
    ]},
  { caption: "Peel a packet off the top into your right hand — the Q♥ rides along at its bottom.",
    beats: ["Hindu peel"],
    actions: [
      {t:'hi', id:'force', on:false},
      {t:'packet', id:'p1', x:38, y:50, n:11},
      {t:'move', id:'p1', x:66, y:38},
      {t:'hand', id:'rh', x:72, y:32, side:'right', on:true},
      {t:'label', id:'k', text:'first packet — Q♥ underneath it', x:50, y:88}
    ]},
  { caption: "Peel another. \"Say stop whenever.\" — <b>Stop!</b> You freeze right here.",
    actions: [
      {t:'packet', id:'p2', x:38, y:50, n:13},
      {t:'move', id:'p2', x:66, y:62},
      {t:'label', id:'k', text:'\"stop!\" — right there', x:50, y:88}
    ]},
  { caption: "Turn over the bottom card of that first packet — the very first card peeled. The Q♥.",
    beats: ["the force"],
    actions: [
      {t:'remove', id:'p1'},
      {t:'move', id:'force', x:66, y:38},
      {t:'flip', id:'force', to:'up'},
      {t:'hi', id:'force', on:true},
      {t:'scale', id:'force', s:1.08},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'their \"free choice\" — the force', x:50, y:88}
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
  { caption: "Deck in the right hand. You're about to cut it — twice — and leave the order untouched.",
    beats: ["false cut"],
    actions: [
      {t:'deck', id:'deck', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'start — full order intact', x:50, y:88}
    ]},
  { caption: "Left hand swing-cuts the top half off. Complete the cut: right-hand half goes on top.",
    beats: ["first cut"],
    actions: [
      {t:'deck', id:'top', x:50, y:36, n:26},
      {t:'deck', id:'bot', x:50, y:62, n:26},
      {t:'hand', id:'lh', x:38, y:40, side:'left', on:true},
      {t:'move', id:'top', x:50, y:62},
      {t:'move', id:'bot', x:50, y:36},
      {t:'label', id:'k', text:'halves swapped', x:50, y:88}
    ]},
  { caption: "Do the exact same thing a second time. Two identical half-cuts restore the original order.",
    beats: ["second cut restores"],
    actions: [
      {t:'move', id:'bot', x:50, y:62},
      {t:'move', id:'top', x:50, y:36},
      {t:'label', id:'k', text:'swapped again — original order restored', x:50, y:88}
    ]},
  { caption: "Square up. The deck looks cut. The order never changed.",
    actions: [
      {t:'remove', id:'top'}, {t:'remove', id:'bot'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false}, {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'false cut complete', x:50, y:88}
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
  { caption: "Force card — the J♥ — sits on top of the deck.",
    beats: ["force on top"],
    actions: [
      {t:'deck', id:'deck', x:50, y:55, n:52},
      {t:'card', id:'jh', rank:'J', suit:'♥', x:50, y:46, face:'down', w:11},
      {t:'hi', id:'jh', on:true},
      {t:'label', id:'k', text:'J♥ on top', x:50, y:88}
    ]},
  { caption: "Riffle down the outer edge. They say stop. The break lands near the top.",
    beats: ["riffle · stop"],
    actions: [
      {t:'hi', id:'jh', on:false},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'deck', id:'upper', x:50, y:32, n:8},
      {t:'deck', id:'lower', x:50, y:64, n:44},
      {t:'move', id:'jh', x:50, y:58},
      {t:'label', id:'k', text:'\"stop\" — break near the top', x:50, y:88}
    ]},
  { caption: "As the upper packet lifts, the left thumb drags the top card back so it stays on the lower packet.",
    beats: ["slip the force"],
    actions: [
      {t:'move', id:'upper', x:78, y:30},
      {t:'hi', id:'jh', on:true},
      {t:'note', id:'b', text:'thumb drags J♥ onto lower packet', x:50, y:78}
    ]},
  { caption: "Show the top of the lower packet: \"the card you stopped at.\" It's the J♥.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'flip', id:'jh', to:'up'},
      {t:'scale', id:'jh', s:1.08},
      {t:'label', id:'k', text:'their free choice — the force', x:50, y:88}
    ]}
]};

ANIMS.t8 = { steps: [
  { caption: "Elmsley Count — show four cards as four while hiding one face. Grip: packet in right-hand Biddle (or dealer's) grip.",
    beats: ["start"],
    actions: [
      {t:'packet', id:'pk', x:55, y:48, n:4},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'hand', id:'lh', x:38, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'four-card packet · ready to count', x:50, y:88}
    ]},
  { caption: "Count 1: take the top card into the left hand fairly. Audience sees card A.",
    beats: ["1 fair"],
    actions: [
      {t:'card', id:'c1', rank:'A', suit:'♠', x:38, y:50, face:'up', w:12},
      {t:'hi', id:'c1', on:true},
      {t:'label', id:'k', text:'1 — fair take', x:50, y:88}
    ]},
  { caption: "Count 2 (the move): left fingers steal the first card back under the packet while taking a double. You appear to take the next single.",
    beats: ["2 — secret trade"],
    actions: [
      {t:'hi', id:'c1', on:false},
      {t:'move', id:'c1', x:52, y:48},
      {t:'card', id:'c2', rank:'K', suit:'♥', x:38, y:50, face:'up', w:12},
      {t:'hi', id:'c2', on:true},
      {t:'label', id:'k', text:'2 — block take + return steal', x:50, y:88}
    ]},
  { caption: "Count 3: take the next card fairly into the left hand.",
    beats: ["3 fair"],
    actions: [
      {t:'hi', id:'c2', on:false},
      {t:'card', id:'c3', rank:'Q', suit:'♣', x:32, y:52, face:'up', w:11},
      {t:'label', id:'k', text:'3 — fair', x:50, y:88}
    ]},
  { caption: "Count 4: take the last card. Four counts, one face never shown. Square and continue the routine.",
    beats: ["4 done"],
    actions: [
      {t:'card', id:'c4', rank:'J', suit:'♦', x:28, y:54, face:'up', w:11},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'4 — hidden face never appeared', x:50, y:88}
    ]}
]};
;

ANIMS.t15 = { steps: [
  { caption: "The Palm — steal the top card into a relaxed right-hand palm during a square-up.",
    beats: ["top ready"],
    actions: [
      {t:'deck', id:'d', x:45, y:52, n:52},
      {t:'card', id:'top', rank:'A', suit:'♠', x:45, y:40, face:'down', w:12},
      {t:'hi', id:'top', on:true},
      {t:'hand', id:'lh', x:35, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'top card targeted', x:50, y:88}
    ]},
  { caption: "Right hand comes over to square. Contact the top card; it leaves with the hand.",
    beats: ["take"],
    actions: [
      {t:'hand', id:'rh', x:55, y:42, side:'right', on:true},
      {t:'move', id:'top', x:60, y:48},
      {t:'label', id:'k', text:'square-up covers the steal', x:50, y:88}
    ]},
  { caption: "Hand moves away. Fingers softly curved — never stiff, never flat-open. Deck can be handed out.",
    beats: ["away"],
    actions: [
      {t:'hi', id:'top', on:false},
      {t:'move', id:'top', x:72, y:42},
      {t:'label', id:'k', text:'relaxed curl · not a claw', x:50, y:88}
    ]},
  { caption: "Produce later from palm, pocket, or load. Acting and timing are most of the vanish.",
    actions: [
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'flip', id:'top', to:'up'},
      {t:'hi', id:'top', on:true},
      {t:'label', id:'k', text:'produce when attention returns', x:50, y:88}
    ]}
]};
;

ANIMS.t21 = { steps: [
  { caption: "Deck at the left fingertips — thumb on one long edge, middle and ring on the other.",
    beats: ["fingertip grip"],
    actions: [
      {t:'deck', id:'d', x:45, y:50, n:52},
      {t:'hand', id:'lh', x:34, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'one hand only', x:50, y:88}
    ]},
  { caption: "Let the bottom half drop into the palm, pivoting against the thumb.",
    beats: ["bottom half drops"],
    actions: [
      {t:'deck', id:'bot', x:45, y:62, n:26},
      {t:'move', id:'d', x:45, y:38},
      {t:'label', id:'k', text:'bottom half into the palm', x:50, y:88}
    ]},
  { caption: "Index finger pushes the top half forward; it swings down onto the bottom half.",
    beats: ["index pushes"],
    actions: [
      {t:'move', id:'d', x:52, y:55, z:3},
      {t:'move', id:'bot', x:45, y:55},
      {t:'label', id:'k', text:'top half swings over', x:50, y:88}
    ]},
  { caption: "Halves swapped, one-handed. A pure flourish — no secret, all style.",
    beats: ["clean cut"],
    actions: [
      {t:'remove', id:'d'}, {t:'remove', id:'bot'},
      {t:'deck', id:'done', x:48, y:50, n:52},
      {t:'hand', id:'lh', x:40, y:55},
      {t:'label', id:'k', text:'one hand, one clean cut', x:50, y:88}
    ]}
]};

ANIMS.t22 = { steps: [
  { caption: "The Pass — secretly transpose the two halves so a selection (or break) moves to the top. Cover is the hands closing.",
    beats: ["break held"],
    actions: [
      {t:'deck', id:'bot', x:50, y:55, n:26},
      {t:'deck', id:'top', x:50, y:42, n:26},
      {t:'hand', id:'lh', x:38, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'break between halves', x:50, y:88}
    ]},
  { caption: "Right hand covers from above. Audience should see only the back of the hand — not a gap.",
    beats: ["cover"],
    actions: [
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'right hand shades the action', x:50, y:88}
    ]},
  { caption: "Under cover: lower half swings up/forward while upper half drops under — halves trade places.",
    beats: ["transpose"],
    actions: [
      {t:'move', id:'bot', x:50, y:40},
      {t:'move', id:'top', x:50, y:55},
      {t:'label', id:'k', text:'halves transpose under the hand', x:50, y:88}
    ]},
  { caption: "Square immediately as if finishing an ordinary adjustment. No second fix. Selection is now on top.",
    actions: [
      {t:'remove', id:'bot'},{t:'remove', id:'top'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'square · act natural', x:50, y:88}
    ]}
]};
;
ANIMS.t9 = { steps: [
  { caption: "Snap Change — a face-up card becomes another with a sharp snap. Two cards back-to-back (or a double) start as one.",
    beats: ["display"],
    actions: [
      {t:'card', id:'face', rank:'A', suit:'♥', x:50, y:48, face:'up', w:14},
      {t:'hi', id:'face', on:true},
      {t:'hand', id:'rh', x:58, y:55, side:'right', on:true},
      {t:'label', id:'k', text:'show the face · double in hand', x:50, y:88}
    ]},
  { caption: "Fingers prepare: right fingers on the face, thumb at the back. The snap will drag the face card away.",
    beats: ["prep"],
    actions: [
      {t:'note', id:'b', text:'fingers on face · thumb behind', x:50, y:28},
      {t:'label', id:'k', text:'load the snap', x:50, y:88}
    ]},
  { caption: "Snap: the visible face slides back (or is pulled clear) and the second face snaps into view.",
    beats: ["change"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'flip', id:'face', to:'down'},
      {t:'remove', id:'face'},
      {t:'card', id:'new', rank:'A', suit:'♠', x:50, y:48, face:'up', w:14},
      {t:'hi', id:'new', on:true},
      {t:'scale', id:'new', s:1.06},
      {t:'label', id:'k', text:'snap — new face', x:50, y:88}
    ]},
  { caption: "Hold still for a beat. No second adjustment. Commitment sells the change.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'hold · do not fix', x:50, y:88}
    ]}
]};
;

ANIMS.t10 = { steps: [
  { caption: "21-Card Trick — a classic self-worker. Their card is found after three deals into columns.",
    beats: ["21 cards"],
    actions: [
      {t:'spread', x:12, y:50, count:7, dx:11, face:'up', w:10, prefix:'c'},
      {t:'label', id:'k', text:'three columns of seven', x:50, y:88}
    ]},
  { caption: "Spectator points to the column with their card. Gather with that column in the middle. Deal again.",
    beats: ["middle gather"],
    actions: [
      {t:'hand', id:'rh', x:55, y:38, side:'right', on:true},
      {t:'packet', id:'mid', x:50, y:50, n:21},
      {t:'label', id:'k', text:'their pile goes in the middle', x:50, y:88}
    ]},
  { caption: "Repeat twice more. After the third gather, their card is 11th — spell or count to it.",
    beats: ["11th card"],
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'mid'},
      {t:'card', id:'found', rank:'A', suit:'♠', x:50, y:42, face:'up', w:14},
      {t:'hi', id:'found', on:true},
      {t:'scale', id:'found', s:1.1},
      {t:'label', id:'k', text:'11th card — always', x:50, y:88}
    ]}
]};

ANIMS.t11 = { steps: [
  { caption: "Two cards: Ace of Spades and King of Hearts. \"Watch the Ace.\"",
    beats: ["two-card monte"],
    actions: [
      {t:'card', id:'as', rank:'A', suit:'♠', x:38, y:48, face:'up', w:14},
      {t:'card', id:'kh', rank:'K', suit:'♥', x:62, y:48, face:'up', w:14},
      {t:'hi', id:'as', on:true},
      {t:'label', id:'k', text:'watch the Ace', x:50, y:88}
    ]},
  { caption: "Turn the two-card packet face-down <b>as one block</b> — exactly like a double lift. The order never changes.",
    beats: ["block turnover"],
    actions: [
      {t:'hi', id:'as', on:false},
      {t:'flip', id:'as', to:'down'},
      {t:'flip', id:'kh', to:'down'},
      {t:'move', id:'as', x:50, y:48},
      {t:'move', id:'kh', x:50, y:52},
      {t:'label', id:'k', text:'turned as one · order unchanged', x:50, y:88}
    ]},
  { caption: "The \"throw\": toss or flip the packet between your hands with a flourish. It looks like a switch. It isn't.",
    beats: ["the throw"],
    actions: [
      {t:'hand', id:'rh', x:60, y:36, side:'right', on:true},
      {t:'move', id:'as', x:55, y:40},
      {t:'move', id:'kh', x:55, y:44},
      {t:'label', id:'k', text:'the throw — pure theater', x:50, y:88}
    ]},
  { caption: "\"Where's the Ace — top or bottom?\" Whatever they answer, show them they're wrong.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'flip', id:'as', to:'up'},
      {t:'hi', id:'as', on:true},
      {t:'label', id:'k', text:'they can never win', x:50, y:88}
    ]}
]};

ANIMS.t16 = { steps: [
  { caption: "Top Change — the card in the right hand is switched for the deck's top card during a natural gesture.",
    beats: ["start"],
    actions: [
      {t:'card', id:'shown', rank:'A', suit:'♥', x:62, y:42, face:'up', w:12},
      {t:'deck', id:'d', x:40, y:55, n:52},
      {t:'hand', id:'rh', x:68, y:48, side:'right', on:true},
      {t:'hand', id:'lh', x:32, y:58, side:'left', on:true},
      {t:'hi', id:'shown', on:true},
      {t:'label', id:'k', text:'shown card in right · deck in left', x:50, y:88}
    ]},
  { caption: "Approach the deck as if to set the card down or gesture. Both hands meet briefly.",
    beats: ["meet"],
    actions: [
      {t:'move', id:'shown', x:48, y:50},
      {t:'label', id:'k', text:'hands meet — cover moment', x:50, y:88}
    ]},
  { caption: "In that beat: leave the shown card on the deck and take the former top card away in the right hand.",
    beats: ["trade"],
    actions: [
      {t:'remove', id:'shown'},
      {t:'card', id:'new', rank:'A', suit:'♠', x:62, y:42, face:'up', w:12},
      {t:'hi', id:'new', on:true},
      {t:'label', id:'k', text:'leave one · take the other', x:50, y:88}
    ]},
  { caption: "Right hand continues the gesture without pausing. The logic of the motion is the cover — not speed.",
    actions: [
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'continue the phrase · do not look down', x:50, y:88}
    ]}
]};
;

ANIMS.t23 = { steps: [
  { caption: "Four cards counted into the right hand. One is the selection — it will vanish from the packet.",
    beats: ["Biddle trick"],
    actions: [
      {t:'spread', x:20, y:50, count:4, dx:16, face:'up', w:11, prefix:'b',
        cards:[
          {id:'b0', rank:'7', suit:'♣'}, {id:'b1', rank:'A', suit:'♠'},
          {id:'b2', rank:'4', suit:'♥'}, {id:'b3', rank:'9', suit:'♦'}
        ]},
      {t:'hi', id:'b1', on:true},
      {t:'label', id:'k', text:'selection is the A♠', x:50, y:88}
    ]},
  { caption: "Count them into a new packet, stealing the selection back onto the deck under cover of the count.",
    beats: ["Biddle steal"],
    actions: [
      {t:'hi', id:'b1', on:false},
      {t:'hand', id:'rh', x:55, y:38, side:'right', on:true},
      {t:'move', id:'b0', x:55, y:48},
      {t:'move', id:'b1', x:40, y:30, z:2},
      {t:'move', id:'b2', x:58, y:50},
      {t:'move', id:'b3', x:61, y:52},
      {t:'label', id:'k', text:'selection stolen back to deck', x:50, y:88}
    ]},
  { caption: "Show three cards. The selection is gone from the packet — already waiting on the deck.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'b1'},
      {t:'hi', id:'b0', on:true},
      {t:'label', id:'k', text:'three left · selection vanished', x:50, y:88}
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
  { caption: "Twisting the Aces — four aces turn face-up one at a time in a packet, under impossible conditions.",
    beats: ["packet twisting"],
    actions: [
      {t:'spread', x:18, y:50, count:4, dx:16, face:'down', w:12, prefix:'a',
        cards:[
          {id:'a0', rank:'A', suit:'♠'},{id:'a1', rank:'A', suit:'♥'},
          {id:'a2', rank:'A', suit:'♦'},{id:'a3', rank:'A', suit:'♣'}
        ]},
      {t:'hand', id:'rh', x:70, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'four aces face-down', x:50, y:88}
    ]},
  { caption: "A magical twist. Spread again — one ace has turned face-up.",
    beats: ["first twist"],
    actions: [
      {t:'flip', id:'a0', to:'up'},
      {t:'hi', id:'a0', on:true},
      {t:'label', id:'k', text:'first ace turns', x:50, y:88}
    ]},
  { caption: "Twist again. A second ace faces up. Then a third.",
    beats: ["second · third"],
    actions: [
      {t:'hi', id:'a0', on:false},
      {t:'flip', id:'a1', to:'up'},
      {t:'flip', id:'a2', to:'up'},
      {t:'hi', id:'a1', on:true},{t:'hi', id:'a2', on:true},
      {t:'label', id:'k', text:'two more turn', x:50, y:88}
    ]},
  { caption: "Final twist. All four aces face up. Elmsley counts and hidden turns do the work.",
    actions: [
      {t:'hi', id:'a1', on:false},{t:'hi', id:'a2', on:false},
      {t:'flip', id:'a3', to:'up'},
      {t:'hi', id:'a0', on:true},{t:'hi', id:'a1', on:true},
      {t:'hi', id:'a2', on:true},{t:'hi', id:'a3', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'all four face-up', x:50, y:88}
    ]}
]};
// batchE animations: t19 Chicago Opener, t24 Do As I Do, t25 Card to Pocket
ANIMS.t19 = { steps: [
  { caption: "Chicago Opener — a selected card changes color, then the whole deck follows.",
    actions: [
      {t:'deck', id:'deck', x:50, y:55, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:40, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'their selection', x:50, y:88}
    ]},
  { caption: "The card is lost and found — but now it has a different colored back.",
    beats: ["odd-backed"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'flip', id:'sel', to:'down'},
      {t:'move', id:'sel', x:50, y:55},
      {t:'remove', id:'sel'},
      {t:'card', id:'odd', rank:'A', suit:'♠', x:50, y:40, face:'down', w:12},
      {t:'hi', id:'odd', on:true},
      {t:'label', id:'k', text:'different colored back', x:50, y:88}
    ]},
  { caption: "For the kicker: the entire deck has changed to match. Only their card was the stranger.",
    actions: [
      {t:'hi', id:'odd', on:false},
      {t:'remove', id:'odd'},
      {t:'spread', x:14, y:50, count:7, dx:11, face:'down', w:10, prefix:'d'},
      {t:'label', id:'k', text:'whole deck changed', x:50, y:88}
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
  { caption: "Selection signed and controlled to the top. You're about to palm it and produce it from the pocket.",
    beats: ["card to pocket"],
    actions: [
      {t:'deck', id:'deck', x:42, y:52, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:42, y:42, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed A♠ on top', x:50, y:88}
    ]},
  { caption: "Palm the top card as you hand the deck out or set it down. The hand looks empty.",
    beats: ["palm"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'hand', id:'rh', x:60, y:38, side:'right', on:true},
      {t:'move', id:'sel', x:72, y:36, z:5},
      {t:'scale', id:'sel', s:0.9},
      {t:'note', id:'b', text:'palmed', x:78, y:55}
    ]},
  { caption: "Reach into the pocket. Load the card as you go in; come out with it as if it had been there all along.",
    beats: ["pocket load"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:85, y:55},
      {t:'move', id:'sel', x:85, y:60},
      {t:'label', id:'k', text:'into the pocket', x:50, y:88}
    ]},
  { caption: "Produce the signed card from the pocket. Clean, impossible, done.",
    actions: [
      {t:'move', id:'sel', x:70, y:45},
      {t:'scale', id:'sel', s:1.08},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'from the pocket — signed A♠', x:50, y:88}
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
  { caption: "Out of This World — the spectator deals the deck into red and black piles by pure intuition.",
    beats: ["color intuition"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'deal by feeling — red or black', x:50, y:88}
    ]},
  { caption: "Two piles form. They never look at faces — only backs and instinct.",
    beats: ["two piles"],
    actions: [
      {t:'remove', id:'d'},
      {t:'packet', id:'red', x:30, y:50, n:26},
      {t:'packet', id:'blk', x:70, y:50, n:26},
      {t:'label', id:'k', text:'red pile · black pile', x:50, y:88}
    ]},
  { caption: "Turn them over: one pile is all red, the other all black. A miracle of separation.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'spread', x:10, y:38, count:5, dx:10, face:'up', w:9, prefix:'r',
        cards:[{rank:'A',suit:'♥'},{rank:'7',suit:'♦'},{rank:'K',suit:'♥'},{rank:'3',suit:'♦'},{rank:'Q',suit:'♥'}]},
      {t:'spread', x:10, y:62, count:5, dx:10, face:'up', w:9, prefix:'b',
        cards:[{rank:'A',suit:'♠'},{rank:'8',suit:'♣'},{rank:'J',suit:'♠'},{rank:'2',suit:'♣'},{rank:'9',suit:'♠'}]},
      {t:'label', id:'k', text:'perfect color separation', x:50, y:88}
    ]}
]};
ANIMS.t28 = { steps: [
  { caption: "Fitch Cheney's Five-Card Trick — a helper shows five cards; one is given to the spectator; you name it.",
    beats: ["five cards"],
    actions: [
      {t:'spread', x:12, y:50, count:5, dx:14, face:'up', w:11, prefix:'f',
        cards:[
          {id:'f0',rank:'A',suit:'♠'},{id:'f1',rank:'7',suit:'♥'},
          {id:'f2',rank:'K',suit:'♦'},{id:'f3',rank:'3',suit:'♣'},{id:'f4',rank:'Q',suit:'♠'}
        ]},
      {t:'label', id:'k', text:'five cards drawn', x:50, y:88}
    ]},
  { caption: "Helper hands one card to the spectator and arranges the other four in a coded order.",
    beats: ["code"],
    actions: [
      {t:'hi', id:'f2', on:true},
      {t:'move', id:'f2', x:50, y:30},
      {t:'hand', id:'rh', x:60, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'one card hidden · four encode it', x:50, y:88}
    ]},
  { caption: "You read the order of the four and name the hidden card instantly.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'scale', id:'f2', s:1.12},
      {t:'label', id:'k', text:'named — K♦', x:50, y:88}
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
  { caption: "The Clock Trick — twelve cards laid out like a clock; they think of the card at their hour.",
    beats: ["clock face"],
    actions: [
      {t:'fan', x:50, y:52, count:12, spread:300, startDeg:-90, radius:16, w:8, face:'up', prefix:'c'},
      {t:'label', id:'k', text:'twelve hours · think of yours', x:50, y:88}
    ]},
  { caption: "Cards gathered. A count or key lands on their hour without asking the number.",
    beats: ["gather · count"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:12},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'counting to their hour', x:50, y:88}
    ]},
  { caption: "Turn the card — it's the one at their time.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'found', rank:'A', suit:'♠', x:50, y:42, face:'up', w:14},
      {t:'hi', id:'found', on:true},
      {t:'scale', id:'found', s:1.1},
      {t:'label', id:'k', text:'the card at their hour', x:50, y:88}
    ]}
]};
ANIMS.t31 = { steps: [
  { caption: "Miraskill — shuffle freely. You'll deal pairs and predict how many match in color.",
    beats: ["free shuffle"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'shuffle as much as you like', x:50, y:88}
    ]},
  { caption: "Deal through the deck in pairs. Matching-color pairs go in one pile; mixed pairs in the other.",
    beats: ["pair sort"],
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'packet', id:'match', x:32, y:50, n:10},
      {t:'packet', id:'mixed', x:68, y:50, n:16},
      {t:'label', id:'k', text:'matched pairs · mixed pairs', x:50, y:88}
    ]},
  { caption: "Count the matched pairs. Your prediction — written before the shuffle — matches exactly.",
    beats: ["prediction hits"],
    actions: [
      {t:'hi', id:'match', on:true},
      {t:'note', id:'b', text:'math guarantees the count', x:50, y:28},
      {t:'label', id:'k', text:'prediction = matched-pair count', x:50, y:88}
    ]}
]};
ANIMS.t32 = { steps: [
  { caption: "Cross Cut Force — the spectator cuts; you complete the cut so the original top card is still forced.",
    beats: ["their cut"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'card', id:'force', rank:'A', suit:'♠', x:50, y:40, face:'down', w:11},
      {t:'hi', id:'force', on:true},
      {t:'label', id:'k', text:'force card on top', x:50, y:88}
    ]},
  { caption: "They cut the deck. Place the original bottom half crosswise on the top half — a natural 'mark'.",
    beats: ["cross"],
    actions: [
      {t:'hi', id:'force', on:false},
      {t:'deck', id:'top', x:50, y:38, n:26},
      {t:'deck', id:'bot', x:50, y:62, n:26},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'crossed packets', x:50, y:88}
    ]},
  { caption: "Time misdirection — talk, gesture. Then lift the upper half and show its face as their card.",
    beats: ["the force"],
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'bot'},
      {t:'move', id:'force', x:50, y:40},
      {t:'flip', id:'force', to:'up'},
      {t:'hi', id:'force', on:true},
      {t:'scale', id:'force', s:1.1},
      {t:'label', id:'k', text:'original top — forced', x:50, y:88}
    ]}
]};
ANIMS.t33 = { steps: [
  { caption: "Force card on top. Slip force — the riffle stop that isn't.",
    actions: [
      {t:'deck', id:'deck', x:50, y:55, n:52},
      {t:'card', id:'force', rank:'Q', suit:'♣', x:50, y:46, face:'down', w:11},
      {t:'hi', id:'force', on:true},
      {t:'label', id:'k', text:'force on top', x:50, y:88}
    ]},
  { caption: "Riffle and have them say stop. As you lift the upper packet, the left thumb slips the top card onto the lower half.",
    beats: ["the slip"],
    actions: [
      {t:'hi', id:'force', on:false},
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true},
      {t:'deck', id:'upper', x:50, y:32, n:18},
      {t:'move', id:'force', x:50, y:58},
      {t:'note', id:'b', text:'thumb slips force onto lower packet', x:50, y:78}
    ]},
  { caption: "Show the top of the lower packet. It's the force. Clean and direct.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'move', id:'upper', x:78, y:30},
      {t:'flip', id:'force', to:'up'},
      {t:'hi', id:'force', on:true},
      {t:'label', id:'k', text:'their stop — your force', x:50, y:88}
    ]}
]};
ANIMS.t34 = { steps: [
  { caption: "Thumb Fan — open the deck into a wide arc with a single sweep of the thumb.",
    beats: ["the fan"],
    actions: [
      {t:'deck', id:'d', x:48, y:55, n:52},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'note', id:'b', text:'thumb on the face edge · fingers support', x:48, y:30},
      {t:'label', id:'k', text:'fan grip', x:50, y:88}
    ]},
  { caption: "Thumb drives the cards in a smooth arc. Fingers shape the curve as the fan opens.",
    beats: ["thumb drives"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'d'},
      {t:'fan', x:52, y:56, count:12, spread:110, startDeg:-55, radius:14, w:9, face:'up', prefix:'f',
        cards:[
          {rank:'A',suit:'♠'},{rank:'K',suit:'♥'},{rank:'Q',suit:'♣'},{rank:'J',suit:'♦'},
          {rank:'10',suit:'♠'},{rank:'9',suit:'♥'},{rank:'8',suit:'♣'},{rank:'7',suit:'♦'},
          {rank:'6',suit:'♠'},{rank:'5',suit:'♥'},{rank:'4',suit:'♣'},{rank:'3',suit:'♦'}
        ]},
      {t:'label', id:'k', text:'fan opening', x:50, y:88}
    ]},
  { caption: "Hold the finished fan. Indices readable, arc even — a clean display of control.",
    actions: [
      {t:'label', id:'k', text:'thumb fan — open and even', x:50, y:88}
    ]},
  { caption: "Close with a soft squeeze back into a squared deck. Ready for the next move.",
    actions: [
      {t:'deck', id:'done', x:50, y:52, n:52},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'closed and squared', x:50, y:88}
    ]}
]};
ANIMS.t35 = { steps: [
  { caption: "The Dribble — cards cascade from an overhead grip into the waiting hand.",
    beats: ["overhead grip"],
    actions: [
      {t:'deck', id:'d', x:50, y:30, n:52},
      {t:'hand', id:'rh', x:56, y:22, side:'right', on:true},
      {t:'hand', id:'lh', x:48, y:68, side:'left', on:true},
      {t:'label', id:'k', text:'hold from above · catch below', x:50, y:88}
    ]},
  { caption: "Release pressure evenly. Cards fall in a soft continuous stream.",
    beats: ["even release"],
    actions: [
      {t:'packet', id:'mid', x:50, y:48, n:16},
      {t:'packet', id:'catch', x:50, y:65, n:20},
      {t:'note', id:'b', text:'soft continuous stream', x:72, y:48},
      {t:'label', id:'k', text:'dribbling', x:50, y:88}
    ]},
  { caption: "Last cards fall. Catch cleanly.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'d'},{t:'remove', id:'mid'},
      {t:'deck', id:'done', x:50, y:55, n:52},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'caught', x:50, y:88}
    ]},
  { caption: "Square. Control and style in one flourish — also a genuine mix.",
    actions: [
      {t:'label', id:'k', text:'dribble complete', x:50, y:88}
    ]}
]};
ANIMS.t36 = { steps: [
  { caption: "The Spring — cards stream in an arc from one hand to the other. Related to the waterfall; different grip pressure.",
    beats: ["bow"],
    actions: [
      {t:'deck', id:'d', x:55, y:42, n:52},
      {t:'hand', id:'rh', x:60, y:35, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'deck bowed · catch hand ready', x:50, y:88}
    ]},
  { caption: "Release end pressure so cards peel in a ribbon — not a single flying block.",
    beats: ["stream"],
    actions: [
      {t:'remove', id:'d'},
      {t:'spread', x:42, y:48, count:10, dx:3, face:'down', w:8, prefix:'s'},
      {t:'label', id:'k', text:'even stream between hands', x:50, y:88}
    ]},
  { caption: "Catch with a soft left hand. Do not clamp mid-stream.",
    beats: ["catch"],
    actions: [
      {t:'deck', id:'caught', x:42, y:55, n:52},
      {t:'label', id:'k', text:'soft catch · then square', x:50, y:88}
    ]},
  { caption: "Square. Start close; add distance only after the stream is even. (See OHS lessons for one-hand work.)",
    actions: [
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'spring complete', x:50, y:88}
    ]}
]};
;
ANIMS.t37 = { steps: [
  { caption: "Sybil Cut — multi-packet finger choreography. Learn each transfer slowly; speed is last.",
    beats: ["split"],
    actions: [
      {t:'packet', id:'a', x:32, y:50, n:13},
      {t:'packet', id:'b', x:50, y:44, n:13},
      {t:'packet', id:'c', x:68, y:50, n:13},
      {t:'hand', id:'rh', x:55, y:35, side:'right', on:true},
      {t:'hand', id:'lh', x:35, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'three clear packets', x:50, y:88}
    ]},
  { caption: "Transfer 1: move packet A to a new finger position. Finish the take before starting the next.",
    beats: ["transfer A"],
    actions: [
      {t:'move', id:'a', x:42, y:48},
      {t:'label', id:'k', text:'one transfer · complete it', x:50, y:88}
    ]},
  { caption: "Transfer 2–3: B and C follow the path. Collisions mean the previous transfer was not finished.",
    beats: ["transfer B/C"],
    actions: [
      {t:'move', id:'b', x:55, y:50},
      {t:'move', id:'c', x:48, y:42},
      {t:'label', id:'k', text:'no collisions · steady tempo', x:50, y:88}
    ]},
  { caption: "Reassemble into one squared deck. Flash is optional; control is required.",
    actions: [
      {t:'remove', id:'a'},{t:'remove', id:'b'},{t:'remove', id:'c'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'squared · order intact if false', x:50, y:88}
    ]}
]};
;
ANIMS.t38 = { steps: [
  { caption: "Spelling Bee — spell the name of a card (or a phrase) and land on the selection.",
    beats: ["spell to find"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'label', id:'k', text:'ready to spell', x:50, y:88}
    ]},
  { caption: "One card per letter — S-P-A-D-E-S or the full name — dealt into a pile.",
    beats: ["the spell"],
    actions: [
      {t:'hand', id:'rh', x:65, y:42, side:'right', on:true},
      {t:'spread', x:14, y:50, count:7, dx:10, face:'down', w:9, prefix:'s'},
      {t:'label', id:'k', text:'one card per letter', x:50, y:88}
    ]},
  { caption: "Turn the last letter — their card. Setup or control made the depth match.",
    actions: [
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'card', id:'found', rank:'A', suit:'♠', x:50, y:40, face:'up', w:14},
      {t:'hi', id:'found', on:true},
      {t:'scale', id:'found', s:1.1},
      {t:'label', id:'k', text:'spelled to the selection', x:50, y:88}
    ]}
]};

ANIMS.t39 = { steps: [
  { caption: "Lazy Magician — the spectator does almost everything. You barely touch the deck.",
    beats: ["hands-off"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'they shuffle · they cut · they pick', x:50, y:88}
    ]},
  { caption: "They select a card, remember it, and lose it back in the deck. Still their hands doing the work.",
    actions: [
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:32, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'move', id:'sel', x:50, y:50},
      {t:'label', id:'k', text:'lost by their own hands', x:50, y:88}
    ]},
  { caption: "A simple procedure later — and you reveal their card. Method works; you take the credit.",
    beats: ["the reveal"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'sel'},
      {t:'card', id:'rev', rank:'A', suit:'♠', x:50, y:42, face:'up', w:14},
      {t:'hi', id:'rev', on:true},
      {t:'scale', id:'rev', s:1.1},
      {t:'label', id:'k', text:'their card — hands-off magic', x:50, y:88}
    ]}
]};

ANIMS.t40 = { steps: [
  { caption: "Poker Player's Picnic — four aces assemble themselves through dealing and gathering.",
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'shuffle and cut into four piles', x:50, y:88}
    ]},
  { caption: "Deal into four piles. The bottom card of each pile becomes an ace through the dealing pattern.",
    beats: ["four piles"],
    actions: [
      {t:'packet', id:'p1', x:25, y:45, n:13},
      {t:'packet', id:'p2', x:42, y:45, n:13},
      {t:'packet', id:'p3', x:58, y:45, n:13},
      {t:'packet', id:'p4', x:75, y:45, n:13},
      {t:'label', id:'k', text:'four piles', x:50, y:88}
    ]},
  { caption: "Turn over the top card of each pile — four aces. Self-working assembly.",
    actions: [
      {t:'card', id:'a1', rank:'A', suit:'♠', x:25, y:38, face:'up', w:11},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:42, y:38, face:'up', w:11},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:58, y:38, face:'up', w:11},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:75, y:38, face:'up', w:11},
      {t:'hi', id:'a1', on:true},{t:'hi', id:'a2', on:true},
      {t:'hi', id:'a3', on:true},{t:'hi', id:'a4', on:true},
      {t:'label', id:'k', text:'four aces', x:50, y:88}
    ]}
]};

ANIMS.t41 = { steps: [
  { caption: "Gemini Twins — two predictions sandwich their selections without you touching the cards after the setup.",
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'card', id:'pred1', rank:'K', suit:'♥', x:30, y:30, face:'up', w:11},
      {t:'card', id:'pred2', rank:'K', suit:'♠', x:70, y:30, face:'up', w:11},
      {t:'label', id:'k', text:'two prediction cards', x:50, y:88}
    ]},
  { caption: "Predictions are inserted into the deck at positions the spectator chooses.",
    beats: ["insertions"],
    actions: [
      {t:'move', id:'pred1', x:40, y:50},
      {t:'move', id:'pred2', x:60, y:50},
      {t:'label', id:'k', text:'inserted at their numbers', x:50, y:88}
    ]},
  { caption: "Spread: each prediction sits next to a selection. The twins found the mates.",
    actions: [
      {t:'remove', id:'d'},
      {t:'card', id:'s1', rank:'A', suit:'♥', x:35, y:50, face:'up', w:11},
      {t:'card', id:'s2', rank:'A', suit:'♠', x:65, y:50, face:'up', w:11},
      {t:'hi', id:'pred1', on:true}, {t:'hi', id:'pred2', on:true},
      {t:'hi', id:'s1', on:true}, {t:'hi', id:'s2', on:true},
      {t:'label', id:'k', text:'predictions next to selections', x:50, y:88}
    ]}
]};
ANIMS.t42 = { steps: [
  { caption: "Impromptu Invisible Deck — they name any card in the deck. No force.",
    beats: ["name any card"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'name any card', x:50, y:88}
    ]},
  { caption: "You spread a deck that looks face-up/face-down mixed — chaos.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'d'},
      {t:'spread', x:10, y:52, count:9, dx:9, face:'down', w:9, prefix:'x'},
      {t:'label', id:'k', text:'mixed face-up and face-down', x:50, y:88}
    ]},
  { caption: "One card is reversed in the middle. It's the named card. Clean and direct.",
    beats: ["the stranger"],
    actions: [
      {t:'card', id:'rev', rank:'A', suit:'♠', x:50, y:40, face:'up', w:12},
      {t:'hi', id:'rev', on:true},
      {t:'scale', id:'rev', s:1.12},
      {t:'label', id:'k', text:'the named card — reversed', x:50, y:88}
    ]}
]};
ANIMS.t43 = { steps: [
  { caption: "Three cards in a row. The queen is the money card. The other two are losers.",
    beats: ["three-card monte"],
    actions: [
      {t:'card', id:'l1', rank:'J', suit:'♣', x:28, y:50, face:'up', w:12},
      {t:'card', id:'q', rank:'Q', suit:'♥', x:50, y:50, face:'up', w:12},
      {t:'card', id:'l2', rank:'J', suit:'♠', x:72, y:50, face:'up', w:12},
      {t:'hi', id:'q', on:true},
      {t:'label', id:'k', text:'find the queen', x:50, y:88}
    ]},
  { caption: "Flip them face-down. Mix with bent-corner work or a simple throw. The eye can't track it.",
    beats: ["the mix"],
    actions: [
      {t:'hi', id:'q', on:false},
      {t:'flip', id:'l1', to:'down'}, {t:'flip', id:'q', to:'down'}, {t:'flip', id:'l2', to:'down'},
      {t:'move', id:'l1', x:50, y:50},
      {t:'move', id:'q', x:28, y:50},
      {t:'move', id:'l2', x:72, y:50},
      {t:'hand', id:'rh', x:55, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'mixed — where is she?', x:50, y:88}
    ]},
  { caption: "They point. You turn over a loser. The queen was never where they thought.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'flip', id:'l1', to:'up'},
      {t:'hi', id:'l1', on:true},
      {t:'label', id:'k', text:'not this one', x:50, y:88}
    ]},
  { caption: "Reveal the queen wherever you need it. Conviction beats complexity.",
    actions: [
      {t:'hi', id:'l1', on:false},
      {t:'flip', id:'q', to:'up'},
      {t:'hi', id:'q', on:true},
      {t:'scale', id:'q', s:1.1},
      {t:'label', id:'k', text:'the queen — always under control', x:50, y:88}
    ]}
]};
ANIMS.t44 = { steps: [
  { caption: "Card to Ceiling — signed card is lost in the deck, then found stuck to the ceiling.",
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:40, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed selection', x:50, y:88}
    ]},
  { caption: "Card is controlled, deck is tossed (or riffled) upward. The signed card sticks to the ceiling.",
    beats: ["the toss"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:50, y:12},
      {t:'scale', id:'sel', s:0.85},
      {t:'hand', id:'rh', x:55, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'stuck to the ceiling', x:50, y:88}
    ]},
  { caption: "Everyone looks up. There it is — signed, impossible, unforgettable.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'card to ceiling', x:50, y:88}
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
  { caption: "Selection in the middle. As you square, the left pinky holds a break under it.",
    beats: ["pinky break"],
    actions: [
      {t:'deck', id:'d', x:50, y:48, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:48, face:'down', w:11},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'note', id:'b', text:'pinky break under the A♠', x:74, y:62}
    ]},
  { caption: "Right hand takes the deck from above and steals that gap as a thumb break.",
    beats: ["thumb break"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true},
      {t:'hi', id:'sel', on:false},
      {t:'label', id:'k', text:'thumb break — invisible from front', x:50, y:88}
    ]},
  { caption: "Left hand undercuts about half the cards below the break and drops them on top.",
    beats: ["first undercut"],
    actions: [
      {t:'packet', id:'low', x:50, y:68, n:16},
      {t:'move', id:'low', x:50, y:30, z:5},
      {t:'label', id:'k', text:'first undercut', x:50, y:88}
    ]},
  { caption: "Undercut the rest below the break on top. The selection is now on top.",
    beats: ["selection to top"],
    actions: [
      {t:'remove', id:'low'}, {t:'remove', id:'sel'}, {t:'remove', id:'d'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'card', id:'top', rank:'A', suit:'♠', x:50, y:40, face:'down', w:11},
      {t:'hi', id:'top', on:true},
      {t:'hand', id:'rh', on:false}, {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'A♠ on top — double undercut done', x:50, y:88}
    ]}
]};
ANIMS.t47 = { steps: [
  { caption: "Two cards face-up. The Mexican Turnover switches one for the other under a scooping flip.",
    actions: [
      {t:'card', id:'a', rank:'A', suit:'♠', x:40, y:50, face:'up', w:13},
      {t:'card', id:'b', rank:'K', suit:'♥', x:60, y:50, face:'up', w:13},
      {t:'hi', id:'a', on:true},
      {t:'label', id:'k', text:'A♠ and K♥', x:50, y:88}
    ]},
  { caption: "Scoop under one card with the other and flip. In that motion the identities trade.",
    beats: ["the scoop-flip"],
    actions: [
      {t:'hi', id:'a', on:false},
      {t:'hand', id:'rh', x:55, y:40, side:'right', on:true},
      {t:'move', id:'a', x:55, y:48},
      {t:'move', id:'b', x:45, y:52},
      {t:'flip', id:'a', to:'down'},
      {t:'flip', id:'b', to:'down'},
      {t:'label', id:'k', text:'scoop and flip', x:50, y:88}
    ]},
  { caption: "What was the Ace is now the King, and vice versa — or so it appears. The switch is invisible.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'flip', id:'b', to:'up'},
      {t:'hi', id:'b', on:true},
      {t:'label', id:'k', text:'identities switched', x:50, y:88}
    ]}
]};
ANIMS.t48 = { steps: [
  { caption: "Princess Card Trick — five cards shown. They think of one. You will name it.",
    beats: ["think of one"],
    actions: [
      {t:'spread', x:14, y:50, count:5, dx:15, face:'up', w:12, prefix:'p',
        cards:[
          {id:'p0', rank:'A', suit:'♠'},{id:'p1', rank:'7', suit:'♥'},
          {id:'p2', rank:'K', suit:'♦'},{id:'p3', rank:'3', suit:'♣'},
          {id:'p4', rank:'Q', suit:'♠'}
        ]},
      {t:'label', id:'k', text:'think of one card', x:50, y:88}
    ]},
  { caption: "You remove cards (via switch or equivoque) until only possibilities consistent with their thought remain.",
    beats: ["eliminate"],
    actions: [
      {t:'move', id:'p1', x:20, y:28},
      {t:'move', id:'p3', x:80, y:28},
      {t:'hand', id:'rh', x:50, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'narrowing down', x:50, y:88}
    ]},
  { caption: "Name their card — or show that the last remaining card is theirs. Either ending lands hard.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'p0'},{t:'remove', id:'p1'},{t:'remove', id:'p3'},{t:'remove', id:'p4'},
      {t:'hi', id:'p2', on:true},
      {t:'scale', id:'p2', s:1.12},
      {t:'move', id:'p2', x:50, y:48},
      {t:'label', id:'k', text:'the thought-of card', x:50, y:88}
    ]}
]};
ANIMS.t49 = { steps: [
  { caption: "Ribbon Spread — a wide, even spread across the table. Display, selection, or flourish.",
    beats: ["table spread"],
    actions: [
      {t:'deck', id:'d', x:30, y:50, n:52},
      {t:'hand', id:'rh', x:38, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'ready to spread', x:50, y:88}
    ]},
  { caption: "Push the deck forward and to the side in one smooth stroke. Cards ribbon out in an even arc or line.",
    beats: ["the stroke"],
    actions: [
      {t:'remove', id:'d'},
      {t:'spread', x:10, y:50, count:12, dx:7, face:'down', w:8, prefix:'r', stagger:20},
      {t:'label', id:'k', text:'ribbon forming', x:50, y:88}
    ]},
  { caption: "Hold the finished spread. Even gaps, clean edges — a professional table display.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'ribbon spread complete', x:50, y:88}
    ]},
  { caption: "Scoop from one end to close, or invite a selection from the spread.",
    actions: [
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'scooped and squared', x:50, y:88}
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
  { caption: "Three cards face-up. You need the A♠ to \"win\" no matter which they point to.",
    beats: ["magician's choice"],
    actions: [
      {t:'card', id:'a', rank:'A', suit:'♠', x:28, y:50, face:'up', w:13},
      {t:'card', id:'b', rank:'7', suit:'♥', x:50, y:50, face:'up', w:13},
      {t:'card', id:'c', rank:'Q', suit:'♣', x:72, y:50, face:'up', w:13},
      {t:'hi', id:'a', on:true},
      {t:'note', id:'n', text:'you need this one', x:28, y:28}
    ]},
  { caption: "They point to the 7♥. That is not the target, so it is the one you eliminate.",
    beats: ["eliminate"],
    actions: [
      {t:'unnote', id:'n'},
      {t:'hi', id:'a', on:false},
      {t:'hi', id:'b', on:true},
      {t:'move', id:'b', x:50, y:24},
      {t:'label', id:'k', text:'\"we\'ll lose that one\"', x:50, y:88}
    ]},
  { caption: "Two left. They point to the A♠. This time the point is the selection — you stop.",
    beats: ["keep it"],
    actions: [
      {t:'hi', id:'b', on:false},
      {t:'remove', id:'b'},
      {t:'hi', id:'a', on:true},
      {t:'move', id:'c', x:78, y:24},
      {t:'label', id:'k', text:'same question · other sentence · A♠ remains', x:50, y:88}
    ]},
  { caption: "If they had pointed to the queen instead, you would have eliminated her. Both routes end on the ace.",
    actions: [
      {t:'remove', id:'c'},
      {t:'move', id:'a', x:50, y:48},
      {t:'scale', id:'a', s:1.1},
      {t:'label', id:'k', text:'the ending was fixed', x:50, y:88}
    ]}
]};
ANIMS.t53 = { steps: [
  { caption: "Pressure Fan — a tighter, more controlled fan formed by pressure between the hands rather than a thumb sweep alone.",
    beats: ["pressure · arc"],
    actions: [
      {t:'deck', id:'d', x:50, y:52, n:52},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:60, y:48, side:'right', on:true},
      {t:'note', id:'b', text:'pressure between the hands', x:50, y:28},
      {t:'label', id:'k', text:'two-hand pressure grip', x:50, y:88}
    ]},
  { caption: "Apply even pressure and open the arc. Cards separate into a tight, uniform fan.",
    beats: ["open"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'d'},
      {t:'fan', x:52, y:55, count:11, spread:95, startDeg:-48, radius:13, w:9, face:'up', prefix:'p',
        cards:[
          {rank:'A',suit:'♠'},{rank:'2',suit:'♥'},{rank:'3',suit:'♣'},{rank:'4',suit:'♦'},
          {rank:'5',suit:'♠'},{rank:'6',suit:'♥'},{rank:'7',suit:'♣'},{rank:'8',suit:'♦'},
          {rank:'9',suit:'♠'},{rank:'10',suit:'♥'},{rank:'J',suit:'♣'}
        ]},
      {t:'label', id:'k', text:'pressure fan opening', x:50, y:88}
    ]},
  { caption: "Hold. Tighter and more refined than a casual thumb fan — ideal for close-up display.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'pressure fan — tight and even', x:50, y:88}
    ]}
]};
ANIMS.t54 = { steps: [
  { caption: "Spread face-up under the guise of searching. The target card will be culled under the spread.",
    beats: ["spread cull"],
    actions: [
      {t:'spread', x:12, y:50, count:8, dx:10, face:'up', w:9, prefix:'c',
        cards:[
          {id:'c0', rank:'3', suit:'♥'},{id:'c1', rank:'9', suit:'♣'},
          {id:'c2', rank:'A', suit:'♠'},{id:'c3', rank:'7', suit:'♦'},
          {id:'c4', rank:'K', suit:'♥'},{id:'c5', rank:'2', suit:'♠'},
          {id:'c6', rank:'J', suit:'♣'},{id:'c7', rank:'5', suit:'♦'}
        ]},
      {t:'hi', id:'c2', on:true},
      {t:'label', id:'k', text:'target: A♠', x:50, y:88}
    ]},
  { caption: "When you reach the target, ride it beneath the spread with the right fingers.",
    beats: ["under the spread"],
    actions: [
      {t:'hi', id:'c2', on:false},
      {t:'move', id:'c2', x:50, y:62, z:1},
      {t:'hand', id:'rh', x:60, y:55, side:'right', on:true},
      {t:'note', id:'b', text:'card rides under the spread', x:50, y:78}
    ]},
  { caption: "Square the spread. The culled card arrives on top (or bottom) invisibly.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'c0'},{t:'remove', id:'c1'},{t:'remove', id:'c3'},
      {t:'remove', id:'c4'},{t:'remove', id:'c5'},{t:'remove', id:'c6'},{t:'remove', id:'c7'},
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'move', id:'c2', x:50, y:40},
      {t:'hi', id:'c2', on:true},
      {t:'label', id:'k', text:'A♠ culled to the top', x:50, y:88}
    ]}
]};
ANIMS.t55 = { steps: [
  { caption: "Side Steal — selection is held under a break mid-deck, then taken into the right palm under a square-up.",
    beats: ["break"],
    actions: [
      {t:'deck', id:'d', x:48, y:50, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:48, y:44, face:'down', w:11},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'lh', x:36, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'break above selection', x:50, y:88}
    ]},
  { caption: "Right hand covers to square. Audience sees a casual adjustment, not a grab.",
    beats: ["cover"],
    actions: [
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'cover from above', x:50, y:88}
    ]},
  { caption: "Under cover, right fingertips contact the selection and slide it right — clear of the pack into the palm.",
    beats: ["extract"],
    actions: [
      {t:'move', id:'sel', x:68, y:48},
      {t:'label', id:'k', text:'sideways extract into palm', x:50, y:88}
    ]},
  { caption: "Hands separate. Deck is clean; selection is palmed for production or load.",
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'deck clean · card stolen', x:50, y:88}
    ]}
]};
;
ANIMS.t56 = { steps: [
  { caption: "Cannibal Cards — four kings \"eat\" selected cards that vanish between them.",
    actions: [
      {t:'card', id:'k1', rank:'K', suit:'♠', x:30, y:45, face:'up', w:11},
      {t:'card', id:'k2', rank:'K', suit:'♥', x:43, y:48, face:'up', w:11},
      {t:'card', id:'k3', rank:'K', suit:'♦', x:57, y:48, face:'up', w:11},
      {t:'card', id:'k4', rank:'K', suit:'♣', x:70, y:45, face:'up', w:11},
      {t:'label', id:'k', text:'four kings — the cannibals', x:50, y:88}
    ]},
  { caption: "A selection is placed between the kings. When the packet is shown again, the selection is gone — eaten.",
    beats: ["the meal"],
    actions: [
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:30, face:'up', w:11},
      {t:'move', id:'sel', x:50, y:48},
      {t:'remove', id:'sel'},
      {t:'label', id:'k', text:'selection vanishes between the kings', x:50, y:88}
    ]},
  { caption: "Repeat with more victims. The kings remain; the selections are gone.",
    actions: [
      {t:'hi', id:'k1', on:true},{t:'hi', id:'k2', on:true},
      {t:'hi', id:'k3', on:true},{t:'hi', id:'k4', on:true},
      {t:'label', id:'k', text:'cannibals still hungry', x:50, y:88}
    ]}
]};
ANIMS.t57 = { steps: [
  { caption: "Gathering of the Clan — scattered aces assemble in one packet through magical gathering.",
    actions: [
      {t:'card', id:'a1', rank:'A', suit:'♠', x:25, y:40, face:'up', w:11},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:50, y:30, face:'up', w:11},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:75, y:40, face:'up', w:11},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:50, y:60, face:'up', w:11},
      {t:'label', id:'k', text:'aces scattered', x:50, y:88}
    ]},
  { caption: "Packets are dealt and gathered. One by one the aces find each other.",
    beats: ["assembly"],
    actions: [
      {t:'move', id:'a1', x:50, y:45},
      {t:'move', id:'a2', x:50, y:48},
      {t:'move', id:'a3', x:50, y:51},
      {t:'move', id:'a4', x:50, y:54},
      {t:'label', id:'k', text:'gathering', x:50, y:88}
    ]},
  { caption: "All four aces together in one place. The clan is gathered.",
    actions: [
      {t:'hi', id:'a1', on:true},{t:'hi', id:'a2', on:true},
      {t:'hi', id:'a3', on:true},{t:'hi', id:'a4', on:true},
      {t:'label', id:'k', text:'all four assembled', x:50, y:88}
    ]}
]};
ANIMS.t58 = { steps: [
  { caption: "Four aces and four jacks, clearly shown in two packets.",
    beats: ["aces · jacks"],
    actions: [
      {t:'spread', x:12, y:36, count:4, dx:12, face:'up', w:11, prefix:'a',
        cards:[{id:'a0',rank:'A',suit:'♠'},{id:'a1',rank:'A',suit:'♥'},{id:'a2',rank:'A',suit:'♦'},{id:'a3',rank:'A',suit:'♣'}]},
      {t:'spread', x:12, y:62, count:4, dx:12, face:'up', w:11, prefix:'j',
        cards:[{id:'j0',rank:'J',suit:'♠'},{id:'j1',rank:'J',suit:'♥'},{id:'j2',rank:'J',suit:'♦'},{id:'j3',rank:'J',suit:'♣'}]},
      {t:'label', id:'k', text:'aces above · jacks below', x:50, y:88}
    ]},
  { caption: "The packets are mixed and dealt. Aces land where jacks were — and jacks where aces were.",
    beats: ["transpose"],
    actions: [
      {t:'hand', id:'rh', x:50, y:48, side:'right', on:true},
      {t:'label', id:'k', text:'packets trade places', x:50, y:88}
    ]},
  { caption: "Show the transposition clearly, then — reset. Everything returns to the start as if nothing happened.",
    beats: ["reset"],
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'hi', id:'a0', on:true},{t:'hi', id:'a1', on:true},
      {t:'hi', id:'j0', on:true},{t:'hi', id:'j1', on:true},
      {t:'label', id:'k', text:'reset — original positions restored', x:50, y:88}
    ]}
]};
ANIMS.t59 = { steps: [
  { caption: "Further Than That — a selection is made and lost. You find it. That's only the beginning.",
    beats: ["phase one"],
    actions: [
      {t:'deck', id:'d', x:50, y:52, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:38, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'selection found', x:50, y:88}
    ]},
  { caption: "Then you show a prediction that named their card before they chose it.",
    beats: ["phase two — prediction"],
    actions: [
      {t:'scale', id:'sel', s:1.08},
      {t:'note', id:'b', text:'predicted in advance', x:72, y:30},
      {t:'label', id:'k', text:'it was predicted', x:50, y:88}
    ]},
  { caption: "Finally the whole deck is shown in perfect order. Each phase goes further than the last.",
    beats: ["phase three — full order"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hi', id:'sel', on:false},
      {t:'remove', id:'sel'},{t:'remove', id:'d'},
      {t:'spread', x:10, y:50, count:10, dx:8, face:'up', w:8, prefix:'o',
        cards:[
          {rank:'A',suit:'♠'},{rank:'2',suit:'♠'},{rank:'3',suit:'♠'},{rank:'4',suit:'♠'},
          {rank:'5',suit:'♠'},{rank:'6',suit:'♠'},{rank:'7',suit:'♠'},{rank:'8',suit:'♠'},
          {rank:'9',suit:'♠'},{rank:'10',suit:'♠'}
        ]},
      {t:'label', id:'k', text:'further than that — deck in order', x:50, y:88}
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
  { caption: "Kruskal Count — lay cards in a row. Start on any card; jump forward by its value.",
    beats: ["the rule"],
    actions: [
      {t:'spread', x:8, y:50, count:12, dx:7.5, face:'up', w:7.5, prefix:'k',
        cards:[
          {id:'k0',rank:'3',suit:'♥'},{id:'k1',rank:'5',suit:'♣'},{id:'k2',rank:'A',suit:'♠'},
          {id:'k3',rank:'7',suit:'♦'},{id:'k4',rank:'2',suit:'♥'},{id:'k5',rank:'9',suit:'♠'},
          {id:'k6',rank:'4',suit:'♣'},{id:'k7',rank:'K',suit:'♦'},{id:'k8',rank:'6',suit:'♥'},
          {id:'k9',rank:'8',suit:'♣'},{id:'k10',rank:'Q',suit:'♠'},{id:'k11',rank:'A',suit:'♦'}
        ]},
      {t:'label', id:'k', text:'pick any starting card', x:50, y:88}
    ]},
  { caption: "Jump by the card's value (face cards = 5). From different starts the path converges.",
    beats: ["convergence"],
    actions: [
      {t:'hi', id:'k0', on:true},
      {t:'hi', id:'k2', on:true},
      {t:'hi', id:'k7', on:true},
      {t:'label', id:'k', text:'paths converge on one card', x:50, y:88}
    ]},
  { caption: "That meeting point is your prediction. Pure math — invisible and inevitable.",
    actions: [
      {t:'hi', id:'k0', on:false},{t:'hi', id:'k2', on:false},
      {t:'hi', id:'k7', on:true},
      {t:'scale', id:'k7', s:1.12},
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
  { caption: "Cascade Shuffle — a waterfall of cards from one hand into the other. Genuine mix, pure style.",
    beats: ["cascade grip"],
    actions: [
      {t:'deck', id:'d', x:38, y:32, n:52},
      {t:'hand', id:'rh', x:44, y:24, side:'right', on:true},
      {t:'hand', id:'lh', x:56, y:62, side:'left', on:true},
      {t:'label', id:'k', text:'waterfall grip', x:50, y:88}
    ]},
  { caption: "Release in a continuous stream. The cascade is even pressure and soft hands.",
    beats: ["the waterfall"],
    actions: [
      {t:'remove', id:'d'},
      {t:'spread', x:32, y:38, count:8, dx:4.5, dy:3, face:'down', w:8, prefix:'c', stagger:32},
      {t:'label', id:'k', text:'cards cascading', x:50, y:88}
    ]},
  { caption: "Catch the cascade and square. Beautiful, and it actually shuffles.",
    actions: [
      {t:'deck', id:'done', x:54, y:55, n:52},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'cascaded and squared', x:50, y:88}
    ]}
]};
ANIMS.t64 = { steps: [
  { caption: "One-Handed Fan — open a wide, even fan with a single hand.",
    beats: ["one hand · full fan"],
    actions: [
      {t:'deck', id:'d', x:48, y:55, n:52},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'note', id:'b', text:'thumb drives · fingers shape', x:48, y:30},
      {t:'label', id:'k', text:'one-hand grip', x:50, y:88}
    ]},
  { caption: "Thumb drives the cards in a smooth arc. Fingers form the curve as the fan opens.",
    beats: ["open"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'d'},
      {t:'fan', x:52, y:56, count:12, spread:110, startDeg:-55, radius:14, w:9, face:'up', prefix:'f',
        cards:[
          {rank:'A',suit:'♠'},{rank:'K',suit:'♥'},{rank:'Q',suit:'♣'},{rank:'J',suit:'♦'},
          {rank:'10',suit:'♠'},{rank:'9',suit:'♥'},{rank:'8',suit:'♣'},{rank:'7',suit:'♦'},
          {rank:'6',suit:'♠'},{rank:'5',suit:'♥'},{rank:'4',suit:'♣'},{rank:'3',suit:'♦'}
        ]},
      {t:'label', id:'k', text:'fan opening', x:50, y:88}
    ]},
  { caption: "Hold. Close with a soft squeeze. Pure one-hand control.",
    actions: [
      {t:'deck', id:'done', x:50, y:52, n:52},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'one-handed fan complete', x:50, y:88}
    ]}
]}

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
  { caption: "Swing cut — a practical, everyday cut. Also the engine inside many false cuts.",
    beats: ["swing cut"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'deck in right hand', x:50, y:88}
    ]},
  { caption: "Left hand takes about half the cards in a swinging motion — thumb on the face, fingers on the back.",
    beats: ["left takes top half"],
    actions: [
      {t:'deck', id:'top', x:38, y:42, n:26},
      {t:'deck', id:'bot', x:58, y:55, n:26},
      {t:'hand', id:'lh', x:30, y:48, side:'left', on:true},
      {t:'label', id:'k', text:'top half swings into left hand', x:50, y:88}
    ]},
  { caption: "Complete the cut: right-hand packet goes on top. Or… leave it out-jogged for a false continuation.",
    beats: ["complete or false"],
    actions: [
      {t:'move', id:'bot', x:38, y:42},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'cut complete — or set up a false cut', x:50, y:88}
    ]}
]};

ANIMS.t67 = { steps: [
  { caption: "Jordan Count — four cards counted as four while hiding the face of the third.",
    beats: ["hide the third"],
    actions: [
      {t:'spread', x:18, y:50, count:4, dx:16, face:'down', w:11, prefix:'j',
        cards:[
          {id:'j0', rank:'7', suit:'♣'},{id:'j1', rank:'4', suit:'♦'},
          {id:'j2', rank:'A', suit:'♠'},{id:'j3', rank:'9', suit:'♥'}
        ]},
      {t:'hi', id:'j2', on:true},
      {t:'label', id:'k', text:'card 3 (A♠) must stay hidden', x:50, y:88}
    ]},
  { caption: "Count \"One\" — take the first card cleanly into the right hand.",
    beats: ["1 clean"],
    actions: [
      {t:'hi', id:'j2', on:false},
      {t:'hand', id:'rh', x:55, y:40, side:'right', on:true},
      {t:'move', id:'j0', x:55, y:48, z:4},
      {t:'label', id:'k', text:'\"One…\"', x:50, y:88}
    ]},
  { caption: "\"Two\" — take the second on top. \"Three\" — a block push puts the original first card back while taking two as one.",
    beats: ["the Jordan move"],
    actions: [
      {t:'move', id:'j1', x:55, y:50, z:3},
      {t:'move', id:'j0', x:42, y:40, z:5},
      {t:'move', id:'j2', x:55, y:48, z:4},
      {t:'label', id:'k', text:'\"Two… Three…\" — third stays hidden', x:50, y:88}
    ]},
  { caption: "\"Four.\" Last card on top. Four counted; the ace never showed.",
    actions: [
      {t:'move', id:'j3', x:55, y:46, z:6},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'four counted · ace invisible', x:50, y:88}
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
  { caption: "Ascanio Spread — a packet display that shows fewer cards than you hold by keeping a block squared.",
    beats: ["secret block"],
    actions: [
      {t:'packet', id:'pkt', x:50, y:50, n:5, w:14},
      {t:'label', id:'k', text:'five cards · show as four', x:50, y:88}
    ]},
  { caption: "Spread the packet between the hands, keeping two cards squared as one in the middle or at the end.",
    beats: ["spread with a hide"],
    actions: [
      {t:'remove', id:'pkt'},
      {t:'card', id:'c1', rank:'A', suit:'♠', x:28, y:50, face:'up', w:11},
      {t:'card', id:'c2', rank:'K', suit:'♥', x:42, y:48, face:'up', w:11},
      {t:'card', id:'c3', rank:'Q', suit:'♦', x:56, y:48, face:'up', w:11},
      {t:'card', id:'c4', rank:'J', suit:'♣', x:70, y:50, face:'up', w:11},
      {t:'hand', id:'rh', x:78, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'four faces · five cards', x:50, y:88}
    ]},
  { caption: "Resquare. The extra card stays hidden. Beautiful, deceptive, and widely used in packet tricks.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'Ascanio — display with a secret', x:50, y:88}
    ]}
]};

ANIMS.t70 = { steps: [
  { caption: "Dr. Daley's Last Trick — two cards change places under impossible conditions.",
    beats: ["two-card transposition"],
    actions: [
      {t:'card', id:'as', rank:'A', suit:'♠', x:38, y:50, face:'up', w:13},
      {t:'card', id:'ah', rank:'A', suit:'♥', x:62, y:50, face:'up', w:13},
      {t:'hi', id:'as', on:true},
      {t:'label', id:'k', text:'black ace · red ace', x:50, y:88}
    ]},
  { caption: "Each ace is placed face-down under a hand or at a corner of the mat. Clear, fair, separated.",
    beats: ["isolated"],
    actions: [
      {t:'hi', id:'as', on:false},
      {t:'flip', id:'as', to:'down'},
      {t:'flip', id:'ah', to:'down'},
      {t:'move', id:'as', x:28, y:55},
      {t:'move', id:'ah', x:72, y:55},
      {t:'hand', id:'lh', x:28, y:42, side:'left', on:true},
      {t:'hand', id:'rh', x:72, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'one under each hand', x:50, y:88}
    ]},
  { caption: "A magical gesture — and they have transposed. Black where red was, red where black was.",
    beats: ["transposition"],
    actions: [
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'flip', id:'as', to:'up'},
      {t:'flip', id:'ah', to:'up'},
      {t:'remove', id:'as'},{t:'remove', id:'ah'},
      {t:'card', id:'r1', rank:'A', suit:'♥', x:28, y:55, face:'up', w:13},
      {t:'card', id:'r2', rank:'A', suit:'♠', x:72, y:55, face:'up', w:13},
      {t:'hi', id:'r1', on:true},{t:'hi', id:'r2', on:true},
      {t:'label', id:'k', text:'they changed places', x:50, y:88}
    ]}
]};

ANIMS.t71 = { steps: [
  { caption: "Homing Card — the selected card keeps returning to your hand no matter how often it's lost in the deck.",
    beats: ["it comes back"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:35, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'their card', x:50, y:88}
    ]},
  { caption: "Lose it in the middle. Snap — it's back on top (or in the hand).",
    beats: ["return #1"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:50, y:55},
      {t:'remove', id:'sel'},
      {t:'card', id:'back', rank:'A', suit:'♠', x:50, y:38, face:'up', w:12},
      {t:'hi', id:'back', on:true},
      {t:'scale', id:'back', s:1.08},
      {t:'label', id:'k', text:'back again', x:50, y:88}
    ]},
  { caption: "Lose it deeper. It returns. Again. The card refuses to stay away — a perfect follow-up to Ambitious Card.",
    beats: ["it won't stay lost"],
    actions: [
      {t:'hi', id:'back', on:false},
      {t:'scale', id:'back', s:1},
      {t:'move', id:'back', x:50, y:55},
      {t:'remove', id:'back'},
      {t:'card', id:'final', rank:'A', suit:'♠', x:50, y:40, face:'up', w:13},
      {t:'hi', id:'final', on:true},
      {t:'scale', id:'final', s:1.1},
      {t:'label', id:'k', text:'homing card — always comes home', x:50, y:88}
    ]}
]};

ANIMS.t72 = { steps: [
  { caption: "Card Warp — a card folded in half visibly turns inside out while trapped in another folded card.",
    beats: ["visual impossibility"],
    actions: [
      {t:'card', id:'cover', rank:'K', suit:'♥', x:40, y:50, face:'up', w:14},
      {t:'card', id:'warp', rank:'A', suit:'♠', x:60, y:50, face:'up', w:14},
      {t:'hi', id:'warp', on:true},
      {t:'label', id:'k', text:'two cards · one will warp', x:50, y:88}
    ]},
  { caption: "Fold both in half. Slide the face-down folded card partway into the folded cover card.",
    beats: ["nested folds"],
    actions: [
      {t:'hi', id:'warp', on:false},
      {t:'move', id:'cover', x:50, y:48},
      {t:'move', id:'warp', x:50, y:52},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'warped card trapped in the fold', x:50, y:88}
    ]},
  { caption: "Push it through. It emerges face-up — turned inside out while fully caged. Mind-bending and visual.",
    beats: ["the warp"],
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'flip', id:'warp', to:'up'},
      {t:'hi', id:'warp', on:true},
      {t:'scale', id:'warp', s:1.1},
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
  { caption: "Spectator Cuts to the Aces — they cut the deck into four piles. Each pile has an ace on top.",
    beats: ["hands-off aces"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'they cut into four piles', x:50, y:88}
    ]},
  { caption: "Four piles, cut by the spectator. You never touch the cards after the initial setup.",
    beats: ["their cuts"],
    actions: [
      {t:'remove', id:'d'},
      {t:'packet', id:'p1', x:25, y:50, n:13},
      {t:'packet', id:'p2', x:42, y:50, n:13},
      {t:'packet', id:'p3', x:58, y:50, n:13},
      {t:'packet', id:'p4', x:75, y:50, n:13},
      {t:'label', id:'k', text:'four spectator-cut piles', x:50, y:88}
    ]},
  { caption: "Turn over the top card of each pile — four aces. Self-working and devastatingly fair.",
    beats: ["four aces"],
    actions: [
      {t:'card', id:'a1', rank:'A', suit:'♠', x:25, y:38, face:'up', w:11},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:42, y:38, face:'up', w:11},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:58, y:38, face:'up', w:11},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:75, y:38, face:'up', w:11},
      {t:'hi', id:'a1', on:true},{t:'hi', id:'a2', on:true},
      {t:'hi', id:'a3', on:true},{t:'hi', id:'a4', on:true},
      {t:'label', id:'k', text:'they cut to the aces', x:50, y:88}
    ]}
]}

ANIMS.t75 = { steps: [
  { caption: "Bottom Deal — deal the bottom card while appearing to deal from the top. The gambling companion to the second deal.",
    beats: ["false bottom deal"],
    actions: [
      {t:'deck', id:'d', x:42, y:48, n:51},
      {t:'card', id:'bot', rank:'A', suit:'♠', x:42, y:58, face:'down', w:11},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'lh', x:32, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'bottom card will be dealt', x:50, y:88}
    ]},
  { caption: "Right hand comes over as if taking the top card. Left fingers buckle or release the bottom card into the deal.",
    beats: ["the take"],
    actions: [
      {t:'hi', id:'bot', on:false},
      {t:'hand', id:'rh', x:58, y:48, side:'right', on:true},
      {t:'move', id:'bot', x:70, y:52, z:5},
      {t:'note', id:'b', text:'bottom card into the deal', x:70, y:70},
      {t:'label', id:'k', text:'looks like a top deal', x:50, y:88}
    ]},
  { caption: "The top stock is untouched. From the front it was a clean, ordinary deal.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'hi', id:'bot', on:true},
      {t:'flip', id:'bot', to:'up'},
      {t:'label', id:'k', text:'A♠ from the bottom', x:50, y:88}
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
  { caption: "Hamman Count — count a packet while switching the two halves mid-count. Hides extras or wrong faces.",
    beats: ["packet switch-count"],
    actions: [
      {t:'spread', x:18, y:50, count:6, dx:12, face:'down', w:10, prefix:'h'},
      {t:'hand', id:'lh', x:30, y:60, side:'left', on:true},
      {t:'label', id:'k', text:'six cards · count as six', x:50, y:88}
    ]},
  { caption: "Count the first few into the right hand. Mid-count, the hands exchange stocks under a steady rhythm.",
    beats: ["the switch"],
    actions: [
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'packet', id:'taken', x:55, y:48, n:3},
      {t:'note', id:'b', text:'halves switch here', x:55, y:68},
      {t:'label', id:'k', text:'switch under the beat', x:50, y:88}
    ]},
  { caption: "Finish the spoken count. Number matches; faces never told the truth.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'Hamman — rhythm sells the lie', x:50, y:88}
    ]}
]};

ANIMS.t78 = { steps: [
  { caption: "Piano Card Trick — a self-working classic. Pairs of cards dealt; the spectator's selection finds its mate.",
    beats: ["self-working pairs"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'pairs dealt face-down', x:50, y:88}
    ]},
  { caption: "Deal the deck into pairs. Spectator points to a pair that contains their thought-of card (or a selected pair is isolated).",
    beats: ["isolate a pair"],
    actions: [
      {t:'remove', id:'d'},
      {t:'packet', id:'pair', x:50, y:50, n:2, w:14},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'their pair', x:50, y:88}
    ]},
  { caption: "Through a simple eliminate-or-keep procedure on the remaining pairs, their card's mate is forced into view.",
    beats: ["mate revealed"],
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'mate', rank:'A', suit:'♥', x:42, y:45, face:'up', w:12},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:58, y:45, face:'up', w:12},
      {t:'hi', id:'mate', on:true},{t:'hi', id:'sel', on:true},
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
  { caption: "Bottom Palm — steal the bottom card into the left palm under cover of squaring or handing the deck away.",
    beats: ["steal from bottom"],
    actions: [
      {t:'deck', id:'d', x:48, y:48, n:51},
      {t:'card', id:'bot', rank:'A', suit:'♠', x:48, y:58, face:'down', w:11},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'lh', x:36, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'bottom card targeted', x:50, y:88}
    ]},
  { caption: "As the right hand takes the deck, the left fingers curl the bottom card into the palm. Deck leaves clean.",
    beats: ["the steal"],
    actions: [
      {t:'hi', id:'bot', on:false},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'move', id:'d', x:62, y:42},
      {t:'move', id:'bot', x:36, y:58, z:2},
      {t:'scale', id:'bot', s:0.85},
      {t:'note', id:'b', text:'palmed in left', x:28, y:72},
      {t:'label', id:'k', text:'deck handed away · card retained', x:50, y:88}
    ]},
  { caption: "Produce later from the pocket, the hand, or load it into a wallet. Same acting rules as the top palm.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'move', id:'bot', x:50, y:45},
      {t:'scale', id:'bot', s:1.08},
      {t:'flip', id:'bot', to:'up'},
      {t:'hi', id:'bot', on:true},
      {t:'label', id:'k', text:'produced from the palm', x:50, y:88}
    ]}
]};

ANIMS.t82 = { steps: [
  { caption: "Breather Crimp — a subtle, permanent bend that lets you cut to a card by feel alone.",
    beats: ["locator card"],
    actions: [
      {t:'card', id:'crimp', rank:'A', suit:'♠', x:50, y:50, face:'down', w:14},
      {t:'hi', id:'crimp', on:true},
      {t:'label', id:'k', text:'the work card', x:50, y:88}
    ]},
  { caption: "A lengthwise (or widthwise) bend put in under the guise of handling. Once set, it survives shuffles.",
    beats: ["the work"],
    actions: [
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'note', id:'b', text:'soft lengthwise bend', x:50, y:28},
      {t:'label', id:'k', text:'invisible to the eye · obvious to the thumb', x:50, y:88}
    ]},
  { caption: "Riffle or cut; the deck wants to break at the crimp. Instant control without a visible break.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'deck', id:'d', x:50, y:55, n:52},
      {t:'move', id:'crimp', x:50, y:40},
      {t:'hi', id:'crimp', on:true},
      {t:'label', id:'k', text:'cut straight to it', x:50, y:88}
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
  { caption: "Flick Change (Twirl Change) — a sharp visual change of a face-up card with a flick of the fingers.",
    beats: ["visual change"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:50, face:'up', w:14},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'A♠ in view', x:50, y:88}
    ]},
  { caption: "A second card is hidden behind or in grip. A sharp flick or twirl exchanges them in a blur.",
    beats: ["the flick"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'remove', id:'c'},
      {t:'card', id:'c2', rank:'K', suit:'♥', x:50, y:50, face:'up', w:14},
      {t:'scale', id:'c2', s:1.1},
      {t:'hi', id:'c2', on:true},
      {t:'label', id:'k', text:'instant change', x:50, y:88}
    ]},
  { caption: "Hold for a beat. The change should feel like a spark, not a move.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'flick change complete', x:50, y:88}
    ]}
]};

ANIMS.t85 = { steps: [
  { caption: "Everywhere and Nowhere — their card is shown in several places, then vanishes, then appears where it shouldn't.",
    beats: ["classic plot"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:38, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'their card', x:50, y:88}
    ]},
  { caption: "Show it on top… no, in the middle… no, on the bottom — each time a double or switch lies.",
    beats: ["false shows"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:50, y:55},
      {t:'remove', id:'sel'},
      {t:'card', id:'show', rank:'A', suit:'♠', x:50, y:40, face:'up', w:12},
      {t:'hi', id:'show', on:true},
      {t:'label', id:'k', text:'\"here… no, here…\"', x:50, y:88}
    ]},
  { caption: "Finally it vanishes from the deck entirely — and turns up in the pocket, the mouth, or a sealed envelope.",
    beats: ["vanish · remote produce"],
    actions: [
      {t:'hi', id:'show', on:false},
      {t:'remove', id:'show'},
      {t:'card', id:'final', rank:'A', suit:'♠', x:72, y:40, face:'up', w:13},
      {t:'hi', id:'final', on:true},
      {t:'scale', id:'final', s:1.1},
      {t:'label', id:'k', text:'nowhere in the deck · somewhere impossible', x:50, y:88}
    ]}
]};

ANIMS.t86 = { steps: [
  { caption: "Elevator Cards — three cards (or a selection and mates) penetrate up through the packet one by one.",
    beats: ["penetration"],
    actions: [
      {t:'spread', x:22, y:50, count:4, dx:14, face:'up', w:11, prefix:'e',
        cards:[
          {id:'e0', rank:'A', suit:'♠'},{id:'e1', rank:'2', suit:'♥'},
          {id:'e2', rank:'3', suit:'♣'},{id:'e3', rank:'4', suit:'♦'}
        ]},
      {t:'hi', id:'e0', on:true},
      {t:'label', id:'k', text:'ace goes to the bottom', x:50, y:88}
    ]},
  { caption: "Ace is placed on the bottom of the small packet. Snap — it rises to the top.",
    beats: ["first rise"],
    actions: [
      {t:'hi', id:'e0', on:false},
      {t:'move', id:'e0', x:50, y:62},
      {t:'move', id:'e0', x:50, y:38, z:5},
      {t:'hi', id:'e0', on:true},
      {t:'label', id:'k', text:'back on top', x:50, y:88}
    ]},
  { caption: "Repeat with the next card. Each \"elevator\" ride uses a double lift or buckle to fake the penetration.",
    actions: [
      {t:'scale', id:'e0', s:1.08},
      {t:'label', id:'k', text:'elevator — up through the packet', x:50, y:88}
    ]}
]};

ANIMS.t87 = { steps: [
  { caption: "Color-Changing Deck — a red deck becomes blue (or vice versa) through clean displays.",
    beats: ["full deck color change"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'red-backed deck shown', x:50, y:88}
    ]},
  { caption: "Faces shown freely. A cover card and a sequence of turns set the change.",
    beats: ["the work"],
    actions: [
      {t:'spread', x:14, y:50, count:7, dx:10, face:'up', w:9, prefix:'c'},
      {t:'label', id:'k', text:'faces free · backs about to change', x:50, y:88}
    ]},
  { caption: "Final spread: every back is the other color. Optional stranger-card kicker.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'d'},
      {t:'spread', x:14, y:50, count:7, dx:10, face:'down', w:9, prefix:'b'},
      {t:'label', id:'k', text:'whole deck changed color', x:50, y:88}
    ]}
]};

ANIMS.t88 = { steps: [
  { caption: "Any Card at Any Number (ACAAN) — they name a card and a number; that card is at that position.",
    beats: ["named card · named number"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'name a card · name a number', x:50, y:88}
    ]},
  { caption: "With a stacked deck, a cut, or a simple shift, the named card is brought to the named position.",
    beats: ["the shift"],
    actions: [
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'cut or shift to position', x:50, y:88}
    ]},
  { caption: "Count down to their number. Turn the card — it's the one they named. Hands-off versions exist for pure self-workers.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'named', rank:'A', suit:'♠', x:50, y:40, face:'up', w:14},
      {t:'hi', id:'named', on:true},
      {t:'scale', id:'named', s:1.12},
      {t:'label', id:'k', text:'their card at their number', x:50, y:88}
    ]}
]}

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
  { caption: "Mercury Card Fold — fold a card into quarters inside the palm so it becomes a tiny packet.",
    beats: ["card in palm"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:48, face:'up', w:14},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', x:58, y:52, side:'right', on:true},
      {t:'label', id:'k', text:'card secured in palm', x:50, y:88}
    ]},
  { caption: "First fold: lengthwise (or short-wise — pick one system and stick to it).",
    beats: ["fold 1"],
    actions: [
      {t:'scale', id:'c', s:0.7},
      {t:'label', id:'k', text:'first fold', x:50, y:88}
    ]},
  { caption: "Second fold: the other direction. Card is now a compact quarter-packet hidden in the hand.",
    beats: ["fold 2"],
    actions: [
      {t:'scale', id:'c', s:0.45},
      {t:'hi', id:'c', on:false},
      {t:'label', id:'k', text:'quartered · hidden', x:50, y:88}
    ]},
  { caption: "Load into pocket, wallet, or envelope. Unfold later for a signed-card reveal in an impossible place.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'load · delay · reveal', x:50, y:88}
    ]}
]};
;

ANIMS.t91 = { steps: [
  { caption: "False Riffle Shuffle — looks like a thorough riffle; preserves full order or a large stock.",
    beats: ["split"],
    actions: [
      {t:'deck', id:'l', x:35, y:50, n:26},
      {t:'deck', id:'r', x:65, y:50, n:26},
      {t:'hand', id:'lh', x:28, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:72, y:55, side:'right', on:true},
      {t:'label', id:'k', text:'two halves on the table', x:50, y:88}
    ]},
  { caption: "Riffle so the packets appear to weave — but the weave strips (or unweaves) back to original order as you push.",
    beats: ["false weave"],
    actions: [
      {t:'spread', x:30, y:48, count:6, dx:5, face:'down', w:8, prefix:'a'},
      {t:'spread', x:52, y:52, count:6, dx:5, face:'down', w:8, prefix:'b'},
      {t:'label', id:'k', text:'looks woven · order planned', x:50, y:88}
    ]},
  { caption: "Push flush and square. Audience saw a shuffle; your stock (or full order) remains.",
    actions: [
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'squared · order retained', x:50, y:88}
    ]}
]};
;

ANIMS.t92 = { steps: [
  { caption: "Card to Wallet — signed selection leaves the deck and appears in a wallet that stayed in view or pocket.",
    beats: ["control"],
    actions: [
      {t:'deck', id:'d', x:45, y:50, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:45, y:38, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'selection controlled', x:50, y:88}
    ]},
  { caption: "Palm or ditch the card. Load into the wallet (or a window envelope inside) while opening it or gesturing.",
    beats: ["palm · load"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:70, y:42},
      {t:'hand', id:'rh', x:72, y:45, side:'right', on:true},
      {t:'label', id:'k', text:'steal · load under cover of opening', x:50, y:88}
    ]},
  { caption: "Open the wallet fully. Their signed card is inside — personal and impossible.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'move', id:'sel', x:50, y:48},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'scale', id:'sel', s:1.08},
      {t:'label', id:'k', text:'wallet empty → then card', x:50, y:88}
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
  { caption: "Full-Deck Brainwave — they name any card; it is the only face-up (or odd-backed) card in the deck.",
    beats: ["named"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'any card named', x:50, y:88}
    ]},
  { caption: "A faro, cut, or hidden reverse positions their card as the stranger before you spread.",
    beats: ["position"],
    actions: [
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'secret positioning', x:50, y:88}
    ]},
  { caption: "Spread face-down: one card faces up (or shows a different back). It is the named card.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'spread', x:15, y:50, count:10, dx:7, face:'down', w:8, prefix:'s'},
      {t:'card', id:'odd', rank:'A', suit:'♠', x:50, y:42, face:'up', w:12},
      {t:'hi', id:'odd', on:true},
      {t:'scale', id:'odd', s:1.08},
      {t:'label', id:'k', text:'only stranger in the deck', x:50, y:88}
    ]}
]};
;

ANIMS.t96 = { steps: [
  { caption: "Vanishing Deck — the whole deck disappears, leaving a single card or empty hands.",
    beats: ["full deck"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:60, y:55, side:'right', on:true},
      {t:'label', id:'k', text:'deck in play', x:50, y:88}
    ]},
  { caption: "Cover: box, silk, fold, or a ditch to lap/pocket. The mass leaves under that cover.",
    beats: ["cover · ditch"],
    actions: [
      {t:'remove', id:'d'},
      {t:'label', id:'k', text:'cover · deck goes', x:50, y:88}
    ]},
  { caption: "Show empty hands or a single remaining card. Optional kicker: produce the deck again from a pocket.",
    actions: [
      {t:'card', id:'one', rank:'A', suit:'♠', x:50, y:48, face:'up', w:12},
      {t:'hi', id:'one', on:true},
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'shock first · clean second', x:50, y:88}
    ]}
]};


ANIMS.t97 = { steps: [
  { caption: "Center Deal — deal a card from the middle while it looks like a top deal. Advanced gambling technique.",
    beats: ["step / break"],
    actions: [
      {t:'deck', id:'d', x:45, y:50, n:52},
      {t:'card', id:'mid', rank:'A', suit:'♠', x:45, y:44, face:'down', w:11},
      {t:'hi', id:'mid', on:true},
      {t:'hand', id:'lh', x:35, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'break or step marks the card', x:50, y:88}
    ]},
  { caption: "Deal motion looks like a top deal. The take is from the step; the true top card stays.",
    beats: ["deal from center"],
    actions: [
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'move', id:'mid', x:70, y:50},
      {t:'label', id:'k', text:'take from the step · top stays', x:50, y:88}
    ]},
  { caption: "Dealt card hits the table. Top and bottom stocks remain intact for stacked demos.",
    actions: [
      {t:'flip', id:'mid', to:'up'},
      {t:'hi', id:'mid', on:true},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'center dealt · stocks safe', x:50, y:88}
    ]}
]};
;

ANIMS.t98 = { steps: [
  { caption: "Greek Deal — deal the second card from the bottom while appearing to deal the top. Rare and deadly.",
    beats: ["second from bottom"],
    actions: [
      {t:'deck', id:'d', x:45, y:48, n:50},
      {t:'card', id:'bot', rank:'K', suit:'♠', x:45, y:60, face:'down', w:10},
      {t:'card', id:'greek', rank:'A', suit:'♠', x:45, y:58, face:'down', w:10},
      {t:'hi', id:'greek', on:true},
      {t:'hand', id:'lh', x:34, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'second-from-bottom targeted', x:50, y:88}
    ]},
  { caption: "Bottom card stays; the one above it is taken in the deal. Cover is identical to a clean top deal.",
    beats: ["the take"],
    actions: [
      {t:'hi', id:'greek', on:false},
      {t:'hand', id:'rh', x:60, y:48, side:'right', on:true},
      {t:'move', id:'greek', x:70, y:50, z:5},
      {t:'label', id:'k', text:'Greek deal in action', x:50, y:88}
    ]},
  { caption: "Bottom card still there; the Greek card is in play. Extreme angle sensitivity — practice in a mirror.",
    actions: [
      {t:'flip', id:'greek', to:'up'},
      {t:'hi', id:'greek', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'A♠ dealt · bottom intact', x:50, y:88}
    ]}
]};

ANIMS.t99 = { steps: [
  { caption: "Overhand Stack — build a desired order (pair, trips, full house) during an overhand shuffle.",
    beats: ["stack while shuffling"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'run-up shuffle', x:50, y:88}
    ]},
  { caption: "Run cards singly or in small groups, counting to yourself, so the target cards land at the deal positions you need.",
    beats: ["run the cards"],
    actions: [
      {t:'packet', id:'run', x:55, y:40, n:8},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'counting into position', x:50, y:88}
    ]},
  { caption: "Finish the shuffle. When dealt, the stacked hand appears — fair shuffle, fixed outcome.",
    actions: [
      {t:'remove', id:'run'},{t:'remove', id:'d'},
      {t:'spread', x:15, y:50, count:5, dx:12, face:'up', w:11, prefix:'s',
        cards:[{rank:'A',suit:'♠'},{rank:'A',suit:'♥'},{rank:'A',suit:'♦'},{rank:'K',suit:'♠'},{rank:'K',suit:'♥'}]},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'stacked hand deals itself', x:50, y:88}
    ]}
]};

ANIMS.t100 = { steps: [
  { caption: "The Hop — tabled false cut: after they cut, you restore the original top stock while squaring.",
    beats: ["they cut"],
    actions: [
      {t:'deck', id:'a', x:40, y:50, n:26},
      {t:'deck', id:'b', x:60, y:50, n:26},
      {t:'label', id:'k', text:'spectator cut — two piles', x:50, y:88}
    ]},
  { caption: "As you complete the cut, the hands hop the original top half back on top under the square-up.",
    beats: ["hop"],
    actions: [
      {t:'hand', id:'rh', x:55, y:40, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'move', id:'a', x:50, y:45},
      {t:'move', id:'b', x:50, y:55},
      {t:'label', id:'k', text:'hop original top back', x:50, y:88}
    ]},
  { caption: "Deck looks cut and squared. Original top cards are back — ready for the deal.",
    actions: [
      {t:'remove', id:'a'},{t:'remove', id:'b'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'top stock restored', x:50, y:88}
    ]}
]};
;

ANIMS.t101 = { steps: [
  { caption: "The Cooler — switch the entire deck for a stacked (cold) deck under a gesture, case, or body turn.",
    beats: ["two decks"],
    actions: [
      {t:'deck', id:'hot', x:40, y:50, n:52},
      {t:'deck', id:'cold', x:65, y:50, n:52},
      {t:'hi', id:'cold', on:true},
      {t:'label', id:'k', text:'hot in play · cold ready', x:50, y:88}
    ]},
  { caption: "Under a square-up, case, or body turn, the decks trade places. Misdirection does the heavy lifting.",
    beats: ["switch"],
    actions: [
      {t:'hand', id:'rh', x:55, y:40, side:'right', on:true},
      {t:'move', id:'hot', x:65, y:50},
      {t:'move', id:'cold', x:40, y:50},
      {t:'hi', id:'cold', on:false},
      {t:'label', id:'k', text:'trade under cover', x:50, y:88}
    ]},
  { caption: "Continue with the cold deck. The table never saw a second pack.",
    actions: [
      {t:'remove', id:'hot'},
      {t:'hand', id:'rh', on:false},
      {t:'hi', id:'cold', on:true},
      {t:'label', id:'k', text:'cold deck in play', x:50, y:88}
    ]}
]};
;

ANIMS.t102 = { steps: [
  { caption: "Tossed-Out Deck — several spectators each peek a card from a rubber-banded deck tossed into the audience.",
    beats: ["multiple minds"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'note', id:'b', text:'banded · banked', x:50, y:28},
      {t:'label', id:'k', text:'deck tossed out', x:50, y:88}
    ]},
  { caption: "Each person opens slightly, remembers one card, closes it. The deck returns.",
    beats: ["free peeks"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'spread', x:18, y:50, count:5, dx:12, face:'up', w:10, prefix:'p',
        cards:[{rank:'A',suit:'♠'},{rank:'7',suit:'♥'},{rank:'K',suit:'♦'},{rank:'3',suit:'♣'},{rank:'Q',suit:'♠'}]},
      {t:'label', id:'k', text:'several cards peeked', x:50, y:88}
    ]},
  { caption: "You name every peeked card. A stacked or restricted bank makes the \"free\" peeks knowable.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'every thought named', x:50, y:88}
    ]}
]};

ANIMS.t103 = { steps: [
  { caption: "Think of a Card — pure mentalism presentation. They think of a card; you name it. Method is flexible.",
    beats: ["thought of card"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'think of any card', x:50, y:88}
    ]},
  { caption: "No card is touched. Through glimpses, psychological forces, or a stacked bank, you narrow to their thought.",
    beats: ["narrowing"],
    actions: [
      {t:'hand', id:'rh', x:55, y:40, side:'right', on:true},
      {t:'note', id:'b', text:'process is invisible', x:50, y:28},
      {t:'label', id:'k', text:'reading the thought', x:50, y:88}
    ]},
  { caption: "Name the card. Or have them remove it themselves and confirm. The less procedure, the stronger the mind-read.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'thought', rank:'A', suit:'♠', x:50, y:45, face:'up', w:14},
      {t:'hi', id:'thought', on:true},
      {t:'scale', id:'thought', s:1.12},
      {t:'label', id:'k', text:'the thought-of card', x:50, y:88}
    ]}
]};

ANIMS.t104 = { steps: [
  { caption: "Psychic Poker — you predict or control the outcome of a poker deal without touching the cards after the shuffle.",
    beats: ["poker prediction"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'shuffle · deal five-card hands', x:50, y:88}
    ]},
  { caption: "Hands are dealt. A prediction envelope or a claimed \"feeling\" names the winning hand before the reveal.",
    beats: ["prediction in play"],
    actions: [
      {t:'packet', id:'h1', x:30, y:50, n:5},
      {t:'packet', id:'h2', x:50, y:50, n:5},
      {t:'packet', id:'h3', x:70, y:50, n:5},
      {t:'label', id:'k', text:'hands dealt · prediction waits', x:50, y:88}
    ]},
  { caption: "Winning hand matches the prediction. Stack, cool-deck, or psychological force does the work.",
    actions: [
      {t:'remove', id:'h1'},{t:'remove', id:'h2'},{t:'remove', id:'h3'},
      {t:'spread', x:18, y:50, count:5, dx:12, face:'up', w:11, prefix:'w',
        cards:[{rank:'A',suit:'♠'},{rank:'A',suit:'♥'},{rank:'A',suit:'♦'},{rank:'A',suit:'♣'},{rank:'K',suit:'♠'}]},
      {t:'label', id:'k', text:'predicted winner', x:50, y:88}
    ]}
]};

ANIMS.t105 = { steps: [
  { caption: "Mental Epic (Cards) — three predictions for three spectator choices, revealed one by one with a final kicker.",
    beats: ["triple prediction"],
    actions: [
      {t:'note', id:'b', text:'three predictions written', x:50, y:30},
      {t:'label', id:'k', text:'Mental Epic board or envelopes', x:50, y:88}
    ]},
  { caption: "Spectator one names a card; spectator two a number; spectator three a suit (or similar). Each prediction is isolated.",
    beats: ["three choices"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'card', id:'c1', rank:'A', suit:'♠', x:28, y:50, face:'down', w:11},
      {t:'card', id:'c2', rank:'7', suit:'♥', x:50, y:50, face:'down', w:11},
      {t:'card', id:'c3', rank:'K', suit:'♦', x:72, y:50, face:'down', w:11},
      {t:'label', id:'k', text:'three free choices', x:50, y:88}
    ]},
  { caption: "Reveal one, two — then the third. Two hits and a clever dual-reality or switch on the last make it airtight.",
    actions: [
      {t:'flip', id:'c1', to:'up'},{t:'flip', id:'c2', to:'up'},{t:'flip', id:'c3', to:'up'},
      {t:'hi', id:'c1', on:true},{t:'hi', id:'c2', on:true},{t:'hi', id:'c3', on:true},
      {t:'label', id:'k', text:'all three predicted', x:50, y:88}
    ]}
]};

ANIMS.t106 = { steps: [
  { caption: "Dead Man's Hand — a prediction names the two-pair hand Wild Bill Hickok held when he was shot: aces and eights.",
    beats: ["historical prediction"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'note', id:'b', text:'prediction: aces and eights', x:50, y:28},
      {t:'label', id:'k', text:'Dead Man\'s Hand', x:50, y:88}
    ]},
  { caption: "Through a deal, a force, or a stacked packet, the spectator arrives at two aces and two eights.",
    beats: ["the deal"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'spread', x:15, y:50, count:5, dx:12, face:'down', w:11, prefix:'h'},
      {t:'label', id:'k', text:'five cards dealt', x:50, y:88}
    ]},
  { caption: "Turn them over: black aces and black eights — the Dead Man's Hand. History and cards collide.",
    actions: [
      {t:'remove', id:'h0'},{t:'remove', id:'h1'},{t:'remove', id:'h2'},{t:'remove', id:'h3'},{t:'remove', id:'h4'},
      {t:'card', id:'a1', rank:'A', suit:'♠', x:22, y:48, face:'up', w:11},
      {t:'card', id:'a2', rank:'A', suit:'♣', x:36, y:48, face:'up', w:11},
      {t:'card', id:'e1', rank:'8', suit:'♠', x:50, y:48, face:'up', w:11},
      {t:'card', id:'e2', rank:'8', suit:'♣', x:64, y:48, face:'up', w:11},
      {t:'card', id:'k', rank:'K', suit:'♦', x:78, y:48, face:'up', w:11},
      {t:'hi', id:'a1', on:true},{t:'hi', id:'a2', on:true},
      {t:'hi', id:'e1', on:true},{t:'hi', id:'e2', on:true},
      {t:'label', id:'k', text:'aces and eights', x:50, y:88}
    ]}
]}

ANIMS.t107 = { steps: [
  { caption: "Herrmann Pass — a quiet, coverable pass. The right hand screens while the halves transpose.",
    beats: ["covered pass"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'note', id:'b', text:'pinky break between halves', x:70, y:62},
      {t:'label', id:'k', text:'break held', x:50, y:88}
    ]},
  { caption: "Right hand covers. The bottom half swings out and over as the top half drops under — screened by the right fingers.",
    beats: ["the transpose"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'deck', id:'bot', x:42, y:58, n:26},
      {t:'deck', id:'top', x:55, y:42, n:26},
      {t:'move', id:'bot', x:50, y:42},
      {t:'move', id:'top', x:50, y:58},
      {t:'label', id:'k', text:'halves transpose under cover', x:50, y:88}
    ]},
  { caption: "Square immediately. Softer and more angle-friendly than a classic pass for many hands.",
    actions: [
      {t:'remove', id:'bot'},{t:'remove', id:'top'},{t:'remove', id:'d'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'Herrmann pass complete', x:50, y:88}
    ]}
]};

ANIMS.t108 = { steps: [
  { caption: "Half Pass — secretly reverse the bottom half (or a packet) under cover of the top stock.",
    beats: ["secret reverse"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'label', id:'k', text:'bottom half will reverse', x:50, y:88}
    ]},
  { caption: "Right hand covers. Left fingers flip the bottom section face-up while the top cards screen the action.",
    beats: ["the flip"],
    actions: [
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'note', id:'b', text:'bottom half turns under cover', x:50, y:28},
      {t:'label', id:'k', text:'half pass in progress', x:50, y:88}
    ]},
  { caption: "Square up. Bottom stock is face-up under a face-down cover — ready for Triumph, color changes, and reverses.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'half pass complete', x:50, y:88}
    ]}
]};

ANIMS.t109 = { steps: [
  { caption: "Braue Reversal — reverse a card (or packet) while cutting the deck, under cover of a natural action.",
    beats: ["reverse under cut"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:40, face:'down', w:11},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'card to reverse', x:50, y:88}
    ]},
  { caption: "Cut half the deck into the right hand. The selection is flipped against the left-hand packet as the cut is completed.",
    beats: ["flip on the cut"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'deck', id:'half', x:60, y:45, n:26},
      {t:'flip', id:'sel', to:'up'},
      {t:'label', id:'k', text:'reversed on the cut', x:50, y:88}
    ]},
  { caption: "Deck squared. Selection is face-up in the middle (or at a known position) without a visible reverse action.",
    actions: [
      {t:'remove', id:'half'},{t:'remove', id:'d'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'move', id:'sel', x:50, y:48},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'Braue reversal done', x:50, y:88}
    ]}
]};

ANIMS.t110 = { steps: [
  { caption: "Bottom Change — switch a card in the right hand for the bottom card of the deck in a passing action.",
    beats: ["switch on the pass"],
    actions: [
      {t:'deck', id:'d', x:40, y:52, n:51},
      {t:'card', id:'inhand', rank:'K', suit:'♥', x:60, y:45, face:'down', w:12},
      {t:'card', id:'bot', rank:'A', suit:'♠', x:40, y:60, face:'down', w:11},
      {t:'hi', id:'inhand', on:true},
      {t:'hand', id:'rh', x:62, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'K♥ in hand · A♠ on bottom', x:50, y:88}
    ]},
  { caption: "As the right hand passes the deck, it leaves its card and takes the bottom card in one continuous motion.",
    beats: ["the exchange"],
    actions: [
      {t:'hi', id:'inhand', on:false},
      {t:'move', id:'inhand', x:40, y:52},
      {t:'move', id:'bot', x:60, y:45, z:5},
      {t:'label', id:'k', text:'switched in the pass', x:50, y:88}
    ]},
  { caption: "Right hand continues on with the new card. The old card is gone — buried in the deck.",
    actions: [
      {t:'flip', id:'bot', to:'up'},
      {t:'hi', id:'bot', on:true},
      {t:'label', id:'k', text:'A♠ now in hand', x:50, y:88}
    ]}
]};

ANIMS.t111 = { steps: [
  { caption: "Flushtration Count — show multiple cards as identical by repeatedly displaying the same bottom card.",
    beats: ["same face · many cards"],
    actions: [
      {t:'packet', id:'pkt', x:50, y:52, n:4, w:14},
      {t:'hand', id:'lh', x:38, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'four cards in hand', x:50, y:88}
    ]},
  { caption: "Turn the packet face-up to show the bottom card, turn down, deal one face-down — always the same face.",
    beats: ["show · deal · repeat"],
    actions: [
      {t:'card', id:'face', rank:'A', suit:'♠', x:50, y:38, face:'up', w:12},
      {t:'hi', id:'face', on:true},
      {t:'hand', id:'rh', x:62, y:36, side:'right', on:true},
      {t:'label', id:'k', text:'\"all aces\" — same card each time', x:50, y:88}
    ]},
  { caption: "Four dealt; audience believes every card matched. Classic packet deception.",
    actions: [
      {t:'hi', id:'face', on:false},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'spread', x:20, y:55, count:4, dx:14, face:'down', w:11, prefix:'d'},
      {t:'label', id:'k', text:'Flushtration complete', x:50, y:88}
    ]}
]};

ANIMS.t112 = { steps: [
  { caption: "Gambler's Cop — a low, natural palm that hides a card in the curled fingers while the hand looks relaxed and empty.",
    beats: ["low palm"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:45, y:55, face:'down', w:12},
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'card to be copped', x:50, y:88}
    ]},
  { caption: "Card settles into the curl of the fingers and heel — not the classic full palm. Hand hangs naturally at the side.",
    beats: ["the settle"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'move', id:'c', x:38, y:62, z:2},
      {t:'scale', id:'c', s:0.8},
      {t:'note', id:'b', text:'curled fingers · relaxed hand', x:55, y:72},
      {t:'label', id:'k', text:'copped — hand looks empty', x:50, y:88}
    ]},
  { caption: "Walk, gesture, or reach into a pocket. Produce or ditch on your own time.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'c', x:55, y:48},
      {t:'scale', id:'c', s:1.08},
      {t:'flip', id:'c', to:'up'},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'produced from the cop', x:50, y:88}
    ]}
]};

ANIMS.t113 = { steps: [
  { caption: "Tenkai Palm — card held flat against the palm by the thumb, almost parallel to the floor. Extremely open-looking.",
    beats: ["flat palm"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:50, face:'down', w:12},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'card into Tenkai', x:50, y:88}
    ]},
  { caption: "Thumb pins the card against the upper palm. Fingers can move freely; the hand looks nearly empty from the front.",
    beats: ["thumb pin"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'move', id:'c', x:58, y:40, z:2},
      {t:'scale', id:'c', s:0.85},
      {t:'rot', id:'c', deg:15},
      {t:'note', id:'b', text:'flat against the palm', x:70, y:55},
      {t:'label', id:'k', text:'Tenkai position', x:50, y:88}
    ]},
  { caption: "Ideal for open-hand vanishes, transfers, and productions. Angle-sensitive but devastating head-on.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'c', x:50, y:48},
      {t:'scale', id:'c', s:1.08},
      {t:'rot', id:'c', deg:0},
      {t:'flip', id:'c', to:'up'},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'produced from Tenkai', x:50, y:88}
    ]}
]};

ANIMS.t114 = { steps: [
  { caption: "Through-the-Fist Change — push a face-up card through the fist; it emerges face-down (or transformed).",
    beats: ["push through · change"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:50, face:'up', w:14},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'face-up into the fist', x:50, y:88}
    ]},
  { caption: "Card goes into the top of the fist. A hidden turn or switch happens inside; it exits the bottom changed.",
    beats: ["through the hand"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'move', id:'c', x:60, y:42},
      {t:'scale', id:'c', s:0.7},
      {t:'label', id:'k', text:'through the fist', x:50, y:88}
    ]},
  { caption: "Emerges face-down — or as a different card entirely. Simple, visual, and widely useful.",
    actions: [
      {t:'move', id:'c', x:50, y:55},
      {t:'scale', id:'c', s:1.08},
      {t:'flip', id:'c', to:'down'},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'changed on the way through', x:50, y:88}
    ]}
]};

ANIMS.t115 = { steps: [
  { caption: "Spread Pass — pass the halves while the deck is spread between the hands — bold and visual cover.",
    beats: ["pass in the spread"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:38, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:62, y:55, side:'right', on:true},
      {t:'label', id:'k', text:'spread between the hands', x:50, y:88}
    ]},
  { caption: "As the spread opens, the break is passed — bottom half moves to top under the moving cards.",
    beats: ["pass under motion"],
    actions: [
      {t:'spread', x:20, y:50, count:8, dx:8, face:'down', w:9, prefix:'s'},
      {t:'label', id:'k', text:'halves transpose in the spread', x:50, y:88}
    ]},
  { caption: "Resquare. The pass is done inside an action that looks like a search or a display.",
    actions: [
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'spread pass complete', x:50, y:88}
    ]}
]};

ANIMS.t116 = { steps: [
  { caption: "Diagonal Palm Shift — steal a card from the center of the deck into the palm as the deck is pushed flush.",
    beats: ["center steal"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:55, y:48, face:'down', w:11},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'selection outjogged or angled', x:50, y:88}
    ]},
  { caption: "As the card is pushed flush, it is angled and slid into the right palm in one motion — the classic Erdnase steal.",
    beats: ["angle · palm"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:65, y:40, z:5},
      {t:'scale', id:'sel', s:0.85},
      {t:'note', id:'b', text:'into the palm as it squares', x:70, y:58},
      {t:'label', id:'k', text:'diagonal palm shift', x:50, y:88}
    ]},
  { caption: "Deck is squared and fair. The selection is gone — palmed and ready for production.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'sel', x:55, y:45},
      {t:'scale', id:'sel', s:1.08},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'stolen from the center', x:50, y:88}
    ]}
]}

ANIMS.t117 = { steps: [
  { caption: "Midnight Shift (Turnover Pass) — pass the halves as the deck is turned over in the hands.",
    beats: ["pass on the turnover"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'note', id:'b', text:'break held', x:70, y:60},
      {t:'label', id:'k', text:'deck about to turn over', x:50, y:88}
    ]},
  { caption: "As the deck turns face-up (or face-down), the halves transpose under cover of the larger motion.",
    beats: ["turnover covers the pass"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'rot', id:'d', deg:180},
      {t:'label', id:'k', text:'halves pass during the turn', x:50, y:88}
    ]},
  { caption: "Deck lands squared, orientation changed, order shifted. Strong cover when motivated by a face-up display.",
    actions: [
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'midnight shift complete', x:50, y:88}
    ]}
]};

ANIMS.t118 = { steps: [
  { caption: "Cover Pass — a pass performed under cover of a right-hand packet or a squared block held above the deck.",
    beats: ["pass under a cover packet"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:40},
      {t:'packet', id:'cover', x:50, y:40, n:12},
      {t:'hand', id:'rh', x:58, y:32, side:'right', on:true},
      {t:'label', id:'k', text:'cover packet above · break below', x:50, y:88}
    ]},
  { caption: "While the right hand holds the cover, the left hand passes the lower halves. The cover never moves.",
    beats: ["silent transpose"],
    actions: [
      {t:'note', id:'b', text:'lower halves transpose', x:50, y:70},
      {t:'label', id:'k', text:'cover screens everything', x:50, y:88}
    ]},
  { caption: "Replace the cover packet. The pass is done; nothing looked like a cut.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'cover', x:50, y:50},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'cover pass complete', x:50, y:88}
    ]}
]};

ANIMS.t119 = { steps: [
  { caption: "Multiple Shift — control several selections to the top (or bottom) in a single cut or shuffle action.",
    beats: ["many cards · one control"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:48},
      {t:'card', id:'s1', rank:'A', suit:'♠', x:35, y:35, face:'up', w:10},
      {t:'card', id:'s2', rank:'A', suit:'♥', x:50, y:32, face:'up', w:10},
      {t:'card', id:'s3', rank:'A', suit:'♦', x:65, y:35, face:'up', w:10},
      {t:'hi', id:'s1', on:true},{t:'hi', id:'s2', on:true},{t:'hi', id:'s3', on:true},
      {t:'label', id:'k', text:'three selections inserted', x:50, y:88}
    ]},
  { caption: "Selections are inserted at different depths, leaving breaks or steps. One shift action brings them all together.",
    beats: ["insert · shift"],
    actions: [
      {t:'hi', id:'s1', on:false},{t:'hi', id:'s2', on:false},{t:'hi', id:'s3', on:false},
      {t:'move', id:'s1', x:50, y:50},{t:'move', id:'s2', x:50, y:52},{t:'move', id:'s3', x:50, y:54},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'single shift gathers them', x:50, y:88}
    ]},
  { caption: "All three arrive on top (or bottom). Essential for multi-selection routines.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'hi', id:'s1', on:true},{t:'hi', id:'s2', on:true},{t:'hi', id:'s3', on:true},
      {t:'label', id:'k', text:'all three controlled', x:50, y:88}
    ]}
]};

ANIMS.t120 = { steps: [
  { caption: "Buckle Count — count a packet while hiding one or more cards by buckling the bottom card to create a natural break.",
    beats: ["buckle · hide"],
    actions: [
      {t:'packet', id:'pkt', x:50, y:50, n:5, w:14},
      {t:'label', id:'k', text:'five cards · count as four', x:50, y:88}
    ]},
  { caption: "As you count, the left fingers buckle the bottom card. The right hand takes a block above the buckle as if it were one.",
    beats: ["the buckle take"],
    actions: [
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'note', id:'b', text:'bottom card buckled · block taken as one', x:50, y:28},
      {t:'label', id:'k', text:'count lies by one', x:50, y:88}
    ]},
  { caption: "Finish the count. The hidden card stays concealed. Foundation for many packet counts.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'buckle count complete', x:50, y:88}
    ]}
]};

ANIMS.t121 = { steps: [
  { caption: "Pinky Count — secretly count cards with the left pinky, establishing a break at a precise number without looking.",
    beats: ["count by feel"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'label', id:'k', text:'pinky at the rear edge', x:50, y:88}
    ]},
  { caption: "Pinky pulls down one card at a time at the rear, counting by touch. Thumb and fingers stay still from the front.",
    beats: ["one by one"],
    actions: [
      {t:'note', id:'b', text:'pinky counts · front stays square', x:70, y:60},
      {t:'label', id:'k', text:'counting to a break', x:50, y:88}
    ]},
  { caption: "Break held at the exact number. Ready for a force, a double, or a pass — no glimpse required.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'card', id:'mark', rank:'A', suit:'♠', x:50, y:42, face:'down', w:11},
      {t:'hi', id:'mark', on:true},
      {t:'label', id:'k', text:'break at the count', x:50, y:88}
    ]}
]};

ANIMS.t122 = { steps: [
  { caption: "Lateral Palm (Clip Steal) — card held at the edge of the hand by thumb and mid-fingers, almost invisible from the front.",
    beats: ["edge hold"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:50, face:'down', w:12},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'card into lateral palm', x:50, y:88}
    ]},
  { caption: "Card clips between thumb base and the side of the middle fingers — flat against the hand's edge, not deep in the palm.",
    beats: ["the clip"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'move', id:'c', x:62, y:44, z:2},
      {t:'scale', id:'c', s:0.8},
      {t:'rot', id:'c', deg:25},
      {t:'note', id:'b', text:'clipped at the edge', x:72, y:58},
      {t:'label', id:'k', text:'hand looks empty head-on', x:50, y:88}
    ]},
  { caption: "Ideal for steals during spreads and for open-hand productions. Angle-specific but very clean.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'c', x:50, y:48},
      {t:'scale', id:'c', s:1.08},
      {t:'rot', id:'c', deg:0},
      {t:'flip', id:'c', to:'up'},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'produced from lateral palm', x:50, y:88}
    ]}
]};

ANIMS.t123 = { steps: [
  { caption: "Downs Change — a visual change of a tabled or held card using a covered slide or wipe.",
    beats: ["slide change"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:50, face:'up', w:14},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'A♠ face-up', x:50, y:88}
    ]},
  { caption: "Under a wiping or covering motion, the face card is slid away and replaced by the card beneath.",
    beats: ["the wipe"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'remove', id:'c'},
      {t:'card', id:'c2', rank:'K', suit:'♥', x:50, y:50, face:'up', w:14},
      {t:'scale', id:'c2', s:1.1},
      {t:'hi', id:'c2', on:true},
      {t:'label', id:'k', text:'instant change', x:50, y:88}
    ]},
  { caption: "Hold the new face. Clean, direct, and older than most color changes still in use.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'Downs change complete', x:50, y:88}
    ]}
]};

ANIMS.t124 = { steps: [
  { caption: "Paintbrush Change — the right hand brushes across a face-up card and leaves a different face behind.",
    beats: ["brush · change"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:51},
      {t:'card', id:'face', rank:'A', suit:'♠', x:50, y:42, face:'up', w:13},
      {t:'hi', id:'face', on:true},
      {t:'hand', id:'rh', x:65, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'face card ready', x:50, y:88}
    ]},
  { caption: "Right hand sweeps across the face. Hidden card rides under the palm and is deposited as the hand clears.",
    beats: ["the brush"],
    actions: [
      {t:'hi', id:'face', on:false},
      {t:'remove', id:'face'},
      {t:'card', id:'new', rank:'K', suit:'♥', x:50, y:42, face:'up', w:13},
      {t:'hi', id:'new', on:true},
      {t:'scale', id:'new', s:1.1},
      {t:'label', id:'k', text:'brushed into a new face', x:50, y:88}
    ]},
  { caption: "Smooth, continuous, and visual — a cousin of the Erdnase color change with a different texture.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'paintbrush change done', x:50, y:88}
    ]}
]};

ANIMS.t125 = { steps: [
  { caption: "Vernon Color Change — a soft, wave-like transformation of the face card popularized by Dai Vernon.",
    beats: ["wave change"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:51},
      {t:'card', id:'face', rank:'A', suit:'♠', x:50, y:42, face:'up', w:13},
      {t:'hi', id:'face', on:true},
      {t:'hand', id:'rh', x:62, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'Vernon change setup', x:50, y:88}
    ]},
  { caption: "Right hand waves or passes over the face. The second card is stolen forward and left as the new face in a continuous soft motion.",
    beats: ["the wave"],
    actions: [
      {t:'hi', id:'face', on:false},
      {t:'remove', id:'face'},
      {t:'card', id:'new', rank:'Q', suit:'♦', x:50, y:42, face:'up', w:13},
      {t:'hi', id:'new', on:true},
      {t:'scale', id:'new', s:1.1},
      {t:'label', id:'k', text:'face transformed', x:50, y:88}
    ]},
  { caption: "No snap, no slap — just a quiet wave and a new card. Elegance over flash.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'Vernon color change', x:50, y:88}
    ]}
]};

ANIMS.t126 = { steps: [
  { caption: "Double Cut — a simple, natural-looking cut that brings a broken-to card (or stock) to the top or bottom.",
    beats: ["utility cut"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:48, face:'down', w:11},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'note', id:'b', text:'break above the selection', x:70, y:60},
      {t:'label', id:'k', text:'break held', x:50, y:88}
    ]},
  { caption: "Right hand cuts the upper packet to the bottom. Then cuts again at the break — selection arrives on top.",
    beats: ["two cuts"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'deck', id:'upper', x:50, y:36, n:20},
      {t:'move', id:'upper', x:50, y:62},
      {t:'label', id:'k', text:'first cut · second cut to the break', x:50, y:88}
    ]},
  { caption: "Squared. Selection is on top. The most-used utility cut in card magic.",
    actions: [
      {t:'remove', id:'upper'},{t:'remove', id:'d'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'move', id:'sel', x:50, y:40},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'double cut — selection on top', x:50, y:88}
    ]}
]}

ANIMS.t127 = { steps: [
  { caption: "Slip Cut — cut the deck while the top card stays in place (or is forced to a new position).",
    beats: ["top card slips"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:51},
      {t:'card', id:'top', rank:'A', suit:'♠', x:50, y:40, face:'down', w:11},
      {t:'hi', id:'top', on:true},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'top card will stay', x:50, y:88}
    ]},
  { caption: "As the right hand takes the upper half, the left thumb holds back the top card so it becomes the new top of the lower half.",
    beats: ["hold back · cut"],
    actions: [
      {t:'hi', id:'top', on:false},
      {t:'deck', id:'upper', x:60, y:38, n:25},
      {t:'move', id:'top', x:50, y:55},
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'top card slips onto lower half', x:50, y:88}
    ]},
  { caption: "Complete the cut. Original top card is still on top — or now second, depending on handling.",
    actions: [
      {t:'move', id:'upper', x:50, y:55},
      {t:'hi', id:'top', on:true},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'slip cut complete', x:50, y:88}
    ]}
]};

ANIMS.t128 = { steps: [
  { caption: "HaLo Cut — a one-handed cut that secretly keeps the bottom card in place while the rest of the deck cuts.",
    beats: ["bottom card stays"],
    actions: [
      {t:'deck', id:'d', x:48, y:50, n:51},
      {t:'card', id:'bot', rank:'A', suit:'♠', x:48, y:60, face:'down', w:11},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'lh', x:36, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'bottom card protected', x:50, y:88}
    ]},
  { caption: "One-handed Charlier-style action: as the halves revolve, the bottom card is held back by the thumb or fingers and lands back on the bottom.",
    beats: ["revolve · hold back"],
    actions: [
      {t:'hi', id:'bot', on:false},
      {t:'deck', id:'half', x:55, y:40, n:26},
      {t:'label', id:'k', text:'halves cut · bottom card held', x:50, y:88}
    ]},
  { caption: "Deck squared. Bottom card never moved. Named for Harry Lorayne — essential for bottom-stock work.",
    actions: [
      {t:'remove', id:'half'},{t:'remove', id:'d'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'move', id:'bot', x:50, y:58},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'HaLo cut — bottom intact', x:50, y:88}
    ]}
]};

ANIMS.t129 = { steps: [
  { caption: "Up-the-Ladder Cut — a flourishy false cut that strips small packets and reassembles in original order.",
    beats: ["strip · restore"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'packets will strip off', x:50, y:88}
    ]},
  { caption: "Strip small packets into the left hand one after another, building a stepped \"ladder,\" then square them back in reverse order.",
    beats: ["ladder of packets"],
    actions: [
      {t:'packet', id:'p1', x:35, y:40, n:10},
      {t:'packet', id:'p2', x:42, y:48, n:10},
      {t:'packet', id:'p3', x:50, y:56, n:10},
      {t:'packet', id:'p4', x:58, y:64, n:10},
      {t:'hand', id:'lh', x:30, y:50, side:'left', on:true},
      {t:'label', id:'k', text:'ladder built · reverse to restore', x:50, y:88}
    ]},
  { caption: "Squared. Order unchanged. Looks like a thorough mix; is a full-deck false cut.",
    actions: [
      {t:'remove', id:'p1'},{t:'remove', id:'p2'},{t:'remove', id:'p3'},{t:'remove', id:'p4'},{t:'remove', id:'d'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'up-the-ladder — order intact', x:50, y:88}
    ]}
]};

ANIMS.t130 = { steps: [
  { caption: "Revolution Cut — a flashy spinning cut where a packet revolves end-for-end as it is cut.",
    beats: ["spin the packet"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'packet will revolve', x:50, y:88}
    ]},
  { caption: "Right hand cuts a packet and spins it 180° (or 360°) before completing the cut. Style first; can be true or false.",
    beats: ["the revolution"],
    actions: [
      {t:'deck', id:'pkt', x:50, y:35, n:20},
      {t:'rot', id:'pkt', deg:180},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'packet spins into place', x:50, y:88}
    ]},
  { caption: "Complete and square. A flourish cut that punctuates a routine without changing (or while controlling) the order.",
    actions: [
      {t:'move', id:'pkt', x:50, y:50},
      {t:'rot', id:'pkt', deg:0},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'revolution cut complete', x:50, y:88}
    ]}
]};

ANIMS.t131 = { steps: [
  { caption: "Back Palm — hide a card behind the hand, clipped by the fingers, while the palm faces the audience empty.",
    beats: ["behind the hand"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:50, face:'up', w:13},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'card about to vanish', x:50, y:88}
    ]},
  { caption: "Card pivots behind the hand and clips between the fingers at the back. Palm faces out — empty.",
    beats: ["the pivot"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'move', id:'c', x:62, y:40, z:1},
      {t:'scale', id:'c', s:0.75},
      {t:'note', id:'b', text:'clipped behind the fingers', x:72, y:55},
      {t:'label', id:'k', text:'palm empty · card hidden', x:50, y:88}
    ]},
  { caption: "Produce by reversing the pivot, or transfer to the other hand. Classic continuous front-and-back vanish/production material.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'c', x:50, y:48},
      {t:'scale', id:'c', s:1.08},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'produced from back palm', x:50, y:88}
    ]}
]};

ANIMS.t132 = { steps: [
  { caption: "Palm-to-Palm Transfer — move a palmed card from one hand to the other under cover of a natural gesture.",
    beats: ["hand to hand"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:35, y:50, face:'down', w:11},
      {t:'hand', id:'lh', x:32, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:68, y:50, side:'right', on:true},
      {t:'scale', id:'c', s:0.85},
      {t:'label', id:'k', text:'palmed in left · transfer to right', x:50, y:88}
    ]},
  { caption: "Hands meet briefly — a gesture, a clap, a square-up. The card changes hands in that moment.",
    beats: ["the meet"],
    actions: [
      {t:'move', id:'c', x:50, y:48},
      {t:'hand', id:'lh', x:45, y:50},
      {t:'hand', id:'rh', x:55, y:50},
      {t:'label', id:'k', text:'hands meet · card transfers', x:50, y:88}
    ]},
  { caption: "Hands separate. Card is now in the other palm. Essential for delayed productions and clean-looking steals.",
    actions: [
      {t:'move', id:'c', x:65, y:48},
      {t:'hand', id:'lh', x:32, y:55},
      {t:'hand', id:'rh', x:68, y:50},
      {t:'scale', id:'c', s:1.08},
      {t:'flip', id:'c', to:'up'},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'now in the right palm', x:50, y:88}
    ]}
]};

ANIMS.t133 = { steps: [
  { caption: "Braue Add-On — secretly add cards onto a packet (or the deck) under cover of a display or count.",
    beats: ["secret addition"],
    actions: [
      {t:'packet', id:'show', x:40, y:50, n:3, w:12},
      {t:'packet', id:'add', x:65, y:50, n:2, w:12},
      {t:'hi', id:'add', on:true},
      {t:'label', id:'k', text:'three shown · two to add', x:50, y:88}
    ]},
  { caption: "While displaying or counting the visible packet, the extra cards are loaded underneath or on top under cover of the right hand.",
    beats: ["load under display"],
    actions: [
      {t:'hi', id:'add', on:false},
      {t:'hand', id:'rh', x:55, y:40, side:'right', on:true},
      {t:'move', id:'add', x:40, y:52},
      {t:'label', id:'k', text:'added under cover', x:50, y:88}
    ]},
  { caption: "Packet now has extra cards the audience never saw added. Foundation for many packet and assembly routines.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'add'},
      {t:'packet', id:'done', x:50, y:50, n:5, w:14},
      {t:'label', id:'k', text:'Braue add-on complete', x:50, y:88}
    ]}
]};

ANIMS.t134 = { steps: [
  { caption: "Side Steal Color Change — steal the face card to the side (or top) and leave a new face in its place as the hand clears.",
    beats: ["steal · leave new face"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:51},
      {t:'card', id:'face', rank:'A', suit:'♠', x:50, y:42, face:'up', w:13},
      {t:'hi', id:'face', on:true},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'face card will change', x:50, y:88}
    ]},
  { caption: "Right hand covers briefly. Face card is side-stolen; the card beneath becomes the new face as the hand moves away.",
    beats: ["the steal-change"],
    actions: [
      {t:'hi', id:'face', on:false},
      {t:'move', id:'face', x:68, y:40, z:5},
      {t:'scale', id:'face', s:0.85},
      {t:'card', id:'new', rank:'K', suit:'♥', x:50, y:42, face:'up', w:13},
      {t:'hi', id:'new', on:true},
      {t:'label', id:'k', text:'new face revealed', x:50, y:88}
    ]},
  { caption: "Stolen card is ditched or loaded. Clean, visual, and built on the side steal you already know.",
    actions: [
      {t:'remove', id:'face'},
      {t:'scale', id:'new', s:1.1},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'side steal color change', x:50, y:88}
    ]}
]};

ANIMS.t135 = { steps: [
  { caption: "Snap Deal — a sharp, audible deal that can cover a second deal, a bottom deal, or simply look crisp and intentional.",
    beats: ["sound as cover"],
    actions: [
      {t:'deck', id:'d', x:42, y:50, n:52},
      {t:'hand', id:'lh', x:32, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:58, y:48, side:'right', on:true},
      {t:'label', id:'k', text:'deal with a snap', x:50, y:88}
    ]},
  { caption: "Card leaves the deck with a sharp snap of the fingers — the sound draws attention and can mask a false take.",
    beats: ["the snap"],
    actions: [
      {t:'card', id:'dealt', rank:'A', suit:'♠', x:70, y:50, face:'down', w:11},
      {t:'hi', id:'dealt', on:true},
      {t:'label', id:'k', text:'snap covers the take', x:50, y:88}
    ]},
  { caption: "Used fair, it looks professional. Used with a second or bottom, the sound is part of the cover.",
    actions: [
      {t:'flip', id:'dealt', to:'up'},
      {t:'label', id:'k', text:'snap deal', x:50, y:88}
    ]}
]};

ANIMS.t136 = { steps: [
  { caption: "Optical False Cut — a cut that looks genuine from the front because of an optical alignment of the packets.",
    beats: ["eye is fooled"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'packets will mislead the eye', x:50, y:88}
    ]},
  { caption: "Packets are cut and placed so the visible edges suggest a real cut, while the original top stock stays on top.",
    beats: ["optical layout"],
    actions: [
      {t:'deck', id:'p1', x:40, y:45, n:17},
      {t:'deck', id:'p2', x:55, y:50, n:17},
      {t:'deck', id:'p3', x:50, y:60, n:18},
      {t:'label', id:'k', text:'edges suggest a mix', x:50, y:88}
    ]},
  { caption: "Reassemble. Order intact. The eye tracked the wrong packet.",
    actions: [
      {t:'remove', id:'p1'},{t:'remove', id:'p2'},{t:'remove', id:'p3'},{t:'remove', id:'d'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'optical false cut — order kept', x:50, y:88}
    ]}
]}

ANIMS.t137 = { steps: [
  { caption: "Riffle Pass — execute the pass under cover of a riffle down the edge of the deck.",
    beats: ["pass under the riffle"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'note', id:'b', text:'break held', x:70, y:60},
      {t:'label', id:'k', text:'riffle covers the pass', x:50, y:88}
    ]},
  { caption: "As the right thumb riffles down the outer edge, the halves transpose. The sound and motion hide everything.",
    beats: ["riffle · transpose"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'halves pass during the riffle', x:50, y:88}
    ]},
  { caption: "Square up. The riffle looked like a search or a flourish; the pass is done.",
    actions: [
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'riffle pass complete', x:50, y:88}
    ]}
]};

ANIMS.t138 = { steps: [
  { caption: "Table Pass — pass the halves while the deck is on or near the table, under cover of squaring or a gesture.",
    beats: ["pass at the table"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:52},
      {t:'hand', id:'lh', x:40, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:60, y:50, side:'right', on:true},
      {t:'label', id:'k', text:'deck near the table', x:50, y:88}
    ]},
  { caption: "Hands square the deck against the table edge or mat. In that action the halves transpose.",
    beats: ["square covers the pass"],
    actions: [
      {t:'note', id:'b', text:'transpose against the table', x:50, y:30},
      {t:'label', id:'k', text:'table pass in progress', x:50, y:88}
    ]},
  { caption: "Deck rests squared. Strong when the table edge gives natural cover and a reason to square.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'table pass complete', x:50, y:88}
    ]}
]};

ANIMS.t139 = { steps: [
  { caption: "False Swing Cut — the swing-cut action you already know, executed so the original top stock returns to the top.",
    beats: ["swing · restore"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'swing cut that lies', x:50, y:88}
    ]},
  { caption: "Left hand takes the top half in a swing. Instead of completing honestly, a strip or hop restores the original top.",
    beats: ["swing · strip back"],
    actions: [
      {t:'deck', id:'top', x:38, y:42, n:26},
      {t:'deck', id:'bot', x:58, y:55, n:26},
      {t:'hand', id:'lh', x:30, y:48, side:'left', on:true},
      {t:'label', id:'k', text:'packets in motion', x:50, y:88}
    ]},
  { caption: "Squared. Looks like a casual swing cut; order unchanged.",
    actions: [
      {t:'remove', id:'top'},{t:'remove', id:'bot'},{t:'remove', id:'d'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'false swing cut — order intact', x:50, y:88}
    ]}
]};

ANIMS.t140 = { steps: [
  { caption: "Flip-Flop Cut — packets are flipped and flopped in a rapid sequence that looks chaotic but can preserve order.",
    beats: ["flip · flop · restore"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:42, side:'left', on:true},
      {t:'label', id:'k', text:'packets will flip-flop', x:50, y:88}
    ]},
  { caption: "Halves or thirds flip end-for-end and trade hands in a quick rhythm. Theater first; false option second.",
    beats: ["the chaos"],
    actions: [
      {t:'packet', id:'p1', x:35, y:45, n:17},
      {t:'packet', id:'p2', x:50, y:50, n:17},
      {t:'packet', id:'p3', x:65, y:45, n:18},
      {t:'label', id:'k', text:'flip-flop in progress', x:50, y:88}
    ]},
  { caption: "Square. Either genuinely mixed or fully restored — the audience can't tell which you chose.",
    actions: [
      {t:'remove', id:'p1'},{t:'remove', id:'p2'},{t:'remove', id:'p3'},{t:'remove', id:'d'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'flip-flop cut complete', x:50, y:88}
    ]}
]};

ANIMS.t141 = { steps: [
  { caption: "ATFUS (Any Time Face-Up Switch) — switch face-up cards for face-down ones (or vice versa) while spreading or counting.",
    beats: ["face-up switch"],
    actions: [
      {t:'spread', x:18, y:50, count:4, dx:14, face:'up', w:11, prefix:'a',
        cards:[{id:'a0',rank:'A',suit:'♠'},{id:'a1',rank:'A',suit:'♥'},{id:'a2',rank:'A',suit:'♦'},{id:'a3',rank:'A',suit:'♣'}]},
      {t:'label', id:'k', text:'four aces face-up', x:50, y:88}
    ]},
  { caption: "Under cover of a spread or a count into the deck, the face-up cards are switched for indifferent face-down cards (or loaded).",
    beats: ["the switch"],
    actions: [
      {t:'hand', id:'rh', x:55, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'switched into the deck', x:50, y:88}
    ]},
  { caption: "What the audience thinks is still on the table (or in the packet) is already gone. Core move for ace assemblies.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'a0'},{t:'remove', id:'a1'},{t:'remove', id:'a2'},{t:'remove', id:'a3'},
      {t:'packet', id:'switched', x:50, y:50, n:4, w:14},
      {t:'label', id:'k', text:'ATFUS complete', x:50, y:88}
    ]}
]};

ANIMS.t142 = { steps: [
  { caption: "Block Push-Off — push two or more cards as a squared block for doubles, triples, and false counts.",
    beats: ["multiple as one"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:52},
      {t:'hand', id:'lh', x:38, y:58, side:'left', on:true},
      {t:'note', id:'b', text:'thumb prepares a block', x:70, y:50},
      {t:'label', id:'k', text:'block ready', x:50, y:88}
    ]},
  { caption: "Left thumb pushes a squared block off the top. Right hand takes it as if it were a single card.",
    beats: ["push · take"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'card', id:'block', rank:'A', suit:'♠', x:50, y:40, face:'down', w:12},
      {t:'scale', id:'block', s:1.05},
      {t:'label', id:'k', text:'block taken as one', x:50, y:88}
    ]},
  { caption: "Foundation of the double lift, triple lift, and many false counts. Edges must stay flush.",
    actions: [
      {t:'flip', id:'block', to:'up'},
      {t:'hi', id:'block', on:true},
      {t:'label', id:'k', text:'block push-off clean', x:50, y:88}
    ]}
]};

ANIMS.t143 = { steps: [
  { caption: "Strike Second Deal — take the second card with a sharp strike from a momentarily squared deck.",
    beats: ["strike from square"],
    actions: [
      {t:'deck', id:'d', x:42, y:50, n:51},
      {t:'card', id:'top', rank:'K', suit:'♥', x:42, y:40, face:'down', w:11},
      {t:'card', id:'sec', rank:'A', suit:'♠', x:42, y:42, face:'down', w:11},
      {t:'hi', id:'top', on:true},
      {t:'hand', id:'lh', x:32, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'top stays · second struck', x:50, y:88}
    ]},
  { caption: "Deck is squared. Right hand strikes and takes the second card in one motion — no prolonged push-off.",
    beats: ["the strike"],
    actions: [
      {t:'hi', id:'top', on:false},
      {t:'hand', id:'rh', x:60, y:48, side:'right', on:true},
      {t:'move', id:'sec', x:70, y:50, z:5},
      {t:'label', id:'k', text:'second dealt by strike', x:50, y:88}
    ]},
  { caption: "Top card never left. Strike seconds are faster and more angle-sensitive than push-off seconds.",
    actions: [
      {t:'hi', id:'top', on:true},
      {t:'flip', id:'sec', to:'up'},
      {t:'label', id:'k', text:'strike second complete', x:50, y:88}
    ]}
]};

ANIMS.t144 = { steps: [
  { caption: "Cardini Change — a quick visual change popularized by Cardini; often done with a small packet or single card in the hands.",
    beats: ["quick visual change"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:50, face:'up', w:14},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'face about to change', x:50, y:88}
    ]},
  { caption: "A sharp, economical motion — often a wrist turn or finger snap — exchanges the visible card for the one behind it.",
    beats: ["the snap exchange"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'remove', id:'c'},
      {t:'card', id:'c2', rank:'K', suit:'♥', x:50, y:50, face:'up', w:14},
      {t:'hi', id:'c2', on:true},
      {t:'scale', id:'c2', s:1.1},
      {t:'label', id:'k', text:'changed', x:50, y:88}
    ]},
  { caption: "Hold. Cardini's style was understatement — the change lands and the hands go still.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'Cardini change', x:50, y:88}
    ]}
]};

ANIMS.t145 = { steps: [
  { caption: "Shapeshifter Change — a flourishy, spinning change where the card appears to morph in a continuous motion.",
    beats: ["spin · morph"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:50, face:'up', w:14},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'card will shapeshift', x:50, y:88}
    ]},
  { caption: "The card (or double) spins or twirls; mid-motion the face is exchanged. The continuous movement hides the switch.",
    beats: ["continuous motion"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'rot', id:'c', deg:180},
      {t:'remove', id:'c'},
      {t:'card', id:'c2', rank:'Q', suit:'♦', x:50, y:50, face:'up', w:14},
      {t:'hi', id:'c2', on:true},
      {t:'scale', id:'c2', s:1.1},
      {t:'label', id:'k', text:'new face mid-spin', x:50, y:88}
    ]},
  { caption: "Stop on the new face. Flashy, modern, and effective when the spin looks effortless.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'shapeshifter complete', x:50, y:88}
    ]}
]};

ANIMS.t146 = { steps: [
  { caption: "Kiss Change — two face-up cards are held together; one face changes as they \"kiss\" and separate.",
    beats: ["kiss · change"],
    actions: [
      {t:'card', id:'c1', rank:'A', suit:'♠', x:45, y:48, face:'up', w:12},
      {t:'card', id:'c2', rank:'K', suit:'♥', x:55, y:52, face:'up', w:12},
      {t:'hi', id:'c1', on:true},
      {t:'hand', id:'rh', x:62, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'two cards · one will change', x:50, y:88}
    ]},
  { caption: "Cards come together face to face (the kiss). In that contact a face is switched; they separate to show the change.",
    beats: ["the kiss"],
    actions: [
      {t:'hi', id:'c1', on:false},
      {t:'move', id:'c1', x:50, y:50},
      {t:'move', id:'c2', x:50, y:50},
      {t:'label', id:'k', text:'kiss — faces meet', x:50, y:88}
    ]},
  { caption: "Separate. One face has changed. Intimate, visual, and surprising at close range.",
    actions: [
      {t:'remove', id:'c1'},
      {t:'card', id:'new', rank:'Q', suit:'♦', x:45, y:48, face:'up', w:12},
      {t:'move', id:'c2', x:55, y:52},
      {t:'hi', id:'new', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'kiss change done', x:50, y:88}
    ]}
]}

ANIMS.t147 = { steps: [
  { caption: "Classic Pass — the original invisible cut. Left hand holds a break; right hand covers; halves transpose in a blink.",
    beats: ["the invisible cut"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:38, y:58, side:'left', on:true},
      {t:'note', id:'b', text:'pinky break between halves', x:72, y:62},
      {t:'label', id:'k', text:'break held · right hand approaches', x:50, y:88}
    ]},
  { caption: "Right hand covers from above — thumb at the inner end, fingers at the outer. The audience sees only the back of the hand.",
    beats: ["full cover"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'right hand screens everything', x:50, y:88}
    ]},
  { caption: "In one motion: bottom half swings up and forward as the top half drops under. The hands barely seem to move.",
    beats: ["the transpose"],
    actions: [
      {t:'deck', id:'bot', x:45, y:58, n:26},
      {t:'deck', id:'top', x:55, y:42, n:26},
      {t:'move', id:'bot', x:50, y:42},
      {t:'move', id:'top', x:50, y:58},
      {t:'label', id:'k', text:'halves exchange under cover', x:50, y:88}
    ]},
  { caption: "Square immediately — the same motion you'd use after any ordinary cut. The pass is over before attention arrives.",
    actions: [
      {t:'remove', id:'bot'},{t:'remove', id:'top'},{t:'remove', id:'d'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'classic pass complete', x:50, y:88}
    ]}
]};

ANIMS.t148 = { steps: [
  { caption: "Bluff Pass — the audience believes a pass happened. Nothing did. Conviction does the work.",
    beats: ["the bluff"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'looks like a pass is coming', x:50, y:88}
    ]},
  { caption: "Mime the cover and the tension of a real pass — then simply square up. No halves moved.",
    beats: ["mime · square"],
    actions: [
      {t:'note', id:'b', text:'hands suggest the move · deck never splits', x:50, y:28},
      {t:'label', id:'k', text:'the bluff', x:50, y:88}
    ]},
  { caption: "Used when a control already put the card where you need it. The \"pass\" is pure theater for those who know to watch for one.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'bluff pass — nothing moved', x:50, y:88}
    ]}
]};

ANIMS.t149 = { steps: [
  { caption: "S.W.E. Shift (Steranko) — a modern, flowing shift that controls a card with a continuous open-looking action.",
    beats: ["open shift"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:40, face:'down', w:11},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', x:60, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'selection outjogged or marked', x:50, y:88}
    ]},
  { caption: "As the card is pushed flush, a continuous lateral and downward action carries it to the top or into the palm in one motion.",
    beats: ["continuous action"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:50, y:48},
      {t:'move', id:'sel', x:50, y:38, z:5},
      {t:'label', id:'k', text:'shifted in one flow', x:50, y:88}
    ]},
  { caption: "No pause between square and control. The openness of the action is what hides it.",
    actions: [
      {t:'hi', id:'sel', on:true},
      {t:'scale', id:'sel', s:1.08},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'S.W.E. shift complete', x:50, y:88}
    ]}
]};

ANIMS.t150 = { steps: [
  { caption: "Erdnase Bottom Palm — the classic method for palming the bottom card (or a bottom stock) from the deck.",
    beats: ["bottom into the palm"],
    actions: [
      {t:'deck', id:'d', x:48, y:48, n:51},
      {t:'card', id:'bot', rank:'A', suit:'♠', x:48, y:58, face:'down', w:11},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'lh', x:36, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'bottom card targeted', x:50, y:88}
    ]},
  { caption: "Right hand comes over to square. Left fingers curl the bottom card (or block) into the left palm as the deck is taken or adjusted.",
    beats: ["curl into the palm"],
    actions: [
      {t:'hi', id:'bot', on:false},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'move', id:'bot', x:36, y:60, z:2},
      {t:'scale', id:'bot', s:0.85},
      {t:'note', id:'b', text:'palmed in left', x:28, y:72},
      {t:'label', id:'k', text:'deck free · card retained', x:50, y:88}
    ]},
  { caption: "Deck can be handed away or tabled. The bottom palm survives scrutiny if the hand stays soft and the body turns cover the angle.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'d', x:65, y:45},
      {t:'move', id:'bot', x:50, y:50},
      {t:'scale', id:'bot', s:1.08},
      {t:'flip', id:'bot', to:'up'},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'produced from Erdnase bottom palm', x:50, y:88}
    ]}
]};

ANIMS.t151 = { steps: [
  { caption: "One-Handed Bottom Deal — deal the bottom card with only the dealing hand. The other hand is free.",
    beats: ["one hand · from the bottom"],
    actions: [
      {t:'deck', id:'d', x:45, y:50, n:51},
      {t:'card', id:'bot', rank:'A', suit:'♠', x:45, y:60, face:'down', w:11},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'rh', x:55, y:45, side:'right', on:true},
      {t:'label', id:'k', text:'one hand only', x:50, y:88}
    ]},
  { caption: "Fingers buckle or free the bottom card and pivot it out into a deal motion — all from a single hand grip.",
    beats: ["buckle · pivot · deal"],
    actions: [
      {t:'hi', id:'bot', on:false},
      {t:'move', id:'bot', x:70, y:52, z:5},
      {t:'note', id:'b', text:'bottom card dealt one-handed', x:70, y:68},
      {t:'label', id:'k', text:'looks like a top deal', x:50, y:88}
    ]},
  { caption: "Extremely difficult. The free hand is the sell — if it never touches the deck, the deal looks impossible to fake.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'flip', id:'bot', to:'up'},
      {t:'hi', id:'bot', on:true},
      {t:'label', id:'k', text:'one-handed bottom deal', x:50, y:88}
    ]}
]};

ANIMS.t152 = { steps: [
  { caption: "Stud Bottom Deal — deal the bottom card face-up in a stud-style pitch. Common in demonstration and game work.",
    beats: ["face-up bottom deal"],
    actions: [
      {t:'deck', id:'d', x:42, y:50, n:51},
      {t:'card', id:'bot', rank:'A', suit:'♠', x:42, y:60, face:'down', w:11},
      {t:'hi', id:'bot', on:true},
      {t:'hand', id:'lh', x:32, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'bottom card · stud pitch', x:50, y:88}
    ]},
  { caption: "As the right hand takes the card, it turns face-up in the same motion — a stud deal from the bottom.",
    beats: ["take · turn · pitch"],
    actions: [
      {t:'hi', id:'bot', on:false},
      {t:'hand', id:'rh', x:60, y:48, side:'right', on:true},
      {t:'move', id:'bot', x:70, y:50, z:5},
      {t:'flip', id:'bot', to:'up'},
      {t:'label', id:'k', text:'face-up from the bottom', x:50, y:88}
    ]},
  { caption: "The face-up arrival draws the eye to the card and away from the source. Strong in gambling demos.",
    actions: [
      {t:'hi', id:'bot', on:true},
      {t:'scale', id:'bot', s:1.08},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'stud bottom deal', x:50, y:88}
    ]}
]};

ANIMS.t153 = { steps: [
  { caption: "Vernon Transfer — move cards from one packet to another (or onto the deck) under cover of a natural display action.",
    beats: ["secret transfer"],
    actions: [
      {t:'packet', id:'src', x:35, y:50, n:4, w:12},
      {t:'packet', id:'dst', x:65, y:50, n:4, w:12},
      {t:'hand', id:'rh', x:50, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'cards will move between packets', x:50, y:88}
    ]},
  { caption: "While displaying or squaring, the right hand carries cards from one packet and loads them onto the other invisibly.",
    beats: ["display covers the load"],
    actions: [
      {t:'note', id:'b', text:'transfer under the gesture', x:50, y:28},
      {t:'label', id:'k', text:'Vernon transfer in progress', x:50, y:88}
    ]},
  { caption: "Both packets look unchanged. The transferred cards are where you need them. Precision utility move.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'transfer complete', x:50, y:88}
    ]}
]};

ANIMS.t154 = { steps: [
  { caption: "Rear Palm — card held at the extreme rear of the hand, almost at the wrist, leaving the fingers and palm looking empty.",
    beats: ["deep rear hold"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:50, face:'down', w:12},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'card into rear palm', x:50, y:88}
    ]},
  { caption: "Card slides back until it sits at the base of the thumb and the rear edge of the hand — fingers free, palm open.",
    beats: ["slide to the rear"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'move', id:'c', x:62, y:48, z:1},
      {t:'scale', id:'c', s:0.75},
      {t:'note', id:'b', text:'at the rear · fingers free', x:72, y:60},
      {t:'label', id:'k', text:'hand looks empty', x:50, y:88}
    ]},
  { caption: "Advanced position for open-hand work and transfers. Angle-critical; devastating when locked in.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'c', x:50, y:48},
      {t:'scale', id:'c', s:1.08},
      {t:'flip', id:'c', to:'up'},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'produced from rear palm', x:50, y:88}
    ]}
]};

ANIMS.t155 = { steps: [
  { caption: "Deep Palm — card held deep in the hand, fully curled under the fingers, for maximum cover from almost any angle.",
    beats: ["full deep hold"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:50, face:'down', w:12},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'card into deep palm', x:50, y:88}
    ]},
  { caption: "Card settles fully into the palm cavity. Fingers curl naturally. The hand can gesture more freely than with a classic flat palm.",
    beats: ["settle deep"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'move', id:'c', x:58, y:45, z:1},
      {t:'scale', id:'c', s:0.7},
      {t:'note', id:'b', text:'deep in the cavity', x:70, y:58},
      {t:'label', id:'k', text:'maximum cover', x:50, y:88}
    ]},
  { caption: "Trade-off: less finger freedom than Tenkai or lateral, more angle forgiveness. Choose by situation.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'move', id:'c', x:50, y:48},
      {t:'scale', id:'c', s:1.08},
      {t:'flip', id:'c', to:'up'},
      {t:'hi', id:'c', on:true},
      {t:'label', id:'k', text:'produced from deep palm', x:50, y:88}
    ]}
]};

ANIMS.t156 = { steps: [
  { caption: "Edge Grip — advanced dealing grip where the deck is held at the edges for precise second, bottom, and center work.",
    beats: ["grip for false deals"],
    actions: [
      {t:'deck', id:'d', x:45, y:50, n:52},
      {t:'hand', id:'lh', x:34, y:55, side:'left', on:true},
      {t:'note', id:'b', text:'thumb and fingers on the long edges', x:70, y:50},
      {t:'label', id:'k', text:'edge grip established', x:50, y:88}
    ]},
  { caption: "Thumb on one long edge, fingers on the other. The deck is stable; individual cards can be pushed or released with fine control.",
    beats: ["fine control"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'card', id:'sec', rank:'A', suit:'♠', x:45, y:42, face:'down', w:11},
      {t:'hi', id:'sec', on:true},
      {t:'label', id:'k', text:'ready for second, bottom, or center', x:50, y:88}
    ]},
  { caption: "The grip itself is not a move — it is the platform. Most advanced false deals are built on edge or related grips.",
    actions: [
      {t:'hand', id:'rh', x:60, y:48, side:'right', on:true},
      {t:'move', id:'sec', x:70, y:50, z:5},
      {t:'flip', id:'sec', to:'up'},
      {t:'label', id:'k', text:'edge grip · deal delivered', x:50, y:88}
    ]}
]}

ANIMS.t157 = { steps: [
  { caption: "Cards Across — a counted number of cards travels invisibly from one packet to another.",
    beats: ["invisible transit"],
    actions: [
      {t:'packet', id:'p1', x:30, y:50, n:10, w:13},
      {t:'packet', id:'p2', x:70, y:50, n:10, w:13},
      {t:'hand', id:'rh', x:50, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'two packets of ten', x:50, y:88}
    ]},
  { caption: "Three cards are \"sent\" from the first packet. Nothing visible moves.",
    beats: ["the send"],
    actions: [
      {t:'note', id:'b', text:'three cards travel', x:50, y:28},
      {t:'label', id:'k', text:'invisible journey', x:50, y:88}
    ]},
  { caption: "Recount: first packet has seven; second has thirteen. The cards arrived.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'remove', id:'p1'},{t:'remove', id:'p2'},
      {t:'packet', id:'left', x:30, y:50, n:7, w:13},
      {t:'packet', id:'right', x:70, y:50, n:13, w:13},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'7 · 13 — cards across', x:50, y:88}
    ]}
]};

ANIMS.t158 = { steps: [
  { caption: "Six-Card Repeat — count six cards, throw some away, still have six. Repeat until only a few remain.",
    beats: ["endless six"],
    actions: [
      {t:'spread', x:15, y:50, count:6, dx:12, face:'down', w:11, prefix:'s'},
      {t:'hand', id:'rh', x:70, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'six cards counted', x:50, y:88}
    ]},
  { caption: "Discard two or three. Count again — still six. False counts hide the extras.",
    beats: ["throw · recount"],
    actions: [
      {t:'remove', id:'s4'},{t:'remove', id:'s5'},
      {t:'label', id:'k', text:'threw some away · still six', x:50, y:88}
    ]},
  { caption: "Repeat until the packet is genuinely small. Classic comedy-count routine.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'six-card repeat', x:50, y:88}
    ]}
]};

ANIMS.t159 = { steps: [
  { caption: "Follow the Leader — red and black packets follow their leader cards no matter how often they are mixed.",
    beats: ["colors obey"],
    actions: [
      {t:'card', id:'lr', rank:'A', suit:'♥', x:30, y:30, face:'up', w:11},
      {t:'card', id:'lb', rank:'A', suit:'♠', x:70, y:30, face:'up', w:11},
      {t:'packet', id:'pr', x:30, y:55, n:6},
      {t:'packet', id:'pb', x:70, y:55, n:6},
      {t:'hi', id:'lr', on:true},{t:'hi', id:'lb', on:true},
      {t:'label', id:'k', text:'leaders · matching packets', x:50, y:88}
    ]},
  { caption: "Swap the leaders. The packets are mixed or switched — yet each color still follows its leader.",
    beats: ["swap · still follow"],
    actions: [
      {t:'move', id:'lr', x:70, y:30},
      {t:'move', id:'lb', x:30, y:30},
      {t:'label', id:'k', text:'leaders swapped · packets still match', x:50, y:88}
    ]},
  { caption: "Reveal: reds under red, blacks under black. The cards obey.",
    actions: [
      {t:'label', id:'k', text:'follow the leader', x:50, y:88}
    ]}
]};

ANIMS.t161 = { steps: [
  { caption: "Collectors — three selections vanish into the deck and appear trapped between four aces.",
    beats: ["caught between aces"],
    actions: [
      {t:'spread', x:15, y:35, count:4, dx:14, face:'up', w:11, prefix:'a',
        cards:[{rank:'A',suit:'♠'},{rank:'A',suit:'♥'},{rank:'A',suit:'♦'},{rank:'A',suit:'♣'}]},
      {t:'card', id:'s1', rank:'7', suit:'♣', x:30, y:60, face:'up', w:10},
      {t:'card', id:'s2', rank:'Q', suit:'♦', x:50, y:60, face:'up', w:10},
      {t:'card', id:'s3', rank:'3', suit:'♥', x:70, y:60, face:'up', w:10},
      {t:'label', id:'k', text:'aces · three selections', x:50, y:88}
    ]},
  { caption: "Selections are lost in the deck. Aces are set aside.",
    beats: ["lost · set"],
    actions: [
      {t:'remove', id:'s1'},{t:'remove', id:'s2'},{t:'remove', id:'s3'},
      {t:'deck', id:'d', x:50, y:55, n:48},
      {t:'label', id:'k', text:'selections lost · aces waiting', x:50, y:88}
    ]},
  { caption: "Spread the aces: the three selections are trapped between them.",
    actions: [
      {t:'remove', id:'d'},
      {t:'spread', x:12, y:50, count:7, dx:11, face:'up', w:10, prefix:'c',
        cards:[
          {rank:'A',suit:'♠'},{rank:'7',suit:'♣'},{rank:'A',suit:'♥'},
          {rank:'Q',suit:'♦'},{rank:'A',suit:'♦'},{rank:'3',suit:'♥'},{rank:'A',suit:'♣'}
        ]},
      {t:'label', id:'k', text:'collected between the aces', x:50, y:88}
    ]}
]};

ANIMS.t162 = { steps: [
  { caption: "Card on Ceiling — a signed card is lost in the deck; the deck is thrown at the ceiling; the card sticks there.",
    beats: ["signed · stuck"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:38, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed selection', x:50, y:88}
    ]},
  { caption: "Card controlled to a known position. Deck is tossed upward; a dab of wax or moisture does the rest.",
    beats: ["the throw"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'d', x:50, y:25},
      {t:'move', id:'sel', x:50, y:18},
      {t:'scale', id:'sel', s:0.9},
      {t:'label', id:'k', text:'deck hits the ceiling', x:50, y:88}
    ]},
  { caption: "Deck falls. One card remains stuck above — their signed card.",
    actions: [
      {t:'remove', id:'d'},
      {t:'move', id:'sel', x:50, y:22},
      {t:'scale', id:'sel', s:1.1},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed card on the ceiling', x:50, y:88}
    ]}
]};

ANIMS.t163 = { steps: [
  { caption: "Reset — four aces and four kings transpose and reset in a rapid packet sequence.",
    beats: ["packet reset"],
    actions: [
      {t:'spread', x:12, y:38, count:4, dx:12, face:'up', w:10, prefix:'a',
        cards:[{rank:'A',suit:'♠'},{rank:'A',suit:'♥'},{rank:'A',suit:'♦'},{rank:'A',suit:'♣'}]},
      {t:'spread', x:12, y:62, count:4, dx:12, face:'up', w:10, prefix:'k',
        cards:[{rank:'K',suit:'♠'},{rank:'K',suit:'♥'},{rank:'K',suit:'♦'},{rank:'K',suit:'♣'}]},
      {t:'label', id:'k', text:'aces · kings', x:50, y:88}
    ]},
  { caption: "Packets mix and transpose. Aces become kings, kings become aces — then everything resets.",
    beats: ["transpose"],
    actions: [
      {t:'hand', id:'rh', x:55, y:38, side:'right', on:true},
      {t:'packet', id:'p1', x:35, y:50, n:4},
      {t:'packet', id:'p2', x:65, y:50, n:4},
      {t:'label', id:'k', text:'rapid packet sequence', x:50, y:88}
    ]},
  { caption: "Final display: both packets back to original order. High-skill packet magic.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'p1'},{t:'remove', id:'p2'},
      {t:'spread', x:12, y:38, count:4, dx:12, face:'up', w:10, prefix:'a2',
        cards:[{rank:'A',suit:'♠'},{rank:'A',suit:'♥'},{rank:'A',suit:'♦'},{rank:'A',suit:'♣'}]},
      {t:'spread', x:12, y:62, count:4, dx:12, face:'up', w:10, prefix:'k2',
        cards:[{rank:'K',suit:'♠'},{rank:'K',suit:'♥'},{rank:'K',suit:'♦'},{rank:'K',suit:'♣'}]},
      {t:'label', id:'k', text:'reset complete', x:50, y:88}
    ]}
]};

ANIMS.t164 = { steps: [
  { caption: "Twisted Sisters — two spectators each think of a queen; the queens reverse and change places under impossible conditions.",
    beats: ["two minds · two queens"],
    actions: [
      {t:'spread', x:18, y:50, count:4, dx:14, face:'down', w:11, prefix:'q'},
      {t:'label', id:'k', text:'four queens', x:50, y:88}
    ]},
  { caption: "Each spectator peeks a queen. Packets are isolated. Twists and turns create reversed and transposed queens.",
    beats: ["peek · twist"],
    actions: [
      {t:'hand', id:'rh', x:55, y:38, side:'right', on:true},
      {t:'card', id:'q1', rank:'Q', suit:'♥', x:35, y:40, face:'up', w:12},
      {t:'card', id:'q2', rank:'Q', suit:'♠', x:65, y:40, face:'up', w:12},
      {t:'hi', id:'q1', on:true},{t:'hi', id:'q2', on:true},
      {t:'label', id:'k', text:'their queens reverse and transpose', x:50, y:88}
    ]},
  { caption: "Both named queens are revealed in impossible positions. A modern classic of packet mentalism.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'twisted sisters', x:50, y:88}
    ]}
]}

ANIMS.t166 = { steps: [
  { caption: "Three Card Monte — find the money card among three. Every time you think you know, you're wrong.",
    beats: ["follow the lady"],
    actions: [
      {t:'card', id:'q', rank:'Q', suit:'♥', x:50, y:45, face:'up', w:12},
      {t:'card', id:'x1', rank:'7', suit:'♣', x:30, y:50, face:'up', w:12},
      {t:'card', id:'x2', rank:'8', suit:'♠', x:70, y:50, face:'up', w:12},
      {t:'hi', id:'q', on:true},
      {t:'label', id:'k', text:'follow the queen', x:50, y:88}
    ]},
  { caption: "Cards are turned down and mixed with bent corners, throws, and hype moves. The queen is never where it seems.",
    beats: ["the mix"],
    actions: [
      {t:'hi', id:'q', on:false},
      {t:'flip', id:'q', to:'down'},{t:'flip', id:'x1', to:'down'},{t:'flip', id:'x2', to:'down'},
      {t:'hand', id:'rh', x:55, y:35, side:'right', on:true},
      {t:'label', id:'k', text:'throw · hype · bent corner', x:50, y:88}
    ]},
  { caption: "Spectator picks — wrong. Reveal the queen elsewhere. Street classic and classroom in misdirection.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'flip', id:'q', to:'up'},
      {t:'move', id:'q', x:70, y:45},
      {t:'hi', id:'q', on:true},
      {t:'label', id:'k', text:'never where you think', x:50, y:88}
    ]}
]};

ANIMS.t167 = { steps: [
  { caption: "Spell to Selection — the spectator's card is found by spelling its name, one card per letter.",
    beats: ["spell · find"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:38, y:56, side:'left', on:true},
      {t:'note', id:'b', text:'card controlled to spell depth', x:70, y:40},
      {t:'label', id:'k', text:'name your card', x:50, y:88}
    ]},
  { caption: "Spell A-C-E-O-F-S-P-A-D-E-S (or whatever was named), dealing one card per letter.",
    beats: ["the spell"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', x:70, y:40, side:'right', on:true},
      {t:'spread', x:12, y:50, count:8, dx:9, face:'down', w:9, prefix:'s'},
      {t:'label', id:'k', text:'one card per letter', x:50, y:88}
    ]},
  { caption: "Turn the last letter's card — it's theirs. Control + letter count (or a stack cut) made the spell automatic.",
    beats: ["last letter"],
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'hand', id:'lh', on:false},
      {t:'card', id:'found', rank:'A', suit:'♠', x:50, y:40, face:'up', w:14},
      {t:'hi', id:'found', on:true},
      {t:'scale', id:'found', s:1.1},
      {t:'label', id:'k', text:'spelled to the selection', x:50, y:88}
    ]}
]};;

ANIMS.t168 = { steps: [
  { caption: "Lie Detector — the spectator can lie or tell the truth about their card; you still find it.",
    beats: ["truth or lie"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:35, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'remember a card · lie if you want', x:50, y:88}
    ]},
  { caption: "They answer questions (color, suit, value) — truthfully or not. A process eliminates or spells to the card regardless.",
    beats: ["questions"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'remove', id:'sel'},
      {t:'hand', id:'rh', x:55, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'lie or truth — same result', x:50, y:88}
    ]},
  { caption: "The selection is revealed. The method doesn't care whether they lied.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'found', rank:'A', suit:'♠', x:50, y:45, face:'up', w:14},
      {t:'hi', id:'found', on:true},
      {t:'label', id:'k', text:'found anyway', x:50, y:88}
    ]}
]};

ANIMS.t169 = { steps: [
  { caption: "Cutting the Aces — the deck is cut (by you or them) and an ace is found at each cut.",
    beats: ["four cuts · four aces"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'cut for the first ace', x:50, y:88}
    ]},
  { caption: "Four cuts, four packets. The face or top of each packet is an ace.",
    beats: ["the cuts"],
    actions: [
      {t:'remove', id:'d'},
      {t:'packet', id:'p1', x:22, y:50, n:13},
      {t:'packet', id:'p2', x:40, y:50, n:13},
      {t:'packet', id:'p3', x:58, y:50, n:13},
      {t:'packet', id:'p4', x:76, y:50, n:13},
      {t:'label', id:'k', text:'four packets', x:50, y:88}
    ]},
  { caption: "Turn them over — four aces. Classic opener; method ranges from simple setup to advanced estimation.",
    actions: [
      {t:'card', id:'a1', rank:'A', suit:'♠', x:22, y:38, face:'up', w:11},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:40, y:38, face:'up', w:11},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:58, y:38, face:'up', w:11},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:76, y:38, face:'up', w:11},
      {t:'hi', id:'a1', on:true},{t:'hi', id:'a2', on:true},
      {t:'hi', id:'a3', on:true},{t:'hi', id:'a4', on:true},
      {t:'label', id:'k', text:'four aces cut to', x:50, y:88}
    ]}
]};

ANIMS.t170 = { steps: [
  { caption: "Lazy Man's Card Trick — a selected card is lost; the spectator does almost all the work; you still find it.",
    beats: ["spectator does the work"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:35, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'selection noted', x:50, y:88}
    ]},
  { caption: "Card replaced. Spectator cuts, shuffles (within limits), and deals. You barely touch the deck.",
    beats: ["hands off"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'remove', id:'sel'},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'spectator cuts and deals', x:50, y:88}
    ]},
  { caption: "Their card is found at a predicted position or by a simple reveal. Maximum effect, minimum visible skill.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'found', rank:'A', suit:'♠', x:50, y:45, face:'up', w:14},
      {t:'hi', id:'found', on:true},
      {t:'label', id:'k', text:'lazy man finds it', x:50, y:88}
    ]}
]};

ANIMS.t171 = { steps: [
  { caption: "Card in Lemon — a signed card vanishes from the deck and is found inside a lemon (or orange).",
    beats: ["signed · inside the fruit"],
    actions: [
      {t:'deck', id:'d', x:40, y:52, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:40, y:38, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed selection', x:50, y:88}
    ]},
  { caption: "Card is lost and vanishes. A lemon that has been in view is cut open.",
    beats: ["vanish · fruit"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'remove', id:'sel'},
      {t:'hand', id:'rh', x:65, y:45, side:'right', on:true},
      {t:'label', id:'k', text:'lemon cut open', x:50, y:88}
    ]},
  { caption: "Inside: the signed card, folded or rolled. Classic impossible location.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'found', rank:'A', suit:'♠', x:65, y:48, face:'up', w:12},
      {t:'hi', id:'found', on:true},
      {t:'scale', id:'found', s:1.1},
      {t:'label', id:'k', text:'signed card in the lemon', x:50, y:88}
    ]}
]}

ANIMS.t173 = { steps: [
  { caption: "Matching the Cards — four selections are lost; each is later found paired with its true mate.",
    beats: ["mates find mates"],
    actions: [
      {t:'spread', x:15, y:40, count:4, dx:16, face:'up', w:11, prefix:'s',
        cards:[{rank:'A',suit:'♠'},{rank:'K',suit:'♥'},{rank:'7',suit:'♦'},{rank:'3',suit:'♣'}]},
      {t:'hi', id:'s0', on:true},{t:'hi', id:'s1', on:true},
      {t:'hi', id:'s2', on:true},{t:'hi', id:'s3', on:true},
      {t:'label', id:'k', text:'four selections', x:50, y:88}
    ]},
  { caption: "Cards lost in the deck. A deal or spell pairs each with its mate automatically.",
    beats: ["the pairs"],
    actions: [
      {t:'hi', id:'s0', on:false},{t:'hi', id:'s1', on:false},
      {t:'hi', id:'s2', on:false},{t:'hi', id:'s3', on:false},
      {t:'deck', id:'d', x:50, y:55, n:52},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'dealt into pairs', x:50, y:88}
    ]},
  { caption: "Reveal: each selection sits next to its true mate.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'d'},
      {t:'card', id:'m1', rank:'A', suit:'♠', x:25, y:42, face:'up', w:10},
      {t:'card', id:'m1b', rank:'A', suit:'♣', x:35, y:48, face:'up', w:10},
      {t:'card', id:'m2', rank:'K', suit:'♥', x:55, y:42, face:'up', w:10},
      {t:'card', id:'m2b', rank:'K', suit:'♦', x:65, y:48, face:'up', w:10},
      {t:'hi', id:'m1', on:true},{t:'hi', id:'m1b', on:true},
      {t:'hi', id:'m2', on:true},{t:'hi', id:'m2b', on:true},
      {t:'label', id:'k', text:'perfect matches', x:50, y:88}
    ]}
]};

ANIMS.t174 = { steps: [
  { caption: "Card Through Table — a signed card is placed on the table under the hand and penetrates through.",
    beats: ["through the wood"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:45, face:'up', w:13},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'signed card on the table', x:50, y:88}
    ]},
  { caption: "Cover with the hand. A lapping or switch sends the card under the table.",
    beats: ["the penetrate"],
    actions: [
      {t:'hi', id:'c', on:false},
      {t:'scale', id:'c', s:0.7},
      {t:'move', id:'c', x:50, y:70},
      {t:'label', id:'k', text:'through the table', x:50, y:88}
    ]},
  { caption: "Reveal the card under the table — still signed.",
    actions: [
      {t:'scale', id:'c', s:1.1},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'signed card underneath', x:50, y:88}
    ]}
]};

ANIMS.t175 = { steps: [
  { caption: "Ambitious Classic Phase — card to top, second from top, pop-up, and final to pocket.",
    beats: ["phase sequence"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:38, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed ambitious card', x:50, y:88}
    ]},
  { caption: "Middle → top. Middle → top again. Then it pops up from the center.",
    beats: ["rises"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:50, y:55},
      {t:'move', id:'sel', x:50, y:35, z:5},
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'scale', id:'sel', s:1.08},
      {t:'label', id:'k', text:'back on top — again', x:50, y:88}
    ]},
  { caption: "Finale: vanish from the deck; produce from the pocket.",
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'remove', id:'sel'},
      {t:'card', id:'pocket', rank:'A', suit:'♠', x:75, y:50, face:'up', w:13},
      {t:'hi', id:'pocket', on:true},
      {t:'scale', id:'pocket', s:1.1},
      {t:'label', id:'k', text:'from the pocket', x:50, y:88}
    ]}
]};

ANIMS.t176 = { steps: [
  { caption: "Numeric Force — a freely named number is used to count to a forced card.",
    beats: ["any number"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'name a number', x:50, y:88}
    ]},
  { caption: "Count to their number. Through a simple adjustment or pre-position, the force card lands there.",
    beats: ["count"],
    actions: [
      {t:'spread', x:12, y:50, count:8, dx:9, face:'down', w:9, prefix:'n'},
      {t:'hand', id:'rh', x:70, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'counting to their number', x:50, y:88}
    ]},
  { caption: "Turn the card at their number — the predicted or forced selection.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'f', rank:'A', suit:'♠', x:50, y:40, face:'up', w:14},
      {t:'hi', id:'f', on:true},
      {t:'label', id:'k', text:'their number · your card', x:50, y:88}
    ]}
]};

ANIMS.t177 = { steps: [
  { caption: "Packet Vanish — a small packet of cards vanishes from the hands one by one or all at once.",
    beats: ["gone"],
    actions: [
      {t:'packet', id:'pkt', x:50, y:50, n:4, w:14},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:42, side:'left', on:true},
      {t:'label', id:'k', text:'four cards in hand', x:50, y:88}
    ]},
  { caption: "A count, a squeeze, or a toss — and the hands are empty.",
    beats: ["vanish"],
    actions: [
      {t:'scale', id:'pkt', s:0.5},
      {t:'remove', id:'pkt'},
      {t:'note', id:'b', text:'hands empty', x:50, y:55},
      {t:'label', id:'k', text:'vanished', x:50, y:88}
    ]},
  { caption: "Optional reproduction from a pocket or the deck.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'packet vanish complete', x:50, y:88}
    ]}
]};

ANIMS.t178 = { steps: [
  { caption: "Spectator as Magician — they hold the deck and find their own card through a guided procedure that feels like their magic.",
    beats: ["they do it"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'deck in their hands', x:50, y:88}
    ]},
  { caption: "You only instruct. They spell, deal, or cut — and locate the selection themselves.",
    beats: ["guided"],
    actions: [
      {t:'label', id:'k', text:'they spell / deal / cut', x:50, y:88}
    ]},
  { caption: "They turn over their own card. Credit goes to them; method stays with you.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'found', rank:'A', suit:'♠', x:50, y:45, face:'up', w:14},
      {t:'hi', id:'found', on:true},
      {t:'scale', id:'found', s:1.1},
      {t:'label', id:'k', text:'they found it', x:50, y:88}
    ]}
]}

ANIMS.t179 = { steps: [
  { caption: "Acrobatic Card — a card jumps, flips, or pops out of the deck under its own power.",
    beats: ["card jumps"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:48, face:'down', w:11},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'selection in the deck', x:50, y:88}
    ]},
  { caption: "A riffle, a snap, or a squeeze — and the card leaps face-up from the middle.",
    beats: ["the jump"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:50, y:28, z:6},
      {t:'flip', id:'sel', to:'up'},
      {t:'scale', id:'sel', s:1.12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'acrobatic reveal', x:50, y:88}
    ]},
  { caption: "Hold for a beat. Pure visual punctuation after a control.",
    actions: [
      {t:'label', id:'k', text:'acrobatic card', x:50, y:88}
    ]}
]};

ANIMS.t180 = { steps: [
  { caption: "Card Under Box — their card vanishes and is found under the card case that never left the table.",
    beats: ["under the case"],
    actions: [
      {t:'deck', id:'d', x:40, y:52, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:40, y:38, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'packet', id:'box', x:70, y:50, n:1, w:14},
      {t:'label', id:'k', text:'selection · case in view', x:50, y:88}
    ]},
  { caption: "Control and load under the case on an offbeat. Case never looks touched.",
    beats: ["load"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:70, y:58, z:1},
      {t:'scale', id:'sel', s:0.85},
      {t:'hand', id:'rh', x:68, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'loaded under the case', x:50, y:88}
    ]},
  { caption: "Lift the case — signed card underneath.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'scale', id:'sel', s:1.1},
      {t:'hi', id:'sel', on:true},
      {t:'flip', id:'sel', to:'up'},
      {t:'label', id:'k', text:'under the box the whole time', x:50, y:88}
    ]}
]};

ANIMS.t181 = { steps: [
  { caption: "Four Ace Production — produce the four aces from a shuffled deck in a flashy sequence.",
    beats: ["aces appear"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'shuffled deck', x:50, y:88}
    ]},
  { caption: "Cut, spin, or pop — first ace. Then second, third, fourth in rapid succession.",
    beats: ["one · two · three · four"],
    actions: [
      {t:'card', id:'a1', rank:'A', suit:'♠', x:22, y:40, face:'up', w:11},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:40, y:40, face:'up', w:11},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:58, y:40, face:'up', w:11},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:76, y:40, face:'up', w:11},
      {t:'hi', id:'a1', on:true},{t:'hi', id:'a2', on:true},
      {t:'hi', id:'a3', on:true},{t:'hi', id:'a4', on:true},
      {t:'label', id:'k', text:'four aces produced', x:50, y:88}
    ]},
  { caption: "Hold the display. Setup plus flashy production beats a slow deal-through.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'four ace production', x:50, y:88}
    ]}
]};

ANIMS.t182 = { steps: [
  { caption: "Triumphant Cut — a flourishy cutting sequence that rights a mixed face-up/face-down deck.",
    beats: ["cut · right"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'deck mixed face-up / face-down', x:50, y:88}
    ]},
  { caption: "A series of cuts and turns — theatrical chaos — then a final square.",
    beats: ["the sequence"],
    actions: [
      {t:'packet', id:'p1', x:30, y:40, n:13},
      {t:'packet', id:'p2', x:50, y:55, n:13},
      {t:'packet', id:'p3', x:70, y:40, n:13},
      {t:'hand', id:'rh', x:55, y:35, side:'right', on:true},
      {t:'label', id:'k', text:'cutting through the mess', x:50, y:88}
    ]},
  { caption: "Spread: every card face-down except their selection face-up in the middle.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'p1'},{t:'remove', id:'p2'},{t:'remove', id:'p3'},
      {t:'spread', x:12, y:52, count:8, dx:9, face:'down', w:9, prefix:'t'},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:40, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'order restored · selection reversed', x:50, y:88}
    ]}
]};

ANIMS.t183 = { steps: [
  { caption: "Prediction Card — a card placed aside before anything begins matches their free selection.",
    beats: ["prediction hits"],
    actions: [
      {t:'card', id:'pred', rank:'A', suit:'♠', x:30, y:45, face:'down', w:12},
      {t:'deck', id:'d', x:65, y:50, n:51},
      {t:'note', id:'b', text:'prediction set aside', x:30, y:28},
      {t:'label', id:'k', text:'prediction in view', x:50, y:88}
    ]},
  { caption: "They select freely from the deck. No switches visible.",
    beats: ["free selection"],
    actions: [
      {t:'unnote', id:'b'},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:65, y:35, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'their selection', x:50, y:88}
    ]},
  { caption: "Turn the prediction — same card. Force, stack, or switch did the work.",
    actions: [
      {t:'flip', id:'pred', to:'up'},
      {t:'hi', id:'pred', on:true},
      {t:'scale', id:'pred', s:1.08},
      {t:'label', id:'k', text:'prediction matches', x:50, y:88}
    ]}
]};

ANIMS.t184 = { steps: [
  { caption: "Back-to-Back — two cards placed back to back change into two different cards.",
    beats: ["double change"],
    actions: [
      {t:'card', id:'c1', rank:'A', suit:'♠', x:48, y:48, face:'up', w:12},
      {t:'card', id:'c2', rank:'K', suit:'♥', x:52, y:52, face:'up', w:12},
      {t:'hi', id:'c1', on:true},{t:'hi', id:'c2', on:true},
      {t:'label', id:'k', text:'two cards back to back', x:50, y:88}
    ]},
  { caption: "A squeeze or turn — both faces have changed.",
    beats: ["the change"],
    actions: [
      {t:'hi', id:'c1', on:false},{t:'hi', id:'c2', on:false},
      {t:'remove', id:'c1'},{t:'remove', id:'c2'},
      {t:'card', id:'n1', rank:'7', suit:'♣', x:48, y:48, face:'up', w:12},
      {t:'card', id:'n2', rank:'Q', suit:'♦', x:52, y:52, face:'up', w:12},
      {t:'hi', id:'n1', on:true},{t:'hi', id:'n2', on:true},
      {t:'scale', id:'n1', s:1.08},{t:'scale', id:'n2', s:1.08},
      {t:'label', id:'k', text:'both changed', x:50, y:88}
    ]},
  { caption: "Clean display. Doubles and a secret turnover do the work.",
    actions: [
      {t:'label', id:'k', text:'back-to-back change', x:50, y:88}
    ]}
]};

ANIMS.t185 = { steps: [
  { caption: "Stop Trick — they say stop as you deal; the stopped-at card is the selection.",
    beats: ["say stop"],
    actions: [
      {t:'deck', id:'d', x:45, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:45, side:'right', on:true},
      {t:'label', id:'k', text:'deal — say stop anytime', x:50, y:88}
    ]},
  { caption: "Cards dealt face-down. Whenever they stop, that card is turned up.",
    beats: ["the stop"],
    actions: [
      {t:'spread', x:12, y:55, count:6, dx:10, face:'down', w:9, prefix:'d'},
      {t:'card', id:'stop', rank:'A', suit:'♠', x:72, y:45, face:'down', w:12},
      {t:'hi', id:'stop', on:true},
      {t:'label', id:'k', text:'stopped here', x:50, y:88}
    ]},
  { caption: "It is their card. Force timing, a second deal, or a psychological stop makes it hit.",
    actions: [
      {t:'flip', id:'stop', to:'up'},
      {t:'scale', id:'stop', s:1.1},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'their card at the stop', x:50, y:88}
    ]}
]};

ANIMS.t186 = { steps: [
  { caption: "Color-Changing Aces — four blue-backed aces become red-backed (or vice versa) one at a time.",
    beats: ["backs change"],
    actions: [
      {t:'spread', x:15, y:50, count:4, dx:16, face:'up', w:11, prefix:'a',
        cards:[{rank:'A',suit:'♠'},{rank:'A',suit:'♥'},{rank:'A',suit:'♦'},{rank:'A',suit:'♣'}]},
      {t:'label', id:'k', text:'four aces — blue backs', x:50, y:88}
    ]},
  { caption: "Turn each down and show the back — one by one the backs have changed color.",
    beats: ["one by one"],
    actions: [
      {t:'flip', id:'a0', to:'down'},
      {t:'hi', id:'a0', on:true},
      {t:'label', id:'k', text:'first back changed', x:50, y:88}
    ]},
  { caption: "All four show the new color. Packet switches and dual-back cards do the work.",
    actions: [
      {t:'flip', id:'a1', to:'down'},{t:'flip', id:'a2', to:'down'},{t:'flip', id:'a3', to:'down'},
      {t:'hi', id:'a1', on:true},{t:'hi', id:'a2', on:true},{t:'hi', id:'a3', on:true},
      {t:'label', id:'k', text:'all four backs changed', x:50, y:88}
    ]}
]}

ANIMS.t187 = { steps: [
  { caption: "Card Under Box — their card vanishes and is found under the card case that stayed in view.",
    beats: ["under the box"],
    actions: [
      {t:'deck', id:'d', x:40, y:52, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:40, y:38, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'selection · case in view', x:50, y:88}
    ]},
  { caption: "Control and load under the case during a gesture or while attention is on the deck.",
    beats: ["the load"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:72, y:55, z:1},
      {t:'scale', id:'sel', s:0.85},
      {t:'hand', id:'rh', x:70, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'loaded under the case', x:50, y:88}
    ]},
  { caption: "Lift the case — signed card underneath.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'scale', id:'sel', s:1.1},
      {t:'hi', id:'sel', on:true},
      {t:'flip', id:'sel', to:'up'},
      {t:'label', id:'k', text:'under the box the whole time', x:50, y:88}
    ]}
]};

ANIMS.t188 = { steps: [
  { caption: "Ace Assembly (classic) — four aces vanish from three packets and gather under the fourth.",
    beats: ["classic assembly"],
    actions: [
      {t:'card', id:'a1', rank:'A', suit:'♠', x:22, y:40, face:'up', w:11},
      {t:'card', id:'a2', rank:'A', suit:'♥', x:40, y:40, face:'up', w:11},
      {t:'card', id:'a3', rank:'A', suit:'♦', x:58, y:40, face:'up', w:11},
      {t:'card', id:'a4', rank:'A', suit:'♣', x:76, y:40, face:'up', w:11},
      {t:'hi', id:'a1', on:true},{t:'hi', id:'a2', on:true},
      {t:'hi', id:'a3', on:true},{t:'hi', id:'a4', on:true},
      {t:'label', id:'k', text:'four aces', x:50, y:88}
    ]},
  { caption: "Each ace covered with three cards. One by one the three packets are shown empty of aces.",
    beats: ["vanish"],
    actions: [
      {t:'hi', id:'a1', on:false},{t:'hi', id:'a2', on:false},{t:'hi', id:'a3', on:false},
      {t:'packet', id:'c1', x:22, y:55, n:3},
      {t:'packet', id:'c2', x:40, y:55, n:3},
      {t:'packet', id:'c3', x:58, y:55, n:3},
      {t:'packet', id:'c4', x:76, y:55, n:3},
      {t:'label', id:'k', text:'three packets empty', x:50, y:88}
    ]},
  { caption: "Leader packet: all four aces. Classic assembly plot.",
    actions: [
      {t:'remove', id:'c1'},{t:'remove', id:'c2'},{t:'remove', id:'c3'},
      {t:'hi', id:'a4', on:true},
      {t:'card', id:'r1', rank:'A', suit:'♠', x:60, y:38, face:'up', w:10},
      {t:'card', id:'r2', rank:'A', suit:'♥', x:70, y:40, face:'up', w:10},
      {t:'card', id:'r3', rank:'A', suit:'♦', x:80, y:38, face:'up', w:10},
      {t:'hi', id:'r1', on:true},{t:'hi', id:'r2', on:true},{t:'hi', id:'r3', on:true},
      {t:'label', id:'k', text:'all four under the leader', x:50, y:88}
    ]}
]};

ANIMS.t189 = { steps: [
  { caption: "Invisible Deck (impromptu) — they name any card; it is the only reversed card in the deck.",
    beats: ["named · reversed"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'name any card', x:50, y:88}
    ]},
  { caption: "A faro, cut, or hidden reverse positions their card as the stranger before the spread.",
    beats: ["the set"],
    actions: [
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'deck set', x:50, y:88}
    ]},
  { caption: "Spread: one card faces the other way. It is the named card.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'d'},
      {t:'spread', x:12, y:52, count:9, dx:8, face:'down', w:8.5, prefix:'b'},
      {t:'card', id:'rev', rank:'A', suit:'♠', x:50, y:40, face:'up', w:12},
      {t:'hi', id:'rev', on:true},
      {t:'scale', id:'rev', s:1.1},
      {t:'label', id:'k', text:'the named card — only stranger', x:50, y:88}
    ]}
]};

ANIMS.t190 = { steps: [
  { caption: "Ambitious Pop-Up — the selection visibly rises from the center of the deck on its own.",
    beats: ["visual rise"],
    actions: [
      {t:'deck', id:'d', x:50, y:55, n:52},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:48, face:'down', w:11},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'lh', x:38, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'selection in the middle', x:50, y:88}
    ]},
  { caption: "A hidden finger or tilt drives the card upward. From the front it rises by itself.",
    beats: ["the rise"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'move', id:'sel', x:50, y:32, z:6},
      {t:'scale', id:'sel', s:1.05},
      {t:'label', id:'k', text:'rising…', x:50, y:88}
    ]},
  { caption: "Draw it out and show the face. Strong ambitious phase.",
    actions: [
      {t:'flip', id:'sel', to:'up'},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'pop-up complete', x:50, y:88}
    ]}
]};

ANIMS.t191 = { steps: [
  { caption: "False Overhand Shuffle — overhand action that preserves full order or a large stock.",
    beats: ["looks mixed · order kept"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'overhand · order intact', x:50, y:88}
    ]},
  { caption: "Run and milk in a way that returns every card to its original position — or holds a top/bottom stock.",
    beats: ["the milk"],
    actions: [
      {t:'packet', id:'run', x:45, y:40, n:12},
      {t:'label', id:'k', text:'running · restoring', x:50, y:88}
    ]},
  { caption: "Square. Looks thoroughly shuffled; order never changed.",
    actions: [
      {t:'remove', id:'run'},{t:'remove', id:'d'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'false overhand complete', x:50, y:88}
    ]}
]};

ANIMS.t192 = { steps: [
  { caption: "Card to Envelope — signed card vanishes and appears in a sealed envelope that was in view.",
    beats: ["signed · sealed"],
    actions: [
      {t:'deck', id:'d', x:40, y:52, n:51},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:40, y:38, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'signed selection', x:50, y:88}
    ]},
  { caption: "Palm and load into the envelope (or a window envelope) under cover of opening it.",
    beats: ["palm · load"],
    actions: [
      {t:'hi', id:'sel', on:false},
      {t:'hand', id:'rh', x:70, y:40, side:'right', on:true},
      {t:'move', id:'sel', x:72, y:48, z:5},
      {t:'scale', id:'sel', s:0.9},
      {t:'label', id:'k', text:'into the envelope', x:50, y:88}
    ]},
  { caption: "Open the envelope. Their signed card is inside.",
    actions: [
      {t:'move', id:'sel', x:70, y:50},
      {t:'scale', id:'sel', s:1.1},
      {t:'hi', id:'sel', on:true},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'signed card in the envelope', x:50, y:88}
    ]}
]};

ANIMS.t193 = { steps: [
  { caption: "Multiple Selection Routine — three (or more) selections lost and found in escalating ways.",
    beats: ["three cards · three finds"],
    actions: [
      {t:'card', id:'s1', rank:'A', suit:'♠', x:30, y:40, face:'up', w:11},
      {t:'card', id:'s2', rank:'K', suit:'♥', x:50, y:40, face:'up', w:11},
      {t:'card', id:'s3', rank:'7', suit:'♦', x:70, y:40, face:'up', w:11},
      {t:'hi', id:'s1', on:true},{t:'hi', id:'s2', on:true},{t:'hi', id:'s3', on:true},
      {t:'label', id:'k', text:'three selections', x:50, y:88}
    ]},
  { caption: "All three lost in the deck. Found one by one — top, middle production, pocket.",
    beats: ["escalating finds"],
    actions: [
      {t:'hi', id:'s1', on:false},{t:'hi', id:'s2', on:false},{t:'hi', id:'s3', on:false},
      {t:'deck', id:'d', x:50, y:55, n:52},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'lost · now finding…', x:50, y:88}
    ]},
  { caption: "Third card from the pocket or under a glass. Build each reveal bigger than the last.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'f1', rank:'A', suit:'♠', x:30, y:45, face:'up', w:11},
      {t:'card', id:'f2', rank:'K', suit:'♥', x:50, y:45, face:'up', w:11},
      {t:'card', id:'f3', rank:'7', suit:'♦', x:70, y:45, face:'up', w:11},
      {t:'hi', id:'f1', on:true},{t:'hi', id:'f2', on:true},{t:'hi', id:'f3', on:true},
      {t:'label', id:'k', text:'all three found', x:50, y:88}
    ]}
]};

ANIMS.t194 = { steps: [
  { caption: "Prediction Sandwich — a predicted card appears trapped between two face-up mates or jokers.",
    beats: ["sandwich"],
    actions: [
      {t:'card', id:'j1', rank:'J', suit:'♠', x:40, y:40, face:'up', w:12},
      {t:'card', id:'j2', rank:'J', suit:'♥', x:60, y:40, face:'up', w:12},
      {t:'hi', id:'j1', on:true},{t:'hi', id:'j2', on:true},
      {t:'label', id:'k', text:'two jokers · prediction waits', x:50, y:88}
    ]},
  { caption: "Selection lost in the deck. Jokers inserted or waved; the selection appears between them.",
    beats: ["the trap"],
    actions: [
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:48, face:'up', w:11},
      {t:'move', id:'j1', x:42, y:48},
      {t:'move', id:'j2', x:58, y:48},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'trapped between', x:50, y:88}
    ]},
  { caption: "Clean sandwich. Prediction optional — or the sandwich *is* the prediction.",
    actions: [
      {t:'scale', id:'sel', s:1.1},
      {t:'label', id:'k', text:'sandwich complete', x:50, y:88}
    ]}
]}

ANIMS.t195 = { steps: [
  { caption: "Overhand Shuffle (basic) — the everyday mix. Cards peel from one hand into the other in small packets.",
    beats: ["start grip"],
    actions: [
      {t:'deck', id:'d', x:55, y:48, n:52},
      {t:'hand', id:'rh', x:62, y:42, side:'right', on:true},
      {t:'hand', id:'lh', x:38, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'right hand holds the deck', x:50, y:88}
    ]},
  { caption: "Left thumb peels small groups onto the left palm. Repeat until the right hand is empty.",
    beats: ["peel packets"],
    actions: [
      {t:'packet', id:'pkt', x:40, y:50, n:8},
      {t:'remove', id:'d'},
      {t:'deck', id:'rest', x:58, y:45, n:40},
      {t:'label', id:'k', text:'peel · drop · peel · drop', x:50, y:88}
    ]},
  { caption: "Square the deck. One overhand shuffle is a light mix; two or three is a normal mix.",
    actions: [
      {t:'remove', id:'pkt'},{t:'remove', id:'rest'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'squared — shuffle complete', x:50, y:88}
    ]}
]};

ANIMS.t196 = { steps: [
  { caption: "Riffle Shuffle (table) — the classic casino-style mix. Two halves interweave on the table.",
    beats: ["split"],
    actions: [
      {t:'deck', id:'left', x:35, y:50, n:26},
      {t:'deck', id:'right', x:65, y:50, n:26},
      {t:'hand', id:'lh', x:28, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:72, y:55, side:'right', on:true},
      {t:'label', id:'k', text:'deck cut into two equal halves', x:50, y:88}
    ]},
  { caption: "Thumbs riffle the inner corners so the cards fall alternately — left, right, left, right…",
    beats: ["weave"],
    actions: [
      {t:'spread', x:30, y:48, count:6, dx:6, face:'down', w:8, prefix:'l'},
      {t:'spread', x:52, y:52, count:6, dx:6, face:'down', w:8, prefix:'r'},
      {t:'label', id:'k', text:'riffle — cards interweave', x:50, y:88}
    ]},
  { caption: "Push the woven halves together and square. That is one full riffle shuffle.",
    actions: [
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'pushed flush · squared', x:50, y:88}
    ]}
]};

ANIMS.t197 = { steps: [
  { caption: "Hindu Shuffle (basic mix) — packets stripped from the top into the other hand. Great for small spaces.",
    beats: ["start"],
    actions: [
      {t:'deck', id:'d', x:55, y:48, n:52},
      {t:'hand', id:'rh', x:60, y:42, side:'right', on:true},
      {t:'hand', id:'lh', x:38, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'right hand holds the deck from above', x:50, y:88}
    ]},
  { caption: "Left fingers and thumb strip small packets off the top of the right-hand stock into the left palm.",
    beats: ["strip"],
    actions: [
      {t:'packet', id:'taken', x:38, y:52, n:10},
      {t:'deck', id:'stub', x:58, y:45, n:42},
      {t:'remove', id:'d'},
      {t:'label', id:'k', text:'strip packets into the left hand', x:50, y:88}
    ]},
  { caption: "Continue until the right hand is empty. Square. (The force version is a separate trick later.)",
    actions: [
      {t:'remove', id:'taken'},{t:'remove', id:'stub'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'hindu shuffle complete', x:50, y:88}
    ]}
]};

ANIMS.t198 = { steps: [
  { caption: "Wash Shuffle — scramble the cards face-down on the table in circles, then gather. Maximum chaos, zero technique.",
    beats: ["spread out"],
    actions: [
      {t:'spread', x:18, y:40, count:8, dx:8, face:'down', w:9, prefix:'a'},
      {t:'spread', x:22, y:55, count:8, dx:8, face:'down', w:9, prefix:'b'},
      {t:'label', id:'k', text:'cards spread on the table', x:50, y:88}
    ]},
  { caption: "Both hands push the cards in small circles so they slide over each other randomly.",
    beats: ["wash"],
    actions: [
      {t:'hand', id:'lh', x:35, y:45, side:'left', on:true},
      {t:'hand', id:'rh', x:65, y:55, side:'right', on:true},
      {t:'label', id:'k', text:'circular wash motion', x:50, y:88}
    ]},
  { caption: "Scoop into a pile and square. Honest, thorough, and easy to explain to an audience.",
    actions: [
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'gathered and squared', x:50, y:88}
    ]}
]};

ANIMS.t199 = { steps: [
  { caption: "Tabled Riffle + Bridge — after the riffle weave, the halves are arched and released so they cascade together.",
    beats: ["woven"],
    actions: [
      {t:'deck', id:'l', x:38, y:52, n:26},
      {t:'deck', id:'r', x:62, y:52, n:26},
      {t:'label', id:'k', text:'halves woven · not yet squared', x:50, y:88}
    ]},
  { caption: "Lift both ends, bow the packet so the center rises, then let the cards spring flush — the bridge.",
    beats: ["bridge"],
    actions: [
      {t:'hand', id:'lh', x:32, y:45, side:'left', on:true},
      {t:'hand', id:'rh', x:68, y:45, side:'right', on:true},
      {t:'note', id:'b', text:'arch · release', x:50, y:30},
      {t:'label', id:'k', text:'bridge cascade', x:50, y:88}
    ]},
  { caption: "Cards settle into one squared deck. Looks polished; still a fair mix if the riffle was honest.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'bridge complete', x:50, y:88}
    ]}
]};

ANIMS.t200 = { steps: [
  { caption: "Running Cut (multiple cuts) — cutting the deck several times in a row. Simple, fair-looking, easy to learn.",
    beats: ["cut"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'lift a packet from the top', x:50, y:88}
    ]},
  { caption: "Place that packet on the table. Cut another packet onto it. Repeat a few times, then drop the rest on top.",
    beats: ["run"],
    actions: [
      {t:'deck', id:'p1', x:40, y:55, n:15},
      {t:'deck', id:'p2', x:55, y:48, n:15},
      {t:'deck', id:'p3', x:70, y:55, n:22},
      {t:'remove', id:'d'},
      {t:'label', id:'k', text:'packets in a row · then restack', x:50, y:88}
    ]},
  { caption: "Restack into one deck and square. A running cut changes position but does not mix as deeply as a riffle.",
    actions: [
      {t:'remove', id:'p1'},{t:'remove', id:'p2'},{t:'remove', id:'p3'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'running cut complete', x:50, y:88}
    ]}
]}

ANIMS.t201 = { steps: [
  { caption: "10–20 Force — a number between 10 and 20 is named; counting forces a predetermined card.",
    beats: ["number named"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'name a number from 10 to 20', x:50, y:88}
    ]},
  { caption: "Count that many cards into a pile. The force card was set so the count lands on it (or a simple digit-sum finishes the force).",
    beats: ["count"],
    actions: [
      {t:'spread', x:15, y:50, count:10, dx:7, face:'down', w:8, prefix:'n'},
      {t:'hand', id:'rh', x:70, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'counting to their number', x:50, y:88}
    ]},
  { caption: "Turn over the card at the number — your force card.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'f', rank:'A', suit:'♠', x:50, y:40, face:'up', w:13},
      {t:'hi', id:'f', on:true},
      {t:'label', id:'k', text:'forced at their number', x:50, y:88}
    ]}
]};

ANIMS.t202 = { steps: [
  { caption: "Swivel Cut — a clean one-hand-assisted cut; also the engine inside many false cuts.",
    beats: ["grip"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'right hand Biddle grip', x:50, y:88}
    ]},
  { caption: "Left hand takes the top half with a swivel action; complete the cut or hold a break as needed.",
    beats: ["swivel"],
    actions: [
      {t:'deck', id:'top', x:40, y:42, n:26},
      {t:'deck', id:'bot', x:58, y:55, n:26},
      {t:'hand', id:'lh', x:32, y:48, side:'left', on:true},
      {t:'label', id:'k', text:'swivel the top half away', x:50, y:88}
    ]},
  { caption: "Square. Looks like a fair cut; practice until the motion is one smooth gesture.",
    actions: [
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'remove', id:'top'},{t:'remove', id:'bot'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'swivel cut complete', x:50, y:88}
    ]}
]};

ANIMS.t203 = { steps: [
  { caption: "Simple Key-Card Location — their card is lost; you find it using a known neighbor.",
    beats: ["note the key"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'card', id:'key', rank:'K', suit:'♥', x:50, y:38, face:'up', w:11},
      {t:'hi', id:'key', on:true},
      {t:'label', id:'k', text:'glimpse a key (e.g. bottom card)', x:50, y:88}
    ]},
  { caption: "Selection returned on top; cut the deck so the key sits next to their card.",
    beats: ["cut"],
    actions: [
      {t:'hi', id:'key', on:false},
      {t:'card', id:'sel', rank:'A', suit:'♠', x:50, y:40, face:'down', w:11},
      {t:'label', id:'k', text:'selection next to key after cut', x:50, y:88}
    ]},
  { caption: "Spread face-up, find the key, and name the card beside it.",
    actions: [
      {t:'remove', id:'sel'},
      {t:'card', id:'key', rank:'K', suit:'♥', x:42, y:45, face:'up', w:11},
      {t:'card', id:'sel2', rank:'A', suit:'♠', x:58, y:45, face:'up', w:11},
      {t:'hi', id:'key', on:true},{t:'hi', id:'sel2', on:true},
      {t:'label', id:'k', text:'key marks the selection', x:50, y:88}
    ]}
]};

ANIMS.t204 = { steps: [
  { caption: "Under-the-Spread Force — as you spread, the force card rides under the spread and is the one they touch.",
    beats: ["force under spread"],
    actions: [
      {t:'spread', x:12, y:50, count:10, dx:8, face:'down', w:9, prefix:'s'},
      {t:'card', id:'f', rank:'A', suit:'♠', x:50, y:58, face:'down', w:10},
      {t:'hi', id:'f', on:true},
      {t:'label', id:'k', text:'force card under the spread', x:50, y:88}
    ]},
  { caption: "They touch a card. You square so the force card is the one taken.",
    beats: ["touch"],
    actions: [
      {t:'hand', id:'rh', x:55, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'their touch · your force', x:50, y:88}
    ]},
  { caption: "They keep the force card. Timing makes it feel like a free choice.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'move', id:'f', x:50, y:40},
      {t:'flip', id:'f', to:'up'},
      {t:'scale', id:'f', s:1.08},
      {t:'label', id:'k', text:'forced card taken', x:50, y:88}
    ]}
]};

ANIMS.t205 = { steps: [
  { caption: "The False Table Cut — a cut on the table that retains the full order (or a large stock).",
    beats: ["looks cut"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'deck on the table', x:50, y:88}
    ]},
  { caption: "Cut into two or three packets, then restack so the original top returns to the top.",
    beats: ["restack"],
    actions: [
      {t:'deck', id:'a', x:35, y:50, n:17},
      {t:'deck', id:'b', x:50, y:48, n:17},
      {t:'deck', id:'c', x:65, y:50, n:18},
      {t:'remove', id:'d'},
      {t:'label', id:'k', text:'packets · restack to order', x:50, y:88}
    ]},
  { caption: "Square. Audience sees a cut; order is unchanged. Foundation for false-shuffle work.",
    actions: [
      {t:'remove', id:'a'},{t:'remove', id:'b'},{t:'remove', id:'c'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'order retained', x:50, y:88}
    ]}
]}

ANIMS.t206 = { steps: [
  { caption: "Mechanic's Grip — the default dealing grip. Control, not decoration.",
    beats: ["the foundation grip"],
    actions: [
      {t:'deck', id:'d', x:48, y:52, n:52},
      {t:'hand', id:'lh', x:36, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'left hand · dealing grip', x:50, y:88}
    ]},
  { caption: "Deck sits in the left palm. Index at outer-left corner; middle/ring along the long edge; pinky at the inner end; thumb along the left long edge.",
    beats: ["finger roles"],
    actions: [
      {t:'note', id:'b', text:'index · middle · ring · pinky · thumb', x:50, y:28},
      {t:'label', id:'k', text:'stable · square · quiet', x:50, y:88}
    ]},
  { caption: "Practice squaring and pushing off single cards. Every deal and many flourishes start here.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'mechanic\'s grip solid', x:50, y:88}
    ]}
]};

ANIMS.t207 = { steps: [
  { caption: "Biddle Grip — from above. Thumb inner end, fingers outer end. Essential for counts, spreads, and packet work.",
    beats: ["overhand grip"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'right hand from above', x:50, y:88}
    ]},
  { caption: "Light pressure. The deck hangs from the ends — not squeezed from the sides.",
    beats: ["light"],
    actions: [
      {t:'note', id:'b', text:'thumb in · fingers out', x:50, y:28},
      {t:'label', id:'k', text:'ends, not sides', x:50, y:88}
    ]},
  { caption: "Lift, square, and set down without noise. Switch to mechanic's grip and back until both feel natural.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'Biddle grip ready', x:50, y:88}
    ]}
]};

ANIMS.t208 = { steps: [
  { caption: "Waterfall — cards cascade from one hand into the other in a continuous ribbon.",
    beats: ["cascade"],
    actions: [
      {t:'deck', id:'d', x:50, y:40, n:52},
      {t:'hand', id:'rh', x:55, y:32, side:'right', on:true},
      {t:'hand', id:'lh', x:45, y:60, side:'left', on:true},
      {t:'label', id:'k', text:'deck arched between the hands', x:50, y:88}
    ]},
  { caption: "Bow the deck. Release pressure so cards spring thumb-to-thumb into the waiting hand.",
    beats: ["release"],
    actions: [
      {t:'spread', x:40, y:48, count:8, dx:3, face:'down', w:8, prefix:'w'},
      {t:'label', id:'k', text:'cards falling in a stream', x:50, y:88}
    ]},
  { caption: "Catch and square. Soft cards waterfall more easily than a stiff new deck.",
    actions: [
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'waterfall complete', x:50, y:88}
    ]}
]};

ANIMS.t209 = { steps: [
  { caption: "Scissor Cut — packets open like scissors, then close. Clean, visual, one of the first \"showy\" cuts.",
    beats: ["open"],
    actions: [
      {t:'deck', id:'a', x:42, y:48, n:26},
      {t:'deck', id:'b', x:58, y:52, n:26},
      {t:'hand', id:'lh', x:34, y:50, side:'left', on:true},
      {t:'hand', id:'rh', x:66, y:50, side:'right', on:true},
      {t:'label', id:'k', text:'two packets · scissor action', x:50, y:88}
    ]},
  { caption: "Index fingers (or thumbs) separate the halves; reassemble with a soft close.",
    beats: ["close"],
    actions: [
      {t:'move', id:'a', x:48, y:50},
      {t:'move', id:'b', x:52, y:50},
      {t:'label', id:'k', text:'close into one deck', x:50, y:88}
    ]},
  { caption: "Square. Practice until the open and close are one rhythm.",
    actions: [
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'remove', id:'a'},{t:'remove', id:'b'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'scissor cut complete', x:50, y:88}
    ]}
]};

ANIMS.t210 = { steps: [
  { caption: "LePaul Spread — a wide, even table spread from a squared deck with one smooth push.",
    beats: ["table spread"],
    actions: [
      {t:'deck', id:'d', x:25, y:50, n:52},
      {t:'hand', id:'rh', x:32, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'deck on the table', x:50, y:88}
    ]},
  { caption: "Fingers push the top into a long arc or line. Aim for even gaps — no clumps.",
    beats: ["spread"],
    actions: [
      {t:'remove', id:'d'},
      {t:'spread', x:10, y:50, count:14, dx:5.5, face:'down', w:7, prefix:'s'},
      {t:'label', id:'k', text:'long even spread', x:50, y:88}
    ]},
  { caption: "Scoop to close. Ribbon spreads and fans share the same pressure skill.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'LePaul spread complete', x:50, y:88}
    ]}
]};

ANIMS.t211 = { steps: [
  { caption: "Helicopter Cut — a packet spins horizontally as it falls onto the other half. Flashy, still a cut.",
    beats: ["spin"],
    actions: [
      {t:'deck', id:'base', x:50, y:55, n:26},
      {t:'deck', id:'spin', x:50, y:38, n:26},
      {t:'hand', id:'rh', x:58, y:32, side:'right', on:true},
      {t:'label', id:'k', text:'upper packet spins', x:50, y:88}
    ]},
  { caption: "Release with a horizontal twist so the packet rotates as it drops.",
    beats: ["drop"],
    actions: [
      {t:'move', id:'spin', x:50, y:52},
      {t:'rot', id:'spin', deg:180},
      {t:'label', id:'k', text:'spin · land · square', x:50, y:88}
    ]},
  { caption: "Square. Soft decks spin more cooperatively. Control the height — low and clean beats high and lucky.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'spin'},{t:'remove', id:'base'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'helicopter cut complete', x:50, y:88}
    ]}
]};

ANIMS.t212 = { steps: [
  { caption: "Index Fan — a tight, readable fan driven by the index finger and thumb, faces toward the audience.",
    beats: ["build the fan"],
    actions: [
      {t:'deck', id:'d', x:48, y:55, n:52},
      {t:'hand', id:'lh', x:38, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'deck in left hand', x:50, y:88}
    ]},
  { caption: "Right index (or left, if one-handed) pushes the cards into a smooth arc. Even spacing is the whole skill.",
    beats: ["arc"],
    actions: [
      {t:'remove', id:'d'},
      {t:'fan', x:52, y:56, count:12, spread:100, startDeg:-50, radius:13, w:9, face:'up', prefix:'f',
        cards:[
          {rank:'A',suit:'♠'},{rank:'K',suit:'♥'},{rank:'Q',suit:'♣'},{rank:'J',suit:'♦'},
          {rank:'10',suit:'♠'},{rank:'9',suit:'♥'},{rank:'8',suit:'♣'},{rank:'7',suit:'♦'},
          {rank:'6',suit:'♠'},{rank:'5',suit:'♥'},{rank:'4',suit:'♣'},{rank:'3',suit:'♦'}
        ]},
      {t:'label', id:'k', text:'even index-driven fan', x:50, y:88}
    ]},
  { caption: "Hold for display, then close with a soft squeeze. Faces should be readable, not stacked.",
    actions: [
      {t:'hand', id:'lh', on:false},
      {t:'deck', id:'done', x:50, y:52, n:52},
      {t:'label', id:'k', text:'index fan complete', x:50, y:88}
    ]}
]};

ANIMS.t213 = { steps: [
  { caption: "Cardistry posture — stance, shoulders, and frame. Flourishes read better when the body is quiet.",
    beats: ["frame"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:60, y:55, side:'right', on:true},
      {t:'label', id:'k', text:'elbows in · hands in frame', x:50, y:88}
    ]},
  { caption: "Keep the deck in a clear \"camera box\" in front of your chest. Avoid hiding moves behind the hands.",
    beats: ["camera box"],
    actions: [
      {t:'note', id:'b', text:'chest-height · centered', x:50, y:28},
      {t:'label', id:'k', text:'audience sees the cards', x:50, y:88}
    ]},
  { caption: "Slow is readable. Speed comes after clean positions. Film yourself from the front.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'posture first · then speed', x:50, y:88}
    ]}
]};

ANIMS.t214 = { steps: [
  { caption: "Two-Handed Spring — a controlled spring between both hands (related to the one-hand spring, different grip).",
    beats: ["arch"],
    actions: [
      {t:'deck', id:'d', x:50, y:48, n:52},
      {t:'hand', id:'lh', x:38, y:52, side:'left', on:true},
      {t:'hand', id:'rh', x:62, y:52, side:'right', on:true},
      {t:'label', id:'k', text:'deck bowed between hands', x:50, y:88}
    ]},
  { caption: "Pressure at the ends; release so cards stream to the other hand without spraying.",
    beats: ["stream"],
    actions: [
      {t:'label', id:'k', text:'steady stream · soft catch', x:50, y:88}
    ]},
  { caption: "Catch and square. If cards fly, reduce pressure and height.",
    actions: [
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'two-handed spring complete', x:50, y:88}
    ]}
]};

ANIMS.t215 = { steps: [
  { caption: "Study loop — how to practice cardistry so each session actually improves something.",
    beats: ["deliberate practice"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'one move · many clean reps', x:50, y:88}
    ]},
  { caption: "Pick one move. Do slow reps until positions are correct. Then add tempo. Film the last set.",
    beats: ["slow → fast"],
    actions: [
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'form first · speed second', x:50, y:88}
    ]},
  { caption: "End with a short combo of moves you already own. Confidence compounds.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'session complete', x:50, y:88}
    ]}
]}

ANIMS.t216 = { steps: [
  { caption: "One-Hand Spring — cards stream from a bowed deck in a single hand into a catch or the table.",
    beats: ["one hand · stream"],
    actions: [
      {t:'deck', id:'d', x:50, y:45, n:52},
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'deck bowed in one hand', x:50, y:88}
    ]},
  { caption: "Pressure at the ends; release so cards spring in a controlled arc. Catch or let them pile.",
    beats: ["release"],
    actions: [
      {t:'spread', x:42, y:55, count:8, dx:4, face:'down', w:8, prefix:'s'},
      {t:'label', id:'k', text:'stream from one hand', x:50, y:88}
    ]},
  { caption: "Harder than the two-handed spring. Soft decks help. Film from the side to check the arc.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'one-hand spring complete', x:50, y:88}
    ]}
]};

ANIMS.t217 = { steps: [
  { caption: "Sybil Cut (advanced timing) — multiple packets dance between the fingers. Precision over speed.",
    beats: ["multi-packet"],
    actions: [
      {t:'packet', id:'p1', x:35, y:48, n:10},
      {t:'packet', id:'p2', x:50, y:42, n:10},
      {t:'packet', id:'p3', x:65, y:48, n:10},
      {t:'hand', id:'rh', x:55, y:35, side:'right', on:true},
      {t:'label', id:'k', text:'three+ packets in play', x:50, y:88}
    ]},
  { caption: "Each transfer is a small, exact motion. Learn the sequence slowly; tempo comes last.",
    beats: ["transfer"],
    actions: [
      {t:'move', id:'p1', x:45, y:50},
      {t:'move', id:'p2', x:55, y:45},
      {t:'label', id:'k', text:'packet · packet · packet', x:50, y:88}
    ]},
  { caption: "Reassemble and square. If packets collide, reduce speed and isolate one transfer at a time.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'p1'},{t:'remove', id:'p2'},{t:'remove', id:'p3'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'sybil sequence complete', x:50, y:88}
    ]}
]};

ANIMS.t218 = { steps: [
  { caption: "Revolution Cut (flourish rate) — the packet revolves fully before landing. Control the axis.",
    beats: ["full revolution"],
    actions: [
      {t:'deck', id:'base', x:50, y:55, n:26},
      {t:'deck', id:'rev', x:50, y:36, n:26},
      {t:'hand', id:'rh', x:58, y:30, side:'right', on:true},
      {t:'label', id:'k', text:'upper packet revolves', x:50, y:88}
    ]},
  { caption: "Guide a full 360° so faces flash cleanly, then land square on the lower half.",
    beats: ["land"],
    actions: [
      {t:'rot', id:'rev', deg:360},
      {t:'move', id:'rev', x:50, y:52},
      {t:'label', id:'k', text:'360° · land · square', x:50, y:88}
    ]},
  { caption: "Advanced when chained with other cuts. One clean revolution beats three messy ones.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'rev'},{t:'remove', id:'base'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'revolution complete', x:50, y:88}
    ]}
]};

ANIMS.t219 = { steps: [
  { caption: "Hot Shot Cut — a packet shoots or snaps into place with a sharp, audible finish.",
    beats: ["snap"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:60, y:40, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'build tension · release', x:50, y:88}
    ]},
  { caption: "Energy is stored in the fingers, then released so the packet arrives with a crisp stop.",
    beats: ["release"],
    actions: [
      {t:'packet', id:'shot', x:55, y:42, n:15},
      {t:'label', id:'k', text:'snap into place', x:50, y:88}
    ]},
  { caption: "Sound is optional; accuracy is not. Practice the stop without the noise first.",
    actions: [
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'remove', id:'shot'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'hot shot complete', x:50, y:88}
    ]}
]};

ANIMS.t220 = { steps: [
  { caption: "Pad Spin — a single card spins on a finger or on the deck before being caught or dealt.",
    beats: ["spin"],
    actions: [
      {t:'card', id:'c', rank:'A', suit:'♠', x:50, y:45, face:'up', w:12},
      {t:'hi', id:'c', on:true},
      {t:'hand', id:'rh', x:58, y:50, side:'right', on:true},
      {t:'label', id:'k', text:'card balanced for spin', x:50, y:88}
    ]},
  { caption: "Flick to rotate; keep the center over the support point. Catch or let it settle.",
    beats: ["catch"],
    actions: [
      {t:'rot', id:'c', deg:360},
      {t:'label', id:'k', text:'spin · stabilize', x:50, y:88}
    ]},
  { caption: "Use as a transition or a beat between heavier cuts.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'hi', id:'c', on:false},
      {t:'label', id:'k', text:'pad spin complete', x:50, y:88}
    ]}
]};

ANIMS.t221 = { steps: [
  { caption: "Two-Hand Sybil Intro — packets shared between both hands in a short, learnable sequence.",
    beats: ["both hands"],
    actions: [
      {t:'packet', id:'a', x:35, y:50, n:13},
      {t:'packet', id:'b', x:50, y:45, n:13},
      {t:'packet', id:'c', x:65, y:50, n:13},
      {t:'hand', id:'lh', x:30, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:70, y:55, side:'right', on:true},
      {t:'label', id:'k', text:'packets split across hands', x:50, y:88}
    ]},
  { caption: "Transfer A→B→C on a metronome. Name each position until the path is memorized.",
    beats: ["path"],
    actions: [
      {t:'move', id:'a', x:50, y:50},
      {t:'label', id:'k', text:'transfer on the beat', x:50, y:88}
    ]},
  { caption: "Reassemble. This is a bridge from single cuts to full sybil work.",
    actions: [
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'remove', id:'a'},{t:'remove', id:'b'},{t:'remove', id:'c'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'two-hand sequence complete', x:50, y:88}
    ]}
]};

ANIMS.t222 = { steps: [
  { caption: "Deck Squeeze / Compression Display — the deck compresses and expands as a visual beat.",
    beats: ["compress"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:60, y:55, side:'right', on:true},
      {t:'label', id:'k', text:'pressure from both ends', x:50, y:88}
    ]},
  { caption: "Apply even end pressure, then ease so the deck returns to full thickness with a soft spring.",
    beats: ["expand"],
    actions: [
      {t:'scale', id:'d', s:0.92},
      {t:'scale', id:'d', s:1.0},
      {t:'label', id:'k', text:'compress · expand', x:50, y:88}
    ]},
  { caption: "Use as a connector between cuts. Never force cards to warp permanently.",
    actions: [
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'squeeze display complete', x:50, y:88}
    ]}
]};

ANIMS.t223 = { steps: [
  { caption: "L-Cut — packets form an L shape mid-cut, then resolve. Geometric and readable.",
    beats: ["L shape"],
    actions: [
      {t:'deck', id:'vert', x:45, y:42, n:26},
      {t:'deck', id:'horiz', x:58, y:55, n:26},
      {t:'hand', id:'rh', x:55, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'packets in an L', x:50, y:88}
    ]},
  { caption: "Hold the shape a beat so it reads, then close into a single squared deck.",
    beats: ["resolve"],
    actions: [
      {t:'move', id:'vert', x:50, y:50},
      {t:'move', id:'horiz', x:50, y:50},
      {t:'label', id:'k', text:'close the L', x:50, y:88}
    ]},
  { caption: "Advanced when chained. Clarity of the L matters more than speed.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'remove', id:'vert'},{t:'remove', id:'horiz'},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'L-cut complete', x:50, y:88}
    ]}
]};

ANIMS.t224 = { steps: [
  { caption: "Flourish Combo Builder — link three owned moves into one continuous phrase.",
    beats: ["combo"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'move A → B → C', x:50, y:88}
    ]},
  { caption: "Example path: swivel cut → scissor cut → waterfall. Same deck, no reset between.",
    beats: ["flow"],
    actions: [
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'label', id:'k', text:'no pause · one phrase', x:50, y:88}
    ]},
  { caption: "Write your combo down. Practice the transitions more than the flashy middles.",
    actions: [
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'combo phrase complete', x:50, y:88}
    ]}
]};

ANIMS.t225 = { steps: [
  { caption: "Advanced practice rules — how to train hard flourishes without burning out or engraving mistakes.",
    beats: ["training"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'deliberate · limited · filmed', x:50, y:88}
    ]},
  { caption: "Isolate one transfer. Ten clean slow reps. Then five at tempo. Stop when form breaks.",
    beats: ["isolate"],
    actions: [
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'stop before form collapses', x:50, y:88}
    ]},
  { caption: "One advanced move per week is enough. Own it before stacking another.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'advanced practice complete', x:50, y:88}
    ]}
]}

ANIMS.t226 = { steps: [
  { caption: "One-Hand Spring — Grip Map. Where each finger works before any cards move.",
    beats: ["map the hand"],
    actions: [
      {t:'deck', id:'d', x:50, y:48, n:52},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'short ends under control', x:50, y:88}
    ]},
  { caption: "Thumb on one short end; fingers on the other. The long edges stay free so the deck can bow.",
    beats: ["ends only"],
    actions: [
      {t:'note', id:'b', text:'thumb end · finger end · free longs', x:50, y:28},
      {t:'label', id:'k', text:'pressure on ends, not sides', x:50, y:88}
    ]},
  { caption: "If you squeeze the long edges, the deck cannot spring — it only crushes.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'grip map set', x:50, y:88}
    ]}
]};

ANIMS.t227 = { steps: [
  { caption: "The Bow — even bend from end to end. This stores the energy the spring will release.",
    beats: ["build the bow"],
    actions: [
      {t:'deck', id:'d', x:50, y:48, n:52},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'apply end pressure', x:50, y:88}
    ]},
  { caption: "Press thumb and fingers toward each other until the center of the deck rises into a smooth arch.",
    beats: ["arch"],
    actions: [
      {t:'scale', id:'d', s:0.94},
      {t:'note', id:'b', text:'center rises · ends fixed', x:50, y:28},
      {t:'label', id:'k', text:'smooth arch — not a kink', x:50, y:88}
    ]},
  { caption: "A kink (sharp bend in one spot) means uneven pressure. Reset and bow again.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'scale', id:'d', s:1.0},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'even bow ready', x:50, y:88}
    ]}
]};

ANIMS.t228 = { steps: [
  { caption: "The Release — easing pressure so cards leave in a stream, not a burst.",
    beats: ["ease, do not yank"],
    actions: [
      {t:'deck', id:'d', x:50, y:42, n:52},
      {t:'hand', id:'rh', x:58, y:35, side:'right', on:true},
      {t:'label', id:'k', text:'bow held · release begins', x:50, y:88}
    ]},
  { caption: "Slightly reduce end pressure. Cards should peel from the center of the arch in sequence.",
    beats: ["stream"],
    actions: [
      {t:'spread', x:40, y:55, count:9, dx:4, face:'down', w:8, prefix:'s'},
      {t:'label', id:'k', text:'sequential peel — not explosion', x:50, y:88}
    ]},
  { caption: "If the whole block jumps, you released both ends at once. Practice a slower ease.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'controlled release', x:50, y:88}
    ]}
]};

ANIMS.t229 = { steps: [
  { caption: "Arc Geometry — the path cards travel from hand to catch zone.",
    beats: ["aim the arc"],
    actions: [
      {t:'deck', id:'d', x:50, y:38, n:52},
      {t:'hand', id:'rh', x:55, y:32, side:'right', on:true},
      {t:'label', id:'k', text:'start height set', x:50, y:88}
    ]},
  { caption: "Low arc = more control. High arc = more spray risk. Start low over a bed or soft surface.",
    beats: ["low first"],
    actions: [
      {t:'spread', x:42, y:52, count:7, dx:5, face:'down', w:8, prefix:'a'},
      {t:'note', id:'b', text:'low arc · tight stream', x:50, y:28},
      {t:'label', id:'k', text:'height is a dial, not a flex', x:50, y:88}
    ]},
  { caption: "Raise height only after the stream is even at low height.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'arc under control', x:50, y:88}
    ]}
]};

ANIMS.t230 = { steps: [
  { caption: "The Catch — soft hand, early platform, no slap.",
    beats: ["receive"],
    actions: [
      {t:'hand', id:'lh', x:42, y:58, side:'left', on:true},
      {t:'hand', id:'rh', x:60, y:35, side:'right', on:true},
      {t:'deck', id:'d', x:58, y:40, n:52},
      {t:'label', id:'k', text:'catch hand ready early', x:50, y:88}
    ]},
  { caption: "The receiving hand is already in place before the release. Palm soft; fingers guide, not clamp.",
    beats: ["soft palm"],
    actions: [
      {t:'spread', x:40, y:55, count:6, dx:4, face:'down', w:8, prefix:'c'},
      {t:'label', id:'k', text:'guide into the palm', x:50, y:88}
    ]},
  { caption: "Square only after the last card arrives. Mid-stream grabbing creates jams.",
    actions: [
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'clean catch', x:50, y:88}
    ]}
]};

ANIMS.t231 = { steps: [
  { caption: "Stream Quality — even spacing vs clumps and gaps.",
    beats: ["read the stream"],
    actions: [
      {t:'spread', x:30, y:50, count:12, dx:4, face:'down', w:7, prefix:'q'},
      {t:'hand', id:'rh', x:62, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'watch spacing in the air', x:50, y:88}
    ]},
  { caption: "Clumps = uneven release. Gaps = hesitation mid-ease. Film a side view and adjust pressure.",
    beats: ["diagnose"],
    actions: [
      {t:'note', id:'b', text:'clump → smoother ease · gap → steadier pressure', x:50, y:28},
      {t:'label', id:'k', text:'stream is feedback', x:50, y:88}
    ]},
  { caption: "Goal: a continuous ribbon of cards, not a spray and not a brick.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'even stream', x:50, y:88}
    ]}
]};

ANIMS.t232 = { steps: [
  { caption: "Troubleshooting — common one-hand spring failures and the first fix for each.",
    beats: ["debug"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'name the failure · apply one fix', x:50, y:88}
    ]},
  { caption: "Spray → less pressure, lower arc. Brick (nothing moves) → more even bow, softer grip on longs. Jam → catch later.",
    beats: ["fixes"],
    actions: [
      {t:'note', id:'b', text:'spray · brick · jam', x:50, y:28},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'one variable at a time', x:50, y:88}
    ]},
  { caption: "Change only one dial per set of reps. Otherwise you cannot tell what helped.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'systematic troubleshooting', x:50, y:88}
    ]}
]};

ANIMS.t233 = { steps: [
  { caption: "Deck Condition — stiffness, humidity, and break-in change everything.",
    beats: ["the tool matters"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'same hands · different deck · different result', x:50, y:88}
    ]},
  { caption: "New decks are stiff and spray. Broken-in decks bow and stream more easily. Slightly dry air can make cards cling.",
    beats: ["condition"],
    actions: [
      {t:'note', id:'b', text:'stiff · broken-in · humid · dry', x:50, y:28},
      {t:'label', id:'k', text:'match practice deck to performance deck', x:50, y:88}
    ]},
  { caption: "Practice on the deck you will perform with, or you are practicing a different move.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'label', id:'k', text:'deck condition accounted for', x:50, y:88}
    ]}
]};

ANIMS.t234 = { steps: [
  { caption: "Progression Ladder — a sensible order from first attempts to performance-height springs.",
    beats: ["ladder"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'label', id:'k', text:'do not skip rungs', x:50, y:88}
    ]},
  { caption: "1) Two-hand spring  2) One-hand bow only  3) Low one-hand stream into a pile  4) Low stream into a catch  5) Raise the arc.",
    beats: ["steps"],
    actions: [
      {t:'note', id:'b', text:'two-hand → bow → low stream → catch → height', x:50, y:28},
      {t:'hand', id:'rh', x:58, y:42, side:'right', on:true},
      {t:'label', id:'k', text:'own each rung before the next', x:50, y:88}
    ]},
  { caption: "If a rung fails, drop back one. Speed is not a rung — form is.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'progression clear', x:50, y:88}
    ]}
]};

ANIMS.t235 = { steps: [
  { caption: "Performance Spring — short, intentional, and finished cleanly. Not a marathon of retries.",
    beats: ["show conditions"],
    actions: [
      {t:'deck', id:'d', x:50, y:45, n:52},
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true},
      {t:'label', id:'k', text:'one spring · then continue the act', x:50, y:88}
    ]},
  { caption: "In performance, one good spring beats three attempted ones. If the bow feels wrong, skip to a cut you own.",
    beats: ["abort criteria"],
    actions: [
      {t:'label', id:'k', text:'bad bow → do not release', x:50, y:88}
    ]},
  { caption: "End with a square and eye contact. The finish sells the flourish more than the height.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'performance spring complete', x:50, y:88}
    ]}
]}

ANIMS.t236 = { steps: [
  { caption: "Thumb Bias — micro-adjust which end leads the release. Changes stream direction and clump patterns.",
    beats: ["which end first"],
    actions: [
      {t:'deck', id:'d', x:50, y:48, n:52},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'thumb end vs finger end', x:50, y:88}
    ]},
  { caption: "Slightly earlier ease on the thumb end sends cards one way; finger-end lead sends them the other.",
    beats: ["bias"],
    actions: [
      {t:'note', id:'b', text:'thumb-lead · finger-lead · neutral', x:50, y:28},
      {t:'label', id:'k', text:'tiny bias · big stream change', x:50, y:88}
    ]},
  { caption: "Neutral (both ends ease together) is the performance default. Bias is a diagnostic tool.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'thumb bias understood', x:50, y:88}
    ]}
]};

ANIMS.t237 = { steps: [
  { caption: "Left-Hand Spring — same physics, non-dominant hand. Fixes asymmetry and doubles your options on stage.",
    beats: ["other hand"],
    actions: [
      {t:'deck', id:'d', x:48, y:48, n:52},
      {t:'hand', id:'lh', x:40, y:42, side:'left', on:true},
      {t:'label', id:'k', text:'left hand · full grip map', x:50, y:88}
    ]},
  { caption: "Rebuild from grip map and bow — do not copy right-hand muscle memory blindly.",
    beats: ["rebuild"],
    actions: [
      {t:'note', id:'b', text:'grip → bow → low stream → catch', x:50, y:28},
      {t:'label', id:'k', text:'same ladder · other hand', x:50, y:88}
    ]},
  { caption: "Train left at low height only until the stream is even. Then match right-hand standards.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'lh', on:false},
      {t:'label', id:'k', text:'left-hand spring path', x:50, y:88}
    ]}
]};

ANIMS.t238 = { steps: [
  { caption: "Continuous Spring — stream, catch, re-bow, stream again without a full table reset.",
    beats: ["cycle"],
    actions: [
      {t:'deck', id:'d', x:50, y:45, n:52},
      {t:'hand', id:'rh', x:58, y:38, side:'right', on:true},
      {t:'hand', id:'lh', x:42, y:58, side:'left', on:true},
      {t:'label', id:'k', text:'catch becomes the next bow', x:50, y:88}
    ]},
  { caption: "The catch hand squares only enough to re-grip the ends — not a full performance square.",
    beats: ["minimal square"],
    actions: [
      {t:'label', id:'k', text:'catch · micro-square · re-bow', x:50, y:88}
    ]},
  { caption: "Two continuous springs is enough for show. More is practice, not better entertainment.",
    actions: [
      {t:'hand', id:'rh', on:false},{t:'hand', id:'lh', on:false},
      {t:'deck', id:'done', x:50, y:50, n:52},
      {t:'label', id:'k', text:'continuous cycle', x:50, y:88}
    ]}
]};

ANIMS.t239 = { steps: [
  { caption: "Spring into Fan — catch the stream in a shape that opens into a fan instead of a pile.",
    beats: ["catch to shape"],
    actions: [
      {t:'hand', id:'lh', x:40, y:55, side:'left', on:true},
      {t:'hand', id:'rh', x:60, y:35, side:'right', on:true},
      {t:'deck', id:'d', x:58, y:40, n:52},
      {t:'label', id:'k', text:'catch hand shaped for fan', x:50, y:88}
    ]},
  { caption: "Receiving fingers are already in a soft fan posture. Cards land into the arc.",
    beats: ["land in arc"],
    actions: [
      {t:'fan', x:48, y:56, count:10, spread:90, startDeg:-45, radius:12, w:8, face:'up', prefix:'f',
        cards:[
          {rank:'A',suit:'♠'},{rank:'K',suit:'♥'},{rank:'Q',suit:'♣'},{rank:'J',suit:'♦'},
          {rank:'10',suit:'♠'},{rank:'9',suit:'♥'},{rank:'8',suit:'♣'},{rank:'7',suit:'♦'},
          {rank:'6',suit:'♠'},{rank:'5',suit:'♥'}
        ]},
      {t:'label', id:'k', text:'stream settles into fan', x:50, y:88}
    ]},
  { caption: "Advanced link: spring → fan → close → cut. Only after plain catch is boringly reliable.",
    actions: [
      {t:'hand', id:'lh', on:false},{t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'spring-to-fan path', x:50, y:88}
    ]}
]};

ANIMS.t240 = { steps: [
  { caption: "Pressure Curve — the shape of force over time during the release (not just \"hard\" or \"soft\").",
    beats: ["force over time"],
    actions: [
      {t:'deck', id:'d', x:50, y:48, n:52},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'bow peak · ease curve · empty', x:50, y:88}
    ]},
  { caption: "Ideal: high hold, smooth ramp down, empty hands as the last cards leave. Avoid a cliff-drop in pressure.",
    beats: ["smooth ramp"],
    actions: [
      {t:'note', id:'b', text:'hold · ramp · empty', x:50, y:28},
      {t:'label', id:'k', text:'no cliff-drop release', x:50, y:88}
    ]},
  { caption: "Cliff-drop = spray. Ramp that stalls mid-way = gaps. Feel the curve; do not only watch the cards.",
    actions: [
      {t:'unnote', id:'b'},
      {t:'hand', id:'rh', on:false},
      {t:'label', id:'k', text:'pressure curve trained', x:50, y:88}
    ]}
]};
;
;
;
;


ANIMS.t160 = { steps: [
  { caption: "Cut-Deeper Force — the spectator cuts twice; the force card is still the one they \"choose.\"",
    beats: ["force on top"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'card', id:'f', rank:'A', suit:'♠', x:50, y:38, face:'down', w:12},
      {t:'hi', id:'f', on:true},
      {t:'label', id:'k', text:'force card on top', x:50, y:88}
    ]},
  { caption: "They cut a packet and turn it face-up on the deck. They cut deeper and turn that packet face-up on top too.",
    beats: ["two face-up cuts"],
    actions: [
      {t:'hi', id:'f', on:false},
      {t:'deck', id:'up1', x:50, y:42, n:20},
      {t:'label', id:'k', text:'face-up · then deeper face-up', x:50, y:88}
    ]},
  { caption: "Spread to the first face-down card under the face-up block — that is the original top card. Forced.",
    actions: [
      {t:'remove', id:'up1'},
      {t:'card', id:'f', rank:'A', suit:'♠', x:50, y:40, face:'up', w:13},
      {t:'hi', id:'f', on:true},
      {t:'scale', id:'f', s:1.08},
      {t:'label', id:'k', text:'first face-down = force card', x:50, y:88}
    ]}
]};

ANIMS.t165 = { steps: [
  { caption: "The Balducci Cut-Deeper (handling notes) — same idea, cleaner timing and presentation.",
    beats: ["presentation"],
    actions: [
      {t:'deck', id:'d', x:50, y:50, n:52},
      {t:'hand', id:'rh', x:58, y:40, side:'right', on:true},
      {t:'label', id:'k', text:'spectator handles the deck', x:50, y:88}
    ]},
  { caption: "Emphasize freedom: \"cut anywhere… and deeper still.\" The method is automatic.",
    beats: ["hands off"],
    actions: [
      {t:'label', id:'k', text:'two cuts · all them', x:50, y:88}
    ]},
  { caption: "Reveal the first face-down card as a prediction or selection. No sleight after the setup.",
    actions: [
      {t:'hand', id:'rh', on:false},
      {t:'card', id:'f', rank:'A', suit:'♠', x:50, y:42, face:'up', w:13},
      {t:'hi', id:'f', on:true},
      {t:'label', id:'k', text:'forced · fair-looking', x:50, y:88}
    ]}
]};

ANIMS.t172 = { steps: [
  { caption: "Business-Card Prophecy — a card is selected; your prediction on a business card matches.",
    beats: ["prediction in view"],
    actions: [
      {t:'card', id:'pred', rank:'A', suit:'♠', x:30, y:45, face:'down', w:11},
      {t:'deck', id:'d', x:60, y:50, n:52},
      {t:'label', id:'k', text:'prediction set aside', x:50, y:88}
    ]},
  { caption: "Spectator selects a card (force or controlled). Place it with the prediction or leave the prediction isolated.",
    beats: ["selection"],
    actions: [
      {t:'card', id:'sel', rank:'A', suit:'♠', x:60, y:38, face:'up', w:12},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'selection made', x:50, y:88}
    ]},
  { caption: "Show the prediction — same card. Simple plot; strong if the force is invisible.",
    actions: [
      {t:'flip', id:'pred', to:'up'},
      {t:'hi', id:'pred', on:true},
      {t:'hi', id:'sel', on:true},
      {t:'label', id:'k', text:'prediction matches', x:50, y:88}
    ]}
]};
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
