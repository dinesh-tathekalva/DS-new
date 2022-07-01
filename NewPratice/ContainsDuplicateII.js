const containsNearbyDuplicate = () => {
    const k = 3
    const nums =[1,2,3,1]
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        if (map.has(num)) {
            const j = map.get(num);
            if (i - j <= k) return console.log(true);;
        } 
        map.set(num, i);
    }
    return console.log(false);;
};
containsNearbyDuplicate()