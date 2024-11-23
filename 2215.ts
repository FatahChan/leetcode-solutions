function findDifference(nums1: number[], nums2: number[]): number[][] {
    const set1 = new Set(nums1)
    const set2 = new Set(nums2)

    const answer1:number[] = []
    const answer2:number[] = []

    set1.forEach((v) => set2.has(v)? null:answer1.push(v))
    set2.forEach((v) => set1.has(v)? null:answer2.push(v))

    return [answer1, answer2]
};

console.log(findDifference([1,2,3],[2,4,6]))
console.log(findDifference([1,2,3,3],[1,1,2,2]))