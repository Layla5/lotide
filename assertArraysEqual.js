const eqArrays = require("./eqArrays");
const assertArraysEqual = function(arr1, arr2) {
	let actual = eqArrays(arr1, arr2);
	if (actual === true) console.log(`✅✅✅ Assertion Passed: ${actual} === ${true}`);
	else console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${true}`);
	
};

module.exports = assertArraysEqual;
