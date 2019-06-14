var maxSubArray = function(arr) {
    if(arr.length === 1) return arr[0]
   var currentMax = 0;
    let max = Math.max(...arr)
    for (var i = 0; i < arr.length; i++) {
      currentMax = Math.max(arr[i], currentMax + arr[i]);
      if(currentMax > max) max = currentMax;
    }
    return max;
};
