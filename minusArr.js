let arr1 = [1,2,3,5];
let arr2 = [2,3,4];

let minusArr = [];

for(let i=0; i<arr1.length; i++){
    let same = false;
    for(let j=0; j<arr2.length; j++){
        if(arr1[i] == arr2[j]){
            same = true;
            break;
        }
    }

    if(!same){
        minusArr.push(arr1[i]);
    }
}

console.log(minusArr);