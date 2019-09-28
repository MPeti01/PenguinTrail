export const gameData = {
    start: {
        text: "started",
        actions: [{
            text: "Do some stuff",
            nextState: "stuffState"
        }, {
            text: "Do other stuff",
            nextState: "otherStuffState"
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
