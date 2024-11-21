function reverseWords(s: string): string {
  const regex = /\s{2,}/gi;
  return s.trim().replace(regex, " ").split(" ").reverse().join(" ");
}
