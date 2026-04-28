class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    //  use set to find out if there is duplicate 

    isValidSudoku(board) {
        // check the row
        for (let i =0 ; i < 9 ; i++){
            let row = new Set()
            let column = new Set()
            for (let j =0; j <9 ; j++){
                // check the row 
                // [0,1] [0,2]
                if (board[i][j] != "." && row.has(board[i][j])) {
                    return false
                }
                row.add(board[i][j])
                if (board[j][i] != "." && column.has(board[j][i])) {
                    return false
                }
                column.add(board[j][i])
        }}
        // check the subboxes
        for (let startRow = 0; startRow < 9 ; startRow +=3){
            for (let startColumn = 0; startColumn < 9 ; startColumn +=3){
                let grid = new Set()
                for (let j = startColumn ; j < startColumn+3; j++){ // for every column, it will let the row iterate first 
                    for (let i = startRow ; i < startRow+3; i++){
                        if (board[i][j] !='.' && grid.has(board[i][j])){
                            return false
                        }
                        grid.add(board[i][j])
                    }
                }}
} return true
}}
