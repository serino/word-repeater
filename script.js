let word = document.getElementById("word") 
let timesToRepeat = document.getElementById("timesToRepeat")
let submitButton = document.getElementById("submitButton")

let pDiv= document.getElementById("pDiv")

submitButton.addEventListener("click", showWords)

function showWords() {

  for (let i = 0; i < timesToRepeat.value; i++) {
    let paragraph = document.createElement("p")
    pDiv.appendChild(paragraph)
    paragraph.innerHTML = word.value
  }
  
  word.value = ""
  timesToRepeat.value = ""
}