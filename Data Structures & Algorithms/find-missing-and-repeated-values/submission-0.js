class Solution {
    /**
     * @param {number[][]} grid
     * @return {number[]}
     */
    findMissingAndRepeatedValues(grid) {
        let unique = new Set()
        let seen = new Set()
        let uniqueNum = Infinity
        let seenNum = Infinity


        // find the duplicate number
        for (let g of grid){
            
            for (let num of g){
                if ( !unique.has(num)){
                    unique.add(num)
                }

                else if (unique.has(num)){
                    seenNum = num
                }
            }
        }

        // let numArray = [...unique]
        console.log(unique.size)

        for (let i = 1; i< unique.size+1+1; i++){
            if (!unique.has(i)){
                uniqueNum = i
            }
        }

        return [seenNum , uniqueNum]
    }
}
