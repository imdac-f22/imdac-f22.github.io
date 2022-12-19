(window.webpackJsonp=window.webpackJsonp||[]).push([[433],{651:function(s,e,t){"use strict";t.r(e);var a=t(0),n=Object(a.a)({},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"content"},[s._m(0),s._v(" "),t("p",[s._v("Because Sass is a CSS preprocessor, the Sass file must be run through a Sass compiler. For this course, we will be using the Visual Studio Code extension "),t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.live-sass",target:"_blank",rel:"noopener noreferrer"}},[s._v("Live Sass Compiler"),t("OutboundLink")],1),s._v(" for our Sass compiler. Please refer to the "),t("router-link",{attrs:{to:"/modules/tools/vscode/"}},[s._v("Visual Studio Code")]),s._v(" page for more information on installing Visual Studio Code and extensions.")],1),s._v(" "),t("div",{staticClass:"warning custom-block"},[t("p",{staticClass:"custom-block-title"},[s._v("NOTE")]),s._v(" "),t("p",[s._v("There many other options for compiling Sass. Review "),t("a",{attrs:{href:"https://sass-lang.com/install",target:"_blank",rel:"noopener noreferrer"}},[s._v("Install Sass"),t("OutboundLink")],1),s._v(" to learn more.")])]),s._v(" "),s._m(1),s._v(" "),s._m(2),s._v(" "),s._m(3),s._v(" "),t("p",[s._v("For this course, we will be using the SCSS syntax.")]),s._v(" "),s._m(4),s._v(" "),t("p",[s._v("Live Sass Compiler will compile Sass/SCSS files in real time with live browser reload, when using "),t("a",{attrs:{href:"https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer",target:"_blank",rel:"noopener noreferrer"}},[s._v("Live Server"),t("OutboundLink")],1),s._v(", and it is easy to use.")]),s._v(" "),s._m(5),s._v(" "),s._m(6),s._v(" "),s._m(7),s._v(" "),s._m(8),s._m(9),s._v(" "),t("p",[s._v("Once the Live Sass Compiler extension has been properly configured, we can complete the following steps to start compiling our Sass.")]),s._v(" "),s._m(10)])},[function(){var s=this.$createElement,e=this._self._c||s;return e("h1",{attrs:{id:"compiling-sass"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#compiling-sass","aria-hidden":"true"}},[this._v("#")]),this._v(" Compiling Sass")])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"syntax-and-file-extensions"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#syntax-and-file-extensions","aria-hidden":"true"}},[this._v("#")]),this._v(" Syntax and File Extensions")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("The default syntax for Sass is known as SCSS (Sassy CSS) and uses the file extension of "),e("code",[this._v(".scss")]),this._v(". SCSS is a superset of CSS, which means that all valid CSS is also valid SCSS.")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("The indented syntax was Sass’s original syntax, and so it uses the file extension "),e("code",[this._v(".sass")]),this._v(". Because of this extension, it’s sometimes just called “Sass”. The indented syntax supports all the same features as SCSS, but it uses indentation instead of curly braces and semicolons to describe the format of the document.")])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"configuring-live-sass-compiler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#configuring-live-sass-compiler","aria-hidden":"true"}},[this._v("#")]),this._v(" Configuring Live Sass Compiler")])},function(){var s=this.$createElement,e=this._self._c||s;return e("p",[this._v("Before we begin compiling our Sass, we will need make changes to the Live Sass Compiler settings. This is done by directly editing the Visual Studio Code "),e("code",[this._v("settings.json")]),this._v(" file.")])},function(){var s=this.$createElement,e=this._self._c||s;return e("div",{staticClass:"warning custom-block"},[e("p",{staticClass:"custom-block-title"},[this._v("NOTE")]),this._v(" "),e("p",[this._v("If you used the "),e("code",[this._v("Settings Sync")]),this._v(" extension to set up Visual Studio Code. This may already be done for you.")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ol",[t("li",[s._v("Open Visual Studio Code Command Palette ("),t("code",[s._v("ctrl+shift+p")]),s._v(" - Windows or "),t("code",[s._v("cmd+shift+p")]),s._v(" - macOS).")]),s._v(" "),t("li",[s._v("Type "),t("code",[s._v("settings.json")]),s._v(" and select "),t("code",[s._v("Preferences: Open Settings")])]),s._v(" "),t("li",[s._v("Add the following code to the end the "),t("code",[s._v("settings.json")]),s._v(" file:")])])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"language-json extra-class"},[t("pre",{pre:!0,attrs:{class:"language-json"}},[t("code",[t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"liveSassCompile.settings.formats"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"format"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"expanded"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"extensionName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".css"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"savePath"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/css/"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"format"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"compressed"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"extensionName"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('".min.css"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token property"}},[s._v('"savePath"')]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/css/"')]),s._v("\n  "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])},function(){var s=this.$createElement,e=this._self._c||s;return e("h2",{attrs:{id:"using-live-sass-compiler"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-live-sass-compiler","aria-hidden":"true"}},[this._v("#")]),this._v(" Using Live Sass Compiler")])},function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ol",[t("li",[s._v("With a Sass file open, click "),t("code",[s._v("Watch Sass")]),s._v(" in the Statusbar to start the live compilation.")]),s._v(" "),t("li",[s._v("All Sass files (partials will be ignored) will be compiled and stored in the "),t("code",[s._v("/css/")]),s._v(" folder. Two versions of the CSS will be created. A development version with an extension of "),t("code",[s._v(".css")]),s._v(" and a production version with an extension of "),t("code",[s._v(".min.css")]),s._v(". The production version will be compressed.")]),s._v(" "),t("li",[s._v("The extension will continue to "),t("code",[s._v("watch")]),s._v(" for changes and automatically compile the Sass files as changes are made. To stop, click "),t("code",[s._v("Watching...")]),s._v(" in the Statusbar.")])])}],!1,null,null,null);e.default=n.exports}}]);