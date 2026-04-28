class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        var newArray = []
        if (nums.length == 0 ){
            return false
        }
        for (var num of nums){
            if (newArray.includes(num) == false){
                newArray.push((num))
            } 
            else {
             return true
            }
        } return false
    }
}

