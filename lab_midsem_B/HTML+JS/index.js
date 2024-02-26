// Declare variables for the room list, buttons, and total text
const roomList = document.querySelector('#rooms')
const btn1 = document.querySelector('#btn-1')
const btn2 = document.querySelector('#btn-2')
const totalText = document.querySelector('#total')

// Declare variables for the selected furniture items and their corresponding amount and quantity values
const chairSelected = document.querySelector('#chair')
const chairAmountVal = document.querySelector('#amount-chair')
const chairQuantityVal = document.querySelector('#quantity-chair')

const tableSelected = document.querySelector('#table')
const tableAmountVal = document.querySelector('#amount-table')
const tableQuantityVal = document.querySelector('#quantity-table')

const lampSelected = document.querySelector('#lamp')
const lampAmountVal = document.querySelector('#amount-lamp')
const lampQuantityVal = document.querySelector('#quantity-lamp')

// Initialize variables with 0 to avoid NaN during calculation
let lampAmount = 0, chairAmount = 0, tableAmount = 0, tableQuantity = 0, chairQuantity = 0, lampQuantity = 0, room, Total

// Add event listener to the first button
if (btn1) {
    btn1.addEventListener('click', (e) => {
        // Get the selected room from the room list
        let room = roomList.value
        // Store the selected room in local storage
        localStorage.setItem('Room', room)
        // Display an alert with the selected room
        alert(room)
    })
}

// Add event listener to the second button
if (btn2) {
    btn2.addEventListener('click', (e) => {
        e.preventDefault()
        // Initialize a string to store the selected furniture items and their quantities
        let str = `Room: ${localStorage.getItem('Room')} `
        // Check if the lamp is selected and calculate the total amount and quantity
        if (lampSelected.checked) {
            lampAmount = Number(lampAmountVal.value)
            lampQuantity = Number(lampQuantityVal.value)
            let temp = `lamp : ${lampAmount} equaling ${lampAmount * lampQuantity} `
            str += temp
        }
        // Check if the chair is selected and calculate the total amount and quantity
        if (chairSelected.checked) {
            chairAmount = Number(chairAmountVal.value)
            chairQuantity = Number(chairQuantityVal.value)
            let temp = `chair : ${chairAmount} equaling ${chairAmount * chairQuantity} `
            str += temp
        }
        // Check if the table is selected and calculate the total amount and quantity
        if (tableSelected.checked) {
            tableAmount = Number(tableAmountVal.value)
            tableQuantity = Number(tableQuantityVal.value)
            let temp = `table : ${tableAmount} equaling ${tableAmount * tableQuantity} `
            str += temp
        }
        // Calculate the total amount for all selected furniture items
        Total = ((tableAmount) * (tableQuantity)) + ((chairAmount) * (chairQuantity)) + ((lampAmount) * (lampQuantity))
        // Store the total amount in local storage
        localStorage.setItem('Total', Total)
        // Display an alert with the selected furniture items and their quantities
        alert(str) // Displaying the final string in alert can be customised for input
        // Redirect the user to the last page
        window.location.href = './last.html'
    })
}

// Display the total amount for all selected furniture items
if (totalText) {
    totalText.textContent = localStorage.getItem('Total')
}