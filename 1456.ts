function maxVowels(s: string, k: number): number {
  let max = 0;
  const modifiedS = s.replaceAll(/[a|e|i|o|u]/gi, "_");
  // count the first k
  for (let i = 0; i < k; i++) {
    if (modifiedS[i] === "_") {
      max++;
    }
  }
  let currMax = max;

  for (let i = k; i < s.length; i++) {
    if (modifiedS[i] === "_") currMax++;
    if (modifiedS[i - k] === "_") currMax--;
    max = Math.max(currMax, max);
  }
  return max;
}

console.log(maxVowels("abciiidef", 3));
console.log(maxVowels("aeiou", 2));
console.log(maxVowels("leetcode", 3));
