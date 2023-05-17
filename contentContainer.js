export function contentContainer () {
    let contentContainer = document.createElement("div");
    contentContainer.setAttribute("id", "contentContainer");

    return contentContainer;
    
}

export function content () {
    let content = document.createElement("div");
    content.classList.add("content");

    return content;
}