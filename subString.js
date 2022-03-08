//How can you match substring of a sting

function subStringFinder(str, subStr){
    let idx = 0;
    let i = 0;
    let j = 0;
    let len = str.length;
    let subLen = subStr.length;

    for(let i = 0; i < str.length; i++){
        if(str[i] == subStr[j]){
            j++
        } else {
            j = 0
        }
        if(j==0){
            idx = i;
        } else if(j==subLen){
            return idx
        }
    }
    return -1;
}