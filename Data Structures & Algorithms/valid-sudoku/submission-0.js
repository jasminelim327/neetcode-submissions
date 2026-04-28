class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    //  use dictionary to find out if there is duplicate 
    isNotDuplicate(list){
        var dict ={}
        for (var i =0; i<=list.length; i++){
            if (list[i] == "."){
               continue
            }
            else if (dict[list[i]] == 1){
                return false
            }
            else{
                dict[list[i]] = 1
            }
            console.log(dict)
        } return true
    }

    // transform the i of each list into 1 list
    isValidSudoku(board) {
        var sol = new Solution
        // check all the rows
        for (var list of board){
            // console.log(list)
            var test = sol.isNotDuplicate(list)
            if (test == false ){
                return false
            }
        }

        var cols = []
        for ( var i =0 ; i <= board.length-1 ; i ++){
            cols.push([])
        }
        
        for ( var i =0 ; i <= board.length-1 ; i ++){
            for ( var j =0 ; j <= board.length-1 ; j ++){
                cols[i].push(board[j][i])
            }
        }
        // console.log(cols)

        for (var list of cols){
            var test = sol.isNotDuplicate(list)
            if (test == false ){
                return false
            }
        } 

        // need to check the respective  3*3 
        // take the 0,1,2 & 3, 4,5, & 6, 7 , 8 of 0, 1, 2
        var square =[]
        for (var i =0 ; i <= board.length-1 ; i++){
            square.push([])
        }
            for ( var j =0 ; j <3 ; j ++){
                for (var k = 0; k <=2 ; k++){
                square[0].push(board[j][k])
            }
            }
            for ( var j =3 ; j <6 ; j ++){
                for (var k = 0; k <=2 ; k++){
                square[1].push(board[j][k])
            }
            }
            for ( var j =6 ; j <9 ; j ++){
                for (var k = 0; k <=2 ; k++){
                square[2].push(board[j][k])
            }
            }

            // middle column
            for ( var j =0 ; j <3 ; j ++){
                for (var k = 3; k <=5 ; k++){
                square[3].push(board[j][k])
            }
            }
            for ( var j =3 ; j <6 ; j ++){
                for (var k = 3; k <=5 ; k++){
                square[4].push(board[j][k])
            }
            }
            for ( var j =6 ; j <9 ; j ++){
                for (var k = 3; k <=5 ; k++){
                square[5].push(board[j][k])
            }
            }

            // last threee columns
            for ( var j =0 ; j <3 ; j ++){
                for (var k = 6; k <9 ; k++){
                square[6].push(board[j][k])
            }
            }
            for ( var j =3 ; j <6 ; j ++){
                for (var k = 6; k <9 ; k++){
                square[7].push(board[j][k])
            }
            }
            for ( var j =6 ; j <9 ; j ++){
                for (var k = 6; k <9 ; k++){
                square[8].push(board[j][k])
            }
            }

            // for ( var j =0 ; j <3 ; j ++){
            //     for (var k = 3; k <=5 ; k++){
            //     square[6].push(board[j][k])
            // }
            // }
            // for ( var j =3 ; j <6 ; j ++){
            //     for (var k = 3; k <=5 ; k++){
            //     square[7].push(board[j][k])
            // }
            // }
            // for ( var j =0 ; j <3 ; j ++){
            //     for (var k = 3; k <=5 ; k++){
            //     square[8].push(board[j][k])
            // }
            // }
        console.log("list",list)
        console.log("cols",cols)
        console.log("square",square)
        for (var list of square){
            var test = sol.isNotDuplicate(list)
            if (test == false ){
                return false
            }
        } return true
            //  below account for the next three rows 
    }
}
