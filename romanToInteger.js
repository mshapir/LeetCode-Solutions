var romanToInt = function(s) {
    const symObj = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0
    for(var i = 0; i < s.length; i++){
        let first = symObj[s[i]]
        let second = symObj[s[i+1]]
        if(first < second){
              total += second - first
            i++
    } else {
        total += symObj[s[i]]
    }

};
    return total
}
