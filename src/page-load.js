function pageLoad() {
    const body = document.querySelector("body")
    body.style = "display: flex; justify-content: center; align-items: center; margin: 0; padding: 0; height: 100vh; width: 100vw; box-sizing: border-box; background-color: red;"

    const content = document.getElementById("content")
    content.style = "display: flex; justify-content: center; margin: 0; border: none; background-color: black; height: 98%; width: 98%;  color: white;"

    let header = document.createElement("header")
    header.style = "background-image: url('https://images.unsplash.com/photo-1591214896508-22fc74d84a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'); height: 60%; width: 100%;"
    content.appendChild(header)

    let img = "https://images.unsplash.com/photo-1591214896508-22fc74d84a75?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80"


    let restaurantCopy = document.createElement("p")
    restaurantCopy.textContent = "This is the BEST place in town to get the BEST food around"

    content.appendChild(restaurantCopy)
}

export default pageLoad