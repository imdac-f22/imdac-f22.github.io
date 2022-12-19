(window.webpackJsonp=window.webpackJsonp||[]).push([[159],{377:function(e,t,i){"use strict";i.r(t);var r=i(0),s=Object(r.a)({},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"content"},[e._m(0),e._v(" "),e._m(1),e._v(" "),i("p",[e._v("Responsive images are images that adapt to the context of a user’s device.  The purpose is to serve up an image that is appropriate to the resolution, size and orientation of the viewport it will be rendered on, while maintaining the style and intent of the author’s design.")]),e._v(" "),i("p",[e._v("There are effectively two problems that responsive images seek to solve:")]),e._v(" "),e._m(2),e._v(" "),i("p",[e._v("The resolution switching problem can be decomposed into two parts:")]),e._v(" "),e._m(3),e._v(" "),i("p",[e._v("The art direction problem can be described as the desire to use different images to suit different display sizes or orientations.")]),e._v(" "),i("p",[e._v("We’ll explore these in the next two modules.")]),e._v(" "),e._m(4),e._v(" "),e._m(5),e._v(" "),e._m(6),e._v(" "),i("p",[e._v("If the image above happens to have a resolution of 1000px x 1000px but the viewport is only 480px wide there’s a significant amount of data that isn’t rendered. Furthermore, there’s a potential waste of bandwidth to fetch resources that could have been optimized without impacting user experience.")]),e._v(" "),i("p",[e._v("Another situation could arise where the image resolution isn’t high enough to take advantage of higher resolution display resulting in blurry or pixelate images.")]),e._v(" "),i("p",[e._v("As mobile devices with different viewport sizes, pixel densities and aspect ratios proliferated, a need arose to conditionally serve up images appropriate to the device context.")]),e._v(" "),e._m(7),e._v(" "),e._m(8),e._v(" "),i("Youtube",{attrs:{id:"mwu2U_Sm6LY",citation:"griffith"}}),e._v(" "),i("ul",[i("li",[e._v("Read "),i("a",{attrs:{href:"https://developers.google.com/web/fundamentals/design-and-ux/responsive/images",target:"_blank",rel:"noopener noreferrer"}},[e._v("Images  |  Web Fundamentals  |  Google Developers"),i("OutboundLink")],1)]),e._v(" "),i("li",[e._v("Read "),i("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML",target:"_blank",rel:"noopener noreferrer"}},[e._v("Images in HTML - Learn web development | MDN"),i("OutboundLink")],1)])]),e._v(" "),e._m(9),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images",target:"_blank",rel:"noopener noreferrer"}},[e._v("Responsive images - Learn web development | MDN"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://cloudfour.com/thinks/responsive-images-101-definitions/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Responsive Images 101, Part 1: Definitions - Cloud Four"),i("OutboundLink")],1)]),e._v(" "),i("li",[i("a",{attrs:{href:"https://css-tricks.com/responsive-images-youre-just-changing-resolutions-use-srcset/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Responsive Images: If you’re just changing resolutions, use srcset. | CSS-Tricks"),i("OutboundLink")],1)])]),e._v(" "),e._m(10),e._v(" "),i("ul",[i("li",[i("a",{attrs:{href:"https://developer.mozilla.org/en-US/docs/Web/HTML/Element/Img",target:"_blank",rel:"noopener noreferrer"}},[i("code",[e._v("<img>")]),e._v(" The Image element - HTML: Hypertext Markup Language | MDN"),i("OutboundLink")],1)])])],1)},[function(){var e=this.$createElement,t=this._self._c||e;return t("h1",{attrs:{id:"responsive-images"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#responsive-images","aria-hidden":"true"}},[this._v("#")]),this._v(" Responsive Images")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"preamble"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#preamble","aria-hidden":"true"}},[this._v("#")]),this._v(" Preamble")])},function(){var e=this.$createElement,t=this._self._c||e;return t("ol",[t("li",[this._v("The resolution switching problem")]),this._v(" "),t("li",[this._v("The art direction problem")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("ul",[t("li",[this._v("same image, different size")]),this._v(" "),t("li",[this._v("same size, different resolution")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"basic-image-recap"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#basic-image-recap","aria-hidden":"true"}},[this._v("#")]),this._v(" Basic Image Recap")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[this._v("Basic images are implemented on a web page through the use of the "),t("code",[this._v("<img>")]),this._v(" element.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("p",[t("code",[this._v("<img src=“img/hungry-kitten.png” alt=“A picture of an orange striped kitten eating a mouse”>")])])},function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("p",[e._v("The "),i("code",[e._v("<img>")]),e._v(" element has evolved introducing attributes that accommodate images of varying resolutions and pixel densities."),i("br"),e._v("\nThe "),i("code",[e._v("<picture>")]),e._v("  and "),i("code",[e._v("<source>")]),e._v(" elements can be used to apply different images in situations where different images are needed for art directions. In fact, the "),i("code",[e._v("<source>")]),e._v(" tag can also accommodate various resolutions conditionally loaded through the "),i("code",[e._v("media")]),e._v(" attribute.")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"further-review"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#further-review","aria-hidden":"true"}},[this._v("#")]),this._v(" Further Review")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"see-also"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#see-also","aria-hidden":"true"}},[this._v("#")]),this._v(" See Also")])},function(){var e=this.$createElement,t=this._self._c||e;return t("h2",{attrs:{id:"references"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#references","aria-hidden":"true"}},[this._v("#")]),this._v(" References")])}],!1,null,null,null);t.default=s.exports}}]);