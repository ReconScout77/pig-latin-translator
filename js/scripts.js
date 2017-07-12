var vowelsLower = ["a", "e", "i", "o", "u"];

var vowels = [];
vowels = vowelsLower.slice();
for (var i = 0; i < vowelsLower.length; i++) {
  vowels.push(vowelsLower[i].toUpperCase());
}

var consonantsLower = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

var consonants = [];
consonants = consonantsLower.slice();
for (var i = 0; i < consonantsLower.length; i++) {
  consonants.push(consonantsLower[i].toUpperCase());
}

var wordToArray = function(word) {
  return word.split("");
};

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

var translatePigLatinWord = function(inputWord) {
  var arrayWord = wordToArray(inputWord);
  var firstLetter = arrayWord[0];

  if (isVowel(firstLetter)) {
    var vowelTranslation = arrayWord.concat("-way");
    return vowelTranslation.join("");
  }
  else if (isConsonant(firstLetter)) {
    var initialConCount = consonantCount(arrayWord);
    var conTranslation = arrayWord.splice(initialConCount, arrayWord.length);
    conTranslation = conTranslation.concat("-" + arrayWord.join("") + "ay");
    return conTranslation.join("");
  }
};

var parseWords = function(inputString) {
  return inputString.split(" ");
};

var translatePigLatin = function(longString) {
  arrayOfWords = parseWords(longString);
  for (var i = 0; i < arrayOfWords.length; i++) {
    arrayOfWords[i] = translatePigLatinWord(arrayOfWords[i]);
  }

  return arrayOfWords.join(" ");
};

$(function() {
  $("#pigLatin").submit(function(event) {
    event.preventDefault();
    var userInput = $("#sentence").val();

    var translate = translatePigLatin(userInput);

    $("#output").text(translate);
  });
});
