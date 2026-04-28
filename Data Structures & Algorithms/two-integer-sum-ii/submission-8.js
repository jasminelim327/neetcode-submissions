class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        //  must be smaller than the index 
        //  edge case 
        if (numbers.length==2){
            return [1,2]
        }
        //  should be a formula and not a loop
        let i =0
        while (i<numbers.length-1){
            let test= target - numbers[i]
            if (numbers.includes(test)){
                return [i+1, numbers.indexOf(test)+1]
            }else {
                i++
            }
        }
    }
}
