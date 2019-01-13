import { Fragment } from "react";
import Menu from "./Menu";

const Header = ({ headerMenu, setLangDirection }) => {
  return (
    <Fragment>
      <div className="stc-gradient" />
      <div className="language" onClick={setLangDirection}>
        <img
          src="/static/images/lang-icon.png"
          alt="language icon"
          className="language__icon"
        />
        <div className="language__text">العربية</div>
      </div>
      <header className="header">
        <Menu menu={headerMenu} />
        <img className="header__logo" src="/static/logo.png" />
      </header>
    </Fragment>
  );
};

export default Header;
