function countBits(n: number): number[] {
    const answer = [0]
    for (let i = 1; i <= n;i ++){
        let count = 0;
        let number = i;
        while (number){
            count += number & 1
            number = number>>1
        }
        answer.push(count)
    }
    return answer
};

console.log(countBits(5))