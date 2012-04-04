/*
	Esercizio 2:

	Reproduce a 3D model of the Barcellona Pavilion
	using only the plasm.js primitives SIMPLEX_GRID and STRUCT.

	Affine transformations T, S or R are also allowed.

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
wall = drawWall(wall, [9,17,floorHeight], [wallHeight], [0.2], [22.2-16.8]);
wall = drawWall(wall, [7.5,15,floorHeight], [wallHeight], [26.5-7.5], [0.2]);

wall = drawWall(wall, [25.2,7.2,floorHeight], [wallHeight], [33.8-25.2], [0.2]);
wall = drawWall(wall, [37.8,11.5,floorHeight], [wallHeight], [42.5-37.8], [0.2]);
wall = drawWall(wall, [41.5,4.8,floorHeight], [wallHeight], [51.2-41.5], [0.2]);
wall = drawWall(wall, [51,5,floorHeight], [wallHeight], [0.2], [16.2-5]);
wall = drawWall(wall, [37.5,16,floorHeight], [wallHeight], [51-37.5], [0.2]);

//wall = drawWall(wall, [37.5,11.5,floorHeight], [wallHeight], [42.5-37.5], [0.2]);
//wall = drawWall(wall, [37.5,11.5,floorHeight], [wallHeight], [42.5-37.5], [0.2]);

DRAW(wall);
DRAW(steps);
DRAW(floor);