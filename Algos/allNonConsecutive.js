/* 
Given an array of ints, find all the non-consecutive integers
A number is non-consecutive if it is NOT exactly 1 larger than the previous element.
The first element is never considered non-consecutive.
Return an array of objects where each object contains the number itself
and it's index.
*/

const nums1 = [1, 2, 3, 4, 6, 7, 8, 10];
const expected1 = [
    { i: 4, n: 6 },
    { i: 7, n: 10 },
];

const nums2 = [];
const expected2 = [];

const nums3 = [1, 3, 7, 9];
const expected3 = [
    { i: 1, n: 3 },
    { i: 2, n: 7 },
    { i: 3, n: 9 },
];
// Explanation: Index 0 has no number before it, so it is not included.

/**
 * Finds all the non-consecutive (out of order) numbers from the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @typedef {Array<{i: number, n: number}>} NonConsecNums Array of objects.
 * @property {number} i The index of the non consecutive number.
 * @property {number} n The non consecutive number itself.
 * @returns {NonConsecNums}
 */


function allNonConsecutive(sortedNums) {
    if (sortedNums.length < 1) {
        return sortedNums;
    }
    let expectedArr = [];
    for (i = 0; i < sortedNums.length; i++) {
        if (i + 1 < sortedNums.length) {
            if ((sortedNums[i] + 1) !== sortedNums[i + 1]) {
                expectedArr.push({ i: i + 1, n: sortedNums[i + 1] })
            }
        }
    }
    return expectedArr;
}
console.log(allNonConsecutive(nums1));
console.log(allNonConsecutive(nums2));
console.log(allNonConsecutive(nums3));