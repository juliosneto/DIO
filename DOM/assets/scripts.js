const body = document.getElementsByTagName("body")[0]
const h1 =  document.getElementById("page-title")
const button = document.getElementById("mode-selector")

button.addEventListener("click", changeMode)

function changeMode() {
   changeClasses()
   changeText()
}

function changeClasses() {
    body.classList.toggle("dark-mode")
    button.classList.toggle("dark-mode")
}

function changeText() {
     if (h1.innerHTML == "Light Mode ON", button.innerHTML == "Dark Mode") {
        h1.innerHTML = "Dark Mode ON"
        button.innerHTML = "Light Mode"
    } else {
        h1.innerHTML = "Light Mode ON" 
        button.innerHTML = "Dark Mode"
    }
}