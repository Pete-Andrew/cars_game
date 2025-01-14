//ctrl+shift+L allows you to select all similar values, use with caution!
//import levelData allows the carLevels.js page to be seen by this one.
import levelData from './carLevels.js'

let canvas = document.getElementById("gameCanvas");
// .getContent Returns a static collection of nodes representing the flow's source content.
let context = canvas.getContext("2d");
const counterElement = document.getElementById("counter");
const levelDisplay = document.getElementById("level");
const rect = canvas.getBoundingClientRect(); // Get the canvas position //I have promoted these to global variables
const forwardBtn = document.getElementById("forwardBtn");
const backBtn = document.getElementById("backBtn");

//to set it to a px size you don't need speech marks or 'px' at the end.
canvas.width = 900;
canvas.height = 900;

let canvasOffset = canvas.getBoundingClientRect();

//stores the value for the center of the cube
let middlePointLocation = { x: 0, y: 0 };

canvas.style.border = "5px solid black"

let canvasWidth = canvas.width;
//console.log("canvas width = ", canvasWidth);
let canvasHeight = canvas.height;
//console.log("canvas height = ", canvasHeight);

let currentCar;
let touch;

let startX;
let startY;
//holds values that apply when the page is scaled (?)
let offsetX;
let offsetY;

let gridRef;
let isDragging;
let currentCarIndex;
let isOverlapping = false;
let currentCarOldPositionY
let currentCarOldPositionX
let currentCarNewPositionY
let currentCarNewPositionX
let level = 1;

//Bug: 
//high scores in local storage
//Phone screen resizing... 
//confetti on win

let numberOfMoves = 0;
counterElement.textContent = numberOfMoves;
levelDisplay.textContent = level;

let x, y;
//can set the total values manually e.g. let totalLevels = 2, or can get the value by counting the objects keys as below
let totalLevels = (Object.keys(levelData).length) -1; 
console.log(totalLevels)

forwardBtn.addEventListener("click", skipForward)

function skipForward() {
    if (level < totalLevels) {
        console.log("Forward button clicked");
        //load level
        level++
        //clear existing cars
        clearCars();
        drawVertGrid(); //makes sure the grid is redrawn properly as clear cars can cause problems
        drawHorizGrid();
        cars = [];
        loadCars(level);
        numberOfMoves = 0;
        counterElement.textContent = numberOfMoves;
        levelDisplay.textContent = level; //updates level tracker
        drawCars();
    }
}

backBtn.addEventListener("click", skipBackward)

function skipBackward() {
    if (level > 0) {
        console.log("Back button clicked");
        //load level
        level--
        //clear existing cars
        clearCars();
        drawVertGrid(); //makes sure the grid is redrawn properly as clear cars can cause problems
        drawHorizGrid();
        cars = [];
        loadCars(level);
        numberOfMoves = 0;
        counterElement.textContent = numberOfMoves;
        levelDisplay.textContent = level; //updates level tracker
        drawCars();
    }
}




//co-ordinates for cells e.g. A1, B2 etc. 
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
    "D2": { x: 150, y: 450 },
    "D3": { x: 300, y: 450 },
    "D4": { x: 450, y: 450 },
    "D5": { x: 600, y: 450 },
    "D6": { x: 750, y: 450 },

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
        drawExit();
    }
}
drawHorizGrid();

function drawExit() { //called when the grid is drawn
    context.font = "50px Arial";
    context.fillText(">>>    >>>", 640, 400);
}

//for using an image rather than a js drawn grid ----------- NOT IN USE CURRENTLY ----------------
function backgroundCanvasImg() {
    base_image = new Image();
    base_image.src = 'img/Ai_Funny.jpg'
    base_image.onload = function () {
        context.drawImage(base_image, 0, 0);
    }
} // This function is currently never called!! 
//backgroundCanvasImg(); 

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
    //console.log("canvas OffsetX ", offsetX)
    //console.log("canvas offsetY ", offsetY)
}
getOffset();

