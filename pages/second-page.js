import React from "react";
import PropTypes from "prop-types";

import { withTranslation, Link } from "../i18n";

import Main from "../layouts/Main";

const SecondPage = ({ t }) => (
  <Main title={t("h1")}>
    <Link href="/">
      <button type="button">{t("back-to-home")}</button>
    </Link>
  </Main>
);

SecondPage.getInitialProps = async () => ({
  namespacesRequired: ["second-page", "footer"]
});

SecondPage.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("second-page")(SecondPage);
