class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    findDisappearedNumbers(nums) {
        let unique = new Set(nums)
        let res = []

        for (let i = 1; i < nums.length+1; i ++){
            if (!unique.has(i)){
                res.push(i)
            }
        }

        return res
    }
}
