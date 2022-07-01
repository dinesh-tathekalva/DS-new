var containsDuplicate = function () {
    console.clear();
    const nums = [1, 2, 3, 1];
    const hsMap = new Map();
    for (let i = 0; i < nums.length; i++) {
      if (hsMap.has(nums[i])) {
        hsMap.set(nums[i], hsMap.get(nums[i]) + 1);
      } else {
        hsMap.set(nums[i], 1);
      }
    }
    for (const [key, value] of hsMap.entries()) {
      if (value > 1) {
        return console.log(true);
      }
    }
    return console.log(false);
  };
  containsDuplicate();
  