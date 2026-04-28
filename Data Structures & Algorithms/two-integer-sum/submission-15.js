class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        if (nums.length ==2){
          return [0,1]
        }
        
        let matchMap = {}

        for (let i = 0 ; i < nums.length; i++ ){
          let match = target - nums[i]
          if (matchMap[match] == undefined ){
            matchMap[nums[i]] =  i // should have the current num into the index map instead of the matched number
          }
          else{
            return [matchMap[match], i]
          }
        }
        console.log(matchMap)
    }
       
}

