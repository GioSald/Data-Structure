//How would you reverse a string in JavaScript

//-------TRY ONE--------//

function reverse(str){
    let rtnStr = '';

    for(let i = str.length -1; i >= 0; i--){
        rtnStr += str[i]
    }
    return rtnStr;
}

console.log(reverse('hola'));

//-------TRY TWO--------//
function reverseTwo(str){
    let rtnStr = [];
    if(!str || typeof str != 'string' || str.length < 2)return str;

    for(let i = str.length - 1; i >= 0; i--){
        rtnStr.push(str[i])
    }
    return rtnStr.join('');
}

console.log(reverseTwo('hola'));

//-------TRY THREE--------//

function reverseThree(str){
    return str.split('').reverse().join('')
}

console.log(reverseThree('hola'));