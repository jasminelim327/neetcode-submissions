class Solution {
    /**
     * @param {string} s1
     * @param {string} s2
     * @return {boolean}
     */
    //  after this problem, read book 
    checkInclusion(s1, s2) {
        if (s2.length > s2.length){
            return false
        }
        if (s2.includes(s1)){
            return true
        }
        //  initialise the array for both s1 and s2
        const s1Count = new Array(26).fill(0)
        const s2Count = new Array(26).fill(0)

        // need to match the character to their respective index in the 26 alphabets
        for (let i=0; i<s1.length; i++){
            s1Count[s1.charCodeAt(i) - 'a'.charCodeAt(0)]++
            s2Count[s2.charCodeAt(i)- 'a'.charCodeAt(0)]++
        }
        //  now have an array thats like for example 'abc'
        // [1,1,1,0,0,0,0....]

        //  going through the array to see the matches of number at each index
        // for the first 3 index
        let matches = 0
        for (let i =0; i<26; i++){
            if (s1Count[i] == s2Count[i]){
                matches ++
            }
        }

        // sliding window
        let l =0 
        // this is to facilitate the sliding winow
        for (let r = s1.length; r < s2.length; r++){
            if (matches == 26){
                return true
            }
            
            // this is the index of the s2 string character 
            let index = s2.charCodeAt(r) - 'a'.charCodeAt(0)
            s2Count[index]++;
            if(s1Count[index] == s2Count[index]){
                matches ++
            }
            // why a, because if lets say the shorter character has 2 and s2Count has 1 
            // 'abbc' vs abc
            // This condition checks if the new count of the character in s2Count has just exceeded the count in s1Count by 1.
            else if (s1Count[index] + 1 === s2Count[index]){
                matches -- 
            }

            // getting the index of the character 
            index = s2.charCodeAt(l) - 'a'.charCodeAt(0)
            s2Count[index]--;
            if(s1Count[index] == s2Count[index]){
                matches ++
            } else if ( s1Count[index]-1 == s2Count[index]){
                matches --
            }
            l++
        } return matches ==26



        

    }
}
