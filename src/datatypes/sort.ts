const numArr = [13, 5, 8, 2, 3, 1];
const stringArr = ["b", 'a', 'c','d']

function selectionSort<T> (arr: T[], callback: (a: T, b:T) => number):T[] {
    for(let i = 0; i < arr.length; i++) {
        for(let j = i + 1; j < arr.length; j++) {
            if(callback(arr[i], arr[j]) > 0) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }return arr;
}

const newResult = selectionSort(stringArr, (a,b) => {
    return b.localeCompare(a);
})

const newResult2 = selectionSort(numArr, (a,b) => {
    return b-a;
})

console.log(newResult);
console.log(newResult2);