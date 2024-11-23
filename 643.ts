function findMaxAverage(nums: number[], k: number): number {
    const prefixSum = [0]
    for (let i = 0; i < nums.length; i++){
        prefixSum.push(nums[i] + prefixSum[i])
    }
    let maxAverage = prefixSum[k]/k;

    for (let i = 1; i < prefixSum.length - k + 1; i++){
        const sum = prefixSum[i+k-1] - prefixSum[i-1]
        const avergae = sum/k;
        maxAverage = Math.max(avergae, maxAverage);
    }
    return maxAverage
};

console.log(findMaxAverage([0,1,1,3,3], 4))
console.log(findMaxAverage([1,12,-5,-6,50,3], 4))
console.log(findMaxAverage([5], 1))