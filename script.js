document.write("Hello here!")
const header = document.getElementById("demo")
console.log(header)
console.log(header.innerHTML)
const btnChange = document.getElementById("btnChange")
console.log(btnChange)
//header.innerHTML = "Title Updated"
const chgTitle = () => {
    header.innerHTML = "Title Updated"
}

const chgText = document.getElementById("text")
//btnChange.addEventListener("mouseover", () => {
//    chgText.innerHTML = "The text has been successfully updated."
//})

//some basic loops on arrays

const arr = ["apple","banana","strawberry","grapes","watermelon"]
let text=""

console.log(text)
arr.forEach(arr => {
    console.log(arr)
//    text += arr+" "
//    chgText.textContent = text
    text+= `<li>${arr}</li>`
})

chgText.innerHTML = text