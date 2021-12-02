const middle = function(array) {
	if (array.length % 2 === 0){ // even
			var x = array.length / 2
			return [array[x - 1],array[x]]
	} 
	else
	{
			var x = array.length / 2
			return [array[x + 0.5 - 1]]
	}
}
module.exports = middle;
