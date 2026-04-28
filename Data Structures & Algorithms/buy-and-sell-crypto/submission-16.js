class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        // try to copy the answer and then try to iterate through the answer and then understand 
        if (!prices || prices.length ==0){
            return 0
        }

        var minPrice = prices[0]
        var maxProfit = 0

        for (var i =0 ; i < prices.length ; i ++){
            let profit = prices[i] - minPrice
            maxProfit = Math.max(profit, maxProfit)
            minPrice = Math.min(prices[i], minPrice)
        }

        return maxProfit
    }
}
