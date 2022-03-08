//How can you reverse a sentence 

function reverseInPlacce(str){
    return str.split(' ').reverse().join(' ').split('').reverse().join('')
}

console.log(reverseInPlacce('I am the good boy'));