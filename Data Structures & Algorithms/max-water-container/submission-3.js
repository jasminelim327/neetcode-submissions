class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let max = 0;
        let left = 0;
        let right = heights.length - 1;

        while (left < right) {
            const height = Math.min(heights[left], heights[right]);
            const length = right - left;
            const area = height * length;

            max = Math.max(max, area);

            if (heights[left] < heights[right]) {
                left++;
            } else {
                right--;
            }
        }

        return max;
    }
}
