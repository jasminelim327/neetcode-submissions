class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        // how would the area be calculatd when they explore 

        let maxArea = 0
        let l = 0, r = heights.length-1

        while (l<r){
            let area = (r-l) * Math.min(heights[l], heights[r])
            maxArea = Math.max( area, maxArea)

            if (heights[l]< heights[r]){
                l++
            }

            else {
                r--
            }

        }

        return maxArea

}}


// let l = 0
//         let r = heights.length -1 
//         let res = 0

//         while (l < r){
//             let area = Math.min(heights[l], heights[r]) * (r-l)
//             res = Math.max(area, res)

//             if (heights[l]<= heights[r]){
//                 l++
//             }else {
//                 r--
//             }
//         }
//         return res

//     }