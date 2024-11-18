function countWords(sentence: string): number {
  const words: string[] = sentence.trim().split(/\s+/);
  return words.length;
}

console.log(countWords("Hello world! This is a test.")); // 6

