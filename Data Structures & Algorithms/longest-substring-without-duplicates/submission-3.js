class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        let l =0, res=0, mp = new Map()

        for (let r =0; r<s.length; r++){
            if (mp.has(s[r])){
                l = Math.max(l, mp.get(s[r])+1)
            }

            mp.set(s[r], r)
            res = Math.max(res, r-l+1)
        }
        return res
    }
}
