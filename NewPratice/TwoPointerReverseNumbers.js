//Reverse the numbers in the array using two pointer
const TwoPointerReverseNumbers = () => {
    console.clear()
    const nums = [9,8,7,6,5,4,3,2,1]
    let start = 0
    let end = nums.length - 1
    while (start < end){
        let temp = nums[start]
        nums[start] = nums[end]
        nums[end] = temp
        start++
        end--
    }
    return console.log(nums);
}
TwoPointerReverseNumbers()