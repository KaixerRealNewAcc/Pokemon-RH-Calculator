const FLAGS_RR = {
    // 1v1 doubles, 1v2 doubles, tag battles
    battleType: {
        double: [
            {
                enemy1: "",
                enemy2: "",
            },
        ],
        trueDouble: {
            "Mt. Moon Super Nerd Miguel": {},
        },
        tag: [
            {
                enemy1: "",
                enemy2: "",
                partner: "",
            },
        ],
    },
    // ignore when navigating (optionals, rematches, tag partners, rival battles)
    hidden: [
        ""
    ],
    weather: {
        "": [],
        clear: [],
        sun: [
            "",
        ],
        rain: [
            "",
        ],
        sand: [
            "",
        ],
        hail: [
            "",
        ],
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
