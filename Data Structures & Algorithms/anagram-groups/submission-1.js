class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        var anagramDict ={}
        
        for (let s of strs){
            let count = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
            let alphabets = ["a","b","c","d", 'e', "f",'g',"h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
            for  (let ch of s){
                //  go thru the alphabets 
                // console.log(s)
                for (let i = 0; i < alphabets.length; i++){
                    let letter = alphabets[i]
                    if (ch == letter){
                        count[i] +=1
                    }
            } 
            }
            if (anagramDict[count]){    
                anagramDict[count].push(s)
            } else{
                anagramDict[count] = [s]
            }

            } 
        
        console.log(anagramDict)
        return Object.values(anagramDict)


    }
}
