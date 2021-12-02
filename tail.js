const assertEqual = require("./assertEqual");

const tail = function(p1) {
  if (p1 === undefined) {
    return 'undefined';
  } else if (p1.length === 1 || p1.length === 0) {
    return [];
  } /* The function returns the product of p1 and p2 */ else {
    return p1.slice(1, p1.length);
  }// The function returns the product of p1 and p2
};
module.exports = tail;
