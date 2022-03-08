
function twoStrings(str1,str2){
    let a = new Set(str1)
    let b = new Set(str2)

    for(let letter of b){
        if(a.has(letter)){
            return 'YES'
        }
    }
    return 'NO'
}