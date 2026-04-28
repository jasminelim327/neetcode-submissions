class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     * 
     *   //   let start =0 
    //   let end = nums.length-1

    //   while (start <=end){
    //         let midpoint = start+Math.floor((end-start)/2)
    //         if (nums[midpoint] > target){
    //             end = midpoint -1
    //         }
    //         else if (nums[midpoint] < target){
    //             start = midpoint +1
    //         } else {
    //             return midpoint
    //         }
    //   } return -1
     */
    search(nums, target) {
        let start = 0 
        let end = nums.length-1

        while (start<=end){
            let midpoint = start + Math.floor((end-start)/2)

            if (nums[midpoint] < target){
                start = midpoint +1
            }
            else if (nums[midpoint] > target){
                end = midpoint -1
            }
            else{
                return midpoint
            }
        } return -1
    } 
}
