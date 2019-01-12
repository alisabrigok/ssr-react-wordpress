import React from "react";
import { Config } from "../config.js";

const PageWrapper = Comp =>
  class extends React.Component {
    static async getInitialProps(args) {
      try {
        const response = await Promise.all([
          fetch(`${Config.apiUrl}/wp-json/menus/v1/menus/header-menu`),
          // fetch(`${Config.apiUrl}/wp-json/menus/v1/menus/footer-menu-column1`),
          // fetch(`${Config.apiUrl}/wp-json/menus/v1/menus/footer-menu-column2`),
          // fetch(`${Config.apiUrl}/wp-json/menus/v1/menus/footer-menu-column3`),
          // fetch(`${Config.apiUrl}/wp-json/menus/v1/menus/footer-menu-column4`),
        ]);
        const parsedResponse = await Promise.all(response.map(res => res.json()));

        return {
          headerMenu: parsedResponse[0],
          footerMenu: parsedResponse.slice(1),
          ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
        };
      } catch (error) {
        return {
          headerMenu: [],
          footerMenu: [],
          error,
          ...(Comp.getInitialProps ? await Comp.getInitialProps(args) : null)
        }
      }
    }
    render() {
      return <Comp {...this.props} />;
    }
  };

export default PageWrapper;
