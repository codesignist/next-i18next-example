webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./i18n.js":
/*!*****************!*\
  !*** ./i18n.js ***!
  \*****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/
var NextI18Next = __webpack_require__(/*! next-i18next */ "./node_modules/next-i18next/dist/commonjs/index.js")["default"];

var localeSubpaths = __webpack_require__(/*! next/config */ "./node_modules/next/dist/next-server/lib/runtime-config.js")["default"]().publicRuntimeConfig.localeSubpaths;

var localeSubpathVariations = {
  none: {},
  foreign: {
    de: "de"
  },
  all: {
    en: "en",
    de: "de"
  }
};
module.exports = new NextI18Next({
  otherLanguages: ["de"],
  localeSubpaths: localeSubpathVariations[localeSubpaths]
});

/***/ })

})
//# sourceMappingURL=_app.js.a764f87bae46f8283f6e.hot-update.js.map