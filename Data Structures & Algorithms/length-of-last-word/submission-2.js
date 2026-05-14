class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLastWord(s) {
        //  keep counting until find a space ?
        s = s.trimEnd()
        let count = 0
        for (let i = s.length - 1 ; i>= 0; i --){
            if (s[i] == " "){
                return count
            }
            count ++
        }
        return count


    }
}
