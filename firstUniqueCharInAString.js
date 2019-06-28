var firstUniqChar = function(s) {
    let current
    if(s.length === 2){
        if(s[0] === s[1]){
            return -1
        } else {
            return 0
        }
    }
    for(var i = 0; i < s.length; i++){
        current = s.substring(i + 1)
        console.log(current)
        if(!current.includes(s[i])){
            return i
        }
    }
    return -1
};
