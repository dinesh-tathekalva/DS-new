// const BuySellStocks = () => {
//     const stocks = [9, 3, 2, 1, 7, 2, 9];
//     let max =0 
//     for(let i=0; i<stocks.length-1; i++){
//         for(let j=i+1; j< stocks.length; j++){
//             let profit = stocks[j] - stocks[i]
//             max = Math.max(max, profit)
//         }
//     }
//     return console.log(max);
// }
// BuySellStocks()

var BuySellStocks = function() {
    const prices = [9, 3, 2, 1, 7, 2, 9];
    let result = 0;
    let min = prices[0]
    for(let i = 1; i < prices.length; i++) {
        min = Math.min(prices[i], min);
        result = Math.max(result, prices[i] - min);
    }

    return console.log(result);;
};
BuySellStocks()