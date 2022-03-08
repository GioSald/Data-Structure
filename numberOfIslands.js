//Given an m x n 2D binary grid grid which represents 
//a map of '1's (land) and '0's (water), 
//return the number of islands.

function numIslands(grid){
    let count = 0;

    for(let row = 0; row < grid.length; row++){
        for(let col = 0; col < grid[0].length; col++){
            if(grid[row][col] === "1"){
                count++
                dfs(grid,row,col)
            }
        }
    }

    function dfs(grid,row, col){
        if( row < 0 || row >= grid.length || col < 0 || col >= grid[0].length || grid[row][col] === "0"){
            return;
        }
        grid[row][col] = '0';
        dfs(grid, row - 1, col)
        dfs(grid, row, col - 1)
        dfs(grid, row, col + 1)
    }
    return count;
}