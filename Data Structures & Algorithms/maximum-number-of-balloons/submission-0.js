class Solution {
    /**
     * @param {string} text
     * @return {number}
     */
    maxNumberOfBalloons(text) {
        //  use dictionary to predetermine the index of balloon and the frequency
        const map = new Map()

        for (let ch of text){
            if ('balon'.includes(ch)){
                map.set(ch, (map.get(ch)||0)+1 )
            }
        }
            if (map.size < 5){
                return 0;
            }

            console.log(map)

            map.set('l', Math.floor(map.get('l')/2))
            map.set('o', Math.floor(map.get('o')/2))

            console.log(map.values())
            return Math.min(... map.values())
    }
}
