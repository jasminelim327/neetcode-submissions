class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    pivotIndex(nums) {
        let right = 0, left = 0
        for (let num of nums){
            right += num
        }

        for ( let i = 0; i < nums.length; i++){
            right -= nums[i]
            if (right == left ){
                return i
            }

            left += nums[i]
        }

        return -1
    }
}
