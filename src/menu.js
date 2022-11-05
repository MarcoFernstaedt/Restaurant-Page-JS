import clearPage from "./clear-page"

function menuPage() {
    clearPage()

    const content = document.getElementById("content")

    const header = document.createElement("h1")
    header.classList.add("menuh1")
    header.textContent = "MENU"

    content.appendChild(header)

    let menuImgs = ["https://images.unsplash.com/photo-1589227365533-cee630bd59bd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80", "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80", "https://images.unsplash.com/photo-1556911259-f9849ab65850?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"]

    let imgpara = ["Our Famous Spaghetti is THE BEST spaghetti you will ever try, Trust us!", "Build Your Own Pizza! 🍕", "Zucchini Chips!"]

    for (let i = 0; i < 3; i++) {
        const foodImg = document.createElement("img")
        foodImg.src = menuImgs[i]
        foodImg.classList.add("menuimgs")
        content.appendChild(foodImg)

        const foodPara = document.createElement("p")
        foodPara.textContent = imgpara[i]
        content.appendChild(foodPara)
    }

}

export default menuPage