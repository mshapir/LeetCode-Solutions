var removeDuplicates = function(nums) {
   if(nums.length <= 1){
      return nums.length
      }

    let first = 0
    while( first < nums.length){
       if(nums[first] === nums[first + 1]){
        nums.splice(first, 1)
        first--
    }
        first++
    }

    return nums.length
};
