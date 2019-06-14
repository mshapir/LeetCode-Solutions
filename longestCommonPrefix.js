var longestCommonPrefix = function(arr) {
    if (arr.length === 0) return ''
    let shortest = arr.reduce((a,b) => a.length <= b.length ? a : b)
    for(var i = 0; i < arr.length; i++){
       while(!arr[i].startsWith(shortest) && shortest.length > 0){
          shortest = shortest.substr(0, shortest.length - 1);
          }
    }
    
    return shortest
};
