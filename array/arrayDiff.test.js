
const arrayDiff=require("./arrayDiff.js")

describe('arrayDiff', () => {
  test('returns an array containing elements that are in the first array but not the second', () => {
    const result = arrayDiff([1, 2, 3, 4, 5], [7, 9, 2, 1]);
    expect(result).toEqual([3, 4, 5]);
  });

  test('returns an empty array when the second array contains all elements of the first array', () => {
    const result = arrayDiff([1, 2, 3], [3, 2, 1]);
    expect(result).toEqual([]);
  });

  test('returns the first array when the second array is empty', () => {
    const result = arrayDiff([1, 2, 3], []);
    expect(result).toEqual([1, 2, 3]);
  });

  test('returns an empty array when both arrays are empty', () => {
    const result = arrayDiff([], []);
    expect(result).toEqual([]);
  });
});
