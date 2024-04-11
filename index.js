function findFirstMissingNumber(arr) {
  //Input is an array integer numbers of lenght n
  //Assuming the array is of positive integer numbers only and if no missing number in the sequence, then return arr[n-1]+1
  // Filter out negative numbers and sort the array
  const positiveArr = arr.filter((num) => num >= 0).sort((a, b) => a - b);

  // If the filtered array is empty, then just return zero
  if (positiveArr.length === 0) {
    return 0;
  }

  // Iterate through the array to find the first missing number
  for (let i = 0; i < positiveArr.length - 1; i++) {
    // If a gap is found, return the missing number
    if (positiveArr[i + 1] - positiveArr[i] > 1) {
      return positiveArr[i] + 1;
    }
  }

  // If no gaps are found, return the next number after the last in the array
  return positiveArr[positiveArr.length - 1] + 1;
}

// Test Cases
const tests = [
  { arr: [-3, -2, 0, 1, 2], expected: 3 },
  { arr: [1, 2, 3], expected: 4 },
  { arr: [0, 1, 2, 3], expected: 4 },
  { arr: [7, 6, 5, 4, 0, 1, 3], expected: 2 },
  { arr: [0, 1, 3, 4], expected: 2 },
  { arr: [], expected: 0 },
  { arr: [-5, -4, -3, -1], expected: 0 },
  { arr: [5, 0, 1, 3, 2], expected: 4 },
  { arr: [4, 5, 0, 3, 2], expected: 1 },
  { arr: [7, 9, 10, 11, 12], expected: 8 },
  { arr: [7, 8, 9, 10, 11, 12], expected: 13 },
];

tests.forEach((test, index) => {
  const result = findFirstMissingNumber(test.arr);
  console.assert(
    result === test.expected,
    `Test ${index + 1} failed: Expected ${test.expected}, got ${result}`
  );
  if (result === test.expected) {
    console.log(
      `Test ${index + 1} passed: the first missing number is ${result}`
    );
  }
});
