/*
	Exercise 3
	Produce the model of horizontal and vertical stabilizers (local coordinate system).
*/

var domain1 = INTERVALS(1)(100);
var domain2 = DOMAIN([[0,1],[0,1]])([30,30])

var p0 = [[0,0,0],
	[1.6,0,0],[1.6,0,0],[1.6,0,0],[1.6,0,0],[1.6,0,0],[1.6,0,0],[1.6,0,0],[1.6,0,0],[1.6,0,0],
	[1.4,1,0],[1.4,1,0],[1.4,1,0],[1.4,1,0],[1.4,1,0],[1.4,1,0],[1.4,1,0],[1.4,1,0],[1.4,1,0],
	[0.4,1,0],[0.4,1,0],[0.4,1,0],[0.4,1,0],[0.4,1,0],[0.4,1,0],[0.4,1,0],[0.4,1,0],[0.4,1,0],
	[0,0.6,0],[0,0.6,0],[0,0.6,0],[0,0.6,0],[0,0.6,0],[0,0.6,0],[0,0.6,0],[0,0.6,0],
	[0,0,0]];
var c0 = BEZIER(S0)(p0);
var p1 = p0.map(function (p) {return [p[0],p[1],p[2]+0.1]});
var c1 = BEZIER(S0)(p1);
var stabilizersMapping = BEZIER(S1)([c0,c1]);
var stabilizers = MAP(stabilizersMapping)(domain2);
var c01 = [0,0,0];
var c02 = [0,0,0.1];
cover1 = BEZIER(S1)([c01,c0]);
cover2 = BEZIER(S1)([c02,c1]);
cover1 = MAP(cover1)(domain2);
cover2 = MAP(cover2)(domain2);
var orizontalStabilizers = STRUCT([stabilizers,cover1,cover2]);
var secondStab = R([0,2])(PI)(orizontalStabilizers);
secondStab = T([2])([0.1])(secondStab);
orizontalStabilizers = STRUCT([orizontalStabilizers,secondStab]);
//vertical
var p0 = [[0,0,0],
	[0,-0.3,0.3],[0,-0.3,0.3],[0,-0.3,0.3],[0,-0.3,0.3],
	[0,1.1,1.1],[0,1.1,1.1],[0,1.1,1.1],[0,1.1,1.1],[0,1.1,1.1],
	[0,3,1],
	[0,1.2,-0.8],[0,1.2,-0.8],
	[0,0,0]];
var c0 = BEZIER(S0)(p0);
var p1 = p0.map(function (p) {return [p[0]+0.1,p[1],p[2]]});
var c1 = BEZIER(S0)(p1);
var stabilizersMapping = BEZIER(S1)([c0,c1]);
var stabilizers = MAP(stabilizersMapping)(domain2);
var c01 = [0,0,0];
var c02 = [0.1,0,0];
cover1 = BEZIER(S1)([c01,c0]);
cover2 = BEZIER(S1)([c02,c1]);
cover1 = MAP(cover1)(domain2);
cover2 = MAP(cover2)(domain2);
var stabilizers = STRUCT([stabilizers,cover1,cover2]);
stabilizers = T([0])([-0.05])(stabilizers);
stabilizers = STRUCT([stabilizers,orizontalStabilizers]);

stabilizers = COLOR([207/255,181/255,59/255])(stabilizers);

DRAW(stabilizers);