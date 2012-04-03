

var drawCircle = function (r,n){
	var domain = DOMAIN([[0,2*PI]])([n]);
	var mappingCircle = function (p) {
		var u = p[0];
		return [r*COS(u), r*SIN(u)];
	};
	
	var mapped = MAP(mappingCircle)(domain);
	COLOR([255,0,0])(mapped);
	DRAW(mapped);
	COLOR([255,0,0])(mapped);
};

var drawCircle = function(r,n) {
 var dominioCircle = DOMAIN([[0,2*PI]])([n]);

 var mappingCircle = function(p) {
  var u = p[0];
  return [r * COS(u), r * SIN(u)];
 };

 var mappedCircle = MAP(mappingCircle)(dominioCircle);
 DRAW(mappedCircle);
};



var drawCylinder = function (r,h,m,n){

	var domainHeight = DOMAIN([[0,2*PI],[0,m]])([n,n]);

	var mappingCylinder = function(r,h) {
		var u = r[0];
		return [r*SIN(u),r*COS(u),h];
	}

	var mapped = MAP(mappingCylinder)(domainHeight);



}