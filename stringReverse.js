const reverseString = (username) =>{
    let name = username;
    let updateName = ''

    for(let i=name.length-1;i>=0;i--){
        updateName += name[i];
    }

    console.log(updateName);
}

// reverseString("bharath");
// reverseString("siva");
reverseString("vimala");