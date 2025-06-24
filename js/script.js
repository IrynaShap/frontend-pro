function myIndexOf(array, searchElement) {
  let arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    if (array[index] === searchElement) {
      return index;
    }
  }
  return -1;
}

console.log(myIndexOf([1, 2, 3, 2], 2));

function myLastIndexOf(array, searchElement) {
  let arrayLength = array.length;
  for (let index = arrayLength - 1; index >= 0; index--) {
    if (array[index] === searchElement) {
      return index;
    }
  }
  return -1;
}

console.log(myLastIndexOf([1, 2, 3, 2], 2));

function myFind(array, callback) {
  let arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    if (callback(array[index], index, array)) {
      return array[index];
    }
  }
  return undefined;
}

console.log(myFind([5, 12, 8, 130, 44], x => x > 10));

function myFindIndex(array, callback) {
  let arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    if (callback(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

console.log(myFindIndex([5, 12, 8, 130, 44], x => x > 13));

function myIncludes(array, searchElement) {
  return myIndexOf(array, searchElement) !== -1;
}

console.log(myIncludes(['a', 'b', 'c'], 'b'));

function myEvery(array, callback) {
  let arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    if (!callback(array[index], index, array)) {
      return false;
    }
  }
  return true;
}

console.log(myEvery([2, 4, 6], x => x % 2 === 0));

function mySome(array, callback) {
  let arrayLength = array.length;
  for (let index = 0; index < arrayLength; index++) {
    if (callback(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

console.log(mySome([1, 3, 5, 6], x => x % 2 === 0));