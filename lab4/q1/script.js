const fibonaciInput = document.getElementById('fibonaci-input')
const tableInput = document.getElementById('table-input')
const findFibonaci = document.getElementById('fibonaci-btn')
const findTable = document.getElementById('table-btn')
const boxContainer = document.getElementsByClassName('box-container')[0]
const tableContainer = document.getElementsByClassName('table-container')[0]


let nForFibonaci = "", nForTable = ""

const findFibonacciSeries = (n) => {
    let list = []
    let i = 1
    let a = 0, b = 1
    while (i <= n) {
        list.push(b)
        let temp = a
        a = b
        b += temp
        i++
    }
    return list
}

const findTableSeries = (n) => {
    let table = {}
    for (let i = 1; i <= n; i++) {
        table[i] = Math.pow(i, 2)
    }
    console.log(table);
    return table
}

fibonaciInput.addEventListener('change', (e) => {
    nForFibonaci += e.target.value;
})

tableInput.addEventListener('change', (e) => {
    nForTable += e.target.value;
})

findFibonaci.addEventListener('click', (e) => {
    e.preventDefault()
    boxContainer.innerHTML = ""
    let n = Number(nForFibonaci)
    console.log(n);
    if (n === NaN)
        return alert('Kindly enter valid number')
    if (!n) {
        return alert('Kindly enter n')
    }
    let ans = findFibonacciSeries(n)
    Array.from(ans).forEach((val) => {
        boxContainer.innerHTML += `<div class="boxes">${val}</div>`
    })
    nForFibonaci = ""
})

findTable.addEventListener('click', (e) => {
    e.preventDefault()
    tableContainer.innerHTML = ""
    let n = Number(nForTable)
    if (n == NaN)
        return alert('Kindly enter valid number')
    if (!n) {
        return alert('Kindly enter n')
    }
    let ans = findTableSeries(n)
    for (let key in ans) {
        tableContainer.innerHTML += `<div class="row">
            <span>${key}</span>
            <span>-></span>
            <span>${ans[key]}</span>
        </div>`
    }
    nForTable = ""
})