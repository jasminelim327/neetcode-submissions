class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {
        // init map
        // let res =0
        // const count = new Map() // to create new dictionary 
        // let l =0

        // for (let r =0; r<s.length; r++ ){
        //     let len = r-l+1 // this means that the len of the substring, will constantly be updated 
        //     count.set(s[r], 1 + (count.get(s[r]) || 0)); // take note of the 1 before the get function
            
        //     if (len - Math.max(...count.values()) > k){  // 1.compare between all the value of str more than the swappable number, if more than k, must drop
        //         count.set(s[l], count.get(s[l]) - 1) // sliding window 
        //         l++
        //     }
        //     len = r-l+1
        //     res = Math.max(res,len) // if dont have means return 0
        // }return res
        let res =0
        let l = 0 
        const count = new Map()

        for (let r=0; r<s.length; r++){
            let len = r-l+1
            count.set(s[r], 1+ (count.get(s[r]) || 0))

            if (len- Math.max(...count.values()) > k){
                count.set(s[l], count.get(s[l])-1)
                l++
            }
            len =r-l+1
            res = Math.max(res,len)
        }
        return res 
    }
}
