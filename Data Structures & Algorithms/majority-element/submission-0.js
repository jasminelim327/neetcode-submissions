class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let map = new Map()
        let maxCount = 0
        let maxNum = 0

        for ( let num of nums){
            map[num] = (map[num]||0)+1

            maxCount = Math.max(maxCount, map[num])
            if (maxCount == map[num]){
                maxNum = num
            }

        }

        return maxNum

    }
}
