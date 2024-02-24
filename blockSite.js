document.body.style.display = "none"

const messageElement = document.createElement("h1")
messageElement.innerText = "Take a moment!"
messageElement.style = "display:flex; justify-content:center; align-items:center"

document.querySelector("html").appendChild(messageElement)
console.log("here")