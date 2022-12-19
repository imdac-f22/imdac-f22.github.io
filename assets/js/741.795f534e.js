(window.webpackJsonp=window.webpackJsonp||[]).push([[741],{959:function(e,t,s){"use strict";s.r(t);var a=s(0),r=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("div",{staticClass:"danger custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("A GitHub Classroom Assignment")]),e._v(" "),s("p",[e._v("This assignment must be accepted on "),s("a",{attrs:{href:"https://classroom.github.com/a/yGkVH2LR",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub Classroom"),s("OutboundLink")],1),e._v(".")])]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("For the midterm project you will be demonstrating your understanding JavaScript by creating a text-based word game called Scramble, where player must guess the word from a scramble of letters.")]),e._v(" "),e._m(2),e._v(" "),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),s("p",[e._v("The game ends when all words in the list have been guessed or after the player has received the maximum number of strikes.")]),e._v(" "),s("p",[e._v("After the games ends, the player will be present with a total number points earned for that game.")]),e._v(" "),e._m(7),e._v(" "),s("p",[e._v("The following requirement must be met in order to complete the assignment successfully:")]),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),e._m(10),e._v(" "),s("Scrimba",{attrs:{id:"/c/cR3EJaTk"}}),e._v(" "),e._m(11),e._v(" "),s("p",[e._v("Below are a few suggestions, recommendations, and answers to common questions on how to complete this project. This list will be updated as questions arise.")]),e._v(" "),e._m(12),e._v(" "),e._m(13),e._v(" "),s("p",[e._v("The following video is an example of how a finished version of the assignment could look like.")]),e._v(" "),s("Youtube",{attrs:{id:"tl6FeUNb06A"}}),e._v(" "),e._m(14),e._v(" "),s("p",[e._v("The following rubric will be use to grade this assignment.")]),e._v(" "),e._m(15),e._v(" "),e._m(16),e._v(" "),s("p",[e._v("When the project is completed, follow the steps below to submit for grading:")]),e._v(" "),e._m(17)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"scramble"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scramble","aria-hidden":"true"}},[this._v("#")]),this._v(" Scramble")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"objective"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"game-play"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#game-play","aria-hidden":"true"}},[this._v("#")]),this._v(" Game Play")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("When the page loads, the player will be presented with a list of instructions in the browser's console. The player can request these instructions again at any time by using the "),t("code",[this._v("help()")]),this._v(" command. The "),t("code",[this._v("help()")]),this._v(" function has been provided in the started files.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("After the player starts the game, they will be given a scrambled word. The player will be able to guess the correct spelling of the word using the "),t("code",[this._v("guess()")]),this._v(" command. If correctly guessed the word the player will receive a point. If guessed incorrectly, they player will receive a strike.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("A new word will not be displayed until player guesses correctly or the player passes on the work. If a player guesses correctly or passes on a word that word "),t("strong",[this._v("should not")]),this._v(" appear again during the game.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The player can skip a word by using the "),t("code",[this._v("pass()")]),this._v(" command. Passing on a word will remove the word from the list, but the player will not receive a point. The player can only pass a limited number of times.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("Clone this repository from GitHub and use the provided files to complete the assignment. The files contain "),s("code",[e._v("index.html")]),e._v(", "),s("code",[e._v("style.css")]),e._v(", and "),s("code",[e._v("scramble.js")]),e._v(". "),s("strong",[e._v("All changes for this assignment will be made to the "),s("code",[e._v("scramble.js")]),e._v(" file.")])]),e._v(" "),s("li",[e._v("Create a words array to hold the words that will be used in the game. To keep things simple do NOT include words with spaces or special characters. The array should include at least 10 words.")]),e._v(" "),s("li",[e._v("Create a game object. The game object will hold the current game's status including but not limited to:\n"),s("ol",[s("li",[e._v("The game active status")]),e._v(" "),s("li",[e._v("The random list of words")]),e._v(" "),s("li",[e._v("The current word")]),e._v(" "),s("li",[e._v("The current scrambled word")]),e._v(" "),s("li",[e._v("The number of strikes")]),e._v(" "),s("li",[e._v("The number of points")]),e._v(" "),s("li",[e._v("The maximum number of allowed strikes")]),e._v(" "),s("li",[e._v("The number of passes used")]),e._v(" "),s("li",[e._v("The maximum number of passes")])])]),e._v(" "),s("li",[e._v("Create a "),s("code",[e._v("start()")]),e._v(" function, which is used to start a new game, will do the following:\n"),s("ol",[s("li",[e._v("Reset all the game status properties")]),e._v(" "),s("li",[e._v("Make a copy of the words array and store it in the game object")]),e._v(" "),s("li",[e._v("Shuffle the words array copy. A shuffle function was provided in the starter files.")]),e._v(" "),s("li",[e._v("Select a word from the shuffled array save to the game object.")]),e._v(" "),s("li",[e._v("Display a scrambled version of the word to the player.")])])]),e._v(" "),s("li",[e._v("If a game currently active than a new game CANNOT be started.")]),e._v(" "),s("li",[e._v("Create a "),s("code",[e._v("guess()")]),e._v(" function that will be used by the player to guess the word and will do the following:\n"),s("ol",[s("li",[e._v("Check to see if the guessed word matches the current word unscrambled. "),s("strong",[e._v("Case should NOT matter.")])]),e._v(" "),s("li",[e._v("If the words do match the player will receive a point. The word should be removed from the game list (the same word should not appear twice) and the next word should be displayed.")]),e._v(" "),s("li",[e._v("If the words do NOT match the player will receive a strike and the current word will be displayed again.")])])]),e._v(" "),s("li",[e._v("The player should NOT be able to make guesses if there is no active game.")]),e._v(" "),s("li",[e._v("Create a "),s("code",[e._v("pass()")]),e._v(" function that will be used by the player to skip a word and will do the following:\n"),s("ol",[s("li",[e._v("Check if player has any passes left")]),e._v(" "),s("li",[e._v("Remove the from the game list (the same word should not appear twice) and the next word should be displayed.")]),e._v(" "),s("li",[e._v("The player should "),s("strong",[e._v("NOT")]),e._v(" receive a point for passing.")])])]),e._v(" "),s("li",[e._v("The player should NOT be able to pass if there is no active game.")]),e._v(" "),s("li",[e._v("The game will end if there are no more words in the list OR the player has received the maximum number of strikes")]),e._v(" "),s("li",[e._v("When the game ends the player total points should be displayed.")]),e._v(" "),s("li",[e._v("After the game ends the player should be able to start a new game using the "),s("code",[e._v("start()")]),e._v(" function.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"shuffle-function"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#shuffle-function","aria-hidden":"true"}},[this._v("#")]),this._v(" Shuffle Function")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The following screencast shows how to use the provided "),t("code",[this._v("shuffle()")]),this._v(" function.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"hints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hints","aria-hidden":"true"}},[this._v("#")]),this._v(" Hints")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("You may need more functions than just the ones used for the actions. For example, you may want a function that will get and scramble the next word.")]),e._v(" "),s("li",[e._v("You may want to work with all capital letters. It will simplify things when checking if a letter is in a puzzle. You can use string method "),s("code",[e._v("toUpperCase()")]),e._v(" to convert a string to all capital letter.")]),e._v(" "),s("li",[e._v("The string method "),s("code",[e._v("split()")]),e._v(" will convert a string to array.")]),e._v(" "),s("li",[e._v("The array method "),s("code",[e._v("join()")]),e._v(" will convert an array to a string.")]),e._v(" "),s("li",[e._v("The array method "),s("code",[e._v("slice()")]),e._v(" can be used to make a copy of an array.")]),e._v(" "),s("li",[e._v("The array methods "),s("code",[e._v("pop()")]),e._v(", "),s("code",[e._v("shift()")]),e._v(", and "),s("code",[e._v("splice()")]),e._v(" will return the item that was removed from an array.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"example"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#example","aria-hidden":"true"}},[this._v("#")]),this._v(" Example")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"rubric"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#rubric","aria-hidden":"true"}},[this._v("#")]),this._v(" Rubric")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("table",[s("thead",[s("tr",[s("th",[e._v("Task")]),e._v(" "),s("th",{staticStyle:{"text-align":"center"}},[e._v("Points")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("A game object was created to maintain the status of the game")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),s("tr",[s("td",[e._v("An array of words was created with at least 10 words")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),s("tr",[s("td",[e._v("The "),s("code",[e._v("start()")]),e._v(" function checks if there is a current game")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),s("tr",[s("td",[e._v("The "),s("code",[e._v("start()")]),e._v(" function reset all the properties")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),s("tr",[s("td",[e._v("The "),s("code",[e._v("start()")]),e._v(" function create a shuffled copy to the words array")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),s("tr",[s("td",[e._v("The "),s("code",[e._v("start()")]),e._v(" function displays the first scrambled word")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),s("tr",[s("td",[e._v("The "),s("code",[e._v("guess()")]),e._v(" function checks if there is a current game")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),s("tr",[s("td",[e._v("The "),s("code",[e._v("guess()")]),e._v(" function compares the guessed word and the current word without worrying about case")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),s("tr",[s("td",[e._v("The "),s("code",[e._v("guess()")]),e._v(" function adds a point to the player's score and displays the next scrambled word if the guessed word matches the current word.")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("6")])]),e._v(" "),s("tr",[s("td",[e._v("The "),s("code",[e._v("guess()")]),e._v(" function adds a strike to the player's strikes and displays the same scrambled word if the guessed word does not match the current word.")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("6")])]),e._v(" "),s("tr",[s("td",[e._v("The "),s("code",[e._v("pass()")]),e._v(" function check if there is a current game and if the player has any passes remaining")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),s("tr",[s("td",[e._v("The "),s("code",[e._v("pass()")]),e._v(" function removes a pass from the player's passes and displays the next scrambled word.")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("6")])]),e._v(" "),s("tr",[s("td",[e._v("The games ends when the player's reaches the maximum number of strikes or the words in the list have been played.")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("3")])]),e._v(" "),s("tr",[s("td",[e._v("The game provide appropriate responses for all player actions.")]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[e._v("2")])]),e._v(" "),s("tr",[s("td",[s("strong",[e._v("Total")])]),e._v(" "),s("td",{staticStyle:{"text-align":"center"}},[s("strong",[e._v("50")])])])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"submission"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#submission","aria-hidden":"true"}},[this._v("#")]),this._v(" Submission")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v('Create a commit with the message "Completes the Scramble assignment"')]),this._v(" "),t("li",[this._v("Push all commits to GitHub.")]),this._v(" "),t("li",[this._v("Submit the URL to your GitHub repository to the "),t("strong",[this._v("Scramble")]),this._v(" assignment on BrightSpace.")])])}],!1,null,null,null);t.default=r.exports}}]);