var lengthOfLongestSubstring = function(s) {
    var map = new Map();
    var length = s.length;
    var max = 0;
    for (let leftIndex = 0, rightIndex = 0; rightIndex < length; rightIndex++) {
        let char = s.charAt(rightIndex);
        if (map.has(char)) {
            leftIndex = Math.max(map.get(char), leftIndex);
        }
        max = Math.max(max, rightIndex - leftIndex + 1);
        map.set(char, rightIndex + 1);
    }
    return max;
};
console.log(lengthOfLongestSubstring('abba'));