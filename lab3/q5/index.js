const table = document.getElementsByTagName('table')[0]
const button = document.querySelector('.btn')
let tableExists = false;

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

button.addEventListener('click', (e) => {
    e.preventDefault()
    if (!tableExists) {
        updateTable()
        tableExists = true
    }
    else {
        tableExists=false
        table.innerHTML = `<tr>
        <th>Number</th>
        <th>Square</th>
        <th>Cube</th>
    </tr>`
        button.textContent = "Get Table"
    }
})