const sumAll = function(x, y) {
  if (x < 0 || y < 0) return "ERROR";
  if (!Number.isInteger(x) || !Number.isInteger(y)) 
    return "ERROR";
  if (x>y) {
    [x,y] = [y,x]
  }
  total = 0;
  for (let i = x; i <= y; i++) {
    total += i;
  }
  return total;

};

// Do not edit below this line
module.exports = sumAll;
