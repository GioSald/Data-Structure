//How would you remove duplicate members from an array

function removeDuplicate(arr){
    let exists = {}
    let outArr = []
    let elm;

    for(let i = 0; i < arr.length; i++){
        elm = arr[i];
        if(!exists[elm]){
            outArr.push(elm);
            exists[elm] = true
        }
    }
    return outArr;
}
console.log(removeDuplicate([1,2,3,4,5,5,3,1]));