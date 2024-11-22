function singleNumber(nums: number[]): number {
    let answer = nums[0]
    for (let i = 1; i < nums.length; i++){
        answer ^= nums[i];
    }
    return answer
};

console.log(singleNumber([4,1,2,1,2]))