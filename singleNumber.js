var singleNumber = function(nums) {
    let obj = {}
    for(var i = 0; i < nums.length; i++){
        if(obj[nums[i]] === undefined){
            obj[nums[i]] = 1
        }else{
            obj[nums[i]] += 1
        }
    }
    let singleNum = Object.keys(obj).find(key => obj[key] === 1)
    return singleNum
};
