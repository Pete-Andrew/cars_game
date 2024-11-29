//ctrl+shift+L allows you to select all similar values, use with caution!

let canvas = document.getElementById("canvas");
// .getContent Returns a static collection of nodes representing the flow's source content.
let context = canvas.getContext("2d");
//to set it to a px size you don't need speech marks or 'px' at the end.
    
let canvasOffset = canvas.getBoundingClientRect();

canvas.width = 900;
canvas.height = 900;

// stores the value for the center of the cube
let middlePointLocation = { x: 0, y: 0 };

canvas.style.border = "5px solid black"

let canvasWidth = canvas.width;
// console.log("canvas width = ", canvasWidth);
let canvasHeight = canvas.height;
// console.log("canvas height = ", canvasHeight);

let currentCar;
let startX;
let startY;
//holds values that apply when the page is scaled (?)
let offsetX;
let offsetY;
let zoneStartX;
let zoneStartY;

let gridRef;
let isDragging;
let currentCarIndex;


let cellCoords = {
    "A1": { x: 0, y: 0 },
    "A2": { x: 150, y: 0 },
    "A3": { x: 300, y: 0 },
    "A4": { x: 450, y: 0 },
    "A5": { x: 600, y: 0 },
    "A6": { x: 750, y: 0 },
    
    "B1": { x: 0, y: 150 },
    "B2": { x: 150, y: 150 },
    "B3": { x: 300, y: 150 },
    "B4": { x: 450, y: 150 },
    "B5": { x: 600, y: 150 },
    "B6": { x: 750, y: 150 },
    
    "C1": { x: 0, y: 300 },
    "C2": { x: 150, y: 300 },
    "C3": { x: 300, y: 300 },
    "C4": { x: 450, y: 300 },
    "C5": { x: 600, y: 300 },
    "C6": { x: 750, y: 300 },

    "D1": { x: 0, y: 450 },
    "D2": { x: 150, y: 450},
    "D3": { x: 300, y: 450},
    "D4": { x: 450, y: 450},
    "D5": { x: 600, y: 450},
    "D6": { x: 750, y: 450},

    "E1": { x: 0, y: 600 },
    "E2": { x: 150, y: 600 },
    "E3": { x: 300, y: 600 },
    "E4": { x: 450, y: 600 },
    "E5": { x: 600, y: 600 },
    "E6": { x: 750, y: 600 },

    "F1": { x: 0, y: 750 },
    "F2": { x: 150, y: 750 },
    "F3": { x: 300, y: 750 },
    "F4": { x: 450, y: 750 },
    "F5": { x: 600, y: 750 },
    "F6": { x: 750, y: 750 },

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
let zoneWidth = 150;
let zoneHeight = 150;
let numRows = 6; // Number of rows
let numCols = 6; // Number of columns

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
        
    }
}

// getBoundingClientRect returns the size of an element and its position relative to the viewport, deals with screen re-sizing
function getOffset() {
    offsetX = canvasOffset.left;
    offsetY = canvasOffset.top;
}
getOffset();

window.onscroll = function () { getOffset(); }
window.onresize = function () { getOffset(); }
canvas.onresize = function () { getOffset(); }

//Draw shapes
let cars = [];
cars.push({ x: 150, y: 150, width: 300, height: 150, color: 'green', orientation:'hrz'});
cars.push({ x: 450, y: 300, width: 150, height: 300, color: 'red', orientation:'vrt'});

function drawCars () {
    for (let car of cars) {
        context.fillStyle = car.color; //Sets the fillstyle e.g. colour
        context.fillRect(car.x, car.y, car.width, car.height) //the fillRect() method draws a "filled" rectangle.
    }
}
drawCars();

function getMousePosition(event) {

    let x = event.clientX - canvasOffset.left -4; //minus 4 solved the slight offset issue from line width/border
    let y = event.clientY - canvasOffset.top -4;
    //console.log("Coordinate x: " + x, "Coordinate y: " + y); 
    checkCellRef(x,y)
}

canvas.addEventListener("mousedown", function (e) {
    getMousePosition(e); 
    //run a check to see which cell the mouse is in 
    
}); 

function checkCellRef (x,y) {
    let row;
    let column;
    
    //column
    if (x<150) {  
        column = "A"
    } 
    else if (x<300) { 
        column = "B"
    }
    else if (x<450) {  
        column = "C"
    }
    else if (x<600) {  
        column = "D"
    }
    else if (x<750) {
        column = "E"
    } else if (x<900) {
        column = "F"
    }
    
    //Row
        if (y<150) {  
        row = "1"
    } 
    else if (y<300) { 
        row = "2"
    }
    else if (y<450) {  
        row = "3"
    }
    else if (y<600) {  
        row = "4"
    }
    else if (y<750) {
        row = "5"
    } else if (y<900) {
        row = "6"
    }

    let cellRef = String(column) + String(row);
    console.log(cellRef);
}

//move the cars

//onmousedown these functions are triggered
function mouseDown(e) {
    e.preventDefault();

    startX = parseInt(e.clientX - offsetX); //clientX property returns the horizontal client coordinate of the mouse pointer
    startY = parseInt(e.clientY - offsetY); //clientY property returns the vertical client coordinate of the mouse pointer
    console.log("Y axis "+ startY, "\nX axis " + startX);
    
    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        if (isMouseInShape(startX, startY, car)) {        
                // Regular dragging behavior
                currentCarIndex = i;
                isDragging = true;
                return;
            
            
        }
    }
}


