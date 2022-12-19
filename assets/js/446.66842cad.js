(window.webpackJsonp=window.webpackJsonp||[]).push([[446],{664:function(t,s,n){"use strict";n.r(s);var a=n(0),e=Object(a.a)({},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"content"},[t._m(0),t._v(" "),n("div",{staticClass:"watch"},[n("p",[n("a",{attrs:{href:"https://www.linkedin.com/learning/sass-essential-training/conditional-if-statements-and-argument-lists",target:"_blank",rel:"noopener noreferrer"}},[t._v('Watch "Conditional @if statements and argument lists" on LinkedIn Learning'),n("OutboundLink")],1)])]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"https://sass-lang.com/documentation/at-rules/control/if",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("@if")]),n("OutboundLink")],1),t._v(" statement in Sass controllers whether or not it block gets evaluated, which include emitting any CSS that might be inside. The "),n("code",[t._v("@if")]),t._v(" includes an expression, which return "),n("code",[t._v("true")]),t._v(" or "),n("code",[t._v("false")]),t._v(". If the expression is "),n("code",[t._v("true")]),t._v(", the block is evaluated.")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"https://sass-lang.com/documentation/at-rules/control/if#else-if",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("@else")]),n("OutboundLink")],1),t._v(" statement can following an "),n("code",[t._v("@if")]),t._v(" statement. The "),n("code",[t._v("@else")]),t._v(" block will evaluate if the "),n("code",[t._v("@if")]),t._v(" expression is "),n("code",[t._v("false")]),t._v(".")]),t._v(" "),n("p",[t._v("The "),n("a",{attrs:{href:"https://sass-lang.com/documentation/at-rules/control/if#else-if",target:"_blank",rel:"noopener noreferrer"}},[n("code",[t._v("@else if")]),n("OutboundLink")],1),t._v(" statement can be used when more than one condition needs to be tested. The "),n("code",[t._v("@else if")]),t._v(" block is evaluated only if the preceding "),n("code",[t._v("@if")]),t._v("’s expression returns "),n("code",[t._v("false")]),t._v(" and the "),n("code",[t._v("@else if")]),t._v("’s expression returns "),n("code",[t._v("true")]),t._v(".")]),t._v(" "),t._m(1),n("div",{staticClass:"try"},[n("p",[n("a",{attrs:{href:"https://www.sassmeister.com/gist/026e4ae52e9eebec8db8762544c179e7",target:"_blank",rel:"noopener noreferrer"}},[t._v("Try it yourself on Sassmeister"),n("OutboundLink")],1)])])])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"sass-if-statements"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#sass-if-statements","aria-hidden":"true"}},[this._v("#")]),this._v(" Sass @if Statements")])},function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"language-scss extra-class"},[n("pre",{pre:!0,attrs:{class:"language-scss"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@mixin")]),t._v(" breakpoint "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$size")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token selector"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$size")]),t._v(" == 'medium' ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 640px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" \n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@else if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token selector"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$size")]),t._v(" == 'large' ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1024px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@else if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token selector"}},[n("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$size")]),t._v(" == 'xlarge' ")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@media")]),t._v(" screen "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("and")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("min-width")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@content")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@else")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token atrule"}},[n("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@error")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Unknown size #{$size}."')]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\nmain")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-gap")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 5px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 1fr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("breakpoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'medium'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("3"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("breakpoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'large'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px 1fr 1fr 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("@include")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("breakpoint")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'xlarge'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("display")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" grid"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token property"}},[t._v("grid-template-columns")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" 200px "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("repeat")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("4"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 1fr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" 200px"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])}],!1,null,null,null);s.default=e.exports}}]);