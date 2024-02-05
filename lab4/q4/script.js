const usnInput = document.getElementById('usn-input')
const usnBtn = document.getElementById('usn-btn')
let usnString = ""

usnInput.addEventListener('change', (e) => {
    usnString += e.target.value
})

const isDigit = (char) => {
    if (char >= '9' || char <= '0')
        return false
    else
        return true
}

const isUpper = (char) => {
    return (char >= 'A' && char <= 'Z')
}

usnBtn.addEventListener('click', (e) => {
    e.preventDefault()
    usnInput.value = ""
    console.log(usnString.length);
    if (usnString.length != 13)
        return alert('Wrong length')
    let tempArray = usnString.split("")
    usnString = "" // Reset String
    for (let i = 0; i < 4; i++) {
        if (!isDigit(tempArray[i]))
            return alert('Digits missing in first four')
    }
    if (!isUpper(tempArray[4]) || !isUpper(tempArray[5]))
        return alert('Non upper case at 5th or 6th')
    console.log(tempArray[6], tempArray[7], isDigit(tempArray[6]));
    if (!isDigit(tempArray[6]) || !isDigit(tempArray[7]))
        return alert('No digits at 7th or 8th')
    if (!isUpper(tempArray[8]) || !isUpper(tempArray[9]))
        return alert('Non upper case at 9th or 10th')
    for (let i = 10; i < 13; i++) {
        if (!isDigit(tempArray[i]))
            return alert('Digits missing in last three')
    }
    alert('Verified')
})
// asddsafsghiyu
// 1234AB56GH123