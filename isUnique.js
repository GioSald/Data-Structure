/*
Implemetn an algorithm to determine if a string has all unique characters.
*/

function allUnique(string){
    for(let i = 0; i < string.length; i++){
        for(let j = i +1 ; j < string.length; j++){
            if(string[i] === string[j]){
                return false;
            }
        }
    }
    return true;
}

console.log(allUnique("hoola"));