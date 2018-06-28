'use strict';

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;

  // While:
  // the left array's length is greater than the left-index
  // AND
  // the right array's length is greater than the right-index
  while (leftIndex < left.length && rightIndex < right.length) {
    // Check if the left array's left index is less than the right array's right index
    if(left[leftIndex] < right[rightIndex]) { // if it is
      // set the array's output index to the left array's left index, incremented by 1
      array[outputIndex++] = left[leftIndex++];
    } else { // otherwise
      // set the array's output index to the left array's right index, incremented by 1
      array[outputIndex++] = right[rightIndex++];
    }
  }

  // Loop over the left array
  for (let i = leftIndex; i < left.length; i++) {
    // For every index in the array, set the array's output index(incremented each iteration) to the left array's index
    array[outputIndex++] = left[i];
  }

  // Loop over the right array
  for (let i = rightIndex; i < right.length; i++) {
    // For every index in the array, set the array's output index(incremented each iteration) to the right array's index
    array[outputIndex++] = right[i];
  }
  // return the merged array
  return array;
}


function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  
  return merge(left, right, array);
}

let array = [
  89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40,
  48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93,
  98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91,
  9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38,
  28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87,
  49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
];

console.log(mergeSort(array));