(window.webpackJsonp=window.webpackJsonp||[]).push([[375],{593:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("While some of these coding mistakes are syntax errors and easily identifiable by PHP Lint or Error Reporting, some are logical errors. Logical may not trigger any error or warning, but will still produce an undesirable result. They can also be difficult to find, especially for beginners. Just like with error reporting, the best way to find a logic error is to output information to the HTML page as the code is running.")]),t._v(" "),t._m(1),t._v(" "),s("p",[t._v("The following is a list of functions that allow us to output information to the page, which can help troubleshoot our PHP code.")]),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.php.net/manual/en/function.echo.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("echo")]),s("OutboundLink")],1),t._v(" function is a way of displaying strings, numbers and variables to the page.")]),t._v(" "),t._m(3),s("p",[t._v('However, if the variable\'s value is an array, the echo statement will not return the values in the array. Instead will either display the string "Array", which is not all that helpful, or cause a PHP error, which is worse.')]),t._v(" "),t._m(4),t._m(5),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.php.net/manual/en/function.print-r.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("print_r()")]),s("OutboundLink")],1),t._v(" function displays human-readable information about a variable, and while it can be use on with strings and number, it more commonly used to display arrays.")]),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.php.net/manual/en/function.var-dump.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("var_dump()")]),s("OutboundLink")],1),t._v(" function take print_r to the next level, by providing even more information about variables include they current type (string, number, array, etc) and the size of the variable (number characters in the string, number items in the array). The "),s("code",[t._v("var_dump()")]),t._v(" function also display arrays in a nice, human readable format.")]),t._v(" "),t._m(10),t._m(11),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.php.net/manual/en/function.gettype.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("gettype()")]),s("OutboundLink")],1),t._v(" function return the variable data type, which can be helpful if we are expecting a number instead of a string.")]),t._v(" "),t._m(12),t._m(13),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.php.net/manual/en/function.get-defined-vars.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("get_defined_vars()")]),s("OutboundLink")],1),t._v(" function will return an array of all defined variables, even the variable that are pre-defined by PHP.")]),t._v(" "),t._m(14),t._m(15),t._v(" "),s("p",[t._v("The "),s("a",{attrs:{href:"https://www.php.net/manual/en/function.debug-backtrace.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("debug_backtrace()")]),s("OutboundLink")],1),t._v(" function will return an array with a list of function calls that led up to the "),s("code",[t._v("debug_backtrace()")]),t._v(" function.")]),t._v(" "),t._m(16),t._m(17),t._v(" "),s("p",[t._v("Sometimes it is necessary to let the end user know an error has occurred, without displaying the error reporting messaging. This can be done using the "),s("a",{attrs:{href:"https://www.php.net/manual/en/function.register-shutdown-function.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("register_shutdown_function()")]),s("OutboundLink")],1),t._v(" and "),s("a",{attrs:{href:"https://www.php.net/manual/en/function.error-get-last.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[t._v("error_get_last()")]),s("OutboundLink")],1),t._v(" functions. Together, these functions can be used to create and display a custom error message, as shown below.")]),t._v(" "),t._m(18),t._v(" "),t._m(19)])},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"php-troubleshooting"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#php-troubleshooting","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP Troubleshooting")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"output-information"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#output-information","aria-hidden":"true"}},[this._v("#")]),this._v(" Output Information")])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"echo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#echo","aria-hidden":"true"}},[this._v("#")]),this._v(" echo")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I am a string"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// I am a string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I am an array"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I have many values"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"print-r"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#print-r","aria-hidden":"true"}},[this._v("#")]),this._v(" print_r")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I am an array"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I have many values"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array ([0] => I am an array [1] => I have many values)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("p",[this._v("By using the "),a("code",[this._v("print_r()")]),this._v(" function we can see all the value being stored in the array. When combined with the HTML "),a("code",[this._v("<pre>")]),this._v(" tags, the output of the "),a("code",[this._v("print_r()")]),this._v(" function when be neatly formatted when displayed.")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("pre")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I am an array"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I have many values"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("print_r")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Array ([0] => I am an array [1] => I have many values)")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("pre")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"var-dump"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#var-dump","aria-hidden":"true"}},[this._v("#")]),this._v(" var_dump")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" \n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I am an array"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I have many values"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var_dump")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v('// array(2) {[0] => string(13) "I am an array" [1] => string(18) "I have many values"}')]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"gettype"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#gettype","aria-hidden":"true"}},[this._v("#")]),this._v(" gettype")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gettype")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$number")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// integer")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("gettype")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// string")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"get-defined-vars"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-defined-vars","aria-hidden":"true"}},[this._v("#")]),this._v(" get_defined_vars")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$number")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$string")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'3'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$array")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I am an array"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"I have many values"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var_dump")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("get_defined_vars")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h3",{attrs:{id:"debug-backtrace"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#debug-backtrace","aria-hidden":"true"}},[this._v("#")]),this._v(" debug_backtrace")])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("say_hello_to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$word")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"Hello '),s("span",{pre:!0,attrs:{class:"token interpolation"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$word")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])]),t._v('<br>"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("var_dump")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("debug_backtrace")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n  "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("say_hello_to")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[t._v("'Everyone'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])},function(){var t=this.$createElement,a=this._self._c||t;return a("h2",{attrs:{id:"graceful-handling-of-fatal-errors"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#graceful-handling-of-fatal-errors","aria-hidden":"true"}},[this._v("#")]),this._v(" Graceful Handling of Fatal Errors")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),a("p",[this._v("This technique will not work if there is a syntax error on the page.")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token php language-php"}},[s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("<?php")]),t._v(" \n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("register_shutdown_function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$error")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("error_get_last")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("empty")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$error")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token double-quoted-string string"}},[t._v('"Huston, we have a problem."')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token delimiter important"}},[t._v("?>")])]),t._v("\n")])])])}],!1,null,null,null);a.default=n.exports}}]);