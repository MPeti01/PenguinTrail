export const gameData = {
    intro: {
        text: "You are a 4 year on Humboldt penguin living on a small island in "+
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
        text: "You were just getting ready when you spotted a human not very " +
              "far! He doesn't seem to be coming closer, but you're both "+
              "very stressed now. This doesn't feel like a good spot!",
        infoDump: "A 2006 study found that Humboldt penguins are extremely "+
                  "sensitive to human presence, so much that a person passing "+
                  "an incubating penguin at 150 m distance already provoked a "+
                  "significant heart rate response, and breeding success was "+
                  "significantly reduced at frequently visited sites.",
        actions: [{
            text: "Go back to the colony",
            nextState: "mating"
        }],
        lifes: 1
    },
    chicks: {
        text: "This place was ideal - now you need to find a place to nest to "+
              "bring your younglings to the world!",
        actions: [{
            text: "Go to your usual nesting place, a small cave near the plateau",
            nextState: "old1"
        },{
            text: "Look for a new place near the coast",
            nextState: "new1"
        }],
        lifes: 2
    },
    old1: {
        text: "Oh, no! A landslide closed off the cave. You can't nest here anymore.",
        infoDump: "Human often influence ecosystems in surprising ways by "+
                  "introducing new animals. Grazing by rabbits introduced to "+
                  "Macquarie Island has caused landslides that killed penguins "+
                  "and destroyed nesting habitat.",
        actions: [{
            text: "new place",
            nextState: "new1"
        }],
        lifes: 1
    },
    new1: {
        text: "You found a promising place: there's a small hole in the "+
              "guano which could easily be made into a larger burrow!",
        actions: [{
            text: "Take a look",
            nextState: "new2"
        }],
        lifes: 2
    },
    new2: {
        text: "A dangerous-looking wild cat is sleeping in the hole! You managed "+
              "to leave quietly without waking it up",
        infoDump: "Predation by introduced animals such as rats, cats, and "+
                  "foxes also endangers Humboldt penguins.",
        actions: [{
            text: "Look for another new spot",
            nextState: "goodNest"
        },{
            text: "Take a look at your usual spot",
            nextState: "old2"
        }],
        lifes: 1
    },
    old2: {
        text: "Oh, no! A landslide closed off the cave. You can't nest here anymore.",
        infoDump: "Human often influence ecosystems in surprising ways by "+
                  "introducing new animals. Grazing by rabbits introduced to "+
                  "Macquarie Island has caused landslides that killed penguins "+
                  "and destroyed nesting habitat.",
        actions: [{
            text: "Look for another new spot",
            nextState: "goodNest"
        }],
        lifes: 1
    },
    goodNest: {
        text: "You finally found a sheltered spot where you could make a burrow!",
        actions: [{
            text: "Prepare for the eggs hatching",
            nextState: "hatched"
        }],
        lifes: 2
    },
    hatched: {
        text: "Your chicks hatched! You take turns with your mate bringing them "+
              "fresh food every day. Today it is your turn.",
        actions: [{
            text: "Go find some fish",
            nextState: "fishing1"
        }],
        lifes: 2
    },
    fishing1: {
        text: "While fishing with other penguins from the colony, you start "+
              "chasing a really tasty-looking squid. It's trying to escape really "+
              "hard!",
        actions: [{
            text: "Keep chasing it",
            nextState: "bycatch"
        },{
            text: "Look for easier prey",
            nextState: "fishing2"
        }],
        lifes: 2
    },
    bycatch: {
        text: "You were so focused on the squid that you didn't notice the humans " +
              "fishing! They accidentally caught you in their net along with the " +
              "fish they were after.",
        infoDump: "Being caught in fishing nets is a serious danger to many penguin "+
                  "species. Many fisheries don't make large efforts to avoid this "+
                  "problem, but even mitigation devices aren't always successful.",
        actions: [{
            text: "Try choosing diffently",
            nextState: "fishing1"
        }],
        lifes: 0
    },
    fishing2: {
        text: "You're having trouble finding fish, the prey is unusually scarce. "+
              "But you persevere for the sake of your chicks!",
        actions: [{
            text: "Go on",
            nextState: "fishing3"
        }],
        lifes: 1
    },
    fishing3: {
        text: "You catch of glimpse of something shiny at the edge of your vision. "+
              "Maybe some strange prey? What do you do?",
        actions: [{
            text: "Grab after it",
            nextState: "plastic"
        },{
            text: "Ignore it",
            nextState: "fishing4"
        }],
        lifes: 2
    },
    plastic: {
        text: "It turned out to be a piece of plastic - and you choked on it " +
              "and died.",
        infoDump: "Ocean pollution is a danger to penguins similarly to countless "+
                  "aquatic species, who can easily get entangled in or swallow them.",
        actions: [{
            text: "Try choosing differently",
            nextState: "fishing3"
        }],
        lifes: 0
    },
    fishing4: {
        text: "You're now going much farther than usual, and a big storm is starting "+
              "to make your job even more difficult. But you keep going, you need "+
              "to find food and there wasn't any closer to your home!",
        infoDump: "Overfishing and competition from fisheries in general is a threat "+
                  "to penguins indirectly: high amount of fish caught drastically reduce "+
                  "the food availability for these penguins, forcing them to venture into "+
                  "remoter hunting areas, implicitly increasing the dangers they have to face.",
        actions: [{
            text: "Keep going",
            nextState: "fishing5"
        }],
        lifes: 1
    },
    fishing5: {
        text: "Finally, you caught a nice fat fish! You start to take it home to "+
              "your family.",
        actions: [{
            text: "Take it home",
            nextState: "goingHome"
        }],
        lifes: 2
    },
    goingHome: {
        text: "It's a long trek home, and now you're going through torrential rain. "+
              "You've never seen such a big storm before. "+
              "You try to hurry up, the younglings must be starving by now.",
        actions: [{
            text: "Go to the nest",
            nextState: "arrived"
        }],
        lifes: 1
    },
    arrived: {
        text: "Oh, no! The little ones won't be eating the food you brought... "+
              "They got soaked in the rain and died from hypothermia.",
        infoDump: "The variability and extreme weather caused by climate change "+
                  "is yet another danger putting penguins at the risk of extinction.",
        actions: [{
            text: "So what can WE do?",
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
