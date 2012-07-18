/*
function getRailBase(p,hs,lenBase,h,offset){

		var lenBase = lenBase - 0.005;
		var hs = hs;
		var h = h;

		domain2D = DOMAIN([[0,1],[0,1]])([20,1]);

		// hs**p

		var corner1 = BEZIER(S0)([[0.0025*p,0.0025*p,(hs+offset)*p],
								 [-0.0025*p,-0.0025*p,(0.0025+hs)*p],
								 [0.0025*p,0.0025*p,(0.005+hs+offset)*p]]);
		var corner2 = BEZIER(S0)([[0.0025*p,(lenBase+0.0025)*p,(hs+h-offset)*p],
								 [-0.0025*p,(lenBase+0.0075)*p,(0.0025+hs+h)*p],
								 [0.0025*p,(lenBase+0.0025)*p,(0.005+hs+h-offset)*p]]);
		var corner3 = BEZIER(S0)([[0.0375*p,0.0025*p,(hs+offset)*p],
								 [(0.0075+0.035)*p,-0.0025*p,(0.0025+hs)*p],
								 [0.0375*p,0.0025*p,(0.005+hs+offset)*p]]);
		var corner4 = BEZIER(S0)([[0.0375*p,(lenBase+0.0025)*p,(hs+h-offset)*p],
								 [(0.0075+0.035)*p,(lenBase+0.0075)*p,(0.0025+hs+h)*p],
								 [0.0375*p,(lenBase+0.0025)*p,(0.005+hs+h-offset)*p]]);


		var rail = STRUCT([
					MAP(BEZIER(S1)([corner1,corner2]))(domain2D),
					MAP(BEZIER(S1)([corner3,corner1]))(domain2D),
					MAP(BEZIER(S1)([corner3,corner4]))(domain2D),
					MAP(BEZIER(S1)([corner2,corner4]))(domain2D),

					TRIANGLE_DOMAIN(1,[[0,0,(hs)*p],[0.04*p,0,(hs)*p],[0.04*p,(lenBase+0.005)*p,(hs+h)*p]]), //copertura sotto
					TRIANGLE_DOMAIN(1,[[0,0,(hs)*p],[0,(lenBase+0.005)*p,(hs+h)*p],[0.04*p,(lenBase+0.005)*p,(hs+h)*p]]),
					TRIANGLE_DOMAIN(1,[[0.0025*p,0.0025*p,(0.005+hs+offset)*p],[0.0025*p,(lenBase+0.0025)*p,(0.005+hs+h-offset)*p],
										[0.0375*p,(lenBase+0.0025)*p,(0.005+hs+h-offset)*p]]), //copertura sopra
					TRIANGLE_DOMAIN(1,[[0.0025*p,0.0025*p,(0.005+hs+offset)*p],[0.0375*p,0.0025*p,(0.005+hs+offset)*p],
										[0.0375*p,(lenBase+0.0025)*p,(0.005+hs+h-offset)*p]]),
					// bordo
					TRIANGLE_DOMAIN(1,[[0,0,0],[0,0,hs*p],[0.04*p,0,0]]), //A
					TRIANGLE_DOMAIN(1,[[0.04*p,0,hs*p],[0,0,hs*p],[0.04*p,0,0]]),
					TRIANGLE_DOMAIN(1,[[0.04*p,0,hs*p],[0.04*p,(lenBase+0.005)*p,(hs+h)*p],[0.04*p,0,0]]), //B
					TRIANGLE_DOMAIN(1,[[0.04*p,0,0],[0.04*p,(lenBase+0.005)*p,h*p],[0.04*p,(lenBase+0.005)*p,(hs+h)*p]]),
					TRIANGLE_DOMAIN(1,[[0,(lenBase+0.005)*p,h*p],[0,(lenBase+0.005)*p,(hs+h)*p],[0.04*p,(lenBase+0.005)*p,h*p]]), //C
					TRIANGLE_DOMAIN(1,[[0.04*p,(lenBase+0.005)*p,(hs+h)*p],[0,(lenBase+0.005)*p,(hs+h)*p],[0.04*p,(lenBase+0.005)*p,h*p]]),
					TRIANGLE_DOMAIN(1,[[0,0,hs*p],[0,(lenBase+0.005)*p,(hs+h)*p],[0,0,0]]), //D
					TRIANGLE_DOMAIN(1,[[0,0,0],[0,(lenBase+0.005)*p,h*p],[0,(lenBase+0.005)*p,(hs+h)*p]]),
				]);

    	
		return rail;

    }


	var hs = 0.01777;

var p = 20;
var h = 0.2;
DRAW(getRailBase(p,hs,0.52,h,0.0015));
DRAW(POLYPOINT([[0.0025*p,0.0025*p,hs*p],[-0.0025*p,-0.0025*p,(0.0025+hs)*p],[0.0025*p,0.0025*p,(0.005+hs)*p]]));

//DRAW(getRailBase(p,0.12,[[3.63,1.05,hs],[2.92,1.05,0.16+0.08885]]));

*/


/*    function getRailBase(p,hs, lenBase){

		var lenBase = lenBase - 0.005*2*p;
		var hs = hs;

		domain2D = DOMAIN([[0,1],[0,1]])([5,1]);

		// hs**p

		var corner1 = BEZIER(S0)([[0.0025*p,0.0025*p,hs*p],[-0.0025*p,-0.0025*p,(0.0025+hs)*p],[0.0025*p,0.0025*p,(0.005+hs)*p]]);
		var corner2 = BEZIER(S0)([[0.0025*p,(lenBase+0.0025)*p,hs*p],[-.0025*p,(lenBase+0.0075)*p,(0.0025+hs)*p],[0.0025*p,(lenBase+0.0025)*p,(0.005+hs)*p]]);
		var corner3 = BEZIER(S0)([[0.0375*p,0.0025*p,hs*p],[(0.0075+0.035)*p,-0.0025*p,(0.0025+hs)*p],[0.0375*p,0.0025*p,(0.005+hs)*p]]);
		var corner4 = BEZIER(S0)([[0.0375*p,(lenBase+0.0025)*p,hs*p],[(0.0075+0.035)*p,(lenBase+0.0075)*p,(0.0025+hs)*p],[0.0375*p,(lenBase+0.0025)*p,(0.005+hs)*p]]);


		var rail = STRUCT([
					MAP(BEZIER(S1)([corner1,corner2]))(domain2D),
					MAP(BEZIER(S1)([corner3,corner1]))(domain2D),
					MAP(BEZIER(S1)([corner3,corner4]))(domain2D),
					MAP(BEZIER(S1)([corner2,corner4]))(domain2D),

					TRIANGLE_DOMAIN(1,[[0,0,hs*p],[0.04*p,0,hs*p],[0.04*p,(lenBase+0.005)*p,hs*p]]), //copertura sotto
					TRIANGLE_DOMAIN(1,[[0,0,hs*p],[0,(lenBase+0.005)*p,hs*p],[0.04*p,(lenBase+0.005)*p,hs*p]]),
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

    	/*function mapping(point){
    		return [point[0],point[1],point[2]+];
    	}

		return rail;

    }


	var hs = 0.01777;

var p = 10;
var h = 2;
DRAW(getRailBase(p,hs,1.12,h));

//DRAW(getRailBase(p,0.12,[[3.63,1.05,hs],[2.92,1.05,0.16+0.08885]]));

*/