//DOMAIN (intervalli)(dominio)
var domain = DOMAIN([[0,1]])([10]);

var mappingBisettrice = function (p) {
	var u = p[0];

	return [u, u];
}

var mapped = MAP(mappingBisettrice)(domain);

DRAW(mapped);