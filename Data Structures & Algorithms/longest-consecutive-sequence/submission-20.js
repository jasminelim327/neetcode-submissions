// class Solution {
//     /**
//      * @param {number[]} nums
//      * @return {number}
//      */
//     // i need to read the case before i start reading it
//     //  if can find the element which is  i+1, add it
//     //  how about dictionary it first

//     longestConsecutive(nums) {
//         //  sort the array first
//         //  check if its equal to current i +1 
//         //  if its yes continue, set the max length of the element
//         //  i alwaysq end up spending more time resolving the edge cases 
//         if (nums.length== 0){
//             return 0
//         }
//         var sorted = {}
//         for (var element of nums.sort()){
//             sorted[element] = element
//         }
//         if (sorted.length <= 1 ){
//             return sorted.length
//         }
//         var final =0
//         var arr =[]
//         var sortedz =Object.values(sorted)
//         console.log(sortedz.sort())
//         for (var i =0; i< sortedz.length; i++){
//             if (sortedz[i] == sortedz[i+1]-1){
//                 if (arr == []){
//                     arr.push(sortedz[i])
//                 }
//                 arr.push(sortedz[i+1])
//             } 
//             console.log(arr)
//             if (final < arr.length){
//             final = arr.length
//         }
//         }
//         return(final+1)
//         }}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (nums.length <= 1) {
            return nums.length;
        }

        let sorted = nums.sort((a, b) => a - b);
        let longestStreak = 1;
        let currentStreak = 1;

        for (let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i] !== sorted[i + 1]) {
                if (sorted[i] + 1 === sorted[i + 1]) {
                    currentStreak++;
                } else {
                    longestStreak = Math.max(longestStreak, currentStreak);
                    currentStreak = 1;
                }
            }
        }

        return Math.max(longestStreak, currentStreak);
    }
}

