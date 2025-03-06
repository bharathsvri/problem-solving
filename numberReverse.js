// let number = 987654321;
// let reverse = 0;

// while(number != 0){
//     let lastDigit = number % 10;
//     reverse = reverse * 10 + lastDigit;
//     number = Math.floor(number/10);
// }

// console.log(reverse);

let number = 12;
let arr = [];

while(number != 0){
    let lastDigit = number % 10;
    arr.push(lastDigit);
    number = Math.floor(number / 10);
}
console.log(arr);
let tempNumber = 0;
for(let i=0;i<arr.length;i++){
    tempNumber +=arr[i] * (10** (arr.length-i));
}

console.log(tempNumber/10);