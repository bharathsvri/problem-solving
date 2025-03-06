let arr1 = [5,16,20];
let arr2 = [14,89,26];

let mergeArr = [...arr1,...arr2]

let sortArr = mergeArr.sort((a,b)=> a-b);

let median;

if(sortArr.length%2 == 0){
    median = (sortArr[sortArr.length/2] + sortArr[(sortArr.length/2)-1])/2;
}else{
    median = sortArr[Math.floor(sortArr.length/2)];
}




console.log(sortArr);
console.log(median);
