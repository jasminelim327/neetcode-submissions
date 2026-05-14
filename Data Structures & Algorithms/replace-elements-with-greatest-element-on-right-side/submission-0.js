class Solution {
    /**
     * @param {number[]} arr
     * @return {number[]}
     */
    replaceElements(arr) {
        let res = []

        //  from the back to the front check if the current element is th
        let largestNum = arr[arr.length-1] // the lastNum 
        for (let i = arr.length-1 ; i > 0; i --){
            let currNum = arr[i]
            largestNum = Math.max(currNum, largestNum)
            res[i-1] = largestNum
        }
        res.push(-1)
        return res



        
    }
}
