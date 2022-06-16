const inputStrings = process.argv.slice(2);

const reverseString = function(str) {
  let reverseStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str[i];
  }
  return reverseStr;
}

const reverseStrings = function(strArr) {
  let reverseStrArr = [];
  for (let str of strArr) {
    reverseStrArr.push(reverseString(str));
  }
  return reverseStrArr;
}

let outputStrings = reverseStrings(inputStrings);

for (let i = 0; i < outputStrings.length; i++) {
  console.log(outputStrings[i]);
}