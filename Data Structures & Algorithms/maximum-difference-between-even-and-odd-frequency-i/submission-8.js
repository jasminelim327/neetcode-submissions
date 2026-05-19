class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    maxDifference(s) {
        let sArray = s.split("")
        let sDict = new Map()
        for (let ch of sArray){
            sDict[ch] = (sDict[ch]||0)+1
        }

        let sFreq = Object.values(sDict)
        let a1 = -Infinity
        let a2 = Infinity

        
        
        for (let i of sFreq){
            if (i%2 == 0 ){
                if ( i < a2){
                     a2 = Math.min(a2, i)
                }
            }
            
            else if (i%2 == 1){
                 
                if (a1 < i){
                 a1 = Math.max(a1, i)
                }
            }
        }
        console.log( a1, a2, 'last')
        return a1 - a2
    }
}
