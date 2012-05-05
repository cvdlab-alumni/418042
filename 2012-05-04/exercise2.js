/*
	Exercise 2
	Produce the model of the fuselage (local coordinate system).
*/

var p0 = [[0,0,-1.8],[2,0,-1.8],[3,0,0],[2,0,3],[0,0,3],[-2,0,2],
	[-2,0,0],[-2,0,-1.6],[0,0,-1.8]];

var c0 = BEZIER(S0)(p0);
var domain1 = INTERVALS(1)(100);
var circle = MAP (c0)(domain1);
DRAW(circle);

var p1 = p0.map(function (p) {return [p[0],p[1]-0.5,p[2]]});
var c1 = BEZIER(S0)(p1);
var scaledCircle = MAP (c1)(domain1);

var p2 = p0.map(function (p) {return [p[0],p[1]-0.8,p[2]]});
var c2 = BEZIER(S0)(p2);
var scaledCircle = MAP (c2)(domain1);

var p3 = p0.map(function (p) {return [p[0]*0.5,p[1]-1,p[2]*0.5]});
var c3 = BEZIER(S0)(p3);
var scaledCircle = MAP (c3)(domain1);

var domain2 = DOMAIN([[0,1],[0,1]])([30,50]);

var cockPitMapping = BEZIER(S1)([c0,c1,c2,c3]);
var cockPit = MAP(cockPitMapping)(domain2);
DRAW(cockPit); 


//back cockpit

var p4 = p0.map(function (p) {return [p[0],p[1]+1,p[2]]});
var c4 = BEZIER(S0)(p4);
var scaledCircle = MAP(c4)(domain1);

var p5 = p0.map(function (p) {return [p[0],p[1]+1,p[2]]});
var c5 = BEZIER(S0)(p5);
var scaledCircle = MAP(c5)(domain1);

