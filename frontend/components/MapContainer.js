import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MerchantPin from './MerchantPin';
import { Config } from "../config.js";

class MapContainer extends Component {
  state = {
    hoveredPinId: '',
    merchants: [],
    currentDistance: 1,
    currentZoom: 13
  }

  static defaultProps = {
    center: {
      lat: 24.759324,
      lng: 46.738326
    },
    zoom: 13
  };

  componentWillMount = () => {
    this.setState({merchants: this.props.merchants});
  }

  // zoom 13 means 1 km of area. 12 is 2km, 13 is 0.5 km. the correlation is */2
  calculateDistance = zoom => {
    const {currentZoom, currentDistance} = this.state;
    if (zoom !== currentZoom) {
      return zoom > currentZoom ? currentDistance / 2 : currentDistance * 2;
    }
    return currentDistance;
  }

  setHoveredPinId = hoveredPinId => {
    this.setState({ hoveredPinId });
  }

  generateMerchantPins = () => {
    const { merchants } = this.state;
    return merchants.map(merchant => (
      <MerchantPin 
        lat={merchant.lat}
        lng={merchant.lng}
        key={merchant.id}
        setHoveredPinId={this.setHoveredPinId}
        hoveredPinId={this.state.hoveredPinId}
        merchant={merchant}
      />
    ));
  }

  onMapMove = async ({center, zoom}) => {
    const distance = this.calculateDistance(zoom);
    const merchantsData = {
      nearLatitude: center.lat,
      nearLongitude: center.lng,
      nearDistance: distance,
      limit: 100
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

    this.setState({ merchants, currentZoom: zoom, currentDistance: distance});
  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAsoAUjJEkd17dakXlU69BIYwUtEH0jRfg' }}
          defaultCenter={this.props.center}
          center={this.state.center}
          defaultZoom={this.props.zoom}
          onChange={this.onMapMove}
        >
          {this.generateMerchantPins()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;