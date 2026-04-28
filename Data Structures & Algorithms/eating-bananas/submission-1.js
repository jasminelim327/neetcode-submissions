class Solution {
    /**
     * @param {number[]} piles
     * @param {number} h
     * @return {number}
     */
    minEatingSpeed(piles, h) {
        let l = 1
        let r = Math.max(...piles)
        let res = r

        while (l<=r){
            let k = Math.floor((l+r)/2) // why are there different variation of midpoint formula
            let totalTimes = 0
            for(let p of piles){
                totalTimes += Math.ceil(p/k)
            }
            if (totalTimes <= h){
                res = k
                r = k -1
            } else {
                l =k+1
            }
        }return res
    } 
}


