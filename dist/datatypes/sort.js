var Arr = [3, 6, 5];
var numArray3 = [13, 5, 8, 2, 3, 1];
function ham() {
}
function selectionSort(arr) {
    for (var i = 0; i < arr.length - 1; i++) {
        var minIndex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex != i) {
            var temp = arr[i];
            arr[i] = arr[minIndex];
            arr[minIndex] = temp;
        }
    }
    return arr;
}
var intArr = [5, 2, 8, 1, 4];
console.log(selectionSort(intArr));
