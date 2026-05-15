class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */

    isIsomorphic(s, t) {
        //  what is similar between them is the position and frequency of characters 
              let mapTS = new Map()
              let mapST = new Map()

              for (let i = 0 ; i < s.length; i++){
                let c1 = s[i]
                let c2 = t[i]

                if ((mapTS.has(c2) && mapTS.get(c2)!= c1) || (mapST.has(c1) && mapST.get(c1)!= c2)){
                    return false
                }
                mapST.set(c1, c2)
                mapTS.set(c2, c1)
              }  
              return true
    }
}
