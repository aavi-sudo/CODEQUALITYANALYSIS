function isPalindrome(word: string): boolean {
  const cleaned: string = word.toLowerCase().replace(/[^a-z0-9]/g, "");
  return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("Racecar")); // true
console.log(isPalindrome("Hello"));   // false

