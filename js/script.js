'use strict';

function filterPositiveNumbers(arr) {

    if (!Array.isArray(arr) || arr.length === 0) {
        return `Input must be a non-empty array.`;
    }

    const result = [];

    for (let i = 0; i < arr.length; i++) {
        const currentPositiveNumber = arr[i];

        if (typeof currentPositiveNumber === 'number' && currentPositiveNumber > 0) {
            result.push(currentPositiveNumber);
        }
    }

    return result.length > 0 ? result : null;
}

const numbers = [1, 2, 3, -1, -2, -3];

console.log(filterPositiveNumbers(numbers));

console.log(filterPositiveNumbers([]));

console.log(filterPositiveNumbers([-1, -2, -3]));
