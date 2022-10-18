/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2);
    var length = arr.length;
    var result;
    // bubble sort
    // console.time('Bubble Sort');
    // for (let i = 0; i < length; i++) {
    //     for (let j = 0; j < length - 1 - i; j++) {
    //         var compare = arr[j] === arr[j + 1] ? 0 : arr[j] < arr[j + 1] ? -1 : 1;
    //         if (compare === 1) {
    //             let temp = arr[j];
    //             arr[j] = arr[j + 1];
    //             arr[j + 1] = temp;
    //         }
    //     }
    // }
    // console.timeEnd('Bubble Sort');
    
    //merge sort
    function defaultCompare(a, b) {
        if (a === b) {
            return 0;
        }
        return a < b ? -1 : 1;
    }

    function mergeSort(arr, compare = defaultCompare) {
        if (arr.length > 1) {
            const { length } = arr;
            const middle = Math.floor(length / 2);
            const left = mergeSort(arr.slice(0, middle), compare);
            const right = mergeSort(arr.slice(middle, length), compare);
            arr = merge(left, right, compare);
        }
        return arr;
    }
    
    function merge(left, right, compare) {
        let i = 0;
        let j = 0;
        const result = [];
        while (i < left.length && j < right.length) {
            result.push(compare(left[i], right[j]) === -1 ? left[i++] : right[j++]);
        }
        return result.concat(i < left.length ? left.slice(i) : right.slice(j));
    }

    console.time('Merge Sort');
    arr = mergeSort(arr);
    console.timeEnd('Merge Sort');
    
    if (length % 2 === 0) {
        var firstNumber = (length / 2);
        var secondNumber = (firstNumber + 1);
        result = (arr[firstNumber - 1] + arr[secondNumber - 1]) / 2;
    } else {
        result = arr[Math.floor(length / 2)];
    }
    return result;
}
var arr1 = [0, 0, 0, 0, 0, 0, 9, 0, 4, 8, 2, 0, 0, 34, 1, 0, 0, 0, 0, 0, 0, 56, 0, 43, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 21, 23, 99, 43, 44, 0, 0, 0, 0, 0, 0, 0, 0, 0, 33, 34, 45, 87, 23, 0, 0, 0];
var arr2 = [-1, 0, 0, 0, 0, 0, 1];
console.log(findMedianSortedArrays(arr1, arr2));