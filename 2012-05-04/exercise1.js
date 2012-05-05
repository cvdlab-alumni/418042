/*
	Exercise 1
	Produce the model of a single wing in a local coordinate system.
*/


var domain1 = INTERVALS(1)(100);

var controlPoints = [[0,1.8,0],[0,0.6,0.35],[0,0.7,0.3],[0,-0.8,-0.15],[0,-0.1,0],
					[0,0,0.75],[0,0.4,0.3],[0,1,0.45],[0,1.3,0.2],[0,1.8,0]];

var c0 = BEZIER(S0)(controlPoints);

var wingsProfile = MAP(c0)(domain1);

DRAW(wingsProfile);

var p1 = controlPoints.map(function (p){return [p[0]+4,p[1],p[2]]});

var c1 = BEZIER(S0)(p1);

var domain2 = DOMAIN([[0,1],[0,1]])([10,10]);

var wingMapping = BEZIER(S1)([c0,c1]);
var wing = MAP(wingMapping)(domain2);

DRAW(wing);


var secondWing = T([1,2])([-0.5,2])(wing);
DRAW(secondWing);


var steccaControlPoints = [[0,0.1,0],[0.1,0,0],[0,-0.1,0],[-0.1,0,0],[0,0.1,0]];
var c3 = BEZIER(S0)(steccaControlPoints);
var steccaControlPoints = steccaControlPoints.map(function (p){return [p[0],p[1]-0.5,p[2]+1.82]});
var c4 = BEZIER(S0)(steccaControlPoints);
var steccaMapping = BEZIER(S1)([c3,c4]);
var stecca = MAP(steccaMapping)(domain2);

var steccaTraslata = T([0,1,2])([3.3,0.3,0.35])(stecca);
DRAW(steccaTraslata);

var steccaControlPoints = [[0,0.1,-0.05],[0.1,0,0],[0,-0.1,0],[-0.1,0,0],[0,0.1,-0.05]];
var c3 = BEZIER(S0)(steccaControlPoints);
var steccaControlPoints = steccaControlPoints.map(function (p){return [p[0],p[1]-0.5,p[2]+1.91]});
var c4 = BEZIER(S0)(steccaControlPoints);
var steccaMapping = BEZIER(S1)([c3,c4]);
var stecca = MAP(steccaMapping)(domain2);

var steccaTraslata = T([0,1,2])([3.3,1.3,0.22])(stecca);
DRAW(steccaTraslata);

