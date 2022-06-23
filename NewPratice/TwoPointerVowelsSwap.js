const TwoPointerVowelsSwap = () => {
    const str = "dineshmohana"
    const strArr = [...str]
    let start = 0
    let end = str.length - 1
    const vowels = "aeiou"
    while(start < end){
        while(!vowels.includes(strArr[start]) && start < end){
            start++
        }
        while(!vowels.includes(strArr[start]) && start < end){
            end--
        }
        let temp = strArr[start]
        strArr[start] = strArr[end]
        strArr[end] = temp
        start++
        end--
    }
    return console.log(strArr.join(""));
}
TwoPointerVowelsSwap()