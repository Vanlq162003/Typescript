
const Arr = [3 ,6, 5]

const numArray3 = [13,5,8,2,3,1] 


function ham(){
    
}
function selectionSort<T>(arr: T[]): T[] {
    for (let i = 0; i < arr.length - 1; i++) {
      let minIndex = i;
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
      if (minIndex != i) {
        let temp = arr[i];
        arr[i] = arr[minIndex];
        arr[minIndex] = temp;
      }
    }
    return arr;
  }
  
  let intArr = [5, 2, 8, 1, 4];
  console.log(selectionSort(intArr))
  
