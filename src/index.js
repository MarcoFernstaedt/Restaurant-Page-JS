import pageLoad from "./page-load"
import menuPage from "./menu"

pageLoad()

const main = () => {
    const about = document.getElementById("about")
    about.addEventListener("click", pageLoad)

    const menu = document.getElementById("menu")
    menu.addEventListener("click", menuPage)
}

main()