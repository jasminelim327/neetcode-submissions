class Solution {
    /**
     * @param {string[]} operations
     * @return {number}
     */
    calPoints(operations) {
        let score = []
        let final = 0
        
        for (let op of operations)

        {
        let res = 0

            if (isNaN(op)){
                if (op ==  '+'){
                    res += score[score.length-1]
                    res += score[score.length-2]
                    score.push(res)
                    final += Number(res)
                }
                else if (op ==  'C'){
                    final -= score[score.length-1]
                    score.pop()
                }
                else if (op ==  'D'){
                    final += score[score.length-1]*2

                    score.push(score[score.length-1]*2)
                }

            }

            else {
                score.push(Number(op))
                final += Number(op)
            }

            
        }

        return final

    }
}
