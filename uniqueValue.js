let arr = [1,2,2,5];
let unique = [];

for(let i = 0; i<arr.length; i++){
    let duplicate = false;
    for(let j=0; j<unique.length;j++){
        if(arr[i] == unique[j]){
            duplicate=true;
            break;
        }
    }
    if(!duplicate){
        unique.push(arr[i]);
    }
}

console.log(unique);