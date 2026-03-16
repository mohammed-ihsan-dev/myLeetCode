/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    const charCounts = {};

    for(const char of magazine){
        charCounts[char] = (charCounts[char] || 0) + 1;
    }

    for(const char of ransomNote){
        if(!charCounts[char]){
            return false
        } charCounts[char]--
    }
    return true
}; 