window.onscroll = function () { getOffset(); }
window.onresize = function () { getOffset(); }
canvas.onresize = function () { getOffset(); }

//Draw shapes

let cars = [];

//using the loadCars function allows the code for the car locations to be stored on the 'carLevels.js' page
function loadCars(level) {
    cars = levelData[level] || [];
}

//Cars array info have been moved to a separate JS sheet
//x = leftEdge, y = bottomEdge, 
// cars.push({ x: 0, y: 0, width: 450, height: 150, carLeftEdge: 0, carRightEdge: 450, carTop: 0, carBottom: 150, color: 'green', orientation: 'hrz', hasMoved: false, initialPosition: {carLeftEdge: 0, carRightEdge: 450, carTop: 0, carBottom: 150} });
// cars.push({ x: 450, y: 0, width: 150, height: 300, carLeftEdge: 450, carRightEdge: 600, carTop: 0, carBottom: 300, color: 'red', orientation: 'vrt', hasMoved: false, initialPosition: {carLeftEdge: 450, carRightEdge: 600, carTop: 0, carBottom: 300} });
// cars.push({ x: 450, y: 450, width: 300, height: 150, carLeftEdge: 450, carRightEdge: 750, carTop: 450, carBottom: 600, color: 'blue', orientation: 'hrz', hasMoved: false, initialPosition: {carLeftEdge: 0, carRightEdge: 300, carTop: 300, carBottom: 450 } });
// cars.push({ mainCar: true, x: 0, y: 300, width: 300, height: 150, carLeftEdge: 0, carRightEdge: 300, carTop: 300, carBottom: 450, color: 'orange', orientation: 'hrz', hasMoved: false, initialPosition: {carLeftEdge: 0, carRightEdge: 300, carTop: 300, carBottom: 450} });
// cars.push({ x: 300, y: 150, width: 150, height: 450, carLeftEdge: 300, carRightEdge: 450, carTop: 150, carBottom: 600, color: 'teal', orientation: 'vrt', hasMoved: false, initialPosition: { carLeftEdge: 300, carRightEdge: 450, carTop: 150, carBottom: 600 } });
// cars.push({ x: 750, y: 0, width: 150, height: 300, carLeftEdge: 750, carRightEdge: 900, carTop: 0, carBottom: 300, color: 'pink', orientation: 'vrt', hasMoved: false, initialPosition: { carLeftEdge: 750, carRightEdge: 900, carTop: 0, carBottom: 300} });
// cars.push({ x: 750, y: 300, width: 150, height: 300, carLeftEdge: 750, carRightEdge: 900, carTop: 300, carBottom: 600, color: 'grey', orientation: 'vrt', hasMoved: false, initialPosition: {carLeftEdge: 750, carRightEdge: 900, carTop: 300, carBottom: 600} });
// cars.push({ x: 0, y: 600, width: 450, height: 150, carLeftEdge: 0, carRightEdge: 450, carTop: 600, carBottom: 750, color: 'purple', orientation: 'hrz', hasMoved: false, initialPosition: { carLeftEdge: 0, carRightEdge: 450, carTop: 600, carBottom: 750 } });
// cars.push({ x: 150, y: 750, width: 300, height: 150, carLeftEdge: 150, carRightEdge: 450, carTop: 750, carBottom: 900, color: 'violet', orientation: 'hrz', hasMoved: false, initialPosition: {carLeftEdge: 150, carRightEdge: 450, carTop: 750, carBottom: 900} });
// cars.push({ x: 600, y: 600, width: 150, height: 300, carLeftEdge: 600, carRightEdge: 750, carTop: 600, carBottom: 900, color: 'brown', orientation: 'vrt', hasMoved: false, initialPosition: { carLeftEdge: 600, carRightEdge: 750, carTop: 600, carBottom: 900 } });

loadCars(level);

