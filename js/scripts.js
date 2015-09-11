var replaceWord = function(userString, findWord, replace) {
  return userString.replace(new RegExp(findWord, 'g'), replace);
};

// $(document).ready(function() {
//   $('form#findandreplace').submit(function(event) {
//     var userString = $('input#userString').val();
//     var findWord = $('input#findWord').val();
//     var replace = $('input#replace').val();
//
//     var result = replaceWord(userString, findWord, replace);
//
//     $('#result').text(result);
//     event.preventDefault();
//   });
// });
