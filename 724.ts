function pivotIndex(nums: number[]): number {
    const leftPrefixSum = [0]
    for (let i = 0; i < nums.length; i++){
        leftPrefixSum.push(leftPrefixSum[i] + nums[i])
    }

    const totalSum = leftPrefixSum[leftPrefixSum.length - 1]
    for (let i = 1; i < leftPrefixSum.length; i++){
        if (i === 1 && totalSum - leftPrefixSum[i] === 0){
            return i -1
        }
        if (i === leftPrefixSum.length - 1 && leftPrefixSum[i-1] === 0){
            return i - 1
        }

        if (leftPrefixSum[i-1] === totalSum - leftPrefixSum[i]){
            return i -1
        }
    }
    return -1
    
};


console.log(pivotIndex([1,7,3,6,5,6]))
console.log(pivotIndex([1,2,3]))
console.log(pivotIndex([2,1,-1]))
console.log(pivotIndex([-1,-1,-1,1,1,1]))