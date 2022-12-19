(window.webpackJsonp=window.webpackJsonp||[]).push([[345],{563:function(e,t,s){"use strict";s.r(t);var a=s(0),n=Object(a.a)({},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"content"},[e._m(0),e._v(" "),s("youtube",{attrs:{id:"yZtXl4wR-mo",citation:"griffith"}}),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"https://www.php.net/manual/en/reserved.variables.cookies.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("$_COOKIE")]),s("OutboundLink")],1),e._v(" variable is an associative array of variables passed to the current script via HTTP Cookies, which can be defined using the "),s("a",{attrs:{href:"http://php.net/manual/en/function.setcookie.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("setcookie()")]),s("OutboundLink")],1),e._v(" function.")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies",target:"_blank",rel:"noopener noreferrer"}},[e._v("Cookies"),s("OutboundLink")],1),e._v(" are ways for websites to store bits of data in the browser could then be used for numerous application like identifying and tracking users. Beyond the name and value of a cookie, other options can be set when creating a cookie, including which subdomain to use and whether is the cookie should be passed over HTTPS.")]),e._v(" "),e._m(1),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"http://php.net/manual/en/function.setcookie.php",target:"_blank",rel:"noopener noreferrer"}},[s("code",[e._v("setcookie()")]),s("OutboundLink")],1),e._v(" function is used to set a new cookie. With the "),s("code",[e._v("setcookie()")]),e._v(", all possible cookie options can be set, but only the name is required.")]),e._v(" "),e._m(2),e._m(3),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6)],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"cookies"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#cookies","aria-hidden":"true"}},[this._v("#")]),this._v(" Cookies")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"set-a-cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-a-cookie","aria-hidden":"true"}},[this._v("#")]),this._v(" Set a Cookie")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// setcookie(name, value, expire, path, domain, secure, httponly)")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("setcookie")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'food'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'pizza'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[e._v("time")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("+")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[e._v("1440")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'/'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'localhost'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[e._v("TRUE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean constant"}},[e._v("FALSE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(")")]),e._v("\n")])])])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("The code above will create a "),t("code",[this._v("food")]),this._v(" cookie with the value of 'pizza'. It will expire in 24 minutes and is only available on the secure version of localhost.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"access-a-cookie"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#access-a-cookie","aria-hidden":"true"}},[this._v("#")]),this._v(" Access a Cookie")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("PHP makes all set and accessible cookies available through the "),t("code",[this._v("$_COOKIE")]),this._v(" variable. Assuming a cookie was set using the code above, that cookie could be accessed with the following:")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"language-php extra-class"},[s("pre",{pre:!0,attrs:{class:"language-php"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("echo")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$_COOKIE")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),s("span",{pre:!0,attrs:{class:"token single-quoted-string string"}},[e._v("'food'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// pizza")]),e._v("\n")])])])}],!1,null,null,null);t.default=n.exports}}]);