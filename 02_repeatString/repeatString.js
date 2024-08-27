const repeatString = function(string, num) {
  let res = "";
  if (num < 0 && string.length != 0) return "ERROR";
  if (num == 0) return "";
  for (let i = 0; i < num;i++) {
    res += string;
  }
  return res;
};

// Do not edit below this line
module.exports = repeatString;
