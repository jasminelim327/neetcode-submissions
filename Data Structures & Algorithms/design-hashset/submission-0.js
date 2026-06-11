class MyHashSet {
    constructor() {
        this.set = {}
    }
th
    /**
     * @param {number} key
     * @return {void}
     */
    add(key) {
        //  check if there is any instances where this has been added, if not push
        if (!this.set[key]){
            this.set[key] = true
            return null
        }
    }

    /**
     * @param {number} key
     * @return {void}
     */
    remove(key) {
        //  take the dict key and then remove it
        if (this.set[key]){
            this.set[key] = false
            return null
        }
    }

    /**
     * @param {number} key
     * @return {boolean}
     */
    contains(key) {
        //  check if returning the object if not, 
        if (!this.set[key]){
            return false
        }
        else{
            return true
        }
    }
}

/**
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
