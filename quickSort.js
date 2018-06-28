'use strict';

/*
  create a function that takes an array a start and an end
  create a partition function that will go throught the split array and swap numbers
  create a swap function that will swap the elements passed through
  the quick sort function creates a partition and recursively sorts both halfs
  by rearranging the original array
  average O(n log n);
  worst O(n^2);
  best O(n log n);
*/

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}

function partition(array, start, end) {
  const pivot = array[end - 1]; //create variable called pivot thats has the last element of the arr
  let j = start; // create a variable called j that gets set to start
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {//if the element i in array is less than or equal to pivot
      swap(array, i, j);//swap the the element i and j;
      j++;
    }
  }
  swap(array, end - 1, j);//swaps one more spot less than the end with j
  return j;
}

function quickSort(array, start = 0, end = array.length) {
  start = start;
  end = end;

  if (start >= end) return array; // if the start is less than the end return the array

  const middle = partition(array, start, end); //create variable middle that takes the partition variable

  array = quickSort(array, start, middle); // set array equal to quickSort and recursively call to sort the left half
  array = quickSort(array, middle + 1, end); // set array to equal to quicksort and recursively call to sort the right half

  return array; // return the array
}

let array = [
  89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50, 13, 40,
  48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88, 27, 68, 15, 62, 93,
  98, 73, 28, 16, 46, 87, 28, 65, 38, 67, 16, 85, 63, 23, 69, 64, 91,
  9, 70, 81, 27, 97, 82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38,
  28, 13, 17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87,
  49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
];

console.log(quickSort(array));

