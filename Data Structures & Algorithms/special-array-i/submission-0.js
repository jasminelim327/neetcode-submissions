class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    isArraySpecial(nums) {
        //  add a set to score pairs 
        let numSet = new Set() 

        if (nums.length < 2){
            return true
        }

        for (let i = 0; i < nums.length-1; i++ ){
            if ( (nums[i]%2 == 0 && nums[i+1]%2 == 1) || (nums[i]%2 == 1 && nums[i+1]%2 == 0))
            numSet.add([nums[i], nums[i+1]]) // should be handled herer
        }
        console.log(numSet)
        return numSet.size == nums.length -1

        //  if the length at the end is not nums.length-1
    }
}
