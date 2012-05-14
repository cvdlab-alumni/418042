// BISHOP

// dominio rotazione
var domain = DOMAIN([[0,1],[0,2*PI]])([40,40]);
var littleDomain = DOMAIN([[0,1],[0,2*PI]])([1,40]);
var detailedDomain = DOMAIN([[0,1],[0,2*PI]])([50,50]);

// base
var ctrlPoints = [[1.15,0,0],[1.15,0,0.2]];
var profile = BEZIER(S0)(ctrlPoints);
var mapping = ROTATIONAL_SURFACE(profile);
var base = MAP(mapping)(domain);

// part01
ctrlPoints = [[1.15,0,0.2],[1.05,0,0.3]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part01 = MAP(mapping)(littleDomain);

// part02
ctrlPoints = [[1.05,0,0.3],[1.35,0,0.5],[0.75,0,0.7],[0.75,0,1.2]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part02 = MAP(mapping)(domain);

// part03
ctrlPoints = [[0.75,0,1.2],[0.65,0,1.3]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part03 = MAP(mapping)(littleDomain);

// part04
ctrlPoints = [[0.65,0,1.3],[0.45,0,1.75],[0.4,0,2.6]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part04 = MAP(mapping)(domain);

// part05
ctrlPoints = [[0.4,0,2.6],[0.75,0,2.6],[0.75,0,2.6],[0.85,0,3],[0.55,0,3]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part05 = MAP(mapping)(domain);

// part06
ctrlPoints = [[0.55,0,3],[0.55,0,3.125],[0.55,0,3.125],[0.45,0,3.2],[0.3,0,3.2],[0.675,0,3.2],[0.5,0,3.35]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part06 = MAP(mapping)(domain);

// part07 con "taglio"
ctrlPoints = [[0.5,0,3.35],[0.95,0,3.85],[0.25,0,4.35],[0.2,0,4.75]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part07 = MAP(mapping)(detailedDomain);

var cut = function (p) {

	var x = p[0];
	var y = p[1];
	var z = p[2];

	if ( x>0 && x<0.425 && z>(3.95) && z<(4.55)){
		if (z<=(4.05-x))
			return p;
		else if ((x+3.85)>=z)
			return p;
		else if ((x+4.05)<=z)
			return p;
		else if ((x+3.95)>=z && x>=0.1)
			return [0.1,y,3.95];
		else if ((x+3.95)<z && z>=4.05)
			return [0,y,4.05];
		else
			return [z-4.05,y,x+3.85];
	}

	return p;

}

part07 = MAP(cut)(part07);

// part08
ctrlPoints = [[0.2,0,4.75],[0.35,0,4.75],[0.325,0,5.075],[0,0,5.09]];
profile = BEZIER(S0)(ctrlPoints);
mapping = ROTATIONAL_SURFACE(profile);
var part08 = MAP(mapping)(domain);

var scmodel = STRUCT([base,part01,part02,part03,part04,part05,part06,part07,part08]);