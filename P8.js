//Capitalize First Letter
function First_Capital(word) {
  const length = word.length;
  let result = "";
  for (let i = 0; i < length; i++) {
    if (i === 0) {
      result = result + word[i].toUpperCase();
    } else {
      result = result + word[i];
    }
  }
    return result;
}
const input = "hello world";
const output = First_Capital(input);
console.log(output);
