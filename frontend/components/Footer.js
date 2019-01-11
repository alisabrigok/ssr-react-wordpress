import React, { Component } from "react";
import Link from "next/link";

class FooterMenu extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <footer className="footer">
        <div className="footer__menu">
          <div className="footer__menu--links">
            <div className="link-group">
              <div className="link-group__item link-group__item--title">Features</div>
              <div className="link-group__item">All Features</div>
            </div>
            <div className="link-group">
              <div className="link-group__item link-group__item--title">Partners</div>
              <div className="link-group__item">Our Partners</div>
            </div>
            <div className="link-group">
              <div className="link-group__item link-group__item--title">Partners</div>
              <div className="link-group__item">Our Partners</div>
            </div>
          </div>
          <div className="footer__menu--cta cta">
            <div className="cta__social--title">Follow Us</div>
            <div className="cta__social--icons">
              <a href="https://www.facebook.com/STCPay/" target="_blank" rel="noopener noreferrer" className="social-icons">
                <img src="/static/images/facebook.png" alt="facebook logo"/>
              </a>
              <a href="https://twitter.com/STCPay" target="_blank" rel="noopener noreferrer" className="social-icons">
                <img src="/static/images/twitter.png" alt="twitter logo"/>
              </a>
              <a href="https://www.youtube.com/channel/UCvhodYsvyGNxu99LaHKUL-g" target="_blank" rel="noopener noreferrer" className="social-icons">
                <img src="/static/images/youtube.png" alt="youtube logo"/>
              </a>
              <a href="https://www.instagram.com/stcpay/" target="_blank" rel="noopener noreferrer" className="social-icons">
                <img src="/static/images/instagram.png" alt="instagram logo"/>
              </a>
              <a href="https://www.linkedin.com/company/stc-pay/" target="_blank" rel="noopener noreferrer" className="social-icons">
                <img src="/static/images/linkedin.png" alt="linkedin logo"/>
              </a>
            </div>
            <div className="cta__app--title">Download Our Application</div>
            <div className="cta__app--icons">
            <a href="https://play.google.com/store/apps/details?id=sa.com.stcpay" target="_blank" rel="noopener noreferrer" className="app-icons">
              <img src="/static/images/play-store.png" alt="google play logo" />
            </a>
            <a href="https://app.adjust.com/j79f47b" target="_blank" rel="noopener noreferrer" className="app-icons">
              <img src="/static/images/app-store.png" alt="app store logo" />
            </a>
            </div>
          </div>
        </div>
        <div className="copyright">
          <div className="copyright__info">
            <img className="copyright__info--logo" src="/static/images/footerlogo.png" alt="brand footer logo" />
            <span className="copyright__info--text">
              Copyright © 2018 Saudi Digital Payment Company All rights reserved.
            </span>
          </div>
          <div className="copyright__privacy">
            <span className="copyright__privacy--link">Privacy Policy</span>
            <span> . </span>
            <span className="copyright__privacy--link">Sitemap</span>
          </div>
        </div>
      </footer>
    )
  }
}

export default FooterMenu;
