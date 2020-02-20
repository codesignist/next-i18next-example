import React from "react";
import PropTypes from "prop-types";

import { withTranslation } from "../i18n";

import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = ({ t, title, children }) => (
  <>
    <main>
      <Header title={title} />
      <div>{children}</div>
    </main>
    <Footer />
  </>
);

Main.getInitialProps = async () => ({
  namespacesRequired: ["footer"]
});

Main.propTypes = {
  t: PropTypes.func.isRequired
};

export default withTranslation("footer")(Main);