function drawCars() {
    for (let car of cars) {
        context.fillStyle = car.color; //Sets the fillStyle e.g. colour
        context.fillRect(car.x, car.y, car.width, car.height) //the fillRect() method draws a "filled" rectangle.
    }
}
drawCars();

function getEventPosition(event) {

    //const rect = canvas.getBoundingClientRect(); // Get the canvas position //I have promoted these to global variables
    //let x, y;
    
    //deals with input, whether finger or mouse
    if (event.type.startsWith("touch")) {
        touch = event.touches[0] || event.changedTouches[0];
        x = (touch.clientX - rect.left + window.scrollX);
        y = (touch.clientY - rect.top + window.scrollY);
        //console.log("input is touch");
    } else {
        x = event.clientX - rect.left + window.scrollX;
        y = event.clientY - rect.top + window.scrollY;
    }

    //console.log("Rect:", rect);
    //console.log("ScrollX:", window.scrollX, "ScrollY:", window.scrollY);
    console.log("Coordinate x: " + x, "Coordinate y: " + y);
    //checkCellRef(x, y);
    return { x, y };
}

canvas.addEventListener("mouseDown", getEventPosition);
canvas.addEventListener("touchstart", getEventPosition); // For touch input

//move the cars
//onmousedown these functions are triggered
function handleDragStart(e) {
    e.preventDefault();
    
    console.log("handleDragStart called")

    //if input type is touch
    if (e.type.startsWith("touch")) {
        touch = e.touches[0] || e.changedTouches[0];
        startX = Math.round(touch.clientX - offsetX + window.scrollX); //provides a start point for the drag move
        startY = Math.round(touch.clientY - offsetY + window.scrollY);
        console.log("input is touch");
    }
    //else if input type is mouse:
    else { 

        startX = parseInt(e.clientX - offsetX + window.scrollX); //clientX property returns the horizontal client coordinate of the mouse pointer
        startY = parseInt(e.clientY - offsetY + window.scrollY); //clientY property returns the vertical client coordinate of the mouse pointer
        //console.log("Y axis "+ startY, "\nX axis " + startX);
        console.log("input is mouse");
    }

    for (let i = 0; i < cars.length; i++) {
        let car = cars[i];
        if (isMouseInShape(startX, startY, car)) {
            // Regular dragging behavior
            //console.log(startX, startY); 
            currentCarIndex = i;
            isDragging = true;
            return;
        }
    }
}

// mouse up event
function handleEnd(e) {
    if (!isDragging) return;
    e.preventDefault();
    isDragging = false;
    snapTo();
}

function mouseOut(e) {
    if (!isDragging) {
        return;
    } else {
        e.preventDefault();
        isDragging = false;
    }
}

