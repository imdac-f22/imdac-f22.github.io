(window.webpackJsonp=window.webpackJsonp||[]).push([[575],{793:function(t,a,s){"use strict";s.r(a);var e=s(0),n=Object(e.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("Challenges are an opportunity to test what you have learned by interacting directly with live code.")]),t._v(" "),s("p",[t._v("For this challenge, you will create an "),s("code",[t._v("alert-box")]),t._v(" component with a customizable style and text using slots and props. The alert box component should be based on the "),s("a",{attrs:{href:"https://getbootstrap.com/docs/5.2/components/alerts/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Bootstrap Alerts component"),s("OutboundLink")],1),t._v(".")]),t._v(" "),t._m(1),t._v(" "),s("Challenge",{attrs:{id:"NWXQwEb",title:"Vue Components: Challenge 2",tabs:"js result"}}),t._v(" "),t._m(2)],1)},[function(){var t=this.$createElement,a=this._self._c||t;return a("h1",{attrs:{id:"challenge-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#challenge-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Challenge 2")])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),a("p",[this._v("For this challenge, you will need to edit the HTML and JavaScript. The Bootstrap framework has already been added.")])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("details",{staticClass:"solution"},[s("summary",[s("h3",{staticStyle:{display:"inline-block"}},[t._v("Solution")])]),s("p",[t._v("From the Bootstrap documentation, we can conclude the component's template will require a slot for the customizable text and a "),s("code",[t._v("variant")]),t._v(" prop to specify the alert's style.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("div")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("class")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert alert-[variant prop]"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("role")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("alert"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("\x3c!-- slot output --\x3e")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("div")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),s("p",[t._v("For this challenge, we can use global registration to create the "),s("code",[t._v("alert-box")]),t._v(" component. We declare that the "),s("code",[t._v("variant")]),t._v(" attribute should be used as a prop using the "),s("code",[t._v("props")]),t._v(" property. The template will contain a dynamic "),s("code",[t._v("class")]),t._v(" attribute to set the alert's style using the "),s("code",[t._v("variant")]),t._v(" prop. The "),s("code",[t._v("<slot>")]),t._v(" element will be placed between the "),s("code",[t._v("<div>")]),t._v(" tags to allow for custom content.")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[t._v("app"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("component")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'alert-box'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  props"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'variant'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  template"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token template-string"}},[s("span",{pre:!0,attrs:{class:"token string"}},[t._v('`\n  <div class="alert" :class="\'alert-\' + variant" role="alert">\n      <slot></slot>\n  </div>\n  `')])]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("In the HTML, we will use the "),s("code",[t._v("alert-box")]),t._v(" component by calling the "),s("code",[t._v("<alert-box>")]),t._v(" custom element and adding the "),s("code",[t._v("variant")]),t._v(" attribute and content between the "),s("code",[t._v("<alert-box>")]),t._v(" tags.")]),t._v(" "),s("div",{staticClass:"language-html extra-class"},[s("pre",{pre:!0,attrs:{class:"language-html"}},[s("code",[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("alert-box")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("variant")]),s("span",{pre:!0,attrs:{class:"token attr-value"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("success"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("strong")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("Yes!"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("strong")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" I did it.\n"),s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token tag"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("alert-box")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])])}],!1,null,null,null);a.default=n.exports}}]);