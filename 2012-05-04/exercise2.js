/*
	Exercise 2
	Produce the model of the fuselage (local coordinate system).
*/

//var p0 = [[0,0,-1.8],[1.8,0,-1.8],[1.8,0,1.8],[-1.8,0,1.8],[-1.8,0,-1.8],[0,0,-1.8]];

var fuselage = STRUCT([]);

var p0 = [[0,0,-1.3],[1.3,0,-1.3],[1.8,0,0],[2,0,2.4],[0,0,2.4],[-2,0,2.4],
	[-1.8,0,0],[-1.3,0,-1.3],[0,0,-1.3]];

var c0 = BEZIER(S0)(p0);
var domain1 = INTERVALS(1)(100);

var p1 = p0.map(function (p) {return [p[0],p[1]-0.5,p[2]]});
var c1 = BEZIER(S0)(p1);

var p2 = p0.map(function (p) {return [p[0],p[1]-0.8,p[2]]});
var c2 = BEZIER(S0)(p2);

var p3 = p0.map(function (p) {return [p[0]*0.5,p[1]-1,p[2]*0.5]});
var c3 = BEZIER(S0)(p3);

var domain2 = DOMAIN([[0,1],[0,1]])([100,50]);

var cockPitMapping = BEZIER(S1)([c0,c1,c2,c3]);
var cockPit = MAP(cockPitMapping)(domain2);

fuselage = STRUCT([fuselage,cockPit]);



//back cockpit

var p4 = p0.map(function (p) {return [p[0],p[1]+0.1,p[2]]});
var c4 = BEZIER(S0)(p4);

var p5 = p0.map(function (p) {return [p[0]*0.9,p[1]+1.3,p[2]*0.9+0.05]});
var c5 = BEZIER(S0)(p5);

var backCockPitMapping = BEZIER(S1)([c0,c4,c5]);
var backCockPit = MAP(backCockPitMapping)(domain2);

fuselage = STRUCT([fuselage,backCockPit]);

//middle

var domain3 = DOMAIN([[0,1],[0,1]])([30,1]);

var p6 = p5.map(function (p) {return [p[0]*0.9,p[1]+1,p[2]*0.9]});
var c6 = BEZIER(S0)(p6);

var middleCockPitMapping = BEZIER(S1)([c5,c6]);
var middleCockPit = MAP(middleCockPitMapping)(domain3);

fuselage = STRUCT([fuselage,middleCockPit]);


// body

var domain4 = DOMAIN([[0,1],[0,1]])([30,1]);

p7 = p6.map(function (p) {return [p[0],p[1],p[2]]});
var c7 = BEZIER(S0)(p7);

var tailControlPoints = [[0,0,-1],
	[1,0,-1],[1,0,-1],[1,0,-1],[1,0,-1],[1,0,-1],[1,0,-1],[1,0,-1],[1,0,-1],
	[1,0,0],
	[1,0,1],[1,0,1],[1,0,1],[1,0,1],[1,0,1],[1,0,1],
	[0,0,1],
	[-1,0,1],[-1,0,1],[-1,0,1],[-1,0,1],[-1,0,1],[-1,0,1],
	[-1,0,0],
	[-1,0,-1],[-1,0,-1],[-1,0,-1],[-1,0,-1],[-1,0,-1],[-1,0,-1],[-1,0,-1],
	[0,0,-1]];

var p8 = tailControlPoints.map(function (p) {return [p[0]*0.7,p[1]+6.3,p[2]*0.7+0.4]});
var c8 = BEZIER(S0)(p8);

var bodyMapping = BEZIER(S1)([c7,c8]);
var body = MAP(bodyMapping)(domain4);

fuselage = STRUCT([fuselage,body]);


//tail

var p9 = [[0,0,-1],[0.5,0,0],[0,0,1],[-0.5,0,0],[0,0,-1],];

p9 = p9.map(function (p) {return [p[0]*0.4,p[1]+11,p[2]*0.4+0.6]});
var c9 = BEZIER(S0)(p9);
var tailMapping = BEZIER(S1)([c8,c9]);
var tail = MAP(tailMapping)(domain4);

fuselage = STRUCT([fuselage,tail]);

fuselage = SCALE([0,1,2])([0.8,0.8,0.8])(fuselage);

DRAW(fuselage);
