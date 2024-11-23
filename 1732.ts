function largestAltitude(gain: number[]): number {
    let currMax = 0;
    let currSum = 0;
    for (let i = 0; i < gain.length; i++){
        currSum += gain[i]
        currMax = Math.max(currMax, currSum)
    }  
    return currMax
};