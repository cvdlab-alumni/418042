/*

	Exercise 3
	Produce a colored version of the previous model.

*/


var wallHeight = 3;
var floorHeight = 3;
var stepHeight = 3/8;

function drawFloor(struct,height,length,width){
	struct = STRUCT([struct,SIMPLEX_GRID([length,width,height])]);
	return struct;
}

function drawSteps(){
	var step = SIMPLEX_GRID([[-39+stepHeight,stepHeight],[-1,3],[stepHeight]]);
	var t = T([0,2])([-stepHeight,stepHeight]);
	return STRUCT([step,t,step,t,step,t,step,t,step,t,step,t,step]);
}

function drawWall(struct,point,height,length,width){
	var point = point || [0,0,0];
	return STRUCT([struct,SIMPLEX_GRID([[-point[0],length],[-point[1],width],[-point[2],height]])]);
}

function drawBench(){
	var t = T([0])([14.8/7]);
	var leg = SIMPLEX_GRID([[-7.9,0.4],[-14.3,0.4],[-floorHeight,0.6]]);
	return STRUCT([ 
		SIMPLEX_GRID([ [-7.8,23.2-7.8],[-14.2,0.6],[-floorHeight-0.6,0.3] ]),
		leg, t, leg, t, leg, t, leg, t, leg, t, leg, t, leg, t, leg
	]);
}

function getColumn(){
	return STRUCT([ 
		SIMPLEX_GRID([ [-0.1,0.1],[0.1],[-floorHeight,wallHeight] ]),
		SIMPLEX_GRID([ [0.3],[-0.1,0.1],[-floorHeight,wallHeight] ]),
		SIMPLEX_GRID([ [-0.1,0.1],[-0.2,0.1],[-floorHeight,wallHeight] ])
	]);
}

function drawColumns(){
	return STRUCT([ 
		T([0,1])([26,6.8])(getColumn()),
		T([0,1])([26,14])(getColumn()),
		T([0,1])([31.4,14])(getColumn()),
		T([0,1])([31.4,6.8])(getColumn()),
		T([0,1])([38.6,14])(getColumn()),
		T([0,1])([38.6,6.8])(getColumn()),
		T([0,1])([45,14])(getColumn()),
		T([0,1])([45,6.8])(getColumn())
	]);
}

function drawRoof(){
	return STRUCT([ 
		SIMPLEX_GRID([ [-0.5,9.7],[-13.3,22.7-13.3],[-floorHeight,-wallHeight,0.2] ]),
		SIMPLEX_GRID([ [-24,47-24],[-4,13],[-floorHeight,-wallHeight,0.2] ])
	]); 
}

function drawBuilding(structs){
	return DRAW(STRUCT(structs));
}

// floor
var floor = STRUCT([]);

floor = drawFloor(floor, [floorHeight], [39], [1]);
floor = drawFloor(floor, [floorHeight], [1], [-1,1]);
floor = drawFloor(floor, [floorHeight], [-21, 36+3/8-21], [-1,3]);
floor = drawFloor(floor, [floorHeight], [-21, 52-21], [-4,1]);
floor = drawFloor(floor, [floorHeight], [-21, 47-21,-(51-47),1], [-5,1]);
floor = drawFloor(floor, [floorHeight], [-21, 47-21], [-6,16.2-6]);
floor = drawFloor(floor, [floorHeight], [-0.8, 21+0.2], [-10,6]);
floor = drawFloor(floor, [floorHeight], [-0.8, 39+0.2], [-16,1]);
floor = drawFloor(floor, [floorHeight], [-0.8, 8+0.2+0.2], [-17,22-17+0.2]);
floor = drawFloor(floor, [floorHeight], [-0.8, 0.2], [-2,8]);
floor = drawFloor(floor, [floorHeight], [-51, 0.2], [-6,16.2-6]);
floor = drawFloor(floor, [floorHeight], [-47,51.2-47], [-16,0.2]);

//pools
floor = drawFloor(floor, [floorHeight-0.3], [-47,51-47], [-5,11]);
floor = drawFloor(floor, [floorHeight-0.3], [-1,20], [-1,9]);

// steps
var steps = drawSteps();

var wall = STRUCT([]);

wall = drawWall(wall, [0.8,0.8,floorHeight], [wallHeight], [7.2], [0.2]);
wall = drawWall(wall, [0.8,1,floorHeight], [wallHeight], [0.2], [21.2]);
wall = drawWall(wall, [1,22,floorHeight], [wallHeight], [4], [0.2]);
wall = drawWall(wall, [9,17,floorHeight], [wallHeight], [0.2], [22.2-17]);
wall = drawWall(wall, [7.5,15,floorHeight], [wallHeight], [26.5-7.5], [0.2]);

wall = drawWall(wall, [25.2,7.2,floorHeight], [wallHeight], [33.8-25.2], [0.2]);
wall = drawWall(wall, [37.8,11.5,floorHeight], [wallHeight], [42.5-37.8], [0.2]);
wall = drawWall(wall, [41.5,4.8,floorHeight], [wallHeight], [51.2-41.5], [0.2]);
wall = drawWall(wall, [51,5,floorHeight], [wallHeight], [0.2], [16.2-5]);
wall = drawWall(wall, [37.5,16,floorHeight], [wallHeight], [51-37.5], [0.2]);

wall = drawWall(wall, [40,13.5,floorHeight], [wallHeight], [0.1], [16-13.5]);
wall = drawWall(wall, [30,13.5,floorHeight], [wallHeight], [40-30], [0.1]);
wall = drawWall(wall, [31,7.4,floorHeight], [wallHeight], [0.1], [13.5-7.4]);
wall = drawWall(wall, [32,7.4,floorHeight], [wallHeight], [0.1], [13.5-7.4]);
wall = drawWall(wall, [44.5,6.8,floorHeight], [wallHeight], [0.1], [14.2-6.8]);

wall = drawWall(wall, [29.9,4.9,floorHeight], [wallHeight], [42.5-29.9], [0.1]);
wall = drawWall(wall, [29.9,5,floorHeight], [wallHeight], [0.1], [7.2-4.9]);
wall = drawWall(wall, [37.5,11.5,floorHeight], [wallHeight], [42.5-37.5], [0.2]);

wall = drawWall(wall, [1,20.8,floorHeight], [wallHeight], [4], [0.1]);
wall = drawWall(wall, [5.1,20.4,floorHeight], [wallHeight], [4], [0.1]);
wall = drawWall(wall, [5,17.1,floorHeight], [wallHeight], [0.1], [5]);
wall = drawWall(wall, [1,17,floorHeight], [wallHeight], [8], [0.1]);
wall = drawWall(wall, [5,22,floorHeight], [wallHeight], [4], [0.1]);


var bench = drawBench();

var columns = drawColumns();

var roof = drawRoof();

var pool1Water = SIMPLEX_GRID([ [-1,20],[-1,9],[-floorHeight+0.3,0.1] ]);
var pool2Water = SIMPLEX_GRID([ [-47,4],[-5,11],[-floorHeight+0.3,0.1] ]);

COLOR([0,135/255,1])(pool1Water);
COLOR([0,135/255,1])(pool2Water);

COLOR([100/255,100/255,100/255])(roof);

COLOR([70/255,70/255,70/255])(bench);

COLOR([230/255,230/255,230/255])(columns);

COLOR([140/255,140/255,140/255])(wall);

COLOR([140/255,140/255,140/255])(steps);

drawBuilding([columns,bench,wall,steps,floor,roof,pool1Water,pool2Water]);