import React from "react";
import { Config } from "../config.js";

const PageWrapper = Comp =>
  class extends React.Component {
    static async getInitialProps(args) {
      const headerMenuRes = await fetch(
        `${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`
      );
      const footerMenuRes = await fetch(
        `${Config.apiUrl}/wp-json/menus/v1/menus/footer-menu`
      );
      const headerMenu = await headerMenuRes.json();
      const footerMenu = await footerMenuRes.json();
      return {
        headerMenu,
        footerMenu,
        ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
      };
    }
    render() {
      return <Comp {...this.props} />;
    }
  };

export default PageWrapper;
