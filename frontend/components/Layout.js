import React, { Component } from 'react';
import Head from "./Head";
import Footer from "./Footer";
import Header from "./Header";

class Layout extends Component {
  state = {
    isRtl: false
  }

  setLangDirection = () => {
    this.setState(prevState => {
      localStorage.setItem("isRtl", `${!prevState.isRtl || ''}`);
      return { isRtl: !prevState.isRtl };
    });
  }

  componentDidMount = () => {
    this.setState({ isRtl: localStorage.getItem("isRtl") })
  }

  render() {
    const rtlClass = this.state.isRtl ? 'rtl' : '';
    
    return (
      <div className={`${rtlClass}`}>
        <Head />
        <Header setLangDirection={this.setLangDirection} headerMenu={this.props.headerMenu} />
        {this.props.children}
        <Footer footerMenu={this.props.footerMenu} />
      </div>
    );
  }
} 

export default Layout;
