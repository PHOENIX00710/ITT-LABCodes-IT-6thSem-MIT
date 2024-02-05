const stringInput = document.getElementById('string-input')
const reverseInput = document.getElementById('reverse-input')
const reverseBtn = document.getElementById('rev-btn')
const findString = document.getElementById('string-btn')

let vowelSearchString = "", numberToBeReversed = ""

stringInput.addEventListener('change', (e) => {
    vowelSearchString += e.target.value
})

reverseInput.addEventListener('change', (e) => {
    numberToBeReversed += e.target.value
})

findString.addEventListener('click', (e) => {
    e.preventDefault()
    stringInput.value = ""
    let notExists = true
    let tempArray = Array.from(vowelSearchString)
    for (i in tempArray) {
        if (tempArray[i] === 'a' || tempArray[i] === "A" || tempArray[i] === "e" || tempArray[i] === "E" || tempArray[i] === "i" || tempArray[i] === "I" || tempArray[i] === "O" || tempArray[i] === "o" || tempArray[i] === "u" || tempArray[i] === "U") {
            stringInput.value = i.toString()
            notExists = false
            break
        }
    }
    if (notExists)
        stringInput.value = "No vowels Present"
    vowelSearchString=""
})

reverseBtn.addEventListener('click', (e) => {
    e.preventDefault()
    reverseInput.value = ""
    let tempArray=numberToBeReversed.split("")
    let finalAns=tempArray.reverse().join("")
    reverseInput.value=finalAns
    numberToBeReversed=""
})