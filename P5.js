//Remove Duplicates from an Array
function Remove_Duplicates(A) {
  let B = [];
    for (let i = 0; i < A.length; i++) {
        if (!B.includes(A[i])) {
            B.push(A[i]);
        }
    }       
    return B;
}
const array = [1, 2, 2, 3, 4, 4];
const result = Remove_Duplicates(array);
console.log(result);  