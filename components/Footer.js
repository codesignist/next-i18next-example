import React from "react";
import PropTypes from "prop-types";

import { version } from "next-i18next/package.json";

import { i18n, withTranslation } from "../i18n";

const Footer = ({ t }) => (
  <footer>
    <p>{t("description")}</p>
    <p>next-i18next v{version}</p>
    <p>
      <button type="button" onClick={() => i18n.changeLanguage("tr")}>
        TR
      </button>
      <button type="button" onClick={() => i18n.changeLanguage("en")}>
        EN
      </button>
      <button type="button" onClick={() => i18n.changeLanguage("de")}>
        DE
      </button>
    </p>
  </footer>
);

Footer.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("footer")(Footer);
