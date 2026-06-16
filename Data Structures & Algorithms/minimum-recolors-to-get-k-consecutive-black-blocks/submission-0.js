class Solution {
    /**
     * @param {string} blocks
     * @param {number} k
     * @return {number}
     */
    minimumRecolors(blocks, k) {
        //  find the fixed window w the least number of 'W' in it 

        let left = 0
        let right = k

        let numberOfWhite = 0 
        

        //  for loop to count from 0 to k how many black are there 
        for (let i = 0; i < k ; i ++){
            if (blocks[i] == 'W'){
                numberOfWhite += 1 
            }
        }

        let minNumberOfWhite = numberOfWhite

        while (right < blocks.length){
            minNumberOfWhite
            if (blocks[right] =='W'){
                numberOfWhite += 1
            }

            if (blocks[right-k] == 'W'){
                numberOfWhite -=1
            }

            minNumberOfWhite = Math.min(numberOfWhite, minNumberOfWhite)
            right ++
        }

        return minNumberOfWhite

        //  from k + 1 onwards check if black
        
        //  but need to remember what is int

        




    }
}
