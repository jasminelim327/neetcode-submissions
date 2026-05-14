class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {number}
     */
    appendCharacters(s, t) {
        let i = 0 

        for (let ch of s){
            if (ch == t[i]){
                i++
            }
        }

        return t.length - i 


    }
}
