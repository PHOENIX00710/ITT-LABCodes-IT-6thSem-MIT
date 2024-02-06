const table = document.getElementsByTagName('table')[0]
const button = document.querySelector('.btn')
const input1Value=document.querySelector('#num1')
const input2Value=document.querySelector('#num2')
let tableExists = false;
let num1="",num2=""


const updateTable = () => {
    for (let i = 0; i <= 10; i++) {
        table.innerHTML += `<tr>
        <td>${i}</td>
        <td>${i * i}</td>
        <td>${i * i * i}</td>
    </tr>`
    }
    button.textContent = "Remove Table"
}

const fibonacci=(n1,n2)=>{
    let ans=[]
    let val1=0,val2=1
    let val3=val1+val2
    while(val3<=n2){
        if(val3>=n1){
            ans.push(val3)
        }
        val1=val2
        val2=val3
        val3=val1+val2
    }
    console.log(ans);
    for(i of ans){
        table.innerHTML+=`<tr>${i}</tr>`
    }
    return
}

const fact=(n)=>{
    if(n==0){
        return 1
    }
    return n*fact(n-1)
}

const factorial=(n1,n2)=>{
    let ans=[]
    for(let i=n1;i<=n2;i++){
        ans.push(fact(i))
    }
    for(i of ans){
        table.innerHTML+=`<tr>${i}</tr>`
    }
    return
}

button.addEventListener('click', (e) => {
    e.preventDefault()
    table.innerHTML=''
    num1=input1Value.value
    num2=input2Value.value
    let sum=Number(num1)+Number(num2)
    if(sum % 2 == 0)
        factorial(Number(num1),sum)
    else
        fibonacci(Number(num1),sum)
    input1Value.value=''
    input2Value.value=''
})