import { getCelebrities } from "./database.js"

const celebrities = getCelebrities()

export const Celebrities = () => {
    let html = "<ol>"

    for (const celebrity of celebrities) {
        html += `<li 
                    data-id="${celebrity.id}" 
                    data-type="celebrity"
                    data-sport="${celebrity.sport}"
                    id="star--${celebrity.id}">
                    ${celebrity.name}
                </li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target

        if(itemClicked.dataset.type === "celebrity") {
            const celebData = getCelebrities()
        for (const celeb of celebData) {
            if (celeb.id === parseInt(itemClicked.dataset.id)){
                window.alert(`${celeb.name} is a ${celeb.sport} star`)
                }
            }
        }
    }
)