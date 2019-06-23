var climbStairs = function(n) {
    return climbStairsR(n, [])
};

function climbStairsR(n, mem) {
    if(n <= 2 ) return n;
    if(mem[n] === undefined){
        mem[n] = climbStairs(n-1, mem) + climbStairs(n-2, mem)
    }
    return mem[n]
}
