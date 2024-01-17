const text=document.getElementById('text');
const body=document.getElementsByTagName('body');
let fontSize=2;
let isIncreasing=true;

const increaseSize=()=>{
    fontSize+=2;
    text.style.fontSize=`${fontSize}pt`
    text.style.color='red'
    text.textContent='YES YES YES!!'
}

const decreaseSize=()=>{
    fontSize-=2;
    text.style.fontSize=`${fontSize}pt`
    text.style.color='blue'
    text.textContent='NO NO NO!!'
}

const onLoad=setInterval(()=>{
    if(isIncreasing){
        if(fontSize == 50)
            isIncreasing=false;
        else
            increaseSize();
    }
    if(!isIncreasing){
        if(fontSize == 2)
            isIncreasing=true;
        else
            decreaseSize();
    }
    
},100)

onLoad();