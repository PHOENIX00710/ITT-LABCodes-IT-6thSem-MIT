const userInput=document.querySelector('#input-tag');
const button=document.querySelector('.btn');
const areaCodeInput=document.querySelector('#area-code');
const phoneNumberInput=document.querySelector('#phone-number');
const conversionForm=document.getElementsByTagName('form')[0]

let areaCode="",phoneNumber="";

const extractDetails=(input)=>{
    areaCode=input.substring(1,4).toString();
    console.log(areaCode);
    areaCodeInput.value+=areaCode;
    phoneNumber=input.substring(5,8).toString()
    phoneNumber+=(input.substring(9,13).toString())
    console.log(phoneNumber);
    phoneNumberInput.value+=phoneNumber
}

const checkFormat=(input)=>{
    userInput.value=""
    if(input[0]==="(" && input[4]===")" && input[8]==="-"){
        extractDetails(input);
    }
    else{
        alert("Invalid Format")
    }
}

button.addEventListener('click',(e)=>{
    e.preventDefault()
    areaCodeInput.textContent="Area Code: "
    phoneNumberInput.textContent="Phone Number: "
    checkFormat(userInput.value);
})