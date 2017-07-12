var vowels = ["a", "e", "i", "o", "u"];
var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];


var wordToArray = function(word) {
  return word.split("");
};

/* 1
we need to turn the string into an array of letters
figure out whether the first letter is a vowel or not

  2
figure out if it is a consonant
check for consonants until we hit a vowel
*/
var isVowel = function(letter) {
  for (var i = 0; i < vowels.length; i++) {
    if (letter === vowels[i]) {
      return true;
    }
  }
  return false;
};

var isConsonant = function(letter) {
  for (var i = 0; i < consonants.length; i++) {
    if (letter === consonants[i]) {
      return true
    }
  }
  return false;
};

var consonantCount = function(word) {
  for (var i = 0; i < consonants.length; i++) {
    if (!isConsonant(word[i])) {
      return i;
    }
  }
};

var translatePigLatin = function(inputWord) {
  var arrayWord = wordToArray(inputWord);
  var firstLetter = arrayWord[0];

  if (isVowel(firstLetter)) {
    var vowelTranslation = arrayWord.concat("-way");
    return vowelTranslation.join("");
  }
  else if (isConsonant(firstLetter)) {
    var conTranslation = arrayWord.splice(1, arrayWord.length);
    console.log(conTranslation);
    conTranslation = conTranslation.concat("-" + firstLetter + "ay");
    return conTranslation.join("");
  }
};

$(function() {
  $("#pigLatin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#sentence").val();

    var translate = translatePigLatin(userInput);

    $("#output").text(translate);
  });
});
