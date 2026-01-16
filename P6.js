//Sum of All Numbers 
function Sum(A) {
  let sum = 0;  
    for (let i = 1; i <= A.length; i++) 
    {  
        sum =sum+i;  
    }
    return sum; 
}
const X=[1, 2, 3, 4];
const result = Sum(X);
console.log(result);