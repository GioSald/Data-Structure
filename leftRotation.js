
function rotLeft(a,d) { 
    let result = a.slice(d).concat(a.slice(0,d)) 
    return result 
}

console.log(rotLeft(5,4));