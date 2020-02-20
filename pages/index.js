import React from "react";
import PropTypes from "prop-types";

import { Link, withTranslation } from "../i18n";

import Main from "../layouts/Main";

const Homepage = ({ t }) => (
  <Main title={t("h1")}>
    <Link href="/second-page">
      <button type="button">{t("to-second-page")}</button>
    </Link>
  </Main>
);

Homepage.getInitialProps = async () => ({
  namespacesRequired: ["common", "footer"]
});

Homepage.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("common")(Homepage);
