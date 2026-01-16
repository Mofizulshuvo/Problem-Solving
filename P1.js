function Reverse(A) {
  const length = A.length;
  let reversed = "";
  for (let i = length - 1; i >= 0; i--) {
    reversed =reversed+ A[i];
  }
  return reversed;
}
const Result=Reverse("hello");
console.log(Result);