/*
Given an image represented by an NxN matrix
write a method to rotate the image by 90
*/

function rotateMatrix(matrix){
    if(matrix.length === 0 || matrix.length !== matrix[0].length) return false;
    let n = matrix.length;

    for(let layer = 0; layer < n / 2; layer++){
        let first = layer;
        let last = n - 1 - layer

        for(let i = first; i < last; i++){
            let offset = i - first;
            let top = matrix[first][i];
            matrix[first][i] = matrix
        }
    }
}