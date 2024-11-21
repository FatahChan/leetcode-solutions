

function helperUniquePaths(m: number, n: number, map: Map<string, number>): number {

    if (m === 1 || n == 1){
        return 1
    }
    if (map.has(`${m},${n}`)){
        return map.get(`${m},${n}`)!
    }
    // go right
    const rightResults = helperUniquePaths(m, n-1, map)
    // go down
    const downResults = helperUniquePaths(m-1, n, map)
    map.set(`${m},${n}`, rightResults + downResults)
    return map.get(`${m},${n}`)!
}
function uniquePaths(m: number, n: number): number {
    
    const dp: Map<string, number> = new Map()


    return helperUniquePaths(m, n, dp)
};

