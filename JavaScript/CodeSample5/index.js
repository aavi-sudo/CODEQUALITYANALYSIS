function countWords(sentence) {
  const words = sentence.trim().split(/\s+/);
  return words.length;
}

console.log(countWords("Hello world! This is a test.")); // 6

