var isPalindrome = function(s) {
    let str = s.replace(/\W/g, '').toLowerCase()
    for(var i = 0; i < str.length / 2; i++){
        if(str[i] !== str[str.length - i - 1]){
            return false
        }
    }
    return true
};
