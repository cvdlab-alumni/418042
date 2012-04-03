//DOMAIN (intervalli)(dominio)
var domain = DOMAIN([[1,2]])([10]);

//la funzione mapping accetta un punto
// e viene invocata su tutti i punti del dominio
//prende il punto e lo alza di uno su un asse
var mapping = function (p) {
	var u = p[0];

	return [u, 1];
}

var mapped = MAP(mapping)(domain);

DRAW(mapped);

///////////////////////////////////////
//eserzizio sbagliato!!!
var domain2 = DOMAIN([[1,2]])([5]);

var mappingCube = function (p) {

	var u = p[0];

	return [u,u,u];

};

var mapped = MAP(mappingCube)(domain2);

DRAW(mapped);