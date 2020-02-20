import React from "react";
import PropTypes from "prop-types";

import { withTranslation, Link } from "../../i18n";

import Main from "../../layouts/Main";

const News = ({ t, id }) => (
  <Main title={t("h1")}>
    <div>#{id}</div>
    <Link href="/">
      <button type="button">{t("back-to-home")}</button>
    </Link>
  </Main>
);

News.getInitialProps = async context => {
  const { id } = context.query;
  return { id, namespacesRequired: ["second-page", "common", "footer"] };
};

News.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("news")(News);