//This function deals with the dragging logic when the car is actually moving. 
function move(e) {

    let moveX;
    let moveY;

    if (!isDragging) {
        return;
    } else {
        //console.log("move func called");
        e.preventDefault();

        //if touch is being used
        if (e.type.startsWith("touch")) {
            touch = e.touches[0] || e.changedTouches[0]; //this needs to be declared again in this function
            moveX = Math.round(touch.clientX - offsetX + window.scrollX);
            moveY = Math.round(touch.clientY - offsetY + window.scrollY);
            
            //console.log("Touch Move");
            //console.log("Touch moveX", moveX)
        } else {

            //if mouse click is being used
            moveX = parseInt(e.clientX - offsetX + window.scrollX);
            moveY = parseInt(e.clientY - offsetY + window.scrollY);
            //console.log("Mouse Move");
            //console.log("Mouse moveX", moveX); 
        }

        let moveDistanceX = moveX - startX;
        let moveDistanceY = moveY - startY;
        
        //console.log("distance from click/tap, X and Y", moveDistanceX, moveDistanceY)

        currentCar = cars[currentCarIndex];
        //console.log(currentShape);
        //updates the value of the shapes x and y co-ordinates

        if (currentCar.orientation == "hrz") {
            //console.log(currentCar.orientation);
            currentCar.x += moveDistanceX;
            currentCar.y = currentCar.y;
        } else if (currentCar.orientation == "vrt") {
            currentCar.x = currentCar.x;
            currentCar.y += moveDistanceY;
        }

        //put in an exception for the escape car
        if (currentCar.mainCar == true) {
            //console.log("This is the main car")
        }

        //BUG! if the cars are moved too fast it can cause them to glitch through others - add a speed limiter
        
        //prevents car leaving grid on x axis
        //need to create a car length variable to calculate the end bounds
        if (currentCar.carRightEdge > 900) {
            //console.log("out of bounds");
            if (currentCar.width == 300) { //if statement here catches different sized cars (2 square and 3 square)
                currentCar.x = 600;
            } else {
                currentCar.x = 450;
            }
        }
        if (currentCar.x < 1) {
            //console.log("out of bounds");
            currentCar.x = 0;
        }

        //prevents car leaving grid on y axis
        if (currentCar.carBottom > 900) {
            //console.log("out of bounds");
            if (currentCar.height == 300) { //if statement here catches different sized cars (2 square and 3 square)
                currentCar.y = 600;
            } else {
                currentCar.y = 450;
            }
        }
        if (currentCar.y < 1) {
            //console.log("out of bounds");
            currentCar.y = 0;
        }

        //needs to be called live here
        checkForOverLap();

        drawShapes(); //live draws the shape so it can be physically dragged
        //console.log("square is moving")
        //
        startX = moveX;
        startY = moveY;
    }
}

//Listens for the mousedown event on the canvas
canvas.onmousedown = handleDragStart;
canvas.ontouchstart = handleDragStart;

//deals with the move function if the mouse/touch is moving
canvas.onmousemove = move;
canvas.ontouchmove = move;

//calls the snapTo function when mouse/touch input is removed
canvas.onmouseup = handleEnd;
canvas.ontouchend = handleEnd;

