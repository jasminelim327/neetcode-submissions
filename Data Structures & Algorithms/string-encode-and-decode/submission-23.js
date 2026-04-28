class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
       if (strs.length == 0){
        return ''
       }

       let sizes = [], res = ""
       
       for (let s of strs){
        sizes.push(s.length)
       }

        // let sizes of the 
        for ( let sz of sizes){
            res += sz + ',' // delimiter
        }
        res += "#" // second delimiter
        for ( let s of strs){
            res += s // [5,7,#happybirthday]
        }
        console.log(res)
        return res
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        //  the encoded str will include first the length then the delimiter for the nums and the delimiter from the number and text
        let res = []
        let i = 0
        let sizes = []

        //  go all the way until meet # to get the sizes
        if (str.length == 0 ) return []

        //  get the sizes of the substr
        while ( str[i] !== "#"){
            let sz = ''
            //  gonna take it until meet a ',' 
            while (str[i] != ","){
                sz += str[i]
                i++
            } 
            sizes.push(Number(sz))
            sz = ''
            i++ 
           
        }

        //  move the index to more 
        i++
        console.log(i)

        for ( let sz of sizes){
            let word = str.slice(i, i+sz)
            res.push( word)
            i += sz

        }

        return res


        // return the subsstring




    }
}
