/*
	Esercizio 2:

	Reproduce a 3D model of the Barcellona Pavilion
	using only the plasm.js primitives SIMPLEX_GRID and STRUCT.

	Affine transformations T, S or R are also allowed.

*/

var wallHeight = 6;
var floorHeight = 3;
var stepHeight = 3/8;

function drawFloor(struct,height,length,width){
	struct = STRUCT([struct,SIMPLEX_GRID([length,width,height])]);
	return struct;
}

var floor = STRUCT([]);

floor = drawFloor(floor, [floorHeight], [39], [1]);
floor = drawFloor(floor, [floorHeight], [1], [-1,1]);
floor = drawFloor(floor, [floorHeight], [-21, 36+3/8-21], [-1,3]);
floor = drawFloor(floor, [floorHeight], [-21, 52-21], [-4,1]);
floor = drawFloor(floor, [floorHeight], [-21, 47-21,-(51-47),1], [-5,1]);
floor = drawFloor(floor, [floorHeight], [-21, 47-21], [-6,16.2-6]);
floor = drawFloor(floor, [floorHeight], [-0.8, 21+0.2], [-10,6]);
floor = drawFloor(floor, [floorHeight], [-0.8, 39+0.2], [-16,1]);
floor = drawFloor(floor, [floorHeight], [-0.8, 9+0.8+0.8], [-17,22-17+0.8]);
floor = drawFloor(floor, [floorHeight], [-0.8, 0.2], [-2,8]);
floor = drawFloor(floor, [floorHeight], [-51, 0.2], [-6,16.2-6]);
floor = drawFloor(floor, [floorHeight], [-47,51.2-47], [-16,0.2]);

//pools
floor = drawFloor(floor, [floorHeight-0.3], [-47,51-47], [-5,11]);
floor = drawFloor(floor, [floorHeight-0.3], [-1,20], [-1,9]);

DRAW(floor);