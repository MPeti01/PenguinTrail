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
        }]
    },
    stuffState: {
        text: "Did stuff",
        actions: [{
            text: "Go back",
            nextState: "start"
        }]
    },
    otherStuffState: {
        text: "Did other stuff",
        actions: [{
            text: "Go back",
            nextState: "start"
        }]
    }
}
