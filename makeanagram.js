function makeAnagram(a, b) {
    // Write your code here
    let count = 0, dict = {};
    for(let ch of a) dict[ch] = 1 + (dict[ch] || 0)
    for(let ch of b) dict[ch] ? dict[ch]-- : count++;
    return 2 * count + a.length - b.length;
}