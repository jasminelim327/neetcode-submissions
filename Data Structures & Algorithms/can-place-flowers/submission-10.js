class Solution {
    /**
     * @param {number[]} flowerbed
     * @param {number} n
     * @return {boolean}
     */
    canPlaceFlowers(flowerbed, n) {

        for (let i = 0; i < flowerbed.length; i++){
            // edge case for last one and first one
            console.log(n, "at the beginning of the loop")
            if (n == 0){
                return true
            }

            if (i == 0){
                if (flowerbed[i] == 0 && flowerbed[i+1] != 1){
                    console.log('deducted here')
                    n-=1
                }
            }

            else if (i == flowerbed.length-1){
                if (flowerbed[i]== 0 && flowerbed[i-1] != 1){
                    console.log('deducted here1')
                    n-=1
                    flowerbed[i] = 1
                }
            }

            else if  (flowerbed[i] == 1){
                continue
            }
            
            else if (flowerbed[i-1] == 1 || flowerbed[i+1] == 1){
                continue
            }

            else if (flowerbed[i-1] == 0 || flowerbed[i+1] == 0) {
                    console.log('deducted here3')
                    n-=1
                    flowerbed[i] = 1
            }
        }
        
        console.log(n)
        return n==0

    }
}
