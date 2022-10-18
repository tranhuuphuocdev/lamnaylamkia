/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
    function getFrom (start, end, arr) {
        var arrString = ''
        for (var i = start; i <= end; i++) {
            arrString += arr[i];
        }
        return arrString;
    }
    var length = s.length;
    var map = new Map();
    var result = '';
    for (var leftIndex = 0, rightIndex = 0; rightIndex < length; rightIndex++) {
        var char = s.charAt(rightIndex);
        if (map.has(char)) {
            leftIndex = Math.max(map.get(char), leftIndex);
            result = result.slice(map.get(char) - 1, result.length);
        }
        map.set(char, rightIndex + 1);
        result += char;
        // if (map.has(char)) {
        //     leftIndex = map.get(char);
        //     result = result.length > (rightIndex - leftIndex + 1) ? result : getFrom(leftIndex, rightIndex, arr);
        // }
        // map.set(char, rightIndex + 1);
    }
    return result;
};
console.log(longestPalindrome('babad'));