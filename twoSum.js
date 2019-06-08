// *** TWO SUM SOLUTION #1 ***

var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        for(var j = i + 1; j < nums.length; j++){
            if(nums[i] + nums[j] === target){
                return [i,j]
            }
        }
    }
};

// *** TWO SUM SOLUTION #2 ***


var twoSum = function(nums, target) {
    for(var i = 0; i < nums.length; i++){
        if(nums.includes(target - nums[i], i + 1)){
            return [i, nums.indexOf(target - nums[i], i + 1)]
        }
    }
};
