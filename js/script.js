function myShift(array) {
  let originalLength = array.length;

  if (originalLength === 0) {
    return undefined;
  }

  let firstElement = array[0];

  for (let index = 1; index < originalLength; index++) {
    array[index - 1] = array[index];
  }
  array.length = originalLength - 1;
  return firstElement;
}

function myReverse(array) {
  let startIndex = 0;
  let endIndex = array.length - 1;

  while (startIndex < endIndex) {
    let tempValue = array[startIndex];
    array[startIndex] = array[endIndex];
    array[endIndex] = tempValue;
    startIndex++;
    endIndex--;
  }
  return array;
}

let arr1 = [10, 20, 30, 40];
let shifted = myShift(arr1);

console.log('myShift:', shifted);
console.log('arr1 после myShift:', arr1);

let arr2 = [1, 2, 3, 4, 5];
let reversed = myReverse(arr2);

console.log('myReverse:', reversed);
console.log('arr2 после myReverse:', arr2);