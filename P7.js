//Find Even Numbers
function Find_Even(A) {
    let even_numbers = [];
    for (let i = 0; i < A.length; i++) {
        if (A[i] % 2 === 0) 
        {
            even_numbers.push(A[i]);
        }   
    }    
    return even_numbers;
}

const array = [1, 2, 3, 4, 5, 6];
const even = Find_Even(array);
console.log(even);