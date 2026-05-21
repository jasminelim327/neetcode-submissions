class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxAscendingSum(nums) {
        let i = 1
        let sum = nums[0]
        let maxAscendingSum = 0

        while (i < nums.length){
            if (nums[i] > nums[i-1]){ // increasing 
                sum += nums[i]
                maxAscendingSum = Math.max(maxAscendingSum, sum)
            }
            else {
                 maxAscendingSum = Math.max(maxAscendingSum, sum)
                sum = nums[i]
               
            }
            i++
        }

        return Math.max(maxAscendingSum, sum)

    }
}
