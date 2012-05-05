/*
	Exercise 1
	Produce the model of a single wing in a local coordinate system.
*/

function POLYPOINT(points) {
	return SIMPLICIAL_COMPLEX(points)(
		points.map( function (p,i) {
			return [i];
		}
		));
}


/*

var controlPoints =  [[0,1.6,0],[0,1.3,0.05], [0,1,0.1],[0,0.7,0.12],[0,0.5,0.14],[0,0.3,0.13],[0,0.1,0.12],[0,0,0.24],
					
					[0,0.1,0.36],[0,0.3,0.40], [0,0.5,0.42],[0,0.7,0.36],[0,1,0.26],[0,1.3,0.12],[0,1.6,0]

					];
*/

var domain1 = INTERVALS(1)(100);

var controlPoints = [[0,1.8,0],[0,0.6,0.35],[0,0.7,0.3],[0,-0.8,-0.15],[0,-0.1,0],
					[0,0,0.75],[0,0.4,0.3],[0,1,0.45],[0,1.3,0.2],[0,1.8,0]];

var c0 = BEZIER(S0)(controlPoints);

var wingsProfile = MAP(c0)(domain1);

DRAW(wingsProfile);

var p1 = controlPoints.map(function (p){return [p[0]+4,p[1],p[2]]});

var c1 = BEZIER(S0)(p1);

//DRAW(POLYPOINT(controlPoints));

//var p2 = [[0,1.8,0],[0,0.6,0.35],[0,0.7,0.3],[0,-0.8,-0.15],[0,-0.1,0],
//					[0,0,0.75],[0,0.4,0.3],[0,1,0.45],[0,1.3,0.2],[0,1.8,0]];

//var p2 = p2.map(function (p){ return [p[0]+0.5,p[1],p[2]]});

//var c2 = BEZIER(S0)(p2);

var domain2 = DOMAIN([[0,1],[0,1]])([10,10]);

var wingMapping = BEZIER(S1)([c0,c1]);
var wing = MAP(wingMapping)(domain2);

DRAW(wing);

var p2 = controlPoints.map(function (p){return [p[0]+4,p[1],p[2]]});
var c2 = BEZIER(S0)(p2);
//var p3 = p2.map(function (p){return [p[0]+(p[0]*0.5/4.5),p[1]-(p[0]*0.5/4.5),p[2]]});
var p3 = p2.map(function (p){return [p[0]+0.5,p[1],p[2]]});
var c3 = BEZIER(S0)(p3);

var wingMapping = BEZIER(S1)([c2,c3]);
var wing = MAP(wingMapping)(domain2);


/*
var mappingPunta = function(p){
	var x = p[0];
	var y = p[1];
	var z = p[2];
	return [x, y-(x-4), z];
}
*/


//DRAW(SKELETON(1)(mappedWing));
DRAW(wing);