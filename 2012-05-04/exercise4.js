/*
	Exercise 4
	Assemble the various assemblies and/or subassemblies into a single model.
*/

//
// WING
//
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

otherWing = S([0])([-1])(wing);

//
// FUSELAGE
//
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
var domain2 = DOMAIN([[0,1],[0,1]])([50,50]);
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
var p8 = tailControlPoints.map(function (p) {return [p[0]*0.65,p[1]+6.4,p[2]*0.65+0.4]});
var c8 = BEZIER(S0)(p8);
var bodyMapping = BEZIER(S1)([c7,c8]);
var body = MAP(bodyMapping)(domain3);
body = COLOR([207/255,181/255,59/255])(body);
fuselage = STRUCT([fuselage,body]);
//tail
var p9 = [[0,0,-1],[0.5,0,0],[0,0,1],[-0.5,0,0],[0,0,-1],];
p9 = p9.map(function (p) {return [p[0]*0.4,p[1]+11,p[2]*0.4+0.6]});
var c9 = BEZIER(S0)(p9);
var tailMapping = BEZIER(S1)([c8,c9]);
var tail = MAP(tailMapping)(domain3);
tail = COLOR([207/255,181/255,59/255])(tail);
fuselage = STRUCT([fuselage,tail]);
fuselage = S([0,1,2])([0.7,0.7,0.7])(fuselage);
// elica
var e1 = [[-0.005,0,0],[-0.3,0,-2.5],[0,0,-3.5],[0.3,0,-2.5],[0.005,0,0],[-0.005,0,0]];
var e12 = [[0,0,0]];
var ce1 = BEZIER(S0)(e1);
var ce12 = BEZIER(S0)(e12);
var e2 = e1.map(function (p) {return [p[0],p[1]+0.2,p[2]]});
var e22 = [[0,0,0]];
var ce2 = BEZIER(S0)(e2);
var ce22 = BEZIER(S0)(e22);
var elicaMapping = BEZIER(S1)([ce1,ce2]);
var coverElica1 = BEZIER(S1)([ce1,ce12]);
var coverElica2 = BEZIER(S1)([ce2,ce22]);
var elica = MAP(elicaMapping)(domain2);
var elicaCover1 = MAP(coverElica1)(domain2);
var elicaCover2 = MAP(coverElica2)(domain2);
var elica = STRUCT([elica,elicaCover1,elicaCover2]);
elica = COLOR([84/255,84/255,84/255])(elica);
elica = T([1])([-0.9])(elica);
var secondaElica = R([0,2])(PI)(elica);
elica = STRUCT([elica,secondaElica]);


fuselage = STRUCT([fuselage,elica]);
fuselage = T([2])([0.5])(fuselage);


// timone

var domain1 = INTERVALS(1)(50);
var domain2 = DOMAIN([[0,1],[0,1]])([50,50])
var domain3 = DOMAIN([[0,1],[0,1],[0,1]])([20,20,1])
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

stabilizers = T([1,2])([7,1])(stabilizers);

DRAW(wing);
DRAW(otherWing);
DRAW(fuselage);
DRAW(stabilizers);
