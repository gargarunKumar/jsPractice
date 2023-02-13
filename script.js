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

// popping the element
console.log(arr.pop()) // return the popped out element

// pushing the element
console.log(arr.push("kiwi")) // returns the new length of the array

// shift()
// removes the element from the beginning of the array
arr.shift()
console.log(arr)

// unshift()
// adds the element at the beginning of the array
arr.unshift("papaya")
console.log(arr)

// concatenating the arrays

const arr2 = new Array(1,2,3,4)
const arr1 = ["a","b","c"]

console.log(arr1.concat(arr2))

// slice
// used to remove the elements from the array
// takes two arguments 1 - start , 2 - end (but not including that)

console.log(arr1.slice(1,2))

// splice
// used to add the elements
// takes two arguments 1 - defines the position where new elements should be added (spliced in).
// The second parameter (0) defines how many elements should be removed.

arr1.splice(1,1,"arun")
console.log(arr1)

// adding the blocks through the js
let text=""

console.log(text)
arr.forEach(arr => {
    console.log(arr)
//    text += arr+" "
//    chgText.textContent = text
    text+= `<li>${arr}</li>`
})

chgText.innerHTML = text


// array of the objects

const arrObject = [
{
    name : "Arun",
    company : "Philips",
    contact : "7087XXXXXX"
},
{
    name : "John",
    company : "Philips",
    contact : "9807XXXXXX"
},
{
    name : "Malicious",
    company : "Philips",
    contact : "8890XXXXXX"
}
]

let obj_text = ""

arrObject.forEach(arrObj => {
//    console.log(arrObj)
    obj_text+=`
        <p>
        <h1>${arrObj.name}</h1>
        <p>${arrObj["company"]}</p>
        <h3>${arrObj.contact}</h3>
        </p>
    `
})

chgText.innerHTML = obj_text


// sorting an object

const cars = [
  {type:"Volvo", year:2016},
  {type:"Saab", year:2001},
  {type:"BMW", year:2010}
];

// for the numbers we can use this function
// but for the strings we need to have diff function

// for numbers
cars.sort(function(a,b) {
    return a.year-b.year;
})

// for strings

cars.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();
    if(x<y) return -1;
    if(x>y) return 1;

    return 0;
})
console.log(cars)



