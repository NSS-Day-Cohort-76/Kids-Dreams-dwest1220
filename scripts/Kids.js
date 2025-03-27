import { getChildren } from "./database.js"

const children = getChildren()

export const Kids = () => {
    let html = "<ol>"

    for (const child of children) {
        html += `<li data-id="${child.id}" 
                    data-type="child" 
                    data-wish="${child.wish}">
                    ${child.name}</li>`
    }

    html += "</ol>"
    return html
}

document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        
        if (itemClicked.dataset.type === "child") {
            const childData = getChildren()
         for (const child of childData) {
            if (child.id === parseInt(itemClicked.dataset.id)){
                window.alert(`${child.name} wish is ${child.wish}`)
            }
        }
    }
}
)