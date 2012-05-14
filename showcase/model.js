// BISHOP

// dominio rotazione
var domain = DOMAIN([[0,1],[0,2*PI]])([50,50]);
var littleDomain = DOMAIN([[0,1],[0,2*PI]])([1,50]);
var detailedDomain = DOMAIN([[0,1],[0,2*PI]])([60,60]);

// base
var ctrlPoints = [[2.3,0,0],[2.3,0,0.4]];
var profile = BEZIER(S0)(ctrlPoints);
var mapping = ROTATIONAL_SURFACE(profile);
var base = MAP(mapping)(domain);

// bottom
var ctrlPoints = [[0,0,0],[2.3,0,0]];
var profile = BEZIER(S0)(ctrlPoints);
var mapping = ROTATIONAL_SURFACE(profile);
var bottom = MAP(mapping)(littleDomain);

// part01
ctrlPoints = [[2.3,0,0.4],[2.1,0,0.6]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part01 = MAP(mapping)(littleDomain);

// part02
ctrlPoints = [[2.1,0,0.6],[2.7,0,1],[1.5,0,1.4],[1.5,0,2.4]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part02 = MAP(mapping)(domain);

// part03
ctrlPoints = [[1.5,0,2.4],[1.3,0,2.6]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part03 = MAP(mapping)(littleDomain);

// part04
ctrlPoints = [[1.3,0,2.6],[0.9,0,3.5],[0.8,0,5.2]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part04 = MAP(mapping)(domain);

// part05
ctrlPoints = [[0.8,0,5.2],[1.5,0,5.2],[1.5,0,5.2],[1.7,0,6],[1.1,0,6]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part05 = MAP(mapping)(domain);

// part06
ctrlPoints = [[1.1,0,6],[1.1,0,6.25],[1.1,0,6.25],[0.9,0,6.4],[0.6,0,6.4],[1.35,0,6.4],[1,0,6.7]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part06 = MAP(mapping)(domain);

// part07 con "taglio"
ctrlPoints = [[1,0,6.7],[1.9,0,7.7],[0.5,0,8.7],[0.4,0,9.5]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part07 = MAP(mapping)(detailedDomain);

var cut = function (p) {

	var x = p[0];
	var y = p[1];
	var z = p[2];

	if ( x>0 && x<0.85 && z>(1.2+6.7) && z<(2.4+6.7)){
		if (z<=(8.1-x))
			return p;
		else if ((x+1+6.7)>=z)
			return p;
		else if ((x+1.4+6.7)<=z)
			return p;
		else if ((x+1.2+6.7)>=z && x>=0.2)
			return [0.2,y,1.2+6.7];
		else if ((x+1.2+6.7)<z && z>=1.4+6.7)
			return [0,y,1.4+6.7];
		else
			return [z-1.4-6.7,y,x+1+6.7];
	}

	return p;

}

part07 = MAP(cut)(part07);

// part08
ctrlPoints = [[0.4,0,9.5],[0.7,0,9.7],[0.65,0,10.15],[0,0,10.18]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part08 = MAP(mapping)(domain);

var scmodel = STRUCT([base,bottom,part01,part02,part03,part04,part05,part06,part07,part08]);
scmodel = COLOR([128/255,128/255,128/255])(scmodel);
scmodel = S([0,1,2])([0.5,0.5,0.5])(scmodel);
