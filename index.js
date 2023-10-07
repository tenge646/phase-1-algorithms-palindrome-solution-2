function isPalindrome(word) {
  // Write your algorithm here
 
    // Iterate from the beginning of the string to the middle of the string
    for (let startIndex = 0; startIndex < word.length / 2; startIndex++) {
      // Calculate the corresponding index from the end of the string
      const endIndex = word.length - 1 - startIndex;
  
      // Compare the characters at the current positions
      if (word[startIndex] !== word[endIndex]) {
        return false; // If characters don't match, it's not a palindrome
      }
    }
  
    return true; // If all characters match, it's a palindrome
  }


/* 
  Add your pseudocode here
function isPalindrome(word):
  Initialize a variable startIndex to 0
  Initialize a variable endIndex to (length of word - 1)
  
  While startIndex is less than endIndex:
    If word[startIndex] is not equal to word[endIndex]:
      Return false
    Increment startIndex by 1
    Decrement endIndex by 1

  Return true
*/

/*
  Add written explanation of your solution here
  The isPalindrome function checks whether a given input string is a palindrome, 
  which means it reads the same forwards and backwards.
  It does this by comparing characters from both ends of the string towards the middle. 
  If it finds any pair of characters that don't match, it immediately returns false, 
  indicating that the string is not a palindrome. If it completes the loop without finding any non-matching pairs, 
  it returns true, indicating that the string is a palindrome. 
  This approach ensures efficiency by only comparing characters up to the middle of the string.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
