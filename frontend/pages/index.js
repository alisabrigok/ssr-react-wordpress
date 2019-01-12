import Layout from "../components/Layout.js";
import React, { Component } from "react";
import fetch from "isomorphic-unfetch";
import Link from "next/link";
import PageWrapper from "../components/PageWrapper.js";
import Menu from "../components/Menu.js";
import { Config } from "../config.js";
import MapContainer from '../components/MapContainer';

class Index extends Component {
  state = {
    name: '',
    email: '',
    partner: ''
  }

  static async getInitialProps(context) {
    try {
      const pagesRes = await fetch(`${Config.apiUrl}/wp-json/wp/v2/pages?_embed`);
      const pages = await pagesRes.json();
  
      const merchantsData = {
        nearLatitude: 24.759324,
        nearLongitude: 46.738326,
        nearDistance: 2,
        limit: 200
      };
  
      const nearMerchantsRes = await fetch(
      `${Config.stcUrl}/merchants`,
      {
        method: 'POST',
        mode: "cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(merchantsData)
      });
  
      const nearMerchants = await nearMerchantsRes.json();
      const merchants = nearMerchants.items.map(merchant => ({
        id: merchant.id,
        brandName: merchant.brandName,
        image: merchant.imageUrl,
        description: merchant.category.desc,
        pin: merchant.category.imageUrlPin,
        lat: merchant.address.latitude || '',
        lng: merchant.address.longitude || '',
      }));

      return { pages, merchants };
    } catch (error) {
      console.log(error);
    }
  }

  nameInputChangeHandler = event => {
    this.setState({ name: event.target.value });
  }

  emailInputChangeHandler = event => {
    this.setState({ email: event.target.value });
  }

  partnerInputChangeHandler = event => {
    this.setState({ partner: event.target.value });
  }

  formSubmitHandler = async (event) => {
    event.preventDefault();
    
    const { name, email, partner } = this.state;
    const formData = new URLSearchParams({yourname: name, youremail: email, yourpartner: partner}); //somehow application/json didn't work, so applied this workaround
    const response = await fetch(
    `${Config.apiUrl}/wp-json/contact-form-7/v1/contact-forms/35/feedback`,
    {
      method: 'POST',
      mode: "cors",
      body: formData
    });
  }

  render() {
    const { name, email, partner } = this.state;

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
            <div className="map">
              <MapContainer merchants={this.props.merchants} />            
            </div>
          </div>
          <form className="merchants__form">
            <div className="registration-form__header">
              <h1 className="form-header__title stc-h1">Merchant Registration</h1>
              <h4 className="form-header__desc stc-h4">Tell us which brand you want to see at STC Pay Network</h4>
            </div>
            <div className="registration-form__group">
              <label htmlFor="full-name" className="group__label">Full Name</label>
              <input id="full-name" value={name} type="text" placeholder="Full Name" className="group__input" onChange={this.nameInputChangeHandler}/>

              <label htmlFor="email" className="group__label">Email</label>
              <input id="email" value={email} type="email" placeholder="Email address" className="group__input" onChange={this.emailInputChangeHandler}/>

              <label htmlFor="partner" className="group__label">Suggested Partner Name</label>
              <input id="partner" value={partner} type="text" placeholder="Please Select" className="group__input" onChange={this.partnerInputChangeHandler}/>

              <button className="group__button" onClick={this.formSubmitHandler}>Send</button>
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
