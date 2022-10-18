/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = new Map();
    map.set('I', 1);
    map.set('V', 5);
    map.set('X', 10);
    map.set('L', 50);
    map.set('C', 100);
    map.set('D', 500);
    map.set('M', 1000);
    var result = 0;
    for (var i = 0; i < s.length; i++) {
        var valueOfAffter = map.get(s[i + 1]);
        var valueOfThis = map.get(s[i]);
        var check = false;
        if (s[i] === 'I' || s[i] === 'X' || s[i] === 'C') {
            if (valueOfAffter === valueOfThis * 5 || valueOfAffter === valueOfThis * 10) {
                result += valueOfAffter - valueOfThis;
                i++;
                check = true;
            }
        }
        if (!check) {
            result += valueOfThis;
        }
    }
    return result;
};
console.log(romanToInt("III"));