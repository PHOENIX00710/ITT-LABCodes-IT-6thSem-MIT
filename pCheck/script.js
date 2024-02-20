const stringInput = document.getElementById('string-input')
const reverseInput = document.getElementById('reverse-input')
const findString = document.getElementById('string-btn')

let inputValue = ""

const isPalindrome=(str)=>{
    let j=str.length-1
    for(let i=0; i<=j; i++){
        if(str.charAt(i) !== str.charAt(j))
            return false
        j--
    }
    return true
}

stringInput.addEventListener('change', (e) => {
    inputValue += e.target.value
})

findString.addEventListener('click', (e) => {
    e.preventDefault()
    let evenLength=""
    stringInput.value = ""
    reverseInput.value=""
    let tempArray=inputValue.split(" ")
    let dict={}
    for(i of tempArray){
        if(i.length % 2 === 0){
            evenLength+=i
        }
        stringInput.value+=`${i}(${i.length}) `
        dict[i] = isPalindrome(i)?"Palindrome":"Not Palindrome"
    }
    for(let key in dict){
        if(key.length % 2 !== 0){
            reverseInput.value+=`${key} : ${dict[key]}  `
        }
    }
    reverseInput.value+=`  Even Length: ${evenLength}`
    inputValue = ""
    console.log(evenLength);
})
