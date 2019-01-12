import { Fragment } from "react";
import Menu from "./Menu";

const MerchantInfo = ({ brandName, image, description, onCloseButtonClick }) => {
  return (
    <div className="info">
      <div className="info__close" onClick={onCloseButtonClick}>&times;</div>
      {image && (<img src={image} alt="merchant logo" className="info__logo"/>)}
      <div className="info__title">{brandName}</div>
      <div className="info__description">{description}</div>
    </div>
  );
};

export default MerchantInfo;
