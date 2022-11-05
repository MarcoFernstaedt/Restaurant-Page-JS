import pageLoad from "./page-load"
import menuPage from "./menu"
import contactPage from "./contact-page"

pageLoad()

const main = () => {
    const about = document.getElementById("about")
    about.addEventListener("click", pageLoad)

    const menu = document.getElementById("menu")
    menu.addEventListener("click", menuPage)

    const contact = document.getElementById("contact")
    contact.addEventListener("click", contactPage)
}

main()