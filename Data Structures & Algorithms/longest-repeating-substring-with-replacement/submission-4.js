class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        let l =0, res = 0, maxf=0, mp = new Map()

        for (let r=0; r<s.length;r++){
            mp.set(s[r], (mp.get(s[r])|| 0)+1 )
            maxf = Math.max(mp.get(s[r]), maxf)

            while (r-l+1 - maxf > k){
                mp.set(s[l], mp.get(s[l])-1)
                l++
            }
            res = Math.max(r-l+1, res)
        }

        return res   
    }

    // let l = 0, count = new Map(), maxf = 0, res = 0

    //     for ( let r = 0; r< s.length; r++){
    //         count.set(s[r], (count.get(s[r])|| 0) +1 )
    //         maxf = Math.max(maxf, count.get(s[r]))

    //         while (r -l +1 - maxf > k ){
    //             count.set(s[l], count.get(s[l])-1 )
    //             l++
    //         }
    //         res = Math.max( r-l+1, res)
    //     }

    //     return res
        
}
