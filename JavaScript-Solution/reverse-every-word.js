function reverseWords(sentence) {
    // Split the sentence into words.
    const words = sentence.split(" ");
  
    // Create an empty array to store the reversed words.
    const reversedWords = [];
  
    // Iterate over the words and reverse each word.
    for (let i = 0; i < words.length; i++) {
      let reversedWord = "";
      for (let j = words[i].length - 1; j >= 0; j--) {
        reversedWord += words[i][j];
      }
      reversedWords.push(reversedWord);
    }
  
    // Join the reversed words back into a sentence.
    const reversedSentence = reversedWords.join(" ");
  
    // Return the reversed sentence.
    return reversedSentence;
  }
  
  // Example
  const sentence = "This is a sunny day";
  const reversedSentence = reverseWords(sentence);
  
  console.log("This is a sunny day");
  console.log(reversedSentence);