/*
Given the words in the magazine and the 
words in the ransom note, print Yes if he can 
replicate his ransom note exactly using whole 
words from the magazine; otherwise, print No.
*/

function checkMagazine(magazine,note){
    for(let word in note){
        if(magazine.indexOf(note[word]) < 0){
            return console.log('No');
        } else {
            magazine.slice(magazine.indexOf(note[word]),1)
        }
    }
    return console.log('Yes');
}

