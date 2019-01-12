import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import MerchantPin from './MerchantPin';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class MapContainer extends Component {
  state = {
    hoveredPinId: ''
  }

  setHoveredPinId = hoveredPinId => {
    this.setState({ hoveredPinId });
  }

  static defaultProps = {
    center: {
      lat: 24.759324,
      lng: 46.738326
    },
    zoom: 11
  };

  generateMerchantPins = () => {
    const { merchants } = this.props;
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

  _onBoundsChange = ({center, zoom, bounds, ...other}) => {

  }

  render() {
    return (
      <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyAsoAUjJEkd17dakXlU69BIYwUtEH0jRfg' }}
          defaultCenter={this.props.center}
          center={this.state.center}
          defaultZoom={this.props.zoom}
          onChange={this._onBoundsChange}
        >
          {this.generateMerchantPins()}
        </GoogleMapReact>
      </div>
    );
  }
}

export default MapContainer;