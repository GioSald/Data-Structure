/*
Write a method to replace all spaces in s string with
%20 you may assume that the string 
*/

function urlify(str, len){
    let s = "";
    let totalSpaces = str.length - len
    let frontSapces = 0
    let flag = false
    for(let i = 0; i < str.length; i++){
        if(flag === false){
            if(str[i] === " ")frontSapces++;
            else flag = true;
        }
        if(flag === true && i < str.length - (totalSpaces - frontSapces)){
            if(str[i] === " ") s += "%20";
            else s+= str[i];
        }
    }
    return s;
}

console.log(urlify("Mr John Smith ", 14));