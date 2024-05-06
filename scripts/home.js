const emptyProject = document.getElementById("empty")
const clubWebsite = document.getElementById("club")
const messageGenerator = document.getElementById("generator")

const projectsList = [emptyProject, clubWebsite, messageGenerator]
const projectNames = document.getElementById("project-list").getElementsByTagName("li")

let previouslySelectedProject

function hideProjects(){
    projectsList.forEach(project => {
        project.style.display = "none"
    })
}

function resetStyle(){
    for (let i = 0; i < projectNames.length; i++) {
        projectNames[i].style.fontWeight = "normal";
        projectNames[i].addEventListener("mouseout", setNormal)
    }
}

function setBold(event) {
    event.target.style.fontWeight = "bold"
}
function setNormal(event) {
    event.target.style.fontWeight = "normal"
}

function showProject(event) {
    hideProjects()
    resetStyle()
    event.target.removeEventListener("mouseout", setNormal)
    event.target.style.fontWeight = "bold"
    switch (event.target.className) {
        case "club-link":
            clubWebsite.style.display = "block"
            break;
    
        case "generator-link":
            messageGenerator.style.display = "block"
            break;
        
        default:
            emptyProject.style.display = "block"
            break;
    }
}

hideProjects()

emptyProject.style.display = "block" //displays the default message

for (let i = 0; i < projectNames.length; i++) {
    const element = projectNames[i]
    element.onclick = showProject;
    element.addEventListener("mouseover", setBold) 
    element.addEventListener("mouseout", setNormal)
}
