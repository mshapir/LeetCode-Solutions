var isAnagram = function(s, t) {
    let s1 = s.split('').sort()
    let s2 = t.split('').sort()
    for(var i = 0; i< Math.max(s1.length, s2.length); i++){
        if(s1[i] !== s2[i]){
            return false
        }
    }
    return true
};
