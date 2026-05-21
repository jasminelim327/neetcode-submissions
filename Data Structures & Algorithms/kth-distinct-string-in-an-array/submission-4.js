class Solution {
    /**
     * @param {string[]} arr
     * @param {number} k
     * @return {string}
     */
    kthDistinct(arr, k) {
        let unique = new Set()
        let seen = new Set()

        for (let num of arr){
            if (seen.has(num)) {
                continue;
            }
            
            if (unique.has(num)){
                seen.add(num)
                unique.delete(num)
            }

            else {
                unique.add(num)
            }
        }
        console.log(unique)

        for (let s of arr){
            if (unique.has(s)){
                k--
               
                if (k == 0){
                    return s
                }
            }
        }
        return ''
       
    }
}
