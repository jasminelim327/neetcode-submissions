class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     * this only works for rotated sorted array
     */
    findMin(nums) {
        // find the minimum in the array 

        let left = 0
        let right = nums.length-1

        if (nums[left]< nums[right]){
            return nums[left]
        }

        while (left < right){
            let midpoint = left + Math.floor((right-left)/2)
           // If the midpoint element is greater than the rightmost element,
            // the minimum element must be to the right of the midpoint
            if (nums[midpoint] > nums[right]) {
                left = midpoint + 1;
            } else {
                // If the midpoint element is less than or equal to the rightmost element,
                // the minimum element is to the left of the midpoint (including midpoint)
                right = midpoint;
            }
        }

        // When left equals right, we have found the minimum element
        return nums[left];
        }
    
}
