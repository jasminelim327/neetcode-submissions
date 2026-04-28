class Solution {
    /**
     * @param {number} prices
     * @return {number}
     */

    maxProfit(prices) {
        let min = prices[0]
        let max = min
        let profit = 0
        for (var i =0; i <= prices.length; i++){
            // 
            if (prices[i]<= min && i != prices.length-1){
                 max = min = prices[i] // important so as to ensure that the max is not lack in index
            }
            else if (prices[i]> max){
                max = prices[i]
            }
            
            profit = max-min > profit ? max-min :profit
        }
        return profit
    }
}
