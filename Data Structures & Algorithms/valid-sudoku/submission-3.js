class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    //  use set to find out if there is duplicate 

    isValidSudoku(board) {
       // for the row 

       for (let i = 0; i < 9 ; i++){
        let row = new Set()
        let column = new Set()
            for (let j =0; j <9; j ++){
                if (board[i][j] != '.' && row.has(board[i][j])){
                    return false
                }
                row.add(board[i][j])
                // for the column
                if (board[j][i] != '.' && column.has(board[j][i])){
                    return false
                }
                column.add(board[j][i])
            }
       }
       // for the grid

       for (let startRow =0; startRow < 9 ; startRow +=3){
            let grid = new Set()
            for (let startColumn =0; startColumn < 9 ; startColumn +=3){
                    for (let i = startRow ; i< 3 ; i ++){
                        for (let j = startColumn; j <3 ; j++){
                            if (board[i][j] != '.' && grid.has(board[i][j])){
                                return false  
                            }
                            grid.add(board[i][j])
                        }
                    }
       }
       }

       return true

}}
