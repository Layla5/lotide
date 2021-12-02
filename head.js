const assertEqual = require('./assertEqual');

function head(p1) {
	if(p1.length < 1 || p1 == undefined){
			return 'undefined';
	} else {
			return p1[0];
	}// The function returns the product of p1 and p2
}
module.exports = head;
