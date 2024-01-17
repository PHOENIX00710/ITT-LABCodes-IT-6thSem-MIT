const btn=document.getElementsByTagName('button')[0];
const input=document.getElementsByTagName('input')[0];
let words=[]

input.addEventListener('change',(e)=>{
    input.value=e.target.value;
})

const breakIntoWords=(word)=>{
    words=word.split(" ");
}

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    breakIntoWords(input.value);
})