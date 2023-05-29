function insertCharacters() {
  let word = document.getElementById("word").value;
  let modifiedWord = "";
  let finalResult = "";

  // Insert characters randomly
  for (let i = 0; i < word.length; i++) {
    modifiedWord += word.charAt(i) + "*";
    const endIndex = modifiedWord.indexOf(" ");
    finalResult = modifiedWord.slice(0, endIndex);
  }

  // Display the modified word
  const result = (document.getElementById("result").textContent = finalResult);
  console.log(result);
}