//find the middle point of the moving object
function findMiddlePoint() {
    //current shapes index needs to be used here or all the shapes default to the square of the first one.
    middlePointLocation.x = cars[currentCarIndex].x + 100;
    middlePointLocation.y = cars[currentCarIndex].y + 100;
    //console.log("middle point location =", middlePointLocation);
    console.log("left hand side edge x co-ordinate = " + cars[currentCarIndex].x);
    console.log("left hand side edge y co-ordinate = " + cars[currentCarIndex].y);
}


// mouse up event
function mouseUp(e) {
    if (!isDragging) {
        return;
    } else {
        e.preventDefault();
        findMiddlePoint();
        isDragging = false;
        snapTo();
    }
}

function mouseOut(e) {
    if (!isDragging) {
        return;
    } else {
        e.preventDefault();
        isDragging = false;
    }
}

function mouseMove(e) {
    if (!isDragging) {
        return;
    } else {
        

        //console.log("move with dragging");
        e.preventDefault();
        let mouseX = parseInt(e.clientX - offsetX);
        let mouseY = parseInt(e.clientY - offsetY);

        let mouseMoveDistanceX = mouseX - startX;
        let mouseMoveDistanceY = mouseY - startY;
        // console.log("distance from click, mouse X and mouse Y ", mouseMoveDistanceX, mouseMoveDistanceY)

        currentCar = cars[currentCarIndex];
        // console.log(currentShape);
        //updates the value of the shapes x and y co-ordinates
        
        if (currentCar.orientation == "hrz") {
            //console.log(currentCar.orientation);
            currentCar.x += mouseMoveDistanceX;
            currentCar.y = currentCar.y;
        } else if (currentCar.orientation == "vrt") {
            currentCar.x = currentCar.x;
            currentCar.y += mouseMoveDistanceY;
        }

        //prevents car leaving grid on x axis
        //need to create a car length variable to calculate the end bounds
        if (cars[currentCarIndex].x > 600) {
            console.log("out of bounds");
            cars[currentCarIndex].x = 600;
        }
        if (cars[currentCarIndex].x < 1) {
            console.log("out of bounds");
            cars[currentCarIndex].x = 0;
        }

         //prevents car leaving grid on y axis
        if (cars[currentCarIndex].y > 600) {
            console.log("out of bounds");
            cars[currentCarIndex].y = 600;
        }
        if (cars[currentCarIndex].y < 1) {
            console.log("out of bounds");
            cars[currentCarIndex].y = 0;
        }

        drawShapes(); //live draws the shape so it can be physically dragged
        //console.log("square is moving")
        startX = mouseX;
        startY = mouseY;
        }
    }



// listens for the mousedown event on the canvas
canvas.onmousedown = mouseDown;
canvas.onmouseup = mouseUp;
canvas.onmouseout = mouseOut;
canvas.onmousemove = mouseMove;

//checks to see if the mouse is inside a shape
function isMouseInShape(x, y, car) {
    let carLeft = car.x;
    let carRight = car.x + car.width;
    let carTop = car.y;
    let carBottom = car.y + car.height;

    if (x > carLeft && x < carRight && y > carTop && y < carBottom) {
        //console.log("is inside shape");
        return true;
    } else {
        // console.log("not inside shape");
        return false;
    }
}

function snapTo() {

    let leftEdgeLocation = cars[currentCarIndex].x;
    let topEdgeLocation = cars[currentCarIndex].y;
    //get edge value, snap to the nearest multiple of 150
    console.log("left edge location = " + leftEdgeLocation);
    console.log("top edge location = " + topEdgeLocation);
    //needs to be the closest multiple of 150
    //needs to search in both directions from the if modulus of 150 returns 0
    //leftEdgeLocation % 150
    //half of 150 is 75, therefore if the modulus number is below 75 then round down. If over 75 round up.
    //clips the hrz cars
    let modulusHrzRemainder = leftEdgeLocation % 150
    console.log(modulusHrzRemainder);
    if (modulusHrzRemainder < 75) {
        //round up
        cars[currentCarIndex].x = leftEdgeLocation - modulusHrzRemainder;
    } else {
        //roundDown
        cars[currentCarIndex].x = ((150-modulusHrzRemainder) + leftEdgeLocation)
    }

    //clips the vert cars
    let modulusVrtRemainder = topEdgeLocation % 150
    console.log(modulusVrtRemainder);
    if (modulusVrtRemainder < 75) {
        //round up
        cars[currentCarIndex].y = topEdgeLocation - modulusVrtRemainder;
    } else {
        //roundDown
        cars[currentCarIndex].y = ((150-modulusVrtRemainder) + topEdgeLocation)
    }

    drawShapes();
}

async function drawShapes() {

    //console.log(tileName);

    context.clearRect(0, 0, canvasWidth, canvasHeight);
    drawHorizGrid();
    drawVertGrid();

    for (let car of cars) {

        context.save(); // Save the current state, required
        context.translate(car.x + car.width / 2, car.y + car.height / 2); // Move to the center of the shape
        context.translate(-car.width / 2, -car.height / 2); // Move back to the top left corner of the shape
    
            // Draw the shape with color (fallback)
            context.fillStyle = car.color;
            context.fillRect(0, 0, car.width, car.height);
           
            //this section deals primarily with the rotate button:   
        context.restore(); // Restore the previous state     
    }
};


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