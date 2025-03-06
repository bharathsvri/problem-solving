let arr1 = [40,30,20,10];
let arr2 = [10,20];

let mergeArr = [...arr1,...arr2];
let removeDuplicate = [];

for(let i=0; i<mergeArr.length; i++){
    let duplicate = false;
    for(let j=0; j<removeDuplicate.length; j++){
        if(mergeArr[i] == mergeArr[j]){
            duplicate = true;
            break;
        }
    }

    if(!duplicate){
        removeDuplicate.push(mergeArr[i]);
    }
}

for(let i=0; i<removeDuplicate.length; i++){
    for(let j=i+1; j<removeDuplicate.length;j++){
        if(removeDuplicate[i] > removeDuplicate[j]){
            let temp = removeDuplicate[i];
            removeDuplicate[i]=removeDuplicate[j];
            removeDuplicate[j]=temp;
        }
    }
}

console.log(mergeArr);
console.log(removeDuplicate);