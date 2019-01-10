import React, { Component } from "react";
import Link from "next/link";
import Head from "next/head";
import Menu from "./Menu.js";
import { Config } from "../config.js";
import stylesheet from "../src/styles/style.scss";

class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Head>
        <style dangerouslySetInnerHTML={{ __html: stylesheet }} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="The Saudi Digital Payments Company (SDPC) is a limited liability company fully owned by the Saudi Telecom Company Group (STC Group)."
        />
        <meta
          name="keywords"
          content="STC Pay, Digital Payments, Digital Wallet, about STC Pay"
        />
        <title>STC PAY | Merchant Services</title>
        <link
          rel="icon"
          type="image/x-icon"
          sizes="16x16 32x32"
          href="/static/favicon.ico"
        />
      </Head>
    );
  }
}

export default Header;
