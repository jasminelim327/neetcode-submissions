class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    scoreOfString(s) {

        //  use charCodeat
        let sum = 0

        for (let i = 0; i < s.length -1 ; i++){  // counter for the last one which doesnt have a +1
            let difference = Math.abs(s.charCodeAt(i+1)-s.charCodeAt(i))
            sum += difference
        }
        return sum
    }
}
