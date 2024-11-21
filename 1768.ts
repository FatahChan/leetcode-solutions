function mergeAlternately(word1: string, word2: string): string {
  const splittedWord1 = word1.split("");
  const splittedWord2 = word2.split("");
  const minLength = Math.min(splittedWord1.length, splittedWord2.length);
  let answerArray: string[] = [];

  for (let i = 0; i < minLength; i++) {
    answerArray.push(splittedWord1[i]);
    answerArray.push(splittedWord2[i]);
  }

  answerArray = answerArray
    .concat(splittedWord1.slice(minLength - 1))
    .concat(splittedWord2.slice(minLength));

  return answerArray.join();
}
