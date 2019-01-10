import Head from "./Head";
import Footer from "./Footer";
import Header from "./Header";

const Layout = props => (
  <div>
    <Head />
    <Header headerMenu={props.headerMenu} />
    {props.children}
    <Footer footerMenu={props.footerMenu} />
  </div>
);

export default Layout;
