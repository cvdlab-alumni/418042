//DOMAIN (intervalli)(dominio)
var domain = DOMAIN([[0,2*PI]])([36]);

//riporta il seno di un punto
var mappingSin = function (p) {
	var u = p[0];
	return [u, Math.sin(u)];
}

var mapped = MAP(mappingSin)(domain);

DRAW(mapped);
COLOR([255,0,0])(mapped)