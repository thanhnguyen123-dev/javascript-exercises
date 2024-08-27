const removeFromArray = function(arr, ...args) {
  const res = [];
  
  args.forEach((arg) => {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === arg) {
        arr.splice(i, 1);
        i--; // Adjust index after removal
      }
    }
  });
  
  return arr;
};

// Do not edit below this line
module.exports = removeFromArray;