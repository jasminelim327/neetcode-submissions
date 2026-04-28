class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        // 
        // check if target , if not  nums[i] is existed  
        // parse the num of the nums into a dictionary 
        // 
        // with index as the value and num as the index
        // 


        let matchMap = {}

        for (let i = 0; i < nums.length ; i ++ ){
            let match = target - nums[i]

            if (matchMap[match] == undefined){
                matchMap[nums[i]] = i
            }
            else {
                return [matchMap[match], i]
            }
        }
        return false     
    }
       
}



// if (nums.length ==2){
        //   return [0,1]
        // }
        
        // let matchMap = {}

        // for (let i = 0 ; i < nums.length; i++ ){
        //   let match = target - nums[i]
        //   if (matchMap[match] == undefined ){
        //     matchMap[nums[i]] =  i // should have the current num into the index map instead of the matched number
        //   }
        //   else{
        //     return [matchMap[match], i]
        //   }
        // }
        // console.log(matchMap)