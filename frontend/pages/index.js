import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";

class Index extends Component {
  static async getInitialProps(context) {
    const pageRes = await fetch(
      `${Config.apiUrl}/wp-json/postlight/v1/page?slug=welcome`
    );
    const page = await pageRes.json();
    const postsRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/posts?_embed`);
    const posts = await postsRes.json();
    const pagesRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/pages?_embed`);
    const pages = await pagesRes.json();
    return { page, posts, pages };
  }

  render() {
    const posts = this.props.posts.map((post, index) => {
      return (
        <ul key={index}>
          <li>
            <Link
              as={`/post/${post.slug}`}
              href={`/post?slug=${post.slug}&apiRoute=post`}
            >
              <a>{post.title.rendered}</a>
            </Link>
          </li>
        </ul>
      );
    });
    const pages = this.props.pages.map((page, index) => {
      return (
        <ul key={index}>
          <li>
            <Link
              as={`/page/${page.slug}`}
              href={`/post?slug=${page.slug}&apiRoute=page`}
            >
              <a>{page.title.rendered}</a>
            </Link>
          </li>
        </ul>
      );
    });
    return (
      <Layout
        headerMenu={this.props.headerMenu}
        footerMenu={this.props.footerMenu}
      >
        <div className="merchants">
          <h1 className="merchants__title stc-h1">Merchant Locations</h1>
          <div className="merchants__filter">
            <div className="filter">
              <h4 className="filter__text stc-h4">Filter Merchants</h4>
            </div>
            <div className="map"></div>
          </div>
          <form className="merchants__form">
            <div className="registration-form__header">
              <h1 className="form-header__title stc-h1">Merchant Registration</h1>
              <h4 className="form-header__desc stc-h4">Tell us which brand you want to see at STC Pay Network</h4>
            </div>
            <div className="registration-form__group">
              <label htmlFor="full-name" className="group__label">Full Name</label>
              <input id="full-name" type="text" placeholder="Full Name" className="group__input"/>

              <label htmlFor="email" className="group__label">Email</label>
              <input id="email" type="text" placeholder="Email address" className="group__input"/>

              <button className="group__button">Send</button>
            </div>
          </form>
        </div>
        {/* <h1>{this.props.page.title.rendered}</h1> */}
        {/* <div
        dangerouslySetInnerHTML={{
          __html: this.props.page.content.rendered
        }}
        /> */}
      </Layout>
    );
  }
}

export default PageWrapper(Index);
