/*
  Do not copy/paste this file. It is used internally
  to manage end-to-end test suites.
*/

const NextI18Next = require("next-i18next").default;

module.exports = new NextI18Next({
  defaultLanguage: "tr",
  otherLanguages: ["en", "de"],
  localeSubpaths: {
    en: "en",
    ar: "de"
  }
});
