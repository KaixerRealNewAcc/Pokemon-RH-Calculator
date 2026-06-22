const FLAGS_RR = {
    weather: { //Also counts as terrain (?)
        "": [],
        clear: [],
        sun: [
            "Route 10 Poke Maniac Herman",
            "Route 13 Bird Keeper Sebastian",
            "Route 13 Picknicker Susie",
            "Route 13 Picknicker Alma",
            "Route 13 Beauty Lola & Sheila",
            "Route 13 Bird Keeper Perry",
            "Route 13 Biker Jared",
            "Route 13 Bird Keeper Robert",
        ],
        rain: [
            "Leader Misty",
            "Leader Misty Rematch",
            "Pkmn Tower Grunt 1",
            "Saffron City Dumbass Kid"
        ],
        sand: [
            "Leader Brock",
            "Silph Co. Giovanni",
            "Leader Brock Rematch",
        ],
        snow: [
            "Route 12 Rocker Luca",
            "Camper Justin B2B w/ Andrew"
        ],
    },
    terrain: {
        "": [],
        none: [],
        electric: [
            "Leader Lt. Surge",
            "Pkmn Tower Channeler Ruth",
            "Leader Lt. Surge Rematch"
        ],
        grassy: [
            "Mt. Moon Super Nerd Miguel",
            "Leader Erika",
            "Leader Erika Rematch"
        ],
        misty: [
            "Leader Sabrina",
        ],
        psychic: [
            "",
        ],
    },
    battleType: {
        trueDouble: {
            "Mt. Moon Super Nerd Miguel": {},
            "Nugget Bridge Bug Catcher Cale": {},
            "Nugget Bridge Lass Ali": {},
            "Nugget Bridge Youngster Timmy": {},
            "Route 6 Camper Jeff": {},
            "S.S Anne Lass Ann & Gentleman Brooks": {},
            "S.S Anne Sailor Edmond & Sailor Trevor": {},
            "Route 10 Poke Maniac Herman": {},
            "Route 8 Super Nerd Aidan": {},
            "Celadon Gym Ace Trainer Mary": {},
            "Game Corner Grunt": {},
            "Rocket Hideout Left Grunt": {},
            "Rocket Hideout Right Grunt": {},
            "Pkmn Tower Channeler Ruth": {},
            "Leader Sabrina": {},
        },
    },
};

function getTagBattle(trainerName) {
    for (var i in Object.values(FLAGS_RR.battleType.tag)) {
        var battle = Object.values(FLAGS_RR.battleType.tag)[i];
        if (battle.enemy1 == trainerName || battle.enemy2 == trainerName) return battle;
    }
    return undefined;
}

function getDoubleBattle(trainerName) {
    for (var i in Object.values(FLAGS_RR.battleType.double)) {
        var battle = Object.values(FLAGS_RR.battleType.double)[i];
        if (battle.enemy1 == trainerName || battle.enemy2 == trainerName) return battle;
    }
    return undefined;
}
