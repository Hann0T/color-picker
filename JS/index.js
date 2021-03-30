
let background = document.querySelector(".main__section")
let colorName = document.querySelector(".color__format")
let button = document.querySelector(".main__button")

const colors = ["Green", "Red", "Yellow", "#ffdae9", "#ffdae9", "#ef7d0d"]

function changeColor(color) {
	background.setAttribute("style", `background-color: ${color}`)
	button.setAttribute("style", `background-color: ${color}`)
	colorName.setAttribute("style", `color: ${color};`)
	colorName.innerHTML = color
}

function getColor() {
	return Math.floor(Math.random() * colors.length)
}

button.addEventListener("click", () => {
	let currentColor = getColor()
	changeColor(colors[currentColor])
})


