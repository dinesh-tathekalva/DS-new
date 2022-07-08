const removeElement = () => {
    // console.clear();
    const nums = [3,2,2,3]
    const val = 2;
    for (let i = 0; i < nums.length; i++) {
      while (nums[i] === val) {
        nums.splice(i, 1);
      }
    }
    return console.log(nums.length);
  };
  removeElement();
  