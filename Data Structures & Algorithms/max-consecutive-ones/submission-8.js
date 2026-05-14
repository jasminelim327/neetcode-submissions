class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    findMaxConsecutiveOnes(nums) {

        if (nums.length == 1 && nums[0] ==1){
            return 1
        }
        if (nums.length == 1 && nums[0] ==0){
            return 0
        }

        let i = 0 
        let maxCount = 0
        let count = 0

        //110111

        while (i < nums.length){ 
            if (nums[i]== 1 ){ // check if the prev one was a zero
                count += 1 
                maxCount = Math.max(maxCount, count)
            }

            else {
                count = 0
            }

            i++
        }

        return maxCount

    }
}
