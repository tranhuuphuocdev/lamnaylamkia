let myFunc = num => Number(num);
var result = true;
var intArr = Array.from(String(121), myFunc);
var floor = Math.floor(intArr.length / 2);
for (var i = 0; i <= floor; i++) {
    var startNumber = intArr[i];
    var endNumber = intArr[intArr.length - i -1];
    if (startNumber !== endNumber) {
        result = false;
    }
}
return console.log(result);