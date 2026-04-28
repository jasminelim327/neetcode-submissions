class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // try to copy the answer and then try to iterate through the answer and then understand 
        if (!prices || prices.length == 0){
            return 0
        }

        let minPrice = prices[0]
        let maxProfit = 0 

        for ( let i = 1; i < prices.length ; i++){
            if (prices[i] < minPrice) {
                minPrice = prices[i]
            }

            var profit = prices[i] - minPrice

            if (profit > maxProfit ){
                maxProfit = profit
            }

        }
        return maxProfit 

       
    }
}
