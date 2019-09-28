export const gameData = {
    intro: {
        text: "You are a 4 year on Huboldt penguin living on a small island in "+
              "the Pacific near Peru. It is prime mating season!",
        actions: [{
            text: "Find your mate!",
            nextState: "mating"
        }],
        lifes: 2
    },
    mating: {
        text: "You've met with your mate. Where do you want to spend some time "+
              "together?",
        actions: [{
            text: "The nicest lagoon around!",
            nextState: "tourists"
        }, {
            text: "The plateau near the colony",
            nextState: "chicks"
        }],
        lifes: 2
    },
    tourists: {
        text: "Tourists seen, annoying, maybe other time",
        actions: [{
            text: "Go home",
            nextState: "mating"
        }],
        lifes: 1
    },
    chicks: {
        text: "Where nest",
        actions: [{
            text: "old place",
            nextState: "old1"
        },{
            text: "new place",
            nextState: "new1"
        }],
        lifes: 2
    },
    old1: {
        text: "sad rabbit landslide",
        actions: [{
            text: "new place",
            nextState: "new1"
        }],
        lifes: 1
    },
    new1: {
        text: "cat!!",
        actions: [{
            text: "look more",
            nextState: "goodNest"
        },{
            text: "old place",
            nextState: "old2"
        }],
        lifes: 1
    },
    old2: {
        text: "sad rabbit landslide",
        actions: [{
            text: "look for better new",
            nextState: "goodNest"
        }],
        lifes: 1
    },
    goodNest: {
        text: "Found good nest",
        actions: [{
            text: "egg hatching",
            nextState: "hatched"
        }],
        lifes: 2
    },
    hatched: {
        text: "need to feed",
        actions: [{
            text: "go feed",
            nextState: "fishing1"
        }],
        lifes: 2
    },
    fishing1: {
        text: "chasing squid",
        actions: [{
            text: "keep chasing",
            nextState: "bycatch"
        },{
            text: "let go",
            nextState: "fishing2"
        }],
        lifes: 2
    },
    bycatch: {
        text: "bycatch, dead",
        actions: [{
            text: "go back",
            nextState: "fishing1"
        }],
        lifes: 0
    },
    fishing2: {
        text: "going far",
        actions: [{
            text: "go",
            nextState: "fishing3"
        }],
        lifes: 1
    },
    fishing3: {
        text: "see something",
        actions: [{
            text: "grab",
            nextState: "plastic"
        },{
            text: "don't",
            nextState: "fishing4"
        }],
        lifes: 2
    },
    plastic: {
        text: "plastic, dead",
        actions: [{
            text: "back",
            nextState: "fishing3"
        }],
        lifes: 0
    },
    fishing4: {
        text: "really far, also storm coming",
        actions: [{
            text: "keep going",
            nextState: "fishing5"
        }],
        lifes: 1
    },
    fishing5: {
        text: "finally catch",
        actions: [{
            text: "take it home",
            nextState: "goingHome"
        }],
        lifes: 2
    },
    goingHome: {
        text: "long trek, torrential rain, must be very hungry",
        actions: [{
            text: "keep going",
            nextState: "arrived"
        }],
        lifes: 1
    },
    arrived: {
        text: "Oh no, dead from rain",
        actions: [{
            text: "So what can YOU do?",
            nextState: "lessonsLearned"
        }],
        lifes: 1
    },
    lessonsLearned: {
        text: "People are bad",
        actions: [{
            text: "Back to start",
            nextState: "intro"
        }],
        lifes: 1
    }
}