//clears the dragging function, resets dragging to false, but this is already handled by onMouse up? 
//canvas.onmouseout = mouseOut;
//canvas.ontouchend = mouseOut; //this causes no snapping for touchscreen

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
//Snaps the cars to grid
function snapTo() {

    let leftEdgeLocation = cars[currentCarIndex].x;
    let topEdgeLocation = cars[currentCarIndex].y;
    //get edge value, snap to the nearest multiple of 150
    //console.log("left edge location (x)= " + leftEdgeLocation);
    //console.log("top edge location (y) = " + topEdgeLocation);
    //needs to be the closest multiple of 150
    //needs to search in both directions from the if modulus of 150 returns 0
    //leftEdgeLocation % 150
    //half of 150 is 75, therefore if the modulus number is below 75 then round down. If over 75 round up.
    //clips the hrz cars

    let modulusHrzRemainder = leftEdgeLocation % 150
    //console.log(modulusHrzRemainder);
    if (modulusHrzRemainder < 75) {
        //round up
        cars[currentCarIndex].x = leftEdgeLocation - modulusHrzRemainder;
    } else {
        //roundDown
        cars[currentCarIndex].x = ((150 - modulusHrzRemainder) + leftEdgeLocation)
    }

    //clips the vert cars
    let modulusVrtRemainder = topEdgeLocation % 150
    //console.log(modulusVrtRemainder);
    if (modulusVrtRemainder < 75) {
        //round up
        cars[currentCarIndex].y = topEdgeLocation - modulusVrtRemainder;
    } else {
        //roundDown
        cars[currentCarIndex].y = ((150 - modulusVrtRemainder) + topEdgeLocation)
    }

    //update car location once they have been snapped to grid, this stops cars getting stuck on each other by tiny margins
    cars[currentCarIndex].carLeftEdge = currentCar.x;
    cars[currentCarIndex].carRightEdge = currentCar.x + currentCar.width;
    cars[currentCarIndex].carTop = currentCar.y;
    cars[currentCarIndex].carBottom = currentCar.y + currentCar.height;

    //console.log(currentCar);
    //checkForOverLap(); needs to be called live in the mouseMove function 
    //console.log(currentCar);

    drawShapes();
    //isOverlapping = false; //resets the is overlapping once the shape has been snapped to grid

    numberOfMovesFunc();

    winConditions(); //called after the draw shapes
}
//Counts the number of shape moves
function numberOfMovesFunc() {

    if (isDragging) { //prevents numberOfMoves increasing if the car is being dragged against another
        return;
    } else {

        //if the car has never moved then set previousPosition to current. 
        if (currentCar.hasMoved == false) {
            //console.log("This car has never previously moved");
            //console.log("car.InitialPosition" , currentCar.initialPosition);

            if (currentCar.carLeftEdge !== currentCar.initialPosition.carLeftEdge
                || currentCar.carRightEdge !== currentCar.initialPosition.carRightEdge
                || currentCar.carBottom !== currentCar.initialPosition.carBottom
                || currentCar.carTop !== currentCar.initialPosition.carTop
            ) {
                numberOfMoves++;
                console.log("Number of moves:", numberOfMoves);
                counterElement.textContent = numberOfMoves
            }
            //this stops the function using the initial value of any car if they have already moved. 
            currentCar.hasMoved = true;
        }

        //if no previousPosition exists, this should create it.
        //BUT this code only runs once an object has been moved. It is called by the snapTo function. 
        //I have created and object within all the existing car objects that contains the initialPosition of each of them. 
        //"currentCar.previousPosition" initializes a key value pair, which is an object inside the existing car object "previousPosition: {carLeftEdge: 450, .... etc.. }"

        if (!currentCar.previousPosition) {
            currentCar.previousPosition = {
                carLeftEdge: currentCar.carLeftEdge,
                carRightEdge: currentCar.carRightEdge,
                carBottom: currentCar.carBottom,
                carTop: currentCar.carTop
            };
        }

        //console.log("currentCar", currentCar);
        //console.log("InitialPosition", currentCar.initialPosition);
        //console.log("previousPosition", currentCar.previousPosition);

        //compares the currentCar location with the current cars's previous location.
        if (currentCar.carLeftEdge !== currentCar.previousPosition.carLeftEdge
            || currentCar.carRightEdge !== currentCar.previousPosition.carRightEdge
            || currentCar.carBottom !== currentCar.previousPosition.carBottom
            || currentCar.carTop !== currentCar.previousPosition.carTop
        ) {
            numberOfMoves++; // Increment move counter
            console.log("Car has moved!");
            console.log("Number of moves:", numberOfMoves);
            counterElement.textContent = numberOfMoves

            // Update the car's previous position
            currentCar.previousPosition = { carLeftEdge: currentCar.carLeftEdge, carRightEdge: currentCar.carRightEdge, carBottom: currentCar.carBottom, carTop: currentCar.carTop };
        } else {
            console.log("Car has not moved. Move counter unchanged.");
            //error, on the first move of any car, the car's previous location is not defined. 
            //to get round this I have created an 'initialPosition' array within each car object
        }
    }
}
//checks to see if cars overlap
function checkForOverLap() {
    //could also be called collision detection 
    //prevent car overlapping existing car
    //need to get all of the cars edge co-ordinates
    
    cars[currentCarIndex].carLeftEdge = currentCar.x;
    cars[currentCarIndex].carRightEdge = currentCar.x + currentCar.width;
    cars[currentCarIndex].carTop = currentCar.y;
    cars[currentCarIndex].carBottom = currentCar.y + currentCar.height;

    //console.log("Left edge " + cars[currentCarIndex].carLeftEdge, "right edge " + cars[currentCarIndex].carRightEdge, "top edge " + cars[currentCarIndex].carTop, "bottom edge " + cars[currentCarIndex].carBottom);
    //compare current car to others.
    //console.log(currentCar);//logs the details of the current car

    for (let i = 0; i < cars.length; i++) {
        if (i === currentCarIndex) continue; //'continue' skips the current car in the array so it can be compared to others. 
        //console.log("currentCar" , currentCar);
        //check every against the current one
        const otherCars = cars[i]; //creates a variable to compare the currentCar against. 

        //iterate through cars array to see if there is an overlap
        //Check for overlap using AABB collision detection
        const overlapX =
            currentCar.carRightEdge > otherCars.carLeftEdge &&
            currentCar.carLeftEdge < otherCars.carRightEdge;
        const overlapY =
            currentCar.carBottom > otherCars.carTop &&
            currentCar.carTop < otherCars.carBottom;

        if (overlapX && overlapY) {

            isOverlapping = true;
            //console.log("isOverlapping =", isOverlapping)
            //console.log("Overlap detected with", cars[i].color,"car, at cars index:", i); 
            //calling snapTo prevents further movement as it is constantly called if if overlap is detected 
            //console.log("currentCar" , currentCar);        

            snapTo();
            //call snap to func if overlap is detected
            //this prevents further movement
        } else {
            isOverlapping = false;
            //console.log("isOverlapping =", isOverlapping)
        }
        //console.log(car.carLeftEdge)
    }
    //y axis increases as it goes down
    //x axis increases as it goes right
}

