let nums = [1,2,3,4,5,6,7];
let k = 3;

let myarr = nums;
for(let i=0; i<k; i++){
    myarr.unshift(nums[nums.length-1]);
    myarr.pop();
}
console.log(myarr);