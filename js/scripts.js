var vowels = ["a", "e", "i", "o", "u"];

var wordToArray = function(word) {
  return word.split("");
}

var startsWithVowel = function(wordToArray(word)[0]) {
  return isVowel()
}

/* 1
we need to turn the string into an array of letters
figure out whether the first letter is a vowel or not

  2
figure out if it is a consonant
check for consonants until we hit a vowel
*/
var isVowel = function(letter) {
  for (var i = 0; i < vowels.length; i++) {
    if (letter == vowels[i]) {
      return true;
    }
  }
  return false;
}

var translatePigLatin = function() {

}

$(function() {
  $("#pigLatin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#sentence").val();

    translatePigLatin(userInput);
  });
});
