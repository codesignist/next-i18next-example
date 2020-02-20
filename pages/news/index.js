import React from "react";
import PropTypes from "prop-types";

import { withTranslation, Link } from "../../i18n";

import Main from "../../layouts/Main";

const News = ({ t }) => (
  <Main title={t("h1")}>
    <Link href="/">
      <button type="button">{t("back-to-home")}</button>
    </Link>
  </Main>
);

News.getInitialProps = async () => ({
  namespacesRequired: ["second-page", "common", "footer"]
});

News.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("news")(News);
