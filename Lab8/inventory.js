let inventory = [
    { itemName: "Paracetamol", quantity: 20 },
    { itemName: "Amoxicillin", quantity: 15 }
];

// Function to display inventory in the table
function displayInventory() {
    const inventoryTableBody = $('#inventoryTable tbody');
    inventoryTableBody.empty(); // Clear existing items
    inventory.forEach((item, index) => {
        inventoryTableBody.append(
            `<tr>
                <td>${item.itemName}</td>
                <td>${item.quantity}</td>
                <td><button onclick="deleteItem(${index})">Delete</button></td>
            </tr>`
        );
    });
}

// Function to add a new item
function addItem(itemName, quantity) {
    inventory.push({ itemName, quantity });
    displayInventory();
    $('#message').text('Item added successfully').show().fadeOut(3000);
}

// Function to delete an item
function deleteItem(index) {
    inventory.splice(index, 1);
    displayInventory();
    $('#message').text('Item deleted successfully').show().fadeOut(3000);
}

// Handling the form submission
$('#addItemForm').submit(function(event) {
    event.preventDefault();
    const itemName = $('#itemName').val();
    const itemQuantity = $('#itemQuantity').val();
    addItem(itemName, parseInt(itemQuantity, 10));
    $('#itemName').val('');
    $('#itemQuantity').val('');
});

// Initial display
$(document).ready(function() {
    displayInventory();
});
