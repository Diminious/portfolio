
//all different phrases
const past1 = "made people disappear"
const past2 = "fired a gun"
const past3 = "fired two guns"
const past4 = "been in a high speed pursuit"
const past5 = "seen Bad Boys II"
const past6 = "been Judge Judy and executioner"
const past7 = "had four aces beat a straight"
const past8 = "taken a shortcut before"
const past9 = 'gone "Aaargh!"'
const past10 = "had bolognese"

const present1 = "needing to be stopped"
const present2 = "jumping through the air"
const present3 = "in a high speed pursuit"
const present4 = "having a bad hand"
const present5 = 'going "Aaargh!"'

const pastPhrases = [past1, past2, past3, past4, past5, past6, past7, past8, past9, past10]
const presentPhrases = [present1, present2, present3, present4, present5]

//genreates random phrase from the array given
function generatePhrase(phrases){
    const randNum = Math.floor(Math.random() * phrases.length)
    return phrases[randNum]
}

function generateRandomMessage(){
    let firstPhrase = generatePhrase(pastPhrases)
    let secondPhrase = generatePhrase(pastPhrases)

    //makes sure there's no repeats
    while (secondPhrase === firstPhrase){
        secondPhrase = generatePhrase(pastPhrases)
    }

    let thirdPhrase = generatePhrase(presentPhrases)
    return `Have you ever ${firstPhrase} and ${secondPhrase} whilst ${thirdPhrase}?`
}

//console.log("===\n" + generateRandomMessage() + "\n===")

const generateButton = document.getElementById("generate")
const messageArea = document.getElementById("generated-message")

generateButton.onclick = () => {
    const message = generateRandomMessage()
    messageArea.innerText = message
}