class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    // threeSum(nums) {
    //     class Solution {
    // /**
    //  * @param {number[]} nums
    //  * @return {number[][]}
    //  */
    threeSum(nums) {
        nums.sort((a, b) => a - b); // Sort the array in ascending order
        const res = [];

        for (let i = 0; i < nums.length - 2; i++) { // We need at least 3 numbers for a triplet
            if (nums[i] > 0) break; // If the current number is greater than zero, break out of the loop
            if (i > 0 && nums[i] === nums[i - 1]) continue; // Skip duplicate numbers

            let left = i + 1;
            let right = nums.length - 1;

            while (left < right) {
                const threeSum = nums[i] + nums[left] + nums[right];

                if (threeSum > 0) {
                    right--; // Move the right pointer to the left
                } else if (threeSum < 0) {
                    left++; // Move the left pointer to the right
                } else {
                    res.push([nums[i], nums[left], nums[right]]);
                    left++;
                    right--;
                    while (left < right && nums[left] === nums[left - 1]) {
                        left++; // Skip duplicate numbers
                    }
                    while (left < right && nums[right] === nums[right + 1]) {
                        right--; // Skip duplicate numbers
                    }
                }
            }
        }

        return res;}}
