class Solution {
    /**
     * @param {character[]} s
     * @return {void} Do not return anything, modify s in-place instead.
     */
    reverseString(s) {

        //  in place meaning - 
        //  from back and front - turning inwards and swapping 

        let l = 0 , r = s.length-1

        while (l <= r){
            let temp = s[l]
            s[l] = s[r]
            s[r] = temp

            l++
            r--
        }


    }
}
