//How will you remove duplicate characters from a siting

function removeDuplicateChar(str){
    let len = str.length;
    let char;
    let charCount = {};
    let newStr = [];

    for(let i = 0; i < len; i++){
        char = str[i];
        if(charCount[char]){
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for(let j in charCount){
        if(charCount[j] == 1){
            newStr.push(j)
        }
    }
    return newStr.join('')
}

console.log(removeDuplicateChar('Learn more javascript dude'));