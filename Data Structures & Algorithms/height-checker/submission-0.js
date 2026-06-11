class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    heightChecker(heights) {
        let mismatchedIndex = 0
        let correctHeight = [...heights].sort((a,b) =>  (a-b) )// not sure how to write it Ω
        
        for (let i = 0; i < heights.length; i++){
            if (correctHeight[i] != heights[i] ){
                mismatchedIndex +=1
            }
        }
        return mismatchedIndex
    }
}
