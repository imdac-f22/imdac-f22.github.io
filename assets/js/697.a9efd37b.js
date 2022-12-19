(window.webpackJsonp=window.webpackJsonp||[]).push([[697],{915:function(e,t,s){"use strict";s.r(t);var r=s(0),a=Object(r.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("Using the "),s("a",{attrs:{href:"https://quizapi.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("QuizAPI"),s("OutboundLink")],1),e._v(", you will design and develop a web application that will display a random quiz question upon the user's request. When the user submits an answer they are informed if the selected answer was correct. The web application will keep track of the number of correct and incorrect answers.")]),e._v(" "),e._m(2),e._v(" "),s("p",[e._v("When a user first visits the site, they are presented with a form asking a difficulty level. With the provided difficulty level, the app will make a request to the Quiz API to retrieve a question. The question will then be displayed as a form, allowing the user to answer.")]),e._v(" "),s("p",[e._v("Once the user has answered the question, the app will inform the user if the answer was correct or incorrect. After which, the user will be asked again to select a difficulty level.")]),e._v(" "),s("p",[e._v("The app will also keep track of the number of correct or incorrect answers, displaying them on the page, and saving them to local storage. The user should be able to reset the stats at any time.")]),e._v(" "),e._m(3),e._v(" "),s("p",[e._v("To complete this assignment, students will be use the "),s("a",{attrs:{href:"https://quizapi.io",target:"_blank",rel:"noopener noreferrer"}},[e._v("QuizAPI"),s("OutboundLink")],1),e._v(". Students are required to log in and generate an API token.")]),e._v(" "),s("p",[e._v("The Quiz API can be used to retrieve quiz questions based on a different categories ("),s("code",[e._v("category")]),e._v(") and difficulty ("),s("code",[e._v("difficulty")]),e._v(") level. If no category or level is provided the API will choose one at random. The "),s("code",[e._v("limit")]),e._v(" parameter can be used to specify how many questions to return.  The Quiz API includes a "),s("a",{attrs:{href:"https://quizapi.io/api-config",target:"_blank",rel:"noopener noreferrer"}},[e._v("URL Generator"),s("OutboundLink")],1),e._v(" to help with the configuration of the options.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._m(7),e._v(" "),e._m(8),e._v(" "),e._m(9),e._v(" "),s("ol",[s("li",[e._v("The Quiz API does not specify a limit on usage. However, students are strongly encouraged to store the Question data in local storage or use a static file during development.")]),e._v(" "),s("li",[e._v("An object can be an excellent way to store data for a web application. Storing an object to local storage does require using "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON.stringify"),s("OutboundLink")],1),e._v(" and "),s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse",target:"_blank",rel:"noopener noreferrer"}},[e._v("JSON.parse"),s("OutboundLink")],1),e._v(".")]),e._v(" "),e._m(10),e._v(" "),e._m(11),e._v(" "),e._m(12),e._v(" "),e._m(13)])])},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"quiz"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#quiz","aria-hidden":"true"}},[this._v("#")]),this._v(" Quiz")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"objective"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#objective","aria-hidden":"true"}},[this._v("#")]),this._v(" Objective")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"app-overview"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-overview","aria-hidden":"true"}},[this._v("#")]),this._v(" App Overview")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"resources"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#resources","aria-hidden":"true"}},[this._v("#")]),this._v(" Resources")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The Quiz API will return a JSON array of objects, which will contain the "),t("code",[this._v("question")]),this._v(", the "),t("code",[this._v("answers")]),this._v(", and the "),t("code",[this._v("correct_answer")]),this._v(" as well as other data about the question. An example of the JSON data can be found below.")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"warning custom-block"},[s("p",{staticClass:"custom-block-title"},[e._v("NOTE")]),e._v(" "),s("p",[e._v("It was recently discovered that the "),s("code",[e._v("correct_answer")]),e._v(" property is often incorrect and sometimes set to "),s("code",[e._v("null")]),e._v(". Therefore, students are encouraged to use the "),s("code",[e._v("correct_answers")]),e._v(" property. This object contains properties "),s("code",[e._v("answer_a_correct")]),e._v(" through "),s("code",[e._v("answer_f_correct")]),e._v(" and will return "),s("code",[e._v('"true"')]),e._v(" for the correct answer.")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-json extra-class"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("508")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"question"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"A homepage is __________"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"description"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_a"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"an index of encyclopedia articles"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_b"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"the first page of a website"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_c"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"required for access to the Internet"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_d"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"where all Internet data is stored"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_e"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_f"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[e._v("null")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"multiple_correct_answers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"correct_answers"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_a_correct"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_b_correct"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"true"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_c_correct"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_d_correct"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_e_correct"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"false"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"answer_f_correct"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"false"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"correct_answer"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"answer_a"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"explanation"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"tip"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token null keyword"}},[e._v("null")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"tags"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n        "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"HTML"')]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"category"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Code"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"difficulty"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Easy"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"requirements"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Requirements")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ol",[s("li",[e._v("The assignment should utilize one HTML ("),s("strong",[e._v("index.html")]),e._v("), CSS ("),s("strong",[e._v("style.css")]),e._v("), and JavaScript ("),s("strong",[e._v("script.js")]),e._v(") file, each located at the root of the repository.")]),e._v(" "),s("li",[e._v("Feel free to use a modern CSS Framework like Bootstrap or Foundation, or a CSS reset ("),s("strong",[e._v("reset.css")]),e._v(").")]),e._v(" "),s("li",[e._v("You may not use inline events. All DOM events must be handled using Event Listeners.")]),e._v(" "),s("li",[e._v("You may not declare variables with "),s("code",[e._v("var")]),e._v(". Use either "),s("code",[e._v("const")]),e._v(" or "),s("code",[e._v("let")]),e._v(".")]),e._v(" "),s("li",[e._v("The use of JavaScript libraries is allowed.")]),e._v(" "),s("li",[e._v("Do not use the "),s("code",[e._v("XMLHttpRequest")]),e._v(" object or the jQuery "),s("code",[e._v("ajax()")]),e._v(" method. Use the Fetch API for asynchronous operations.")]),e._v(" "),s("li",[e._v("The web application should be responsive.")]),e._v(" "),s("li",[e._v("The web application should not experience any page refreshes.")]),e._v(" "),s("li",[e._v("The web application should include a form that asks the user to select a difficulty level.")]),e._v(" "),s("li",[e._v("The web application should asynchronously retrieve and display the question retrieved from the Quiz API that matches the difficulty level provided by the user.")]),e._v(" "),s("li",[e._v("The question should be displayed in a form that allows the user to select and submit an answer.")]),e._v(" "),s("li",[e._v("The web application should display a message informing the user if the selected answer was correct or incorrect and display the option to select a difficulty level.")]),e._v(" "),s("li",[e._v("The web application should track and display the number of correct and incorrect answers. The tally of correct and incorrect answers should be stored in local storage.")]),e._v(" "),s("li",[e._v("The web application should allow the user to reset the tally of correct and incorrect answers from local storage.")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"hints"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hints","aria-hidden":"true"}},[this._v("#")]),this._v(" Hints")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Some questions will contain multiple correct answers. However, for this project treat each question as a multiple choice and accept any correct answer. For example, if "),t("code",[this._v("answer_a")]),this._v(" and "),t("code",[this._v("answer_c")]),this._v(" are both correct, then selecting either should produce a correct response.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("Creating an array of answer keys (ie. "),t("code",[this._v("['answer_a', 'answer_b', ..., 'answer_f']")]),this._v("), can help in the displaying of correct answers.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("If a question does not use all six answers, the unused answers are set to "),t("code",[this._v("null")]),this._v(". A conditional statement can be used to determine if an answer should be created.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[this._v("The "),t("code",[this._v("correct_answers")]),this._v(" property can be stored in a custom data attribute of the corresponding answer property to quickly help identify if an answer is correct."),t("br"),this._v(" (ie. "),t("code",[this._v('<button data-correct="${question.correct_answers.answer_a_correct"> ${question.answers.answer_a} </button>')]),this._v(")")])}],!1,null,null,null);t.default=a.exports}}]);