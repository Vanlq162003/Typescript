var numArr = [13, 5, 8, 2, 3, 1];
var stringArr = ["b", 'a', 'c', 'd'];
function selectionSort(arr, callback) {
    for (var i = 0; i < arr.length; i++) {
        for (var j = i + 1; j < arr.length; j++) {
            if (callback(arr[i], arr[j]) > 0) {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}
var newResult = selectionSort(stringArr, function (a, b) {
    return b.localeCompare(a);
});
var newResult2 = selectionSort(numArr, function (a, b) {
    return b - a;
});
console.log(newResult);
console.log(newResult2);
