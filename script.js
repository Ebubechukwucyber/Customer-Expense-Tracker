var form = document.getElementById("form");
var table = document.getElementById("table");

//add event listener to form 
form.addEventListener("submit", addItem);

//add event listener to table for deletion
table.addEventListener("click", deleteItem);

function addItem(e) {
    e.preventDefault();

    // get customer name input value
    var customerName = document.getElementById("customerName").value;

    //get item purchased input value
    var itemPurchased = document.getElementById("itemPurchased").value;

    //get quantity input value
    var quantity = document.getElementById("quantity").value;

    // get date input value
    var date = document.getElementById("date").value;

    //create rows
    var row = table.insertRow(1);
    //create row cells
    var customerCell = row.insertCell(0);
    customerCell.innerHTML = customerName;

    var ItemCell = row.insertCell(1);
    ItemCell.innerHTML = itemPurchased;

    var quantityCell = row.insertCell(2);
    quantityCell.innerHTML = quantity;

    var dateCell = row.insertCell(3);
    dateCell.innerHTML = date;

    var EditCell = row.insertCell(4);
    EditCell.innerHTML = `<button class = "Edit" onclick ="editRow(this)" >Edit</button>`;

    var emptyCell = row.insertCell(5);
    emptyCell.innerHTML = ` `;

    var DeleteCell = row.insertCell(6);
    DeleteCell.innerHTML = `<button onclick= "deleteRecord(this)">X</button>`;

    emptyInput();

} 
  
function emptyInput(){
    document.getElementById("customerName").value = "";
    document.getElementById("itemPurchased").value = "";
    document.getElementById("quantity").value = "";
    document.getElementById("date").value = "";
}

function editRow(edit){
    selectedRow = edit.parentElement.parentElement;
    document.getElementById("customerName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("itemPurchased").value = selectedRow.cells[1].innerHTML;
    document.getElementById("quantity").value = selectedRow.cells[2].innerHTML;
    document.getElementById("date").value = selectedRow.cells[3].innerHTML;
}


function deleteRecord(e){
    if(confirm("are you sure you will like to delete this record?")){
        var onDelete = e.parentElement.parentElement;
        table.deleteRow(onDelete.rowIndex);
    }
}