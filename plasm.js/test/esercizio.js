/*
function getRailBase(p,hs,lenBase,h){

		var lenBase = lenBase - 0.005*2*p;
		var hs = hs;
		var h = h;

		domain2D = DOMAIN([[0,1],[0,1]])([5,1]);

		var rotate = Math.asin(h/(Math.sqrt(Math.pow(h,2)+Math.pow(lenBase,2))));

		console.log(rotate);
		var corner1 = BEZIER(S0)([[0.0025*p,(0.0025-Math.cos(rotate)*PI/360)*p,(hs+Math.cos(rotate)*PI/360)*p],
								 [-0.0025*p,(-0.0025-Math.cos(rotate)*PI/360)*p,(0.0025+hs+Math.cos(rotate)*PI/360)*p],
								 [0.0025*p,(0.0025-Math.cos(rotate)*PI/360)*p,(0.005+hs+Math.cos(rotate)*PI/360)*p]]);
		var corner2 = BEZIER(S0)([[0.0025*p,(lenBase+0.0025)*p,(hs+h)*p],[-.0025*p,(lenBase+0.0075)*p,(0.0025+hs+h)*p],[0.0025*p,(lenBase+0.0025)*p,(0.005+hs+h)*p]]);
		var corner3 = BEZIER(S0)([[0.0375*p,0.0025*p,hs*p],[(0.0075+0.035)*p,-0.0025*p,(0.0025+hs)*p],[0.0375*p,0.0025*p,(0.005+hs)*p]]);
		var corner4 = BEZIER(S0)([[0.0375*p,(lenBase+0.0025)*p,(hs+h)*p],[(0.0075+0.035)*p,(lenBase+0.0075)*p,(0.0025+hs+h)*p],[0.0375*p,(lenBase+0.0025)*p,(0.005+hs+h)*p]]);
 

		var rail = STRUCT([
					MAP(BEZIER(S1)([corner1,corner2]))(domain2D),
					MAP(BEZIER(S1)([corner3,corner1]))(domain2D),
					MAP(BEZIER(S1)([corner3,corner4]))(domain2D),
					MAP(BEZIER(S1)([corner2,corner4]))(domain2D),

					TRIANGLE_DOMAIN(1,[[0,0,hs*p],[0.04*p,0,hs*p],[0.04*p,(lenBase+0.005)*p,(hs+h)*p]]), //copertura sotto
					TRIANGLE_DOMAIN(1,[[0,0,hs*p],[0,(lenBase+0.005)*p,(hs+h)*p],[0.04*p,(lenBase+0.005)*p,(hs+h)*p]]),
					TRIANGLE_DOMAIN(1,[[0.0025*p,0.0025*p,(0.005+hs)*p],[0.0025*p,(lenBase+0.0025)*p,(0.005+hs)*p],
										[0.0375*p,(lenBase+0.0025)*p,(0.005+hs)*p]]), //copertura sopra
					TRIANGLE_DOMAIN(1,[[0.0025*p,0.0025*p,(0.005+hs)*p],[0.0375*p,0.0025*p,(0.005+hs)*p],
										[0.0375*p,(lenBase+0.0025)*p,(0.005+hs)*p]]),
					// bordo
					TRIANGLE_DOMAIN(1,[[0,0,0],[0,0,hs*p],[0.04*p,0,0]]), //A
					TRIANGLE_DOMAIN(1,[[0.04*p,0,hs*p],[0,0,hs*p],[0.04*p,0,0]]),
					TRIANGLE_DOMAIN(1,[[0.04*p,0,hs*p],[0.04*p,(lenBase+0.005)*p,hs*p],[0.04*p,0,0]]), //B
					TRIANGLE_DOMAIN(1,[[0.04*p,0,0],[0.04*p,(lenBase+0.005)*p,0],[0.04*p,(lenBase+0.005)*p,hs*p]]),
					TRIANGLE_DOMAIN(1,[[0,(lenBase+0.005)*p,0],[0,(lenBase+0.005)*p,hs*p],[0.04*p,(lenBase+0.005)*p,0]]), //C
					TRIANGLE_DOMAIN(1,[[0.04*p,(lenBase+0.005)*p,hs*p],[0,(lenBase+0.005)*p,hs*p],[0.04*p,(lenBase+0.005)*p,0]]),
					TRIANGLE_DOMAIN(1,[[0,0,hs*p],[0,(lenBase+0.005)*p,hs*p],[0,0,0]]), //D
					TRIANGLE_DOMAIN(1,[[0,0,0],[0,(lenBase+0.005)*p,0],[0,(lenBase+0.005)*p,hs*p]]),
				]);

    	
		return rail;

    }


var hs = 0.01777;
var p = 20;
var h = 0.2;

DRAW(getRailBase(p,hs,0.52,h));

*/

