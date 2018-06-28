'use strict';

/*
  we need to create 'buckets' to store the same value from the list of numbers
  we loop through the list and then 

*/

function insertionSort(array) {
  let length = array.length;

  for (let i = 0; i < length; i++) {
    let temp = array[i];
    let j;
    for (j = i - 1; j >= 0 && array[j] > temp; j--) {
      array[j + 1] = array[j];
    }

    array[j + 1] = temp;
  }

  return array;

}

function bucketSort(array, minVal, maxVal) {
  let bucketRange = 5;
  let bucketCount = Math.floor((maxVal - minVal) / bucketRange) + 1;
  let allBuckets = new Array(bucketCount);

  for (let i = 0; i < allBuckets.length; i++) {
    allBuckets[i] = [];
  }

  array.forEach(number => {
    allBuckets[Math.floor((number - minVal) / bucketRange)].push(number);
    // console.log(allBuckets[Math.floor((number - minVal) / bucketRange)]);
  });

  array.length = 0;

  allBuckets.forEach( bucket => {
    insertionSort(bucket);
    bucket.forEach(element => array.push(element));
  });

  // return
  return array;
}

let array = [
  89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 50,
  13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 88,
  27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 38,
  67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 82, 6,
  88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 17, 69,
  90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 87, 49, 83,
  6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5
];

console.log(bucketSort(array, 1, 98));