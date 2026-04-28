class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // //  the index of the nums
        // let start =0
        // let end = nums.length -1

        // while (start <= end){
        //     //  find the midpoint
        //     const midpoint = start + Math.floor((end-1)/2)
        //     if (nums[midpoint] > target){
        //         end = midpoint -1 
        //     }
        //     else if (nums[midpoint] < target){
        //         start = midpoint +1
        //     }
        //     else{
        //         return m 
        //     }
        // }
        // return -1
        //  index
        let start = 0 
        let end = nums.length-1

        while(start <= end){
            //  take note of the formula to find point
            const midpoint = start + Math.floor((end-start)/2)
            if (nums[midpoint]< target){
                // target is on the right side, change the search range to the right side
                start = midpoint+1
            } else if (nums[midpoint] > target){
                // target is on the left side
                end = midpoint-1
            } else{
                return midpoint
            }
        }return -1
    }
}
