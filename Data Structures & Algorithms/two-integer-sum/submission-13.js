class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if ( nums.length == 2) {
            return [0,1]
        }
       
        var map ={}
        for (let i =0 ; i < nums.length ; i ++ ){
            // [3,2,3]
            let num = nums[i]
            let r = target - num

            if (map[r] !== undefined){
                return [i, map[r]] // re
            }
            map[num] = i // add the index {'3' : 0, '2': 1;  }
        }
    }   
}
        //  loop through every with every -> not ideal cause hhuge complexity

