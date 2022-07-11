const nums =[3,2,4]
const target = 6
const twoSum = function(nums, target) {
    const result = []
    const hsMap = new Map()
    for(let i =0; i<nums.length; i++){
        if(hsMap.has(target - nums[i])){
            result[0] = i
            result[1] = hsMap.get(target - nums[i])
        }      
        else{
            hsMap.set(nums[i], i)
        }
    }
    return console.log(result)
};
twoSum(nums, target)