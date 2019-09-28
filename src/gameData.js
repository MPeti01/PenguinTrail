export const gameData = {
    start: {
        text: "Started. What to do?",
        actions: [{
            text: "Do some stuff",
            nextState: "stuffState"
        }, {
            text: "Do other stuff",
            nextState: "otherStuffState"
        }, {
            text: "Do nothing",
            nextState: "start"
        }],
        lifes: 2,
    },
    stuffState: {
        text: "Did stuff",
        actions: [{
            text: "Go back",
            nextState: ((vars) => {
                if (vars.didOtherStuff) {
                    return {nextState: "fancyState",
                            sideEffects: { didStuff: true }}
                } else {
                    return {nextState: "start",
                            sideEffects: { didStuff: true }}
                }
            })
        }],
        lifes: 1,
    },
    otherStuffState: {
        text: "Did other stuff! with significantly longer text",
        actions: [{
            text: "Go back",
            nextState: ((vars) => {
                if (vars.didStuff) {
                    return {nextState: "fancyState",
                            sideEffects: { didOtherStuff: true }}
                } else {
                    return {nextState: "start",
                            sideEffects: { didOtherStuff: true }}
                }
            })
        }],
        lifes: 0,
    },
    fancyState: {
        text: "Wow you did so much stuff!",
        actions: [{
            text: "Back to start",
            nextState: "start",
            sideEffects: {
                didStuff: false,
                didOtherStuff: false
            }
        }],
        lifes: 2,
    },
}
