
/*
	Esercizio 1
*/

function drawGrid(struct,v1,v2,v3,v4) {

	var v1x = v1[0];
	var v1y = v1[1];

	var v2x = v2[0];
	var v2y = v2[1];
	
	var v3x = v3[0];
	var v3y = v3[1];
	
	var v4x = v4[0];
	var v4y = v4[1];

	/*

	 v4 _____ v3
	   |  |	 |
	   |--|--|
	   |__|__|
	 v1  	  v2

	*/

	if ( ! (v2x>=v1x && v4y>=v1y && v2y<=v3y && v3x>=v4x) )
		throw "Invalid points";

	for (var i = 0; i <= (v2x-v1x); i++) {
		struct = STRUCT([struct, POLYLINE([[v1x+i,v1y],[v4x+i,v4y]])]);
	}

	for (var i = 0; i <= (v4y-v1y); i++) {
		struct = STRUCT([struct, POLYLINE([[v1x,v1y+i],[v2x,v2y+i]])]);
	}

	return struct;

}

// draw a line
function drawLine(struct,points){
	return STRUCT([struct, POLYLINE(points)]);
}

//draw steps
function drawSteps(){
	var steps = STRUCT([]);
	for (var i = 36; i <=39 ; i+=(3/8)) {
		steps = drawLine(steps,[[i,1],[i,4]]);
	};
	return steps;
}

function drawBuilding(structs){
	return DRAW(STRUCT(structs));
}

var floor = STRUCT([]);

floor = drawGrid(floor,[0,0],[1,0],[1,2],[0,2]);
floor = drawGrid(floor,[1,0],[39,0],[39,1],[1,1]);
floor = drawGrid(floor,[21,1],[36,1],[36,4],[21,4]);
floor = drawGrid(floor,[21,4],[52,4],[52,5],[21,5]);
floor = drawGrid(floor,[51,5],[52,5],[52,6],[51,6]);
floor = drawGrid(floor,[21,5],[47,5],[47,16],[21,16]);
floor = drawGrid(floor,[21,16],[39,16],[39,17],[21,17]);
floor = drawGrid(floor,[1,10],[21,10],[21,17],[1,17]);
floor = drawGrid(floor,[1,17],[9,17],[9,22],[1,22]);


var wall = STRUCT([]);

//wall = drawLine(wall,[
//		[0.8,0.8],[8,0.8],[8,1],[1,1],[1,22],[9,22],[9,17],[9.2,17],[9.2,22.2],[0.8,22.2],[0.8,0.8]
//		]);

wall = drawLine(wall,[
		[9,17],[9.2,17],[9.2,22.2],[9,22.2],[9,17]
		]);

wall = drawLine(wall,[
		[0.8,0.8],[8,0.8],[8,1],[1,1],[1,22],[5,22],[5,22.2],[0.8,22.2],[0.8,0.8]
		]);

wall = drawLine(wall,[
		[41.5,4.8],[51.2,4.8],[51.2,16.2],[37.8,16.2],[37.8,16],[51,16],[51,5],[41.5,5],[41.5,4.8]
		]);

wall = drawLine(wall,[
		[7.5,15],[26.5,15],[26.5,15.2],[7.5,15.2],[7.5,15]
		]);

wall = drawLine(wall,[
		[25.2,7.2],[33.8,7.2],[33.8,7.4],[25.2,7.4],[25.2,7.2]
		]);

wall = drawLine(wall,[
		[37.2,11.4],[42.5,11.4],[42.5,11.6],[37.2,11.6],[37.2,11.4]
		]);

wall = drawLine(wall,[
		[5,22],[5,17],[5.1,17],[5.1,22]
		]);

wall = drawLine(wall,[
		[5.1,20.4],[9,20.4],[9,20.5],[5.1,20.5]
		]);

wall = drawLine(wall,[
		[1,20.8],[5,20.8],[5,20.9],[1,20.9]
		]);

wall = drawLine(wall,[
		[5,22],[9,22],[9,22.1],[5,22.1]
		]);

wall = drawLine(wall,[
		[1,17],[9,17],[9,17.1],[1,17.1]
		]);

wall = drawLine(wall,[
		[30,13.5],[40,13.5],[40,16],[39.9,16],[39.9,13.6],[30,13.6],[30,13.5]
		]);

wall = drawLine(wall,[
		[31,7.4],[31,13.5]
		]);

wall = drawLine(wall,[
		[30.9,7.4],[30.9,13.5]
		]);

wall = drawLine(wall,[
		[31.9,7.4],[31.9,13.5]
		]);

wall = drawLine(wall,[
		[32,7.4],[32,13.5]
		]);

wall = drawLine(wall,[
		[29.9,7.2],[29.9,4.9],[41.5,4.9],[41.5,5],[30,5],[30,7.2]
		]);

wall = drawLine(wall,[
		[44.5,6.8],[44.6,6.8],[44.6,14.2],[44.5,14.2],[44.5,6.8]
		]);


//statue
wall = drawLine(wall,[
		[49,14.5],[49.5,14.5],[49.5,15],[49,15],[49,14.5]
		]);


var steps = drawSteps();

var building2D = drawBuilding([floor,wall,steps]);

