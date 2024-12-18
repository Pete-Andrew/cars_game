const levelData = {
    1: [
{ x: 0, y: 0, width: 450, height: 150, carLeftEdge: 0, carRightEdge: 450, carTop: 0, carBottom: 150, color: 'green', orientation: 'hrz', hasMoved: false, initialPosition: {carLeftEdge: 0, carRightEdge: 450, carTop: 0, carBottom: 150}},
{ x: 450, y: 0, width: 150, height: 300, carLeftEdge: 450, carRightEdge: 600, carTop: 0, carBottom: 300, color: 'red', orientation: 'vrt', hasMoved: false, initialPosition: {carLeftEdge: 450, carRightEdge: 600, carTop: 0, carBottom: 300}},
{ x: 450, y: 450, width: 300, height: 150, carLeftEdge: 450, carRightEdge: 750, carTop: 450, carBottom: 600, color: 'blue', orientation: 'hrz', hasMoved: false, initialPosition: {carLeftEdge: 0, carRightEdge: 300, carTop: 300, carBottom: 450 }},
{ mainCar: true, x: 0, y: 300, width: 300, height: 150, carLeftEdge: 0, carRightEdge: 300, carTop: 300, carBottom: 450, color: 'orange', orientation: 'hrz', hasMoved: false, initialPosition: {carLeftEdge: 0, carRightEdge: 300, carTop: 300, carBottom: 450}},
{ x: 300, y: 150, width: 150, height: 450, carLeftEdge: 300, carRightEdge: 450, carTop: 150, carBottom: 600, color: 'teal', orientation: 'vrt', hasMoved: false, initialPosition: { carLeftEdge: 300, carRightEdge: 450, carTop: 150, carBottom: 600 }},
{ x: 750, y: 0, width: 150, height: 300, carLeftEdge: 750, carRightEdge: 900, carTop: 0, carBottom: 300, color: 'pink', orientation: 'vrt', hasMoved: false, initialPosition: { carLeftEdge: 750, carRightEdge: 900, carTop: 0, carBottom: 300}},
{ x: 750, y: 300, width: 150, height: 300, carLeftEdge: 750, carRightEdge: 900, carTop: 300, carBottom: 600, color: 'grey', orientation: 'vrt', hasMoved: false, initialPosition: {carLeftEdge: 750, carRightEdge: 900, carTop: 300, carBottom: 600}},
{ x: 0, y: 600, width: 450, height: 150, carLeftEdge: 0, carRightEdge: 450, carTop: 600, carBottom: 750, color: 'purple', orientation: 'hrz', hasMoved: false, initialPosition: { carLeftEdge: 0, carRightEdge: 450, carTop: 600, carBottom: 750}},
{ x: 150, y: 750, width: 300, height: 150, carLeftEdge: 150, carRightEdge: 450, carTop: 750, carBottom: 900, color: 'violet', orientation: 'hrz', hasMoved: false, initialPosition: {carLeftEdge: 150, carRightEdge: 450, carTop: 750, carBottom: 900}},
{ x: 600, y: 600, width: 150, height: 300, carLeftEdge: 600, carRightEdge: 750, carTop: 600, carBottom: 900, color: 'brown', orientation: 'vrt', hasMoved: false, initialPosition: { carLeftEdge: 600, carRightEdge: 750, carTop: 600, carBottom: 900 }},
    ]
};

// export default allows data to be shared out of this page (e.g. can now be seen in the mani script.js page)
export default levelData;