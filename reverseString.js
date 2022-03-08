// Reverse a String
function reverse(str){
    let left = 0;
    let right = s.length - 1;

    while(left < right){
        const temp = s[left];
        s[left] = s[right];
        s[right] = temp
        left++;
        right++;
    }
    return temp;
}

// Methods
function reverseString(str){
    return s.split('').reverse().join('')
}