class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        // this problem is to find the sum that matches in target
        // use the complement 


        //  this is easier to understand but very high complexity
        // for (let i = 0; i < nums.length; i++){
        //     let complement = target - nums[i]
        //     if (nums.includes(complement)){
        //         return [i, nums.indexOf(complement)]
        //     }
        // } return [-1,-1]

        // use map or object

        let map = new Map() // to keep track of the value and to retrieve as a complement

        for (let i = 0;  i < nums.length; i++ ){
            let complement = target - nums[i]

            if (map.has(complement)){
                let complementIndex = map.get(complement)
                return [i, complementIndex]
            }
            else {
                map.set(nums[i], i)
            }
        }return [-1,-1]

    }
    }



