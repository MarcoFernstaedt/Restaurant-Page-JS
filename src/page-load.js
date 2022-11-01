import { clearPage } from "./clear-page"

clearPage()

function pageLoad() {
    // Selecting #content conatiner
    const content = document.getElementById("content")

    // creating img tag adding src and alt then appending to content container
    const img = document.createElement("img")
    img.classList.add("mainimg")
    img.src = "https://images.unsplash.com/photo-1591214896508-22fc74d84a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"
    img.alt = "Image of Restaurant"
    content.appendChild(img)

    // creating div to containe store copy adding a class and appending to content container
    const aboutBg = document.createElement("div")
    aboutBg.classList.add("about")
    content.appendChild(aboutBg)

    // creeating first p tag adding text and appending in aboutBg
    const p1 = document.createElement("p")
    p1.textContent = "The BEST Place in Town"
    aboutBg.appendChild(p1)

    // creeating second p tag adding text and appending in aboutBg
    const p2 = document.createElement("p")
    p2.textContent = "to get"
    aboutBg.appendChild(p2)

    // creeating third p tag adding text and appending in aboutBg
    const p3 = document.createElement("p")
    p3.textContent = "The BEST Food Around"
    aboutBg.appendChild(p3)

}

export default pageLoad
