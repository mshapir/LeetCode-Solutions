var plusOne = function(arr) {
    let num = 0
    let resultNum = 0
    for(var i = arr.length - 1; i >= 0; i--){
        resultNum = arr[i] + 1
        if(resultNum === 10){
            arr[i] = 0
        } else {
            arr[i] = resultNum
            return arr
        }
        num = parseInt(resultNum / 10)
    }
     if(num > 0){
            arr.unshift(num)
        }
    return arr;
};
