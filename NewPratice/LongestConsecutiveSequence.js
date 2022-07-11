const longestConsec = () => {
    console.clear();
    const nums = [0,3,7,2,5,8,4,6,0,1]
    const numsSorted = nums.sort(function (a, b) {
      return a - b;
    });
    console.log(numsSorted);
    let count = 1;
    let max = 1;
    for (let i = 0; i < numsSorted.length; i++) {
      if (numsSorted[i + 1] - numsSorted[i] == 1) {
        count++;
      } else {
        max = Math.max(max, count);
        count = 1;
      }
    }
    return console.log(max);
  };
  longestConsec();
  