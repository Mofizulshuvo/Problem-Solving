//Find Max
function Maximum(A) {
  let max = A[0];
  for (let i = 1; i < A.length; i++) {
    if (A[i] > max) {
      max = A[i];
    }
  }
  return max;
}
const X = [5,1,9,3];
const output = Maximum(X);
console.log(output);