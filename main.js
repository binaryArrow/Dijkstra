"use strict"

let cell = new Cell(1, 1, 20);
let canvasWidth = myCanvas.width;
let canvasHeight = myCanvas.height;
let cellSize = 20;
let grid = createGrid();


myCanvas.onclick = function() {
    
    console.log("Clicked");
    grid[0][0].changeColor();
    grid[0][0].show();
    
}


// print grid
for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid.length; j++) {
    grid[i][j].show();
  }
}


// let screenLog = document.querySelector('#screen-log');
// document.addEventListener('mousemove', logKey);

// function logKey(e) {
//   screenLog.innerText = `
//     Screen X/Y: ${e.screenX}, ${e.screenY}
//     Client X/Y: ${e.clientX}, ${e.clientY}`;
// }




/**
 * creates a 2d Array to store the cell objects
 */
function createGrid() {
    let columns = canvasWidth / cellSize;
    let rows    = canvasHeight / cellSize;
    let g       = new Array(rows);

    for (let i = 0; i < rows; i++) {
        g[i] = new Array(rows);

    }

    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < columns; j++) {
            let c = new Cell(i, j, 20);
            g[i] [j] = c;
            
        }
        
    }

    return g;

}