//POLYPOINT

/*

var domain = INTERVALS(1)(20);
var controls = [[0,0],[-1,2],[1,4],[2,3],[1,1],[1,2],[2.5,1],[2.5,3],[4,4],[5,0]];
var nubs = NUBS(S0)(3)([0,0,0,0,1,2,3,4,5,6,7,7,7,7])(controls);
var model = MAP(nubs)(domain);
DRAW(model);
DRAW(POLYPOINT(controls));

var controls = [[0,0],[-1,2],[1,4],[2,3],[1,1],[1,2],[2.5,1],[2.5,3],[4,4],[5,0]];
var knots = [0,0,0,0,1,2,3,4,5,6,7,7,7,7];
var nubspline = NUBSPLINE(3)(knots)(controls);
DRAW(nubspline);
DRAW(POLYPOINT(controls));

//CERCHIO
var _p = Math.sqrt(2)/2.0;
var controls = [[-1,0,1], [-_p,_p,_p], [0,1,1], [_p,_p,_p],[1,0,1], [_p,-_p,_p], [0,-1,1], [-_p,-_p,_p], [-1,0,1]];
var knots = [0,0,0,1,1,2,2,3,3,4,4,4];
var nurbs = NURBSPLINE(2)(knots)(controls);
DRAW(nurbs);
DRAW(POLYPOINT(controls));
*/

/*
var domain = PROD1x1([INTERVALS(1)(20),INTERVALS(1)(6)]);
var ncpVector = [0,0,1];
var funProfile = BEZIER(S0)([[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0]]);
var out = MAP(CYLINDRICAL_SURFACE(funProfile)(ncpVector))(domain);
DRAW(out); 



var dom1D = INTERVALS(1)(1);
var Su0 = BEZIER(S0)([[1,0,0],[1,0,3]]);
var curve0 = MAP(Su0)(dom1D);
DRAW(COLOR([0,0,1])(curve0));

var p = 10;
var controls = [
		[0*p,0*p],
		[0*p,0.035*p],[0*p,0.035*p],
		[0.005*p,0.035 *p],
		[0.005*p,0.03*p],[0.005*p,0.03*p],[0.005*p,0.03*p],[0.005*p,0.03*p],
		[0.014*p,0.03*p]
		];

DRAW(COLOR([1,0,0])(POLYPOINT([[0,0.035*p]])));

DRAW(POLYPOINT(controls));
var Su1 = BEZIER(S0)(controls);
var curve0 = MAP(Su1)(dom1D);
DRAW(COLOR([1,0,1])(curve0));

var Su1 = BEZIER(S1)(controls);

var dom2D = DOMAIN([[0,1],[0,1]])([1,12]);
var out = MAP(PROFILEPROD_SURFACE([Su0,Su1]))(dom2D);
DRAW(out); 

*/
/*
	var p = 10;
//	var mappingStepLarge = BEZIER(S0)([[0,0,1*p],[1,0,1.28*p]]);
//	var mappingStepLittle = BEZIER(S0)([[1,0,0],[1,0,0.28*p]]);

	var controlsStep = [
			[0*p,0*p,0.014*p],
			[0*p,0.035*p,0.014*p],[0*p,0.035*p,0.014*p],
			[0*p,0.035*p,0.009*p],
			[0*p,0.03*p,0.009*p],[0*p,0.03*p,0.009*p],[0*p,0.03*p,0.009*p],[0*p,0.03*p,0.009*p],
			[0*p,0.03*p,0*p]
		];

	var stepProfile = BEZIER(S0)(controlsStep);

//	var domain2D = DOMAIN([[0,1],[0,1]])([1,12]);
//	var step = MAP(PROFILEPROD_SURFACE([mappingStepLarge,stepProfile]))(domain2D);
//	DRAW(step); 

var domain = DOMAIN([[0,1],[0,1]])([10,1]);
var ncpVector = [2,0,0];

var out = MAP(CYLINDRICAL_SURFACE(stepProfile)(ncpVector))(domain);
DRAW(out);
*/