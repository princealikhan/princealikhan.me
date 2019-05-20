import { Component } from "react";

class Map extends Component {
    
    componentDidMount() {
        const map = new window.google.maps.Map(document.getElementById('map'), {
          center: { lat: 41.0082, lng: 28.9784 },
          zoom: 8
        });
    }

  render() {
    return (
      <div style={{ width: '100%', height: '100vh' }} id="map" />
    );
  }
}
export default Map;
