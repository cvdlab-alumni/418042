/*
	Exercise 1
	Produce the model of a single wing in a local coordinate system.
*/



var wing = STRUCT([]);

var domain1 = INTERVALS(1)(100);
var domain2 = DOMAIN([[0,1],[0,1]])([10,10]);

var controlPoints = [[0,1.8,0],[0,0.6,0.35],[0,0.7,0.3],[0,-0.8,-0.15],[0,-0.1,0],
					[0,0,0.75],[0,0.4,0.3],[0,1,0.45],[0,1.3,0.2],[0,1.8,0]];

var c0 = BEZIER(S0)(controlPoints);
var p1 = controlPoints.map(function (p){return [p[0]+4,p[1],p[2]]});
var c1 = BEZIER(S0)(p1);

var wingMapping = BEZIER(S1)([c0,c1]);

wing = MAP(wingMapping)(domain2);

var p01 = [[0,1.8,0],[0,0.6,0.35],[0,0.7,0.3],[0,1,0.22],[0,1,0.22]];
var c01 = BEZIER(S0)(p01);
var cover = BEZIER(S1)([c0,c01]);
cover = MAP(cover)(domain2);
cover = T([0])([4])(cover);

wing = STRUCT([wing,cover]);

var secondWing = T([1,2])([-0.5,2])(wing);
wing = STRUCT([wing,secondWing]);

wing = COLOR([207/255,181/255,59/255])(wing);



var steccaControlPoints = [[0,0.1,0],[0.1,0,0],[0,-0.1,0],[-0.1,0,0],[0,0.1,0]];
var c3 = BEZIER(S0)(steccaControlPoints);
var steccaControlPoints = steccaControlPoints.map(function (p){return [p[0],p[1]-0.5,p[2]+1.82]});
var c4 = BEZIER(S0)(steccaControlPoints);
var steccaMapping = BEZIER(S1)([c3,c4]);
var stecca = MAP(steccaMapping)(domain2);

var steccaTraslata = T([0,1,2])([3.3,0.3,0.35])(stecca);
steccaTraslata = COLOR([84/255,84/255,84/255])(steccaTraslata);
wing = STRUCT([wing,steccaTraslata]);

var steccaControlPoints = [[0,0.1,-0.05],[0.1,0,0],[0,-0.1,0],[-0.1,0,0],[0,0.1,-0.05]];
var c3 = BEZIER(S0)(steccaControlPoints);
var steccaControlPoints = steccaControlPoints.map(function (p){return [p[0],p[1]-0.5,p[2]+1.91]});
var c4 = BEZIER(S0)(steccaControlPoints);
var steccaMapping = BEZIER(S1)([c3,c4]);
var stecca = MAP(steccaMapping)(domain2);

var steccaTraslata = T([0,1,2])([3.3,1.3,0.22])(stecca);
steccaTraslata = COLOR([84/255,84/255,84/255])(steccaTraslata);
wing = STRUCT([wing,steccaTraslata]);

DRAW(wing);
