export function newElement(tagName, className, text) {
    const element = document.createElement(tagName);
    if (className !== undefined) {
        element.classList.add(className);
    }
    if (text !== undefined) {
        element.innerText = text;
    }
    return element;
}