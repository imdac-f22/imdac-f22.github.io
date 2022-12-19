(window.webpackJsonp=window.webpackJsonp||[]).push([[576],{794:function(t,e,n){"use strict";n.r(e);var s=n(0),a=Object(s.a)({},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("p",[t._v("Challenges are opportunities to test what you have learned by interacting directly with live code.")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),n("Challenge",{attrs:{id:"vYpoRBV",title:"Vue Components: Challenge 3",tabs:"js result"}}),t._v(" "),t._m(4)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"challenge-3"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#challenge-3","aria-hidden":"true"}},[this._v("#")]),this._v(" Challenge 3")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("For this challenge, you will add functionality to the "),e("code",[this._v("text-control")]),this._v(" component. Within the "),e("code",[this._v("text-control")]),this._v(" component, there are two buttons, one for shrinking the font size of the text and the other for enlarging the text.")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v("Using the "),n("code",[t._v("v-on")]),t._v(" directive, add two "),n("code",[t._v("click")]),t._v(" listeners to the buttons. The listeners will emit the custom events "),n("code",[t._v("enlarge-text")]),t._v(" and "),n("code",[t._v("shrink-text")]),t._v(". Then have the root component listen for those custom events and increase or decrease the value of the "),n("code",[t._v("fontSize")]),t._v(" property. The "),n("code",[t._v("fontSize")]),t._v(" value should move in "),n("code",[t._v("0.1")]),t._v(" increments.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("For this challenge, you will need to edit the HTML and JavaScript.")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("details",{staticClass:"solution"},[n("summary",[n("h3",{staticStyle:{display:"inline-block"}},[t._v("Solution")])]),n("p",[t._v("We will add a "),n("code",[t._v("v-on")]),t._v(" directive to the first button in the "),n("code",[t._v("text-control")]),t._v(" component. This button will decrease the font size and, therefore, will emit the "),n("code",[t._v("shrink-text")]),t._v(" event.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text-control'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`\n    <div \n      class="btn-group" \n      role="group">\n      <button \n        type="button" \n        class="btn btn-outline-secondary fs-6"\n        @click="$emit(\'shrink-text\')">A</button>\n      <button \n        type="button" \n        class="btn btn-outline-secondary fs-5">A</button>\n    </div>\n  `')])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("Then we perform the same process on the second button, which is used to increase the font size.")]),t._v(" "),n("div",{staticClass:"language-js extra-class"},[n("div",{staticClass:"highlight-lines"},[n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("br"),n("div",{staticClass:"highlighted"},[t._v(" ")]),n("br"),n("br"),n("br"),n("br")]),n("pre",{pre:!0,attrs:{class:"language-js"}},[n("code",[t._v("app"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'text-control'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  template"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token template-string"}},[n("span",{pre:!0,attrs:{class:"token string"}},[t._v('`\n    <div \n      class="btn-group" \n      role="group">\n      <button \n        type="button" \n        class="btn btn-outline-secondary fs-6"\n        @click="$emit(\'shrink-text\')">A</button>\n      <button \n        type="button" \n        class="btn btn-outline-secondary fs-5"\n        @click="$emit(\'enlarge-text\')">A</button>\n    </div>\n  `')])]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[t._v("With both buttons set up to emit events, we now add "),n("code",[t._v("v-on")]),t._v(" directives to the "),n("code",[t._v("<font-control>")]),t._v(" custom element so the root component can listen for the custom events.")]),t._v(" "),n("div",{staticClass:"language-html extra-class"},[n("pre",{pre:!0,attrs:{class:"language-html"}},[n("code",[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("font-size-control")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@shrink-text")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fontSize -= 0.1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("@enlarge-text")]),n("span",{pre:!0,attrs:{class:"token attr-value"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("fontSize += 0.1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token tag"}},[n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("font-size-control")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}],!1,null,null,null);e.default=a.exports}}]);