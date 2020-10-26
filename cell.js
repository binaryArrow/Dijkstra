"use strict";

let myCanvas = document.getElementById("canvas");
let myCanvasContext = myCanvas.getContext("2d");




function Cell(i , j, cellSize) {
    this.i = i;     // row
    this.j = j;     // column
    this.col = "#D1CBCB";

    this.show = function() {
        let y = this.i * cellSize;
        let x = this.j * cellSize;

        myCanvasContext.beginPath();
        myCanvasContext.lineWidth = "2";
        myCanvasContext.rect(x, y, cellSize, cellSize); 
        myCanvasContext.fillStyle = this.col;
        myCanvasContext.fillRect(x, y, cellSize, cellSize);
        myCanvasContext.stroke();

    }

    this.changeColor = function() {
        this.col = "#F51B1B";
    }




}