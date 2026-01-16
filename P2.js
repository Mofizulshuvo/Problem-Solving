function count(A) {
  A = A.toLowerCase();
  let count_vowl = 0;
  for (let i = 0; i < A.length; i++) {
    if (A[i] === "a" || A[i] === "e" || A[i] === "i" || A[i] === "o" || A[i] === "u") 
     {
      count_vowl = count_vowl + 1;
     }
  }
  return count_vowl;
}
const output = count("programming");
console.log(output); 
