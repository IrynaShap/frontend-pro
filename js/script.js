'use strict';

function removeElement(arr, item) {
    let j = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== item) {
            arr[j] = arr[i];
            j++;
        }
    }
    arr.length = j;
}

const array = [1, 2, 3, 4, 5, 6, 7];

removeElement(array, 5);

console.log(array);