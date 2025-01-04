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
    ],

    2: 
    [ 
      {
        x: 300, 
        y: 150,
        width: 150,
        height: 300,
        carLeftEdge: 300,
        carRightEdge: 450,
        carTop: 150,
        carBottom: 450,
        color: "#00ffcc",
        orientation: "vrt",
        hasMoved: false,
        initialPosition: {
          carLeftEdge: 300,
          carRightEdge: 450,
          carTop: 150,
          carBottom: 450
        }
      },
      {
        x: 600,
        y: 150,
        width: 150,
        height: 450,
        carLeftEdge: 600,
        carRightEdge: 750,
        carTop: 150,
        carBottom: 600,
        color: "#fcff42",
        orientation: "vrt",
        hasMoved: false,
        initialPosition: {
          carLeftEdge: 600,
          carRightEdge: 750,
          carTop: 150,
          carBottom: 600
        }
      },
      {
        mainCar: true,
        x: 0,
        y: 300,
        width: 300,
        height: 150,
        carLeftEdge: 0,
        carRightEdge: 300,
        carTop: 300,
        carBottom: 450,
        color: "#ff0000",
        orientation: "hrz",
        hasMoved: false,
        initialPosition: {
          carLeftEdge: 0,
          carRightEdge: 300,
          carTop: 300,
          carBottom: 450
        }
      },
      {
        x: 750,
        y: 300,
        width: 150,
        height: 300,
        carLeftEdge: 750,
        carRightEdge: 900,
        carTop: 300,
        carBottom: 600,
        color: "#ec7f18",
        orientation: "vrt",
        hasMoved: false,
        initialPosition: {
          carLeftEdge: 750,
          carRightEdge: 900,
          carTop: 300,
          carBottom: 600
        }
      },
      {
        x: 0,
        y: 450,
        width: 450,
        height: 150,
        carLeftEdge: 0,
        carRightEdge: 450,
        carTop: 450,
        carBottom: 600,
        color: "#ae00ff",
        orientation: "hrz",
        hasMoved: false,
        initialPosition: {
          carLeftEdge: 0,
          carRightEdge: 450,
          carTop: 450,
          carBottom: 600
        }
      },
      {
        x: 0,
        y: 600,
        width: 150,
        height: 300,
        carLeftEdge: 0,
        carRightEdge: 150,
        carTop: 600,
        carBottom: 900,
        color: "#00fffb",
        orientation: "vrt",
        hasMoved: false,
        initialPosition: {
          carLeftEdge: 0,
          carRightEdge: 150,
          carTop: 600,
          carBottom: 900
        }
      },
      {
        x: 150,
        y: 600,
        width: 150,
        height: 300,
        carLeftEdge: 150,
        carRightEdge: 300,
        carTop: 600,
        carBottom: 900,
        color: "#f29afe",
        orientation: "vrt",
        hasMoved: false,
        initialPosition: {
          carLeftEdge: 150,
          carRightEdge: 300,
          carTop: 600,
          carBottom: 900
        }
      },
      {
        x: 300,
        y: 600,
        width: 150,
        height: 300,
        carLeftEdge: 300,
        carRightEdge: 450,
        carTop: 600,
        carBottom: 900,
        color: "#9005d1",
        orientation: "vrt",
        hasMoved: false,
        initialPosition: {
          carLeftEdge: 300,
          carRightEdge: 450,
          carTop: 600,
          carBottom: 900
        }
      },
      {
        x: 600,
        y: 600,
        width: 300,
        height: 150,
        carLeftEdge: 600,
        carRightEdge: 900,
        carTop: 600,
        carBottom: 750,
        color: "#12adaf",
        orientation: "hrz",
        hasMoved: false,
        initialPosition: {
          carLeftEdge: 600,
          carRightEdge: 900,
          carTop: 600,
          carBottom: 750
        }
      },
      {
        x: 600,
        y: 750,
        width: 300,
        height: 150,
        carLeftEdge: 600,
        carRightEdge: 900,
        carTop: 750,
        carBottom: 900,
        color: "#799a9a",
        orientation: "hrz",
        hasMoved: false,
        initialPosition: {
          carLeftEdge: 600,
          carRightEdge: 900,
          carTop: 750,
          carBottom: 900
        }
      }
    ],
    
    3: [
      {
        "x": 150,
        "y": 0,
        "width": 150,
        "height": 300,
        "carLeftEdge": 150,
        "carRightEdge": 300,
        "carTop": 0,
        "carBottom": 300,
        "color": "#00c500",
        "orientation": "vrt",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 150,
          "carRightEdge": 300,
          "carTop": 0,
          "carBottom": 300
        }
      },
      {
        "x": 300,
        "y": 0,
        "width": 300,
        "height": 150,
        "carLeftEdge": 300,
        "carRightEdge": 600,
        "carTop": 0,
        "carBottom": 150,
        "color": "#ffa500",
        "orientation": "hrz",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 300,
          "carRightEdge": 600,
          "carTop": 0,
          "carBottom": 150
        }
      },
      {
        "x": 600,
        "y": 0,
        "width": 150,
        "height": 300,
        "carLeftEdge": 600,
        "carRightEdge": 750,
        "carTop": 0,
        "carBottom": 300,
        "color": "#a52a2a",
        "orientation": "vrt",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 600,
          "carRightEdge": 750,
          "carTop": 0,
          "carBottom": 300
        }
      },
      {
        "x": 750,
        "y": 0,
        "width": 150,
        "height": 300,
        "carLeftEdge": 750,
        "carRightEdge": 900,
        "carTop": 0,
        "carBottom": 300,
        "color": "#ff00f2",
        "orientation": "vrt",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 750,
          "carRightEdge": 900,
          "carTop": 0,
          "carBottom": 300
        }
      },
      {
        "x": 300,
        "y": 150,
        "width": 150,
        "height": 300,
        "carLeftEdge": 300,
        "carRightEdge": 450,
        "carTop": 150,
        "carBottom": 450,
        "color": "#ff00f2",
        "orientation": "vrt",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 300,
          "carRightEdge": 450,
          "carTop": 150,
          "carBottom": 450
        }
      },
      {
        "x": 450,
        "y": 150,
        "width": 150,
        "height": 300,
        "carLeftEdge": 450,
        "carRightEdge": 600,
        "carTop": 150,
        "carBottom": 450,
        "color": "#006400",
        "orientation": "vrt",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 450,
          "carRightEdge": 600,
          "carTop": 150,
          "carBottom": 450
        }
      },
      {
        "x": 0,
        "y": 300,
        "width": 300,
        "height": 150,
        "carLeftEdge": 0,
        "carRightEdge": 300,
        "carTop": 300,
        "carBottom": 450,
        "color": "#ff0000",
        "orientation": "hrz",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 0,
          "carRightEdge": 300,
          "carTop": 300,
          "carBottom": 450
        }
      },
      {
        "x": 600,
        "y": 300,
        "width": 150,
        "height": 300,
        "carLeftEdge": 600,
        "carRightEdge": 750,
        "carTop": 300,
        "carBottom": 600,
        "color": "#808080",
        "orientation": "vrt",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 600,
          "carRightEdge": 750,
          "carTop": 300,
          "carBottom": 600
        }
      },
      {
        "x": 750,
        "y": 300,
        "width": 150,
        "height": 450,
        "carLeftEdge": 750,
        "carRightEdge": 900,
        "carTop": 300,
        "carBottom": 750,
        "color": "#87cefa",
        "orientation": "vrt",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 750,
          "carRightEdge": 900,
          "carTop": 300,
          "carBottom": 750
        }
      },
      {
        "x": 0,
        "y": 450,
        "width": 150,
        "height": 450,
        "carLeftEdge": 0,
        "carRightEdge": 150,
        "carTop": 450,
        "carBottom": 900,
        "color": "#7e00a5",
        "orientation": "vrt",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 0,
          "carRightEdge": 150,
          "carTop": 450,
          "carBottom": 900
        }
      },
      {
        "x": 300,
        "y": 450,
        "width": 150,
        "height": 300,
        "carLeftEdge": 300,
        "carRightEdge": 450,
        "carTop": 450,
        "carBottom": 750,
        "color": "#ffff00",
        "orientation": "vrt",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 300,
          "carRightEdge": 450,
          "carTop": 450,
          "carBottom": 750
        }
      },
      {
        "x": 450,
        "y": 450,
        "width": 150,
        "height": 300,
        "carLeftEdge": 450,
        "carRightEdge": 600,
        "carTop": 450,
        "carBottom": 750,
        "color": "#ffa500",
        "orientation": "vrt",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 450,
          "carRightEdge": 600,
          "carTop": 450,
          "carBottom": 750
        }
      },
      {
        "x": 150,
        "y": 750,
        "width": 450,
        "height": 150,
        "carLeftEdge": 150,
        "carRightEdge": 600,
        "carTop": 750,
        "carBottom": 900,
        "color": "#0000ff",
        "orientation": "hrz",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 150,
          "carRightEdge": 600,
          "carTop": 750,
          "carBottom": 900
        }
      },
      {
        "x": 600,
        "y": 750,
        "width": 300,
        "height": 150,
        "carLeftEdge": 600,
        "carRightEdge": 900,
        "carTop": 750,
        "carBottom": 900,
        "color": "#808000",
        "orientation": "hrz",
        "hasMoved": false,
        "initialPosition": {
          "carLeftEdge": 600,
          "carRightEdge": 900,
          "carTop": 750,
          "carBottom": 900
        }
      }
    ]
    
};

// export default allows data to be shared out of this page (e.g. can now be seen in the mani script.js page)
export default levelData;