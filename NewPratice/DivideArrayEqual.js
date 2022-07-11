//2206. You are given an integer array nums consisting of 2 * n integers.

// You need to divide nums into n pairs such that:

// Each element belongs to exactly one pair.
// The elements present in a pair are equal.
// Return true if nums can be divided into n pairs, otherwise return false.
// Input: nums = [3,2,3,2,2,2]
// Output: true
// Explanation: 
// There are 6 elements in nums, so they should be divided into 6 / 2 = 3 pairs.
// If nums is divided into the pairs (2, 2), (3, 3), and (2, 2), it will satisfy all the conditions.

const divideArray = () => {
    console.clear();
    const nums = [3, 2, 3, 2, 2, 2];
    let hsMap = new Map();
    if (nums.length % 2 !== 0) {
      return console.log(false);
    }
    for (let i = 0; i < nums.length; i++) {
      if (hsMap.has(nums[i])) {
        hsMap.set(nums[i], hsMap.get(nums[i]) + 1);
      } else {
        hsMap.set(nums[i], 1);
      }
    }
    for (const [key, value] of hsMap) {
      if (value % 2 !== 0) {
        return console.log(false);
      }
    }
    return console.log(true);
  };
  divideArray();
  