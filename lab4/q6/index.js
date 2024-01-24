const text=document.querySelector('.color-codes')
const colorBox=document.querySelector('.color-box')

let colors=["cyan","red","blue","green","pink","purple","yellow","black","brown"]
let currIndex=0

text.addEventListener('mouseover',(e)=>{
    e.preventDefault()
    colorBox.style.backgroundColor=colors[currIndex]
    currIndex=((currIndex+1)%colors.length)
})