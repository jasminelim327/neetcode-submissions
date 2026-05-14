class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isSubsequence(s, t) {
       // check both characters 
       var i = 0
       for (let ch of t){
        if (ch == s[i]){
            i ++
        }
       }
       return (i == s.length)
    }
}
