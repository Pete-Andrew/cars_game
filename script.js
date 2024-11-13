let canvas = document.getElementById("canvas");
// .getContent Returns a static collection of nodes representing the flow's source content.
let context = canvas.getContext("2d");
//to set it to a px size you don't need speech marks or 'px' at the end.
canvas.width = 900;
canvas.height = 900;

// stores the value for the center of the cube
let middlePointLocation = { x: 0, y: 0 };

canvas.style.border = "5px solid black"

let canvasWidth = canvas.width;
// console.log("canvas width = ", canvasWidth);
let canvasHeight = canvas.height;
// console.log("canvas height = ", canvasHeight);

let currentShape;
let startX;
let startY;
//holds values that apply when the page is scaled (?)
let offsetX;
let offsetY;
let zoneStartX;
let zoneStartY;

let gridRef;

let rotateClicked

let cellCoords = {
    "A1": { x: 0, y: 0 },
    "A2": { x: 200, y: 0 },
    "A3": { x: 400, y: 0 },
    "A4": { x: 600, y: 0 },
    "A5": { x: 800, y: 0 },
    "B1": { x: 0, y: 200 },
    "B2": { x: 200, y: 200 },
    "B3": { x: 400, y: 200 },
    "B4": { x: 600, y: 200 },
    "B5": { x: 800, y: 200 },
    "C1": { x: 0, y: 400 },
    "C2": { x: 200, y: 400 },
    "C3": { x: 400, y: 400 },
    "C4": { x: 600, y: 400 },
    "C5": { x: 800, y: 400 },
    "D1": { x: 0, y: 600 },
    "D2": { x: 200, y: 600 },
    "D3": { x: 400, y: 600 },
    "D4": { x: 600, y: 600 },
    "D5": { x: 800, y: 600 },
    "E1": { x: 0, y: 800 },
    "E2": { x: 200, y: 800 },
    "E3": { x: 400, y: 800 },
    "E4": { x: 600, y: 800 },
    "E5": { x: 800, y: 800 },
};


// creates the vertical grid lines array
let vertGridLines = [];
vertGridLines.push({ x: 150, y: 0, width: 4, height: canvasHeight, color: 'blacK' });
vertGridLines.push({ x: 300, y: 0, width: 4, height: canvasHeight, color: 'blacK' });
vertGridLines.push({ x: 450, y: 0, width: 4, height: canvasHeight, color: 'blacK' });
vertGridLines.push({ x: 600, y: 0, width: 4, height: canvasHeight, color: 'blacK' });
vertGridLines.push({ x: 750, y: 0, width: 4, height: canvasHeight, color: 'blacK' });

// draws the vert grid
function drawVertGrid() {
    // context.clearRect(0,0, canvasWidth, canvasHeight);
    for (let vertGridLine of vertGridLines) {
        context.fillStyle = vertGridLine.color;
        context.fillRect(vertGridLine.x, vertGridLine.y, vertGridLine.width, vertGridLine.height)
        // console.log(vertGridLine)
    }
}
drawVertGrid();

// creates the horizontal grid lines array
let horizGridLines = [];
horizGridLines.push({ x: 0, y: 150, width: canvasWidth, height: 4, color: 'black' })
horizGridLines.push({ x: 0, y: 300, width: canvasWidth, height: 4, color: 'black' })
horizGridLines.push({ x: 0, y: 450, width: canvasWidth, height: 4, color: 'black' })
horizGridLines.push({ x: 0, y: 600, width: canvasWidth, height: 4, color: 'black' })
horizGridLines.push({ x: 0, y: 750, width: canvasWidth, height: 4, color: 'black' })

function drawHorizGrid() {
    // context.clearRect(0,0, canvasWidth, canvasHeight);
    for (let horizGridLine of horizGridLines) {
        context.fillStyle = horizGridLine.color;
        context.fillRect(horizGridLine.x, horizGridLine.y, horizGridLine.width, horizGridLine.height)
        // console.log(horizGridLine)
    }
}
drawHorizGrid();

//for using an image rather than a js drawn grid ----------- NOT IN USE CURRENTLY ----------------
function backgroundCanvasImg() {
    base_image = new Image();
    base_image.src = 'img/fiveByFiveGrid.gif'
    base_image.onload = function () {
        context.drawImage(base_image, 0, 0);
    }
} // This function is currently never called!! 

// backgroundCanvasImg(); 
// set co-ordinates for the grid squares
let zones = [];

//set bounding areas for squares
let zoneWidth = 200;
let zoneHeight = 200;
let numRows = 5; // Number of rows
let numCols = 5; // Number of columns

// nested for loops, goes along the top row first
for (let row = 0; row < numRows; row++) {
    for (let col = 0; col < numCols; col++) {
        let zone = {
            //creates the values for the zones start points
            x: col * zoneWidth,
            y: row * zoneHeight,
            // width and height are always the same as they are square. 
            width: zoneWidth,
            height: zoneHeight,
            //String.fromCharCode is a method that converts Unicode values into characters.
            //97 is the Unicode value for the lowercase letter 'a'.
            //Adding row to 97 shifts the character code to generate subsequent letters.
            zoneName: `${String.fromCharCode(97 + row)}${col + 1}` // For example, "a1", "a2", ..., "b1", "b2", ...
        };
        //pushes the new object to the array
        zones.push(zone);
    }
}

// getBoundingClientRect returns the size of an element and its position relative to the viewport, deals with screen re-sizing
function getOffset() {
    let canvasOffset = canvas.getBoundingClientRect();
    offsetX = canvasOffset.left;
    offsetY = canvasOffset.top;
}
getOffset();

window.onscroll = function () { getOffset(); }
window.onresize = function () { getOffset(); }
canvas.onresize = function () { getOffset(); }






//.forEach
//.some
//.includes
//.charAr
//.push
//.onload
//.drawImage
//.filter
//.unshift
//object.keys
//.fromCharCode
//.save
//.sqrt
//.getContext
//.splice
//Other bits:
//Arrow functions ( =>)
//for (let thing of things) {}
//iteration through objects and arrays
//Do while loop
//ternary

//https://medium.com/@mandeepkaur1/a-list-of-javascript-array-methods-145d09dd19a0
// https://www.youtube.com/watch?v=7PYvx8u_9Sk&ab_channel=BananaCoding