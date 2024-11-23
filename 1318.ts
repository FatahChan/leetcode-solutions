function minFlips(a: number, b: number, c: number): number {
    let answer = 0
    const changedBits = (a|b)^c;
    // only one of a or b needs to flip
    let singleChangeBits = changedBits & ~(a & b & ~c);
    // both a and b needs to flip
    let doubleChangeBits = changedBits & (a & b & ~c);

    // counting
    while (singleChangeBits || doubleChangeBits){
        answer += singleChangeBits & 1
        singleChangeBits >>= 1;
        answer += (doubleChangeBits & 1) * 2;
        doubleChangeBits >>= 1;
    }

    return answer;
};
console.log(minFlips(2, 6, 5))