//Draw shapes is the live draw function
async function drawShapes() {
    //console.log(tileName);
    context.clearRect(0, 0, canvasWidth, canvasHeight);
    drawHorizGrid();
    drawVertGrid();

    for (let car of cars) {
        // context.font = "50px Arial";
        // context.fillText("Hello World",10,80);
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

function clearCars() {
    for (let car of cars) {
        context.clearRect(car.x, car.y, car.width, car.height);
    }
}

//Have you won? This function triggers if you have 
function winConditions() {
    if (currentCar.carLeftEdge > 598 && currentCar.carTop == 300 && currentCar.carBottom == 450) {
        console.log("whoop!")
        alert("Rah Gumba! \nYou have freed the beast!")
        //if the car has the attribute 'maincar' is in cells C5 and C6 
        //win condition = true 
                
        //load level
        level++
        
        //clear existing cars
        clearCars();
        drawVertGrid(); //makes sure the grid is redrawn properly as clear cars can cause problems
        drawHorizGrid();

        cars = [];
        loadCars(level);
        
        numberOfMoves = 0;
        counterElement.textContent = numberOfMoves;

        levelDisplay.textContent = level; //updates level tracker
        drawCars();
        //console.log("Level", level)
        partyHorn();
        confettiFunc();
    }
}

function partyHorn() {
    var audio = new Audio('party_horn.mp3');
    audio.play();
  }

//All parts of the confetti sequence are nested in the below function. 
function confettiFunc() {

    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });

    //Comments:
    var count = 200;
    var defaults = {
        origin: { y: 0.7 }
    };

    function fire(particleRatio, opts) {
        confetti({
            ...defaults,
            ...opts,
            particleCount: Math.floor(count * particleRatio)
        });
    }

    fire(0.25, {
        spread: 26,
        startVelocity: 55,
    });
    fire(0.2, {
        spread: 60,
    });
    fire(0.35, {
        spread: 100,
        decay: 0.91,
        scalar: 0.8
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 25,
        decay: 0.92,
        scalar: 1.2
    });
    fire(0.1, {
        spread: 120,
        startVelocity: 45,
    });

    function fireworks() {

        var duration = 2 * 1000; //set firework duration time
        var animationEnd = Date.now() + duration;
        var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        var interval = setInterval(function () {
            var timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            var particleCount = 50 * (timeLeft / duration);
            // since particles fall down, start a bit higher than random
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
            confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
        }, 250);
    }

    fireworks();
}

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