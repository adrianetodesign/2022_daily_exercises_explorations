const inputStrings = process.argv.slice(2);

const pigLatinString = function(str) {
  let translatedStr = "";
  firstChar = str[0];
  lastChars = str.slice(1);

  return translatedStr = lastChars + firstChar + "ay";
}

console.log(pigLatinString(inputStrings[0]));