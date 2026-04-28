class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

    //  nums = [1, 2, 3, 3]
    //  output -> true or false 

    // !! condition of the output
    //  duplicate -> return true 
    //  duplicate how many times doesnt matter 

    // ! data structure to be used
    // set is a map with unique values 

    // ! mechanism 
    
    var setSize = new Set(nums).size 
    
    if (setSize == nums.length ){
        return false // no duplicates
    }

    return true

    // time complexity - is O(n)
    // space complexity - o(n) 


q
        
    }
}



// empty object 
        // var check =  {"1": true ; "2" : true }
        // var numDict = {}

        // for (var i = 0 ; i < nums.length+1 ; i++){
        //     console.log(numDict.nums[i])
        //     if (numDict[nums[i]] == true ){ 
        //         return true 
        //     }
        //     else{
        //         numDict[nums[i]] = true
        //     }
        // }
        // return false

        // var set = new Set(nums).size
        // return set != nums.length
        

        //  loop through the entire array 
        //  return true if the integer is found as a key in the dictionary 
        // if not it will add the integer to the object as key 

        //  at the end of the array, means that duplicates is not found, then return false