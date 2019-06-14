var isValid = function(s) {
    if(s === '') return true;
    const obj = {
        ')': '(',
        '}': '{',
        ']': '['
    }
    let stack = [];
    for(var i = 0; i < s.length; i++){
        if(s[i] === '(' || s[i] === '[' || s[i] === '{'){
            stack.push(s[i])
        }
        if(s[i] === ')' || s[i] === ']' || s[i] === '}'){
            if (stack[stack.length - 1] === obj[s[i]]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0
};
