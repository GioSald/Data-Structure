//Longest Substring Without Repeating Characters

function commonPrefix(str){
    if(!str.length){
        return '';
    }

    for(let i = 0; i < str[0].length; i++){
        for(let s of str){
            console.log("string 0 1");
            console.log(str[0][i]);
            if(s[i] !== str[0][i]){
                return s.slice(0, i)
            }
        }
    }
    return str[0];
};

console.log(commonPrefix(['flor', 'flow', 'florida']));

let arr = ['flor', 'flow', 'florida']
console.log("For in:");
for(let i in arr){
    console.log(i);
}
console.log("For of:");
for(let i of arr){
    console.log(i);
}

