// Declare global variables
let numRows = 0;
let numCols = 0;
let colorSelected; 

// Add a row
function addR() 
{   //Once use this function number of rows should increase
    numRows++;
    //create new row name NewRow
    let row = document.createElement("tr");
    row.classList.add("NewRow");

    if(numCols === 0)
    {
        //To have first Row first Coloumn must exist initially
        numCols++;
    }
    for(let i = 0; i < numCols; i++)
    {   //Create new cell for every coloumns
        let cell = document.createElement("td");
        cell.classList.add("NewCell");
        //Add cell accordingly
        row.appendChild(cell);
        console.log(numCols);
    }
    //Add the row to grid
    document.getElementById("grid").appendChild(row)
}

// Add a column
function addC() {
    alert("Clicked Add Col"); // Replace this line with your code.
}

// Remove a row
function removeR() {
    alert("Clicked Remove Row"); // Replace this line with your code.
}

// Remove a column
function removeC() {
    alert("Clicked Remove Col"); // Replace this line with your code.
}

// Set global variable for selected color
function selectColor(){
    colorSelected = document.getElementById("selectedColorId").value;
    console.log(colorSelected);
}

// Fill all uncolored cells
function fillU(){
    alert("Clicked Fill All Uncolored"); // Replace this line with your code.
}

// Fill all cells
function fillAll(){
    alert("Clicked Fill All"); // Replace this line with your code.
}

// Clear all cells
function clearAll(){
    alert("Clicked Clear All"); // Replace this line with your code.
}