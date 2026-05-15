class Solution {
    /**
     * @param {string[]} words
     * @return {string[]}
     */
    stringMatching(words) {
        // we will have the words contained by the word to be in the key or value side
        let res = new Set()
        for ( let word of words){
            for (let substring of words){
                if (substring!= word && word.includes(substring)){
                    res.add(substring)
                }
            }
        }
        return res
    }
}
