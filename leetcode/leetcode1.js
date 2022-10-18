var nums = [2,7,11,15];
var target = 9;
var result;
var arr = new Map();

for (var i = 0; i < nums.length; i++) {
    var need = target - nums[i];
    var check = arr.get(need);
    if (!isNaN(check)) {
        result = [arr.get(need), i];
        break;
    }
    arr.set(nums[i], i);
}

console.log(result);