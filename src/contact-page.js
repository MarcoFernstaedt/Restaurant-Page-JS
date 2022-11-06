import clearPage from "./clear-page"

function contactPage() {
    clearPage()

    const content = document.getElementById("content")

    const header = document.createElement("h1")
    header.textContent = "Contact Us"
    header.classList.add("headingtag")

    content.appendChild(header)

    const phoneNum = document.createElement("h2")
    phoneNum.textContent = "Phone: (***)-***-****"
    content.appendChild(phoneNum)
}

export default contactPage