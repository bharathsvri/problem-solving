const largestNumber = (a,b,c) =>{
    let arr = [a,b,c];

    arr.sort((a,b)=> a-b);

    console.log(arr[arr.length-2]);
}

largestNumber(63,12,24);
