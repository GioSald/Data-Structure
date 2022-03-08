/*
Implement a method to perform basic string compression 
using the counts of repeated characters
*/

function strComp(string){
    let compressed = '';
    let currChar = '';
    let currCount = '';
    let maxCount = 1;
    for(let i = 0; i < string.length; i++){
        if(currChar !== string[i]) {
            console.log(currChar, string[i], i);
            compressed = compressed + currChar + currCount;
            maxCount = Math.max(maxCount, currCount);
            currChar = string[i];
            currCount = 1;
        } else{
            currCount++;
        }
    }
    compressed = compressed + currChar + currCount;
    maxCount = Math.max(maxCount, currCount);
};

console.log('aabcccccaaa', strComp('aabcccccaaa'), 'a2b1c5a3');