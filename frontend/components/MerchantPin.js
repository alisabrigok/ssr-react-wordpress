import React from 'react';
import MerchantInfo from './MerchantInfo';

const MerchantPin = ({ merchant, setHoveredPinId, hoveredPinId }) => {
    return (
      <div
        onMouseOver={() => setHoveredPinId(merchant.id)}
        className="pin"
      >
        <div
          className="pin__details"
          style={{"display": hoveredPinId === merchant.id ? "block" : "none"}}
        >
          <MerchantInfo 
            image={merchant.image}
            brandName={merchant.brandName}
            description={merchant.description}
            onCloseButtonClick={() => setHoveredPinId('')}
          />
        </div>
        <img src={merchant.pin} alt="location pin" className="pin__location"/>
      </div>
    );
}

export default MerchantPin;