//How would you merge two sorted array?

function mergeSorted(a, b){
    let merged = []
    let aElm = a[0]
    let bElm = b[0]
    let i = 1;
    let j = 1;

    if(a.length == 0){
        return b;
    }

    if(b.length == 0){
        return a;
    }

    while(aElm || bElm){
        if((aElm && !bElm) || aElm < bElm){
            merged.push(aElm)
            aElm = a[i++]
        } else {
            merged.push(bElm)
            bElm = b[j++]
        }
    }
    return merged;
}

console.log(mergeSorted([2,5,6,9],[1,2,3,29]));