class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let res = 0 
        let l = 0 
        let count = new Map()

        let maxf = 0

        for (let i = 0; i < s.length; i++){
            count[s[i]] = (count[s[i]] ||0) +1
            maxf = Math.max(count[s[i]], maxf)

        while (i-l+1 - maxf > k){
            count[s[l]] -= 1
            l++
        }

        res = Math.max(res, i-l+1)
        
        }
        return res

    }

}
