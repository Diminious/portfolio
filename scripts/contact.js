const defaultText = ["LinkedIn", "Email" , "Mobile"] //text that appears by default
const infoText = ["Matthew Zengoski", "matthewzengoski@gmail.com", "+61 467 091 797"] // text changes when hovered

const itemNames = document.getElementById("contact").getElementsByTagName("a")

 console.log(itemNames[2].className)


function setDefault(event) {

    event.target.classList.remove("fade-info")
    event.target.classList.add("fade-normal")

    let textToChange
    switch (event.target.classList[0]) {
        case "linkedin":
            textToChange = defaultText[0]
            break;
        
        case "email":
            textToChange = defaultText[1]
            break;
        
        case "mobile":
            textToChange = defaultText[2]
            break;
    
        default:
            textToChange = "Nothing"
            break;
    }

    setTimeout(() => {
        event.target.getElementsByTagName("p")[0].innerText = textToChange;
    }, 300);
    setTimeout(() => {
        event.target.classList.remove("fade-normal")
    }, 600);
}

function setInfo(event) {

    event.target.classList.remove("fade-normal")
    event.target.classList.add("fade-info")

    let textToChange
    switch (event.target.classList[0]) {
        case "linkedin":
            textToChange = infoText[0]
            break;
        
        case "email":
            textToChange = infoText[1]
            break;
        
        case "mobile":
            textToChange = infoText[2]
            break;
    
        default: //shouldn't need to run
            textToChange = "Nothing"
            break;
    }

    setTimeout(() => {
        event.target.getElementsByTagName("p")[0].innerText = textToChange;
    }, 300);
    setTimeout(() => {
        event.target.classList.remove("fade-info")
    }, 600);
}

for (let i = 0; i < itemNames.length; i++) {
    const element = itemNames[i]
    element.addEventListener("mouseenter", setInfo) 
    element.addEventListener("mouseleave", setDefault)
}