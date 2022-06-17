// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected;

// Add a row
function addR() {
    //Once use this function number of rows should increase
    numRows++;
    //create new row name NewRow
    let row = document.createElement("tr");
    row.classList.add("NewRow");

    if (numCols === 0) {
        //To have first Row first Coloumn must exist initially
        numCols++;
    }
    for (let i = 0; i < numCols; i++) {
        //Create new cell for every coloumns
        let cell = document.createElement("td");
        cell.classList.add("NewCell");
        //Add cell accordingly
        row.appendChild(cell);
        console.log(numCols);
    }
    //Add the row to grid
    document.getElementById("grid").appendChild(row);
}

// Add a column
function addC() {
    // Increase column count when clicked
    numCols++;

    // Create a new row when there are 0 row
    if (numRows == 0) {
        numRows++;
        let row = document.createElement("tr");
        row.classList.add("NewRow");
        document.getElementById("grid").appendChild(row);
    }

    for (let i = 0; i < numRows; i++) {
        // For each row, add a cell at the end
        let col = document.querySelectorAll("tr")[i].insertCell();
        // Give the cell a class
        col.classList.add("NewCell");
    }
}

// Remove a row
function removeR() {
    if(numRows > 0){
        numRows--;
        //Remove last row from grid
        let row = document.getElementsByClassName("NewRow")[numRows];
        row.parentNode.removeChild(row);
    }   
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor() {
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU() {
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll() {
    // Get all the cells in the grid
    let col = document.querySelectorAll("td");

    // Change the color of the cells to the selected color
    for (let i = 0; i < numRows * numCols; i++) {
        col[i].style.backgroundColor = colorSelected;
    }
}

// Clear all cells
function clearAll() {
    alert("Clicked Clear All"); // Replace this line with your code.
}
