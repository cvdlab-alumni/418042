
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

function drawLine(struct,points){
	return STRUCT([struct, POLYLINE(points)]);
}

var initStruct = STRUCT([]);

var mattonelle = STRUCT([]);

//structN = drawGrid([],[],[],[]);
struct1 = drawGrid(initStruct,[0,0],[1,0],[1,2],[0,2]);
struct2 = drawGrid(struct1,[1,0],[39,0],[39,1],[1,1]);
struct3 = drawGrid(struct2,[21,1],[36,1],[36,4],[21,4]);
struct4 = drawGrid(struct3,[21,4],[52,4],[52,5],[21,5]);
struct5 = drawGrid(struct4,[51,5],[52,5],[52,6],[51,6]);
struct6 = drawGrid(struct5,[21,5],[47,5],[47,16],[21,16]);
struct7 = drawGrid(struct6,[21,16],[39,16],[39,17],[21,17]);
struct8 = drawGrid(struct7,[1,10],[21,10],[21,17],[1,17]);
struct9 = drawGrid(struct8,[1,17],[9,17],[9,22],[1,22]);


var muro = STRUCT([]);

struct10 = drawLine(struct9,[
		[0.8,0.8],[8,0.8],[8,1],[1,1],[1,22],[9,22],[9,17],[9.2,17],[9.2,22.2],[0.8,22.2],[0.8,0.8]
		]);

struct11 = drawLine(struct10,[
		[41.5,4.8],[51.2,4.8],[51.2,16.2],[37.5,16.2],[37.5,16],[51,16],[51,5],[41.5,5],[41.5,4.8]
		]);

struct12 = drawLine(struct11,[
		[7.5,15],[26.5,15],[26.5,15.2],[7.5,15.2],[7.5,15]
		]);

struct13 = drawLine(struct12,[
		[25.2,7.2],[33.8,7.2],[33.8,7.4],[25.2,7.4],[25.2,7.2]
		]);

struct14 = drawLine(struct13,[
		[37.2,11.4],[42.5,11.4],[42.5,11.6],[37.2,11.6],[37.2,11.4]
		]);

struct15 = drawLine(struct14,[
		[4.9,22],[4.9,17],[5.1,17],[5.1,22]
		]);

struct16 = drawLine(struct15,[
		[5.1,20.4],[9,20.4],[9,20.6],[5.1,20.6]
		]);

DRAW(struct16);

var scale = STRUCT([]);

for (var i = 36; i <=39 ; i+=(3/8)) {
	scale = drawLine(scale,[[i,1],[i,4]]);
};

DRAW(scale);
