const btn=document.getElementsByTagName('button')[0];
const input=document.getElementsByTagName('input')[0];
let words=[]

input.addEventListener('change',(e)=>{
    input.value=e.target.value;
})

const breakIntoWords=(word)=>{
    words=word.split(" ");
    convertToPigLatin();
}

const convertToPigLatin=()=>{
    let temp="";
    for(let i of words){
        console.log("i: ",i);
        const temp2=i.split('');
        const firstDigit=temp2.shift();
        temp2.push(firstDigit,"ay");
        for(let i of temp2){
            temp+=String(i)
        }
        temp+=" "
    }
    alert(temp)
}

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    breakIntoWords(input.value);
    input.value=""
})