function CheckPal(A){
    let length=A.length;
    for(let i=0;i<length/2;i++){
        if(A[i]!==A[length-1-i]){
            return false;
        }
        else{
            return true;
        }
    }
}

const test_result=CheckPal("hello");
console.log(test_result);