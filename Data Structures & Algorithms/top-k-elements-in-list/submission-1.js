class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
     topKFrequent(nums, k) {
  const frequencyMap = {};
  const result = [];

  // Count frequencies
  for (const num of nums) {
    frequencyMap[num] = (frequencyMap[num] || 0) + 1;
  }

  // Create array of [number, frequency] pairs
  const sortedFrequencies = Object.entries(frequencyMap).sort((a, b) => b[1] - a[1]);

  // Extract top k elements
  for (let i = 0; i < k; i++) {
    result.push(parseInt(sortedFrequencies[i][0], 10)); 
  }

  return result;
}}